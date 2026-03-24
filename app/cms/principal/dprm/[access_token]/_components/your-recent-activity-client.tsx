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
import { Button } from "@/components/ui/button";
import { Activity, ArrowUpRight } from "lucide-react";

export function YourRecentActivityClient() {
  const isMobile = useIsMobile();

  // Hardcoded values
  const title = "Your Recent Activity";
  const message = "No recent activity to display.";

  if (isMobile) {
    return (
      <DPRMAccordion defaultValue="your-recent-activity">
        <DPRMAccordionItem value="your-recent-activity">
          <DPRMAccordionTrigger>
            <DPRMAccordionHeader>
              <div className="flex items-center gap-3 flex-1">
                <DPRMAccordionIcon>
                  <Activity className="w-4 h-4" />
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
            <div className="flex items-center justify-center py-6">
              <p className="text-neutral-400 text-sm text-center">{message}</p>
            </div>
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
              <Activity className="w-4 h-4" />
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
        <div className="flex items-center justify-center py-10">
          <p className="text-neutral-300 text-sm text-center">{message}</p>
        </div>
      </DPRMCardContent>
    </DPRMCard>
  );
}
