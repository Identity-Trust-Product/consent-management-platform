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
import { ExternalLink, ShieldCheck } from "lucide-react";

interface NoticeDpdpaRightsProps {
  className?: string;
  legalDocuments?: Record<string, string>;
  fiduciaryName?: string;
  container?: HTMLElement | null;
}

export function NoticeDpdpaRights({
  className,
  legalDocuments,
  fiduciaryName = "the Data Fiduciary",
  container,
}: NoticeDpdpaRightsProps) {
  const [isEulaDialogOpen, setIsEulaDialogOpen] = useState(false);
  const { isHighContrast } = useHighContrast();
  const { t } = useNoticeTranslation();

  const hasLegalDocuments =
    legalDocuments && Object.keys(legalDocuments).length > 0;

  const rights = [
    t("Access information about your personal data and consent"),
    t("Request correction or update of inaccurate personal data"),
    t("Request erasure of personal data where applicable"),
    t("Withdraw consent at any time"),
    t("Nominate another person to exercise your rights in case of death or incapacity"),
    t("Raise a grievance about processing of your personal data"),
  ];

  return (
    <div
      className={cn(
        "mb-6 rounded-lg border border-primary-100 bg-primary-20/80 p-5 text-left shadow-sm",
        className,
        isHighContrast && "hc-dpdpa-section",
      )}
    >
      <div className="mb-4 flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white text-primary-700 shadow-sm">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-neutral-500">
            {t("DPDP Notice Summary")}
          </h3>
          <p className="mt-1 text-sm leading-6 text-neutral-300">
            {t(
              "{{fiduciaryName}} will process only the personal data shown below for the specific purposes described in this notice.",
              { fiduciaryName },
            )}
          </p>
        </div>
      </div>

      <div className="grid gap-3 text-sm md:grid-cols-2">
        <div className="rounded-md border border-primary-100 bg-white p-3">
          <p className="font-semibold text-neutral-500">
            {t("Purpose and personal data")}
          </p>
          <p className="mt-1 leading-6 text-neutral-300">
            {t(
              "Each purpose lists the exact personal data used. Consent is requested only for the purposes and data attributes displayed in this notice.",
            )}
          </p>
        </div>

        <div className="rounded-md border border-primary-100 bg-white p-3">
          <p className="font-semibold text-neutral-500">
            {t("Duration and withdrawal")}
          </p>
          <p className="mt-1 leading-6 text-neutral-300">
            {t(
              "Consent remains valid for the displayed duration or until the purpose is met. You may withdraw consent later through the consent management portal.",
            )}
          </p>
        </div>

        <div className="rounded-md border border-primary-100 bg-white p-3">
          <p className="font-semibold text-neutral-500">
            {t("Your rights")}
          </p>
          <ul className="mt-2 space-y-1 text-neutral-300">
            {rights.map((right) => (
              <li key={right} className="flex gap-2 leading-5">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                <span>{right}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-primary-100 bg-white p-3">
          <p className="font-semibold text-neutral-500">
            {t("Grievance and complaint")}
          </p>
          <p className="mt-1 leading-6 text-neutral-300">
            {t(
              "You can contact the Data Fiduciary or DPO for consent withdrawal, rights requests, or grievances. If your grievance is not resolved, you may complain to the Data Protection Board of India as prescribed under law.",
            )}
          </p>

          {hasLegalDocuments ? (
            <button
              type="button"
              onClick={() => setIsEulaDialogOpen(true)}
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 underline underline-offset-4"
            >
              {t("View contact links and redirectional URLs")}
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          ) : (
            <p className="mt-3 rounded-md bg-warning-20 px-3 py-2 text-xs font-medium text-warning-800">
              {t(
                "Contact links are not configured for this template. Please add DPO/contact and grievance links in Create Notice Template.",
              )}
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 text-neutral-300">
        {t(
          "This summary is provided to help you give specific and informed consent in clear and plain language.",
        )}
      </p>

      <EulaDialog
        isOpen={isEulaDialogOpen}
        onClose={() => setIsEulaDialogOpen(false)}
        legalDocuments={legalDocuments || {}}
        container={container}
      />
    </div>
  );
}
