import { readDxpDisplay, type DxpDisplay } from "./dxp-display";
import { formatArtifactDate } from "./dxp-consent-artifact";

type JsonObject = Record<string, unknown>;
function object(value: unknown): JsonObject {
  return value && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {};
}
function text(value: unknown): string {
  if (value == null) return "";
  return typeof value === "object" ? JSON.stringify(value) : String(value);
}

export function readDxpNotice(rawBody: Uint8Array) {
  try {
    const body = object(JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(rawBody)));
    if (body.event !== "notice.accepted") return null;
    const notice = object(body.notice);
    const display = readDxpDisplay(rawBody);
    const fiduciary = { ...object(body.data_fiduciary), ...object(notice.data_fiduciary ?? notice.fiduciary) };
    const recipient = { ...object(body.data_recipient), ...object(notice.data_recipient ?? notice.recipient) };
    const accepted = object(body.accepted);
    const acceptedBy = object(accepted.by);
    const contact = object(notice.grievance_contact ?? fiduciary.grievance_contact ?? fiduciary.dpo ?? notice.dpo);
    const sections: DxpDisplay["sections"] = [];
    let summary = text(notice.summary ?? notice.in_short);
    let version = text(notice.version ?? notice.notice_version);
    let fiduciaryName = text(fiduciary.name);
    let recipientName = [recipient.name, recipient.organization].filter(Boolean).join(" · ");

    for (const section of display?.sections ?? []) {
      const heading = section.heading.trim().toLowerCase();
      if (["summary", "in short"].includes(heading)) {
        if (!summary) summary = section.items?.join(" ") || section.rows?.map((row) => text(row.value)).join(" ") || "";
        else sections.push(section);
      } else if (heading === "parties") {
        const remaining = section.rows?.filter((row) => {
          if (row.label.toLowerCase() === "data fiduciary") { fiduciaryName ||= text(row.value); return false; }
          if (row.label.toLowerCase() === "data recipient") { recipientName ||= text(row.value); return false; }
          return true;
        });
        if (remaining?.length) sections.push({ ...section, heading: "Recipient details", rows: remaining });
        if (!section.rows) sections.push(section);
      } else {
        sections.push({ ...section, heading: heading === "purpose" ? "Dataset and purpose" : heading === "data items" ? "Data items to be shared" : heading === "scope" ? "Scope of the data" : section.heading });
      }
      if (!version) {
        const versionRow = section.rows?.find((row) => /notice version|accepted notice/i.test(row.label));
        version = text(versionRow?.value).match(/(?:version\s*|v)([\d.]+)/i)?.[1] || "";
      }
    }

    // Older documents may provide their readable notice sections inside notice itself.
    if (sections.length === 0 && Array.isArray(notice.sections)) {
      const nested = readDxpDisplay(new TextEncoder().encode(JSON.stringify({ display: {
        title: "", subtitle: "", sections: notice.sections,
      } })));
      if (nested) sections.push(...nested.sections);
    }

    if (!summary) {
      const rows = sections.flatMap((section) => section.rows ?? []);
      const find = (labels: string[]) => text(rows.find((row) => labels.includes(row.label.toLowerCase()))?.value);
      const dataset = find(["dataset"]);
      const purpose = find(["specified purpose", "purpose"]);
      const duration = find(["duration"]);
      const dataTable = sections.find((section) => /data items/i.test(section.heading))?.table;
      if (dataset && purpose && dataTable) {
        summary = `You will receive ${dataTable.rows.length} data items from ${dataset} for ${purpose}.${duration ? ` Duration: ${duration}.` : ""}`;
      }
    }

    return {
      requestRef: text(body.request_ref),
      title: text(notice.title) || "Notice for Processing of Personal Data (Digital Personal Data Protection Act, 2023)",
      version,
      issuer: text(notice.issuer ?? notice.issued_by),
      summary,
      fiduciaryName,
      fiduciaryContact: [contact.name ?? fiduciary.dpo_name, contact.designation, contact.email ?? fiduciary.dpo_email].filter(Boolean).join(" · "),
      recipientName,
      recipientEmail: text(recipient.email ?? acceptedBy.email),
      acceptedAt: accepted.at ? formatArtifactDate(accepted.at) : "",
      noticeHash: text(body.notice_hash),
      sections,
    };
  } catch {
    return null;
  }
}

export type DxpNotice = NonNullable<ReturnType<typeof readDxpNotice>>;
