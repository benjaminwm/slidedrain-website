/**
 * Slack Interactivity endpoint.
 *
 * Mottas når noen trykker på "Jeg følger opp"-knappen i en
 * kontakt-notifikasjon. Verifiserer Slack-signaturen, finner
 * brukeren som klikket, og oppdaterer den opprinnelige meldingen
 * via response_url så knappen erstattes med "Følges opp av @navn".
 *
 * Request URL i Slack app: https://slidedrain.no/api/slack/interactive
 */
import { NextRequest, NextResponse } from "next/server";
import { buildClaimedBlocks, verifySlackSignature } from "@/lib/slack";

export const runtime = "nodejs";

type SlackInteractivePayload = {
  type: string;
  user: { id: string; name?: string };
  response_url: string;
  message?: { blocks?: unknown[] };
  actions?: { action_id: string; value?: string }[];
};

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  const signingSecret = process.env.SLACK_SIGNING_SECRET;
  if (!signingSecret) {
    console.error("SLACK_SIGNING_SECRET missing");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const valid = verifySlackSignature({
    rawBody,
    timestamp: req.headers.get("x-slack-request-timestamp"),
    signature: req.headers.get("x-slack-signature"),
    signingSecret,
  });
  if (!valid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const params = new URLSearchParams(rawBody);
  const payloadRaw = params.get("payload");
  if (!payloadRaw) {
    return NextResponse.json({ error: "Missing payload" }, { status: 400 });
  }

  let payload: SlackInteractivePayload;
  try {
    payload = JSON.parse(payloadRaw);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const action = payload.actions?.[0];
  if (action?.action_id !== "follow_up_claim") {
    return new NextResponse("", { status: 200 });
  }

  const originalBlocks = payload.message?.blocks ?? [];
  const updatedBlocks = buildClaimedBlocks(originalBlocks, payload.user.id);

  void fetch(payload.response_url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      replace_original: true,
      text: `Følges opp av @${payload.user.name ?? "ukjent"}`,
      blocks: updatedBlocks,
    }),
  }).catch((err) => console.error("Slack response_url failed:", err));

  return new NextResponse("", { status: 200 });
}
