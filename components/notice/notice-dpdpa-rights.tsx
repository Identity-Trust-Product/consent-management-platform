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

import { EulaDialog } from "./eula-dialog";
import { useState } from "react";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { cn } from "@/lib/utils";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

interface NoticeDpdpaRightsProps {
  className?: string;
  legalDocuments?: Record<string, string>;
  container?: HTMLElement | null;
}

export function NoticeDpdpaRights({
  className,
  legalDocuments,
  container,
}: NoticeDpdpaRightsProps) {
  const [isEulaDialogOpen, setIsEulaDialogOpen] = useState(false);
  const { isHighContrast } = useHighContrast();
  const { t } = useNoticeTranslation();

  const hasLegalDocuments =
    legalDocuments && Object.keys(legalDocuments).length > 0;
  return (
    <div
      className={cn(
        `px-8 py-5 bg-neutral-20 border-t ${className || ""}`,
        isHighContrast && "hc-dpdpa-section",
      )}
    >
      <h3 className="text-sm font-bold mb-4">{t("You have the right to:")}</h3>

      <div
        className={cn(
          "text-sm font-medium text-neutral-300",
          isHighContrast && "hc-dpdpa-section",
        )}
      >
        <p>{t("You have the right to:")}</p>
        <p>{t("(1) Access information about your personal data")}</p>
        <p>{t("(2) Correct and update your personal data")}</p>
        <p>{t("(3) Erase your personal data")}</p>
        <p>
          {t(
            "(4) Seek redress of any grievance regarding processing of your personal data",
          )}
        </p>

        {hasLegalDocuments && (
          <p className="mt-4">
            * {t("Click here to check")}{" "}
            <button
              onClick={() => setIsEulaDialogOpen(true)}
              className="underline cursor-pointer"
            >
              <b>{t("Redirectional URL and DPO contact details")}</b>
            </button>
          </p>
        )}
      </div>

      <EulaDialog
        isOpen={isEulaDialogOpen}
        onClose={() => setIsEulaDialogOpen(false)}
        legalDocuments={legalDocuments || {}}
        container={container}
      />
    </div>
  );
}
