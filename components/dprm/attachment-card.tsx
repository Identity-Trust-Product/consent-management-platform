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

import { Button } from "@/components/ui/button";
import { formatFileSize, getFileIcon } from "@/lib/schemas/file-upload";
import { Download, Eye, Loader2 } from "lucide-react";
import { useState } from "react";

interface AttachmentCardProps {
  attachment: {
    id: number;
    fileName: string;
    fileSize: number;
    mimeType: string;
  };
  onDownload?: () => Promise<void> | void;
  onPreview?: () => Promise<void> | void;
  showActions?: boolean;
  compact?: boolean;
  variant?: "default" | "agent" | "principal";
}

export function AttachmentCard({
  attachment,
  onDownload,
  onPreview,
  showActions = true,
  compact = false,
  variant = "default",
}: AttachmentCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const icon = getFileIcon(attachment.mimeType);
  const sizeFormatted = formatFileSize(attachment.fileSize);

  const isPreviewable =
    onPreview &&
    (attachment.mimeType.startsWith("image/") ||
      attachment.mimeType === "application/pdf");

  const handleDownload = async () => {
    if (!onDownload || isDownloading) return;
    setIsDownloading(true);
    try {
      await onDownload();
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePreview = async () => {
    if (!onPreview) return;
    await onPreview();
  };

  // Get glassmorphism colors based on variant
  const getGlassyStyles = () => {
    if (variant === "agent") {
      return "bg-blue-400/15 dark:bg-blue-500/20 backdrop-blur-md border border-blue-300/40 dark:border-blue-400/30 shadow-sm hover:bg-blue-400/25 dark:hover:bg-blue-500/30 hover:border-blue-300/60 dark:hover:border-blue-400/50 transition-all duration-300";
    }
    if (variant === "principal") {
      return "bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 shadow-sm hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300";
    }
    return "bg-background/60 dark:bg-background/40 backdrop-blur-md border border-border/50 shadow-sm hover:bg-accent/60 dark:hover:bg-accent/40 transition-all duration-300";
  };

  if (compact) {
    return (
      <div
        className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg transition-all ${getGlassyStyles()}`}
      >
        <span className="text-base sm:text-lg flex-shrink-0">{icon}</span>
        <div className="flex flex-col min-w-0 flex-1">
          <span
            className="text-[11px] sm:text-xs font-medium truncate max-w-[120px] sm:max-w-[180px] md:max-w-[200px]"
            title={attachment.fileName}
          >
            {attachment.fileName}
          </span>
          <span
            className={`text-[9px] sm:text-[10px] ${variant === "principal"
                ? "text-white/70"
                : "text-muted-foreground"
              }`}
          >
            {sizeFormatted}
          </span>
        </div>
        {showActions && (
          <div className="flex gap-0.5 sm:gap-1 ml-1 flex-shrink-0">
            {isPreviewable && (
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 sm:h-7 sm:w-7 hover:bg-background/50"
                onClick={handlePreview}
                title="Preview"
              >
                <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </Button>
            )}
            {onDownload && (
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 sm:h-7 sm:w-7 hover:bg-background/50"
                onClick={handleDownload}
                disabled={isDownloading}
                title="Download"
              >
                {isDownloading ? (
                  <Loader2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin" />
                ) : (
                  <Download className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                )}
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg transition-all ${getGlassyStyles()}`}
    >
      <div className="text-2xl sm:text-3xl flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p
          className="text-xs sm:text-sm font-medium truncate"
          title={attachment.fileName}
        >
          {attachment.fileName}
        </p>
        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
          {sizeFormatted}
        </p>
      </div>
      {showActions && (
        <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
          {isPreviewable && (
            <Button
              size="icon"
              variant="ghost"
              onClick={handlePreview}
              title="Preview"
              className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-background/50"
            >
              <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          )}
          {onDownload && (
            <Button
              size="icon"
              variant="ghost"
              onClick={handleDownload}
              disabled={isDownloading}
              title="Download"
              className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-background/50"
            >
              {isDownloading ? (
                <Loader2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin" />
              ) : (
                <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              )}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
