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

import { assignGrievance } from "@/actions/grievances";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface AssignAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  grievanceId: number | null;
  currentAssignedTo: string | null;
  agents: Array<{
    id: string;
    name: string | null;
    email: string | null;
  }>;
}

export function AssignAgentDialog({
  open,
  onOpenChange,
  grievanceId,
  currentAssignedTo,
  agents,
}: AssignAgentDialogProps) {
  const router = useRouter();
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(
    currentAssignedTo
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAssign = async () => {
    if (!grievanceId) return;

    setIsSubmitting(true);
    try {
      const result = await assignGrievance({
        grievanceId,
        assignedToId: selectedAgentId,
      });

      if (result.success) {
        toast.success(result.message);
        onOpenChange(false);
        router.refresh();
      } else {
        toast.error(result.error || "Failed to assign grievance");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign Grievance</DialogTitle>
          <DialogDescription>
            Select an agent to assign this grievance to. Leave unassigned to
            remove the current assignment.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="agent" className="text-sm font-medium">
              Agent
            </label>
            <Select
              value={selectedAgentId || "unassigned"}
              onValueChange={(value) =>
                setSelectedAgentId(value === "unassigned" ? null : value)
              }
            >
              <SelectTrigger id="agent">
                <SelectValue placeholder="Select an agent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unassigned">
                  <span className="text-muted-foreground">Unassigned</span>
                </SelectItem>
                {agents.map((agent) => (
                  <SelectItem key={agent.id} value={agent.id}>
                    {agent.name || agent.email || "Unknown"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button onClick={handleAssign} disabled={isSubmitting}>
            {isSubmitting ? "Assigning..." : "Assign"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
