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
import { getFiduciaryConfig } from "@/actions/fiduciary-config";
import { useEffect, useState } from "react";

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
  brandName: _brandName,
}: NoticeTitleProps) {
  const { isHighContrast } = useHighContrast();
  const { t } = useNoticeTranslation();
  const [brand, setBrand] = useState<string>(" ");

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
      brand_name: brand,
      title: businessProcessName,
    });
  };

  useEffect(() => {
    getFiduciaryConfig().then((data) => {
      setBrand(data.fiduciaryName);
    });
  }, []);

  return (
    <div className={cn("text-center py-3", className)}>
      <h1
        className={cn(
          "text-2xl font-bold text-blue-700 mb-2",
          isHighContrast && "hc-text-cyan",
        )}
      >
        {getNoticeTypeHeader()}
      </h1>
      <p
        className={cn(
          "text-xl font-semibold text-gray-900",
          isHighContrast && "text-white",
        )}
      >
        {getDescription()}
      </p>
    </div>
  );
}
