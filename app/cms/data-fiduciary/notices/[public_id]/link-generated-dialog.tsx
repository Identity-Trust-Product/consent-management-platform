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

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface LinkGeneratedDialogProps {
  isOpen: boolean;
  onClose: () => void;
  link: string;
}

export function LinkGeneratedDialog({
  isOpen,
  onClose,
  link,
}: LinkGeneratedDialogProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      toast.success("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy link:", error);
      toast.error("Failed to copy link");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="pt-8">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2">
            <Check className="h-5 w-5 text-green-600" />
            <span>Link Generated Successfully</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 flex flex-col items-center">
          <div className="p-3 bg-muted rounded-lg max-w-md w-full">
            <span className="block font-mono text-sm text-muted-foreground truncate">
              {link}
            </span>
          </div>
          <Button onClick={handleCopyLink} className="w-fit" disabled={copied}>
            <Copy className="h-4 w-4 mr-2" />
            {copied ? "Copied!" : "Copy Link"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
