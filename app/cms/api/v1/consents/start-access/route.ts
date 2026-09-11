import { getApiContext } from "@/lib/api-auth-middleware";
import { ApiErrors } from "@/lib/api-errors";
import { createSuccessResponse } from "@/lib/api-response";
import prisma from "@/lib/prisma";
import { findProcessingPurposesByPoPCodes } from "@/lib/queries/consent-queries";
import { NextRequest } from "next/server";
import { z } from "zod";

const startAccessSchema = z.object({
  reference_id: z.string().min(1).max(200),
  processing_purpose_codes: z.array(z.string().min(1)).min(1),
});

const formatInIndia = (date: Date | null) =>
  date
    ? new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "medium",
        hour12: true,
      }).format(date)
    : null;

/**
 * Starts the configured consent-duration clock when a provider approves access.
 * The original consent duration is preserved, but its expiry is moved to
 * approval time + duration so the consent and ACL policy expire together.
 */
export async function POST(request: NextRequest) {
  try {
    getApiContext(request);

    const parsed = startAccessSchema.safeParse(await request.json());
    if (!parsed.success) {
      return ApiErrors.validationError(
        "Invalid request body",
        parsed.error.issues,
      );
    }

    const processingPurposeIds = await findProcessingPurposesByPoPCodes(
      parsed.data.processing_purpose_codes,
    );
    if (processingPurposeIds.length === 0) {
      return ApiErrors.validationError("No matching processing purposes found");
    }

    const now = new Date();
    const consents = await prisma.consent.findMany({
      where: {
        referenceId: parsed.data.reference_id,
        processingPurposeId: { in: processingPurposeIds },
        status: "accepted",
        isExpired: false,
        OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
      },
      orderBy: { insertedAt: "desc" },
    });

    if (consents.length === 0) {
      return ApiErrors.validationError(
        "Consent is missing, revoked, or expired",
      );
    }

    // ACL-APD stores/accepts expiry timestamps at whole-second precision.
    // Normalize here so consents.expires_at and policy.expiry_at are identical.
    const approvalTime = new Date(Math.floor(Date.now() / 1000) * 1000);
    const updatedExpiries = await prisma.$transaction(
      consents.map((consent) => {
        const configuredDurationMs = consent.consentDuration
          ? consent.consentDuration * 60 * 60 * 1000
          : null;
        const expiresAt =
          configuredDurationMs && configuredDurationMs > 0
            ? new Date(approvalTime.getTime() + configuredDurationMs)
            : null;

        return prisma.consent.update({
          where: { id: consent.id },
          data: { expiresAt },
          select: { publicId: true, expiresAt: true },
        });
      }),
    );

    const finiteExpiries = updatedExpiries
      .map((consent) => consent.expiresAt?.getTime())
      .filter((expiry): expiry is number => typeof expiry === "number");
    const accessExpiresAt =
      finiteExpiries.length > 0 ? new Date(Math.min(...finiteExpiries)) : null;

    console.info("Consent access approved", {
      reference_id: parsed.data.reference_id,
      provider_approval_time_ist: formatInIndia(approvalTime),
      expires_at_ist: formatInIndia(accessExpiresAt),
      provider_approval_time_utc: approvalTime.toISOString(),
      expires_at_utc: accessExpiresAt?.toISOString() ?? null,
    });

    return createSuccessResponse({
      approval_time: approvalTime.toISOString(),
      access_expires_at: accessExpiresAt?.toISOString() ?? null,
      consents: updatedExpiries.map((consent) => ({
        consent_id: consent.publicId,
        expires_at: consent.expiresAt?.toISOString() ?? null,
      })),
    });
  } catch (error) {
    console.error("Failed to start consent access duration:", error);
    return ApiErrors.internalError("Failed to start consent access duration");
  }
}
