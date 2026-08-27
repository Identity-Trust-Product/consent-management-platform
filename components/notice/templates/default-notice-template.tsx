"use client";
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

import { CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNoticeConsent } from "@/hooks/use-notice-consent";
import { cn } from "@/lib/utils";
import {
  getBaseEntityTranslation,
  getBusinessProcessTranslation,
  getUserAttributeTranslation,
} from "@/lib/utils/notice-translations";
import { AccordionSelect } from "../accordion-select";
import { NoticeConsentPurpose } from "../notice-consent-purpose";
import { NoticeDescription } from "../notice-description";
import { NoticeFooter } from "../notice-footer";
import { NoticeHeader } from "../notice-header";
import { NoticeProcessingPurpose } from "../notice-processing-purpose";
import { NoticeTitle } from "../notice-title";
import { NoticeUserAttribute } from "../notice-user-attribute";
import { BusinessProcessRuleSelection, NoticeData } from "../types";

interface DefaultNoticeTemplateProps {
  notice: NoticeData;
  className?: string;
  onAccept?: (selections: BusinessProcessRuleSelection[]) => void;
  onReject?: () => void;
  container?: HTMLElement | null;
  speechReadoutButton?: React.ReactNode;
}

export function DefaultNoticeTemplate({
  notice,
  className,
  onAccept,
  onReject,
  speechReadoutButton,
}: DefaultNoticeTemplateProps) {
  const { isHighContrast } = useHighContrast();
  const isMobile = useIsMobile();
  const { currentLanguage } = useNoticeLanguage();

  // Get view mode from notice config
  const noticeConfig = notice.noticeConfig as { viewMode?: string } | null;
  const viewMode = noticeConfig?.viewMode || "purpose_of_processing";
  const isConsentPurposeViewMode = viewMode === "purpose_of_consent";

  // Get translated business process content
  const translatedBP = getBusinessProcessTranslation(
    notice.businessProcess.translations,
    currentLanguage,
    {
      name: notice.businessProcess.name,
      grantDescription: notice.businessProcess.grantDescription,
      revokeDescription: notice.businessProcess.revokeDescription,
      reconsentDescription: notice.businessProcess.reconsentDescription,
    },
  );

  const {
    overallSelectionState,
    getConsentPurposeSelectionState,
    getProcessingPurposeSelectionState,
    handleSelectAll,
    handleConsentPurposeChange,
    handleProcessingPurposeChange,
    getSelectedRules, // New rule-based selection method
    isConsentPurposeDisabled,
    isOverallSelectDisabled,
  } = useNoticeConsent(notice);

  // Handle accept
  const handleAccept = () => {
    const ruleSelections = getSelectedRules();
    onAccept?.(ruleSelections);
  };

  return (
    <>
      <NoticeHeader speechReadoutButton={speechReadoutButton} />

      <CardContent
        className={cn(
          "pt-6",
          isMobile ? "px-2" : "px-14",
          "hc-bg-notice-body",
          className,
        )}
      >
        {/* Title and Subtitle */}
        <NoticeTitle
          businessProcessName={translatedBP.name}
          brandName={notice.businessProcess.businessUnit.name}
        />

        {/* Business Process Description */}
        <NoticeDescription description={translatedBP.grantDescription} />

        <Separator
          className={cn("mb-6", isHighContrast && "hc-bg-light-gray")}
        />

        {/* Select All */}
        <AccordionSelect
          selectionState={overallSelectionState}
          onToggleAll={handleSelectAll}
          label="Select All"
          preventDeselection={isOverallSelectDisabled}
        />

        {/* Consent Purposes */}
        <div className="space-y-4 mt-4 pb-6">
          {notice.businessProcess.consentPurposes?.map((consentPurpose) => {
            // Get translated consent purpose
            const translatedCP = getBaseEntityTranslation(
              consentPurpose.translations,
              currentLanguage,
              {
                name: consentPurpose.name,
                description: consentPurpose.description,
              },
            );

            return (
              <NoticeConsentPurpose
                key={consentPurpose.id}
                consentPurpose={{
                  ...consentPurpose,
                  name: translatedCP.name,
                  description: translatedCP.description,
                }}
                selectionState={getConsentPurposeSelectionState(
                  consentPurpose.id,
                )}
                onSelectionChange={(selected) =>
                  handleConsentPurposeChange(consentPurpose.id, selected)
                }
                showSelection={true}
                defaultOpen={true}
                variant="accordion"
                preventDeselection={
                  isConsentPurposeDisabled(consentPurpose.id) ||
                  (isConsentPurposeViewMode && consentPurpose.mandatory)
                }
              >
                {consentPurpose.processingPurposes.map((processingPurpose) => {
                  // Get translated processing purpose
                  const translatedPP = getBaseEntityTranslation(
                    processingPurpose.translations,
                    currentLanguage,
                    {
                      name: processingPurpose.name,
                      description: processingPurpose.description,
                    },
                  );

                  return (
                    <NoticeProcessingPurpose
                      key={processingPurpose.id}
                      processingPurpose={{
                        ...processingPurpose,
                        name: translatedPP.name,
                        description: translatedPP.description,
                      }}
                      selectionState={getProcessingPurposeSelectionState(
                        processingPurpose.id,
                      )}
                      onSelectionChange={(selected) =>
                        handleProcessingPurposeChange(
                          consentPurpose.id,
                          processingPurpose.id,
                          selected,
                        )
                      }
                      showSelection={!isConsentPurposeViewMode}
                      defaultOpen={true}
                      variant="accordion"
                    >
                      {processingPurpose.userAttributes.map((userAttribute) => {
                        // Get translated user attribute
                        const translatedUA = getUserAttributeTranslation(
                          userAttribute.translations,
                          currentLanguage,
                          userAttribute.name,
                        );

                        return (
                          <NoticeUserAttribute
                            key={userAttribute.id}
                            userAttribute={{
                              ...userAttribute,
                              name: translatedUA,
                            }}
                            variant="badge"
                            showPiiIndicator={true}
                          />
                        );
                      })}
                    </NoticeProcessingPurpose>
                  );
                })}
              </NoticeConsentPurpose>
            );
          })}
        </div>
      </CardContent>

      {/* Footer with preview mode logic handled internally */}
      <NoticeFooter
        onAccept={handleAccept}
        onReject={onReject}
        disabled={false}
      />
    </>
  );
}
