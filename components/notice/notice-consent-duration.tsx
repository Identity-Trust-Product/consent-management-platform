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

import { cn } from "@/lib/utils";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NoticeConsentDurationProps {
  consentDuration?: number | null;
  className?: string;
}

export function NoticeConsentDuration({
  consentDuration,
  className,
}: NoticeConsentDurationProps) {
  const { isHighContrast } = useHighContrast();
  const { t } = useNoticeTranslation();
  const formattedDuration = consentDuration
    ? consentDuration < 24
      ? `${consentDuration} ${t(consentDuration === 1 ? "Hour" : "Hours")}`
      : `${Math.floor(consentDuration / 24)} ${t("Days")}`
    : t("Until Purpose Met");

  // Helper function to get tooltip message based on consent duration
  const getConsentDurationTooltip = () => {
    if (consentDuration && consentDuration > 0) {
      return t(
        "The consent you are sharing is valid till this duration. Post that it will expire.",
      );
    }
    return t(
      "This consent remains valid until the stated purpose is fulfilled or no longer applicable.",
    );
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 bg-warning-100 text-warning-700 rounded text-xs font-normal border border-warning-200",
        isHighContrast && "hc-consent-duration-badge",
        className,
      )}
    >
      {t("Consent Duration")}:{" "}
      {formattedDuration}
      <Tooltip>
        <TooltipTrigger asChild>
          <Info
            className={cn(
              "w-3 h-3 text-warning-500 flex-shrink-0 cursor-help",
              isHighContrast && "info-icon",
            )}
          />
        </TooltipTrigger>
        <TooltipContent className="bg-white text-black [&_.bg-primary]:bg-white [&_.fill-primary]:fill-white max-w-36 w-fit px-3 py-2 rounded-md">
          <p className="text-xs leading-tight">{getConsentDurationTooltip()}</p>
        </TooltipContent>
      </Tooltip>
    </span>
  );
}
