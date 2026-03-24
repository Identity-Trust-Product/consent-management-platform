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

// FILE: app/consent-wallet/DataProcessorOverlay.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

interface DataProcessorOverlayProps {
  attributeName: string;
  processors: string[]; // List of processor names (e.g. "ABC Infotech", "NAJA Bank")
}

export function DataProcessorOverlay({
  attributeName,
  processors,
}: DataProcessorOverlayProps) {
  const { t } = useNoticeTranslation("dprm");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="ml-1 inline-flex text-gray-400 hover:text-gray-600 focus:outline-none">
          <Info className="w-3.5 h-3.5" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-xl">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="text-lg font-semibold">
            {t("More Information")}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            {t("Data Processors")}
          </h4>

          {processors.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {processors.map((proc, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-normal px-3 py-1.5"
                >
                  {proc}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              {t("No external data processors listed for this attribute")}.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
