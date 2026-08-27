module.exports = [
"[project]/lib/services/grievance-notification-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ /**
 * Grievance Notification Service
 * 
 * Creates and manages notifications for data principals when their grievances are updated
 */ __turbopack_context__.s([
    "createNewMessageNotification",
    ()=>createNewMessageNotification,
    "createStatusChangeNotification",
    ()=>createStatusChangeNotification,
    "createWithdrawalAcceptedNotification",
    ()=>createWithdrawalAcceptedNotification,
    "createWithdrawalRejectedNotification",
    ()=>createWithdrawalRejectedNotification,
    "markGrievanceNotificationAsSeenById",
    ()=>markGrievanceNotificationAsSeenById,
    "markGrievanceNotificationsAsSeen",
    ()=>markGrievanceNotificationsAsSeen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
async function createNewMessageNotification(dataPrincipalId, grievanceId, grievancePublicId, category) {
    try {
        const metadata = {
            grievanceId,
            grievancePublicId,
            updateType: "new_message",
            category
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notification.create({
            data: {
                dataPrincipalId,
                type: "grievance_update",
                seen: false,
                metadata: metadata
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Created new message notification", {
            grievancePublicId
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to create new message notification", {
            error: error.message,
            stack: error.stack
        });
    }
}
async function createStatusChangeNotification(dataPrincipalId, grievanceId, grievancePublicId, category, previousStatus, newStatus) {
    try {
        // Special handling for withdrawal consent requests (WITHDRAW_CONSENT category)
        if (category === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].WITHDRAW_CONSENT) {
            let updateType;
            if (newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED || newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED) {
                // Check if it was accepted (we need to look at the resolution details)
                // For now, we'll create a generic status notification
                // You may want to add additional logic to determine acceptance/rejection
                updateType = newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED ? "withdrawal_accepted" : "status_changed";
            } else {
                updateType = "status_changed";
            }
            const metadata = {
                grievanceId,
                grievancePublicId,
                updateType,
                previousStatus,
                newStatus,
                category
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notification.create({
                data: {
                    dataPrincipalId,
                    type: "grievance_update",
                    seen: false,
                    metadata: metadata
                }
            });
        } else if (newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED) {
            // For other categories, notify when resolved
            const metadata = {
                grievanceId,
                grievancePublicId,
                updateType: "resolved",
                previousStatus,
                newStatus,
                category
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notification.create({
                data: {
                    dataPrincipalId,
                    type: "grievance_update",
                    seen: false,
                    metadata: metadata
                }
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Created status change notification", {
            grievancePublicId,
            previousStatus,
            newStatus
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to create status change notification", {
            error: error.message,
            stack: error.stack
        });
    }
}
async function createWithdrawalAcceptedNotification(dataPrincipalId, grievanceId, grievancePublicId) {
    try {
        const metadata = {
            grievanceId,
            grievancePublicId,
            updateType: "withdrawal_accepted",
            category: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].WITHDRAW_CONSENT
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notification.create({
            data: {
                dataPrincipalId,
                type: "grievance_update",
                seen: false,
                metadata: metadata
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Created withdrawal accepted notification", {
            grievancePublicId
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to create withdrawal accepted notification", {
            error: error.message,
            stack: error.stack
        });
    }
}
async function createWithdrawalRejectedNotification(dataPrincipalId, grievanceId, grievancePublicId) {
    try {
        const metadata = {
            grievanceId,
            grievancePublicId,
            updateType: "withdrawal_rejected",
            category: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].WITHDRAW_CONSENT
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notification.create({
            data: {
                dataPrincipalId,
                type: "grievance_update",
                seen: false,
                metadata: metadata
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Created withdrawal rejected notification", {
            grievancePublicId
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to create withdrawal rejected notification", {
            error: error.message,
            stack: error.stack
        });
    }
}
async function markGrievanceNotificationsAsSeen(dataPrincipalId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notification.updateMany({
            where: {
                dataPrincipalId,
                type: "grievance_update",
                seen: false
            },
            data: {
                seen: true
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Marked all grievance notifications as seen", {
            dataPrincipalId
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to mark grievance notifications as seen", {
            error: error.message,
            stack: error.stack
        });
    }
}
async function markGrievanceNotificationAsSeenById(dataPrincipalId, grievanceId) {
    try {
        // Find notifications with matching grievanceId in metadata
        const notifications = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notification.findMany({
            where: {
                dataPrincipalId,
                type: "grievance_update",
                seen: false
            }
        });
        const notificationIds = notifications.filter((n)=>{
            try {
                const metadata = typeof n.metadata === "string" ? JSON.parse(n.metadata) : n.metadata;
                return metadata?.grievanceId === grievanceId;
            } catch  {
                return false;
            }
        }).map((n)=>n.id);
        if (notificationIds.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notification.updateMany({
                where: {
                    id: {
                        in: notificationIds
                    }
                },
                data: {
                    seen: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Marked grievance notifications as seen", {
                count: notificationIds.length,
                grievanceId
            });
        }
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to mark grievance notification as seen", {
            error: error.message,
            stack: error.stack
        });
    }
}
}),
];

//# sourceMappingURL=lib_services_grievance-notification-service_ts_1d0d8715._.js.map