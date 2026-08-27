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

import { ConsentPurposeData, SelectionState } from "./types";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";
import { NoticeSelectButton } from "./notice-select-button";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { NoticeConsentDuration } from "./notice-consent-duration";

interface NoticeConsentPurposeProps {
  consentPurpose: ConsentPurposeData;
  children?: ReactNode;
  className?: string;
  selectionState?: SelectionState;
  onSelectionChange?: (selected: boolean) => void;
  showSelection?: boolean;
  disabled?: boolean;
  defaultOpen?: boolean;
  variant?: "accordion" | "card" | "simple";
  preventDeselection?: boolean; // New prop to prevent deselection when all processing purposes are mandatory
}

export function NoticeConsentPurpose({
  consentPurpose,
  children,
  className,
  selectionState = "none",
  onSelectionChange,
  showSelection = true,
  disabled = false,
  defaultOpen = false,
  variant = "accordion",
  preventDeselection = false,
}: NoticeConsentPurposeProps) {
  const { isHighContrast } = useHighContrast();
  const isMobile = useIsMobile();

  const renderContent = () => (
    <div className="space-y-4 pt-4">
      {children && <div className="space-y-3">{children}</div>}
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
                  isHighContrast && "hc-consent-purpose-title",
                )}
              >
                {consentPurpose.name}
              </h3>
              {isMobile && (
                <div className="mt-1">
                  <span className="px-2 py-1 bg-warning-100 text-warning-700 rounded text-xs font-normal border border-warning-200">
                    Consent Duration:{" "}
                    {consentPurpose.consentDuration
                      ? `${Math.floor(
                        consentPurpose.consentDuration / 24,
                      )} Days`
                      : "Until Purpose Met"}
                  </span>
                </div>
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
                preventDeselection={preventDeselection}
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
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3
                className={cn(
                  "font-semibold text-base text-gray-900",
                  isHighContrast && "hc-consent-purpose-title",
                )}
              >
                {consentPurpose.name}
              </h3>
              {isMobile && (
                <div className="mt-1">
                  <span className="px-2 py-1 bg-warning-100 text-warning-700 rounded text-xs font-normal border border-warning-200">
                    Consent Duration:{" "}
                    {consentPurpose.consentDuration
                      ? `${Math.floor(
                        consentPurpose.consentDuration / 24,
                      )} Days`
                      : "Until Purpose Met"}
                  </span>
                </div>
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
                preventDeselection={preventDeselection}
                size="sm"
                className="ml-3"
              />
            )}
          </div>
          {renderContent()}
        </div>
      );

    case "accordion":
    default:
      return (
        <Accordion
          type="single"
          collapsible
          defaultValue={
            defaultOpen ? `consent-purpose-${consentPurpose.id}` : ""
          }
          className={cn("w-full", disabled && "opacity-60", className)}
        >
          <AccordionItem
            value={`consent-purpose-${consentPurpose.id}`}
            className={cn(
              "border border-gray-200 rounded-lg !border-b",
              isHighContrast && "hc-consent-accordion-item",
            )}
          >
            <AccordionTrigger
              className={cn(
                "group flex items-center justify-between p-3 hover:no-underline [&>svg]:hidden",
                "bg-white", // keep trigger white always
                "data-[state=open]:border-b cursor-pointer",
                "rounded-lg", // always have rounded-lg
                "data-[state=open]:rounded-b-none", // remove bottom rounded when open
                disabled && "cursor-not-allowed",
                isHighContrast && "hc-accordion-trigger",
              )}
              disabled={disabled}
            >
              <div className="flex items-center gap-3 flex-1 text-left">
                <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                <div className="flex-1">
                  <div>
                    <h3
                      className={cn(
                        "font-semibold text-base",
                        isHighContrast && "hc-consent-purpose-title",
                      )}
                    >
                      {consentPurpose.name}
                    </h3>
                    {isMobile && (
                      <div className="mt-1">
                        <NoticeConsentDuration
                          consentDuration={consentPurpose.consentDuration}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <NoticeConsentDuration
                    consentDuration={consentPurpose.consentDuration}
                    className={cn(isMobile && "hidden")}
                  />
                  {showSelection && onSelectionChange && (
                    <NoticeSelectButton
                      selectionState={selectionState}
                      onSelectionChange={() => {
                        const newSelected = selectionState !== "all";
                        onSelectionChange(newSelected);
                      }}
                      disabled={disabled}
                      preventDeselection={preventDeselection}
                    />
                  )}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "rounded-b-lg bg-blue-50 p-4 pt-0",
                isHighContrast && "hc-accordion-content",
              )}
            >
              {renderContent()}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
  }
}
