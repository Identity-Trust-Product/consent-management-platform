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

import * as cron from "node-cron";
import { processDataRetentionActions } from "@/lib/services/data-retention-action-service";
import { logger } from "@/lib/utils/logger";

let cronJob: cron.ScheduledTask | null = null;

export function startDataRetentionActionCron() {
  // Stop existing cron if running
  if (cronJob) {
    cronJob.stop();
    cronJob.destroy();
  }

  // Schedule cron to run every day at 2:00 AM UTC
  cronJob = cron.schedule(
    "0 2 * * *",
    async () => {
      const startTime = new Date();
      try {
        logger.info("Starting data retention action cron job");
        const result = await processDataRetentionActions();
        const duration = Date.now() - startTime.getTime();
        logger.info("Data retention action cron job completed", {
          duration,
          processedCount: result.processedCount,
          triggeredPolicies: result.triggeredPolicies.length,
          policies: result.triggeredPolicies,
        });
      } catch (error: any) {
        const duration = Date.now() - startTime.getTime();
        logger.error("Error in data retention action cron job", {
          duration,
          error: error.message,
          stack: error.stack,
        });
        // Don't re-throw - let cron continue running
      }
    },
    {
      timezone: "UTC",
    }
  );

  logger.info("Data retention action cron job started (runs daily at 2:00 AM UTC)");
  return cronJob;
}

export function stopDataRetentionActionCron() {
  if (cronJob) {
    cronJob.stop();
    cronJob.destroy();
    cronJob = null;
    logger.info("Data retention action cron job stopped");
  }
}

export function getDataRetentionActionCronStatus() {
  return {
    isRunning: cronJob !== null,
  };
}
