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

// FILE: app/consent-wallet/ConsentList.tsx
"use client";

import { ConsentWithRelations } from "./types";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataProcessorOverlay } from "./DataProcessorOverlay";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { getLocalizedContent } from "./utils";
import { UserAttributeDictionary } from "./types";
import { format } from "date-fns";

interface ConsentListProps {
  consents: ConsentWithRelations[];
  status: "active" | "expired" | "withdrawn";
  userAttributes: UserAttributeDictionary;
}

export function ConsentList({ consents, status, userAttributes }: ConsentListProps) {
  const { t } = useNoticeTranslation("dprm");
  const { currentLanguage } = useNoticeLanguage();

  if (consents.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">{t("No consents found")}.</div>
    );
  }

  // 1. Group Consents by CONSENT PURPOSE Name
  // Example Map: { "Marketing": [Consent1, Consent2], "Strictly Necessary": [Consent3] }
  const groupedConsents = consents.reduce((acc, consent) => {
    const purposeName = getLocalizedContent(
      consent.consentPurpose,
      consent.consentPurpose?.name || "General Consent",
      currentLanguage
    );
    if (!acc[purposeName]) {
      acc[purposeName] = [];
    }
    acc[purposeName].push(consent);
    return acc;
  }, {} as Record<string, ConsentWithRelations[]>);

  return (
    <div className="space-y-6 pb-20">
      {/* The "Purpose of Consent" Label */}
      <div className="font-semibold text-sm text-gray-900 mb-2">
        {t("Purpose Master")}
      </div>

      {/* Grouped Accordion */}
      <Accordion
        type="multiple"
        defaultValue={Object.keys(groupedConsents)}
        className="space-y-4"
      >
        {Object.entries(groupedConsents).map(
          ([purposeName, groupConsents], idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              {/* Accordion Header (Consent Purpose) */}
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-50/50">
                <span className="text-base font-semibold text-gray-900">
                  {purposeName}
                </span>
              </AccordionTrigger>

              {/* Accordion Content (List of specific Processing Purposes) */}
              <AccordionContent className="px-0 pb-0 border-t border-gray-100">
                <div className="divide-y divide-gray-100">
                  {groupConsents.map((consent) => (
                    <ConsentItem
                      key={consent.publicId}
                      consent={consent}
                      status={status}
                      userAttributes={userAttributes}
                      currentLanguage={currentLanguage}
                      t={t}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>

      {/* Security Footer */}
      {/* <div className="flex items-center justify-center gap-2 pt-6 opacity-80">
         <span className="text-xs font-bold text-gray-500 tracking-wider">SECURED BY</span>

         <div className="flex items-center gap-1">
            <div className="bg-red-600 text-white text-[10px] font-bold px-1 rounded-sm">ID</div>
            <span className="text-gray-700 font-bold text-sm">fy</span>
         </div>
      </div> */}
    </div>
  );
}

// --- Individual Row Component ---
function ConsentItem({
  consent,
  status,
  userAttributes,
  currentLanguage,
  t,
}: {
  consent: ConsentWithRelations;
  status: string;
  userAttributes: UserAttributeDictionary;
  currentLanguage: string;
  t: (key: string) => string;
}) {
  const pp = consent.processingPurpose;
  const ppName = getLocalizedContent(pp, pp?.name || "Data Processing", currentLanguage);

  const description = getLocalizedContent(
    pp,
    pp?.description || "To allow the service provider to process your data for this purpose.",
    currentLanguage,
    "description"
  );

  // Extract Data Processors for the Overlay
  // We collect ALL processors attached to this processing purpose
  const processors =
    pp?.processingPurposeToDataProcessors?.map(
      (rel) => rel.dataProcessor.brandName || rel.dataProcessor.legalName
    ) || [];

  return (
    <div className="p-5 bg-white">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-base font-medium text-gray-900">{ppName}</h4>
        {/* Optional: Show Badge if Revoked/Expired inside the item */}
        {status !== "active" && (
          <Badge variant="secondary" className="text-[10px] h-5">
            {t(status === "expired" ? "Expired" : "Revoked")}
          </Badge>
        )}
      </div>

      <p className="text-sm text-gray-500 leading-relaxed mb-2">
        {description}
      </p>

      {/* "View more" link (Visual only for now, or expandable) */}
      {/* <button className="text-sm text-blue-600 font-medium hover:underline mb-4">
        View more
      </button> */}

      {/* Personal Data Section */}
      <div className="mb-4">
        <h5 className="text-xs font-semibold text-gray-900 mb-2">
          {t("Personal Data")}
        </h5>
        <div className="flex flex-wrap gap-2">
          {consent.userAttributeNames.map((attr) => (
            <div
              key={attr}
              className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1.5"
            >
              <span className="text-xs text-gray-700 font-medium mr-1">
                {getLocalizedContent(userAttributes[attr], attr, currentLanguage)}
              </span>
              <DataProcessorOverlay
                attributeName={attr}
                processors={processors}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Date Footer */}
      <div className="text-xs text-gray-500 font-medium pt-2">
        {t("Consent Provided On")} <br />
        <span className="text-gray-700 text-sm">
          {format(new Date(consent.insertedAt), "dd/MM/yyyy")}
        </span>
      </div>
    </div>
  );
}
