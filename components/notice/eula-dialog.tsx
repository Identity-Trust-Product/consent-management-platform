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

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

const DialogLayout = React.forwardRef<
  HTMLDivElement,
  {
    onClose: () => void;
    isHighContrast: boolean;
    legalDocuments: Record<string, string>;
    className?: string;
    style?: React.CSSProperties;
  }
>(({ onClose, isHighContrast, legalDocuments, className, style }, ref) => {
  const { t } = useNoticeTranslation();
  const documentEntries = Object.entries(legalDocuments);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className={cn(
        "border bg-background shadow-lg duration-200",
        "w-full max-w-md gap-4 rounded-b-lg p-6 text-left sm:rounded-lg",
        isHighContrast && "hc-dialog-content",
        className,
      )}
      style={style}
      onClick={(e) => e.stopPropagation()}
    >
      <DialogHeader className="px-0 mb-4">
        <div className="flex items-center justify-between">
          <DialogTitle className={cn(isHighContrast && "text-white")}>
            {t("Redirectional URL")}
          </DialogTitle>
          <button
            onClick={onClose}
            className={cn(
              "rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
              isHighContrast && "text-[#AAAAAA] hover:text-white",
            )}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </DialogHeader>

      <div className="space-y-2 px-0 min-h-[100px]">
        {documentEntries.map(([name, url], index) => (
          <div key={name} className="flex items-center space-x-2">
            <span
              className={cn(
                "text-sm font-medium",
                isHighContrast && "text-white",
              )}
            >
              {index + 1}.
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-sm underline flex items-center space-x-1",
                isHighContrast
                  ? "text-yellow-400 hover:text-yellow-300"
                  : "text-blue-600 hover:text-blue-800",
              )}
            >
              <span>{name}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
});
DialogLayout.displayName = "DialogLayout";

interface EulaDialogProps {
  isOpen: boolean;
  onClose: () => void;
  legalDocuments: Record<string, string>;
  container?: HTMLElement | null;
}

export function EulaDialog({
  isOpen,
  onClose,
  legalDocuments,
  container,
}: EulaDialogProps) {
  const { isHighContrast } = useHighContrast();
  const isContained = !!container;

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  // Handle click outside
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal container={container}>
        {!isContained && (
          <DialogOverlay
            className="fixed inset-0 bg-black/50"
            onClick={handleOverlayClick}
          />
        )}
        {/* Manual overlay for contained mode - provides backdrop without blocking scroll */}
        {isContained && (
          <div
            className="absolute inset-0 bg-black/50 z-40"
            onClick={handleOverlayClick}
          />
        )}
        <div
          className={cn("z-50 flex items-center justify-center", {
            "absolute inset-0": isContained,
            "fixed inset-0": !isContained,
          })}
          onClick={handleOverlayClick}
        >
          <DialogLayout
            onClose={onClose}
            isHighContrast={isHighContrast}
            legalDocuments={legalDocuments}
          />
        </div>
      </DialogPortal>
    </Dialog>
  );
}
