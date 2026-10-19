"use server";

import prisma from "@/lib/prisma";
import { verifyPermission } from "@/lib/safe-action";
import { readDxpDisplay } from "@/lib/dxp-display";
import { readDxpConsentArtifact } from "@/lib/dxp-consent-artifact";
import { readDxpNotice } from "@/lib/dxp-notice";
import { getDxpConsentStatus } from "@/lib/services/dxp-status-service";
import { z } from "zod";

export async function viewDxpDocument(id: string) {
  await verifyPermission("CONSENT_RECORD", "READ");
  const validId = z.uuid().parse(id);
  const document = await prisma.dxpDocument.findUnique({ where: { id: validId } });
  if (!document) throw new Error("Document not found");

  // Server actions execute on every click. Do not wrap this in cache/unstable_cache.
  const status = document.event === "consent.issued"
    ? await getDxpConsentStatus(document.consentId, document.requestRef)
    : null;
  return {
    id: document.id,
    event: document.event,
    requestRef: document.requestRef,
    display: readDxpDisplay(document.rawBody),
    artifact: document.event === "consent.issued" ? readDxpConsentArtifact(document.rawBody) : null,
    notice: document.event === "notice.accepted" ? readDxpNotice(document.rawBody) : null,
    status,
  };
}
