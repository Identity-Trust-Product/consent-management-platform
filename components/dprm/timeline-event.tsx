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

/**
 * TimelineEvent Component
 * Displays system events in the chat timeline (like WhatsApp group notifications)
 * Shows centered, informational messages for grievance lifecycle events
 */

import { format } from "date-fns";
import { GRIEVANCE_AUDIT_ACTIONS, GRIEVANCE_STATUS_LABELS } from "@/lib/constants/grievances";
import { GrievanceStatus } from "@prisma/client";

export interface TimelineEventData {
  id: string;
  type: "audit";
  action: string;
  details: Record<string, any>;
  performedBy: {
    id: string;
    name: string;
  } | null;
  createdAt: Date;
}

interface TimelineEventProps {
  event: TimelineEventData;
  viewerType?: "agent" | "principal"; // Who is viewing this event
}

/**
 * Generate human-readable message from audit action
 * Different messages for agents vs principals
 */
function getEventMessage(event: TimelineEventData, viewerType: "agent" | "principal" = "principal"): string {
  const { action, details, performedBy } = event;
  const actorName = performedBy?.name || "System";

  // Helper to format status labels
  const formatStatus = (status: string): string => {
    return GRIEVANCE_STATUS_LABELS[status as GrievanceStatus] || status;
  };

  // PRINCIPAL VIEW - Simple, user-friendly messages
  if (viewerType === "principal") {
    switch (action) {
      case "CREATED":
      case GRIEVANCE_AUDIT_ACTIONS.CREATED_BY_PRINCIPAL:
        return `Grievance created`;

      case "ASSIGNED":
      case GRIEVANCE_AUDIT_ACTIONS.ASSIGNED_TO_AGENT:
        return `Your grievance has been assigned to an agent`;

      case "UNASSIGNED":
      case GRIEVANCE_AUDIT_ACTIONS.UNASSIGNED:
        return `Grievance status updated`;

      case "STATUS_CHANGED":
      case GRIEVANCE_AUDIT_ACTIONS.STATUS_CHANGED:
        const toStatus = formatStatus(details.to || details.newStatus || "Unknown");
        return `Status changed to ${toStatus}`;

      case "RESOLVED":
      case GRIEVANCE_AUDIT_ACTIONS.RESOLVED:
        return `Your grievance has been resolved`;

      case "CLOSED":
      case GRIEVANCE_AUDIT_ACTIONS.CLOSED:
        return `Grievance closed`;

      case "REOPENED":
      case GRIEVANCE_AUDIT_ACTIONS.REOPENED:
        return `Grievance reopened`;

      case "FEEDBACK_SUBMITTED":
        return `Thank you for your feedback`;

      default:
        return `Grievance updated`;
    }
  }

  // AGENT VIEW - Detailed messages with actor names and full context
  switch (action) {
    case "CREATED":
    case GRIEVANCE_AUDIT_ACTIONS.CREATED_BY_PRINCIPAL:
      return `Grievance created by data principal`;

    case "ASSIGNED":
    case GRIEVANCE_AUDIT_ACTIONS.ASSIGNED_TO_AGENT:
      const assignedToName = details.assignedToName || "an agent";
      const assignedByName = details.assignedBy || actorName;
      return `${assignedByName} assigned this to ${assignedToName}`;

    case "UNASSIGNED":
    case GRIEVANCE_AUDIT_ACTIONS.UNASSIGNED:
      return `${actorName} unassigned this grievance`;

    case "STATUS_CHANGED":
    case GRIEVANCE_AUDIT_ACTIONS.STATUS_CHANGED:
      const fromStatus = formatStatus(details.from || details.previousStatus || "Unknown");
      const toStatus = formatStatus(details.to || details.newStatus || "Unknown");
      return `${actorName} changed status from ${fromStatus} to ${toStatus}`;

    case "RESOLVED":
    case GRIEVANCE_AUDIT_ACTIONS.RESOLVED:
      return `${actorName} marked this as resolved`;

    case "CLOSED":
    case GRIEVANCE_AUDIT_ACTIONS.CLOSED:
      return `${actorName} closed this grievance`;

    case "REOPENED":
    case GRIEVANCE_AUDIT_ACTIONS.REOPENED:
      return `${actorName} reopened this grievance`;

    case "FEEDBACK_SUBMITTED":
      const rating = details.rating ? `Rating: ${details.rating}/5` : "";
      return `Feedback submitted${rating ? ` - ${rating}` : ""}`;

    default:
      return `${actorName} performed an action`;
  }
}

export function TimelineEvent({ event, viewerType = "principal" }: TimelineEventProps) {
  const message = getEventMessage(event, viewerType);
  const timestamp = format(new Date(event.createdAt), "MMM d, yyyy 'at' h:mm a");

  return (
    <div className="flex items-center justify-center my-4 px-4">
      <div className="max-w-md text-center">
        <div className="inline-flex flex-col items-center gap-1 px-4 py-2 bg-muted/50 rounded-lg border border-border/50">
          <p className="text-xs text-muted-foreground font-medium">{message}</p>
          <time className="text-[10px] text-muted-foreground/70" dateTime={event.createdAt.toISOString()}>
            {timestamp}
          </time>
        </div>
      </div>
    </div>
  );
}
