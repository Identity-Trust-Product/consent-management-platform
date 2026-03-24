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
import { detectAndEscalateSlaBreaches } from "@/lib/cron/sla-breach-detector";
import { logger } from "@/lib/utils/logger";

let cronJob: cron.ScheduledTask | null = null;

export function startSlaBreachCron() {
  // Stop existing cron if running
  if (cronJob) {
    cronJob.stop();
    cronJob.destroy();
  }

  // Schedule cron to run every 30 minutes
  cronJob = cron.schedule(
    "*/30 * * * *",
    async () => {
      try {
        await detectAndEscalateSlaBreaches();
      } catch (error: any) {
        logger.error("Error in SLA breach cron job", { error: error.message, stack: error.stack });
      }
    },
    {
      timezone: "UTC",
    }
  );

  logger.info("SLA breach detection cron job started - running every 30 minutes");
  return cronJob;
}

export function stopSlaBreachCron() {
  if (cronJob) {
    cronJob.stop();
    cronJob.destroy();
    cronJob = null;
    logger.info("SLA breach detection cron job stopped");
  }
}
