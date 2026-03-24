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

import { regenerateWebhookSecret } from "@/actions/webhooks";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WebhookResponse } from "@/lib/schemas/webhook-schemas";
import { AlertCircle, CheckCircle2, Copy, Key } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface RegenerateSecretDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  webhook: WebhookResponse;
}

export function RegenerateSecretDialog({
  open,
  onOpenChange,
  webhook,
}: RegenerateSecretDialogProps) {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [newSecret, setNewSecret] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopySecret = async () => {
    if (!newSecret) return;

    try {
      await navigator.clipboard.writeText(newSecret);
      setIsCopied(true);
      toast.success("Signing secret copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Failed to copy signing secret");
    }
  };

  const handleRegenerate = async () => {
    setIsGenerating(true);
    try {
      const result = await regenerateWebhookSecret({ publicId: webhook.publicId });

      if (result.success && result.data) {
        setNewSecret(result.data.signingSecret);
        toast.success("Signing secret regenerated successfully!");
      } else {
        toast.error(result.error || "Failed to regenerate signing secret");
      }
    } catch {
      toast.error("Failed to regenerate signing secret");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClose = () => {
    if (newSecret) {
      router.refresh();
    }
    setNewSecret(null);
    setIsCopied(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        {!newSecret ? (
          <>
            <DialogHeader>
              <DialogTitle>Regenerate Signing Secret</DialogTitle>
              <DialogDescription>
                Generate a new signing secret for this webhook. The old secret
                will stop working immediately.
              </DialogDescription>
            </DialogHeader>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warning!</AlertTitle>
              <AlertDescription>
                This will invalidate the current signing secret. Make sure you
                update your webhook endpoint with the new secret before
                proceeding.
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Webhook URL</label>
                <div className="mt-1">
                  <code className="block p-3 bg-muted rounded-md text-sm font-mono break-all">
                    {webhook.endpointUrl}
                  </code>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleRegenerate} disabled={isGenerating}>
                {isGenerating ? "Generating..." : "Regenerate Secret"}
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Secret Regenerated Successfully
              </DialogTitle>
              <DialogDescription>
                Save the new signing secret below. You won&apos;t be able to see
                it again!
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important!</AlertTitle>
                <AlertDescription>
                  Store this signing secret securely. The old secret has been
                  invalidated. This is the only time the new secret will be
                  displayed.
                </AlertDescription>
              </Alert>

              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  New Signing Secret
                </label>
                <div className="mt-1 flex gap-2">
                  <code className="flex-1 p-3 bg-muted rounded-md text-sm font-mono break-all">
                    {newSecret}
                  </code>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopySecret}
                    className="shrink-0"
                  >
                    {isCopied ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleClose}>Done</Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
