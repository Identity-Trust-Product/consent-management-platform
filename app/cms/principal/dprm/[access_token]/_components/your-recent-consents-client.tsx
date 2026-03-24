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

import React, { useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DPRMCard,
  DPRMCardContent,
  DPRMCardHeader,
  DPRMCardTitle,
  DPRMCardIcon,
} from "@/components/dprm/dprm-card";
import {
  DPRMAccordion,
  DPRMAccordionItem,
  DPRMAccordionTrigger,
  DPRMAccordionContent,
  DPRMAccordionHeader,
  DPRMAccordionIcon,
  DPRMAccordionTitle,
} from "@/components/dprm/dprm-accordion";
import { ConsentsOverview } from "@/app/cms/principal/dprm/[access_token]/_components/consents-overview";
import { UserAttributeWithProcessingPurposes } from "@/lib/services/consents-service";
import { Button } from "@/components/ui/button";
import { FileText, ArrowUpRight } from "lucide-react";

interface YourRecentConsentsClientProps {
  consents: UserAttributeWithProcessingPurposes[];
}

function YourRecentConsentsClientComponent({
  consents,
}: YourRecentConsentsClientProps) {
  const isMobile = useIsMobile();

  // Memoize the consents to prevent unnecessary re-renders
  const memoizedConsents = useMemo(() => consents, [consents]);

  // Hardcoded values
  const title = "Your Consents";
  const message = "No consents available.";

  if (isMobile) {
    return (
      <DPRMAccordion defaultValue="your-recent-consents">
        <DPRMAccordionItem value="your-recent-consents">
          <DPRMAccordionTrigger>
            <DPRMAccordionHeader>
              <div className="flex items-center gap-3 flex-1">
                <DPRMAccordionIcon>
                  <FileText className="w-4 h-4" />
                </DPRMAccordionIcon>
                <DPRMAccordionTitle>{title}</DPRMAccordionTitle>
              </div>
              <div className="flex items-center text-primary-500 border border-primary-500 px-2 py-1 rounded text-xs">
                View All
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </div>
            </DPRMAccordionHeader>
          </DPRMAccordionTrigger>
          <DPRMAccordionContent>
            {memoizedConsents.length === 0 ? (
              <div className="flex items-center justify-center py-6">
                <p className="text-neutral-400 text-sm text-center">
                  {message}
                </p>
              </div>
            ) : (
              <ConsentsOverview consents={memoizedConsents} />
            )}
          </DPRMAccordionContent>
        </DPRMAccordionItem>
      </DPRMAccordion>
    );
  }

  return (
    <DPRMCard>
      <DPRMCardHeader>
        <div className="flex items-center justify-between">
          <DPRMCardTitle className="flex items-center gap-2">
            <DPRMCardIcon>
              <FileText className="w-4 h-4" />
            </DPRMCardIcon>
            {title}
          </DPRMCardTitle>
          <Button
            variant="outline"
            size="sm"
            className="border border-primary-500 text-primary-500 hover:bg-transparent"
          >
            View All
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </DPRMCardHeader>
      <DPRMCardContent>
        {memoizedConsents.length === 0 ? (
          <div className="flex items-center justify-center py-10">
            <p className="text-neutral-300 text-sm text-center">{message}</p>
          </div>
        ) : (
          <ConsentsOverview consents={memoizedConsents} />
        )}
      </DPRMCardContent>
    </DPRMCard>
  );
}

// Memoize the component to prevent unnecessary re-renders
export const YourRecentConsentsClient = React.memo(
  YourRecentConsentsClientComponent
);
