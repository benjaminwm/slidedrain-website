import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Navn og e-post er påkrevd" },
        { status: 400 }
      );
    }

    // Read PDF from public directory
    const pdfPath = join(process.cwd(), "public", "downloads", "slidedrain-prosjektmappe.pdf");
    const pdfBuffer = readFileSync(pdfPath);

    // Send email with PDF attachment
    const { data, error } = await resend.emails.send({
      from: "Slidedrain <noreply@slidedrain.no>",
      to: email,
      subject: "Din Slidedrain Prosjektmappe",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #283447;">
          <div style="padding: 40px 30px; background: linear-gradient(135deg, #283447 0%, #1a2536 100%); border-radius: 12px 12px 0 0;">
            <h1 style="color: #fb5c13; font-size: 24px; margin: 0 0 8px;">SLIDEDRAIN</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 13px;">SLUKSYSTEM</p>
          </div>
          <div style="padding: 30px; background: #ffffff; border: 1px solid #e8e8e8; border-top: none;">
            <h2 style="font-size: 20px; color: #283447; margin: 0 0 16px;">Hei ${name},</h2>
            <p style="font-size: 15px; line-height: 1.7; color: #5a6a80; margin: 0 0 20px;">
              Takk for din interesse! Vedlagt finner du Slidedrain Prosjektmappe med komplett oversikt over
              tilvalgsnivåer, teknisk sammenligning og implementeringsguide.
            </p>
            <div style="background: #f6f6f6; border-radius: 8px; padding: 20px; margin: 0 0 24px; border-left: 4px solid #fb5c13;">
              <p style="font-size: 14px; color: #283447; margin: 0 0 8px; font-weight: 600;">Innholdet inkluderer:</p>
              <ul style="font-size: 14px; color: #5a6a80; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>Strategiske fordeler ved standardisering</li>
                <li>Tre fleksible tilvalgsnivåer</li>
                <li>Sammenligningstabell mot tradisjonelle løsninger</li>
                <li>Logistikk- og fremdriftsplan</li>
                <li>SINTEF-godkjenning og tekniske spesifikasjoner</li>
              </ul>
            </div>
            <p style="font-size: 15px; line-height: 1.7; color: #5a6a80; margin: 0 0 24px;">
              Ønsker du en uforpliktende gjennomgang av ditt konkrete prosjekt?
            </p>
            <a href="https://slidedrain.no/tilvalg#kontakt"
               style="display: inline-block; background: #fb5c13; color: #ffffff; padding: 14px 28px;
                      border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
              Book et 15-min møte
            </a>
          </div>
          <div style="padding: 20px 30px; background: #f6f6f6; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="font-size: 12px; color: #8899aa; margin: 0;">
              Slidedrain AS &middot; slidedrain.no &middot; post@slidedrain.no
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: "Slidedrain-Prosjektmappe.pdf",
          content: pdfBuffer.toString("base64"),
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Kunne ikke sende e-post" },
        { status: 500 }
      );
    }

    // TODO: Also save lead to Supabase
    console.log(`Lead captured: ${name} (${email}) - ${company || "N/A"}`);

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Noe gikk galt" },
      { status: 500 }
    );
  }
}
