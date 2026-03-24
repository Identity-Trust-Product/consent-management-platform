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

import prisma from "@/lib/prisma";
import { DprmTokenPayload } from "@/components/hoc/with-dprm-session-handler";
import { logger } from "@/lib/utils/logger";
import {
  ACTIVITY_EVENT_TYPES,
  type ActivityEventType,
  ACTIVITY_LOG_CONFIG,
} from "@/lib/constants/services";

export { ACTIVITY_EVENT_TYPES, type ActivityEventType };

/**
 * Track DPRM session activity for a data principal
 * Implements the exact log trail:
 * - First time: Creates login event, then creates logout event
 * - Subsequent times: Updates existing logout timestamp
 *
 * @param tokenPayload - The JWT token payload containing session info
 */
export async function trackDprmSessionActivity(
  tokenPayload: DprmTokenPayload
): Promise<void> {
  const { data_principal_id, session_id } = tokenPayload;

  if (!data_principal_id || !session_id) {
    logger.warn("Missing required fields for activity tracking.");
    return;
  }

  try {
    // --- OPERATION 1: Create the LOGIN event if it doesn't exist ---
    await prisma.principalActivityLog
      .create({
        data: {
          dataPrincipalId: data_principal_id,
          sessionId: session_id,
          eventType: ACTIVITY_EVENT_TYPES.LOGIN,
        },
      })
      .catch((error) => {
        // SAFETY: P2002 error - unique constraint violation, login already exists
        if (error.code !== "P2002") {
          throw error;
        }
      });

    // --- OPERATION 2: Upsert the LOGOUT event ---
    await prisma.principalActivityLog.upsert({
      where: {
        sessionId_eventType: {
          sessionId: session_id,
          eventType: ACTIVITY_EVENT_TYPES.LOGOUT,
        },
      },
      update: {
        updatedAt: new Date(),
      },
      create: {
        dataPrincipalId: data_principal_id,
        sessionId: session_id,
        eventType: ACTIVITY_EVENT_TYPES.LOGOUT,
      },
    });

    logger.info("Activity checkpoint successful", {
      dataPrincipalId: data_principal_id,
      sessionId: session_id
    });
  } catch (error: any) {
    logger.error("Failed to track DPRM session activity", {
      error: error.message,
      stack: error.stack
    });
  }
}

/**
 * Get recent activity logs for a data principal
 * Useful for auditing or debugging purposes
 */
export async function getRecentActivity(
  dataPrincipalId: string,
  limit: number = ACTIVITY_LOG_CONFIG.DEFAULT_LIMIT
): Promise<any[]> {
  try {
    return await prisma.principalActivityLog.findMany({
      where: {
        dataPrincipalId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
    });
  } catch (error: any) {
    logger.error("Failed to fetch recent activity", {
      error: error.message,
      stack: error.stack
    });
    return [];
  }
}

/**
 * Clean up old activity logs
 * This can be used in a cron job to maintain database size
 */
export async function cleanupOldActivityLogs(
  daysToKeep: number = 90
): Promise<number> {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

    const result = await prisma.principalActivityLog.deleteMany({
      where: {
        createdAt: {
          lt: cutoffDate,
        },
      },
    });

    logger.info("Cleaned up old activity logs", { count: result.count });
    return result.count;
  } catch (error: any) {
    logger.error("Failed to cleanup old activity logs", {
      error: error.message,
      stack: error.stack
    });
    return 0;
  }
}
