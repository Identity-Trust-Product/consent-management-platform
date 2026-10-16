import { createHash, timingSafeEqual } from "node:crypto";
import { z } from "zod";

const account = z.object({ id: z.number().int(), name: z.string() }).passthrough();
const document = z.object({
  event_id: z.uuid(),
  occurred_at: z.iso.datetime({ offset: true }),
  request_ref: z.string().min(1),
  data_fiduciary: account,
  data_recipient: account.extend({ organization: z.string() }),
  display: z.object({
    title: z.string(),
    subtitle: z.string(),
    sections: z.array(z.unknown()),
  }).passthrough(),
}).passthrough();

const notice = document.extend({
  event: z.literal("notice.accepted"),
  consent_id: z.null(),
  notice: z.record(z.string(), z.unknown()),
  notice_hash: z.string().regex(/^[a-f0-9]{64}$/i),
  accepted: z.object({
    at: z.iso.datetime({ offset: true }),
    by: z.object({
      name: z.string(),
      email: z.string(),
      organization: z.string(),
      designation: z.string(),
    }).passthrough(),
  }).passthrough(),
});

const consent = document.extend({
  event: z.literal("consent.issued"),
  consent_id: z.string().min(1),
  artifact: z.record(z.string(), z.unknown()),
  signature: z.string().min(1),
  public_key_pem: z.string().min(1),
});

export type DxpEvent = "notice.accepted" | "consent.issued";
export type DxpStoredDocument = {
  event: DxpEvent;
  eventId: string;
  requestRef: string;
  consentId: string | null;
  rawBody: Buffer;
};

export function isDxpEndpoint(pathname: string): boolean {
  return pathname === "/api/dxp/notices" || pathname === "/api/dxp/consents";
}

// Inject storage so the HTTP contract can be tested without a database or Next server.
export function createDxpReceiver(
  event: DxpEvent,
  store: (document: DxpStoredDocument) => Promise<void>,
  integrationKey: () => string | undefined = () => process.env.DXP_INTEGRATION_KEY,
) {
  return async function POST(request: Request): Promise<Response> {
    const expectedKey = integrationKey();
    const suppliedKey = request.headers.get("x-api-key");
    if (!expectedKey) {
      return Response.json({ error: "DXP integration is not configured" }, { status: 503 });
    }
    // Fixed-length digests allow timing-safe comparison for arbitrary key lengths.
    if (!suppliedKey || !timingSafeEqual(
      createHash("sha256").update(suppliedKey).digest(),
      createHash("sha256").update(expectedKey).digest(),
    )) {
      return Response.json({ error: "Missing or invalid X-API-Key" }, { status: 401 });
    }

    const contentType = request.headers.get("content-type") || "";
    if (contentType.split(";", 1)[0].trim().toLowerCase() !== "application/json") {
      return Response.json({ error: "Expected application/json" }, { status: 400 });
    }

    let rawBody: Buffer;
    let body: z.infer<typeof notice> | z.infer<typeof consent>;
    try {
      rawBody = Buffer.from(await request.arrayBuffer());
      const parsed: unknown = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(rawBody));
      const result = (event === "notice.accepted" ? notice : consent).safeParse(parsed);
      if (!result.success) {
        return Response.json({ error: "Malformed document or event does not match endpoint" }, { status: 400 });
      }
      body = result.data;
      const headerEvent = request.headers.get("x-dxp-event");
      const headerId = request.headers.get("x-dxp-event-id");
      if ((headerEvent !== null && headerEvent !== body.event) ||
          (headerId !== null && headerId !== body.event_id)) {
        return Response.json({ error: "DXP headers do not match document" }, { status: 400 });
      }
    } catch {
      return Response.json({ error: "Malformed UTF-8 JSON body" }, { status: 400 });
    }

    try {
      await store({
        event,
        eventId: body.event_id,
        requestRef: body.request_ref,
        consentId: body.consent_id,
        rawBody,
      });
      return Response.json({ stored: true }, { status: 200 });
    } catch {
      // Do not log request bodies, keys, or database errors containing document data.
      console.error("DXP document storage failed");
      return Response.json({ error: "Document could not be stored; retry later" }, { status: 503 });
    }
  };
}
