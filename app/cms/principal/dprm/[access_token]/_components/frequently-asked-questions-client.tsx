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
  DPRMAccordionDescription,
} from "@/components/dprm/dprm-accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";

export function FrequentlyAskedQuestionsClient() {
  const isMobile = useIsMobile();

  // Hardcoded values
  const title = "Frequently Asked Questions";
  const description = "Read more about DPDP act and your rights here.";

  if (isMobile) {
    return (
      <DPRMAccordion defaultValue="frequently-asked-questions">
        <DPRMAccordionItem value="frequently-asked-questions">
          <DPRMAccordionTrigger>
            <DPRMAccordionHeader>
              <div className="flex items-center gap-3 flex-1">
                <DPRMAccordionIcon>
                  <HelpCircle className="w-4 h-4" />
                </DPRMAccordionIcon>
                <DPRMAccordionTitle>{title}</DPRMAccordionTitle>
              </div>
            </DPRMAccordionHeader>
          </DPRMAccordionTrigger>
          <DPRMAccordionContent>
            <div className="space-y-3">
              <DPRMAccordionDescription>{description}</DPRMAccordionDescription>
              <div className="flex gap-4 my-4">
                <Button
                  variant="outline"
                  className="border border-primary-500 text-primary-500 w-full"
                >
                  Read FAQs
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
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
            <HelpCircle className="w-4 h-4" />
          </DPRMCardIcon>
          <div className="flex-1">
            <DPRMCardTitle>{title}</DPRMCardTitle>
            <DPRMCardDescription>{description}</DPRMCardDescription>
            <div className="flex gap-4 my-4">
              <Button
                variant="outline"
                className="border border-primary-500 text-primary-500"
              >
                Read FAQs
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </DPRMCardHeader>
    </DPRMCard>
  );
}
