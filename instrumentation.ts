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

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Dynamic import to avoid Edge Runtime issues
    const { initializeCronJobs, shutdownCronJobs } = await import("@/lib/cron");
    const { logger } = await import("@/lib/utils/logger");

    logger.info("Initializing cron jobs via instrumentation hook...");
    initializeCronJobs();

    // Handle graceful shutdown
    process.on("SIGINT", () => {
      logger.info("Received SIGINT, shutting down gracefully...");
      shutdownCronJobs();
      process.exit(0);
    });

    process.on("SIGTERM", () => {
      logger.info("Received SIGTERM, shutting down gracefully...");
      shutdownCronJobs();
      process.exit(0);
    });
  }
}
