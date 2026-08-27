module.exports = [
"[project]/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
    if ("TURBOPACK compile-time truthy", 1) {
        // Dynamic import to avoid Edge Runtime issues
        const { initializeCronJobs, shutdownCronJobs } = await __turbopack_context__.A("[project]/lib/cron/index.ts [instrumentation] (ecmascript, async loader)");
        const { logger } = await __turbopack_context__.A("[project]/lib/utils/logger.ts [instrumentation] (ecmascript, async loader)");
        logger.info("Initializing cron jobs via instrumentation hook...");
        initializeCronJobs();
        // Handle graceful shutdown
        process.on("SIGINT", ()=>{
            logger.info("Received SIGINT, shutting down gracefully...");
            shutdownCronJobs();
            process.exit(0);
        });
        process.on("SIGTERM", ()=>{
            logger.info("Received SIGTERM, shutting down gracefully...");
            shutdownCronJobs();
            process.exit(0);
        });
    }
}
}),
];

//# sourceMappingURL=instrumentation_ts_cf8be71b._.js.map