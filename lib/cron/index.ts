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

// Initialize cron jobs when the application starts
import { logger } from "@/lib/utils/logger";
import {
  startNoticeExpiryCron,
  stopNoticeExpiryCron,
} from "@/lib/cron/notice-expiry-cron";
import {
  startConsentExpiryCron,
  stopConsentExpiryCron,
} from "@/lib/cron/consent-expiry-cron";
import {
  startConsentExpiryNotificationCron,
  stopConsentExpiryNotificationCron,
} from "@/lib/cron/consent-expiry-notification-cron";
import {
  startSlaBreachCron,
  stopSlaBreachCron,
} from "@/lib/cron/sla-breach-cron";
import {
  startDataRetentionActionCron,
  stopDataRetentionActionCron,
} from "@/lib/cron/data-retention-action-cron";

let isInitialized = false;

export function initializeCronJobs() {
  if (isInitialized) {
    logger.info("Cron jobs already initialized, skipping...");
    return;
  }

  logger.info("Initializing cron jobs...");

  // Start the notice expiry cron job
  startNoticeExpiryCron();

  // Start the consent expiry cron job
  startConsentExpiryCron();

  // Start the consent expiry notification cron job
  startConsentExpiryNotificationCron();

  // Start the SLA breach detection cron job
  startSlaBreachCron();

  // Start the data retention action cron job
  startDataRetentionActionCron();

  isInitialized = true;
  logger.info("All cron jobs initialized successfully");
}

// Cleanup function for graceful shutdown
export function shutdownCronJobs() {
  if (!isInitialized) {
    return;
  }

  logger.info("Shutting down cron jobs...");

  stopNoticeExpiryCron();
  stopConsentExpiryCron();
  stopConsentExpiryNotificationCron();
  stopSlaBreachCron();
  stopDataRetentionActionCron();

  isInitialized = false;
  logger.info("All cron jobs shut down successfully");
}
