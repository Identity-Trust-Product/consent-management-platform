/**
 * Returns consent history for exactly one external reference ID.
 * This is intentionally separate from /consents/validate: validation answers
 * whether access is allowed, while this endpoint supplies read-only history
 * for a provider to review during approval.
 */
import { NextRequest } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { ApiErrors } from "@/lib/api-errors";
import { createSuccessResponse } from "@/lib/api-response";
import { getApiContext } from "@/lib/api-auth-middleware";

const historyRequestSchema = z.object({
  reference_id: z.string().min(1).max(200),
});

export async function POST(request: NextRequest) {
  try {
    getApiContext(request);
    const { reference_id } = historyRequestSchema.parse(await request.json());

    const consents = await prisma.consent.findMany({
      where: { referenceId: reference_id },
      include: {
        processingPurpose: {
          include: { purposeOfProcessing: true },
        },
        consentPurpose: true,
      },
      orderBy: { insertedAt: "desc" },
    });

    return createSuccessResponse({
      reference_id,
      consents: consents.map((consent) => ({
        consent_id: consent.publicId,
        status: consent.status,
        consented_at: consent.insertedAt.toISOString(),
        processing_purpose: {
          code: consent.processingPurpose.purposeOfProcessing.code,
          name: consent.processingPurpose.name,
          description: consent.processingPurpose.description,
        },
        consent_purpose: {
          code: consent.consentPurpose.code,
          name: consent.consentPurpose.name,
        },
        user_attributes: consent.userAttributeNames,
      })),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return ApiErrors.validationError("Invalid reference ID", error.errors);
    }

    console.error("Error fetching consent history by reference ID:", error);
    return ApiErrors.internalError("Failed to fetch consent history");
  }
}
