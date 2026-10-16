import { z } from "zod";

const statusSchema = z.object({
  consent_id: z.string().min(1),
  request_ref: z.string().min(1),
  status: z.string().min(1),
  display_status: z.string().min(1),
  reason: z.string().nullable(),
  status_changed_at: z.string().nullable(),
  valid_until: z.string().nullable(),
  access: z.string(),
  checked_at: z.string().min(1),
});

export type DxpStatusResult =
  | { checked: true; value: z.infer<typeof statusSchema> }
  | { checked: false };

// Only call on the server. No cache, retries, or fallback to a stored status.
export async function getDxpConsentStatus(
  consentId: string | null,
  requestRef: string,
  options: { platformUrl?: string; integrationKey?: string; fetch?: typeof fetch } = {},
): Promise<DxpStatusResult> {
  const platformUrl = options.platformUrl ?? process.env.DXP_PLATFORM_URL;
  const integrationKey = options.integrationKey ?? process.env.DXP_INTEGRATION_KEY;
  if (!platformUrl || !integrationKey) return { checked: false };

  try {
    const url = new URL(`/api/integration/consents/${encodeURIComponent(consentId || requestRef)}/status`, platformUrl);
    if (!["http:", "https:"].includes(url.protocol)) return { checked: false };
    const response = await (options.fetch ?? fetch)(url, {
      method: "GET",
      headers: { "X-API-Key": integrationKey, "Cache-Control": "no-cache" },
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return { checked: false };
    const parsed = statusSchema.safeParse(await response.json());
    if (!parsed.success || parsed.data.request_ref !== requestRef ||
        (consentId && parsed.data.consent_id !== consentId)) {
      return { checked: false };
    }
    return { checked: true, value: parsed.data };
  } catch {
    return { checked: false };
  }
}
