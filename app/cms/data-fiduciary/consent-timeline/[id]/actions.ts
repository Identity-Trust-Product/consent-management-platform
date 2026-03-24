"use server";
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */

import { PrismaClient, Prisma } from "@prisma/client";
import {
  TimelineEvent,
  ConsentHistoryRow,
  HistoryResponse,
  FilterOption,
  ReceiptOption,
} from "./types";
import { StorageService } from "@/lib/storageService";
import { generateConsentReceipt } from "@/lib/services/consent-receipt-service";
import { StorageFactory } from "@/lib/services/storage/storage-factory";

const prisma = new PrismaClient();

type HistorySearchParams = {
  type: string;
  "data_principal_ids[]"?: string[] | string;
  "reference_ids[]"?: string[] | string;
  "business_process_ids[]"?: string[] | string;
  start_date?: string;
  end_date?: string;
  [key: string]: any;
};

/**
 * Fetches the detailed history for the Timeline and Table views.
 */
export async function getConsentHistoryDetail(
  pathId: string,
  searchParams: HistorySearchParams
): Promise<HistoryResponse> {
  const { type, start_date, end_date } = searchParams;

  if (!type || (type !== "reference_id" && type !== "data_principal_id")) {
    throw new Error("Invalid or missing type parameter.");
  }

  // --- 1. FETCH DROPDOWN FILTER OPTIONS (Unfiltered list for the UI) ---

  let dropdownOptions: FilterOption[] = [];
  let bpOptions: FilterOption[] = [];

  if (type === "reference_id") {
    // 1. Data Principals
    const dps = await prisma.notice.findMany({
      where: { referenceId: pathId },
      select: { dataPrincipalId: true },
      distinct: ["dataPrincipalId"],
    });
    dropdownOptions = dps.map((d) => ({
      label: d.dataPrincipalId,
      value: d.dataPrincipalId,
    }));

    // 2. Business Processes
    const bps = await prisma.consent.findMany({
      where: { referenceId: pathId },
      select: {
        businessProcessId: true,
        businessProcess: { select: { name: true, code: true } },
      },
      distinct: ["businessProcessId"],
    });

    bpOptions = bps.map((b) => ({
      label: b.businessProcess.name,
      value: b.businessProcessId,
      description: b.businessProcess.code,
    }));
  } else {
    // 1. References
    const refs = await prisma.notice.findMany({
      where: { dataPrincipalId: pathId },
      select: { referenceId: true },
      distinct: ["referenceId"],
    });
    dropdownOptions = refs
      .filter((r) => r.referenceId)
      .map((r) => ({ label: r.referenceId!, value: r.referenceId! }));

    // 2. Business Processes
    const bps = await prisma.consent.findMany({
      where: { dataPrincipalId: pathId },
      select: {
        businessProcessId: true,
        businessProcess: { select: { name: true, code: true } },
      },
      distinct: ["businessProcessId"],
    });

    bpOptions = bps.map((b) => ({
      label: b.businessProcess.name,
      value: b.businessProcessId,
      description: b.businessProcess.code,
    }));
  }

  // --- 2. PARSE FILTERS ---
  const normalizeArray = (val: string | string[] | undefined) => {
    if (!val) return undefined;
    return Array.isArray(val) ? val : [val];
  };

  const filterDpIds = normalizeArray(searchParams["data_principal_ids[]"]);
  const filterRefIds = normalizeArray(searchParams["reference_ids[]"]);
  const filterBpIds = normalizeArray(searchParams["business_process_ids[]"]);

  const dateFilter: Prisma.DateTimeFilter | undefined =
    start_date || end_date ? {} : undefined;
  if (dateFilter) {
    if (start_date) dateFilter.gte = new Date(start_date);
    if (end_date) {
      const end = new Date(end_date);
      end.setHours(23, 59, 59, 999);
      dateFilter.lte = end;
    }
  }

  // --- 3. BUILD SHARED WHERE CLAUSE ---
  // We build one 'ConsentWhereInput' object to ensure CONSISTENCY between
  // the Timeline (AuditTrail) and the Receipt Dropdown (Consents).

  const consentWhere: Prisma.ConsentWhereInput = {};

  // Base Context (Reference vs Data Principal)
  if (type === "reference_id") {
    consentWhere.referenceId = pathId;
    // Apply Data Principal Filter if selected
    if (filterDpIds) {
      consentWhere.dataPrincipalId = { in: filterDpIds };
    }
  } else {
    consentWhere.dataPrincipalId = pathId;
    // Apply Reference ID Filter if selected
    if (filterRefIds) {
      consentWhere.referenceId = { in: filterRefIds };
    }
  }

  // Apply Business Process Filter
  if (filterBpIds) {
    consentWhere.businessProcessId = { in: filterBpIds };
  }

  // --- 4. FETCH TIMELINE (AUDIT TRAILS) ---
  const auditTrails = await prisma.consentAuditTrail.findMany({
    where: {
      // We filter the audit trail via the relation to Consent using the shared logic
      consent: consentWhere,
      ...(dateFilter && { timestamp: dateFilter }),
    },
    include: {
      consent: {
        include: {
          consentPurpose: true,
          processingPurpose: true,
          businessProcess: { include: { businessUnit: true } },
        },
      },
    },
    orderBy: { timestamp: "desc" },
  });

  // --- 5. TRANSFORM TIMELINE DATA ---
  const timelineEvents: TimelineEvent[] = [];
  const groupedAudits: Record<string, typeof auditTrails> = {};

  auditTrails.forEach((trail) => {
    const timeKey = trail.timestamp.toISOString().slice(0, 16);
    const serviceKey = trail.consent.businessProcessId;
    const actionKey = trail.action;

    const compositeKey = `${timeKey}|${serviceKey}|${actionKey}`;

    if (!groupedAudits[compositeKey]) groupedAudits[compositeKey] = [];
    groupedAudits[compositeKey].push(trail);
  });

  Object.entries(groupedAudits).forEach(([key, group]) => {
    const first = group[0];
    let uiType: "GRANTED" | "REVOKED" | "UPDATED" | "EXPIRED" = "UPDATED";

    switch (first.action) {
      case "GRANTED":
        uiType = "GRANTED";
        break;
      case "REVOKED":
        uiType = "REVOKED";
        break;
      case "EXPIRED":
        uiType = "EXPIRED";
        break;
      case "VERSION_UPDATED":
      case "RENEWED":
      case "SUPERCEDED":
        uiType = "UPDATED";
        break;
    }

    timelineEvents.push({
      id: `audit_${first.id}`,
      date: first.timestamp.toISOString(),
      type: uiType,
      dataPrincipal: first.dataPrincipalId,
      serviceName: first.consent.businessProcess.name || "Service",
      count: group.length,
      details: {
        sections: group.map((item) => ({
          title: `Purpose of Processing: ${item.consent.processingPurpose.name}`,
          consentPurposeName: `Purpose of Consent: ${item.consent.consentPurpose.name}`,
          description: item.consent.processingPurpose.description || "",
          isEssential: false,
          attributes: item.consent.userAttributeNames.map((name) => ({
            name,
            status: uiType === "GRANTED" ? "added" : "removed",
          })),
        })),
      },
    });
  });

  timelineEvents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // --- 6. FETCH TABLE DATA & RECEIPTS ---
  // Uses the exact same `consentWhere` filters to ensure the Receipt Dropdown matches the applied filters.
  const consentsForTable = await prisma.consent.findMany({
    where: {
      ...consentWhere,
      ...(dateFilter && { insertedAt: dateFilter }),
    },
    include: {
      processingPurpose: true,
      businessProcess: true,
    },
    orderBy: { insertedAt: "desc" },
  });

  const tableData: ConsentHistoryRow[] = consentsForTable.map((c) => ({
    consentId: c.publicId,
    referenceId: c.referenceId || "",
    dataPrincipalId: c.dataPrincipalId,
    consentedAt: c.insertedAt.toISOString(),
    purposeOfProcessing: c.processingPurpose.name,
    purposeCode: c.processingPurpose.id.toString(),
    userAttributes: c.userAttributeNames.join(", "),
    status: c.status,
  }));

  // --- 7. EXTRACT UNIQUE RECEIPT PAIRS ---
  const receiptMap = new Map<string, ReceiptOption>();

  consentsForTable.forEach((c) => {
    const key = `${c.referenceId}|${c.dataPrincipalId}|${c.businessProcess.code}|${c.businessProcess.version}`;

    if (!receiptMap.has(key)) {
      receiptMap.set(key, {
        referenceId: c.referenceId || "",
        dataPrincipalId: c.dataPrincipalId,
        processCode: c.businessProcess.code,
        version: c.businessProcess.version,
        lastUpdated: c.updatedAt.toISOString(),
      });
    }
  });

  const receiptOptions = Array.from(receiptMap.values());

  return {
    events: timelineEvents,
    tableData,
    referenceId: pathId,
    dropdownOptions,
    bpOptions,
    receiptOptions,
  };
}

