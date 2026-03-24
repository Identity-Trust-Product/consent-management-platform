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

import { BusinessProcessRuleSelection } from "@/components/notice";
import { NOTICE_METADATA_KEYS } from "@/lib/constants/notice-metadata";
import prisma from "@/lib/prisma";
import { generateDprmLinkForNotice } from "@/actions/dprm";
import {
  NoticeConsentAcceptanceResult,
  submitNotice,
  validateNoticeSubmission,
} from "@/lib/services/notices-service";
import { triggerWebhookEvent } from "@/lib/services/webhook-service";
import { WebhookEventType } from "@prisma/client";

export async function handleConsentAcceptance(
  noticePublicId: string,
  dataPrincipalId: string,
  selections: BusinessProcessRuleSelection[],
  language: string = "en"
): Promise<NoticeConsentAcceptanceResult> {
  try {
    // Validate the notice submission
    const validationResult = await validateNoticeSubmission(
      noticePublicId,
      selections
    );

    if (!validationResult.isValid) {
      console.error("Validation failed:", validationResult.errors);
      return {
        success: false,
        errors: validationResult.errors,
        message: "Notice submission validation failed",
      };
    }

    // Submit the notice (this will handle database updates and async consent creation)
    const submitResult = await submitNotice(noticePublicId, selections, language);

    if (!submitResult.success) {
      return submitResult;
    }

    // Send confirmation email
    try {
      const { emailService } = await import(
        "@/lib/services/email/email-service"
      );
      // Get notice details for email
      const notice = await prisma.notice.findUnique({
        where: { publicId: noticePublicId },
        include: {
          businessProcess: { select: { name: true } },
          metadata: true,
        },
      });

      if (notice) {
        // Extract email and name from metadata
        const metadata = notice.metadata.reduce(
          (acc, item) => {
            acc[item.key] = item.value;
            return acc;
          },
          {} as Record<string, string>
        );

        const principalEmail = metadata.email || metadata.Email;
        const principalName = metadata.name || metadata.Name || "User";

        if (principalEmail) {
          const dprmLinkResult = await generateDprmLinkForNotice(notice);

          if (dprmLinkResult.success && dprmLinkResult.url) {
            emailService.sendTemplatedEmail({
              templateName: "consent-granted-confirmation",
              to: { email: principalEmail, name: principalName },
              variables: {
                dprmLink: dprmLinkResult.url,
                language,
              },
            });
          }
        }
      }
    } catch (emailError) {
      console.error("Failed to send consent confirmation email:", emailError);
      // Don't fail the consent acceptance if email fails
    }

    return submitResult;
  } catch (error) {
    console.error("Error handling consent acceptance:", error);
    return {
      success: false,
      errors: [
        {
          code: "PROCESSING_ERROR",
          message: "Failed to process consent acceptance",
          details: {
            error: error instanceof Error ? error.message : "Unknown error",
          },
        },
      ],
    };
  }
}

export async function handleConsentRejection(
  noticePublicId: string,
  dataPrincipalId: string
) {
  try {
    // Update notice status to completed and consent_status to rejected
    const updatedNotice = await prisma.notice.update({
      where: { publicId: noticePublicId },
      data: {
        status: "completed",
        consentStatus: "rejected",
        markCompletedTimestamp: new Date(),
        updatedAt: new Date(),
      },
      include: {
        businessProcess: {
          select: {
            name: true,
            code: true,
            version: true,
          },
        },
      },
    });

    // Trigger NOTICE_SUBMITTED webhook with rejected status (fire-and-forget)
    triggerWebhookEvent(WebhookEventType.NOTICE_SUBMITTED, {
      notice_id: updatedNotice.publicId,
      data_principal_id: updatedNotice.dataPrincipalId,
      reference_id: updatedNotice.referenceId,
      business_process_code: updatedNotice.businessProcess.code,
      business_process_name: updatedNotice.businessProcess.name,
      business_process_version: updatedNotice.businessProcess.version,
      status: "submitted",
      consent_status: "rejected",
      resource_type: "grant_notice",
      inserted_at: updatedNotice.createdAt.toISOString(),
      updated_at: updatedNotice.updatedAt.toISOString(),
      submitted_selections: [], // No selections for rejection
    }).catch((webhookError) => {
      console.error(
        "Failed to trigger NOTICE_SUBMITTED webhook for rejection:",
        webhookError
      );
      // Don't fail the rejection if webhook fails
    });

    return { success: true };
  } catch (error) {
    console.error("Error handling consent rejection:", error);
    throw new Error("Failed to process consent rejection");
  }
}
