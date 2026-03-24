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

import { SelectionState } from "./types";
import { NoticeSelectButton } from "./notice-select-button";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { cn } from "@/lib/utils";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

interface AccordionSelectProps {
  selectionState: SelectionState;
  onToggleAll: () => void;
  className?: string;
  disabled?: boolean;
  label?: string;
  preventDeselection?: boolean; // New prop to prevent deselection when all items are mandatory
}

export function AccordionSelect({
  selectionState,
  onToggleAll,
  className,
  disabled = false,
  label: _label,
  preventDeselection = false,
}: AccordionSelectProps) {
  const { isHighContrast } = useHighContrast();
  const { t } = useNoticeTranslation("dprm");

  return (
    <div className={className}>
      <div
        className={cn(
          "flex items-center justify-between bg-primary-50 rounded-lg px-3 py-2",
          isHighContrast && "hc-select-all-bg",
        )}
      >
        <h3
          className={cn(
            "text-sm font-bold text-gray-900 pr-2",
            isHighContrast && "hc-select-all-text",
          )}
        >
          {t("Review & Accept All Required Consents")}
        </h3>
        <NoticeSelectButton
          selectionState={selectionState}
          onSelectionChange={onToggleAll}
          disabled={disabled}
          preventDeselection={preventDeselection}
        />
      </div>
      <p className="text-sm text-gray-600 mt-2 italic text-center w-full">
        {t(
          "By selecting all, you are agreeing to provide consent for all required purposes",
        )}
      </p>
    </div>
  );
}
