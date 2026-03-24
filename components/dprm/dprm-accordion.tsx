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

import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DPRMAccordionProps {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
}

export function DPRMAccordion({
  children,
  className = "",
  defaultValue,
}: DPRMAccordionProps) {
  return (
    <div className={`w-full ${className}`}>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={defaultValue}
      >
        {children}
      </Accordion>
    </div>
  );
}

interface DPRMAccordionItemProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function DPRMAccordionItem({
  children,
  value,
  className = "",
}: DPRMAccordionItemProps) {
  return (
    <AccordionItem value={value} className={`border-none ${className}`}>
      {children}
    </AccordionItem>
  );
}

interface DPRMAccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

export function DPRMAccordionTrigger({
  children,
  className = "",
}: DPRMAccordionTriggerProps) {
  return (
    <AccordionTrigger
      className={`hover:no-underline py-4 px-4 bg-white rounded-none ${className}`}
    >
      {children}
    </AccordionTrigger>
  );
}

interface DPRMAccordionContentProps {
  children: ReactNode;
  className?: string;
}

export function DPRMAccordionContent({
  children,
  className = "",
}: DPRMAccordionContentProps) {
  return (
    <AccordionContent className={`px-4 pb-4 bg-white ${className}`}>
      {children}
    </AccordionContent>
  );
}

interface DPRMAccordionHeaderProps {
  children: ReactNode;
  className?: string;
}

export function DPRMAccordionHeader({
  children,
  className = "",
}: DPRMAccordionHeaderProps) {
  return (
    <div className={`flex items-center gap-3 w-full ${className}`}>
      {children}
    </div>
  );
}

interface DPRMAccordionIconProps {
  children: ReactNode;
  className?: string;
}

export function DPRMAccordionIcon({
  children,
  className = "",
}: DPRMAccordionIconProps) {
  return (
    <div className={`p-2 bg-primary-20 rounded ${className}`}>{children}</div>
  );
}

interface DPRMAccordionTitleProps {
  children: ReactNode;
  className?: string;
}

export function DPRMAccordionTitle({
  children,
  className = "",
}: DPRMAccordionTitleProps) {
  return (
    <h3 className={`text-base font-medium text-neutral-700 ${className}`}>
      {children}
    </h3>
  );
}

interface DPRMAccordionDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function DPRMAccordionDescription({
  children,
  className = "",
}: DPRMAccordionDescriptionProps) {
  return <p className={`text-sm text-neutral-600 ${className}`}>{children}</p>;
}