/**
 * Generates a signed URL for downloading the JSON artifact.
 */
export async function generateArtifactDownloadUrl(option: ReceiptOption) {
  try {
    const storage = StorageFactory.getInstance();

    // 1. Construct the file path (Object Key) manually here.
    // This matches the format: meity/artifacts/{bp_code}-{ref_id}-{dp_id}.json
    const objectName = `meity/artifacts/${option.processCode}-${option.referenceId}-${option.dataPrincipalId}.json`;

    // 2. Use the generic getUrl method provided by the StorageAdapter interface
    // Passing 900 (seconds) for 15 minutes expiry
    const url = await storage.getUrl(objectName, 900);

    return { success: true, url };
  } catch (error: any) {
    console.error("Failed to generate download URL:", error);
    return {
      success: false,
      error: error.message || "Failed to generate download link",
    };
  }
}

/**
 * Fetches the identifiers required to view the Receipt in the CMS.
 */
export async function getReceiptViewDetails(option: ReceiptOption) {
  try {
    const businessProcess = await prisma.businessProcess.findUnique({
      where: {
        code_version: {
          code: option.processCode,
          version: option.version,
        },
      },
      select: { id: true },
    });

    if (!businessProcess) {
      return { success: false, error: "Business Process not found" };
    }

    const notice = await prisma.notice.findUnique({
      where: {
        notice_accepted_unique_index: {
          referenceId: option.referenceId,
          dataPrincipalId: option.dataPrincipalId,
          businessProcessId: businessProcess.id,
        },
      },
      select: {
        publicId: true,
        dataPrincipalId: true,
      },
    });

    if (!notice) {
      return { success: false, error: "Receipt/Notice not found" };
    }

    return {
      success: true,
      noticePublicId: notice.publicId,
      accessToken: notice.dataPrincipalId,
    };
  } catch (error: any) {
    console.error("Error fetching receipt details:", error);
    return { success: false, error: "Failed to retrieve receipt details." };
  }
}

