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

import { AlreadySubmittedPage } from "@/app/cms/principal/notice/[notice_id]/_components/already-submitted-page";
import { SuccessPage } from "@/app/cms/principal/notice/[notice_id]/_components/success-page";
import {
  ValidatedNoticePageProps,
  withNoticeTokenValidation,
} from "@/components/hoc/with-notice-token-validation";
import { NoticePageClient } from "@/components/notice-page-client";
import { NoticeData } from "@/components/notice/types";
import { HighContrastProvider } from "@/contexts/high-contrast-context";
import { getNoticeWithFullDataByPublicId } from "@/lib/services/notices-service";
import { notFound, redirect } from "next/navigation";

// Process notice data based on view mode
function processNoticeForViewMode(notice: any): NoticeData {
  const noticeConfig = notice.noticeConfig as { viewMode?: string } | null;
  const viewMode = noticeConfig?.viewMode || "purpose_of_processing";

  // Group rules by consent purpose to create backward-compatible structure
  const consentPurposesMap = new Map();

  notice.businessProcess.businessProcessRules.forEach((rule: any) => {
    const consentPurposeId = rule.consentPurpose.id;

    if (!consentPurposesMap.has(consentPurposeId)) {
      consentPurposesMap.set(consentPurposeId, {
        ...rule.consentPurpose,
        processingPurposes: [],
      });
    }

    // Add processing purpose to the consent purpose
    consentPurposesMap.get(consentPurposeId).processingPurposes.push({
      ...rule.processingPurpose,
      mandatory: rule.mandatory, // Use rule's mandatory status
    });
  });

  // Convert map to array
  const consentPurposes = Array.from(consentPurposesMap.values());

  if (viewMode === "purpose_of_consent") {
    // In purpose_of_consent mode, apply special logic
    const processedConsentPurposes = consentPurposes.map(
      (consentPurpose: any) => {
        // Check if ANY processing purpose is mandatory
        const hasMandatoryProcessingPurpose =
          consentPurpose.processingPurposes.some((pp: any) => pp.mandatory);

        return {
          ...consentPurpose,
          mandatory: hasMandatoryProcessingPurpose,
          processingPurposes: consentPurpose.processingPurposes.map(
            (pp: any) => ({
              ...pp,
              // Keep the configured rule value. Selection is hidden for
              // processing purposes in this view, but optional consent
              // purposes must remain deselectable at the parent level.
              mandatory: pp.mandatory,
              showSelection: false,
            }),
          ),
        };
      },
    );

    return {
      ...notice,
      businessProcess: {
        ...notice.businessProcess,
        consentPurposes: processedConsentPurposes,
        businessProcessRules: notice.businessProcess.businessProcessRules.map(
          (rule: any) => ({
            ...rule,
            processingPurpose: {
              ...rule.processingPurpose,
              mandatory: rule.mandatory,
              showSelection: false,
            },
          }),
        ),
      },
    };
  }

  // For other view modes, just add the consentPurposes structure
  return {
    ...notice,
    businessProcess: {
      ...notice.businessProcess,
      consentPurposes,
    },
  };
}

async function NoticeViewPage({
  tokenPayload,
  params,
  accessToken,
}: ValidatedNoticePageProps) {
  // Extract notice_id from URL params
  const noticeId = params.notice_id;

  // Verify that the notice_id in the URL matches the one in the token
  if (tokenPayload.public_id !== noticeId) {
    notFound();
  }

  const notice = await getNoticeWithFullDataByPublicId(noticeId);

  if (!notice) {
    notFound();
  }

  // Handle different notice states
  if (notice.status === "cancelled") {
    // Notice has been cancelled (e.g., due to expiry) - redirect to link expired page
    redirect("/cms/link-expired");
  }

  if (notice.status === "completed") {
    // Notice is already completed - show already submitted page
    return (
      <AlreadySubmittedPage
        noticeId={noticeId}
        dataPrincipalId={notice.dataPrincipalId}
        submittedAt={notice.updatedAt}
        accessToken={accessToken}
        forMinor={notice.forMinor}
        metadata={notice.metadata}
      />
    );
  }

  if (notice.status === "submitted") {
    // Notice is submitted but not yet completed - show success page
    return (
      <SuccessPage
        dataPrincipalId={notice.dataPrincipalId}
        noticePublicId={notice.publicId}
        accessToken={accessToken}
        forMinor={notice.forMinor}
        metadata={notice.metadata}
      />
    );
  }

  // Notice is pending - show the interactive notice form
  const processedNotice = processNoticeForViewMode(notice);

  return (
    <HighContrastProvider>
      <NoticePageClient notice={processedNotice} />
    </HighContrastProvider>
  );
}

export default withNoticeTokenValidation(NoticeViewPage);
export const dynamic = "force-dynamic";
