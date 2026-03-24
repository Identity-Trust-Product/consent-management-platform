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

// FILE: app/consent-wallet/ProcessingPurposeList.tsx

"use client";

import { useState, useMemo } from "react";
import { Info, ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ConsentWithRelations } from "./types";

interface ProcessingPurposeListProps {
  consents: ConsentWithRelations[];
  status: "active" | "expired" | "withdrawn";
}

// Helper to format dates
const formatDate = (dateString: string | Date | null | undefined) => {
  if (!dateString) return "NA";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export function ProcessingPurposeList({
  consents,
  status,
}: ProcessingPurposeListProps) {
  // State to track which consent is currently selected for the modal
  const [selectedConsent, setSelectedConsent] =
    useState<ConsentWithRelations | null>(null);

  // Group/Filter consents (ensure unique processing purposes)
  const consentsByProcessing = useMemo(() => {
    const processingMap = new Map<string, ConsentWithRelations>();
    for (const consent of consents) {
      if (!consent.processingPurpose) continue;
      const ppId = consent.processingPurpose.publicId;
      if (!processingMap.has(ppId)) {
        processingMap.set(ppId, consent);
      }
    }
    return Array.from(processingMap.values());
  }, [consents]);

  return (
    <>
      {/* The List of Cards */}
      <div className="space-y-3">
        {consentsByProcessing.map((consent) => (
          <div
            key={consent.publicId}
            onClick={() => setSelectedConsent(consent)}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 active:bg-gray-100 cursor-pointer transition-colors"
          >
            <div className="flex flex-col gap-1">
              <span className="font-medium text-sm text-gray-900">
                {consent.processingPurpose.purposeOfProcessing.name}
              </span>
              <span className="text-xs text-gray-500 line-clamp-1">
                {consent.processingPurpose.description ||
                  "Click to view details"}
              </span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
        ))}
      </div>

      {/* The Bottom Drawer (Modal) */}
      <Drawer
        open={!!selectedConsent}
        onOpenChange={(open) => !open && setSelectedConsent(null)}
      >
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="flex justify-between items-start pb-4 border-b mb-4">
              <div className="text-left space-y-1">
                <DrawerTitle className="text-lg font-bold">
                  {selectedConsent?.processingPurpose.purposeOfProcessing.name}
                </DrawerTitle>
                <DrawerDescription className="text-left">
                  {/* {selectedConsent?.processingPurpose.description ||
                    "Details about this consent."} */}
                </DrawerDescription>
              </div>
            </DrawerHeader>

            <div className="px-4 pb-8 space-y-6 overflow-y-auto max-h-[70vh]">
              {/* Personal Data Section */}
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-900">
                  Personal Data
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedConsent?.userAttributeNames.map((attr) => (
                    <Badge
                      key={attr}
                      variant="secondary"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 font-normal text-xs border-none"
                    >
                      {attr}
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-3 w-3 ml-1.5 text-gray-400 inline-block align-middle" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Data attribute: {attr}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Dates Section */}
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Consent Provided On</span>
                  <span className="font-medium text-gray-900">
                    {formatDate(selectedConsent?.insertedAt)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Consent Expiry Date</span>
                  <span className="font-medium text-gray-900">
                    {formatDate(selectedConsent?.expiresAt)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Withdrawal Date</span>
                  <span className="font-medium text-gray-900">
                    {status === "withdrawn"
                      ? formatDate(selectedConsent?.updatedAt)
                      : "NA"}
                  </span>
                </div>
              </div>
            </div>

            {/* Optional Footer Actions */}
            {/* <DrawerFooter className="pt-2">
              {status === "active" && (
                 <Button variant="destructive" className="w-full">Revoke Consent</Button>
              )}
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter> */}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
