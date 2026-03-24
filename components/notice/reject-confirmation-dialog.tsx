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

import { Dialog, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { useEffect } from "react";
import { NoticeButton } from "./notice-button";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

const DialogLayout = React.forwardRef<
  HTMLDivElement,
  {
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    isHighContrast: boolean;
    className?: string;
    style?: React.CSSProperties;
  }
>(({ onOpenChange, onConfirm, isHighContrast, className, style }, ref) => {
  const { t } = useNoticeTranslation();

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
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between mb-4">
          <h2
            id="dialog-title"
            className={cn(
              "text-lg font-semibold leading-none tracking-tight pt-2",
              isHighContrast && "text-white",
            )}
          >
            {t("Declining consent?")}
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className={cn(
              "rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
              isHighContrast && "text-[#AAAAAA] hover:text-white",
            )}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <p
          id="dialog-description"
          className={cn(
            "text-sm text-muted-foreground",
            isHighContrast && "text-white",
          )}
        >
          {t(
            "Are you sure? Proceeding with this will prevent access to the services provided by your service provider. Declining consent means not sharing required data with your provider.",
          )}
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6">
        <div className="flex gap-3">
          <NoticeButton
            purpose="reject"
            onClick={() => onOpenChange(false)}
            className="flex-1"
            variant="outline"
          >
            {t("Cancel")}
          </NoticeButton>
          <NoticeButton
            purpose="accept"
            onClick={onConfirm}
            className="flex-1"
            variant="default"
          >
            {t("Yes, I do not consent")}
          </NoticeButton>
        </div>
      </div>
    </div>
  );
});
DialogLayout.displayName = "DialogLayout";

interface RejectConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  container?: HTMLElement | null;
}

export function RejectConfirmationDialog({
  open,
  onOpenChange,
  onConfirm,
  container,
}: RejectConfirmationDialogProps) {
  const { isHighContrast } = useHighContrast();
  const isContained = !!container;

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open, onOpenChange]);

  // Handle click outside
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
            onOpenChange={onOpenChange}
            onConfirm={onConfirm}
            isHighContrast={isHighContrast}
          />
        </div>
      </DialogPortal>
    </Dialog>
  );
}
