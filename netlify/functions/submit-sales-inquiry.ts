import type { Handler } from "@netlify/functions";

const ALLOWED_ORIGINS = [
  "https://bekaizen-ai.com",
  "https://www.bekaizen-ai.com",
  "http://localhost:8080",
  "http://localhost:5173",
];

function getCorsOrigin(origin: string | undefined): string {
  if (!origin) return ALLOWED_ORIGINS[0];
  if (ALLOWED_ORIGINS.includes(origin)) return origin;
  if (origin.endsWith(".lovableproject.com") || origin.endsWith(".lovable.app")) return origin;
  if (origin.endsWith(".netlify.app")) return origin;
  return ALLOWED_ORIGINS[0];
}

function corsHeaders(origin: string | undefined) {
  return {
    "Access-Control-Allow-Origin": getCorsOrigin(origin),
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

function validateBody(body: any) {
  const errors: string[] = [];
  if (!body.fullName || typeof body.fullName !== "string" || body.fullName.trim().length === 0)
    errors.push("El nombre es requerido");
  if (!body.company || typeof body.company !== "string" || body.company.trim().length === 0)
    errors.push("La empresa es requerida");
  if (!body.email || typeof body.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    errors.push("Ingresa un email válido");
  if (body.fullName && body.fullName.length > 100) errors.push("Nombre demasiado largo");
  if (body.company && body.company.length > 100) errors.push("Empresa demasiado larga");
  if (body.email && body.email.length > 255) errors.push("Email demasiado largo");
  if (body.message && body.message.length > 1000) errors.push("Mensaje demasiado largo");
  return errors;
}

const MIN_SUBMISSION_TIME_MS = 3000;

const handler: Handler = async (event) => {
  const origin = event.headers["origin"];
  const headers = { ...corsHeaders(origin), "Content-Type": "application/json" };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    // Honeypot check
    if (body.website && body.website.trim() !== "") {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, message: "Solicitud recibida correctamente" }) };
    }

    // Timing check
    if (body._loadedAt) {
      const elapsed = Date.now() - body._loadedAt;
      if (elapsed < MIN_SUBMISSION_TIME_MS) {
        return { statusCode: 200, headers, body: JSON.stringify({ success: true, message: "Solicitud recibida correctamente" }) };
      }
    }

    // Validate
    const errors = validateBody(body);
    if (errors.length > 0) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Datos inválidos", details: errors }) };
    }

    const { fullName, company, email, message } = body;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Configuración de email no disponible" }) };
    }

    const sendEmail = async (payload: Record<string, unknown>) => {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errBody = await res.text();
        console.error("Resend error:", errBody);
      }
    };

    // Email 1: Confirmation to lead
    await sendEmail({
      from: "Be Kaizen AI <contacto@bekaizen-ai.com>",
      to: [email],
      reply_to: "contacto@bekaizen-ai.com",
      subject: "Recibimos tu consulta | Be Kaizen AI",
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#333">Hola ${fullName},</h2>
        <p>Gracias por contactar a <strong>Be Kaizen AI</strong>.</p>
        <p>Recibimos tu consulta y nuestro equipo se pondrá en contacto a la brevedad.</p>
        <p>Si necesitás información adicional, podés responder este email.</p>
        <br/>
        <p>Saludos,<br/><strong>Equipo Be Kaizen AI</strong><br/>contacto@bekaizen-ai.com<br/><a href="https://www.bekaizen-ai.com">www.bekaizen-ai.com</a></p>
      </div>`,
    });

    // Email 2: Internal notification
    await sendEmail({
      from: "Be Kaizen AI <contacto@bekaizen-ai.com>",
      to: ["contacto@bekaizen-ai.com", "fernando.lopez@bekaizen-ai.com"],
      reply_to: email,
      subject: "Nueva consulta de ventas",
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#333">Nueva consulta de ventas</h2>
        <p><strong>Nombre:</strong> ${fullName}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message || "No especificado"}</p>
        <hr style="margin:16px 0"/>
        <p style="color:#666"><em>Acción recomendada: Contactar dentro de las próximas 24 hs.</em></p>
      </div>`,
    });

    console.log("Sales inquiry processed, emails sent");

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "Solicitud recibida correctamente" }),
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Error interno del servidor" }) };
  }
};

export { handler };
