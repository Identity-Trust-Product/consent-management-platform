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
 * Grievance Event Service
 * 
 * Handles creation of system events that need to be recorded in both:
 * 1. GrievanceMessage (for timeline display in chat)
 * 2. GrievanceAuditLog (for immutable audit trail)
 * 
 * This ensures reliable dual-insertion using Prisma transactions.
 */

import prisma from "@/lib/prisma";

export type GrievanceEventType =
  | "CREATED"
  | "STATUS_CHANGED"
  | "ASSIGNED"
  | "UNASSIGNED"
  | "RESOLVED"
  | "CLOSED"
  | "REOPENED"
  | "MESSAGE_SENT"
  | "FEEDBACK_SUBMITTED";

interface CreateGrievanceEventParams {
  grievanceId: number;
  eventType: GrievanceEventType;
  eventDetails?: Record<string, any>;
  auditAction: string; // For audit log (e.g., "ASSIGNED_TO_AGENT")
  auditDetails?: Record<string, any>;
  performedByUserId?: string | null;
}

/**
 * Creates a system event that is recorded in both GrievanceMessage and GrievanceAuditLog.
 * Uses a transaction to ensure both inserts succeed or both fail.
 * 
 * @example
 * await createGrievanceEvent({
 *   grievanceId: 123,
 *   eventType: "STATUS_CHANGED",
 *   eventDetails: {
 *     from: "SUBMITTED",
 *     to: "IN_PROGRESS",
 *     performedBy: "user_id",
 *     performedByName: "John Doe"
 *   },
 *   auditAction: "STATUS_CHANGED_TO_IN_PROGRESS",
 *   performedByUserId: "user_id"
 * });
 */
export async function createGrievanceEvent(
  params: CreateGrievanceEventParams
): Promise<{ success: true; messageId: number; auditLogId: number } | { success: false; error: string }> {
  const {
    grievanceId,
    eventType,
    eventDetails,
    auditAction,
    auditDetails,
    performedByUserId,
  } = params;

  try {
    // Use a transaction to ensure both inserts succeed together
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create system message in GrievanceMessage
      const systemMessage = await tx.grievanceMessage.create({
        data: {
          grievanceId,
          messageType: "SYSTEM_EVENT",
          eventType,
          eventDetails: eventDetails || {},
          authorType: "SYSTEM",
          // SYSTEM messages should not have authorId set to avoid FK constraint issues
          // Performer information is stored in eventDetails instead
          authorId: null,
          message: null,
        },
      });

      // 2. Create audit log entry in GrievanceAuditLog
      const auditLog = await tx.grievanceAuditLog.create({
        data: {
          grievanceId,
          action: auditAction,
          details: auditDetails || eventDetails || {},
          // Only include performedByUserId if it's not null
          ...(performedByUserId && { performedByUserId }),
        },
      });

      return {
        messageId: systemMessage.id,
        auditLogId: auditLog.id,
      };
    });

    return {
      success: true,
      messageId: result.messageId,
      auditLogId: result.auditLogId,
    };
  } catch (error) {
    console.error("[createGrievanceEvent] Transaction failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create grievance event",
    };
  }
}

/**
 * Helper function to create a STATUS_CHANGED event
 */
export async function createStatusChangedEvent(params: {
  grievanceId: number;
  fromStatus: string;
  toStatus: string;
  performedByUserId: string;
  performedByName: string;
  reason?: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "STATUS_CHANGED",
    eventDetails: {
      // Legacy format for TimelineEvent component
      from: params.fromStatus,
      to: params.toStatus,
      reason: params.reason,
    },
    auditAction: `STATUS_CHANGED_TO_${params.toStatus}`,
    auditDetails: {
      from: params.fromStatus,
      to: params.toStatus,
      reason: params.reason,
    },
    performedByUserId: params.performedByUserId,
  });
}

/**
 * Helper function to create an ASSIGNED event
 */
export async function createAssignedEvent(params: {
  grievanceId: number;
  assignedToUserId: string;
  assignedToName: string;
  performedByUserId: string;
  performedByName: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "ASSIGNED",
    eventDetails: {
      // Legacy format for TimelineEvent component
      assignedToName: params.assignedToName,
      assignedBy: params.performedByName,
    },
    auditAction: "ASSIGNED_TO_AGENT",
    auditDetails: {
      assignedTo: params.assignedToUserId,
      assignedToName: params.assignedToName,
    },
    performedByUserId: params.performedByUserId,
  });
}

/**
 * Helper function to create an UNASSIGNED event
 */
