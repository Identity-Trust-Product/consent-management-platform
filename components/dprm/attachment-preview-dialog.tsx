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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatFileSize } from "@/lib/schemas/file-upload";
import { Download, Loader2, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface AttachmentPreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  attachment: {
    id: number;
    fileName: string;
    fileSize: number;
    mimeType: string;
    url?: string;
  } | null;
  onDownload?: () => Promise<void> | void;
}

export function AttachmentPreviewDialog({
  open,
  onOpenChange,
  attachment,
  onDownload,
}: AttachmentPreviewDialogProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!attachment) return null;

  const isImage = attachment.mimeType.startsWith("image/");
  const isPdf = attachment.mimeType === "application/pdf";

  const handleDownload = async () => {
    if (!onDownload || isDownloading) return;
    setIsDownloading(true);
    try {
      await onDownload();
    } finally {
      setIsDownloading(false);
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50));
  const handleResetZoom = () => setZoom(100);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-4xl lg:max-w-5xl h-[90vh] sm:h-[85vh] flex flex-col p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-3 sm:px-6 py-3 sm:py-4 border-b shrink-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0 pr-2 sm:pr-4">
              <DialogTitle
                className="text-sm sm:text-base truncate"
                title={attachment.fileName}
              >
                {attachment.fileName}
              </DialogTitle>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                {formatFileSize(attachment.fileSize)}
              </p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {isImage && (
                <>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={handleZoomOut}
                    disabled={zoom <= 50}
                    title="Zoom out"
                    className="h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <span className="text-xs sm:text-sm font-medium min-w-[40px] sm:min-w-[50px] text-center hidden sm:inline">
                    {zoom}%
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={handleZoomIn}
                    disabled={zoom >= 200}
                    title="Zoom in"
                    className="h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleResetZoom}
                    className="h-8 sm:h-9"
                  >
                    Reset
                  </Button>
                  <div className="h-6 w-px bg-border mx-0.5 sm:mx-1 hidden sm:block" />
                </>
              )}
              {onDownload && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="h-8 sm:h-9"
                >
                  {isDownloading ? (
                    <Loader2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-2 animate-spin" />
                  ) : (
                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-2" />
                  )}
                  <span className="hidden sm:inline">Download</span>
                </Button>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-auto bg-muted/30 relative touch-pan-y">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Loading...</p>
              </div>
            </div>
          )}

          {isImage && attachment.url && (
            <div className="flex items-center justify-center min-h-full p-2 sm:p-4">
              <img
                src={attachment.url}
                alt={attachment.fileName}
                className="max-w-full max-h-full object-contain transition-transform touch-pinch-zoom"
                style={{ transform: `scale(${zoom / 100})` }}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            </div>
          )}

          {isPdf && attachment.url && (
            <iframe
              src={attachment.url}
              className="w-full h-full border-0"
              title={attachment.fileName}
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
