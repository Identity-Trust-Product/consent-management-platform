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

import { ProcessingPurposeData, SelectionState } from "./types";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon } from "lucide-react";
import { NoticeSelectButton } from "./notice-select-button";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { NoticeConsentDuration } from "./notice-consent-duration";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

interface NoticeProcessingPurposeProps {
  processingPurpose: ProcessingPurposeData;
  children?: ReactNode;
  className?: string;
  selectionState?: SelectionState;
  onSelectionChange?: (selected: boolean) => void;
  showSelection?: boolean;
  disabled?: boolean;
  defaultOpen?: boolean;
  variant?: "accordion" | "card" | "simple";
  showConsentDuration?: boolean;
  consentDuration?: number | null;
}

export function NoticeProcessingPurpose({
  processingPurpose,
  children,
  className,
  selectionState = "none",
  onSelectionChange,
  showSelection = true,
  disabled = false,
  defaultOpen = false,
  variant = "accordion",
  showConsentDuration = false,
  consentDuration,
}: NoticeProcessingPurposeProps) {
  const { isHighContrast } = useHighContrast();
  const { t } = useNoticeTranslation("dprm");
  const isMobile = useIsMobile();

  const renderContent = () => (
    <div className="space-y-5 px-6">
      {processingPurpose.description && (
        <div>
          <div
            className={cn("text-sm", isHighContrast && "hc-description-text")}
          >
            {processingPurpose.description}
          </div>
        </div>
      )}

      {children && (
        <div className="space-y-2">
          <Separator className={cn(isHighContrast && "hc-bg-light-gray")} />
          <h4
            className={cn(
              "text-sm font-medium",
              isHighContrast && "hc-personal-info-heading",
            )}
          >
            {t("Personal Data Used")}
          </h4>
          <div className="flex flex-wrap gap-2">{children}</div>
        </div>
      )}
    </div>
  );

  switch (variant) {
    case "card":
      return (
        <div
          className={cn(
            "border rounded-lg p-4 bg-white",
            selectionState === "all" && "border-blue-300 bg-blue-50",
            selectionState === "partial" && "border-orange-300 bg-orange-50",
            disabled && "opacity-60",
            className,
          )}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3
                className={cn(
                  "font-semibold text-base text-gray-900",
                  isHighContrast && "hc-processing-purpose-title",
                )}
              >
                {processingPurpose.name}
                {processingPurpose.mandatory && (
                  <span className="text-gray-600"> {t("(Required)")}</span>
                )}
              </h3>
            </div>
            {showSelection && onSelectionChange && (
              <NoticeSelectButton
                selectionState={selectionState}
                onSelectionChange={() => {
                  const newSelected = selectionState !== "all";
                  onSelectionChange(newSelected);
                }}
                disabled={disabled}
                preventDeselection={processingPurpose.mandatory}
                className="ml-3"
              />
            )}
          </div>
          {renderContent()}
        </div>
      );

    case "simple":
      return (
        <div className={cn("py-2", className)}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4
                className={cn(
                  "font-medium text-base text-gray-900",
                  isHighContrast && "hc-processing-purpose-title",
                )}
              >
                {processingPurpose.name}
                {processingPurpose.mandatory && (
                  <span className="text-gray-600"> {t("(Required)")}</span>
                )}
              </h4>
              {processingPurpose.description && (
                <p
                  className={cn(
                    "text-sm text-gray-600 mt-1",
                    isHighContrast && "hc-description-text",
                  )}
                >
                  {processingPurpose.description}
                </p>
              )}
            </div>
            {showSelection && onSelectionChange && (
              <NoticeSelectButton
                selectionState={selectionState}
                onSelectionChange={() => {
                  const newSelected = selectionState !== "all";
                  onSelectionChange(newSelected);
                }}
                disabled={disabled}
                preventDeselection={processingPurpose.mandatory}
                size="sm"
                className="ml-3"
              />
            )}
          </div>
        </div>
      );

    case "accordion":
    default:
      return (
        <Accordion
          type="single"
          collapsible
          defaultValue={
            defaultOpen ? `processing-purpose-${processingPurpose.id}` : ""
          }
          className={cn("w-full", disabled && "opacity-60", className)}
        >
          <AccordionItem
            value={`processing-purpose-${processingPurpose.id}`}
            className={cn(
              "border border-gray-200 rounded-lg !border-b",
              isHighContrast && "hc-processing-accordion-trigger",
            )}
          >
            <AccordionTrigger
              className={cn(
                "group flex items-center justify-between p-3 hover:no-underline [&>svg]:hidden",
                "bg-white", // keep trigger white always
                "cursor-pointer",
                "rounded-lg", // always have rounded-lg
                "data-[state=open]:border-b-none", // remove bottom rounded when open
                disabled && "cursor-not-allowed",
                isHighContrast && "hc-processing-accordion-trigger",
              )}
              disabled={disabled}
            >
              <div className="flex items-center gap-3 flex-1 text-left">
                <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                <div className="flex-1">
                  <div>
                    <h3
                      className={cn(
                        "text-base",
                        isHighContrast && "hc-processing-purpose-title",
                      )}
                    >
                      {processingPurpose.name}
                      {processingPurpose.mandatory && (
                        <span className="font-semibold">
                          {" "}
                          {t("(Required)")}
                        </span>
                      )}
                    </h3>
                    {showConsentDuration && isMobile && (
                      <div className="mt-1">
                        <NoticeConsentDuration
                          consentDuration={consentDuration}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {showConsentDuration && !isMobile && (
                    <NoticeConsentDuration consentDuration={consentDuration} />
                  )}
                  {showSelection && onSelectionChange && (
                    <NoticeSelectButton
                      selectionState={selectionState}
                      onSelectionChange={() => {
                        const newSelected = selectionState !== "all";
                        onSelectionChange(newSelected);
                      }}
                      disabled={disabled}
                      preventDeselection={processingPurpose.mandatory}
                    />
                  )}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "p-4 pt-0 bg-white rounded-b-lg",
                isHighContrast && "hc-processing-accordion-content",
              )}
            >
              {renderContent()}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
  }
}