export async function createUnassignedEvent(params: {
  grievanceId: number;
  previousAssigneeId: string;
  previousAssigneeName: string;
  performedByUserId: string;
  performedByName: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "UNASSIGNED",
    eventDetails: {
      // Legacy format for TimelineEvent component
      previousAssignedTo: params.previousAssigneeId,
    },
    auditAction: "UNASSIGNED_FROM_AGENT",
    auditDetails: {
      previousAssignee: params.previousAssigneeId,
      previousAssigneeName: params.previousAssigneeName,
    },
    performedByUserId: params.performedByUserId,
  });
}

/**
 * Helper function to create a RESOLVED event
 */
export async function createResolvedEvent(params: {
  grievanceId: number;
  performedByUserId: string;
  performedByName: string;
  reason?: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "RESOLVED",
    eventDetails: {
      performedBy: params.performedByUserId,
      performedByName: params.performedByName,
      reason: params.reason,
    },
    auditAction: "MARKED_AS_RESOLVED",
    auditDetails: {
      reason: params.reason,
    },
    performedByUserId: params.performedByUserId,
  });
}

/**
 * Helper function to create a CLOSED event
 */
export async function createClosedEvent(params: {
  grievanceId: number;
  performedByUserId: string;
  performedByName: string;
  reason?: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "CLOSED",
    eventDetails: {
      performedBy: params.performedByUserId,
      performedByName: params.performedByName,
      reason: params.reason,
    },
    auditAction: "MARKED_AS_CLOSED",
    auditDetails: {
      reason: params.reason,
    },
    performedByUserId: params.performedByUserId,
  });
}

/**
 * Helper function to create a CREATED event (when grievance is first created)
 */
export async function createGrievanceCreatedEvent(params: {
  grievanceId: number;
  dataPrincipalId: string;
  category: string;
  subject: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "CREATED",
    eventDetails: {
      dataPrincipalId: params.dataPrincipalId,
      category: params.category,
      subject: params.subject,
    },
    auditAction: "CREATED_BY_PRINCIPAL",
    auditDetails: {
      category: params.category,
      subject: params.subject,
    },
    performedByUserId: null, // System-created
  });
}

/**
 * Helper function to create a FEEDBACK_SUBMITTED event
 */
export async function createFeedbackSubmittedEvent(params: {
  grievanceId: number;
  rating: number;
  comment?: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "FEEDBACK_SUBMITTED",
    eventDetails: {
      rating: params.rating,
      comment: params.comment,
    },
    auditAction: "FEEDBACK_SUBMITTED",
    auditDetails: {
      rating: params.rating,
      hasComment: !!params.comment,
    },
    performedByUserId: null, // Principal action (not a CMS user)
  });
}

/**
 * Helper function to create an AUTO_ASSIGNED event
 */
export async function createAutoAssignedEvent(params: {
  grievanceId: number;
  assignedToUserId: string;
  assignedToName: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "ASSIGNED",
    eventDetails: {
      assignedToName: params.assignedToName,
      assignedBy: "System (Auto-assigned)",
      isAutoAssigned: true,
    },
    auditAction: "AUTO_ASSIGNED_TO_AGENT",
    auditDetails: {
      assignedTo: params.assignedToUserId,
      assignedToName: params.assignedToName,
      isAutoAssigned: true,
    },
    performedByUserId: null, // System-assigned, no user performer
  });
}

/**
 * Helper function to create a REOPENED event (by agent)
 */
export async function createReopenedEvent(params: {
  grievanceId: number;
  reason: string;
  performedByUserId: string;
  performedByName: string;
  previousStatus: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "REOPENED",
    eventDetails: {
      reason: params.reason,
      reopenedBy: params.performedByName,
      reopenedByType: "AGENT",
      previousStatus: params.previousStatus,
    },
    auditAction: "REOPENED_BY_AGENT",
    auditDetails: {
      reason: params.reason,
      previousStatus: params.previousStatus,
    },
    performedByUserId: params.performedByUserId,
  });
}

/**
 * Helper function to create a REOPENED event (by principal)
 */
export async function createReopenedByPrincipalEvent(params: {
  grievanceId: number;
  reason: string;
  dataPrincipalId: string;
  dataPrincipalName?: string;
  previousStatus: string;
}) {
  return createGrievanceEvent({
    grievanceId: params.grievanceId,
    eventType: "REOPENED",
    eventDetails: {
      reason: params.reason,
      reopenedBy: params.dataPrincipalName || "Data Principal",
      reopenedByType: "PRINCIPAL",
      previousStatus: params.previousStatus,
    },
    auditAction: "REOPENED_BY_PRINCIPAL",
    auditDetails: {
      reason: params.reason,
      dataPrincipalId: params.dataPrincipalId,
      previousStatus: params.previousStatus,
    },
    performedByUserId: null, // Principal action, not a CMS user
  });
}
