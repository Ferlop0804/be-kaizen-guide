import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://be-kaizen-guide.lovable.app',
  'http://localhost:8080',
  'http://localhost:5173',
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin || '') 
    ? origin! 
    : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
  };
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Per hour

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

const MIN_SUBMISSION_TIME_MS = 3000;

// Server-side validation schema
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
  message: z.string()
    .max(1000, "El mensaje no puede exceder 1000 caracteres")
    .optional()
    .nullable(),
  website: z.string().max(0, "Invalid submission").optional().nullable(),
  _loadedAt: z.number().optional(),
});

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

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
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('cf-connecting-ip') || 
               'unknown';

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

    const body = await req.json();
    console.log('Received sales inquiry submission');

    // Honeypot check
    if (body.website && body.website.trim() !== '') {
      console.log('Honeypot triggered - bot detected');
      return new Response(
        JSON.stringify({ success: true, message: 'Solicitud recibida correctamente' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Timing check
    if (body._loadedAt) {
      const submissionTime = Date.now() - body._loadedAt;
      if (submissionTime < MIN_SUBMISSION_TIME_MS) {
        console.log(`Submission too fast (${submissionTime}ms) - possible bot`);
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

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert into database
    const { error: insertError } = await supabase
      .from('sales_inquiries')
      .insert({
        full_name: data.fullName,
        company: data.company,
        email: data.email,
        message: data.message || null
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Error al guardar la solicitud' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Sales inquiry saved successfully');

    // TODO: Add email notification with Resend when RESEND_API_KEY is configured
    // const resendApiKey = Deno.env.get('RESEND_API_KEY');
    // if (resendApiKey) { ... send email to contacto@bekaizen-ai.com ... }

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
