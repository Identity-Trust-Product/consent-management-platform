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

import { useIsMobile } from "@/hooks/use-mobile";
import {
  DPRMCard,
  DPRMCardContent,
  DPRMCardHeader,
  DPRMCardTitle,
  DPRMCardIcon,
  DPRMCardDescription,
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
import { Badge } from "@/components/ui/badge";
import AnimatedBellIcon from "./bell-icon";

export function ConsentUpdatesClient() {
  const isMobile = useIsMobile();

  // Hardcoded values
  const title = "Consent Updates";
  const description = "Find your consent updates here";
  const count = 0;
  const message = "All caught up! You're in control of your data privacy.";

  if (isMobile) {
    return (
      <DPRMAccordion defaultValue="consent-updates">
        <DPRMAccordionItem value="consent-updates">
          <DPRMAccordionTrigger>
            <DPRMAccordionHeader>
              <div className="flex items-center gap-3 flex-1">
                <DPRMAccordionIcon>
                  <AnimatedBellIcon />
                </DPRMAccordionIcon>
                <div className="flex items-center gap-2">
                  <DPRMAccordionTitle>{title}</DPRMAccordionTitle>
                  <Badge variant="secondary" className="text-xs">
                    {count}
                  </Badge>
                </div>
              </div>
            </DPRMAccordionHeader>
          </DPRMAccordionTrigger>
          <DPRMAccordionContent>
            <div className="space-y-3">
              <div className="flex max-w-[80%]">
                <p className="text-neutral-400 text-sm">{message}</p>
              </div>
            </div>
          </DPRMAccordionContent>
        </DPRMAccordionItem>
      </DPRMAccordion>
    );
  }

  return (
    <DPRMCard>
      <DPRMCardHeader>
        <div className="flex items-start gap-3">
          <DPRMCardIcon>
            <AnimatedBellIcon />
          </DPRMCardIcon>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <DPRMCardTitle>{title}</DPRMCardTitle>
              <Badge variant="secondary">{count}</Badge>
            </div>
            <DPRMCardDescription>{description}</DPRMCardDescription>
          </div>
        </div>
      </DPRMCardHeader>
      <DPRMCardContent>
        <div className="flex items-center justify-center py-10">
          <p className="text-neutral-300 text-sm text-center">{message}</p>
        </div>
      </DPRMCardContent>
    </DPRMCard>
  );
}
