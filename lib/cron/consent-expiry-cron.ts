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
import { expireConsents } from "@/lib/services/consents-service";

let cronJob: cron.ScheduledTask | null = null;

export function startConsentExpiryCron() {
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
        await expireConsents();
      } catch (error) {
        console.error("Error in consent expiry cron job:", error);
      }
    },
    {
      timezone: "UTC",
    }
  );

  return cronJob;
}

export function stopConsentExpiryCron() {
  if (cronJob) {
    cronJob.stop();
    cronJob.destroy();
    cronJob = null;
  }
}

export function getConsentExpiryCronStatus() {
  return {
    isRunning: cronJob !== null,
  };
}
