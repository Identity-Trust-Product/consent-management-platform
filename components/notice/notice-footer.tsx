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

import { useHighContrast } from "@/contexts/high-contrast-context";
import { NoticeButton } from "./notice-button";
import { CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

interface NoticeFooterProps {
  onAccept?: () => void;
  onReject?: () => void;
  acceptText?: string;
  rejectText?: string;
  question?: string;
  className?: string;
  disabled?: boolean;
  alignment?: "left" | "center" | "right";
}

export function NoticeFooter({
  onAccept,
  onReject,
  acceptText,
  rejectText,
  question,
  className,
  disabled = false,
  alignment = "right",
}: NoticeFooterProps) {
  const isMobile = useIsMobile();
  const { isHighContrast } = useHighContrast();
  const { t } = useNoticeTranslation();

  // Use translations with fallback to props
  const displayAcceptText = acceptText || t("Yes");
  const displayRejectText = rejectText || t("No");
  const displayQuestion = question || t("Do you agree to provide consent ?");

  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const FooterContent = () => (
    <CardFooter
      className={cn(
        "flex p-4 px-6",
        isMobile ? "flex-col" : "flex-row",
        isMobile ? "items-center" : alignmentClasses[alignment],
        className,
      )}
    >
      {isMobile ? (
        // Mobile layout: question on top, buttons below
        <div className="flex flex-col items-center gap-4 w-full">
          <p className="text-base font-medium text-center">{displayQuestion}</p>
          <div className="flex gap-4 w-full justify-center">
            <NoticeButton
              onClick={onReject}
              disabled={false}
              purpose="reject"
              className="px-8 py-3 text-base min-w-[120px]"
            >
              {displayRejectText}
            </NoticeButton>
            <NoticeButton
              onClick={onAccept}
              disabled={disabled}
              purpose="accept"
              className="px-8 py-3 text-base min-w-[120px]"
            >
              {displayAcceptText}
            </NoticeButton>
          </div>
        </div>
      ) : (
        // Desktop layout: question and buttons side by side
        <div className="flex items-center gap-6">
          <p className="text-base font-medium whitespace-nowrap">
            {displayQuestion}
          </p>
          <div className="flex gap-4">
            <NoticeButton
              onClick={onReject}
              disabled={false}
              purpose="reject"
              className="px-8 py-3 text-base min-w-[120px]"
            >
              {displayRejectText}
            </NoticeButton>
            <NoticeButton
              onClick={onAccept}
              disabled={disabled}
              purpose="accept"
              className="px-8 py-3 text-base min-w-[120px]"
            >
              {displayAcceptText}
            </NoticeButton>
          </div>
        </div>
      )}
    </CardFooter>
  );

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 border-t bg-white",
        isHighContrast && "hc-notice-footer",
      )}
    >
      <div className="max-w-[900px] mx-auto">
        <FooterContent />
      </div>
    </div>
  );
}
