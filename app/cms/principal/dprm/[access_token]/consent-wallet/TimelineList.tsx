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

import { TimelineEvent, TimelineEventType } from "./types";
import { cn } from "@/lib/utils";
import { format, isToday } from "date-fns";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { getLocalizedContent } from "./utils";
import { hi, bn, gu, kn, ta, te, enUS } from "date-fns/locale";

const localeMap: Record<string, any> = {
  hi, bn, gu, kn, ta, te, en: enUS
};
import {
  Check,
  RotateCcw,
  Minus,
  Clock,
  ChevronRight,
  Baby,
  Circle,
} from "lucide-react";

interface Props {
  events: TimelineEvent[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

// Custom Icon Component to match screenshot exact styles
function TimelineIcon({ type }: { type: TimelineEventType }) {
  const base =
    "w-6 h-6 rounded-full flex items-center justify-center z-10 border-[1.5px] bg-white";

  switch (type) {
    case "GRANTED":
      return (
        <div className={cn(base, "border-green-600")}>
          <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
        </div>
      );
    case "UPDATED":
      return (
        <div className={cn(base, "border-orange-500")}>
          <RotateCcw className="w-3.5 h-3.5 text-orange-500" />
        </div>
      ); // Refresh icon
    case "REVOKED":
      return (
        <div className={cn(base, "border-red-500")}>
          <Minus className="w-3.5 h-3.5 text-red-500" />
        </div>
      );
    case "EXPIRED":
      return (
        <div className={cn(base, "border-red-500")}>
          <Clock className="w-3.5 h-3.5 text-red-500" />
        </div>
      );
    default:
      return (
        <div className={cn(base, "border-gray-500")}>
          <Circle className="w-3.5 h-3.5 fill-gray-500 text-gray-500" />
        </div>
      );
  }
}

export function TimelineList({ events, selectedId, onSelect }: Props) {
  const { t } = useNoticeTranslation("dprm");
  const { currentLanguage } = useNoticeLanguage();
  return (
    <div className="relative pb-12">
      {/* Continuous Grey Line (Left aligned for both mobile/desktop) */}
      <div className="absolute left-[1.65rem] top-3 bottom-0 w-[1.5px] bg-gray-200" />

      <div className="space-y-6">
        {events.map((event) => {
          const isSelected = selectedId === event.id;
          const totalCount = event.details.sections.reduce(
            (sum, s) => sum + s.attributes.length,
            0
          );

          // Badge Colors based on screenshot
          const badgeStyle =
            event.type === "GRANTED"
              ? "bg-[#E8F5E9] text-[#2E7D32]" // Green
              : event.type === "UPDATED"
                ? "bg-[#FFF3E0] text-[#EF6C00]" // Orange
                : "bg-[#FFEBEE] text-[#C62828]"; // Red

          const dateLabel = format(event.date, "d MMM, yyyy | h:mm a", { locale: localeMap[currentLanguage] || enUS });

          return (
            <div key={event.id} className="relative pl-12 group">
              {/* --- HEADER ROW: Icon + Date --- */}
              <div className="absolute left-4 top-0 flex items-center gap-2">
                <div className="relative z-10">
                  <TimelineIcon type={event.type} />
                </div>
                <div className="text-xs font-medium text-gray-500 whitespace-nowrap pt-0.5">
                  {dateLabel}
                </div>
              </div>

              {/* --- BODY ROW: Card (Pushed down) --- */}
              <div className="pt-8">
                <div
                  onClick={() => onSelect(event.id)}
                  className={cn(
                    "bg-white border rounded-2xl p-4 cursor-pointer transition-all relative overflow-hidden hover:shadow-sm",
                    isSelected
                      ? "shadow-md border-gray-300"
                      : "border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                  )}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      {/* Top Row: Avatar + Action Text */}
                      <div className="flex items-center gap-2 mb-1">
                        {event.isMinor && (
                          <div className="w-6 h-6 rounded-full bg-[#4E342E] flex items-center justify-center text-white shrink-0">
                            <Baby className="w-4 h-4" />
                          </div>
                        )}

                        <div className="text-xs text-gray-500">
                          {event.isMinor ? `${event.dataPrincipal} - ` : ""}
                          <span className="font-semibold text-gray-900">
                            {event.type === "GRANTED" && t("Consent Granted")}
                            {event.type === "UPDATED" && t("Consent Updated")}
                            {event.type === "REVOKED" && t("Consents Withdrawn")}
                            {event.type === "EXPIRED" && t("Consent Expired")}
                          </span>
                          <span className="text-gray-500 font-normal ml-1">
                            {event.isMinor ? t("of minor for") : t("for")}
                          </span>
                        </div>
                      </div>

                      {/* Service Name */}
                      <div className="text-sm font-medium text-gray-900">
                        {getLocalizedContent({ translations: event.serviceTranslations }, event.serviceName, currentLanguage)}
                      </div>
                    </div>

                    {/* Right Side: Pill Badge + Chevron */}
                    <div className="flex items-center gap-3 pl-2">
                      <div
                        className={cn(
                          "px-2.5 py-1 rounded-md text-xs font-bold min-w-[2rem] text-center",
                          badgeStyle
                        )}
                      >
                        {String(totalCount).padStart(2, "0")}
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
