/**
 * Slack-integrasjon for kontaktskjema-notifikasjoner.
 *
 * Sender Block Kit-meldinger med "Jeg følger opp"-knapp til en
 * Incoming Webhook. Når noen klikker knappen, sender Slack et
 * interaktivt payload til /api/slack/interactive som oppdaterer
 * meldingen med hvem som klaimet henvendelsen.
 *
 * Miljøvariabler:
 *   SLACK_WEBHOOK_URL     — Incoming Webhook URL (server-side)
 *   SLACK_SIGNING_SECRET  — for å verifisere inbound interactivity
 */
import crypto from "crypto";

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source?: string;
  resendId?: string;
};

function resendUrl(id?: string): string | null {
  return id ? `https://resend.com/emails/${id}` : null;
}

export function buildContactBlocks(p: ContactPayload) {
  const fields: { type: "mrkdwn"; text: string }[] = [
    { type: "mrkdwn", text: `*Navn:*\n${p.name}` },
    { type: "mrkdwn", text: `*E-post:*\n<mailto:${p.email}|${p.email}>` },
  ];
  if (p.phone) fields.push({ type: "mrkdwn", text: `*Telefon:*\n${p.phone}` });
  if (p.company) fields.push({ type: "mrkdwn", text: `*Firma:*\n${p.company}` });

  const quoted = p.message
    .split("\n")
    .map((line) => `>${line}`)
    .join("\n");

  const ts = new Date().toLocaleString("nb-NO", {
    timeZone: "Europe/Oslo",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return [
    {
      type: "header",
      text: { type: "plain_text", text: `📨 Ny henvendelse: ${p.name}` },
    },
    { type: "section", fields },
    { type: "section", text: { type: "mrkdwn", text: `*Melding:*\n${quoted}` } },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `Innsendt via ${p.source || "kontaktskjema"} · ${ts}`,
        },
      ],
    },
    {
      type: "actions",
      block_id: "follow_up_action",
      elements: [
        {
          type: "button",
          action_id: "follow_up_claim",
          text: { type: "plain_text", text: "✋ Jeg følger opp", emoji: true },
          style: "primary",
          value: "claim",
        },
        ...(resendUrl(p.resendId)
          ? [
              {
                type: "button",
                action_id: "open_resend",
                text: {
                  type: "plain_text",
                  text: "📧 Åpne i Resend",
                  emoji: true,
                },
                url: resendUrl(p.resendId)!,
              },
            ]
          : []),
      ],
    },
  ];
}

export function buildClaimedBlocks(
  originalBlocks: unknown[],
  claimedByUserId: string,
) {
  const actionsBlock = originalBlocks.find(
    (b) => (b as { block_id?: string }).block_id === "follow_up_action",
  ) as
    | { elements?: { action_id?: string; url?: string }[] }
    | undefined;

  const resendBtn = actionsBlock?.elements?.find(
    (el) => el.action_id === "open_resend",
  );
  const resendLink = resendBtn?.url;

  return [
    ...originalBlocks.filter(
      (b) => (b as { block_id?: string }).block_id !== "follow_up_action",
    ),
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: resendLink
            ? `✅ *Følges opp av <@${claimedByUserId}>* · <${resendLink}|📧 Åpne i Resend>`
            : `✅ *Følges opp av <@${claimedByUserId}>*`,
        },
      ],
    },
  ];
}

export async function notifyContact(p: ContactPayload): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) {
    console.warn("SLACK_WEBHOOK_URL missing — skipping Slack notify");
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `Ny henvendelse fra ${p.name}`,
      blocks: buildContactBlocks(p),
    }),
  });

  if (!res.ok) {
    console.error("Slack webhook failed:", res.status, await res.text());
  }
}

/**
 * Verifiserer Slack-signatur per
 * https://api.slack.com/authentication/verifying-requests-from-slack
 */
export function verifySlackSignature(opts: {
  rawBody: string;
  timestamp: string | null;
  signature: string | null;
  signingSecret: string;
}): boolean {
  const { rawBody, timestamp, signature, signingSecret } = opts;
  if (!timestamp || !signature) return false;

  const tsNum = parseInt(timestamp, 10);
  if (Number.isNaN(tsNum)) return false;
  if (Math.abs(Date.now() / 1000 - tsNum) > 60 * 5) return false;

  const base = `v0:${timestamp}:${rawBody}`;
  const expected =
    "v0=" +
    crypto.createHmac("sha256", signingSecret).update(base).digest("hex");

  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
