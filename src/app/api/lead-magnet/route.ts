import { NextRequest, NextResponse } from "next/server";
import { FROM_EMAIL, getResend } from "@/lib/email";

export const runtime = "nodejs";

type LeadVariant = {
  filename: string;
  pdfPath: string;
  subject: string;
  intro: string;
  bullets: string[];
};

// Prosjektmappe-varianten er midlertidig deaktivert.
// Legg den tilbake i VARIANTS når PDFen er oppdatert.
const VARIANTS: Record<string, LeadVariant> = {
  "casestudy-rosendal": {
    filename: "Slidedrain-Kundehistorie-Rosendal-Bygg.pdf",
    pdfPath: "/downloads/slidedrain-kundehistorie-rosendal-bygg.pdf",
    subject: "Din Slidedrain-kundehistorie: Rosendal Bygg",
    intro:
      "Takk for din interesse! Vedlagt finner du kundehistorien fra Rosendal Bygg og rørlegger Ole Olsen — en konkret beskrivelse av hvordan Slidedrain forenkler planlegging, montasje og kvalitet på badet.",
    bullets: [
      "Reelle sitater fra rørlegger Ole Olsen",
      "Utfordringer med bjelkelag og linjesluk",
      "Løsningen med Slidedrain og tile insert",
      "Nøkkelpunkter og resultater fra prosjektet",
    ],
  },
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, source } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Navn og e-post er påkrevd" },
        { status: 400 }
      );
    }

    const variant = typeof source === "string" ? VARIANTS[source] : undefined;

    // Ukjent / paused source: logg leadet, men ikke send noe på e-post.
    if (!variant) {
      console.log(
        `Lead captured (no email sent — source=${source ?? "unknown"}): ${name} (${email}) - ${company || "N/A"}`
      );
      return NextResponse.json({ success: true, skipped: true });
    }

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY missing — skipping send");
      return NextResponse.json({ success: true, dry: true });
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin;
    const pdfResponse = await fetch(`${baseUrl}${variant.pdfPath}`);
    const pdfArrayBuffer = await pdfResponse.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfArrayBuffer).toString("base64");

    const bulletsHtml = variant.bullets
      .map((b) => `<li>${b}</li>`)
      .join("");

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: variant.subject,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #283447;">
          <div style="padding: 40px 30px; background: linear-gradient(135deg, #283447 0%, #1a2536 100%); border-radius: 12px 12px 0 0;">
            <h1 style="color: #fb5c13; font-size: 24px; margin: 0 0 8px;">SLIDEDRAIN</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 13px;">SLUKSYSTEM</p>
          </div>
          <div style="padding: 30px; background: #ffffff; border: 1px solid #e8e8e8; border-top: none;">
            <h2 style="font-size: 20px; color: #283447; margin: 0 0 16px;">Hei ${name},</h2>
            <p style="font-size: 15px; line-height: 1.7; color: #5a6a80; margin: 0 0 20px;">
              ${variant.intro}
            </p>
            <div style="background: #f6f6f6; border-radius: 8px; padding: 20px; margin: 0 0 24px; border-left: 4px solid #fb5c13;">
              <p style="font-size: 14px; color: #283447; margin: 0 0 8px; font-weight: 600;">Innholdet inkluderer:</p>
              <ul style="font-size: 14px; color: #5a6a80; margin: 0; padding-left: 20px; line-height: 1.8;">
                ${bulletsHtml}
              </ul>
            </div>
            <p style="font-size: 15px; line-height: 1.7; color: #5a6a80; margin: 0 0 24px;">
              Ønsker du en uforpliktende gjennomgang av ditt konkrete prosjekt?
            </p>
            <a href="https://slidedrain.no/#kontakt"
               style="display: inline-block; background: #fb5c13; color: #ffffff; padding: 14px 28px;
                      border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
              Book et 15-min møte
            </a>
          </div>
          <div style="padding: 20px 30px; background: #f6f6f6; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="font-size: 12px; color: #8899aa; margin: 0;">
              Slidedrain AS &middot; slidedrain.no &middot; kontakt@slidedrain.no
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: variant.filename,
          content: pdfBase64,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Kunne ikke sende e-post", details: error.message },
        { status: 500 }
      );
    }

    console.log(
      `Lead captured (source=${source}): ${name} (${email}) - ${company || "N/A"}`
    );

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Noe gikk galt" },
      { status: 500 }
    );
  }
}
