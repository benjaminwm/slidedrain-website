/**
 * Kontakt-skjema endpoint.
 *
 * Sender to e-poster:
 *   1) Intern notification til Slidedrain om ny henvendelse
 *   2) Bekreftelse til kunden om at meldingen er mottatt
 *
 * Honeypot-felt "company_url" skal være tomt — fylt = bot, ignorer
 * stille (return 200 så bot ikke får tilbakemelding).
 */
import { NextRequest, NextResponse } from "next/server";
import {
  FROM_EMAIL,
  INTERNAL_NOTIFY,
  emailTemplate,
  getResend,
  isValidEmail,
} from "@/lib/email";
import { notifyContact } from "@/lib/slack";

export const runtime = "nodejs";

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      company,
      phone,
      message,
      source,
      company_url, // honeypot
    } = body as Record<string, string | undefined>;

    // Honeypot — silent fail
    if (company_url) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Navn, e-post og melding er påkrevd" },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Ugyldig e-postadresse" },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY missing — skipping send");
      // Still return ok so we don't expose config to the client
      return NextResponse.json({ ok: true, dry: true });
    }

    const safeName = escape(name);
    const safeEmail = escape(email);
    const safeCompany = company ? escape(company) : "";
    const safePhone = phone ? escape(phone) : "";
    const safeMessage = escape(message).replace(/\n/g, "<br>");
    const safeSource = source ? escape(source) : "nettsiden";

    // 1) Internal notification — bevisst tekst-aktig, ikke branded.
    // Føles som en vanlig mail fra kunden; svar går rett til replyTo.
    const meta: string[] = [];
    if (safePhone) meta.push(`Telefon: ${safePhone}`);
    if (safeCompany) meta.push(`Firma: ${safeCompany}`);
    const metaLines = meta.length
      ? meta.map((l) => `<div>${l}</div>`).join("")
      : "";

    const internalHtml = `<!DOCTYPE html>
<html lang="nb">
<head><meta charset="utf-8"></head>
<body style="margin:0; padding:24px; background:#ffffff; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color:#1a1a1a; font-size:15px; line-height:1.6;">
<div style="display:none; max-height:0; overflow:hidden;">Ny henvendelse fra ${safeName}</div>
<div style="max-width:560px;">
  <div style="margin:0 0 4px;"><strong>${safeName}</strong> &lt;<a href="mailto:${safeEmail}" style="color:#1a1a1a;">${safeEmail}</a>&gt;</div>
  ${metaLines}
  <div style="margin:20px 0; white-space:pre-wrap;">${safeMessage}</div>
  <hr style="border:none; border-top:1px solid #e5e5e5; margin:24px 0;">
  <div style="font-size:13px; color:#888;">
    Svar direkte på denne e-posten for å nå ${safeName}.<br>
    Innsendt via ${safeSource} fra slidedrain.no.
  </div>
</div>
</body>
</html>`;

    const internalText = [
      `${name} <${email}>`,
      phone ? `Telefon: ${phone}` : null,
      company ? `Firma: ${company}` : null,
      "",
      message,
      "",
      "—",
      `Svar direkte på denne e-posten for å nå ${name}.`,
      `Innsendt via ${source || "nettsiden"} fra slidedrain.no.`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const { data: internalData, error: internalErr } = await resend.emails.send({
      from: FROM_EMAIL,
      to: INTERNAL_NOTIFY,
      replyTo: email,
      subject: `Ny henvendelse: ${name}`,
      html: internalHtml,
      text: internalText,
    });

    if (internalErr) {
      console.error("Resend internal error:", internalErr);
      return NextResponse.json(
        { error: "Kunne ikke sende melding" },
        { status: 500 }
      );
    }

    // 2) Customer confirmation
    const confirmBody = `
      <h2 style="font-size:22px; margin:0 0 16px;">Takk for henvendelsen, ${safeName}!</h2>
      <p style="font-size:15px; color:#5a6a80; line-height:1.7; margin:0 0 20px;">
        Vi har mottatt meldingen din og kommer tilbake til deg så snart som mulig
        — vanligvis innen én arbeidsdag.
      </p>
      <div style="background:#f6f6f6; border-left:4px solid #fb5c13; padding:16px 20px; border-radius:0 8px 8px 0; margin:0 0 24px;">
        <p style="font-size:13px; color:#283447; margin:0 0 8px; font-weight:600;">Din melding</p>
        <p style="font-size:14px; color:#5a6a80; margin:0; line-height:1.7;">${safeMessage}</p>
      </div>
      <p style="font-size:14px; color:#5a6a80; line-height:1.7; margin:0;">
        I mellomtiden kan du gjerne se mer på
        <a href="https://slidedrain.no/installasjon" style="color:#fb5c13;">installasjonsveiledningen</a>
        eller <a href="https://slidedrain.no/produkter" style="color:#fb5c13;">produktene våre</a>.
      </p>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: INTERNAL_NOTIFY,
      subject: "Vi har mottatt henvendelsen din",
      html: emailTemplate({
        preheader: "Takk for at du tok kontakt med Slidedrain.",
        body: confirmBody,
      }),
    });

    console.log(`Contact: ${name} (${email}) — source: ${source || "n/a"}`);

    try {
      await notifyContact({
        name,
        email,
        phone,
        company,
        message,
        source,
        resendId: internalData?.id,
      });
    } catch (slackErr) {
      console.error("Slack notify failed:", slackErr);
    }

    return NextResponse.json({ ok: true, id: internalData?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Noe gikk galt" },
      { status: 500 }
    );
  }
}
