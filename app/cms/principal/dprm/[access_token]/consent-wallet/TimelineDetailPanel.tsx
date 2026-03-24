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

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CheckCircle2,
  Clock,
  History,
  XCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  AlertCircle,
  Baby,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TimelineEvent, TimelineSection, TimelineAttribute, UserAttributeDictionary } from "./types";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { getLocalizedContent } from "./utils";
import { hi, bn, gu, kn, ta, te, enUS } from "date-fns/locale";

const localeMap: Record<string, any> = {
  hi, bn, gu, kn, ta, te, en: enUS
};

// --- Helper: Event Styles matching the screenshot ---
const getEventStyles = (type: string) => {
  switch (type) {
    case "GRANTED":
      return {
        bg: "bg-[#ECFDF5]", // Light Green
        border: "border-green-100",
        text: "text-green-900",
        icon: <CheckCircle2 className="w-5 h-5 text-green-600" />,
        labelKey: "Consent Granted on",
      };
    case "UPDATED":
      return {
        bg: "bg-[#FFFBF0]", // Light Beige/Cream
        border: "border-[#FDE6C8]", // Soft Orange Border
        text: "text-[#433422]", // Dark Brown Text
        icon: <History className="w-5 h-5 text-[#D97706]" />, // Dark Orange Icon
        labelKey: "Consent Updated on",
      };
    case "REVOKED":
      return {
        bg: "bg-[#FEF2F2]",
        border: "border-red-100",
        text: "text-red-900",
        icon: <XCircle className="w-5 h-5 text-red-600" />,
        labelKey: "Consents Withdrawn on",
      };
    case "EXPIRED":
      return {
        bg: "bg-[#FEF2F2]",
        border: "border-red-100",
        text: "text-red-900",
        icon: <Clock className="w-5 h-5 text-red-600" />,
        labelKey: "Consent Expired on",
      };
    default:
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        text: "text-gray-800",
        icon: <AlertCircle className="w-5 h-5 text-gray-600" />,
        labelKey: "Event on",
      };
  }
};

