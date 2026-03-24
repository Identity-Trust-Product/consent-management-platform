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
import { notifyExpiringConsents } from "@/lib/services/consent-notification-service";
import { logger } from "@/lib/utils/logger";

let cronJob: cron.ScheduledTask | null = null;

export function startConsentExpiryNotificationCron() {
  // Stop existing cron if running
  if (cronJob) {
    cronJob.stop();
    cronJob.destroy();
  }

  // Schedule cron to run every day at midnight (00:00 UTC)
  cronJob = cron.schedule(
    "* * * * *",
    async () => {
      const startTime = new Date();
      try {
        logger.info("Starting consent expiry notification cron job");
        const result = await notifyExpiringConsents();
        const duration = Date.now() - startTime.getTime();
        logger.info("Consent expiry notification cron job completed", {
          duration,
          notifiedCount: result.notifiedCount,
          skippedCount: result.skippedCount
        });
      } catch (error: any) {
        const duration = Date.now() - startTime.getTime();
        logger.error("Error in consent expiry notification cron job", {
          duration,
          error: error.message,
          stack: error.stack
        });
        // Don't re-throw - let cron continue running
      }
    },
    {
      timezone: "UTC",
    }
  );

  return cronJob;
}

export function stopConsentExpiryNotificationCron() {
  if (cronJob) {
    cronJob.stop();
    cronJob.destroy();
    cronJob = null;
  }
}

export function getConsentExpiryNotificationCronStatus() {
  return {
    isRunning: cronJob !== null,
  };
}
