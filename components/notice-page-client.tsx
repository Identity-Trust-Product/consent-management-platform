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

import {
  handleConsentAcceptance,
  handleConsentRejection,
} from "@/actions/notice-consent";
import {
  BusinessProcessRuleSelection,
  DefaultNoticeTemplate,
  NoticeData,
  RejectConfirmationDialog,
} from "@/components/notice";
import { Card } from "@/components/ui/card";
import { useHighContrast } from "@/contexts/high-contrast-context";
import {
  NoticeLanguageProvider,
  useNoticeLanguage,
} from "@/contexts/notice-language-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { LanguageCode } from "@/lib/types/languages";
import { cn } from "@/lib/utils";
import { getAvailableNoticeLanguages } from "@/lib/utils/notice-translations";
import { prepareNoticeReadoutContent } from "@/lib/utils/speech-readout-utils";
import { useRouter } from "next/navigation";
import { getFiduciaryConfig } from "@/actions/fiduciary-config";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SpeechReadoutButton } from "@/components/speech/speech-readout-button";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

interface NoticePageClientProps {
  notice: NoticeData;
  container?: HTMLElement | null;
  onAccept?: (
    selections: BusinessProcessRuleSelection[],
  ) => void | Promise<void>;
  onReject?: () => void | Promise<void>;
}

export function NoticePageClient(props: NoticePageClientProps) {
  const { notice } = props;
  const availableLanguages = getAvailableNoticeLanguages(
    notice.businessProcess,
  );
  const defaultLanguage = (notice.defaultLanguage || "en") as LanguageCode;

  return (
    <NoticeLanguageProvider
      availableLanguages={availableLanguages}
      defaultLanguage={defaultLanguage}
    >
      <NoticePageContent {...props} />
    </NoticeLanguageProvider>
  );
}

function NoticePageContent({
  notice,
  container,
  onAccept,
  onReject,
}: NoticePageClientProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [brandName, setBrandName] = useState<string>("Brand");
  const { isHighContrast } = useHighContrast();
  const isMobile = useIsMobile();
  const router = useRouter();
  const { currentLanguage } = useNoticeLanguage();

  useEffect(() => {
    getFiduciaryConfig()
      .then((data) => {
        if (data?.fiduciaryName) {
          setBrandName(data.fiduciaryName);
        }
      })
      .catch((err) => console.error("Failed to load fiduciary config", err));
  }, []);

  // Default handlers for real notice submission
  const defaultHandleAccept = async (
    selections: BusinessProcessRuleSelection[],
  ) => {
    if (isProcessing) return;

    try {
      setIsProcessing(true);

      const result = await handleConsentAcceptance(
        notice.publicId,
        notice.dataPrincipalId,
        selections,
        currentLanguage,
      );

      if (result.success) {
        // Show the success message before returning to the configured caller.
        toast.success("Consent selected for request successfully!");
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (notice.redirectionUrl) {
          window.location.assign(notice.redirectionUrl);
          return;
        }

        const dataExchangeAppUrl =
          process.env.NEXT_PUBLIC_DATA_EXCHANGE_APP_URL ||
          "http://localhost:3000";
        window.location.assign(
          `${dataExchangeAppUrl.replace(/\/$/, "")}/pendingRequests`,
        );
      } else {
        // Handle validation errors
        console.error("Validation errors:", result.errors);
        const errorMessages =
          result.errors?.map((error) => error.message).join(", ") ||
          "Unknown validation error";
        toast.error(`Validation failed: ${errorMessages}`);
      }
    } catch (error) {
      console.error("Error accepting consent:", error);
      toast.error("Error processing consent. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const defaultHandleReject = () => {
    setShowRejectDialog(true);
  };

  const defaultHandleConfirmReject = async () => {
    if (isProcessing) return;

    try {
      setIsProcessing(true);
      setShowRejectDialog(false);

      await handleConsentRejection(notice.publicId, notice.dataPrincipalId);

      // Show success toast and redirect to the reject page
      toast.success("Consent rejected.");

      // Redirect to the reject page to show the rejection state
      const currentUrl = window.location.pathname;
      const rejectUrl = currentUrl.replace("/view/", "/reject/");
      router.push(rejectUrl);
    } catch (error) {
      console.error("Error rejecting consent:", error);
      toast.error("Error processing rejection. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Use provided handlers or default ones
  const handleAccept = onAccept || defaultHandleAccept;
  const handleReject = defaultHandleReject;
  const handleConfirmReject = onReject || defaultHandleConfirmReject;

  const { t } = useNoticeTranslation();
  const readoutContent = prepareNoticeReadoutContent(
    notice,
    t,
    currentLanguage,
    {
      skipConsentPurpose: false,
      brandName: brandName,
    },
  );
  const speechReadoutButton = (
    <SpeechReadoutButton
      content={readoutContent}
      className="ml-2"
      ariaLabel={t("Read notice aloud")}
    />
  );

  return (
    <div
      className={cn(
        "notice-container min-h-screen bg-[#f4f7fb] px-4 py-6 text-[#1f2937] antialiased sm:px-6 sm:py-8",
        isHighContrast && "hc-bg-canvas",
      )}
      style={{
        fontFamily:
          'Nunito, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        className={cn(
          "mx-auto max-w-[900px]",
          isMobile ? "pb-24" : "pb-16",
        )}
      >
        <div className="max-w-[900px] mx-auto">
          <Card
            className={cn(
              "min-h-[calc(100vh-4rem)] gap-0 overflow-hidden rounded-lg border border-[#d9e2ef] bg-white p-0 shadow-[0_18px_50px_rgba(31,41,55,0.12)]",
              isHighContrast && "hc-no-card-border",
            )}
          >
            <DefaultNoticeTemplate
              notice={notice}
              onAccept={handleAccept}
              onReject={handleReject}
              container={container}
              speechReadoutButton={speechReadoutButton}
            />
          </Card>
        </div>
      </div>

      <RejectConfirmationDialog
        open={showRejectDialog}
        onOpenChange={setShowRejectDialog}
        onConfirm={handleConfirmReject}
        container={container}
      />
    </div>
  );
}
