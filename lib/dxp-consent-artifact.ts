import { readDxpDisplay } from "./dxp-display";

type JsonObject = Record<string, unknown>;
export type ArtifactTerm = { label: string; value: string; detail?: string };
export type ArtifactDataItem = {
  field: string; label: string; personalData: string; deliveredAs: string;
  treatment: string; why: string; excluded: boolean;
};

function object(value: unknown): JsonObject {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {};
}
function text(value: unknown): string {
  if (value === undefined || value === null) return "";
  if (typeof value === "string") return value;
  return typeof value === "object" ? JSON.stringify(value) : String(value);
}
function title(value: string): string {
  return value.replace(/_/g, " ").replace(/^./, (char) => char.toUpperCase());
}

export function formatArtifactDate(value: unknown): string {
  const raw = text(value);
  if (!raw) return "Not provided";
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return raw;
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit", month: "short", year: "numeric", hour: "numeric", minute: "2-digit",
    hour12: true, timeZone: "Asia/Kolkata",
  }).format(date);
}

export function readDxpConsentArtifact(rawBody: Uint8Array) {
  try {
    const rawDocument = new TextDecoder("utf-8", { fatal: true }).decode(rawBody);
    const document = object(JSON.parse(rawDocument));
    if (document.event !== "consent.issued" || !document.artifact || Array.isArray(document.artifact) || typeof document.artifact !== "object") return null;
    const artifact = object(document.artifact);
    const fiduciary = object(artifact.data_fiduciary ?? document.data_fiduciary);
    const recipient = object(artifact.data_recipient ?? document.data_recipient);
    const dataset = object(artifact.dataset);
    const purpose = object(artifact.purpose);
    const profile = object(artifact.purpose_profile);
    const approval = object(artifact.approval);
    const validity = object(artifact.validity);
    const notice = object(artifact.notice);
    const scope = object(artifact.scope);
    const display = readDxpDisplay(rawBody);
    const terms: ArtifactTerm[] = [];
    const add = (label: string, value: unknown, detail?: string) => {
      const content = text(value);
      if (content) terms.push({ label, value: content, ...(detail ? { detail } : {}) });
    };
    add("Data Fiduciary", fiduciary.name);
    add("Data recipient", [recipient.name, recipient.organization].filter(Boolean).join(" · "),
      [recipient.designation, recipient.org_type === "internal" ? "Internal team" : recipient.org_type].filter(Boolean).join(" · "));
    add("Dataset", dataset.name);
    add("Purpose profile", profile.name ?? profile.code, text(profile.summary));
    add("Purpose", purpose.code ?? purpose.name, text(purpose.description));
    add("Approval", [approval.mode === "auto" ? "Auto-approved by policy (standing purpose)" : approval.mode,
      approval.schedule].filter(Boolean).join(" · "),
      [approval.basis, approval.review, approval.authority, approval.approved_by, approval.signed_off_by].filter(Boolean).join(" · "));
    if (validity.from || validity.to) add("Validity", `${formatArtifactDate(validity.from)} → ${formatArtifactDate(validity.to)}${validity.duration_days != null ? ` (${text(validity.duration_days)} days)` : ""}`);
    if (artifact.onward_sharing != null) add("Onward sharing", artifact.onward_sharing === true ? "Permitted" : "Not permitted");
    if (notice.version || notice.accepted_at) add("Notice", [notice.version ? `v${text(notice.version)}` : "", notice.accepted_at ? `accepted ${formatArtifactDate(notice.accepted_at)}` : ""].filter(Boolean).join(", "), text(notice.hash));
    add("Issued by", artifact.issuer, artifact.issued_at ? formatArtifactDate(artifact.issued_at) : undefined);
    if (artifact.revocable != null) add("Revocable", artifact.revocable === true ? "Yes, at any time by the Data Fiduciary" : "No");

    const dataItems: ArtifactDataItem[] = (Array.isArray(artifact.data_items) ? artifact.data_items : []).map((value) => {
      const item = object(value);
      const treatment = text(item.treatment);
      const excluded = ["exclude", "excluded"].includes(treatment.toLowerCase());
      const treatments: Record<string, string> = { none: "As-is", mask: item.mask_style === "full" ? "Fully masked" : "Masked", token: "Tokenised", tokenize: "Tokenised", tokenise: "Tokenised", tokenized: "Tokenised", tokenised: "Tokenised", exclude: "Excluded", excluded: "Excluded", band: "Banded", aggregate: "Aggregated" };
      return {
        field: text(item.field), label: text(item.label ?? item.field),
        personalData: item.pii_category === "none" ? "Not personal data" : item.pii_category === "sensitive" ? "Personal data (high risk)" : item.pii_category ? "Personal data" : "Not specified",
        deliveredAs: excluded ? "—" : text(item.delivered_as ?? item.output_field ?? item.output_name ?? item.token_field ?? item.field),
        treatment: treatments[treatment] ?? (treatment ? title(treatment) : "Not specified"),
        why: text(item.why), excluded,
      };
    });

    const scopeItems = Object.entries(scope).map(([key, value]) => `${title(key)}: ${text(value)}`);
    if (scopeItems.length === 0) scopeItems.push("Rows: all rows of the dataset.");
    const obligations: ArtifactTerm[] = [];
    if (purpose.code || profile.name) obligations.push({ label: "Use only for the approved purpose", value: [purpose.code, profile.name].filter(Boolean).join(" · ") });
    if (validity.to) obligations.push({ label: "Use only until", value: formatArtifactDate(validity.to) });
    if (artifact.onward_sharing != null) obligations.push({ label: "Onward sharing", value: artifact.onward_sharing === true ? "Permitted" : "Not permitted" });
    const suppliedObligations = artifact.recipient_obligations ?? artifact.obligations;
    if (Array.isArray(suppliedObligations)) {
      suppliedObligations.forEach((value) => {
        const row = object(value);
        obligations.push({ label: text(row.label ?? row.heading) || "Obligation", value: text(row.value ?? row.description ?? value) });
      });
    } else {
      Object.entries(object(suppliedObligations)).forEach(([label, value]) => obligations.push({ label: title(label), value: text(value) }));
    }
    if (artifact.conditions) obligations.push({ label: "Data Fiduciary conditions", value: text(artifact.conditions) });
    if (artifact.processing_location) obligations.push({ label: "Processing location", value: text(artifact.processing_location) });

    // Preserve any additional display blocks, including richer obligations from DXP.
    // The history is intentionally never rendered in the CMS artifact view.
    const extraSections = display?.sections.filter((section) =>
      !["parties", "purpose", "terms", "data items", "consented data items", "history"].includes(section.heading.trim().toLowerCase()),
    ) ?? [];
    return {
      title: display?.title || "Consent artefact",
      consentId: text(document.consent_id ?? artifact.consent_id),
      requestRef: text(document.request_ref ?? artifact.request_ref),
      validFrom: text(validity.from), validUntil: text(validity.to),
      maxAccessCount: text(artifact.max_access_count), terms, dataItems, scopeItems, obligations,
      parameters: Object.entries(object(artifact.parameters)).map(([label, value]) => ({ label: title(label), value: text(value) })),
      extraDisplay: extraSections.length ? { title: "Additional document details", subtitle: "", sections: extraSections } : null,
      signedArtifactJson: JSON.stringify(artifact, null, 2),
      signature: text(document.signature), publicKeyPem: text(document.public_key_pem), rawDocument,
    };
  } catch {
    return null;
  }
}

export type DxpConsentArtifact = NonNullable<ReturnType<typeof readDxpConsentArtifact>>;
