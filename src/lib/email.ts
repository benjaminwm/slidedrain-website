/**
 * Sentrale Resend-helpers + felles email-mal-konfig.
 *
 * Bruker miljøvariabler:
 *   RESEND_API_KEY               — Resend API-key (server-side)
 *   RESEND_FROM_EMAIL            — Verifisert avsender, f.eks. "Slidedrain <noreply@slidedrain.no>"
 *   RESEND_INTERNAL_NOTIFY_EMAIL — Mottaker for interne notifications, f.eks. "kontakt@slidedrain.no"
 *
 * Verifisert sending krever at slidedrain.no er verifisert som domene
 * i Resend (DKIM + SPF i DNS).
 */
import { Resend } from "resend";

let _resend: Resend | null = null;

export function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

export const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Slidedrain <onboarding@resend.dev>";

export const INTERNAL_NOTIFY =
  process.env.RESEND_INTERNAL_NOTIFY_EMAIL || "kontakt@slidedrain.no";

/**
 * Slidedrain-mal — wrapper innhold i brand-styling.
 */
export function emailTemplate(opts: {
  preheader?: string;
  body: string;
}): string {
  const { preheader = "", body } = opts;
  return `<!DOCTYPE html>
<html lang="nb">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Slidedrain</title>
</head>
<body style="margin:0; padding:0; background:#f6f6f6; font-family:'Helvetica Neue', Arial, sans-serif;">
  ${
    preheader
      ? `<div style="display:none; max-height:0; overflow:hidden;">${preheader}</div>`
      : ""
  }
  <div style="max-width:600px; margin:0 auto; padding:24px;">
    <div style="background:linear-gradient(135deg, #283447 0%, #1a2536 100%); padding:32px; border-radius:12px 12px 0 0;">
      <h1 style="color:#fb5c13; font-size:22px; margin:0 0 6px; letter-spacing:0.5px;">SLIDEDRAIN</h1>
      <p style="color:rgba(255,255,255,0.55); margin:0; font-size:12px; letter-spacing:1px;">SLUKSYSTEM</p>
    </div>
    <div style="background:#ffffff; padding:32px; border:1px solid #e8e8e8; border-top:none; color:#283447;">
      ${body}
    </div>
    <div style="background:#283447; padding:20px 32px; border-radius:0 0 12px 12px; text-align:center;">
      <p style="font-size:12px; color:rgba(255,255,255,0.5); margin:0;">
        Slidedrain AS &middot;
        <a href="https://slidedrain.no" style="color:rgba(255,255,255,0.6); text-decoration:none;">slidedrain.no</a>
        &middot;
        <a href="mailto:kontakt@slidedrain.no" style="color:rgba(255,255,255,0.6); text-decoration:none;">kontakt@slidedrain.no</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Enkel email-validator.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
