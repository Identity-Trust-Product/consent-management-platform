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

import { NextRequest, NextResponse } from "next/server";
import { ConsentAction, WebhookEventType } from "@prisma/client";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { sendForArtifactCreation } from "@/lib/services/artifact-creation-service";
import { triggerWebhookEvent } from "@/lib/services/webhook-service";

// 1. Define Validation Schema Inline
const PurposeMetSchema = z.object({
  data_principal_id: z.string().min(3).max(255),
  reference_id: z.string().min(3).max(255),
  company_process: z
    .object({
      code: z.string().min(1).max(20).optional(),
      version: z.number().optional(),
    })
    .optional(),
  consent_purpose: z
    .object({
      code: z.string().min(1).max(20).optional(),
      version: z.number().optional(),
    })
    .optional(),
  processing_purpose_code: z.string().min(1).max(20).optional(),
  metadata: z
    .array(
      z.object({
        key: z.string().min(1).max(255),
        value: z.string().min(1).max(255),
      })
    )
    .max(10)
    .optional(),
});

export async function POST(request: NextRequest) {
  try {
    // 3. Input Validation
    const body = await request.json();
    // This throws a ZodError if validation fails
    const params = PurposeMetSchema.parse(body);

    // 4. Build Query for Active Consents
    const whereClause: any = {
      dataPrincipalId: params.data_principal_id,
      referenceId: params.reference_id,
      status: "accepted",
    };

    // Add optional filters based on Elixir pattern matching
    if (params.company_process?.code) {
      whereClause.businessProcess = { code: params.company_process.code };
    }
    if (params.company_process?.version) {
      whereClause.businessProcess = {
        ...whereClause.businessProcess,
        version: params.company_process.version,
      };
    }
    if (params.consent_purpose?.code) {
      whereClause.consentPurpose = { code: params.consent_purpose.code };
    }

    // 5. Fetch Data
    // Include businessProcessRule to check the "revocableByPrincipal" flag
    const activeConsents = await prisma.consent.findMany({
      where: whereClause,
      include: {
        businessProcessRule: true,
      },
    });

    if (!activeConsents || activeConsents.length === 0) {
      return NextResponse.json(
        {
          error: { details: { key: "no_conditions_provided" } },
        },
        { status: 400 }
      );
    }

    // Elixir: {:custom_error, :no_revocable_consent_found}
    if (activeConsents.length === 0) {
      return NextResponse.json(
        {
          error: { details: { key: "no_revocable_consent_found" } },
        },
        { status: 422 }
      );
    }

    // 7. Transaction Execution (Update + Audit)
    const revokedConsentIds: string[] = [];
    const results = await prisma.$transaction(async (tx) => {
      const responseList = [];

      for (const consent of activeConsents) {
        // A. Update Consent Status to 'revoked'
        const updatedConsent = await tx.consent.update({
          where: { id: consent.id },
          data: {
            status: "revoked", // State change
          },
        });

        revokedConsentIds.push(updatedConsent.publicId);

        // B. Create Audit Trail Entry
        await tx.consentAuditTrail.create({
          data: {
            consentId: updatedConsent.publicId,
            dataPrincipalId: updatedConsent.dataPrincipalId,
            action: ConsentAction.REVOKED, // 'REVOKED' enum from schema
            actor: "data-fiduciary", // Matches Elixir "performed_by" logic
            details: {
              reason: "Purpose Met",
              metadata: params.metadata, // Pass metadata from input
              previous_status: consent.status,
              revoked_at: new Date().toISOString(),
            },
          },
        });

        responseList.push({
          consent_id: updatedConsent.publicId,
          is_revoked: true,
          reference_id: updatedConsent.referenceId,
          data_principal_id: updatedConsent.dataPrincipalId,
        });
      }
      return responseList;
    });

    // Trigger webhooks for all revoked consents (fire-and-forget)
    for (const consentId of revokedConsentIds) {
      prisma.consent
        .findUnique({
          where: { publicId: consentId },
          include: {
            businessProcess: true,
            consentPurpose: true,
            processingPurpose: {
              include: {
                purposeOfProcessing: true,
                processingPurposeToDataProcessors: {
                  include: { dataProcessor: true },
                },
              },
            },
            businessUnit: true,
          },
        })
        .then((consent) => {
          if (!consent) return;

          const userAttributeName =
            consent.userAttributeNames.length > 0
              ? consent.userAttributeNames[0]
              : null;

          const dataProcessorIds =
            consent.processingPurpose.processingPurposeToDataProcessors
              .map((dp) => dp.dataProcessor.ouId)
              .filter((id): id is string => id !== null);

          triggerWebhookEvent(
            WebhookEventType.CONSENT_REVOKED,
            {
              business_process_code: consent.businessProcess.code,
              business_process_version: consent.businessProcess.version,
              consent_id: consent.publicId,
              consent_purpose_code: consent.consentPurpose.code,
              consent_purpose_version: consent.consentPurpose.version,
              data_principal_id: consent.dataPrincipalId,
              user_attribute_name: userAttributeName,
              status: "consent_revoked",
              selected_language: consent.language,
              notice_id: consent.requestId,
              parent_consent_id: consent.parentConsentId,
              business_unit_code: consent.businessUnit.code,
              processing_purpose_code:
                consent.processingPurpose.purposeOfProcessing.code,
              reference_id: consent.referenceId,
              inserted_at: consent.insertedAt.toISOString(),
              updated_at: consent.updatedAt.toISOString(),
              revoked_at: consent.updatedAt.toISOString(),
              reason: "Purpose Met",
            },
            dataProcessorIds
          ).catch((error) => {
            console.error(
              `Failed to trigger CONSENT_REVOKED webhook for ${consentId}:`,
              error
            );
          });
        })
        .catch((error) => {
          console.error(
            `Failed to fetch consent ${consentId} for webhook:`,
            error
          );
        });
    }

    const uniqueGroups = new Map<
      string,
      { dpId: string; refId: string; bpCode: string }
    >();

    for (const consent of activeConsents) {
      const dpId = consent.dataPrincipalId;
      const refId = consent.referenceId;
      const bpId = consent.businessProcessId;
      const bp = await prisma.businessProcess.findUnique({
        where: { publicId: bpId },
      });

      const bpCode = bp.code;

      // Create a unique key for the map
      const uniqueKey = `${dpId}|${refId}|${bpCode}`;

      if (!uniqueGroups.has(uniqueKey)) {
        uniqueGroups.set(uniqueKey, { dpId, refId, bpCode });
      }
    }

    // Execute the external function for each unique group
    // utilizing Promise.all for parallel execution efficiency
    try {
      await Promise.all(
        Array.from(uniqueGroups.values()).map((group) =>
          sendForArtifactCreation(
            group.dpId,
            group.refId,
            group.bpCode,
            "updated"
          )
        )
      );
    } catch (artifactError) {
      console.error("Artifact Creation Error:", artifactError);
    }

    // 8. Success Response
    return NextResponse.json(
      {
        message: "Revokation successful",
        data: { consents_revoked: results },
      },
      { status: 200 }
    );
  } catch (error: any) {
    // 9. Error Handling

    // Zod Validation Errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: {
            details: {
              key: error,
              code: "missing_input_params",
            },
          },
        },
        { status: 400 }
      );
    }

    // Generic Server Errors
    console.error("Revoke Error:", error);
    return NextResponse.json(
      {
        error: { details: { key: "internal_server_error" } },
      },
      { status: 500 }
    );
  }
}
