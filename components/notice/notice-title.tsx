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

interface NoticeTitleProps {
  businessProcessName: string;
  className?: string;
  noticeType?: "grant" | "revoke" | "reconsent" | "consent";
  brandName?: string;
}

export function NoticeTitle({
  businessProcessName,
  className,
  noticeType = "consent",
  brandName = "",
}: NoticeTitleProps) {
  const { isHighContrast } = useHighContrast();
  const { t } = useNoticeTranslation();

  // Get translated notice type header
  const getNoticeTypeHeader = () => {
    switch (noticeType) {
      case "grant":
        return t("GRANT NOTICE");
      case "revoke":
        return t("REVOKE NOTICE");
      case "reconsent":
        return t("RECONSENT NOTICE");
      default:
        return t("CONSENT NOTICE");
    }
  };

  // Get translated description
  const getDescription = () => {
    return t("{{brand_name}} is seeking your consent for {{title}}", {
      brand_name: brandName,
      title: businessProcessName,
    });
  };

  return (
    <div className={cn("py-4 text-center", className)}>
      <h1
        className={cn(
          "mb-2 text-2xl font-bold tracking-tight text-blue-900",
          isHighContrast && "hc-text-cyan",
        )}
      >
        {getNoticeTypeHeader()}
      </h1>
      <p
        className={cn(
          "text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl",
          isHighContrast && "text-white",
        )}
      >
        {getDescription()}
      </p>
    </div>
  );
}
