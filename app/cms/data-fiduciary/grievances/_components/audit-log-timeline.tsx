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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GRIEVANCE_AUDIT_ACTIONS, GRIEVANCE_STATUS_LABELS } from "@/lib/constants/grievances";
import { GrievanceStatus } from "@prisma/client";
import { format } from "date-fns";
import {
  ArrowUpCircle,
  CheckCircle2,
  FileText,
  MessageSquare,
  RefreshCw,
  UserMinus,
  UserPlus,
  XCircle,
} from "lucide-react";

interface AuditLog {
  id: number;
  action: string;
  details: any;
  createdAt: Date;
  performedByUser: {
    id: string;
    name: string | null;
    email: string | null;
  } | null;
}

interface AuditLogTimelineProps {
  logs: AuditLog[];
}

const ACTION_ICONS: Record<string, any> = {
  [GRIEVANCE_AUDIT_ACTIONS.CREATED_BY_PRINCIPAL]: FileText,
  [GRIEVANCE_AUDIT_ACTIONS.ASSIGNED_TO_AGENT]: UserPlus,
  [GRIEVANCE_AUDIT_ACTIONS.UNASSIGNED]: UserMinus,
  [GRIEVANCE_AUDIT_ACTIONS.STATUS_CHANGED]: RefreshCw,
  [GRIEVANCE_AUDIT_ACTIONS.MESSAGE_SENT]: MessageSquare,
  [GRIEVANCE_AUDIT_ACTIONS.RESOLVED]: CheckCircle2,
  [GRIEVANCE_AUDIT_ACTIONS.CLOSED]: XCircle,
  [GRIEVANCE_AUDIT_ACTIONS.REOPENED]: ArrowUpCircle,
  // New service-generated actions (different from constants)
  "UNASSIGNED_FROM_AGENT": UserMinus,
  "MARKED_AS_RESOLVED": CheckCircle2,
  "MARKED_AS_CLOSED": XCircle,
  "FEEDBACK_SUBMITTED": MessageSquare,
};

// Helper to get default icon for status change actions
const getActionIcon = (action: string) => {
  if (action.startsWith("STATUS_CHANGED_TO_")) {
    return RefreshCw;
  }
  return ACTION_ICONS[action] || FileText;
};

const ACTION_LABELS: Record<string, string> = {
  [GRIEVANCE_AUDIT_ACTIONS.CREATED_BY_PRINCIPAL]: "Grievance Created",
  [GRIEVANCE_AUDIT_ACTIONS.ASSIGNED_TO_AGENT]: "Assigned to Agent",
  [GRIEVANCE_AUDIT_ACTIONS.UNASSIGNED]: "Unassigned",
  [GRIEVANCE_AUDIT_ACTIONS.STATUS_CHANGED]: "Status Changed",
  [GRIEVANCE_AUDIT_ACTIONS.MESSAGE_SENT]: "Message Sent",
  [GRIEVANCE_AUDIT_ACTIONS.RESOLVED]: "Resolved",
  [GRIEVANCE_AUDIT_ACTIONS.CLOSED]: "Closed",
  [GRIEVANCE_AUDIT_ACTIONS.REOPENED]: "Reopened",
  // New service-generated actions
  "UNASSIGNED_FROM_AGENT": "Unassigned",
  "MARKED_AS_RESOLVED": "Resolved",
  "MARKED_AS_CLOSED": "Closed",
  "FEEDBACK_SUBMITTED": "Feedback Submitted",
};

// Helper to get action label
const getActionLabel = (action: string): string => {
  if (action.startsWith("STATUS_CHANGED_TO_")) {
    return "Status Changed";
  }
  return ACTION_LABELS[action] || action.replace(/_/g, " ");
};

function getActionDescription(log: AuditLog): string {
  const details = log.details || {};
  const action = log.action;

  // Handle new service-generated actions
  if (action === "ASSIGNED_TO_AGENT" || action === GRIEVANCE_AUDIT_ACTIONS.ASSIGNED_TO_AGENT) {
    return `Assigned to ${details.assignedToName || details.assignedTo || "agent"}`;
  }

  if (action === "UNASSIGNED_FROM_AGENT" || action === GRIEVANCE_AUDIT_ACTIONS.UNASSIGNED) {
    return `Unassigned from ${details.previousAssigneeName || details.previousAssignedTo || "agent"}`;
  }

  if (action === "MARKED_AS_RESOLVED" || action === GRIEVANCE_AUDIT_ACTIONS.RESOLVED) {
    return `Marked as resolved${details.reason ? `: ${details.reason}` : ""}`;
  }

  if (action === "MARKED_AS_CLOSED" || action === GRIEVANCE_AUDIT_ACTIONS.CLOSED) {
    return `Closed${details.reason ? `: ${details.reason}` : ""}`;
  }

  if (action.startsWith("STATUS_CHANGED_TO_") || action === GRIEVANCE_AUDIT_ACTIONS.STATUS_CHANGED) {
    const fromStatus = details.from as GrievanceStatus;
    const toStatus = details.to as GrievanceStatus;
    const fromLabel = fromStatus ? GRIEVANCE_STATUS_LABELS[fromStatus] : "Unknown";
    const toLabel = toStatus ? GRIEVANCE_STATUS_LABELS[toStatus] : "Unknown";
    const reason = details.reason ? ` (${details.reason})` : "";
    return `Status changed from ${fromLabel} to ${toLabel}${reason}`;
  }

  if (action === "CREATED_BY_PRINCIPAL" || action === GRIEVANCE_AUDIT_ACTIONS.CREATED_BY_PRINCIPAL) {
    return `Created by data principal`;
  }

  if (action === "FEEDBACK_SUBMITTED") {
    const rating = details.rating ? `Rating: ${details.rating}/5` : "";
    return `Feedback submitted${rating ? ` - ${rating}` : ""}`;
  }

  if (action === GRIEVANCE_AUDIT_ACTIONS.REOPENED) {
    return `Reopened${details.reason ? `: ${details.reason}` : ""}`;
  }

  if (action === GRIEVANCE_AUDIT_ACTIONS.MESSAGE_SENT) {
    return details.message || "Message sent";
  }

  // Default fallback
  return action.replace(/_/g, " ").toLowerCase();
}

export function AuditLogTimeline({ logs }: AuditLogTimelineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-[500px] overflow-y-auto pr-4">
          <div className="relative space-y-4">
            {logs?.map((log, index) => {
              const Icon = getActionIcon(log.action);
              const label = getActionLabel(log.action);
              const description = getActionDescription(log);
              const actor = log.performedByUser
                ? log.performedByUser.name || log.performedByUser.email
                : "System";

              return (
                <div key={log.id} className="relative flex gap-4 pb-4">
                  {/* Connector line */}
                  {index < logs.length - 1 && (
                    <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-border" />
                  )}

                  {/* Icon */}
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{actor}</span>
                      <span>•</span>
                      <time dateTime={log.createdAt.toString()}>
                        {format(new Date(log.createdAt), "PPp")}
                      </time>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