export function TimelineDetailPanel({
  event,
  isMobileView,
  userAttributes,
}: {
  event: TimelineEvent;
  isMobileView?: boolean;
  userAttributes: UserAttributeDictionary;
}) {
  const { t } = useNoticeTranslation("dprm");
  const { currentLanguage } = useNoticeLanguage();

  const styles = getEventStyles(event.type);
  const essentialSections = event.details.sections.filter((s) => s.isEssential);
  const optionalSections = event.details.sections.filter((s) => !s.isEssential);

  return (
    <div className="flex flex-col h-full bg-[#F9FAFB] font-sans overflow-hidden rounded-t-3xl md:rounded-none">
      {/* --- Header --- */}
      <div className={cn("p-5 border-b shrink-0", styles.bg, styles.border)}>
        {/* Minor Badge (Brown Capsule) */}
        {event.isMinor && (
          <div className="mb-3 inline-flex items-center gap-2 bg-[#6D5646] rounded-full px-3 py-1 w-fit shadow-sm">
            <Baby className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-medium text-white">
              {event.dataPrincipal || "Minor Account"}
            </span>
          </div>
        )}

        <div className="flex items-start gap-3">
          <div className="mt-0.5">{styles.icon}</div>
          <div className="flex-1">
            <h2 className={cn("font-bold text-base", styles.text)}>
              {t(styles.labelKey)}
            </h2>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              {format(new Date(event.date), "dd MMM, yy | h:mm a", { locale: localeMap[currentLanguage] || enUS })}
            </p>
            <p className="text-sm font-semibold text-gray-900 mt-2">
              {t("For")} {getLocalizedContent({ translations: event.serviceTranslations }, event.serviceName, currentLanguage)}
            </p>
          </div>
        </div>
      </div>

      {/* --- Body --- */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="p-4 space-y-4 pb-8">
          {/* Essential Purposes Group */}
          {essentialSections.length > 0 && (
            <PurposeGroup
              title={t("Essential Purposes")}
              sections={essentialSections}
              defaultOpen={true}
              eventType={event.type}
              userAttributes={userAttributes}
              currentLanguage={currentLanguage}
              t={t}
            />
          )}

          {/* Optional Purposes Group */}
          {optionalSections.length > 0 && (
            <PurposeGroup
              title={t("Optional Purposes")}
              sections={optionalSections}
              defaultOpen={true}
              eventType={event.type}
              userAttributes={userAttributes}
              currentLanguage={currentLanguage}
              t={t}
            />
          )}
        </div>
      </ScrollArea>

      {/* --- Footer --- */}
      <div className="p-3 bg-[#F0FDF4] border-t border-green-100 flex justify-center items-center gap-2 shrink-0">
        <ShieldCheck className="w-4 h-4 text-green-700" />
        <span className="text-xs font-semibold text-green-800">
          {t("Your information is safe with us")}
        </span>
      </div>
    </div>
  );
}

// --- Group Component ---

function PurposeGroup({
  title,
  sections,
  defaultOpen,
  eventType,
  userAttributes,
  currentLanguage,
  t,
}: {
  title: string;
  sections: TimelineSection[];
  defaultOpen: boolean;
  eventType: string;
  userAttributes: UserAttributeDictionary;
  currentLanguage: string;
  t: (key: string) => string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? "item-1" : undefined}
      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
    >
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="px-4 py-3 bg-white hover:bg-gray-50 transition-colors group border-b border-gray-100">
          <div className="flex items-center gap-2 w-full">
            <span className="font-bold text-sm text-gray-900">{title}</span>
            <span className="text-xs text-gray-400 font-normal">
              {t("will be used for")}
            </span>
            <Info className="w-3.5 h-3.5 text-gray-300 ml-auto" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4 pt-4 bg-gray-50/30">
          <div className="space-y-4">
            {sections.map((section, idx) => (
              <PurposeCard key={idx} section={section} eventType={eventType} userAttributes={userAttributes} currentLanguage={currentLanguage} t={t} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// --- Card Component ---

function PurposeCard({
  section,
  eventType,
  userAttributes,
  currentLanguage,
  t,
}: {
  section: TimelineSection;
  eventType: string;
  userAttributes: UserAttributeDictionary;
  currentLanguage: string;
  t: (key: string) => string;
}) {
  const [isDataOpen, setIsDataOpen] = useState(true); // Default open to show attributes as per screenshot

  // Calculate Diff Stats
  const addedCount = section.attributes.filter(
    (a) => a.status === "added"
  ).length;
  const removedCount = section.attributes.filter(
    (a) => a.status === "removed"
  ).length;

  const hasDiffs = addedCount > 0 || removedCount > 0;

  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.05)]">
      {/* Optional Purpose Label */}
      {/* {!section.isEssential && section.consentPurposeName && (
        <div className="text-[10px] uppercase tracking-wider text-blue-600 font-bold mb-2">
          {section.consentPurposeName}
        </div>
      )} */}

      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-sm text-gray-900">
          {getLocalizedContent({ translations: section.translations }, section.title, currentLanguage)}
        </h3>
      </div>

      {/* --- CHANGE SUMMARY BOX (Beige) --- */}
      {eventType === "UPDATED" &&
        section.changes?.summaryText &&
        section.changes.summaryText.length > 0 && (
          <div className="bg-[#ED8E001A] border-l border-[#AA5800] p-4 mb-4">
            <ol className="list-decimal list-inside space-y-1.5">
              {section.changes.summaryText.map((txt, i) => (
                <li key={i} className="text-xs font-medium text-[#92400E]">
                  {txt}
                </li>
              ))}
            </ol>
          </div>
        )}

      <p className="text-xs text-gray-500 leading-relaxed mb-4">
        {getLocalizedContent(
          { translations: section.translations },
          section.description || "We use this data to provide you with relevant services and updates based on your preferences.",
          currentLanguage,
          "description"
        )}
      </p>

      {/* --- Personal Data Section --- */}
      <div className="border-t border-gray-100 pt-3">
        <button
          onClick={() => setIsDataOpen(!isDataOpen)}
          className="w-full flex items-center justify-between group"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-800">
              {t("Personal Data Used")}
            </span>

            {/* Diff Badges (e.g. "03 Added") */}
            {hasDiffs && (
              <div className="flex gap-1 ml-1">
                {addedCount > 0 && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FFF7ED] text-[#C2410C]">
                    {String(addedCount).padStart(2, "0")} {t("Added")}
                  </span>
                )}
                {removedCount > 0 && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FFF7ED] text-[#C2410C]">
                    {String(removedCount).padStart(2, "0")} {t("Removed")}
                  </span>
                )}
              </div>
            )}
          </div>
          {isDataOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>

        {/* Attributes List */}
        {isDataOpen && (
          <div className="mt-3 flex flex-wrap gap-2">
            {section.attributes.map((attr, idx) => (
              <AttributePill key={idx} attr={attr} userAttributes={userAttributes} currentLanguage={currentLanguage} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Pill Component ---

function AttributePill({ attr, userAttributes, currentLanguage }: { attr: TimelineAttribute, userAttributes: UserAttributeDictionary, currentLanguage: string }) {
  const baseClass =
    "px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors cursor-default";

  const displayName = getLocalizedContent(userAttributes[attr.name], attr.name, currentLanguage);

  if (attr.status === "added") {
    return (
      <span
        className={cn(
          baseClass,
          "bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]"
        )}
      >
        {displayName}
      </span>
    );
  }

  if (attr.status === "removed") {
    // Matching the "Company Address" style in screenshot (Orange background, no strikethrough usually for just 'removed' tag unless explicitly revoked context, but based on screenshot 2 it looks solid orange)
    // Screenshot 2 shows "Company Address" as orange-ish background.
    return (
      <span
        className={cn(
          baseClass,
          "bg-[#FFEDD5] text-[#9A3412] border-[#FED7AA]"
        )}
      >
        {displayName}
      </span>
    );
  }

  // Default / Unchanged / Granted
  return (
    <span
      className={cn(baseClass, "bg-[#F3F4F6] text-[#374151] border-[#E5E7EB]")}
    >
      {displayName}
    </span>
  );
}
