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

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { reopenGrievance } from "@/actions/grievances";
import { Loader2 } from "lucide-react";

interface ReopenGrievanceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  grievanceId: number;
  grievanceSubject: string;
}

export function ReopenGrievanceDialog({
  open,
  onOpenChange,
  grievanceId,
  grievanceSubject,
}: ReopenGrievanceDialogProps) {
  const router = useRouter();
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReopen = async () => {
    if (reason.trim().length < 10) {
      toast.error("Reason must be at least 10 characters");
      return;
    }

    if (reason.trim().length > 500) {
      toast.error("Reason must not exceed 500 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await reopenGrievance({
        grievanceId,
        reason: reason.trim(),
      });

      if (result.success) {
        toast.success("Grievance reopened successfully");
        setReason("");
        onOpenChange(false);
        router.refresh();
      } else {
        toast.error(result.error || "Failed to reopen grievance");
      }
    } catch (error) {
      console.error("Error reopening grievance:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Reopen Grievance</DialogTitle>
          <DialogDescription>
            You are about to reopen the grievance: <strong>{grievanceSubject}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="reason">
              Reason for Reopening <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="reason"
              placeholder="Please provide a detailed reason for reopening this grievance..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={5}
              className="resize-none"
              disabled={isSubmitting}
            />
            <p className="text-xs text-muted-foreground">
              {reason.length}/500 characters (minimum 10)
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              setReason("");
              onOpenChange(false);
            }}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleReopen}
            disabled={isSubmitting || reason.trim().length < 10}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Reopen Grievance
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
