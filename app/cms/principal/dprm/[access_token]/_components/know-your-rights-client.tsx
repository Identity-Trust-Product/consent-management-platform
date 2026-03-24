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
import { Scale, ArrowLeft, ArrowRight } from "lucide-react";

export function KnowYourRightsClient() {
  const isMobile = useIsMobile();

  // Hardcoded values
  const title = "Know Your Rights";
  const rightTitle = "RIGHT TO CORRECTION AND ERASURE OF PERSONAL DATA:";
  const rightDescription =
    "You have the right to request that a Data Fiduciary correct, complete, or update your personal data if it is inaccurate, incomplete, or outdated.";

  if (isMobile) {
    return (
      <DPRMAccordion defaultValue="know-your-rights">
        <DPRMAccordionItem value="know-your-rights">
          <DPRMAccordionTrigger>
            <DPRMAccordionHeader>
              <div className="flex items-center gap-3 flex-1">
                <DPRMAccordionIcon>
                  <Scale className="w-4 h-4" />
                </DPRMAccordionIcon>
                <DPRMAccordionTitle>{title}</DPRMAccordionTitle>
              </div>
            </DPRMAccordionHeader>
          </DPRMAccordionTrigger>
          <DPRMAccordionContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">{rightTitle}</h4>
                <p className="text-gray-600 text-sm">{rightDescription}</p>
              </div>
              <div className="flex items-start gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-primary-500 text-primary-500"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-primary-500 text-primary-500"
                >
                  <ArrowRight className="w-4 h-4" />
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
            <Scale className="w-4 h-4" />
          </DPRMCardIcon>
          <div className="flex-1">
            <DPRMCardTitle>{title}</DPRMCardTitle>
            <div className="space-y-4 my-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">{rightTitle}</h4>
                <p className="text-gray-600 text-sm">{rightDescription}</p>
              </div>
              <div className="flex items-start gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-primary-500 text-primary-500"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-primary-500 text-primary-500"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DPRMCardHeader>
    </DPRMCard>
  );
}
