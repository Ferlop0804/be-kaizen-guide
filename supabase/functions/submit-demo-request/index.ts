import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

// Allowed origins for CORS - restrict to known domains
const ALLOWED_ORIGINS = [
  'https://be-kaizen-guide.lovable.app',
  'http://localhost:8080',
  'http://localhost:5173',
];

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  // Allow Lovable preview origins
  if (origin.endsWith('.lovableproject.com') || origin.endsWith('.lovable.app')) return true;
  return false;
}

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = isAllowedOrigin(origin) 
    ? origin! 
    : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };
}

// Simple in-memory rate limiting (resets on function cold start)
// For production, consider using Upstash Redis or similar
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Per hour (in ms)

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// Minimum time (ms) a human would take to fill the form
const MIN_SUBMISSION_TIME_MS = 3000; // 3 seconds

// Server-side validation schema (mirrors client-side)
const formSchema = z.object({
  fullName: z.string()
    .trim()
    .min(1, "El nombre es requerido")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  company: z.string()
    .trim()
    .min(1, "La empresa es requerida")
    .max(100, "La empresa no puede exceder 100 caracteres"),
  email: z.string()
    .trim()
    .email("Ingresa un email válido")
    .max(255, "El email no puede exceder 255 caracteres"),
  challenge: z.string()
    .max(1000, "El desafío no puede exceder 1000 caracteres")
    .optional()
    .nullable(),
  // Honeypot field - should always be empty for real users
  website: z.string().max(0, "Invalid submission").optional().nullable(),
  // Timestamp when form was loaded (for timing check)
  _loadedAt: z.number().optional(),
});

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('cf-connecting-ip') || 
               'unknown';

    // Check rate limit
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ error: 'Demasiadas solicitudes. Por favor, intenta más tarde.' }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': '3600'
          } 
        }
      );
    }

    // Parse request body
    const body = await req.json();
    console.log('Received demo request submission');

    // Check honeypot field - if filled, it's a bot
    if (body.website && body.website.trim() !== '') {
      console.log('Honeypot triggered - bot detected');
      // Return success to not alert the bot, but don't process
      return new Response(
        JSON.stringify({ success: true, message: 'Solicitud recibida correctamente' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check submission timing - reject if too fast (bot behavior)
    if (body._loadedAt) {
      const submissionTime = Date.now() - body._loadedAt;
      if (submissionTime < MIN_SUBMISSION_TIME_MS) {
        console.log(`Submission too fast (${submissionTime}ms) - possible bot`);
        // Return success to not alert the bot, but don't process
        return new Response(
          JSON.stringify({ success: true, message: 'Solicitud recibida correctamente' }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Validate input
    const validationResult = formSchema.safeParse(body);
    if (!validationResult.success) {
      console.log('Validation failed');
      return new Response(
        JSON.stringify({ 
          error: 'Datos inválidos', 
          details: validationResult.error.errors.map(e => e.message)
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = validationResult.data;

    // Create Supabase client with service role for insert
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert into database
    const { error: insertError } = await supabase
      .from('demo_requests')
      .insert({
        full_name: data.fullName,
        company: data.company,
        email: data.email,
        challenge: data.challenge || null
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Error al guardar la solicitud' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Demo request saved successfully');

    return new Response(
      JSON.stringify({ success: true, message: 'Solicitud recibida correctamente' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
