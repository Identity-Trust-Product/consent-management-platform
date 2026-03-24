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
 * Grievance Notification Service
 * 
 * Creates and manages notifications for data principals when their grievances are updated
 */

import prisma from "@/lib/prisma";
import { logger } from "@/lib/utils/logger";
import { GrievanceStatus, GrievanceCategory } from "@prisma/client";

export interface GrievanceNotificationMetadata {
  grievanceId: number;
  grievancePublicId: string;
  updateType:
  | "new_message"
  | "status_changed"
  | "withdrawal_accepted"
  | "withdrawal_rejected"
  | "resolved";
  previousStatus?: GrievanceStatus;
  newStatus?: GrievanceStatus;
  category?: GrievanceCategory;
}

/**
 * Create a notification when an agent sends a message to a principal
 */
export async function createNewMessageNotification(
  dataPrincipalId: string,
  grievanceId: number,
  grievancePublicId: string,
  category: GrievanceCategory
): Promise<void> {
  try {
    const metadata: GrievanceNotificationMetadata = {
      grievanceId,
      grievancePublicId,
      updateType: "new_message",
      category,
    };

    await prisma.notification.create({
      data: {
        dataPrincipalId,
        type: "grievance_update",
        seen: false,
        metadata: metadata as any,
      },
    });

    logger.info("Created new message notification", { grievancePublicId });
  } catch (error: any) {
    logger.error("Failed to create new message notification", {
      error: error.message,
      stack: error.stack
    });
  }
}

/**
 * Create a notification when grievance status changes
 */
export async function createStatusChangeNotification(
  dataPrincipalId: string,
  grievanceId: number,
  grievancePublicId: string,
  category: GrievanceCategory,
  previousStatus: GrievanceStatus,
  newStatus: GrievanceStatus
): Promise<void> {
  try {
    // Special handling for withdrawal consent requests (WITHDRAW_CONSENT category)
    if (category === GrievanceCategory.WITHDRAW_CONSENT) {
      let updateType: GrievanceNotificationMetadata["updateType"];

      if (newStatus === GrievanceStatus.RESOLVED || newStatus === GrievanceStatus.CLOSED) {
        // Check if it was accepted (we need to look at the resolution details)
        // For now, we'll create a generic status notification
        // You may want to add additional logic to determine acceptance/rejection
        updateType = newStatus === GrievanceStatus.RESOLVED
          ? "withdrawal_accepted"
          : "status_changed";
      } else {
        updateType = "status_changed";
      }

      const metadata: GrievanceNotificationMetadata = {
        grievanceId,
        grievancePublicId,
        updateType,
        previousStatus,
        newStatus,
        category,
      };

      await prisma.notification.create({
        data: {
          dataPrincipalId,
          type: "grievance_update",
          seen: false,
          metadata: metadata as any,
        },
      });
    } else if (newStatus === GrievanceStatus.RESOLVED) {
      // For other categories, notify when resolved
      const metadata: GrievanceNotificationMetadata = {
        grievanceId,
        grievancePublicId,
        updateType: "resolved",
        previousStatus,
        newStatus,
        category,
      };

      await prisma.notification.create({
        data: {
          dataPrincipalId,
          type: "grievance_update",
          seen: false,
          metadata: metadata as any,
        },
      });
    }

    logger.info("Created status change notification", {
      grievancePublicId,
      previousStatus,
      newStatus
    });
  } catch (error: any) {
    logger.error("Failed to create status change notification", {
      error: error.message,
      stack: error.stack
    });
  }
}

/**
 * Create a notification when a withdrawal request is accepted
 */
export async function createWithdrawalAcceptedNotification(
  dataPrincipalId: string,
  grievanceId: number,
  grievancePublicId: string
): Promise<void> {
  try {
    const metadata: GrievanceNotificationMetadata = {
      grievanceId,
      grievancePublicId,
      updateType: "withdrawal_accepted",
      category: GrievanceCategory.WITHDRAW_CONSENT,
    };

    await prisma.notification.create({
      data: {
        dataPrincipalId,
        type: "grievance_update",
        seen: false,
        metadata: metadata as any,
      },
    });

    logger.info("Created withdrawal accepted notification", { grievancePublicId });
  } catch (error: any) {
    logger.error("Failed to create withdrawal accepted notification", {
      error: error.message,
      stack: error.stack
    });
  }
}

/**
 * Create a notification when a withdrawal request is rejected
 */
export async function createWithdrawalRejectedNotification(
  dataPrincipalId: string,
  grievanceId: number,
  grievancePublicId: string
): Promise<void> {
  try {
    const metadata: GrievanceNotificationMetadata = {
      grievanceId,
      grievancePublicId,
      updateType: "withdrawal_rejected",
      category: GrievanceCategory.WITHDRAW_CONSENT,
    };

    await prisma.notification.create({
      data: {
        dataPrincipalId,
        type: "grievance_update",
        seen: false,
        metadata: metadata as any,
      },
    });

    logger.info("Created withdrawal rejected notification", { grievancePublicId });
  } catch (error: any) {
    logger.error("Failed to create withdrawal rejected notification", {
      error: error.message,
      stack: error.stack
    });
  }
}

/**
 * Mark all grievance notifications as seen for a principal
 */
export async function markGrievanceNotificationsAsSeen(
  dataPrincipalId: string
): Promise<void> {
  try {
    await prisma.notification.updateMany({
      where: {
        dataPrincipalId,
        type: "grievance_update",
        seen: false,
      },
      data: {
        seen: true,
      },
    });

    logger.info("Marked all grievance notifications as seen", { dataPrincipalId });
  } catch (error: any) {
    logger.error("Failed to mark grievance notifications as seen", {
      error: error.message,
      stack: error.stack
    });
  }
}

/**
 * Mark notifications for a specific grievance as seen
 */
export async function markGrievanceNotificationAsSeenById(
  dataPrincipalId: string,
  grievanceId: number
): Promise<void> {
  try {
    // Find notifications with matching grievanceId in metadata
    const notifications = await prisma.notification.findMany({
      where: {
        dataPrincipalId,
        type: "grievance_update",
        seen: false,
      },
    });

    const notificationIds = notifications
      .filter((n) => {
        try {
          const metadata = typeof n.metadata === "string"
            ? JSON.parse(n.metadata)
            : n.metadata as any;
          return metadata?.grievanceId === grievanceId;
        } catch {
          return false;
        }
      })
      .map((n) => n.id);

    if (notificationIds.length > 0) {
      await prisma.notification.updateMany({
        where: {
          id: { in: notificationIds },
        },
        data: {
          seen: true,
        },
      });

      logger.info("Marked grievance notifications as seen", {
        count: notificationIds.length,
        grievanceId
      });
    }
  } catch (error: any) {
    logger.error("Failed to mark grievance notification as seen", {
      error: error.message,
      stack: error.stack
    });
  }
}
