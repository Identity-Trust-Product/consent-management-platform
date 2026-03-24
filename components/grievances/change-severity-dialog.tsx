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
import { changeGrievanceSeverity } from "@/actions/grievance-severity";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { GrievanceSeverity } from "@prisma/client";
import { AlertTriangle, Loader2 } from "lucide-react";

interface ChangeSeverityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  grievanceId: number;
  currentSeverity: GrievanceSeverity;
  onSuccess?: () => void;
}

const severityLabels: Record<GrievanceSeverity, string> = {
  CRITICAL: "Critical",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

const severityDescriptions: Record<GrievanceSeverity, string> = {
  CRITICAL: "Requires immediate attention - 1 day SLA",
  HIGH: "Urgent priority - 2 days SLA",
  MEDIUM: "Normal priority - 3 days SLA",
  LOW: "Low priority - 5 days SLA",
};

export function ChangeSeverityDialog({
  open,
  onOpenChange,
  grievanceId,
  currentSeverity,
  onSuccess,
}: ChangeSeverityDialogProps) {
  const [newSeverity, setNewSeverity] = useState<GrievanceSeverity | null>(null);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!newSeverity) {
      toast.error("Please select a new severity level");
      return;
    }

    if (newSeverity === currentSeverity) {
      toast.error("Please select a different severity level");
      return;
    }

    setLoading(true);
    try {
      const result = await changeGrievanceSeverity({
        grievanceId,
        newSeverity,
        reason: reason.trim() || undefined,
      });

      if (result.success) {
        toast.success("Severity changed successfully");
        onOpenChange(false);
        setNewSeverity(null);
        setReason("");
        onSuccess?.();
      } else {
        toast.error(result.error || "Failed to change severity");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setNewSeverity(null);
    setReason("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            Change Severity
          </DialogTitle>
          <DialogDescription>
            Changing the severity will recalculate the SLA expected resolution time.
            This action will be logged in the audit trail.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Current Severity */}
          <div className="space-y-2">
            <Label>Current Severity</Label>
            <div className="px-3 py-2 bg-muted rounded-md text-sm font-medium">
              {severityLabels[currentSeverity]}
            </div>
          </div>

          {/* New Severity */}
          <div className="space-y-2">
            <Label htmlFor="severity">New Severity *</Label>
            <Select
              value={newSeverity || undefined}
              onValueChange={(value) => setNewSeverity(value as GrievanceSeverity)}
            >
              <SelectTrigger id="severity">
                <SelectValue placeholder="Select new severity..." />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(severityLabels).map(([value, label]) => (
                  <SelectItem
                    key={value}
                    value={value}
                    disabled={value === currentSeverity}
                  >
                    <div>
                      <div className="font-medium">{label}</div>
                      <div className="text-xs text-muted-foreground">
                        {severityDescriptions[value as GrievanceSeverity]}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Reason */}
          <div className="space-y-2">
            <Label htmlFor="reason">Reason (Optional)</Label>
            <Textarea
              id="reason"
              placeholder="Explain why the severity is being changed..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              maxLength={500}
            />
            <p className="text-xs text-muted-foreground">
              {reason.length}/500 characters
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={loading || !newSeverity}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Change Severity
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
