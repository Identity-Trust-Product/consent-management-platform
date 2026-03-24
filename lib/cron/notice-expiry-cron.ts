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
import { expireNotices } from "@/lib/services/notices-service";
import { logger } from "@/lib/utils/logger";

let cronJob: cron.ScheduledTask | null = null;

export function startNoticeExpiryCron() {
  // Stop existing cron if running
  if (cronJob) {
    cronJob.stop();
    cronJob.destroy();
  }

  // Schedule cron to run every minute
  cronJob = cron.schedule(
    "* * * * *",
    async () => {
      try {
        await expireNotices();
      } catch (error: any) {
        logger.error("Error in notice expiry cron job", { error: error.message, stack: error.stack });
      }
    },
    {
      timezone: "UTC",
    }
  );

  logger.info("Notice expiry cron job started - running every minute");
  return cronJob;
}

export function stopNoticeExpiryCron() {
  if (cronJob) {
    cronJob.stop();
    cronJob.destroy();
    cronJob = null;
    logger.info("Notice expiry cron job stopped");
  }
}

export function getNoticeExpiryCronStatus() {
  return {
    isRunning: cronJob !== null,
  };
}