export async function getReceiptDataForModal(option: ReceiptOption) {
  try {
    // Use the same logic you used to get IDs, but retrieve the full data object
    // Assuming 'option' contains the necessary IDs to find the noticePublicId
    // or if you can derive the ID needed for generateConsentReceipt:

    // 1. Fetch the public ID (Reuse your existing logic from getReceiptViewDetails)
    const { noticePublicId } = await getReceiptViewDetails(option); // details logic

    if (!noticePublicId) throw new Error("Notice ID not found");

    // 2. Generate the actual receipt JSON data
    const receiptData = await generateConsentReceipt(noticePublicId);

    return { success: true, data: receiptData };
  } catch (error: any) {
    console.error("Error fetching receipt data:", error);
    return { success: false, error: error.message };
  }
}
import { generateArtifactPayload } from "@/lib/services/artifact-creation-service";

export async function getArtifactData(option: ReceiptOption) {
  try {
    // Generate the Consent Artifact on-the-fly
    // This allows downloading even if the file is missing from storage (e.g. local dev)
    const artifactData = await generateArtifactPayload(
      option.dataPrincipalId,
      option.referenceId || "REF_UNKNOWN",
      option.processCode
    );

    return { success: true, data: artifactData };
  } catch (error: any) {
    console.error("Error generating artifact data:", error);
    return { success: false, error: "Failed to generate artifact." };
  }
}
