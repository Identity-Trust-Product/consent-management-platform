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

import prisma from "@/lib/prisma";
import { TimelineEvent, TimelineEventType, TimelineSection } from "./types";

export async function getTimelineData(
  dataPrincipalId: string,
  majorDataPrincipalId?: string
) {
  try {
    const rawAuditLogs = await prisma.consentAuditTrail.findMany({
      where: {
        dataPrincipalId,
        ...(majorDataPrincipalId && {
          consent: {
            majorDataPrincipalId,
          },
        }),
      },
      orderBy: { timestamp: "desc" },
      include: {
        consent: {
          include: {
            businessProcess: true,
            businessProcessRule: {
              include: {
                consentPurpose: true,
                processingPurpose: {
                  include: {
                    purposeOfProcessing: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const groupedEvents = new Map<string, typeof rawAuditLogs>();

    for (const log of rawAuditLogs) {
      const details = log.details as Record<string, any> | null;
      // Group by requestId + action + businessProcessId
      const groupKey = `${log.consent.requestId}_${log.action}_${log.consent.businessProcessId}`;

      if (!groupedEvents.has(groupKey)) groupedEvents.set(groupKey, []);
      groupedEvents.get(groupKey)!.push(log);
    }

    const events: TimelineEvent[] = [];

    for (const [key, logs] of groupedEvents) {
      const firstLog = logs[0];
      const consent = firstLog.consent;

      let type: TimelineEventType = "GRANTED";
      if (firstLog.action === "REVOKED") type = "REVOKED";
      else if (
        ["VERSION_UPDATED", "RENEWED", "SUPERCEDED"].includes(firstLog.action)
      )
        type = "UPDATED";
      else if (firstLog.action === "EXPIRED") type = "EXPIRED";

      const sections = logs.reduce<TimelineSection[]>((acc, log) => {
        const details = log.details as any;

        const rule = log.consent.businessProcessRule;
        const pp = rule?.processingPurpose;
        const ppMaster = pp?.purposeOfProcessing;
        const cpName = rule?.consentPurpose?.name;
        const currentAttrs = log.consent.userAttributeNames || [];

        // --- 1. Filter out updates with no actual changes ---
        if (log.action === "VERSION_UPDATED") {
          const hasSpecificChanges =
            (details?.changes && details.changes.length > 0) ||
            (details?.attributesDiff && details.attributesDiff.length > 0);

          if (!hasSpecificChanges) return acc;
        }

        // --- 2. Change Summary Text ---
        let changeSummary: string[] | undefined = undefined;
        if (type === "UPDATED") {
          if (
            details?.changes &&
            Array.isArray(details.changes) &&
            details.changes.length > 0
          ) {
            changeSummary = details.changes;
          } else if (details?.reason === "New Purpose Added") {
            changeSummary = ["New Processing Purpose Added"];
          }
        } else if (type === "REVOKED") {
          changeSummary = details?.reason
            ? [details.reason]
            : ["Consent Revoked"];
        }

        // --- 3. ATTRIBUTES MERGE LOGIC (Unchanged + Diff) ---

        // Step A: Map all CURRENT attributes as 'unchanged' by default
        // (If type is GRANTED, everything is 'granted'/'added')
        const attrMap = new Map<
          string,
          "added" | "removed" | "unchanged" | "granted"
        >();

        const defaultStatus =
          type === "GRANTED"
            ? "added"
            : type === "REVOKED"
              ? "removed"
              : "unchanged";

        currentAttrs.forEach((attr) => {
          attrMap.set(attr, defaultStatus);
        });

        // Step B: Overlay the Diff from Audit Logs
        if (
          type === "UPDATED" &&
          details?.attributesDiff &&
          Array.isArray(details.attributesDiff)
        ) {
          details.attributesDiff.forEach((d: any) => {
            // 'added': Will update the existing 'unchanged' entry to 'added'
            // 'removed': Will ADD a new entry (since it's missing from currentAttrs) as 'removed'
            attrMap.set(d.name, d.status);
          });
        }

        // Step C: Convert Map back to List
        const attributesList = Array.from(attrMap.entries()).map(
          ([name, status]) => ({
            name,
            status,
          })
        );

        // Step D: Calculate Stats for the Header Badge
        let addedCount = 0;
        let removedCount = 0;
        attributesList.forEach((a) => {
          if (a.status === "added") addedCount++;
          if (a.status === "removed") removedCount++;
        });

        acc.push({
          title: pp?.name || "Data Processing",
          consentPurposeName: cpName,
          description: pp?.description || ppMaster?.description || undefined,
          translations: pp?.translations as Record<string, any> | undefined,
          consentPurposeTranslations: rule?.consentPurpose?.translations as Record<string, any> | undefined,
          isEssential: rule?.mandatory || false,
          isOptional: !rule?.mandatory,
          attributes: attributesList,
          attributesSummary: { addedCount, removedCount },
          changes: changeSummary ? { summaryText: changeSummary } : undefined,
        });

        return acc;
      }, []);

      if (sections.length > 0) {
        events.push({
          id: key,
          date: firstLog.timestamp,
          type,
          serviceName: consent.businessProcess.name,
          serviceTranslations: consent.businessProcess.translations as Record<string, any>,
          dataPrincipal: dataPrincipalId,
          isMinor: false,
          summary: type === "UPDATED" ? "Updated" : undefined,
          details: { sections },
        });
      }
    }

    return { success: true, events };
  } catch (error) {
    console.error("Timeline Error:", error);
    return { success: false, events: [] };
  }
}
