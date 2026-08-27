module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "cn",
    ()=>cn,
    "colorMap",
    ()=>colorMap,
    "cssVariableToHex",
    ()=>cssVariableToHex,
    "generateAccessToken",
    ()=>generateAccessToken,
    "generateHash",
    ()=>generateHash,
    "getCSSVariable",
    ()=>getCSSVariable,
    "verifyAccessToken",
    ()=>verifyAccessToken,
    "verifyDprmToken",
    ()=>verifyDprmToken,
    "verifyNoticeToken",
    ()=>verifyNoticeToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canonicalize/lib/canonicalize.js [app-rsc] (ecmascript)");
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
async function generateAccessToken(attrs, expiresAt) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    // Calculate expiry in seconds from now
    const expiryInSeconds = Math.floor(expiresAt.getTime() / 1000);
    const jwt = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"](attrs).setProtectedHeader({
        alg: "HS256"
    }).setExpirationTime(expiryInSeconds).setIssuedAt().sign(secret);
    return jwt;
}
async function verifyAccessToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        return payload;
    } catch (error) {
        console.error("Error verifying access token:", error);
        return null;
    }
}
async function verifyNoticeToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        // Check if token has the required public_id field
        if (!payload.public_id) {
            throw new Error("INVALID_TOKEN");
        }
        return payload;
    } catch (error) {
        // Check for specific JWT errors
        if (error.code === "ERR_JWT_EXPIRED" || error.message?.includes("expired")) {
            throw new Error("TOKEN_EXPIRED");
        }
        // For any other error, throw invalid token
        throw new Error("INVALID_TOKEN");
    }
}
async function verifyDprmToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        // Check if token has the required data_principal_id field
        if (!payload.data_principal_id) {
            throw new Error("INVALID_TOKEN");
        }
        return payload;
    } catch (error) {
        // Check for specific JWT errors
        if (error.code === "ERR_JWT_EXPIRED" || error.message?.includes("expired")) {
            throw new Error("TOKEN_EXPIRED");
        }
        // For any other error, throw invalid token
        throw new Error("INVALID_TOKEN");
    }
}
const colorMap = {
    primary: "primary",
    secondary: "info",
    success: "success",
    error: "destructive",
    warning: "warning",
    "shades-black": "shades-black",
    "shades-white": "shades-white",
    "neutral-shades": "neutral",
    "pick-color": "pick-color",
    default: "default"
};
const getCSSVariable = (color, colorNumber)=>{
    if (color === "default") return undefined;
    const mappedColor = colorMap[color];
    // Handle special cases where no color number is needed
    if (color === "shades-black" || color === "shades-white") {
        return `var(--${mappedColor})`;
    }
    return `var(--${mappedColor}-${colorNumber})`;
};
const cssVariableToHex = (cssVariable)=>{
    if (!cssVariable || !cssVariable.startsWith("var(--")) {
        return cssVariable; // Return as-is if not a CSS variable
    }
    // Create a temporary element to get computed style
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return "#23DA7F"; // Default fallback
};
function generateHash(data) {
    // canonicalize ensures keys are sorted and whitespace is removed per RFC 8785
    const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(data);
    if (!encoded) return "";
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(encoded).digest("hex");
}
}),
"[project]/lib/constants/services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Service Constants
 * Configuration constants for various services
 */ /**
 * Event types for principal activity tracking
 */ __turbopack_context__.s([
    "ACTIVITY_EVENT_TYPES",
    ()=>ACTIVITY_EVENT_TYPES,
    "ACTIVITY_LOG_CONFIG",
    ()=>ACTIVITY_LOG_CONFIG,
    "CONSENT_BATCH_CONFIG",
    ()=>CONSENT_BATCH_CONFIG,
    "DPDPA_RIGHTS",
    ()=>DPDPA_RIGHTS,
    "ENV_KEYS",
    ()=>ENV_KEYS
]);
const ACTIVITY_EVENT_TYPES = {
    LOGIN: "login",
    LOGOUT: "logout"
};
const CONSENT_BATCH_CONFIG = {
    BATCH_SIZE: 500,
    MAX_TOTAL_RECORDS: 10000
};
const ACTIVITY_LOG_CONFIG = {
    DEFAULT_LIMIT: 50,
    MAX_LIMIT: 100
};
const DPDPA_RIGHTS = [
    "Right to Access – You can request details on what personal data is collected and how it is processed.",
    "Right to Correction and Erasure – You can request corrections to inaccurate data or deletion of your data under applicable conditions.",
    "Right to Grievance Redressal – You can file a complaint if you believe your data rights have been violated.",
    "Right to Nominate – You can designate a nominee to exercise your rights in case of incapacity or death.",
    "Right to Withdraw Consent – You may withdraw your consent at any time, subject to legal and contractual obligations."
];
const ENV_KEYS = {
    DATA_FIDUCIARY_NAME: "DATA_FIDUCIARY_NAME",
    DATA_FIDUCIARY_LOGO_URL: "NEXT_PUBLIC_DATA_FIDUCIARY_LOGO_URL"
};
}),
"[project]/lib/constants/notice-metadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Notice Metadata Constants
 *
 * Defines standard metadata keys used in the notice system,
 * particularly for minor consent workflows.
 */ __turbopack_context__.s([
    "NOTICE_METADATA_KEYS",
    ()=>NOTICE_METADATA_KEYS,
    "RELATIONSHIP_OPTIONS",
    ()=>RELATIONSHIP_OPTIONS
]);
const NOTICE_METADATA_KEYS = {
    /**
   * Key for storing the major (parent/guardian) data principal ID
   * Used when a notice is created for a minor
   */ MAJOR_DATA_PRINCIPAL_ID: "major_data_principal_id",
    /**
   * Key for storing the relationship between the major and minor
   * (e.g., parent, guardian, foster_parent, etc.)
   */ RELATIONSHIP_WITH_MINOR: "relationship_with_minor"
};
const RELATIONSHIP_OPTIONS = [
    {
        value: "parent",
        label: "Parent"
    },
    {
        value: "guardian",
        label: "Guardian"
    },
    {
        value: "foster_parent",
        label: "Foster Parent"
    },
    {
        value: "custodian",
        label: "Custodian"
    },
    {
        value: "caregiver",
        label: "Caregiver"
    },
    {
        value: "mentor_adviser",
        label: "Mentor/Adviser"
    },
    {
        value: "other",
        label: "Other"
    }
];
}),
"[project]/lib/utils/logger.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Simple logger utility for consistent logging across the application
 */ __turbopack_context__.s([
    "logger",
    ()=>logger
]);
function formatMessage(level, message, context) {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` ${JSON.stringify(context)}` : "";
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${contextStr}`;
}
const logger = {
    info (message, context) {
        console.log(formatMessage("info", message, context));
    },
    warn (message, context) {
        console.warn(formatMessage("warn", message, context));
    },
    error (message, context) {
        console.error(formatMessage("error", message, context));
    },
    debug (message, context) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.debug(formatMessage("debug", message, context));
        }
    }
};
}),
"[project]/lib/services/webhook-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Webhook Service - Fire-and-Forget Event Notification System
 * 
 * Features:
 * - HMAC-SHA256 signature generation for payload verification
 * - Configurable HTTP methods and custom headers
 * - Fire-and-forget delivery (no blocking)
 * - Webhook delivery logging with status tracking
 * - Data processor webhook filtering and payload customization
 */ __turbopack_context__.s([
    "generateSigningSecret",
    ()=>generateSigningSecret,
    "triggerWebhookEvent",
    ()=>triggerWebhookEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
/**
 * Generate HMAC-SHA256 signature for webhook payload
 * 
 * @param timestamp - ISO timestamp for replay protection
 * @param payload - JSON stringified payload
 * @param secret - Signing secret from webhook configuration
 * @returns Signature in format "v1=<hex>"
 */ function generateSignature(timestamp, payload, secret) {
    const signedPayload = `${timestamp}.${payload}`;
    const hmac = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHmac"])("sha256", secret);
    hmac.update(signedPayload);
    const signature = hmac.digest("hex");
    return `v1=${signature}`;
}
/**
 * Create webhook log entry (fire-and-forget)
 */ async function createWebhookLog(webhookId, eventId, eventType, payload, status, httpStatus, responseTime, errorMessage) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].webhookLog.create({
            data: {
                webhookId,
                eventId,
                eventType,
                payload: payload,
                status,
                httpStatus,
                responseTime,
                errorMessage: errorMessage?.substring(0, 1000)
            }
        });
    } catch (error) {
        // Don't let logging failures affect webhook delivery
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to create webhook log", {
            webhookId,
            eventId,
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
}
/**
 * Fire-and-forget webhook delivery with logging
 * This function is intentionally async but not awaited by the caller
 * 
 * @param endpoint - Webhook endpoint configuration
 * @param payload - Event data to send
 */ async function fireWebhook(endpoint, payload) {
    const eventId = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
    const timestamp = new Date().toISOString();
    const startTime = Date.now();
    // Construct standardized payload
    const webhookPayload = {
        eventId,
        eventType: payload.eventType,
        timestamp,
        data: payload
    };
    const payloadJson = JSON.stringify(webhookPayload);
    // Generate HMAC signature
    const signature = generateSignature(timestamp, payloadJson, endpoint.signingSecret);
    // Prepare headers
    const headers = {
        "Content-Type": "application/json",
        "X-Privy-Timestamp": timestamp,
        "X-Privy-Signature": signature,
        "X-Privy-Event-Id": eventId,
        "User-Agent": "Privy-Webhook/1.0"
    };
    // Merge custom headers if provided
    if (endpoint.customHeaders) {
        Object.assign(headers, endpoint.customHeaders);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("Firing webhook", {
        endpointId: endpoint.publicId,
        eventId,
        url: endpoint.endpointUrl,
        targetType: endpoint.targetType
    });
    // Create pending log entry (fire-and-forget)
    createWebhookLog(endpoint.id, eventId, payload.eventType, payload, "PENDING").catch(()=>{
    // Silently ignore logging errors
    });
    try {
        // Create abort controller for timeout (15 seconds)
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), 15000);
        const response = await fetch(endpoint.endpointUrl, {
            method: endpoint.httpMethod,
            headers,
            body: payloadJson,
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        const responseTime = Date.now() - startTime;
        if (response.ok) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Webhook delivered successfully", {
                endpointId: endpoint.publicId,
                eventId,
                status: response.status,
                responseTime
            });
            // Update log with success (fire-and-forget)
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].webhookLog.updateMany({
                where: {
                    eventId
                },
                data: {
                    status: "DELIVERED",
                    httpStatus: response.status,
                    responseTime
                }
            }).catch(()=>{
            // Silently ignore logging errors
            });
        } else {
            const errorMsg = `HTTP ${response.status}: ${response.statusText}`;
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Webhook delivery failed with non-2xx response", {
                endpointId: endpoint.publicId,
                eventId,
                status: response.status,
                statusText: response.statusText,
                responseTime
            });
            // Update log with failure (fire-and-forget)
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].webhookLog.updateMany({
                where: {
                    eventId
                },
                data: {
                    status: "FAILED",
                    httpStatus: response.status,
                    responseTime,
                    errorMessage: errorMsg
                }
            }).catch(()=>{
            // Silently ignore logging errors
            });
        }
    } catch (error) {
        const responseTime = Date.now() - startTime;
        let status = "FAILED";
        let errorMsg = "Unknown error";
        if (error instanceof Error) {
            if (error.name === "AbortError") {
                status = "TIMEOUT";
                errorMsg = "Request timeout after 15 seconds";
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Webhook delivery timeout", {
                    endpointId: endpoint.publicId,
                    eventId,
                    url: endpoint.endpointUrl,
                    responseTime
                });
            } else {
                errorMsg = error.message;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Webhook delivery error", {
                    endpointId: endpoint.publicId,
                    eventId,
                    error: error.message,
                    responseTime
                });
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Webhook delivery unknown error", {
                endpointId: endpoint.publicId,
                eventId,
                responseTime
            });
        }
        // Update log with error (fire-and-forget)
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].webhookLog.updateMany({
            where: {
                eventId
            },
            data: {
                status,
                responseTime,
                errorMessage: errorMsg
            }
        }).catch(()=>{
        // Silently ignore logging errors
        });
    }
}
/**
 * Filter payload for data processor webhooks to only include relevant data
 */ function filterPayloadForDataProcessor(payload, dataProcessorId) {
    // Clone the payload
    const filtered = {
        ...payload
    };
    // If payload has data_processors array, filter to only include this processor
    if (Array.isArray(filtered.data_processors)) {
        filtered.data_processors = filtered.data_processors.filter((dp)=>dp.ou_id === dataProcessorId);
    }
    // If payload has processing purposes, filter to only those linked to this processor
    if (Array.isArray(filtered.processing_purposes)) {
        filtered.processing_purposes = filtered.processing_purposes.filter((pp)=>pp.data_processors?.some((dp)=>dp.ou_id === dataProcessorId));
    }
    return filtered;
}
async function triggerWebhookEvent(eventType, payload, dataProcessorIds) {
    try {
        // Build where clause for webhook query
        const whereClause = {
            eventType,
            isActive: true,
            OR: [
                // Always include data fiduciary webhooks
                {
                    targetType: "DATA_FIDUCIARY"
                }
            ]
        };
        // Add data processor webhooks if processor IDs provided
        if (dataProcessorIds && dataProcessorIds.length > 0) {
            whereClause.OR.push({
                targetType: "DATA_PROCESSOR",
                dataProcessorId: {
                    in: dataProcessorIds
                }
            });
        }
        // Find all active webhooks for this event type
        const webhooks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].webhook.findMany({
            where: whereClause,
            select: {
                id: true,
                publicId: true,
                endpointUrl: true,
                httpMethod: true,
                customHeaders: true,
                signingSecret: true,
                targetType: true,
                dataProcessorId: true
            }
        });
        if (webhooks.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("No active webhooks found for event type", {
                eventType
            });
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Triggering webhooks", {
            eventType,
            count: webhooks.length,
            dataFiduciaryCount: webhooks.filter((w)=>w.targetType === "DATA_FIDUCIARY").length,
            dataProcessorCount: webhooks.filter((w)=>w.targetType === "DATA_PROCESSOR").length
        });
        // Fire webhooks without awaiting (fire-and-forget)
        for (const webhook of webhooks){
            const endpoint = {
                id: webhook.id,
                publicId: webhook.publicId,
                endpointUrl: webhook.endpointUrl,
                httpMethod: webhook.httpMethod,
                customHeaders: webhook.customHeaders,
                signingSecret: webhook.signingSecret,
                targetType: webhook.targetType,
                dataProcessorId: webhook.dataProcessorId
            };
            // Filter payload for data processor webhooks
            let webhookPayload = {
                ...payload,
                eventType
            };
            if (webhook.targetType === "DATA_PROCESSOR" && webhook.dataProcessorId) {
                const filteredData = filterPayloadForDataProcessor(payload, webhook.dataProcessorId);
                webhookPayload = {
                    ...filteredData,
                    eventType
                };
            }
            // Fire without awaiting - this is intentional for fire-and-forget behavior
            fireWebhook(endpoint, webhookPayload).catch((error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Unexpected error in fireWebhook", {
                    endpointId: endpoint.publicId,
                    error: error instanceof Error ? error.message : "Unknown error"
                });
            });
        }
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error triggering webhook events", {
            eventType,
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
}
function generateSigningSecret() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])().replace(/-/g, "") + (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])().replace(/-/g, "");
}
}),
"[project]/lib/services/consents-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "checkConsentExpiration",
    ()=>checkConsentExpiration,
    "createConsents",
    ()=>createConsents,
    "expireConsents",
    ()=>expireConsents,
    "fetchConsentHistoryFromDB",
    ()=>fetchConsentHistoryFromDB,
    "formatConsentsForValidation",
    ()=>formatConsentsForValidation,
    "getActiveConsentsOverview",
    ()=>getActiveConsentsOverview,
    "getConsentsByBusinessProcess",
    ()=>getConsentsByBusinessProcess,
    "getConsentsByDataPrincipal",
    ()=>getConsentsByDataPrincipal,
    "getLatestActiveConsents",
    ()=>getLatestActiveConsents,
    "groupConsentsByLatestRule",
    ()=>groupConsentsByLatestRule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$notice$2d$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/notice-metadata.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/dprm-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function createConsents(noticePublicId, selections, language = "en") {
    try {
        // Get the notice with full business process data
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
            where: {
                publicId: noticePublicId
            },
            include: {
                businessProcess: {
                    include: {
                        businessUnit: true,
                        businessProcessRules: {
                            include: {
                                consentPurpose: true,
                                processingPurpose: true
                            }
                        }
                    }
                },
                metadata: true
            }
        });
        if (!notice) {
            return {
                success: false,
                consentsCreated: 0,
                consentIds: [],
                errors: [
                    "Notice not found"
                ]
            };
        }
        // Extract major data principal ID from metadata if forMinor is true
        let majorDataPrincipalId = undefined;
        if (notice.forMinor && notice.metadata) {
            const majorMetadata = notice.metadata.find((m)=>m.key === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$notice$2d$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NOTICE_METADATA_KEYS"].MAJOR_DATA_PRINCIPAL_ID);
            if (majorMetadata) {
                majorDataPrincipalId = majorMetadata.value;
            }
        }
        const businessProcess = notice.businessProcess;
        const selectedRules = selections.filter((s)=>s.selected);
        if (selectedRules.length === 0) {
            return {
                success: false,
                consentsCreated: 0,
                consentIds: [],
                errors: [
                    "No rules selected for consent creation"
                ]
            };
        }
        // Fetch consent durations for each consent purpose in this business process
        const consentDurationsMap = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcessToConsentPurpose.findMany({
            where: {
                businessProcessId: businessProcess.id
            },
            select: {
                consentPurposeId: true,
                consentDuration: true
            }
        });
        // Create a map for quick lookup: consentPurposeId -> duration in hours
        const durationsMap = new Map(consentDurationsMap.map((item)=>[
                item.consentPurposeId,
                item.consentDuration
            ]));
        const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const referenceId = notice.referenceId || `ref_${Date.now()}`;
        // Prepare consent creation data
        const consentData = selectedRules.map((selection)=>{
            const rule = businessProcess.businessProcessRules.find((r)=>r.id === selection.ruleId);
            if (!rule) {
                throw new Error(`Business process rule not found for ID: ${selection.ruleId}`);
            }
            // Calculate expiration date with proper priority
            let expiresAt = undefined;
            // Priority 1: Notice-level consent duration (if provided and not 0)
            // consentDuration in Notice is stored in HOURS
            if (notice.consentDuration && notice.consentDuration > 0) {
                expiresAt = new Date(Date.now() + notice.consentDuration * 60 * 60 * 1000);
            } else {
                const configuredDuration = durationsMap.get(rule.consentPurpose.id);
                if (configuredDuration && configuredDuration > 0) {
                    expiresAt = new Date(Date.now() + configuredDuration * 60 * 60 * 1000);
                }
            // If both are null/0, expiresAt remains undefined (until purpose met)
            }
            return {
                requestId,
                requestType: "notice_submission",
                referenceId,
                dataPrincipalId: notice.dataPrincipalId,
                businessProcessId: businessProcess.publicId,
                consentPurposeId: rule.consentPurpose.publicId,
                processingPurposeId: rule.processingPurpose.publicId,
                businessProcessRuleId: rule.publicId,
                businessUnitId: businessProcess.businessUnit.publicId,
                userAttributeNames: rule.processingPurpose.userAttributeNames,
                majorDataPrincipalId,
                language,
                status: "accepted",
                expiresAt
            };
        });
        // Create consents in the database
        try {
            const createdConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.createMany({
                data: consentData
            });
            // Get the created consent records with full details for webhook
            const createdConsentRecords = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
                where: {
                    requestId,
                    dataPrincipalId: notice.dataPrincipalId
                },
                include: {
                    businessProcess: {
                        select: {
                            name: true,
                            code: true,
                            version: true
                        }
                    },
                    consentPurpose: {
                        select: {
                            name: true,
                            code: true,
                            version: true
                        }
                    },
                    processingPurpose: {
                        select: {
                            name: true,
                            publicId: true,
                            purposeOfProcessing: {
                                select: {
                                    code: true
                                }
                            }
                        }
                    },
                    businessUnit: {
                        select: {
                            name: true,
                            code: true
                        }
                    },
                    businessProcessRule: {
                        select: {
                            mandatory: true,
                            revocableByPrincipal: true,
                            reconsentableByPrincipal: true
                        }
                    }
                }
            });
            const consentIds = createdConsentRecords.map((c)=>c.publicId);
            // CREATE AUDIT LOGS (Missing in provided snippet, adding back for consistency)
            const auditLogs = createdConsentRecords.map((c)=>({
                    consentId: c.publicId,
                    dataPrincipalId: c.dataPrincipalId,
                    action: "GRANTED",
                    actor: "data_principal",
                    details: {
                        noticeId: noticePublicId,
                        requestId
                    }
                }));
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentAuditTrail.createMany({
                data: auditLogs
            });
            // WEBHOOK TRIGGER
            const dprmLink = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDprmLink"])(notice.dataPrincipalId);
            const submittedConsents = createdConsentRecords.map((consent)=>({
                    consent_purpose_name: consent.consentPurpose.name,
                    consent_id: consent.publicId,
                    consent_purpose_code: consent.consentPurpose.code,
                    consent_purpose_version: consent.consentPurpose.version,
                    processing_purpose_name: consent.processingPurpose.name,
                    processing_purpose_code: consent.processingPurpose.purposeOfProcessing.code,
                    user_attribute_name: consent.userAttributeNames.length > 0 ? consent.userAttributeNames[0] : null,
                    business_unit_name: consent.businessUnit.name,
                    business_unit_code: consent.businessUnit.code,
                    action: consent.status,
                    inserted_at: consent.insertedAt.toISOString(),
                    updated_at: consent.updatedAt.toISOString(),
                    mandatory: consent.businessProcessRule.mandatory,
                    parent_consent_id: consent.parentConsentId,
                    performed_by: "self",
                    reconsentable_by_principal: consent.businessProcessRule.reconsentableByPrincipal,
                    revocable_by_principal: consent.businessProcessRule.revocableByPrincipal,
                    minor_data_principal_id: consent.majorDataPrincipalId,
                    has_parent: consent.majorDataPrincipalId !== null
                }));
            if (createdConsentRecords.length > 0) {
                const first = createdConsentRecords[0];
                // Generate notice links
                const { generateNoticeLinkFromObject } = await __turbopack_context__.A("[project]/lib/services/notices-service.ts [app-rsc] (ecmascript, async loader)");
                const noticeLink = await generateNoticeLinkFromObject(notice, false);
                const embedLink = await generateNoticeLinkFromObject(notice, true);
                // Generate timeline link (DPRM link with timeline path)
                const basePath = process.env.BASE_PATH || process.env.AUTH_URL || "http://localhost:3000";
                const dprmAccessToken = dprmLink.split("/").pop(); // Extract token from DPRM link
                const timelineLink = `${basePath}/principal/consents/timeline/${notice.dataPrincipalId}/${dprmAccessToken}?type=data_principal_id&data_fiduciary_id=${first.businessUnit.code}&data_principal_ids[]=${notice.dataPrincipalId}`;
                // Get data_fiduciary_id from environment or business unit code
                const dataFiduciaryId = process.env.DATA_FIDUCIARY_ID || first.businessUnit.code;
                // Build consents array with full structure matching the expected format
                const consentsArray = submittedConsents.map((consent)=>({
                        consent_id: consent.consent_id,
                        consent_purpose_code: consent.consent_purpose_code,
                        consent_purpose_name: consent.consent_purpose_name,
                        consent_purpose_version: consent.consent_purpose_version,
                        processing_purpose_code: consent.processing_purpose_code,
                        processing_purpose_name: consent.processing_purpose_name,
                        user_attribute_name: consent.user_attribute_name,
                        entity_name: consent.user_attribute_name,
                        business_unit_name: consent.business_unit_name,
                        business_unit_code: consent.business_unit_code,
                        business_unit_version: 1,
                        business_process_name: first.businessProcess.name,
                        business_process_code: first.businessProcess.code,
                        business_process_version: first.businessProcess.version,
                        company_process_name: first.businessProcess.name,
                        company_process_code: first.businessProcess.code,
                        company_process_version: first.businessProcess.version,
                        company_process_rule_id: consent.business_unit_code,
                        policy_name: consent.business_unit_name,
                        policy_code: consent.business_unit_code,
                        policy_version: 1,
                        action: consent.action,
                        inserted_at: consent.inserted_at,
                        updated_at: consent.updated_at,
                        expires_at: null,
                        mandatory: consent.mandatory,
                        revocable_by_principal: consent.revocable_by_principal,
                        reconsentable_by_principal: consent.reconsentable_by_principal,
                        parent_consent_id: consent.parent_consent_id,
                        performed_by: consent.performed_by,
                        minor_data_principal_id: consent.minor_data_principal_id,
                        has_parent: consent.has_parent,
                        language: language,
                        notice_id: requestId,
                        reference_id: referenceId,
                        data_principal_id: notice.dataPrincipalId,
                        data_fiduciary_id: dataFiduciaryId,
                        entity_id: null
                    }));
                // Build webhook payload matching the exact structure
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_CREATED, {
                    business_process_code: first.businessProcess.code,
                    business_process_name: first.businessProcess.name,
                    business_process_version: first.businessProcess.version,
                    company_process_code: first.businessProcess.code,
                    company_process_name: first.businessProcess.name,
                    company_process_version: first.businessProcess.version,
                    consent_status: "accepted",
                    data_fiduciary_id: dataFiduciaryId,
                    data_principal_id: notice.dataPrincipalId,
                    data_principal_submitted_data: {
                        consents: consentsArray,
                        language: language
                    },
                    dprm_link: dprmLink,
                    embed_link: embedLink,
                    inserted_at: notice.createdAt.toISOString(),
                    notice_id: requestId,
                    notice_link: noticeLink,
                    reference_id: referenceId,
                    resource_type: "grant_notice",
                    selected_language: language,
                    status: "completed",
                    submitted_consents: submittedConsents,
                    timeline_link: timelineLink,
                    updated_at: new Date().toISOString()
                }).catch((webhookError)=>{
                    console.error("Failed to trigger CONSENT_CREATED webhook:", webhookError);
                });
            }
            return {
                success: true,
                consentsCreated: createdConsents.count,
                consentIds
            };
        } catch (createError) {
            // Handle unique constraint violation specifically
            if (createError.code === "P2002" || createError.message?.includes("duplicate key value violates unique constraint")) {
                // Return success with 0 consents created since duplicates were prevented
                return {
                    success: true,
                    consentsCreated: 0,
                    consentIds: []
                };
            }
            // Re-throw other errors
            throw createError;
        }
    } catch (error) {
        console.error("Error creating consents:", error);
        return {
            success: false,
            consentsCreated: 0,
            consentIds: [],
            errors: [
                error instanceof Error ? error.message : "Unknown error"
            ]
        };
    }
}
async function getConsentsByDataPrincipal(dataPrincipalId) {
    try {
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                dataPrincipalId
            },
            include: {
                businessProcess: {
                    select: {
                        name: true,
                        code: true
                    }
                },
                consentPurpose: {
                    select: {
                        name: true,
                        code: true
                    }
                },
                processingPurpose: {
                    select: {
                        name: true,
                        description: true
                    }
                },
                businessUnit: {
                    select: {
                        name: true,
                        code: true
                    }
                }
            },
            orderBy: {
                insertedAt: "desc"
            }
        });
        return consents;
    } catch (error) {
        console.error("Error fetching consents:", error);
        throw new Error("Failed to fetch consents");
    }
}
async function getConsentsByBusinessProcess(businessProcessId) {
    try {
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                businessProcessId
            },
            include: {
                businessProcess: {
                    select: {
                        name: true,
                        code: true
                    }
                },
                consentPurpose: {
                    select: {
                        name: true,
                        code: true
                    }
                },
                processingPurpose: {
                    select: {
                        name: true,
                        description: true
                    }
                },
                businessUnit: {
                    select: {
                        name: true,
                        code: true
                    }
                }
            },
            orderBy: {
                insertedAt: "desc"
            }
        });
        return consents;
    } catch (error) {
        console.error("Error fetching consents:", error);
        throw new Error("Failed to fetch consents");
    }
}
async function checkConsentExpiration(consentId) {
    try {
        const consent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findUnique({
            where: {
                publicId: consentId
            },
            select: {
                expiresAt: true,
                isExpired: true,
                status: true
            }
        });
        if (!consent) {
            return {
                isExpired: false,
                error: "Consent not found"
            };
        }
        if (consent.isExpired) {
            return {
                isExpired: true,
                expiredAt: consent.expiresAt
            };
        }
        if (consent.expiresAt && consent.expiresAt < new Date()) {
            // Mark as expired
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.update({
                where: {
                    publicId: consentId
                },
                data: {
                    isExpired: true,
                    status: "expired"
                }
            });
            return {
                isExpired: true,
                expiredAt: consent.expiresAt
            };
        }
        return {
            isExpired: false
        };
    } catch (error) {
        console.error("Error checking consent expiration:", error);
        return {
            isExpired: false,
            error: "Failed to check expiration"
        };
    }
}
async function getLatestActiveConsents(dataPrincipalId) {
    try {
        // Step 1: Single raw query to get top 5 attributes with their processing purpose IDs
        const topAttributesResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$queryRaw`
      SELECT
        attr.name AS attribute_name,
        ARRAY_AGG(pp.public_id ORDER BY c.inserted_at DESC) as purpose_ids
      FROM
        consents c
      JOIN
        processing_purposes pp ON c.processing_purpose_id = pp.public_id
      CROSS JOIN
        UNNEST(pp.user_attribute_names) AS attr(name)
      WHERE
        c.data_principal_id = ${dataPrincipalId} AND c.status = 'accepted' AND c.is_expired = false
      GROUP BY
        attribute_name
      ORDER BY
        COUNT(attr.name) DESC
      LIMIT 5;
    `;
        // Step 2: Get first 2 processing purpose IDs for each attribute and create a set
        const processingPurposeIdsToFetch = new Set();
        const attributeProcessingPurposeMap = new Map();
        for (const { attribute_name, purpose_ids } of topAttributesResult){
            const firstTwoIds = purpose_ids.slice(0, 2);
            attributeProcessingPurposeMap.set(attribute_name, firstTwoIds);
            firstTwoIds.forEach((id)=>processingPurposeIdsToFetch.add(id));
        }
        // Step 3: Query to get title and description of processing purposes
        const processingPurposes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.findMany({
            where: {
                publicId: {
                    in: Array.from(processingPurposeIdsToFetch)
                }
            },
            select: {
                publicId: true,
                name: true,
                description: true
            }
        });
        // Create a map for quick lookup
        const processingPurposeMap = new Map(processingPurposes.map((pp)=>[
                pp.publicId,
                pp
            ]));
        // Step 4: Build the result
        const result = topAttributesResult.map(({ attribute_name, purpose_ids })=>{
            const firstTwoIds = attributeProcessingPurposeMap.get(attribute_name) || [];
            const processingPurposesForAttribute = firstTwoIds.map((id)=>processingPurposeMap.get(id)).filter(Boolean).map((pp)=>({
                    id: pp.publicId,
                    name: pp.name,
                    description: pp.description
                }));
            return {
                userAttributeName: attribute_name,
                processingPurposes: processingPurposesForAttribute,
                totalCount: purpose_ids.length
            };
        });
        return result;
    } catch (error) {
        console.error("Error fetching latest active consents:", error);
        throw new Error("Failed to fetch latest active consents");
    }
}
function groupConsentsByLatestRule(consents) {
    const latestConsentsByRule = new Map();
    for (const consent of consents){
        // Key: dataPrincipalId + referenceId + businessProcessRuleId
        // This ensures we get the latest consent for each unique consent flow
        const key = `${consent.dataPrincipalId}_${consent.referenceId}_${consent.businessProcessRuleId}`;
        // If we haven't seen this combination, store it
        // Since consents are ordered by insertedAt desc, the first occurrence is the latest
        if (!latestConsentsByRule.has(key)) {
            latestConsentsByRule.set(key, consent);
        }
    }
    return latestConsentsByRule;
}
function formatConsentsForValidation(consents) {
    return consents.map((consent)=>({
            is_active: consent.status === "accepted" && !consent.isExpired,
            data_principal_id: consent.dataPrincipalId,
            processing_purpose_code: consent.processingPurpose.purposeOfProcessing.code,
            consent_id: consent.publicId,
            status: consent.status,
            business_process_code: consent.businessProcess.code,
            business_process_version: consent.businessProcess.version,
            consent_purpose_code: consent.consentPurpose.code,
            consent_purpose_version: consent.consentPurpose.version,
            recorded_at: consent.insertedAt.toISOString()
        }));
}
async function expireConsents() {
    const BATCH_SIZE = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONSENT_BATCH_CONFIG"].BATCH_SIZE;
    const MAX_TOTAL_RECORDS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONSENT_BATCH_CONFIG"].MAX_TOTAL_RECORDS;
    let totalExpiredCount = 0;
    const allExpiredConsents = [];
    try {
        const now = new Date();
        let processedCount = 0;
        // Process in batches until no more expired consents or max limit reached
        while(processedCount < MAX_TOTAL_RECORDS){
            try {
                // Use a transaction with timeout and FOR UPDATE to lock rows
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
                    // Find consents that need to be expired (with row-level locking)
                    // We select all fields needed for both the return object and the audit log
                    const expiredConsents = await tx.$queryRaw`
              SELECT 
                id, 
                public_id, 
                data_principal_id, 
                reference_id,
                business_process_id,
                consent_purpose_id,
                processing_purpose_id,
                business_unit_id,
                user_attribute_names,
                language,
                request_id,
                parent_consent_id,
                inserted_at,
                updated_at,
                expires_at
              FROM consents
              WHERE expires_at IS NOT NULL
                AND is_expired = false
                AND expires_at < ${now}
                AND status = 'accepted'
              LIMIT ${BATCH_SIZE}
              FOR UPDATE SKIP LOCKED
            `;
                    if (expiredConsents.length === 0) {
                        return {
                            expiredCount: 0,
                            expiredConsents: []
                        };
                    }
                    const consentIds = expiredConsents.map((consent)=>consent.id);
                    // 1. Update the consents to mark them as expired
                    await tx.consent.updateMany({
                        where: {
                            id: {
                                in: consentIds
                            }
                        },
                        data: {
                            isExpired: true,
                            status: "expired"
                        }
                    });
                    // 2. Create Audit Trail Entries
                    // We map the raw query results (snake_case) to the schema fields
                    const auditLogs = expiredConsents.map((consent)=>({
                            consentId: consent.public_id,
                            dataPrincipalId: consent.data_principal_id,
                            action: "EXPIRED",
                            actor: "system",
                            timestamp: new Date(),
                            details: {
                                reason: "Consent expired automatically based on duration",
                                expiredAt: consent.expires_at
                            }
                        }));
                    await tx.consentAuditTrail.createMany({
                        data: auditLogs
                    });
                    // Return the processed data formatted for the rest of the function
                    return {
                        expiredCount: expiredConsents.length,
                        expiredConsents: expiredConsents.map((consent)=>({
                                id: consent.id,
                                publicId: consent.public_id,
                                dataPrincipalId: consent.data_principal_id,
                                referenceId: consent.reference_id,
                                businessProcessId: consent.business_process_id,
                                consentPurposeId: consent.consent_purpose_id,
                                processingPurposeId: consent.processing_purpose_id,
                                businessUnitId: consent.business_unit_id,
                                userAttributeNames: consent.user_attribute_names,
                                language: consent.language,
                                requestId: consent.request_id,
                                parentConsentId: consent.parent_consent_id,
                                insertedAt: consent.inserted_at,
                                updatedAt: consent.updated_at,
                                expiresAt: consent.expires_at
                            }))
                    };
                }, {
                    maxWait: 5000,
                    timeout: 10000
                });
                // If no more consents to expire, break the loop
                if (result.expiredCount === 0) {
                    break;
                }
                // Accumulate results
                totalExpiredCount += result.expiredCount;
                allExpiredConsents.push(...result.expiredConsents);
                processedCount += result.expiredCount;
                // Trigger Webhooks (Fire and Forget - Outside Transaction)
                // We re-fetch details to get codes/names needed for the webhook payload
                const consentPublicIds = result.expiredConsents.map((c)=>c.publicId);
                const consentsWithDetails = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
                    where: {
                        publicId: {
                            in: consentPublicIds
                        }
                    },
                    include: {
                        businessProcess: true,
                        consentPurpose: true,
                        processingPurpose: {
                            include: {
                                purposeOfProcessing: true,
                                processingPurposeToDataProcessors: {
                                    include: {
                                        dataProcessor: true
                                    }
                                }
                            }
                        },
                        businessUnit: true
                    }
                });
                const consentDetailsMap = new Map(consentsWithDetails.map((c)=>[
                        c.publicId,
                        c
                    ]));
                result.expiredConsents.forEach((consent)=>{
                    const details = consentDetailsMap.get(consent.publicId);
                    if (!details) {
                        console.error(`Missing details for consent ${consent.publicId}`);
                        return;
                    }
                    const userAttributeName = consent.userAttributeNames.length > 0 ? consent.userAttributeNames[0] : null;
                    // Extract data processor IDs for webhook targeting
                    const dataProcessorIds = details.processingPurpose.processingPurposeToDataProcessors.map((dp)=>dp.dataProcessor.ouId).filter((id)=>id !== null);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_EXPIRED, {
                        business_process_code: details.businessProcess.code,
                        business_process_version: details.businessProcess.version,
                        consent_id: consent.publicId,
                        consent_purpose_code: details.consentPurpose.code,
                        consent_purpose_version: details.consentPurpose.version,
                        data_principal_id: consent.dataPrincipalId,
                        user_attribute_name: userAttributeName,
                        status: "consent_expired",
                        selected_language: consent.language,
                        notice_id: consent.requestId,
                        parent_consent_id: consent.parentConsentId,
                        business_unit_code: details.businessUnit.code,
                        processing_purpose_code: details.processingPurpose.purposeOfProcessing.code,
                        reference_id: consent.referenceId,
                        inserted_at: consent.insertedAt.toISOString(),
                        updated_at: consent.updatedAt.toISOString(),
                        expired_at: consent.expiresAt.toISOString()
                    }, dataProcessorIds).catch((webhookError)=>{
                        console.error(`Failed to trigger CONSENT_EXPIRED webhook for ${consent.publicId}:`, webhookError);
                    });
                });
                if (result.expiredCount < BATCH_SIZE) {
                    break;
                }
            } catch (batchError) {
                console.error(`[${now.toISOString()}] Error in batch processing:`, batchError);
                if (batchError instanceof Error && (batchError.message.includes("Unable to start a transaction") || batchError.message.includes("timeout"))) {
                    console.error(`[${now.toISOString()}] Transaction timeout - stopping batch processing`);
                    break;
                }
                break;
            }
        }
        return {
            expiredCount: totalExpiredCount,
            expiredConsents: allExpiredConsents
        };
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error expiring consents:`, error);
        throw error;
    }
}
async function getActiveConsentsOverview(dataPrincipalId) {
    try {
        // Fetch active consents for the data principal
        const activeConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                dataPrincipalId,
                status: "accepted",
                isExpired: false
            },
            select: {
                id: true,
                businessProcessId: true
            }
        });
        // Get active consents count
        const activeConsentsCount = activeConsents.length;
        // Get unique business processes (services)
        const uniqueBusinessProcessIds = new Set(activeConsents.map((consent)=>consent.businessProcessId));
        const servicesCount = uniqueBusinessProcessIds.size;
        return {
            activeConsentsCount,
            servicesCount
        };
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error fetching active consents overview:`, error);
        throw error;
    }
}
async function fetchConsentHistoryFromDB(dataPrincipalId, referenceId, businessProcessCode) {
    const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
        where: {
            dataPrincipalId: dataPrincipalId,
            referenceId: referenceId,
            businessProcess: {
                code: businessProcessCode
            }
        },
        include: {
            businessProcess: true,
            processingPurpose: true,
            consentPurpose: true,
            auditTrail: {
                orderBy: {
                    timestamp: "asc"
                }
            }
        },
        orderBy: {
            insertedAt: "asc"
        }
    });
    if (consents.length === 0) {
        return {
            history: [],
            taxonomy_version: 1,
            id: dataPrincipalId,
            type: "reference_id"
        };
    }
    const currentBp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
        where: {
            code: businessProcessCode
        },
        orderBy: {
            version: "desc"
        }
    });
    // Map to store grouped logs.
    // Key format: "ProcessingCode_ConsentCode_UserAttributeHash"
    const groupedLogs = {};
    for (const consent of consents){
        // 3. Create a Unique Key for the "Trail"
        // A trail is defined by: Same Processing Purpose + Same Consent Purpose + Same Attributes
        // If any of these change, it's conceptually a different "permission"
        const attributesKey = consent.userAttributeNames.sort().join("|");
        const groupKey = `${consent.processingPurposeId}_${consent.consentPurpose.code}_${attributesKey}`;
        // 4. Initialize group if it doesn't exist
        if (!groupedLogs[groupKey]) {
            groupedLogs[groupKey] = {
                // Taxonomy codes
                consent_purpose_code: consent.consentPurpose.code,
                consent_purpose_name: consent.consentPurpose.name,
                consent_purpose_version: consent.consentPurpose.version,
                processing_purpose_code: consent.processingPurposeId,
                processing_purpose_name: consent.processingPurpose.name,
                // The mutable history log object
                log: {
                    reference_id: consent.referenceId,
                    language: consent.language,
                    data_principal_id: consent.dataPrincipalId,
                    major_data_principal_id: consent.majorDataPrincipalId,
                    inserted_at: consent.insertedAt.toISOString(),
                    user_attributes: consent.userAttributeNames,
                    actions: []
                }
            };
        }
        // 5. "Maintain the Trail": Update the existing log with latest state
        const entry = groupedLogs[groupKey];
        // Always update these to the *latest* consent's state
        entry.log.status = consent.status;
        entry.log.updated_at = consent.updatedAt.toISOString();
        entry.log.expires_at = consent.expiresAt ? consent.expiresAt.toISOString() : null;
        // Update rules (assuming latest version rules apply)
        entry.log.business_process_rules = {
            mandatory: false,
            reconsentable_by_principal: true,
            revocable_by_principal: true
        };
        // 6. Merge Actions
        // We map the audit trail from THIS consent version and append it to the main list
        // This results in a list containing IDs from V1, V2, V3...
        const newActions = consent.auditTrail.map((audit)=>({
                action: audit.action.toLowerCase(),
                consent_id: audit.consentId,
                performed_at: audit.timestamp.toISOString(),
                performed_by: audit.actor
            }));
        entry.log.actions.push(...newActions);
    }
    // 7. Restructure for Final JSON Output
    // We need to group the flat logs back under "Processing Purposes"
    const outputProcessingPurposes = {};
    Object.values(groupedLogs).forEach((group)=>{
        const ppCode = group.processing_purpose_code;
        if (!outputProcessingPurposes[ppCode]) {
            outputProcessingPurposes[ppCode] = {
                processing_purpose_code: group.processing_purpose_code,
                processing_purpose_name: group.processing_purpose_name,
                consent_purpose_code: group.consent_purpose_code,
                consent_purpose_version: group.consent_purpose_version,
                history_logs: []
            };
        }
        // Add the consolidated log (with merged actions) to the list
        outputProcessingPurposes[ppCode].history_logs.push(group.log);
    });
    // 8. Construct Final Payload
    const historyItem = {
        business_process_code: currentBp.code,
        business_process_name: currentBp.name,
        policy_code: currentBp.code,
        policy_name: currentBp.name,
        policy_version: currentBp.version,
        data_fiduciary_id: "idfy",
        processing_purposes: Object.values(outputProcessingPurposes)
    };
    return {
        history: [
            historyItem
        ],
        id: dataPrincipalId,
        taxonomy_version: 1,
        type: "reference_id"
    };
}
}),
"[project]/lib/services/dprm-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "generateDprmAccessToken",
    ()=>generateDprmAccessToken,
    "generateDprmLink",
    ()=>generateDprmLink,
    "getLatestActiveConsentsForDprm",
    ()=>getLatestActiveConsentsForDprm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
async function generateDprmAccessToken(dataPrincipalId, expiresAt) {
    try {
        const sessionId = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
        const attrs = {
            data_principal_id: dataPrincipalId,
            session_id: sessionId,
            expires_at: expiresAt.toISOString()
        };
        const accessToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateAccessToken"])(attrs, expiresAt);
        return accessToken;
    } catch (error) {
        console.error("Error generating DPRM access token:", error);
        throw new Error("Failed to generate access token");
    }
}
async function generateDprmLink(dataPrincipalId, expiresAt) {
    try {
        // Use provided expiry date or default to half an hour from now
        const linkExpiresAt = expiresAt || new Date(Date.now() + 30 * 60 * 1000);
        const accessToken = await generateDprmAccessToken(dataPrincipalId, linkExpiresAt);
        const basePath = process.env.BASE_PATH || process.env.AUTH_URL || "http://localhost:3000";
        const dprmUrl = `${basePath}/principal/dprm/${accessToken}`;
        return dprmUrl;
    } catch (error) {
        console.error("Error generating DPRM link:", error);
        throw new Error("Failed to generate DPRM link");
    }
}
async function getLatestActiveConsentsForDprm(dataPrincipalId) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestActiveConsents"])(dataPrincipalId);
    } catch (error) {
        console.error("Error fetching latest active consents for DPRM:", error);
        throw new Error("Failed to fetch latest active consents");
    }
}
}),
"[project]/actions/dprm.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"409835b588d5b3762e3eac883d8d0e15dc28958d2e":"getMinorsForMajor","40b7859f1e87f7206f724f14ce47ee5928d4ed0e31":"generateDprmLinkForNotice","6093e481902cc85dba78014a82db0c9f3b6cb1e60a":"generateDprmLink","60cf1ceac35ad0699f3db3b7ac232419b40331c996":"getBusinessProcessesForPrincipal"},"",""] */ __turbopack_context__.s([
    "generateDprmLink",
    ()=>generateDprmLink,
    "generateDprmLinkForNotice",
    ()=>generateDprmLinkForNotice,
    "getBusinessProcessesForPrincipal",
    ()=>getBusinessProcessesForPrincipal,
    "getMinorsForMajor",
    ()=>getMinorsForMajor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/dprm-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$notice$2d$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/notice-metadata.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function generateDprmLink(dataPrincipalId, expiresAt) {
    try {
        // TODO: Add RBAC check here
        const dprmUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDprmLink"])(dataPrincipalId, expiresAt);
        return {
            success: true,
            url: dprmUrl
        };
    } catch (error) {
        console.error("Error in generateDprmLink action:", error);
        return {
            success: false,
            error: "Failed to generate DPRM link"
        };
    }
}
async function generateDprmLinkForNotice(notice) {
    try {
        let targetPrincipalId = notice.dataPrincipalId;
        let queryParams = "";
        if (notice.forMinor) {
            const majorMetadata = notice.metadata.find((m)=>m.key === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$notice$2d$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NOTICE_METADATA_KEYS"].MAJOR_DATA_PRINCIPAL_ID);
            if (majorMetadata?.value) {
                targetPrincipalId = majorMetadata.value;
                queryParams = `?minor_data_principal_id=${notice.dataPrincipalId}`;
            }
        }
        const result = await generateDprmLink(targetPrincipalId, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
        );
        if (result.success && result.url) {
            return {
                success: true,
                url: result.url + queryParams
            };
        }
        return result;
    } catch (error) {
        console.error("Error in generateDprmLinkForNotice action:", error);
        return {
            success: false,
            error: "Failed to generate DPRM link for notice"
        };
    }
}
async function getMinorsForMajor(token) {
    try {
        // 1. Verify the DPRM token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
        const majorDataPrincipalId = tokenPayload.data_principal_id;
        // 2. Get unique minor data principal IDs from consents
        const minors = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                majorDataPrincipalId: majorDataPrincipalId
            },
            select: {
                dataPrincipalId: true
            },
            distinct: [
                "dataPrincipalId"
            ]
        });
        return {
            success: true,
            data: minors.map((m)=>m.dataPrincipalId)
        };
    } catch (error) {
        console.error("Error in getMinorsForMajor:", error);
        return {
            success: false,
            error: "Failed to fetch minors",
            data: []
        };
    }
}
async function getBusinessProcessesForPrincipal(token, minorDataPrincipalId) {
    try {
        // 1. Verify the DPRM token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
        const dataPrincipalId = tokenPayload.data_principal_id;
        const targetPrincipalId = minorDataPrincipalId || dataPrincipalId;
        // 2. Get unique business processes from active consents
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                dataPrincipalId: targetPrincipalId,
                ...minorDataPrincipalId && {
                    majorDataPrincipalId: dataPrincipalId
                },
                status: "accepted",
                isExpired: false
            },
            select: {
                businessProcessId: true,
                businessProcess: {
                    select: {
                        id: true,
                        publicId: true,
                        name: true
                    }
                }
            },
            distinct: [
                "businessProcessId"
            ]
        });
        // Filter out null business processes
        const businessProcesses = consents.map((c)=>c.businessProcess).filter((bp)=>bp !== null);
        return {
            success: true,
            data: businessProcesses
        };
    } catch (error) {
        console.error("Error in getBusinessProcessesForPrincipal:", error);
        if (error.message === "TOKEN_EXPIRED") {
            return {
                success: false,
                error: "Your session has expired",
                data: []
            };
        }
        if (error.message === "INVALID_TOKEN") {
            return {
                success: false,
                error: "Invalid access token",
                data: []
            };
        }
        return {
            success: false,
            error: "Failed to fetch business processes",
            data: []
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateDprmLink,
    generateDprmLinkForNotice,
    getMinorsForMajor,
    getBusinessProcessesForPrincipal
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateDprmLink, "6093e481902cc85dba78014a82db0c9f3b6cb1e60a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateDprmLinkForNotice, "40b7859f1e87f7206f724f14ce47ee5928d4ed0e31", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMinorsForMajor, "409835b588d5b3762e3eac883d8d0e15dc28958d2e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessProcessesForPrincipal, "60cf1ceac35ad0699f3db3b7ac232419b40331c996", null);
}),
"[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007ed7046051a367ea295f22958c88a5a2ad656873":"getFiduciaryConfig"},"",""] */ __turbopack_context__.s([
    "getFiduciaryConfig",
    ()=>getFiduciaryConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function getFiduciaryConfig() {
    return {
        logoUrl: process.env.DATA_FIDUCIARY_LOGO_URL || process.env.NEXT_PUBLIC_DATA_FIDUCIARY_LOGO_URL || null,
        fiduciaryName: process.env.DATA_FIDUCIARY_NAME || process.env.NEXT_PUBLIC_DATA_FIDUCIARY_NAME || null
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getFiduciaryConfig
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFiduciaryConfig, "007ed7046051a367ea295f22958c88a5a2ad656873", null);
}),
"[project]/auth.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = {
    basePath: "/cms/api/auth",
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            async authorize (credentials) {
                if (!credentials?.email || !credentials.password) return null;
                // Do deep query once to fetch user with roles
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                    where: {
                        email: credentials.email
                    },
                    include: {
                        userRoles: {
                            include: {
                                role: true
                            }
                        }
                    }
                });
                if (!user || !user.password) return null;
                const isPasswordCorrect = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
                if (isPasswordCorrect) {
                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        roles: user.userRoles
                    };
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt ({ token, user, trigger }) {
            if (user) {
                token.id = user.id;
                token.roles = user.roles;
            }
            // Do deep query to fetch roles if not already set
            // Or to refresh roles on session update
            if (trigger === "update" || !token.roles) {
                if (token.id) {
                    const userWithRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                        where: {
                            id: token.id
                        },
                        include: {
                            userRoles: {
                                include: {
                                    role: true
                                }
                            }
                        }
                    });
                    if (userWithRoles) {
                        token.roles = userWithRoles.userRoles;
                    }
                }
            }
            return token;
        },
        async session ({ session, token }) {
            if (token.id) {
                session.user.id = token.id;
                session.user.roles = token.roles;
            }
            return session;
        }
    }
};
}),
"[project]/lib/logger.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Application Logger
 * Centralized logging utility to replace direct console calls.
 * Allows for future integration with logging services (e.g., Datadog, Sentry).
 */ __turbopack_context__.s([
    "logger",
    ()=>logger
]);
class Logger {
    log(level, message, context) {
        const entry = {
            level,
            message,
            context,
            timestamp: new Date().toISOString()
        };
        // In development, print pretty logs
        if ("TURBOPACK compile-time truthy", 1) {
            const color = level === "error" ? "\x1b[31m" // Red
             : level === "warn" ? "\x1b[33m" // Yellow
             : level === "info" ? "\x1b[36m" // Cyan
             : "\x1b[90m"; // Gray
            console.log(`${color}[${level.toUpperCase()}]\x1b[0m ${message}`, context ? context : "");
        } else //TURBOPACK unreachable
        ;
    }
    info(message, context) {
        this.log("info", message, context);
    }
    warn(message, context) {
        this.log("warn", message, context);
    }
    error(message, error, context) {
        const errorContext = error instanceof Error ? {
            name: error.name,
            message: error.message,
            stack: error.stack
        } : {
            error
        };
        this.log("error", message, {
            ...context,
            ...errorContext
        });
    }
    debug(message, context) {
        this.log("debug", message, context);
    }
}
const logger = new Logger();
}),
"[project]/lib/audit.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "logAudit",
    ()=>logAudit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-rsc] (ecmascript)");
;
;
async function logAudit(params) {
    try {
        const { action, resource, resourceId, performedByUserId, payload, result, status = "SUCCESS", failureReason, metadata } = params;
        // Sanitize payload/result (remove passwords, large blobs, etc.)
        const sanitizedPayload = sanitizeData(payload);
        const sanitizedResult = sanitizeData(result);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].auditLog.create({
            data: {
                action,
                resource,
                resourceId: resourceId ? String(resourceId) : null,
                performedByUserId,
                payload: sanitizedPayload ?? undefined,
                result: sanitizedResult ?? undefined,
                status,
                failureReason,
                metadata: metadata ?? undefined
            }
        });
    } catch (error) {
        // Fallback to logger if DB write fails
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to write audit log", error, {
            params
        });
    }
}
function sanitizeData(data) {
    if (!data) return null;
    // Handle arrays
    if (Array.isArray(data)) {
        return data.map((item)=>sanitizeData(item));
    }
    // Handle objects
    if (typeof data === "object") {
        const sensitiveKeys = [
            "password",
            "token",
            "secret",
            "creditCard",
            "confirmPassword"
        ];
        const sanitized = {};
        for (const key of Object.keys(data)){
            if (sensitiveKeys.some((k)=>key.toLowerCase().includes(k.toLowerCase()))) {
                sanitized[key] = "[REDACTED]";
            } else {
                sanitized[key] = sanitizeData(data[key]);
            }
        }
        return sanitized;
    }
    return data;
}
}),
"[project]/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/prisma-adapter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    adapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    // TODO handle absolute expiry
    session: {
        strategy: "jwt",
        maxAge: 30 * 60
    },
    events: {
        async signIn ({ user }) {
            if (user.id) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAudit"])({
                    action: "LOGIN",
                    resource: "USER",
                    resourceId: user.id,
                    performedByUserId: user.id,
                    status: "SUCCESS"
                });
            }
        },
        async signOut (message) {
            if ("token" in message && message.token?.sub) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAudit"])({
                    action: "LOGOUT",
                    resource: "USER",
                    resourceId: message.token.sub,
                    performedByUserId: message.token.sub,
                    status: "SUCCESS"
                });
            }
        }
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/lib/constants/grievances.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Grievance System Constants
 * Type-safe constants for the grievance redressal mechanism
 */ __turbopack_context__.s([
    "AUTO_ASSIGNMENT_SETTINGS",
    ()=>AUTO_ASSIGNMENT_SETTINGS,
    "AUTO_CLOSE_SETTINGS",
    ()=>AUTO_CLOSE_SETTINGS,
    "GRIEVANCE_AUDIT_ACTIONS",
    ()=>GRIEVANCE_AUDIT_ACTIONS,
    "GRIEVANCE_CATEGORY_COLORS",
    ()=>GRIEVANCE_CATEGORY_COLORS,
    "GRIEVANCE_CATEGORY_DESCRIPTIONS",
    ()=>GRIEVANCE_CATEGORY_DESCRIPTIONS,
    "GRIEVANCE_CATEGORY_LABELS",
    ()=>GRIEVANCE_CATEGORY_LABELS,
    "GRIEVANCE_DEFAULTS",
    ()=>GRIEVANCE_DEFAULTS,
    "GRIEVANCE_SEVERITY_LABELS",
    ()=>GRIEVANCE_SEVERITY_LABELS,
    "GRIEVANCE_STATUS_COLORS",
    ()=>GRIEVANCE_STATUS_COLORS,
    "GRIEVANCE_STATUS_LABELS",
    ()=>GRIEVANCE_STATUS_LABELS,
    "GRIEVANCE_VALIDATION",
    ()=>GRIEVANCE_VALIDATION,
    "MESSAGE_AUTHOR_LABELS",
    ()=>MESSAGE_AUTHOR_LABELS,
    "MESSAGE_VALIDATION",
    ()=>MESSAGE_VALIDATION,
    "VALID_STATUS_TRANSITIONS",
    ()=>VALID_STATUS_TRANSITIONS
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const GRIEVANCE_AUDIT_ACTIONS = {
    CREATED_BY_PRINCIPAL: "CREATED_BY_PRINCIPAL",
    ASSIGNED_TO_AGENT: "ASSIGNED_TO_AGENT",
    AUTO_ASSIGNED_TO_AGENT: "AUTO_ASSIGNED_TO_AGENT",
    UNASSIGNED: "UNASSIGNED",
    STATUS_CHANGED: "STATUS_CHANGED",
    MESSAGE_SENT: "MESSAGE_SENT",
    RESOLVED: "RESOLVED",
    CLOSED: "CLOSED",
    REOPENED: "REOPENED",
    REOPENED_BY_PRINCIPAL: "REOPENED_BY_PRINCIPAL",
    REOPENED_BY_AGENT: "REOPENED_BY_AGENT"
};
const GRIEVANCE_CATEGORY_LABELS = {
    CONSENT_UPDATE: "Consent Update",
    WITHDRAW_CONSENT: "Withdraw Consent",
    ERASE_DATA: "Erase Data",
    PROCESSING_PURPOSE_ENQUIRY: "Processing Purpose Enquiry",
    REPORT_BREACH: "Report Breach",
    REVIEW_REQUEST: "Review Request",
    NOMINATE_MEMBER: "Nominate a Member"
};
const GRIEVANCE_STATUS_LABELS = {
    SUBMITTED: "Unassigned",
    ASSIGNED: "Assigned",
    IN_PROGRESS: "In Progress",
    RESOLVED: "Resolved",
    CLOSED: "Closed",
    REOPENED: "Reopened"
};
const GRIEVANCE_SEVERITY_LABELS = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
    CRITICAL: "Critical"
};
const GRIEVANCE_STATUS_COLORS = {
    SUBMITTED: {
        bg: "bg-blue-50 dark:bg-blue-950",
        text: "text-blue-700 dark:text-blue-300",
        border: "border-blue-200 dark:border-blue-800"
    },
    ASSIGNED: {
        bg: "bg-purple-50 dark:bg-purple-950",
        text: "text-purple-700 dark:text-purple-300",
        border: "border-purple-200 dark:border-purple-800"
    },
    IN_PROGRESS: {
        bg: "bg-yellow-50 dark:bg-yellow-950",
        text: "text-yellow-700 dark:text-yellow-300",
        border: "border-yellow-200 dark:border-yellow-800"
    },
    RESOLVED: {
        bg: "bg-green-50 dark:bg-green-950",
        text: "text-green-700 dark:text-green-300",
        border: "border-green-200 dark:border-green-800"
    },
    CLOSED: {
        bg: "bg-gray-50 dark:bg-gray-950",
        text: "text-gray-700 dark:text-gray-300",
        border: "border-gray-200 dark:border-gray-800"
    },
    REOPENED: {
        bg: "bg-orange-50 dark:bg-orange-950",
        text: "text-orange-700 dark:text-orange-300",
        border: "border-orange-200 dark:border-orange-800"
    }
};
const GRIEVANCE_CATEGORY_COLORS = {
    CONSENT_UPDATE: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
    WITHDRAW_CONSENT: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
    ERASE_DATA: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
    PROCESSING_PURPOSE_ENQUIRY: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
    REPORT_BREACH: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800",
    REVIEW_REQUEST: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800",
    NOMINATE_MEMBER: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
};
const GRIEVANCE_CATEGORY_DESCRIPTIONS = {
    CONSENT_UPDATE: "Request to update or modify existing consent preferences",
    WITHDRAW_CONSENT: "Request to withdraw consent for data processing activities",
    ERASE_DATA: "Request to erase personal data from our systems",
    PROCESSING_PURPOSE_ENQUIRY: "Enquiry about data processing purposes and activities",
    REPORT_BREACH: "Report a suspected data breach or privacy violation",
    REVIEW_REQUEST: "Request review of data processing decisions",
    NOMINATE_MEMBER: "Nominate a representative or member"
};
const GRIEVANCE_VALIDATION = {
    SUBJECT: {
        MIN_LENGTH: 10,
        MAX_LENGTH: 200
    },
    DESCRIPTION: {
        MIN_LENGTH: 20,
        MAX_LENGTH: 2000
    }
};
const GRIEVANCE_DEFAULTS = {
    STATUS: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].SUBMITTED,
    ITEMS_PER_PAGE: 10,
    EXPECTED_RESOLUTION_DAYS: 15
};
const MESSAGE_AUTHOR_LABELS = {
    PRINCIPAL: "Data Principal",
    FIDUCIARY_AGENT: "Support Agent",
    SYSTEM: "System"
};
const VALID_STATUS_TRANSITIONS = {
    SUBMITTED: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS
    ],
    ASSIGNED: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].SUBMITTED
    ],
    IN_PROGRESS: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED
    ],
    RESOLVED: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].REOPENED
    ],
    CLOSED: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].REOPENED
    ],
    REOPENED: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED
    ]
};
const MESSAGE_VALIDATION = {
    MIN_LENGTH: 1,
    MAX_LENGTH: 5000
};
const AUTO_CLOSE_SETTINGS = {
    DAYS_AFTER_RESOLVED: 7
};
const AUTO_ASSIGNMENT_SETTINGS = {
    ENABLED: true,
    STRATEGY: "ROUND_ROBIN",
    MAX_ACTIVE_PER_AGENT: 50
};
}),
"[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * RBAC Constants
 * Role-Based Access Control configuration - Single Source of Truth
 */ /**
 * System resources that can be protected
 */ /**
 * Service categories for permission grouping
 */ __turbopack_context__.s([
    "Actions",
    ()=>Actions,
    "RESOURCE_SERVICE_MAPPING",
    ()=>RESOURCE_SERVICE_MAPPING,
    "ROLE_PERMISSIONS",
    ()=>ROLE_PERMISSIONS,
    "Resources",
    ()=>Resources,
    "Roles",
    ()=>Roles,
    "ServiceCategories",
    ()=>ServiceCategories
]);
const ServiceCategories = {
    CGP: "CGP",
    DPRM: "DPRM",
    COOKIES_MANAGER: "COOKIES_MANAGER"
};
const RESOURCE_SERVICE_MAPPING = {
    GRIEVANCE: "DPRM",
    GRIEVANCE_ADMIN: "DPRM"
};
const Resources = {
    // System Resources
    USER: "USER",
    USER_ROLE: "USER_ROLE",
    ROLE: "ROLE",
    ADMIN: "ADMIN",
    API_KEY: "API_KEY",
    WEBHOOK: "WEBHOOK",
    GRIEVANCE: "GRIEVANCE",
    GRIEVANCE_ADMIN: "GRIEVANCE_ADMIN",
    AUDIT_LOG: "AUDIT_LOG",
    SLA: "SLA",
    // Data Fiduciary Resources
    BUSINESS_UNIT: "BUSINESS_UNIT",
    BUSINESS_PROCESS: "BUSINESS_PROCESS",
    CONSENT_PURPOSE: "CONSENT_PURPOSE",
    PROCESSING_PURPOSE: "PROCESSING_PURPOSE",
    PURPOSE_OF_PROCESSING: "PURPOSE_OF_PROCESSING",
    DATA_PROCESSOR: "DATA_PROCESSOR",
    USER_ATTRIBUTE: "USER_ATTRIBUTE",
    NOTICE: "NOTICE",
    CONSENT_RECORD: "CONSENT_RECORD",
    DATA_RETENTION_POLICY: "DATA_RETENTION_POLICY"
};
const Actions = {
    CREATE: "CREATE",
    READ: "READ",
    UPDATE: "UPDATE",
    DELETE: "DELETE"
};
const Roles = {
    PRIVY_CGP_ADMIN: "privy_cgp_admin",
    PRIVY_CGP_USER: "privy_cgp_user",
    PRIVY_API_KEY_MANAGER: "privy_api_key_manager",
    PRIVY_CGP_GRIEVANCE_AGENT: "privy_cgp_grievance_agent",
    PRIVY_DATA_PROTECTION_OFFICER: "privy_data_protection_officer",
    PRIVY_AUDITOR: "privy_auditor",
    // Cookie Manager Roles (managed from this service, used by Cookie Manager)
    PRIVY_CM_EDITOR: "privy_cm_editor",
    PRIVY_CM_ADMIN: "privy_cm_admin",
    PRIVY_CM_SCAN_OPERATOR: "privy_cm_scan_operator"
};
const ROLE_PERMISSIONS = {
    [Roles.PRIVY_CGP_ADMIN]: [
        "*:*"
    ],
    [Roles.PRIVY_CGP_USER]: [
        // System Access (Read-Only)
        `${Resources.USER}:${Actions.READ}`,
        `${Resources.ROLE}:${Actions.READ}`,
        // Business Units
        `${Resources.BUSINESS_UNIT}:${Actions.CREATE}`,
        `${Resources.BUSINESS_UNIT}:${Actions.READ}`,
        `${Resources.BUSINESS_UNIT}:${Actions.UPDATE}`,
        `${Resources.BUSINESS_UNIT}:${Actions.DELETE}`,
        // Business Processes
        `${Resources.BUSINESS_PROCESS}:${Actions.CREATE}`,
        `${Resources.BUSINESS_PROCESS}:${Actions.READ}`,
        `${Resources.BUSINESS_PROCESS}:${Actions.UPDATE}`,
        `${Resources.BUSINESS_PROCESS}:${Actions.DELETE}`,
        // Consent Purposes
        `${Resources.CONSENT_PURPOSE}:${Actions.CREATE}`,
        `${Resources.CONSENT_PURPOSE}:${Actions.READ}`,
        `${Resources.CONSENT_PURPOSE}:${Actions.UPDATE}`,
        `${Resources.CONSENT_PURPOSE}:${Actions.DELETE}`,
        // Processing Purposes
        `${Resources.PROCESSING_PURPOSE}:${Actions.CREATE}`,
        `${Resources.PROCESSING_PURPOSE}:${Actions.READ}`,
        `${Resources.PROCESSING_PURPOSE}:${Actions.UPDATE}`,
        `${Resources.PROCESSING_PURPOSE}:${Actions.DELETE}`,
        // Purposes of Processing (Catalog)
        `${Resources.PURPOSE_OF_PROCESSING}:${Actions.CREATE}`,
        `${Resources.PURPOSE_OF_PROCESSING}:${Actions.READ}`,
        `${Resources.PURPOSE_OF_PROCESSING}:${Actions.UPDATE}`,
        `${Resources.PURPOSE_OF_PROCESSING}:${Actions.DELETE}`,
        // Data Processors
        `${Resources.DATA_PROCESSOR}:${Actions.CREATE}`,
        `${Resources.DATA_PROCESSOR}:${Actions.READ}`,
        `${Resources.DATA_PROCESSOR}:${Actions.UPDATE}`,
        `${Resources.DATA_PROCESSOR}:${Actions.DELETE}`,
        // User Attributes
        `${Resources.USER_ATTRIBUTE}:${Actions.CREATE}`,
        `${Resources.USER_ATTRIBUTE}:${Actions.READ}`,
        `${Resources.USER_ATTRIBUTE}:${Actions.UPDATE}`,
        `${Resources.USER_ATTRIBUTE}:${Actions.DELETE}`,
        `${Resources.USER_ATTRIBUTE}:${Actions.DELETE}`,
        // Notices
        `${Resources.NOTICE}:${Actions.CREATE}`,
        `${Resources.NOTICE}:${Actions.READ}`,
        `${Resources.NOTICE}:${Actions.UPDATE}`,
        // Notices are typically not deleted for audit reasons, but we allow it for now if needed
        `${Resources.NOTICE}:${Actions.DELETE}`,
        // Data Retention Policies
        `${Resources.DATA_RETENTION_POLICY}:${Actions.READ}`
    ],
    [Roles.PRIVY_API_KEY_MANAGER]: [
        `${Resources.API_KEY}:${Actions.CREATE}`,
        `${Resources.API_KEY}:${Actions.READ}`,
        `${Resources.API_KEY}:${Actions.UPDATE}`,
        `${Resources.API_KEY}:${Actions.DELETE}`,
        `${Resources.WEBHOOK}:${Actions.CREATE}`,
        `${Resources.WEBHOOK}:${Actions.READ}`,
        `${Resources.WEBHOOK}:${Actions.UPDATE}`,
        `${Resources.WEBHOOK}:${Actions.DELETE}`
    ],
    [Roles.PRIVY_CGP_GRIEVANCE_AGENT]: [
        `${Resources.GRIEVANCE}:${Actions.READ}`,
        `${Resources.GRIEVANCE}:${Actions.UPDATE}`,
        `${Resources.NOTICE}:${Actions.READ}`,
        `${Resources.DATA_RETENTION_POLICY}:${Actions.READ}`
    ],
    [Roles.PRIVY_DATA_PROTECTION_OFFICER]: [
        "*:READ",
        `${Resources.AUDIT_LOG}:${Actions.READ}`,
        `${Resources.CONSENT_RECORD}:${Actions.READ}`,
        `${Resources.GRIEVANCE}:${Actions.READ}`,
        `${Resources.GRIEVANCE}:${Actions.UPDATE}`,
        `${Resources.GRIEVANCE_ADMIN}:${Actions.READ}`,
        // Data Retention Policies
        `${Resources.DATA_RETENTION_POLICY}:${Actions.CREATE}`,
        `${Resources.DATA_RETENTION_POLICY}:${Actions.UPDATE}`,
        `${Resources.DATA_RETENTION_POLICY}:${Actions.DELETE}`
    ],
    [Roles.PRIVY_AUDITOR]: [
        "*:READ",
        `${Resources.AUDIT_LOG}:${Actions.READ}`,
        `${Resources.CONSENT_RECORD}:${Actions.READ}`
    ],
    // Cookie Manager Roles (permissions managed by Cookie Manager service)
    [Roles.PRIVY_CM_EDITOR]: [],
    [Roles.PRIVY_CM_ADMIN]: [],
    [Roles.PRIVY_CM_SCAN_OPERATOR]: []
};
}),
"[project]/lib/rbac-config.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ // RBAC Configuration - Single Source of Truth
// Re-export constants from centralized location
__turbopack_context__.s([
    "getRolePermissions",
    ()=>getRolePermissions,
    "hasConfigPermission",
    ()=>hasConfigPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
;
;
function getRolePermissions(roleName) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROLE_PERMISSIONS"][roleName] || [];
}
function hasConfigPermission(roleNames, resource, action) {
    for (const roleName of roleNames){
        const permissions = getRolePermissions(roleName);
        for (const permission of permissions){
            // Admin wildcard check
            if (permission === "*:*") {
                return true;
            }
            const [permResource, permAction] = permission.split(":");
            // Resource wildcard check (e.g., "USER:*")
            if (permResource === resource && permAction === "*") {
                return true;
            }
            // Action wildcard check (e.g., "*:READ")
            if (permResource === "*" && permAction === action) {
                return true;
            }
            // Exact match check
            if (permResource === resource && permAction === action) {
                return true;
            }
        }
    }
    return false;
}
}),
"[project]/lib/rbac-config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Actions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"],
    "ROLE_PERMISSIONS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROLE_PERMISSIONS"],
    "Resources",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"],
    "Roles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Roles"],
    "getRolePermissions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRolePermissions"],
    "hasConfigPermission",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac-config.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
}),
"[project]/lib/rbac.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ // Re-export everything from rbac-config for backward compatibility
__turbopack_context__.s([
    "canAccessAdmin",
    ()=>canAccessAdmin,
    "checkPermission",
    ()=>checkPermission,
    "getUserRoleNames",
    ()=>getUserRoleNames,
    "hasPermission",
    ()=>hasPermission,
    "isAdmin",
    ()=>isAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac-config.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
;
;
function hasPermission(userRoles, resource, action) {
    if (!userRoles || userRoles.length === 0) {
        return false;
    }
    const roleNames = userRoles.map((ur)=>ur.role.name);
    // Import here to avoid circular dependency
    const { hasConfigPermission } = __turbopack_context__.r("[project]/lib/rbac-config.ts [app-rsc] (ecmascript)");
    return hasConfigPermission(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"][resource], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"][action]);
}
function canAccessAdmin(userRoles) {
    return hasPermission(userRoles, "ADMIN", "READ");
}
function getUserRoleNames(userRoles) {
    return userRoles.map((ur)=>ur.role.name);
}
function isAdmin(userRoles) {
    return userRoles.some((ur)=>ur.role.name === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Roles"].PRIVY_CGP_ADMIN);
}
async function checkPermission(resource, action) {
    try {
        const { auth } = await __turbopack_context__.A("[project]/auth.ts [app-rsc] (ecmascript, async loader)");
        const session = await auth();
        if (!session?.user?.roles) return false;
        return hasPermission(session.user.roles, resource, action);
    } catch  {
        return false;
    }
}
}),
"[project]/lib/safe-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "_setMockSession",
    ()=>_setMockSession,
    "createSafeAction",
    ()=>createSafeAction,
    "verifyPermission",
    ()=>verifyPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-rsc] (ecmascript)");
;
;
;
;
// --- TEST UTILITIES START ---
let mockSession = undefined; // undefined means "not set", null means "logged out"
const _setMockSession = (session)=>{
    if (("TURBOPACK compile-time value", "development") === "test" || process.env.RBAC_TEST_MODE === "true") {
        mockSession = session;
    } else {
        console.warn("Attempted to set mock session in non-test environment");
    }
};
async function verifyPermission(resource, action) {
    const session = process.env.RBAC_TEST_MODE === "true" && mockSession !== undefined ? mockSession : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || !session.user.id) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Access attempt without session", {
            resource,
            action
        });
        throw new Error("Unauthorized");
    }
    const userRoles = session.user.roles || [];
    const isAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasPermission"])(userRoles, resource, action);
    if (!isAllowed) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Permission denied", {
            userId: session.user.id,
            resource,
            action,
            roles: userRoles.map((r)=>r.role.name)
        });
        throw new Error("Permission Denied");
    }
    return session.user;
}
function createSafeAction(permission, schema, handler) {
    return async (data)=>{
        let session;
        try {
            // 1. Authentication Check
            session = process.env.RBAC_TEST_MODE === "true" && mockSession !== undefined ? mockSession : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
            if (!session?.user || !session.user.id) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Action attempt without session", {
                    resource: permission.resource,
                    action: permission.action
                });
                return {
                    success: false,
                    error: "Unauthorized: You must be logged in to perform this action."
                };
            }
            // 2. Permission Check
            const userRoles = session.user.roles || [];
            const isAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasPermission"])(userRoles, permission.resource, permission.action);
            if (!isAllowed) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Action permission denied", {
                    userId: session.user.id,
                    resource: permission.resource,
                    action: permission.action,
                    roles: userRoles.map((r)=>r.role.name)
                });
                return {
                    success: false,
                    error: `Permission Denied: You do not have permission to ${permission.action} ${permission.resource}.`
                };
            }
            // 3. Input Validation
            const validationResult = schema.safeParse(data);
            if (!validationResult.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Action validation failed", {
                    userId: session.user.id,
                    resource: permission.resource,
                    action: permission.action,
                    errors: validationResult.error.flatten().fieldErrors
                });
                return {
                    success: false,
                    error: "Invalid Input",
                    validationErrors: validationResult.error.flatten().fieldErrors
                };
            }
            // 4. Execution
            const result = await handler(validationResult.data, {
                id: session.user.id,
                email: session.user.email || "",
                name: session.user.name,
                roles: userRoles
            });
            // 5. Auditing
            if ([
                "CREATE",
                "UPDATE",
                "DELETE"
            ].includes(permission.action)) {
                const resourceId = result?.id || data?.userId || data?.id;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAudit"])({
                    action: permission.action,
                    resource: permission.resource,
                    resourceId,
                    performedByUserId: session.user.id,
                    payload: validationResult.data,
                    result: result,
                    status: "SUCCESS"
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Action executed successfully", {
                userId: session.user.id,
                resource: permission.resource,
                action: permission.action
            });
            return {
                success: true,
                data: result
            };
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error(`Error in safe action [${permission.resource}:${permission.action}]`, error);
            // Auditing (Failure)
            if ([
                "CREATE",
                "UPDATE",
                "DELETE"
            ].includes(permission.action)) {
                const resourceId = data?.userId || data?.id;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAudit"])({
                    action: permission.action,
                    resource: permission.resource,
                    resourceId,
                    performedByUserId: session?.user?.id,
                    payload: data,
                    status: "FAILURE",
                    failureReason: error instanceof Error ? error.message : "Unknown error"
                });
            }
            return {
                success: false,
                error: error instanceof Error ? error.message : "An unexpected error occurred"
            };
        }
    };
}
}),
"[project]/lib/schemas/file-upload.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * File Upload Validation Schemas and Configuration
 */ __turbopack_context__.s([
    "FILE_UPLOAD_CONFIG",
    ()=>FILE_UPLOAD_CONFIG,
    "MIME_TYPE_EXTENSIONS",
    ()=>MIME_TYPE_EXTENSIONS,
    "fileUploadSchema",
    ()=>fileUploadSchema,
    "formatFileSize",
    ()=>formatFileSize,
    "getFileIcon",
    ()=>getFileIcon,
    "sanitizeFileName",
    ()=>sanitizeFileName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const FILE_UPLOAD_CONFIG = {
    // Max file size in bytes (configurable via env)
    MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE_MB || "5", 10) * 1024 * 1024,
    // Max number of files per message
    MAX_FILES_PER_MESSAGE: 5,
    // Allowed MIME types
    ALLOWED_MIME_TYPES: [
        // Images
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/webp",
        // Documents
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        // Text
        "text/plain",
        "text/csv"
    ],
    // File name restrictions
    MAX_FILENAME_LENGTH: 255
};
const MIME_TYPE_EXTENSIONS = {
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "application/pdf": ".pdf",
    "application/msword": ".doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
    "application/vnd.ms-excel": ".xls",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
    "text/plain": ".txt",
    "text/csv": ".csv"
};
const fileUploadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    fileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "File name is required").max(FILE_UPLOAD_CONFIG.MAX_FILENAME_LENGTH, "File name too long").refine((name)=>!/[<>:"|?*\\\/]/.test(name), "File name contains invalid characters"),
    mimeType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((type)=>FILE_UPLOAD_CONFIG.ALLOWED_MIME_TYPES.includes(type), "File type not allowed. Allowed types: images, PDFs, Word, Excel, text files"),
    fileSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive("File size must be positive").max(FILE_UPLOAD_CONFIG.MAX_FILE_SIZE, `File too large. Maximum size is ${FILE_UPLOAD_CONFIG.MAX_FILE_SIZE / 1024 / 1024}MB`)
});
function sanitizeFileName(fileName) {
    // Remove path separators and special characters
    let sanitized = fileName.replace(/[<>:"|?*\\\/]/g, "_");
    // Remove leading/trailing spaces and dots
    sanitized = sanitized.trim().replace(/^\.+/, "");
    // Limit length
    if (sanitized.length > FILE_UPLOAD_CONFIG.MAX_FILENAME_LENGTH) {
        const ext = sanitized.substring(sanitized.lastIndexOf("."));
        const name = sanitized.substring(0, FILE_UPLOAD_CONFIG.MAX_FILENAME_LENGTH - ext.length);
        sanitized = name + ext;
    }
    return sanitized || "unnamed";
}
function formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
}
function getFileIcon(mimeType) {
    if (mimeType.startsWith("image/")) return "📷";
    if (mimeType === "application/pdf") return "📄";
    if (mimeType === "application/msword" || mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        return "📝";
    }
    if (mimeType === "application/vnd.ms-excel" || mimeType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        return "📊";
    }
    if (mimeType.startsWith("text/")) return "📃";
    return "📎";
}
}),
"[project]/lib/schemas/grievances.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Zod Validation Schemas for Grievance System
 */ __turbopack_context__.s([
    "NEGATIVE_FEEDBACK_REASONS",
    ()=>NEGATIVE_FEEDBACK_REASONS,
    "NEUTRAL_FEEDBACK_REASONS",
    ()=>NEUTRAL_FEEDBACK_REASONS,
    "POSITIVE_FEEDBACK_REASONS",
    ()=>POSITIVE_FEEDBACK_REASONS,
    "addGrievanceMessageSchema",
    ()=>addGrievanceMessageSchema,
    "addPrincipalMessageSchema",
    ()=>addPrincipalMessageSchema,
    "assignGrievanceSchema",
    ()=>assignGrievanceSchema,
    "createGrievanceSchema",
    ()=>createGrievanceSchema,
    "getGrievanceSchema",
    ()=>getGrievanceSchema,
    "grievanceFilterSchema",
    ()=>grievanceFilterSchema,
    "reopenGrievanceByPrincipalSchema",
    ()=>reopenGrievanceByPrincipalSchema,
    "reopenGrievanceSchema",
    ()=>reopenGrievanceSchema,
    "submitGrievanceFeedbackSchema",
    ()=>submitGrievanceFeedbackSchema,
    "updateGrievanceStatusSchema",
    ()=>updateGrievanceStatusSchema,
    "updateStatusSchema",
    ()=>updateStatusSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/grievances.ts [app-rsc] (ecmascript)");
;
;
;
const createGrievanceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    dataPrincipalId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Data Principal ID is required"),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email().optional(),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }).optional().default({}),
    businessProcessId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Business Process must be selected"),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"], {
        message: "Please select a valid category"
    }),
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GRIEVANCE_VALIDATION"].SUBJECT.MIN_LENGTH, `Subject must be at least ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GRIEVANCE_VALIDATION"].SUBJECT.MIN_LENGTH} characters`).max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GRIEVANCE_VALIDATION"].SUBJECT.MAX_LENGTH, `Subject must not exceed ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GRIEVANCE_VALIDATION"].SUBJECT.MAX_LENGTH} characters`),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GRIEVANCE_VALIDATION"].DESCRIPTION.MIN_LENGTH, `Description must be at least ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GRIEVANCE_VALIDATION"].DESCRIPTION.MIN_LENGTH} characters`).max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GRIEVANCE_VALIDATION"].DESCRIPTION.MAX_LENGTH, `Description must not exceed ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GRIEVANCE_VALIDATION"].DESCRIPTION.MAX_LENGTH} characters`)
});
const assignGrievanceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    grievanceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Invalid grievance ID"),
    assignedToId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid("Invalid user ID").nullable().optional().transform((val)=>val || null)
});
const updateGrievanceStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    grievanceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Invalid grievance ID"),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"], {
        message: "Please select a valid status"
    }),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const grievanceFilterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"]).optional(),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"]).optional(),
    severity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"]).optional(),
    slaStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "on-track",
        "at-risk",
        "breached",
        "resolved"
    ]).optional(),
    assignedToId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("unassigned")
    ]).optional(),
    businessProcessId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional(),
    dataPrincipalId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional().default(1),
    pageSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().max(100).optional().default(10),
    sortBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "createdAt",
        "updatedAt",
        "status",
        "category",
        "severity"
    ]).optional().default("createdAt"),
    sortOrder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "asc",
        "desc"
    ]).optional().default("desc")
});
const getGrievanceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    grievanceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Invalid grievance ID"),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Invalid grievance public ID")
    ])
});
const addGrievanceMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    grievanceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Invalid grievance ID"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MESSAGE_VALIDATION"].MIN_LENGTH, "Message cannot be empty").max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MESSAGE_VALIDATION"].MAX_LENGTH, `Message must not exceed ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MESSAGE_VALIDATION"].MAX_LENGTH} characters`).trim()
});
const addPrincipalMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    grievanceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Invalid grievance ID"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MESSAGE_VALIDATION"].MIN_LENGTH, "Message cannot be empty").max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MESSAGE_VALIDATION"].MAX_LENGTH, `Message must not exceed ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MESSAGE_VALIDATION"].MAX_LENGTH} characters`).trim()
});
const updateStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    grievanceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Invalid grievance ID"),
    currentStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"]),
    newStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"], {
        message: "Please select a valid status"
    }),
    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(500).optional()
}).refine((data)=>{
    const validTransitions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALID_STATUS_TRANSITIONS"][data.currentStatus];
    return validTransitions.includes(data.newStatus);
}, {
    message: "Invalid status transition",
    path: [
        "newStatus"
    ]
});
const reopenGrievanceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    grievanceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Invalid grievance ID"),
    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Reason must be at least 10 characters").max(500, "Reason must not exceed 500 characters").trim()
});
const reopenGrievanceByPrincipalSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    grievanceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Invalid grievance ID"),
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Token is required"),
    reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Reason must be at least 10 characters").max(500, "Reason must not exceed 500 characters").trim()
});
const submitGrievanceFeedbackSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    grievanceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive("Invalid grievance ID"),
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Token is required"),
    rating: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1, "Rating must be at least 1").max(5, "Rating must not exceed 5"),
    reasons: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(5, "You can select up to 5 reasons").default([]),
    comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(1000, "Comment must not exceed 1000 characters").optional()
});
const NEGATIVE_FEEDBACK_REASONS = [
    "Poor Communication",
    "Unclear Resolution",
    "Confusing Updates",
    "Agent Not Helpful",
    "Other"
];
const NEUTRAL_FEEDBACK_REASONS = [
    "Average Experience",
    "Met Expectations",
    "Room for Improvement",
    "Satisfactory Service",
    "Other"
];
const POSITIVE_FEEDBACK_REASONS = [
    "Quick Resolution Time",
    "Responsive Agent",
    "Timely Updates",
    "Seamless Interaction",
    "Other"
];
}),
"[project]/lib/services/grievance-auto-assignment.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Grievance Auto-Assignment Service
 * Handles automatic assignment of grievances to available agents
 */ __turbopack_context__.s([
    "autoAssignGrievance",
    ()=>autoAssignGrievance,
    "getAssignmentStats",
    ()=>getAssignmentStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/grievances.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
;
/**
 * Get available agents for grievance assignment
 * Returns agents with the grievance_agent or admin role
 */ async function getAvailableAgentsForAssignment() {
    const grievanceRole = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].role.findFirst({
        where: {
            name: "privy_cgp_grievance_agent"
        }
    });
    const adminRole = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].role.findFirst({
        where: {
            name: "privy_cgp_admin"
        }
    });
    const roleIds = [
        grievanceRole?.id,
        adminRole?.id
    ].filter(Boolean);
    if (roleIds.length === 0) {
        return [];
    }
    const agents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findMany({
        where: {
            userRoles: {
                some: {
                    roleId: {
                        in: roleIds
                    }
                }
            }
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    });
    return agents;
}
/**
 * Get agent workload (count of active grievances)
 */ async function getAgentWorkload(agentId) {
    const activeCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
        where: {
            assignedToId: agentId,
            status: {
                in: [
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED,
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS,
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED
                ]
            }
        }
    });
    return activeCount;
}
/**
 * Find the next agent using round-robin strategy
 * Uses the last assignment to determine the next agent
 */ async function findAgentByRoundRobin(agents) {
    if (agents.length === 0) return null;
    // Get the most recently assigned grievance
    const lastAssignment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findFirst({
        where: {
            assignedToId: {
                not: null
            }
        },
        orderBy: {
            createdAt: "desc"
        },
        select: {
            assignedToId: true
        }
    });
    // If no previous assignments, assign to first agent
    if (!lastAssignment || !lastAssignment.assignedToId) {
        return agents[0].id;
    }
    // Find the current agent's index
    const currentIndex = agents.findIndex((agent)=>agent.id === lastAssignment.assignedToId);
    // Get next agent in round-robin fashion
    const nextIndex = (currentIndex + 1) % agents.length;
    return agents[nextIndex].id;
}
/**
 * Find the agent with the least workload
 */ async function findAgentByLeastLoaded(agents) {
    if (agents.length === 0) return null;
    // Get workload for all agents
    const agentWorkloads = await Promise.all(agents.map(async (agent)=>({
            agentId: agent.id,
            workload: await getAgentWorkload(agent.id)
        })));
    // Sort by workload (ascending) and return agent with least workload
    agentWorkloads.sort((a, b)=>a.workload - b.workload);
    // Check if the least loaded agent is under the max threshold
    if (agentWorkloads[0].workload >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AUTO_ASSIGNMENT_SETTINGS"].MAX_ACTIVE_PER_AGENT) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("All agents are at or above max capacity", {
            maxCapacity: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AUTO_ASSIGNMENT_SETTINGS"].MAX_ACTIVE_PER_AGENT
        });
    // Still assign to least loaded agent even if over capacity
    }
    return agentWorkloads[0].agentId;
}
async function autoAssignGrievance(strategy = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AUTO_ASSIGNMENT_SETTINGS"].STRATEGY) {
    try {
        // Check if auto-assignment is enabled
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AUTO_ASSIGNMENT_SETTINGS"].ENABLED) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-assignment is disabled");
            return null;
        }
        // Get available agents
        const agents = await getAvailableAgentsForAssignment();
        if (agents.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("No available agents for auto-assignment");
            return null;
        }
        // Apply assignment strategy
        let assignedAgentId = null;
        switch(strategy){
            case "ROUND_ROBIN":
                assignedAgentId = await findAgentByRoundRobin(agents);
                break;
            case "LEAST_LOADED":
                assignedAgentId = await findAgentByLeastLoaded(agents);
                break;
            default:
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Unknown assignment strategy", {
                    strategy
                });
                assignedAgentId = await findAgentByRoundRobin(agents);
        }
        return assignedAgentId;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in autoAssignGrievance", {
            error: error.message,
            stack: error.stack
        });
        return null;
    }
}
async function getAssignmentStats() {
    try {
        const agents = await getAvailableAgentsForAssignment();
        const stats = await Promise.all(agents.map(async (agent)=>{
            const workload = await getAgentWorkload(agent.id);
            return {
                agentId: agent.id,
                agentName: agent.name || agent.email || "Unknown",
                activeGrievances: workload,
                capacityPercentage: Math.round(workload / __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AUTO_ASSIGNMENT_SETTINGS"].MAX_ACTIVE_PER_AGENT * 100)
            };
        }));
        return {
            success: true,
            data: stats
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getAssignmentStats", {
            error: error.message,
            stack: error.stack
        });
        return {
            success: false,
            error: "Failed to fetch assignment statistics"
        };
    }
}
}),
"[project]/lib/services/grievance-events.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Grievance Event Service
 * 
 * Handles creation of system events that need to be recorded in both:
 * 1. GrievanceMessage (for timeline display in chat)
 * 2. GrievanceAuditLog (for immutable audit trail)
 * 
 * This ensures reliable dual-insertion using Prisma transactions.
 */ __turbopack_context__.s([
    "createAssignedEvent",
    ()=>createAssignedEvent,
    "createAutoAssignedEvent",
    ()=>createAutoAssignedEvent,
    "createClosedEvent",
    ()=>createClosedEvent,
    "createFeedbackSubmittedEvent",
    ()=>createFeedbackSubmittedEvent,
    "createGrievanceCreatedEvent",
    ()=>createGrievanceCreatedEvent,
    "createGrievanceEvent",
    ()=>createGrievanceEvent,
    "createReopenedByPrincipalEvent",
    ()=>createReopenedByPrincipalEvent,
    "createReopenedEvent",
    ()=>createReopenedEvent,
    "createResolvedEvent",
    ()=>createResolvedEvent,
    "createStatusChangedEvent",
    ()=>createStatusChangedEvent,
    "createUnassignedEvent",
    ()=>createUnassignedEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
;
async function createGrievanceEvent(params) {
    const { grievanceId, eventType, eventDetails, auditAction, auditDetails, performedByUserId } = params;
    try {
        // Use a transaction to ensure both inserts succeed together
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            // 1. Create system message in GrievanceMessage
            const systemMessage = await tx.grievanceMessage.create({
                data: {
                    grievanceId,
                    messageType: "SYSTEM_EVENT",
                    eventType,
                    eventDetails: eventDetails || {},
                    authorType: "SYSTEM",
                    // SYSTEM messages should not have authorId set to avoid FK constraint issues
                    // Performer information is stored in eventDetails instead
                    authorId: null,
                    message: null
                }
            });
            // 2. Create audit log entry in GrievanceAuditLog
            const auditLog = await tx.grievanceAuditLog.create({
                data: {
                    grievanceId,
                    action: auditAction,
                    details: auditDetails || eventDetails || {},
                    // Only include performedByUserId if it's not null
                    ...performedByUserId && {
                        performedByUserId
                    }
                }
            });
            return {
                messageId: systemMessage.id,
                auditLogId: auditLog.id
            };
        });
        return {
            success: true,
            messageId: result.messageId,
            auditLogId: result.auditLogId
        };
    } catch (error) {
        console.error("[createGrievanceEvent] Transaction failed:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create grievance event"
        };
    }
}
async function createStatusChangedEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "STATUS_CHANGED",
        eventDetails: {
            // Legacy format for TimelineEvent component
            from: params.fromStatus,
            to: params.toStatus,
            reason: params.reason
        },
        auditAction: `STATUS_CHANGED_TO_${params.toStatus}`,
        auditDetails: {
            from: params.fromStatus,
            to: params.toStatus,
            reason: params.reason
        },
        performedByUserId: params.performedByUserId
    });
}
async function createAssignedEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "ASSIGNED",
        eventDetails: {
            // Legacy format for TimelineEvent component
            assignedToName: params.assignedToName,
            assignedBy: params.performedByName
        },
        auditAction: "ASSIGNED_TO_AGENT",
        auditDetails: {
            assignedTo: params.assignedToUserId,
            assignedToName: params.assignedToName
        },
        performedByUserId: params.performedByUserId
    });
}
async function createUnassignedEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "UNASSIGNED",
        eventDetails: {
            // Legacy format for TimelineEvent component
            previousAssignedTo: params.previousAssigneeId
        },
        auditAction: "UNASSIGNED_FROM_AGENT",
        auditDetails: {
            previousAssignee: params.previousAssigneeId,
            previousAssigneeName: params.previousAssigneeName
        },
        performedByUserId: params.performedByUserId
    });
}
async function createResolvedEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "RESOLVED",
        eventDetails: {
            performedBy: params.performedByUserId,
            performedByName: params.performedByName,
            reason: params.reason
        },
        auditAction: "MARKED_AS_RESOLVED",
        auditDetails: {
            reason: params.reason
        },
        performedByUserId: params.performedByUserId
    });
}
async function createClosedEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "CLOSED",
        eventDetails: {
            performedBy: params.performedByUserId,
            performedByName: params.performedByName,
            reason: params.reason
        },
        auditAction: "MARKED_AS_CLOSED",
        auditDetails: {
            reason: params.reason
        },
        performedByUserId: params.performedByUserId
    });
}
async function createGrievanceCreatedEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "CREATED",
        eventDetails: {
            dataPrincipalId: params.dataPrincipalId,
            category: params.category,
            subject: params.subject
        },
        auditAction: "CREATED_BY_PRINCIPAL",
        auditDetails: {
            category: params.category,
            subject: params.subject
        },
        performedByUserId: null
    });
}
async function createFeedbackSubmittedEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "FEEDBACK_SUBMITTED",
        eventDetails: {
            rating: params.rating,
            comment: params.comment
        },
        auditAction: "FEEDBACK_SUBMITTED",
        auditDetails: {
            rating: params.rating,
            hasComment: !!params.comment
        },
        performedByUserId: null
    });
}
async function createAutoAssignedEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "ASSIGNED",
        eventDetails: {
            assignedToName: params.assignedToName,
            assignedBy: "System (Auto-assigned)",
            isAutoAssigned: true
        },
        auditAction: "AUTO_ASSIGNED_TO_AGENT",
        auditDetails: {
            assignedTo: params.assignedToUserId,
            assignedToName: params.assignedToName,
            isAutoAssigned: true
        },
        performedByUserId: null
    });
}
async function createReopenedEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "REOPENED",
        eventDetails: {
            reason: params.reason,
            reopenedBy: params.performedByName,
            reopenedByType: "AGENT",
            previousStatus: params.previousStatus
        },
        auditAction: "REOPENED_BY_AGENT",
        auditDetails: {
            reason: params.reason,
            previousStatus: params.previousStatus
        },
        performedByUserId: params.performedByUserId
    });
}
async function createReopenedByPrincipalEvent(params) {
    return createGrievanceEvent({
        grievanceId: params.grievanceId,
        eventType: "REOPENED",
        eventDetails: {
            reason: params.reason,
            reopenedBy: params.dataPrincipalName || "Data Principal",
            reopenedByType: "PRINCIPAL",
            previousStatus: params.previousStatus
        },
        auditAction: "REOPENED_BY_PRINCIPAL",
        auditDetails: {
            reason: params.reason,
            dataPrincipalId: params.dataPrincipalId,
            previousStatus: params.previousStatus
        },
        performedByUserId: null
    });
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/lib/services/storage/adapters/local-storage.adapter.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Local Storage Adapter
 *
 * Stores files in the public/cms/uploads directory for local development
 * and simple deployments. Files are organized by date (YYYY/MM/DD).
 */ __turbopack_context__.s([
    "LocalStorageAdapter",
    ()=>LocalStorageAdapter
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
class LocalStorageAdapter {
    uploadDir;
    baseUrl;
    constructor(config){
        this.uploadDir = config?.uploadDir || __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "cms", "uploads");
        this.baseUrl = config?.baseUrl || "/cms/uploads";
    }
    /**
   * Generate a unique file key with date-based organization
   * Format: YYYY/MM/DD/timestamp-uuid-filename
   */ generateFileKey(fileName, folder) {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const timestamp = Date.now();
        const uuid = crypto.randomUUID().split("-")[0]; // Short UUID
        // Sanitize filename: remove special chars, keep extension
        const sanitized = fileName.replace(/[^a-zA-Z0-9.-]/g, "_").slice(0, 100); // Limit length
        const datePath = `${year}/${month}/${day}`;
        const uniqueFileName = `${timestamp}-${uuid}-${sanitized}`;
        if (folder) {
            return `${folder}/${datePath}/${uniqueFileName}`;
        }
        return `${datePath}/${uniqueFileName}`;
    }
    /**
   * Ensure directory exists, create if not
   */ async ensureDirectory(dirPath) {
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(dirPath, {
                recursive: true
            });
        } catch (error) {
            console.error("Error creating directory:", error);
            throw new Error("Failed to create upload directory");
        }
    }
    async upload(params) {
        try {
            const fileKey = this.generateFileKey(params.fileName, params.folder);
            const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(this.uploadDir, fileKey);
            const dirPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(fullPath);
            // Ensure directory exists
            await this.ensureDirectory(dirPath);
            // Write file
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(fullPath, params.file);
            // Generate URL
            const url = `${this.baseUrl}/${fileKey}`;
            return {
                fileKey,
                url,
                size: params.file.length,
                mimeType: params.mimeType
            };
        } catch (error) {
            console.error("Local storage upload error:", error);
            throw new Error("Failed to upload file to local storage");
        }
    }
    async getUrl(fileKey, expiresIn) {
        // Local storage URLs don't expire, just return the public path
        return `${this.baseUrl}/${fileKey}`;
    }
    async delete(fileKey) {
        try {
            const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(this.uploadDir, fileKey);
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(fullPath);
        } catch (error) {
            console.error("Local storage delete error:", error);
            // Don't throw if file doesn't exist
            if (error.code !== "ENOENT") {
                throw new Error("Failed to delete file from local storage");
            }
        }
    }
    async exists(fileKey) {
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(this.uploadDir, fileKey);
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(fullPath);
    }
    async getMetadata(fileKey) {
        try {
            const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(this.uploadDir, fileKey);
            const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(fullPath);
            // Extract original filename from key (last part after last -)
            const fileName = fileKey.split("/").pop()?.split("-").slice(2).join("-") || fileKey;
            return {
                fileKey,
                fileName,
                size: stats.size,
                mimeType: "application/octet-stream",
                uploadedAt: stats.birthtime
            };
        } catch (error) {
            console.error("Local storage metadata error:", error);
            throw new Error("Failed to get file metadata");
        }
    }
}
}),
"[project]/lib/services/storage/adapters/gcs-storage.adapter.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Google Cloud Storage (GCS) Adapter
 *
 * Stores files in Google Cloud Storage bucket with signed URL support.
 * Requires @google-cloud/storage package.
 */ __turbopack_context__.s([
    "GCSStorageAdapter",
    ()=>GCSStorageAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
;
class GCSStorageAdapter {
    storage;
    bucket;
    config;
    constructor(config){
        this.config = {
            urlExpiry: 3600,
            ...config
        };
        // Lazy load GCS - will throw if not installed when actually used
        this.initializeStorage();
    }
    async initializeStorage() {
        try {
            // Dynamic import to avoid build-time errors
            const { Storage } = await __turbopack_context__.A("[project]/node_modules/@google-cloud/storage/build/esm/src/index.js [app-rsc] (ecmascript, async loader)");
            const storageOptions = {
                projectId: this.config.projectId
            };
            if (this.config.keyFilePath) {
                storageOptions.keyFilename = this.config.keyFilePath;
            }
            this.storage = new Storage(storageOptions);
            this.bucket = this.storage.bucket(this.config.bucketName);
        } catch (error) {
            throw new Error("@google-cloud/storage is not installed. Run: pnpm add @google-cloud/storage");
        }
    }
    async ensureInitialized() {
        if (!this.storage) {
            await this.initializeStorage();
        }
    }
    /**
   * Generate a unique file key with folder organization
   * Format: folder/timestamp-uuid-filename (if folder provided)
   * Format: timestamp-uuid-filename (if no folder)
   */ generateFileKey(fileName, folder) {
        const timestamp = Date.now();
        const uuid = crypto.randomUUID().split("-")[0]; // Short UUID
        // Sanitize filename
        const sanitized = fileName.replace(/[^a-zA-Z0-9.-]/g, "_").slice(0, 100);
        const uniqueFileName = `${timestamp}-${uuid}-${sanitized}`;
        if (folder) {
            return `${folder}/${uniqueFileName}`;
        }
        return uniqueFileName;
    }
    async upload(params) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("GCS Adapter: Upload started", {
                fileName: params.fileName,
                folder: params.folder,
                bufferLength: params.file?.length
            });
            if (!params.file || params.file.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: No file buffer provided or buffer is empty");
                throw new Error("No file buffer provided");
            }
            await this.ensureInitialized();
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Storage initialized successfully");
            let fileKey;
            if (params.doesNotRequireUniqueName) {
                fileKey = params.fileName;
            } else {
                fileKey = this.generateFileKey(params.fileName, params.folder);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Generated fileKey", {
                fileKey
            });
            const file = this.bucket.file(fileKey);
            // Upload with metadata
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Starting file.save()");
            await file.save(params.file, {
                metadata: {
                    contentType: params.mimeType,
                    metadata: {
                        originalName: params.fileName
                    }
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: File saved successfully");
            // Generate signed URL
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Generating signed URL");
            const [url] = await file.getSignedUrl({
                action: "read",
                expires: Date.now() + this.config.urlExpiry * 1000
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Signed URL generated successfully");
            const result = {
                fileKey,
                url,
                size: params.file.length,
                mimeType: params.mimeType
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("GCS Adapter: Upload completed successfully", {
                fileKey,
                size: result.size
            });
            return result;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: Upload error", {
                message: error?.message,
                code: error?.code,
                errors: error?.errors,
                stack: error?.stack
            });
            throw new Error(`Failed to upload file to Google Cloud Storage: ${error?.message || "Unknown error"}`);
        }
    }
    /**
   * Specific method to generate signed download URLs for Consent Artifacts.
   * Reconstructs the filename based on business keys.
   */ async createSignedUrlForDownload(data, expiresIn = 900 // Default 15 minutes
    ) {
        try {
            // 1. Ensure GCS is loaded and bucket is ready
            await this.ensureInitialized();
            // 2. Reconstruct the specific object path
            // Format: meity/artifacts/{bp_code}-{ref_id}-{dp_id}.json
            const objectName = `meity/artifacts/${data.business_process_code}-${data.reference_id}-${data.data_principal_id}.json`;
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Generating download URL for", {
                objectName
            });
            const file = this.bucket.file(objectName);
            // 3. Generate Signed URL
            // version: 'v4' provides better security and longer expiration limits if needed
            const [url] = await file.getSignedUrl({
                version: "v4",
                action: "read",
                expires: Date.now() + expiresIn * 1000
            });
            return url;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: createSignedUrlForDownload error", {
                message: error.message,
                data
            });
            throw new Error(`Failed to generate download URL: ${error.message}`);
        }
    }
    async getUrl(fileKey, expiresIn) {
        try {
            await this.ensureInitialized();
            const file = this.bucket.file(fileKey);
            const expires = Date.now() + (expiresIn || this.config.urlExpiry) * 1000;
            const [url] = await file.getSignedUrl({
                action: "read",
                expires
            });
            return url;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: getUrl error", {
                error
            });
            throw new Error("Failed to generate signed URL");
        }
    }
    async delete(fileKey) {
        try {
            await this.ensureInitialized();
            const file = this.bucket.file(fileKey);
            await file.delete();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: delete error", {
                error
            });
            // Don't throw if file doesn't exist
            if (error.code !== 404) {
                throw new Error("Failed to delete file from Google Cloud Storage");
            }
        }
    }
    async exists(fileKey) {
        try {
            await this.ensureInitialized();
            const file = this.bucket.file(fileKey);
            const [exists] = await file.exists();
            return exists;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: exists error", {
                error
            });
            return false;
        }
    }
    async getMetadata(fileKey) {
        try {
            await this.ensureInitialized();
            const file = this.bucket.file(fileKey);
            const [metadata] = await file.getMetadata();
            // Extract original filename from metadata or key
            const fileName = metadata.metadata?.originalName || fileKey.split("/").pop()?.split("-").slice(2).join("-") || fileKey;
            return {
                fileKey,
                fileName,
                size: parseInt(metadata.size, 10),
                mimeType: metadata.contentType || "application/octet-stream",
                uploadedAt: new Date(metadata.timeCreated)
            };
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: getMetadata error", {
                error
            });
            throw new Error("Failed to get file metadata from Google Cloud Storage");
        }
    }
}
}),
"[project]/lib/services/storage/storage-factory.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Storage Factory
 * 
 * Central factory for creating storage adapter instances.
 * Automatically detects which provider to use based on environment variables.
 */ __turbopack_context__.s([
    "StorageFactory",
    ()=>StorageFactory,
    "StorageProvider",
    ()=>StorageProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$local$2d$storage$2e$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/adapters/local-storage.adapter.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$gcs$2d$storage$2e$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/adapters/gcs-storage.adapter.ts [app-rsc] (ecmascript)");
;
;
;
var StorageProvider = /*#__PURE__*/ function(StorageProvider) {
    StorageProvider["LOCAL"] = "local";
    StorageProvider["GCS"] = "gcs";
    StorageProvider["S3"] = "s3";
    return StorageProvider;
}({});
class StorageFactory {
    static instance = null;
    /**
   * Get singleton instance of storage adapter
   * Uses environment variables to determine which adapter to create
   */ static getInstance() {
        if (!this.instance) {
            const provider = this.detectProvider();
            this.instance = this.createAdapter(provider);
        }
        return this.instance;
    }
    /**
   * Create a new storage adapter instance
   * @param provider Storage provider type
   * @returns Storage adapter instance
   */ static createAdapter(provider) {
        const selectedProvider = provider || this.detectProvider();
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Storage adapter created", {
            provider: selectedProvider
        });
        switch(selectedProvider){
            case "gcs":
                return this.createGCSAdapter();
            case "s3":
                throw new Error("S3 storage adapter not yet implemented");
            case "local":
            default:
                return this.createLocalAdapter();
        }
    }
    /**
   * Auto-detect storage provider based on environment variables
   * Priority: Explicit STORAGE_PROVIDER > GCS env vars > S3 env vars > Local (default)
   */ static detectProvider() {
        // Check explicit provider setting
        const explicitProvider = process.env.STORAGE_PROVIDER?.toLowerCase();
        if (explicitProvider === "gcs") return "gcs";
        if (explicitProvider === "s3") return "s3";
        if (explicitProvider === "local") return "local";
        // Auto-detect based on available configuration
        if (this.hasGCSConfig()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("GCS configuration detected");
            return "gcs";
        }
        if (this.hasS3Config()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("S3 configuration detected (not yet implemented)");
        // return StorageProvider.S3; // Uncomment when S3 is implemented
        }
        // Default to local storage
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("No cloud storage configured, using local storage");
        return "local";
    }
    /**
   * Check if GCS configuration is available
   */ static hasGCSConfig() {
        return !!(process.env.GCS_PROJECT_ID && process.env.GCS_BUCKET_NAME && (process.env.GCS_KEYFILE_PATH || process.env.GCS_USE_APPLICATION_DEFAULT === "true"));
    }
    /**
   * Check if S3 configuration is available
   */ static hasS3Config() {
        return !!(process.env.AWS_REGION && process.env.AWS_S3_BUCKET && (process.env.AWS_ACCESS_KEY_ID || process.env.AWS_USE_IAM_ROLE === "true"));
    }
    /**
   * Create local storage adapter instance
   */ static createLocalAdapter() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$local$2d$storage$2e$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]({
            uploadDir: process.env.LOCAL_STORAGE_PATH,
            baseUrl: process.env.LOCAL_STORAGE_BASE_URL || "/cms/uploads"
        });
    }
    /**
   * Create GCS storage adapter instance
   */ static createGCSAdapter() {
        const projectId = process.env.GCS_PROJECT_ID;
        const bucketName = process.env.GCS_BUCKET_NAME;
        if (!projectId || !bucketName) {
            throw new Error("GCS_PROJECT_ID and GCS_BUCKET_NAME are required for GCS storage");
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$gcs$2d$storage$2e$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GCSStorageAdapter"]({
            projectId,
            bucketName,
            keyFilePath: process.env.GCS_KEYFILE_PATH,
            useApplicationDefault: process.env.GCS_USE_APPLICATION_DEFAULT === "true",
            urlExpiry: process.env.GCS_URL_EXPIRY ? parseInt(process.env.GCS_URL_EXPIRY, 10) : 3600
        });
    }
    /**
   * Reset singleton instance (useful for testing)
   */ static reset() {
        this.instance = null;
    }
}
}),
"[project]/lib/utils/sla.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "calculateExpectedResolutionTime",
    ()=>calculateExpectedResolutionTime,
    "checkSlaStatus",
    ()=>checkSlaStatus,
    "formatTimeRemaining",
    ()=>formatTimeRemaining,
    "getSeverityForCategory",
    ()=>getSeverityForCategory,
    "getSlaStatusColor",
    ()=>getSlaStatusColor,
    "getSlaStatusLabel",
    ()=>getSlaStatusLabel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
function getSeverityForCategory(category) {
    switch(category){
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].REPORT_BREACH:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].CRITICAL;
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].ERASE_DATA:
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].WITHDRAW_CONSENT:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].HIGH;
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].PROCESSING_PURPOSE_ENQUIRY:
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].CONSENT_UPDATE:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].MEDIUM;
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].REVIEW_REQUEST:
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].NOMINATE_MEMBER:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].LOW;
        default:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].MEDIUM;
    }
}
function calculateExpectedResolutionTime(start, days, businessHours) {
    if (!businessHours?.enabled) {
        // Simple calendar days mode
        const result = new Date(start);
        result.setUTCDate(result.getUTCDate() + days);
        return result;
    }
    // Business hours mode: count only work hours
    const { startHour, endHour, businessDays } = businessHours;
    const hoursPerDay = endHour - startHour;
    const totalHoursNeeded = days * hoursPerDay;
    const current = new Date(start);
    let hoursAccumulated = 0;
    while(hoursAccumulated < totalHoursNeeded){
        const dayOfWeek = current.getUTCDay() || 7; // Convert Sunday (0) to 7
        const currentHour = current.getUTCHours();
        if (businessDays.includes(dayOfWeek) && currentHour >= startHour && currentHour < endHour) {
            hoursAccumulated++;
        }
        current.setUTCHours(current.getUTCHours() + 1);
    }
    return current;
}
function checkSlaStatus(startedAt, expectedResolutionAt, resolvedAt, isBreached) {
    const now = new Date();
    const start = new Date(startedAt).getTime();
    const expected = new Date(expectedResolutionAt).getTime();
    const resolved = resolvedAt ? new Date(resolvedAt).getTime() : null;
    // If resolved, return resolved status
    if (resolved) {
        return {
            status: "resolved",
            timeRemaining: 0,
            percentComplete: 100,
            isBreached: isBreached || resolved > expected
        };
    }
    const currentTime = now.getTime();
    const timeRemaining = expected - currentTime;
    const totalDuration = expected - start;
    const elapsed = currentTime - start;
    const percentComplete = Math.min(100, Math.max(0, elapsed / totalDuration * 100));
    // If breached (past expected resolution time)
    if (isBreached || timeRemaining <= 0) {
        return {
            status: "breached",
            timeRemaining: timeRemaining,
            percentComplete: 100,
            isBreached: true
        };
    }
    // At risk: less than 25% time remaining
    const percentRemaining = timeRemaining / totalDuration * 100;
    if (percentRemaining < 25) {
        return {
            status: "at-risk",
            timeRemaining,
            percentComplete,
            isBreached: false
        };
    }
    // On track
    return {
        status: "on-track",
        timeRemaining,
        percentComplete,
        isBreached: false
    };
}
function formatTimeRemaining(milliseconds) {
    const isOverdue = milliseconds < 0;
    const absMs = Math.abs(milliseconds);
    const minutes = Math.floor(absMs / (1000 * 60));
    const hours = Math.floor(absMs / (1000 * 60 * 60));
    const days = Math.floor(absMs / (1000 * 60 * 60 * 24));
    let formatted;
    if (days > 0) {
        formatted = `${days} day${days !== 1 ? "s" : ""}`;
    } else if (hours > 0) {
        formatted = `${hours} hour${hours !== 1 ? "s" : ""}`;
    } else if (minutes > 0) {
        formatted = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    } else {
        formatted = "less than a minute";
    }
    return isOverdue ? `Overdue by ${formatted}` : formatted;
}
function getSlaStatusColor(status) {
    switch(status){
        case "on-track":
            return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
        case "at-risk":
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
        case "breached":
            return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
        case "resolved":
            return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
        default:
            return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
}
function getSlaStatusLabel(status) {
    switch(status){
        case "on-track":
            return "On Track";
        case "at-risk":
            return "At Risk";
        case "breached":
            return "Breached";
        case "resolved":
            return "Resolved";
        default:
            return "Unknown";
    }
}
}),
"[project]/actions/grievances.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00637fa19632a3a0253e6c6ec30668ab6fe9dc9046":"getGrievanceStats","0084c0942718b6e54643a977ab1b32794214686bac":"getMyAssignedGrievances","00a1d6b7183d7ca41be6bc77bf3d35ed530d8772eb":"getAdminFeedbackAnalytics","00ffe892559a659ccf7ce0c7e80f4b14439716f00b":"getAvailableAgents","401a356d33c90fb346d570d11e758f823221af4fe5":"markGrievanceSeenByAgent","40241f5ec67ef3cc15d99962dc3d16463db57225d3":"getGrievanceById","40590f85d005c60bc60e54f150cbfd3dc89422af23":"getAllGrievances","408bf653552f844137a6649e6fd510e1ea8586da69":"addGrievanceMessage","409207574a3047d75827b09accb31a3710292e33b9":"assignGrievance","40a02ab4ff60696682ae9c58641b54cbc389e2eb21":"getGrievanceWithMessages","40b97cd4ea9d534df5c68fb4f052c694faa7d43293":"reopenGrievance","40efd3e6eff04f3274f4a581ca96b6fa0b2a8532c5":"submitGrievanceFeedback","606e00b2cc7dc9d7b996955b3e9a69d8a4a8fb5278":"markGrievanceSeenByPrincipal","6074f5d0e1c6021a6c59fc402abedb5916b5f9df5a":"createGrievance","607a30b37dc802efb14c7a0b1a4df734aff5134aab":"reopenGrievanceByPrincipal","607a973b141d138d7cb82673d98279e8fece519e80":"getGrievancesForPrincipal","60966d185ac41363f0479b1b22d73cb3d488625f56":"getGrievanceAttachments","609b8419ed31dc0813efda2518434fad89d305aefb":"getGrievanceForPrincipal","60c671f01cbc2fa2b7dd8bfc9719bb38fccd29d1ab":"deleteAttachment","60df83acfdd2fa591b289c78df69d9823f35cfea33":"addPrincipalMessage","60f1008992fb47d09d44e03556992dd2a506434e29":"getAttachmentUrl","700f134e9a0e03b8a6980ebe8a07baad0272d475e3":"uploadGrievanceAttachment","70121e9560a36c62712f07d1371d129113679a0485":"getGrievanceMessages","70d861b3a9d9639a407c32b0c3b662c11680056c40":"getGrievanceTimeline","781967ba1d73a968624be3fdf30d4e4b78c7a2ea7e":"getPrincipalGrievanceMessages","7f4c4f801cc0421b1a11d61f9e3313f0bf35401347":"updateGrievanceStatus"},"",""] */ __turbopack_context__.s([
    "addGrievanceMessage",
    ()=>addGrievanceMessage,
    "addPrincipalMessage",
    ()=>addPrincipalMessage,
    "assignGrievance",
    ()=>assignGrievance,
    "createGrievance",
    ()=>createGrievance,
    "deleteAttachment",
    ()=>deleteAttachment,
    "getAdminFeedbackAnalytics",
    ()=>getAdminFeedbackAnalytics,
    "getAllGrievances",
    ()=>getAllGrievances,
    "getAttachmentUrl",
    ()=>getAttachmentUrl,
    "getAvailableAgents",
    ()=>getAvailableAgents,
    "getGrievanceAttachments",
    ()=>getGrievanceAttachments,
    "getGrievanceById",
    ()=>getGrievanceById,
    "getGrievanceForPrincipal",
    ()=>getGrievanceForPrincipal,
    "getGrievanceMessages",
    ()=>getGrievanceMessages,
    "getGrievanceStats",
    ()=>getGrievanceStats,
    "getGrievanceTimeline",
    ()=>getGrievanceTimeline,
    "getGrievanceWithMessages",
    ()=>getGrievanceWithMessages,
    "getGrievancesForPrincipal",
    ()=>getGrievancesForPrincipal,
    "getMyAssignedGrievances",
    ()=>getMyAssignedGrievances,
    "getPrincipalGrievanceMessages",
    ()=>getPrincipalGrievanceMessages,
    "markGrievanceSeenByAgent",
    ()=>markGrievanceSeenByAgent,
    "markGrievanceSeenByPrincipal",
    ()=>markGrievanceSeenByPrincipal,
    "reopenGrievance",
    ()=>reopenGrievance,
    "reopenGrievanceByPrincipal",
    ()=>reopenGrievanceByPrincipal,
    "submitGrievanceFeedback",
    ()=>submitGrievanceFeedback,
    "updateGrievanceStatus",
    ()=>updateGrievanceStatus,
    "uploadGrievanceAttachment",
    ()=>uploadGrievanceAttachment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/grievances.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac-config.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$file$2d$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/file-upload.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/grievances.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$grievance$2d$auto$2d$assignment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/grievance-auto-assignment.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$grievance$2d$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/grievance-events.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$storage$2d$factory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/storage-factory.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$sla$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/sla.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function createGrievance(token, input) {
    try {
        // 1. Verify the DPRM token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
        const tokenDataPrincipalId = tokenPayload.data_principal_id;
        const dataPrincipalId = input.dataPrincipalId;
        // Ensure the dataPrincipalId from input matches the token OR is a valid minor
        if (dataPrincipalId !== tokenDataPrincipalId) {
            // Check if the token owner is a guardian of the input data principal
            const isGuardian = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findFirst({
                where: {
                    dataPrincipalId: dataPrincipalId,
                    majorDataPrincipalId: tokenDataPrincipalId
                }
            });
            if (!isGuardian) {
                return {
                    success: false,
                    error: "Unauthorized: Data Principal ID mismatch"
                };
            }
        }
        // Extract files before validation
        const files = input.files;
        const { files: _, ...inputWithoutFiles } = input;
        // 2. Validate input
        const validatedInput = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createGrievanceSchema"].parse(inputWithoutFiles);
        // 3. Verify business process exists and principal has access to it
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                id: validatedInput.businessProcessId
            },
            select: {
                id: true,
                name: true,
                publicId: true
            }
        });
        if (!businessProcess) {
            return {
                success: false,
                error: "Business process not found"
            };
        }
        // Verify the principal has consents for this business process (using publicId)
        const hasConsent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findFirst({
            where: {
                dataPrincipalId: dataPrincipalId,
                businessProcessId: businessProcess.publicId
            },
            select: {
                id: true
            }
        });
        if (!hasConsent) {
            return {
                success: false,
                error: "You do not have an active consent for this business process"
            };
        }
        // 4. Auto-assign to an agent if available
        const autoAssignedAgentId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$grievance$2d$auto$2d$assignment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["autoAssignGrievance"])();
        // 5. Create the grievance, first message, and system event in a transaction
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            // Create the grievance
            // Determine severity from category mapping
            const defaultSeverity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$sla$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSeverityForCategory"])(validatedInput.category);
            const grievance = await tx.grievance.create({
                data: {
                    dataPrincipalId: validatedInput.dataPrincipalId,
                    metadata: validatedInput.metadata || {},
                    businessProcessId: validatedInput.businessProcessId,
                    category: validatedInput.category,
                    severity: defaultSeverity,
                    subject: validatedInput.subject,
                    description: validatedInput.description,
                    status: autoAssignedAgentId ? __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GRIEVANCE_DEFAULTS"].STATUS,
                    assignedToId: autoAssignedAgentId
                },
                select: {
                    id: true,
                    publicId: true,
                    category: true,
                    subject: true,
                    createdAt: true,
                    assignedToId: true
                }
            });
            // Create an SLA tracker for this grievance using admin configuration if present
            try {
                const slaConfig = await tx.slaConfiguration.findUnique({
                    where: {
                        severity: defaultSeverity
                    }
                });
                const days = slaConfig?.resolutionTimeInDays ?? 3; // fallback to 3 days if not configured
                const expected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$sla$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateExpectedResolutionTime"])(grievance.createdAt, days);
                await tx.slaTracker.create({
                    data: {
                        grievanceId: grievance.id,
                        severity: defaultSeverity,
                        startedAt: grievance.createdAt,
                        expectedResolutionAt: expected
                    }
                });
            } catch (slaErr) {
                // Non-fatal: log and continue. SLA tracker creation should not block grievance creation.
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to create SLA tracker for grievance", {
                    error: slaErr
                });
            }
            // Create the first message with the description
            const firstMessage = await tx.grievanceMessage.create({
                data: {
                    grievanceId: grievance.id,
                    authorType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].PRINCIPAL,
                    authorId: null,
                    message: validatedInput.description
                },
                select: {
                    id: true
                }
            });
            return {
                grievance,
                firstMessageId: firstMessage.id
            };
        });
        // Upload files and attach to the first message (outside transaction)
        if (files && files.length > 0) {
            try {
                const storage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$storage$2d$factory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorageFactory"].getInstance();
                for (const file of files){
                    const sanitizedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$file$2d$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeFileName"])(file.name);
                    const fileBuffer = Buffer.from(await file.arrayBuffer());
                    const uploadResult = await storage.upload({
                        file: fileBuffer,
                        fileName: sanitizedName,
                        mimeType: file.type,
                        folder: `grievances/${result.grievance.id}`
                    });
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceAttachment.create({
                        data: {
                            messageId: result.firstMessageId,
                            fileKey: uploadResult.fileKey,
                            fileName: file.name,
                            fileSize: file.size,
                            mimeType: file.type
                        }
                    });
                }
            } catch (fileError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error uploading files for grievance", {
                    error: fileError
                });
            // Continue - grievance is created, file upload is non-critical
            }
        }
        // Create system event for grievance creation (outside transaction for reliability)
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$grievance$2d$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createGrievanceCreatedEvent"])({
            grievanceId: result.grievance.id,
            dataPrincipalId: validatedInput.dataPrincipalId,
            category: validatedInput.category,
            subject: validatedInput.subject
        });
        // If auto-assigned, create assignment event
        if (result.grievance.assignedToId) {
            const assignedAgent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                where: {
                    id: result.grievance.assignedToId
                },
                select: {
                    name: true,
                    email: true
                }
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$grievance$2d$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAssignedEvent"])({
                grievanceId: result.grievance.id,
                assignedToUserId: result.grievance.assignedToId,
                assignedToName: assignedAgent?.name || assignedAgent?.email || "Unknown",
                // Don't pass performedByUserId for system actions - it will be null in the audit log
                performedByUserId: null,
                performedByName: "Auto-Assignment System"
            });
        }
        // 6. Send confirmation email to data principal
        try {
            const { emailService } = await __turbopack_context__.A("[project]/lib/services/email/email-service.ts [app-rsc] (ecmascript, async loader)");
            const { generateDprmLink } = await __turbopack_context__.A("[project]/lib/services/dprm-service.ts [app-rsc] (ecmascript, async loader)");
            const metadata = validatedInput.metadata || {};
            const principalEmail = metadata.email || metadata.Email;
            const principalName = metadata.name || metadata.Name || "User";
            if (principalEmail) {
                const trackingLink = await generateDprmLink(dataPrincipalId, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
                ) + "/grievances";
                emailService.sendTemplatedEmail({
                    templateName: "grievance-status-update",
                    to: {
                        email: principalEmail,
                        name: principalName
                    },
                    variables: {
                        grievanceId: result.grievance.publicId,
                        status: "Submitted",
                        grievanceTitle: validatedInput.subject,
                        principalName,
                        comments: "We are currently evaluating your request and will notify you once a resolution is reached. Thank you for your patience.",
                        trackingLink
                    }
                });
            }
        } catch (emailError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to send grievance creation email", {
                error: emailError
            });
        }
        // Audit Log
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAudit"])({
            action: "CREATE",
            resource: "GRIEVANCE",
            resourceId: result.grievance.id,
            performedByUserId: null,
            metadata: {
                principalId: dataPrincipalId
            },
            payload: validatedInput,
            status: "SUCCESS"
        });
        // 7. Revalidate paths
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/principal/dprm/${token}/grievances`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/grievances`);
        return {
            success: true,
            data: {
                publicId: result.grievance.publicId,
                id: result.grievance.id,
                message: "Grievance submitted successfully"
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in createGrievance", {
            error: error
        });
        if (error.message === "TOKEN_EXPIRED") {
            return {
                success: false,
                error: "Your session has expired"
            };
        }
        if (error.message === "INVALID_TOKEN") {
            return {
                success: false,
                error: "Invalid access token"
            };
        }
        if (error.name === "ZodError") {
            return {
                success: false,
                error: "Validation failed",
                details: error.errors
            };
        }
        return {
            success: false,
            error: "Failed to create grievance. Please try again."
        };
    }
}
async function getGrievancesForPrincipal(token, minorDataPrincipalId) {
    try {
        // 1. Verify the DPRM token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
        const dataPrincipalId = tokenPayload.data_principal_id;
        const targetPrincipalId = minorDataPrincipalId || dataPrincipalId;
        // If fetching for minor, verify relationship via Consent table
        if (minorDataPrincipalId) {
            const hasRelationship = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findFirst({
                where: {
                    dataPrincipalId: minorDataPrincipalId,
                    majorDataPrincipalId: dataPrincipalId
                }
            });
            if (!hasRelationship) {
                return {
                    success: true,
                    data: []
                };
            }
        }
        // 2. Fetch grievances
        const grievances = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findMany({
            where: {
                dataPrincipalId: targetPrincipalId
            },
            select: {
                id: true,
                publicId: true,
                category: true,
                subject: true,
                description: true,
                status: true,
                metadata: true,
                createdAt: true,
                updatedAt: true,
                principalLastSeenAt: true,
                businessProcess: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                messages: {
                    select: {
                        id: true,
                        message: true,
                        authorType: true,
                        createdAt: true
                    },
                    orderBy: {
                        createdAt: "desc"
                    },
                    take: 1
                },
                slaTracker: {
                    select: {
                        expectedResolutionAt: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        // Add hasUnread flag to each grievance
        const grievancesWithUnread = grievances.map((grievance)=>{
            const lastMessage = grievance.messages[0];
            const hasUnread = lastMessage && (!grievance.principalLastSeenAt || new Date(lastMessage.createdAt) > new Date(grievance.principalLastSeenAt));
            return {
                ...grievance,
                hasUnread
            };
        });
        return {
            success: true,
            data: grievancesWithUnread
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getGrievancesForPrincipal", {
            error
        });
        if (error.message === "TOKEN_EXPIRED") {
            return {
                success: false,
                error: "Your session has expired"
            };
        }
        if (error.message === "INVALID_TOKEN") {
            return {
                success: false,
                error: "Invalid access token"
            };
        }
        return {
            success: false,
            error: "Failed to fetch grievances"
        };
    }
}
async function getAllGrievances(filters) {
    try {
        // 1. Check authentication and authorization
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized: Please log in"
            };
        }
        // Get user roles
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        // Check if user has GRIEVANCE:READ permission
        const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        if (!hasPermission) {
            return {
                success: false,
                error: "Unauthorized: You don't have permission to view grievances"
            };
        }
        // Check if user is a grievance agent (not admin)
        const isAdmin = roleNames.includes("privy_cgp_admin");
        const isGrievanceAgent = roleNames.includes("privy_cgp_grievance_agent");
        // 2. Validate and parse filters
        const validatedFilters = filters ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["grievanceFilterSchema"].parse(filters) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["grievanceFilterSchema"].parse({});
        // 3. Build where clause
        const where = {};
        // If user is a grievance agent (and not admin), only show grievances assigned to them
        if (isGrievanceAgent && !isAdmin) {
            where.assignedToId = session.user.id;
        }
        if (validatedFilters.status) {
            where.status = validatedFilters.status;
        }
        if (validatedFilters.category) {
            where.category = validatedFilters.category;
        }
        if (validatedFilters.severity) {
            where.severity = validatedFilters.severity;
        }
        if (validatedFilters.assignedToId) {
            if (validatedFilters.assignedToId === "unassigned") {
                where.assignedToId = null;
            } else {
                where.assignedToId = validatedFilters.assignedToId;
            }
        }
        if (validatedFilters.businessProcessId) {
            where.businessProcessId = validatedFilters.businessProcessId;
        }
        if (validatedFilters.dataPrincipalId) {
            where.dataPrincipalId = validatedFilters.dataPrincipalId;
        }
        if (validatedFilters.search) {
            where.OR = [
                {
                    subject: {
                        contains: validatedFilters.search,
                        mode: "insensitive"
                    }
                },
                {
                    description: {
                        contains: validatedFilters.search,
                        mode: "insensitive"
                    }
                },
                {
                    publicId: {
                        contains: validatedFilters.search,
                        mode: "insensitive"
                    }
                }
            ];
        }
        // 4. Get total count
        const totalCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
            where
        });
        // 5. Fetch grievances with pagination
        const grievances = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findMany({
            where,
            select: {
                id: true,
                publicId: true,
                dataPrincipalId: true,
                metadata: true,
                category: true,
                severity: true,
                subject: true,
                status: true,
                createdAt: true,
                updatedAt: true,
                assignedTo: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                businessProcess: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                slaTracker: {
                    select: {
                        severity: true,
                        startedAt: true,
                        expectedResolutionAt: true,
                        resolvedAt: true,
                        isBreached: true,
                        breachedAt: true,
                        escalatedAt: true
                    }
                }
            },
            orderBy: {
                [validatedFilters.sortBy]: validatedFilters.sortOrder
            },
            skip: (validatedFilters.page - 1) * validatedFilters.pageSize,
            take: validatedFilters.pageSize
        });
        // Filter by SLA status if specified (computed field, so filter after fetch)
        let filteredGrievances = grievances;
        if (validatedFilters.slaStatus) {
            const { checkSlaStatus } = await __turbopack_context__.A("[project]/lib/utils/sla.ts [app-rsc] (ecmascript, async loader)");
            filteredGrievances = grievances.filter((g)=>{
                if (!g.slaTracker) return false;
                const slaStatusInfo = checkSlaStatus(g.slaTracker.startedAt, g.slaTracker.expectedResolutionAt, g.slaTracker.resolvedAt, g.slaTracker.isBreached);
                return slaStatusInfo.status === validatedFilters.slaStatus;
            });
        }
        const totalPages = Math.ceil(totalCount / validatedFilters.pageSize);
        return {
            success: true,
            data: {
                grievances: filteredGrievances,
                pagination: {
                    total: totalCount,
                    page: validatedFilters.page,
                    pageSize: validatedFilters.pageSize,
                    totalPages
                }
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getAllGrievances", {
            error: error
        });
        if (error.name === "ZodError") {
            return {
                success: false,
                error: "Invalid filters",
                details: error.errors
            };
        }
        return {
            success: false,
            error: "Failed to fetch grievances"
        };
    }
}
async function getGrievanceById(grievanceId) {
    try {
        // 1. Check authentication and authorization
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized: Please log in"
            };
        }
        // Get user roles
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        // Check if user has GRIEVANCE:READ permission
        const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        if (!hasPermission) {
            return {
                success: false,
                error: "Unauthorized: You don't have permission to view grievances"
            };
        }
        // 2. Validate input
        const validatedInput = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGrievanceSchema"].parse({
            grievanceId
        });
        // 3. Determine query condition based on ID type
        const whereCondition = typeof validatedInput.grievanceId === "number" ? {
            id: validatedInput.grievanceId
        } : {
            publicId: validatedInput.grievanceId
        };
        // 4. Fetch grievance with full details
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: whereCondition,
            include: {
                businessProcess: {
                    select: {
                        id: true,
                        name: true,
                        code: true
                    }
                },
                assignedTo: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                slaTracker: true,
                auditLogs: {
                    include: {
                        performedByUser: {
                            select: {
                                id: true,
                                name: true,
                                email: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: "desc"
                    },
                    take: 20
                }
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        return {
            success: true,
            data: grievance
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getGrievanceById", {
            error: error
        });
        if (error.name === "ZodError") {
            return {
                success: false,
                error: "Invalid grievance ID",
                details: error.errors
            };
        }
        return {
            success: false,
            error: "Failed to fetch grievance"
        };
    }
}
async function assignGrievance(input) {
    try {
        // 1. Check authentication and authorization
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized: Please log in"
            };
        }
        // Get user roles
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        // Check if user has GRIEVANCE:UPDATE permission
        const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
        if (!hasPermission) {
            return {
                success: false,
                error: "Unauthorized: You don't have permission to assign grievances"
            };
        }
        // 2. Validate input
        const validatedInput = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assignGrievanceSchema"].parse(input);
        // 3. Verify grievance exists
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: validatedInput.grievanceId
            },
            select: {
                id: true,
                assignedToId: true
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        // 4. If assigning to a user, verify the user exists
        let assignedUserName = null;
        if (validatedInput.assignedToId) {
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                where: {
                    id: validatedInput.assignedToId
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });
            if (!user) {
                return {
                    success: false,
                    error: "Assigned user not found"
                };
            }
            assignedUserName = user.name || user.email || "Unknown";
        }
        // 5. Update assignment
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.update({
            where: {
                id: validatedInput.grievanceId
            },
            data: {
                assignedToId: validatedInput.assignedToId,
                updatedAt: new Date()
            }
        });
        // 6. Create system event for assignment/unassignment
        if (validatedInput.assignedToId) {
            // Assignment event
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$grievance$2d$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAssignedEvent"])({
                grievanceId: validatedInput.grievanceId,
                assignedToUserId: validatedInput.assignedToId,
                assignedToName: assignedUserName,
                performedByUserId: session.user.id,
                performedByName: session.user.name || session.user.email || "Unknown"
            });
        } else if (grievance.assignedToId) {
            // Unassignment event (only if there was a previous assignment)
            const previousAssignee = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                where: {
                    id: grievance.assignedToId
                },
                select: {
                    name: true,
                    email: true
                }
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$grievance$2d$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUnassignedEvent"])({
                grievanceId: validatedInput.grievanceId,
                previousAssigneeId: grievance.assignedToId,
                previousAssigneeName: previousAssignee?.name || previousAssignee?.email || "Unknown",
                performedByUserId: session.user.id,
                performedByName: session.user.name || session.user.email || "Unknown"
            });
        }
        // 7. Revalidate paths
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/grievances");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/grievances/${validatedInput.grievanceId}`);
        return {
            success: true,
            message: validatedInput.assignedToId ? "Grievance assigned successfully" : "Grievance unassigned successfully"
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in assignGrievance", {
            error: error
        });
        if (error.name === "ZodError") {
            return {
                success: false,
                error: "Validation failed",
                details: error.errors
            };
        }
        return {
            success: false,
            error: "Failed to assign grievance"
        };
    }
}
async function getGrievanceStats() {
    try {
        // 1. Check authentication and authorization
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized: Please log in"
            };
        }
        // Get user roles
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        // Check if user has GRIEVANCE:READ permission
        const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        if (!hasPermission) {
            return {
                success: false,
                error: "Unauthorized: You don't have permission to view grievance stats"
            };
        }
        // Check if user is a grievance agent (not admin)
        const isAdmin = roleNames.includes("privy_cgp_admin");
        const isGrievanceAgent = roleNames.includes("privy_cgp_grievance_agent");
        // Build where clause
        const where = {};
        // If user is a grievance agent (and not admin), only show grievances assigned to them
        if (isGrievanceAgent && !isAdmin) {
            where.assignedToId = session.user.id;
        }
        // 2. Get counts by status
        const [total, submitted, assigned, inProgress, resolved, closed, reopened] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
                where
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
                where: {
                    ...where,
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].SUBMITTED
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
                where: {
                    ...where,
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
                where: {
                    ...where,
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
                where: {
                    ...where,
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
                where: {
                    ...where,
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
                where: {
                    ...where,
                    status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].REOPENED
                }
            })
        ]);
        return {
            success: true,
            data: {
                total,
                submitted,
                assigned,
                inProgress,
                resolved,
                closed,
                reopened
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getGrievanceStats", {
            error: error
        });
        return {
            success: false,
            error: "Failed to fetch grievance statistics"
        };
    }
}
async function getAvailableAgents() {
    try {
        // 1. Check authentication and authorization
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized: Please log in"
            };
        }
        // Get user roles
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        // Check if user has GRIEVANCE:UPDATE permission
        const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
        if (!hasPermission) {
            return {
                success: false,
                error: "Unauthorized: You don't have permission to view agents"
            };
        }
        // 2. Get users with grievance agent role or admin role
        const grievanceRole = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].role.findFirst({
            where: {
                name: "privy_cgp_grievance_agent"
            }
        });
        const adminRole = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].role.findFirst({
            where: {
                name: "privy_cgp_admin"
            }
        });
        const roleIds = [
            grievanceRole?.id,
            adminRole?.id
        ].filter(Boolean);
        const agents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findMany({
            where: {
                userRoles: {
                    some: {
                        roleId: {
                            in: roleIds
                        }
                    }
                }
            },
            select: {
                id: true,
                name: true,
                email: true
            },
            orderBy: {
                name: "asc"
            }
        });
        return {
            success: true,
            data: agents
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getAvailableAgents", {
            error
        });
        return {
            success: false,
            error: "Failed to fetch available agents"
        };
    }
}
async function getGrievanceWithMessages(grievanceId) {
    try {
        // 1. Authenticate and authorize
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized"
            };
        }
        // Get user roles
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        if (!hasPermission) {
            return {
                success: false,
                error: "Permission denied"
            };
        }
        // 2. Fetch grievance with messages
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: grievanceId
            },
            include: {
                assignedTo: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                businessProcess: {
                    select: {
                        id: true,
                        name: true,
                        publicId: true
                    }
                },
                slaTracker: {
                    select: {
                        severity: true,
                        startedAt: true,
                        expectedResolutionAt: true,
                        resolvedAt: true,
                        isBreached: true,
                        breachedAt: true,
                        escalatedAt: true
                    }
                },
                messages: {
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        // 3. Fetch User data for agent messages
        const agentMessageAuthorIds = grievance.messages.filter((msg)=>msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].FIDUCIARY_AGENT).map((msg)=>msg.authorId);
        const uniqueAgentIds = [
            ...new Set(agentMessageAuthorIds)
        ];
        const agentUsers = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findMany({
            where: {
                id: {
                    in: uniqueAgentIds
                }
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        const agentUserMap = new Map(agentUsers.map((user)=>[
                user.id,
                user
            ]));
        // Attach user data to messages
        const messagesWithAuthors = grievance.messages.map((msg)=>({
                ...msg,
                authorUser: msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].FIDUCIARY_AGENT ? agentUserMap.get(msg.authorId) || null : null
            }));
        // 4. Check if user has access (assigned agent or admin)
        const isAssigned = grievance.assignedToId === session.user.id;
        const isAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
        if (!isAssigned && !isAdmin) {
            return {
                success: false,
                error: "You do not have access to this grievance"
            };
        }
        // 5. Fetch consent taxonomy for the data principal and business process
        let consentTaxonomy = null;
        try {
            const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
                where: {
                    id: grievance.businessProcessId
                },
                select: {
                    id: true,
                    name: true,
                    publicId: true,
                    version: true,
                    businessUnit: {
                        select: {
                            id: true,
                            name: true,
                            code: true
                        }
                    },
                    businessProcessToConsentPurposes: {
                        select: {
                            consentPurpose: {
                                select: {
                                    id: true,
                                    publicId: true,
                                    name: true,
                                    description: true,
                                    version: true,
                                    processingPurposes: {
                                        select: {
                                            id: true,
                                            publicId: true,
                                            name: true,
                                            description: true,
                                            processingPurposeToDataProcessors: {
                                                select: {
                                                    dataProcessor: {
                                                        select: {
                                                            ouId: true,
                                                            legalName: true,
                                                            brandName: true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            if (businessProcess) {
                // Get principal's consents for this business process
                const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
                    where: {
                        dataPrincipalId: grievance.dataPrincipalId,
                        businessProcessId: businessProcess.publicId
                    },
                    select: {
                        id: true,
                        publicId: true,
                        status: true,
                        isExpired: true,
                        insertedAt: true,
                        expiresAt: true,
                        consentPurposeId: true,
                        processingPurposeId: true
                    },
                    orderBy: {
                        insertedAt: "desc"
                    }
                });
                // Structure the taxonomy data
                const consentPurposes = businessProcess.businessProcessToConsentPurposes.map((bpcp)=>{
                    const purpose = bpcp.consentPurpose;
                    return {
                        id: purpose.id,
                        publicId: purpose.publicId,
                        name: purpose.name,
                        description: purpose.description,
                        version: purpose.version,
                        processingPurposes: purpose.processingPurposes.map((pp)=>{
                            const ppConsents = consents.filter((c)=>c.processingPurposeId === pp.publicId);
                            return {
                                id: pp.id,
                                publicId: pp.publicId,
                                name: pp.name,
                                description: pp.description,
                                userConsents: ppConsents,
                                dataProcessors: pp.processingPurposeToDataProcessors.map((ppdp)=>ppdp.dataProcessor)
                            };
                        })
                    };
                });
                consentTaxonomy = {
                    businessProcess: {
                        id: businessProcess.id,
                        name: businessProcess.name,
                        publicId: businessProcess.publicId,
                        businessUnit: businessProcess.businessUnit,
                        version: businessProcess.version
                    },
                    consentPurposes,
                    totalConsents: consents.length,
                    activeConsents: consents.filter((c)=>c.status === "accepted" && !c.isExpired).length
                };
            }
        } catch (taxonomyError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error fetching consent taxonomy", {
                error: taxonomyError
            });
        // Continue without taxonomy data - non-blocking
        }
        return {
            success: true,
            data: {
                ...grievance,
                messages: messagesWithAuthors,
                consentTaxonomy
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getGrievanceWithMessages", {
            error: error
        });
        return {
            success: false,
            error: "Failed to fetch grievance details"
        };
    }
}
async function addGrievanceMessage(input) {
    try {
        // 1. Authenticate and authorize
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized"
            };
        }
        // 2. Validate input
        const validatedInput = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addGrievanceMessageSchema"].parse(input);
        // 3. Fetch grievance
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: validatedInput.grievanceId
            },
            select: {
                id: true,
                status: true,
                assignedToId: true,
                dataPrincipalId: true
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        // 4. Check permissions (assigned agent or admin)
        const isAssigned = grievance.assignedToId === session.user.id;
        // Get user roles for permission check
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        const hasAdminPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
        if (!isAssigned && !hasAdminPermission) {
            return {
                success: false,
                error: "You do not have permission to message this grievance"
            };
        }
        // 5. Create message and update status in transaction
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            // Create the message
            const message = await tx.grievanceMessage.create({
                data: {
                    grievanceId: validatedInput.grievanceId,
                    authorType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].FIDUCIARY_AGENT,
                    authorId: session.user.id,
                    message: validatedInput.message,
                    messageType: "USER_MESSAGE"
                }
            });
            // Auto-update status if needed (SUBMITTED/ASSIGNED -> IN_PROGRESS)
            if (grievance.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].SUBMITTED || grievance.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED) {
                await tx.grievance.update({
                    where: {
                        id: validatedInput.grievanceId
                    },
                    data: {
                        status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS,
                        updatedAt: new Date()
                    }
                });
            }
            // Update grievance updatedAt
            await tx.grievance.update({
                where: {
                    id: validatedInput.grievanceId
                },
                data: {
                    updatedAt: new Date()
                }
            });
            return message;
        });
        // Create status change event outside transaction (if status changed)
        if (grievance.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].SUBMITTED || grievance.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$grievance$2d$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStatusChangedEvent"])({
                grievanceId: validatedInput.grievanceId,
                fromStatus: grievance.status,
                toStatus: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS,
                performedByUserId: session.user.id,
                performedByName: session.user.name || session.user.email || "Unknown"
            });
        }
        // 6. Create notification for the principal about new agent message
        const { createNewMessageNotification } = await __turbopack_context__.A("[project]/lib/services/grievance-notification-service.ts [app-rsc] (ecmascript, async loader)");
        const fullGrievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: validatedInput.grievanceId
            },
            select: {
                publicId: true,
                category: true
            }
        });
        if (fullGrievance) {
            await createNewMessageNotification(grievance.dataPrincipalId, validatedInput.grievanceId, fullGrievance.publicId, fullGrievance.category);
        }
        // 7. Fetch the user data for the returned message
        const authorUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: session.user.id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        // 8. Revalidate paths
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/grievances/${validatedInput.grievanceId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/grievances");
        return {
            success: true,
            data: {
                ...result,
                authorUser
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in addGrievanceMessage", {
            error
        });
        if (error.name === "ZodError") {
            return {
                success: false,
                error: "Validation failed",
                details: error.errors
            };
        }
        return {
            success: false,
            error: "Failed to send message"
        };
    }
}
const updateGrievanceStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE
}, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateStatusSchema"], async (validatedInput, user)=>{
    // 3. Fetch grievance
    const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
        where: {
            id: validatedInput.grievanceId
        },
        select: {
            id: true,
            status: true,
            assignedToId: true,
            resolvedAt: true
        }
    });
    if (!grievance) {
        throw new Error("Grievance not found");
    }
    // 4. Check permissions
    const isAssigned = grievance.assignedToId === user.id;
    // Get user roles for permission check
    const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
        where: {
            userId: user.id
        },
        include: {
            role: true
        }
    });
    const roleNames = userRoles.map((ur)=>ur.role.name);
    const hasAdminPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
    if (!isAssigned && !hasAdminPermission) {
        throw new Error("You do not have permission to update this grievance");
    }
    // 5. Update status
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
        // Determine timestamps based on new status
        const updateData = {
            status: validatedInput.newStatus,
            updatedAt: new Date()
        };
        if (validatedInput.newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED) {
            updateData.resolvedAt = new Date();
        }
        if (validatedInput.newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED) {
            updateData.closedAt = new Date();
            if (!grievance.resolvedAt) {
                updateData.resolvedAt = new Date();
            }
        }
        // Update grievance
        const updatedGrievance = await tx.grievance.update({
            where: {
                id: validatedInput.grievanceId
            },
            data: updateData
        });
        // Update SLA tracker if status is RESOLVED or CLOSED
        if (validatedInput.newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED || validatedInput.newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED) {
            await tx.slaTracker.updateMany({
                where: {
                    grievanceId: validatedInput.grievanceId
                },
                data: {
                    resolvedAt: new Date()
                }
            });
        }
        return updatedGrievance;
    });
    // Create status change event outside transaction
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$grievance$2d$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStatusChangedEvent"])({
        grievanceId: validatedInput.grievanceId,
        fromStatus: validatedInput.currentStatus,
        toStatus: validatedInput.newStatus,
        reason: validatedInput.reason,
        performedByUserId: user.id,
        performedByName: user.name || user.email || "Unknown"
    });
    // Create notification for the principal about status change
    const { createStatusChangeNotification } = await __turbopack_context__.A("[project]/lib/services/grievance-notification-service.ts [app-rsc] (ecmascript, async loader)");
    const fullGrievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
        where: {
            id: validatedInput.grievanceId
        },
        select: {
            publicId: true,
            category: true,
            dataPrincipalId: true
        }
    });
    if (fullGrievance) {
        await createStatusChangeNotification(fullGrievance.dataPrincipalId, validatedInput.grievanceId, fullGrievance.publicId, fullGrievance.category, validatedInput.currentStatus, validatedInput.newStatus);
    }
    // Send email notification for status change
    try {
        const { emailService } = await __turbopack_context__.A("[project]/lib/services/email/email-service.ts [app-rsc] (ecmascript, async loader)");
        const { generateDprmLink } = await __turbopack_context__.A("[project]/lib/services/dprm-service.ts [app-rsc] (ecmascript, async loader)");
        const grievanceWithMetadata = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: validatedInput.grievanceId
            },
            select: {
                publicId: true,
                metadata: true,
                dataPrincipalId: true,
                status: true,
                subject: true
            }
        });
        if (grievanceWithMetadata) {
            const metadata = grievanceWithMetadata.metadata || {};
            const principalEmail = metadata.email || metadata.Email;
            const principalName = metadata.name || metadata.Name || "User";
            if (principalEmail) {
                const trackingLink = await generateDprmLink(grievanceWithMetadata.dataPrincipalId, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
                ) + "/grievances";
                // Use different templates for resolved/closed vs other status changes
                if (validatedInput.newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED || validatedInput.newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED) {
                    emailService.sendTemplatedEmail({
                        templateName: "grievance-resolved",
                        to: {
                            email: principalEmail,
                            name: principalName
                        },
                        variables: {
                            grievanceId: grievanceWithMetadata.publicId,
                            resolutionComments: validatedInput.reason || "Your grievance has been addressed. Thank you for your patience.",
                            grievanceTitle: grievanceWithMetadata.subject,
                            principalName,
                            actualStatus: validatedInput.newStatus === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED ? "Resolved" : "Closed",
                            trackingLink
                        }
                    });
                } else {
                    emailService.sendTemplatedEmail({
                        templateName: "grievance-status-update",
                        to: {
                            email: principalEmail,
                            name: principalName
                        },
                        variables: {
                            grievanceId: grievanceWithMetadata.publicId,
                            status: validatedInput.newStatus,
                            grievanceTitle: grievanceWithMetadata.subject,
                            principalName,
                            comments: validatedInput.reason,
                            trackingLink
                        }
                    });
                }
            }
        }
    } catch (emailError) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to send status update email", {
            error: emailError
        });
    }
    // 6. Revalidate paths
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/grievances/${validatedInput.grievanceId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/grievances");
    return result;
});
async function getGrievanceForPrincipal(token, grievanceId) {
    try {
        // 1. Verify the DPRM token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
        const dataPrincipalId = tokenPayload.data_principal_id;
        // 2. Fetch grievance with messages
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: grievanceId
            },
            include: {
                assignedTo: {
                    select: {
                        name: true
                    }
                },
                businessProcess: {
                    select: {
                        name: true
                    }
                },
                slaTracker: {
                    select: {
                        expectedResolutionAt: true
                    }
                },
                messages: {
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        // Check access: either own grievance or guardian of the owner
        if (grievance.dataPrincipalId !== dataPrincipalId) {
            const isGuardian = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findFirst({
                where: {
                    dataPrincipalId: grievance.dataPrincipalId,
                    majorDataPrincipalId: dataPrincipalId
                }
            });
            if (!isGuardian) {
                return {
                    success: false,
                    error: "You do not have access to this grievance"
                };
            }
        }
        // 3. Fetch User data for agent messages
        const agentMessageAuthorIds = grievance.messages.filter((msg)=>msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].FIDUCIARY_AGENT).map((msg)=>msg.authorId);
        const uniqueAgentIds = [
            ...new Set(agentMessageAuthorIds)
        ];
        const agentUsers = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findMany({
            where: {
                id: {
                    in: uniqueAgentIds
                }
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        const agentUserMap = new Map(agentUsers.map((user)=>[
                user.id,
                user
            ]));
        // Attach user data to messages
        const messagesWithAuthors = grievance.messages.map((msg)=>({
                ...msg,
                authorUser: msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].FIDUCIARY_AGENT ? agentUserMap.get(msg.authorId) || null : null
            }));
        // 4. Mark notifications for this grievance as seen
        const { markGrievanceNotificationAsSeenById } = await __turbopack_context__.A("[project]/lib/services/grievance-notification-service.ts [app-rsc] (ecmascript, async loader)");
        await markGrievanceNotificationAsSeenById(dataPrincipalId, grievanceId);
        // 5. Update principal last seen timestamp
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.update({
            where: {
                id: grievanceId
            },
            data: {
                principalLastSeenAt: new Date()
            }
        });
        return {
            success: true,
            data: {
                ...grievance,
                messages: messagesWithAuthors
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getGrievanceForPrincipal", {
            error: error
        });
        if (error.message === "TOKEN_EXPIRED") {
            return {
                success: false,
                error: "Your session has expired"
            };
        }
        if (error.message === "INVALID_TOKEN") {
            return {
                success: false,
                error: "Invalid access token"
            };
        }
        return {
            success: false,
            error: "Failed to fetch grievance details"
        };
    }
}
async function addPrincipalMessage(token, input) {
    try {
        // 1. Verify the DPRM token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
        const dataPrincipalId = tokenPayload.data_principal_id;
        // 2. Validate input
        const validatedInput = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPrincipalMessageSchema"].parse(input);
        // 3. Fetch grievance and verify ownership
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: validatedInput.grievanceId
            },
            select: {
                id: true,
                status: true,
                dataPrincipalId: true
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        // Check access: either own grievance or guardian of the owner
        if (grievance.dataPrincipalId !== dataPrincipalId) {
            const isGuardian = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findFirst({
                where: {
                    dataPrincipalId: grievance.dataPrincipalId,
                    majorDataPrincipalId: dataPrincipalId
                }
            });
            if (!isGuardian) {
                return {
                    success: false,
                    error: "You do not have access to this grievance"
                };
            }
        }
        // 4. Check if grievance is closed
        if (grievance.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED) {
            return {
                success: false,
                error: "Cannot send messages to a closed grievance"
            };
        }
        // 5. Create message in transaction
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            // Create the message
            const message = await tx.grievanceMessage.create({
                data: {
                    grievanceId: validatedInput.grievanceId,
                    authorType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].PRINCIPAL,
                    authorId: null,
                    message: validatedInput.message,
                    messageType: "USER_MESSAGE"
                }
            });
            // Update grievance updatedAt
            await tx.grievance.update({
                where: {
                    id: validatedInput.grievanceId
                },
                data: {
                    updatedAt: new Date()
                }
            });
            return message;
        });
        // 6. Revalidate paths
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/principal/dprm/${token}/grievances/${validatedInput.grievanceId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/principal/dprm/${token}/grievances`);
        return {
            success: true,
            data: result
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in addPrincipalMessage", {
            error
        });
        if (error.message === "TOKEN_EXPIRED") {
            return {
                success: false,
                error: "Your session has expired"
            };
        }
        if (error.message === "INVALID_TOKEN") {
            return {
                success: false,
                error: "Invalid access token"
            };
        }
        if (error.name === "ZodError") {
            return {
                success: false,
                error: "Validation failed",
                details: error.errors
            };
        }
        return {
            success: false,
            error: "Failed to send message"
        };
    }
}
async function getMyAssignedGrievances() {
    try {
        // 1. Authenticate
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized"
            };
        }
        // 2. Fetch grievances assigned to this user
        const grievances = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findMany({
            where: {
                assignedToId: session.user.id
            },
            select: {
                id: true,
                publicId: true,
                dataPrincipalId: true,
                metadata: true,
                status: true,
                category: true,
                severity: true,
                subject: true,
                description: true,
                businessProcessId: true,
                assignedToId: true,
                resolvedAt: true,
                closedAt: true,
                createdAt: true,
                updatedAt: true,
                agentLastSeenAt: true,
                principalLastSeenAt: true,
                feedback: true,
                businessProcess: {
                    select: {
                        id: true,
                        name: true,
                        publicId: true
                    }
                },
                slaTracker: {
                    select: {
                        severity: true,
                        startedAt: true,
                        expectedResolutionAt: true,
                        resolvedAt: true,
                        isBreached: true,
                        breachedAt: true,
                        escalatedAt: true
                    }
                },
                messages: {
                    select: {
                        id: true,
                        message: true,
                        createdAt: true
                    },
                    orderBy: {
                        createdAt: "desc"
                    },
                    take: 1
                },
                _count: {
                    select: {
                        messages: true
                    }
                }
            },
            orderBy: {
                updatedAt: "desc"
            }
        });
        // Add hasUnread flag to each grievance
        const grievancesWithUnread = grievances.map((grievance)=>{
            const lastMessage = grievance.messages[0];
            const hasUnread = lastMessage && (!grievance.agentLastSeenAt || new Date(lastMessage.createdAt) > new Date(grievance.agentLastSeenAt));
            return {
                ...grievance,
                hasUnread
            };
        });
        return {
            success: true,
            data: grievancesWithUnread
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getMyAssignedGrievances", {
            error: error
        });
        return {
            success: false,
            error: "Failed to fetch your assigned grievances"
        };
    }
}
async function markGrievanceSeenByAgent(grievanceId) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized"
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.update({
            where: {
                id: grievanceId
            },
            data: {
                agentLastSeenAt: new Date()
            }
        });
        return {
            success: true
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error marking grievance as seen by agent", {
            error: error
        });
        return {
            success: false,
            error: "Failed to update seen status"
        };
    }
}
async function markGrievanceSeenByPrincipal(accessToken, grievanceId) {
    try {
        // Validate token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(accessToken);
        if (!tokenPayload) {
            return {
                success: false,
                error: "Invalid or expired token"
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.update({
            where: {
                id: grievanceId
            },
            data: {
                principalLastSeenAt: new Date()
            }
        });
        return {
            success: true
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error marking grievance as seen by principal", {
            error: error
        });
        return {
            success: false,
            error: "Failed to update seen status"
        };
    }
}
async function getGrievanceTimeline(grievanceId, isAgentView = false, accessToken) {
    try {
        // Authorization check
        if (isAgentView) {
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
            if (!session?.user?.id) {
                return {
                    success: false,
                    error: "Unauthorized"
                };
            }
            // Get user roles
            const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
                where: {
                    userId: session.user.id
                },
                include: {
                    role: true
                }
            });
            const roleNames = userRoles.map((ur)=>ur.role.name);
            // Check if user has GRIEVANCE:READ permission
            const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
            if (!hasPermission) {
                return {
                    success: false,
                    error: "You don't have permission to view this grievance"
                };
            }
        } else {
            // Principal view - validate token
            if (!accessToken) {
                return {
                    success: false,
                    error: "Access token required"
                };
            }
            const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(accessToken);
            if (!tokenPayload) {
                return {
                    success: false,
                    error: "Invalid or expired token"
                };
            }
        }
        // Fetch audit logs
        const auditLogs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceAuditLog.findMany({
            where: {
                grievanceId
            },
            include: {
                performedByUser: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            },
            orderBy: {
                createdAt: "asc"
            }
        });
        // Transform audit logs into timeline events
        const timelineEvents = auditLogs.map((log)=>({
                id: `audit-${log.id}`,
                type: "audit",
                action: log.action,
                details: log.details,
                performedBy: log.performedByUser ? {
                    id: log.performedByUser.id,
                    name: log.performedByUser.name || log.performedByUser.email
                } : null,
                createdAt: log.createdAt
            }));
        return {
            success: true,
            data: timelineEvents
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error fetching grievance timeline", {
            error: error
        });
        return {
            success: false,
            error: "Failed to fetch timeline events"
        };
    }
}
async function getGrievanceMessages(grievanceId, cursor, limit = 20) {
    try {
        // 1. Authenticate and authorize
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized"
            };
        }
        // Get user roles
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        if (!hasPermission) {
            return {
                success: false,
                error: "Permission denied"
            };
        }
        // 2. Check access to grievance
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: grievanceId
            },
            select: {
                id: true,
                assignedToId: true
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        const isAssigned = grievance.assignedToId === session.user.id;
        const isAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
        if (!isAssigned && !isAdmin) {
            return {
                success: false,
                error: "You do not have access to this grievance"
            };
        }
        // 3. Fetch messages with cursor-based pagination
        const messages = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceMessage.findMany({
            where: {
                grievanceId,
                ...cursor ? {
                    id: {
                        lt: cursor
                    }
                } : {}
            },
            include: {
                attachments: {
                    select: {
                        id: true,
                        fileName: true,
                        fileSize: true,
                        mimeType: true,
                        createdAt: true
                    },
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            },
            take: limit + 1
        });
        const hasMore = messages.length > limit;
        const messagesToReturn = hasMore ? messages.slice(0, limit) : messages;
        // 4. Fetch user data for both agent messages and system messages
        const agentMessageAuthorIds = messagesToReturn.filter((msg)=>msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].FIDUCIARY_AGENT).map((msg)=>msg.authorId);
        const systemMessageAuthorIds = messagesToReturn.filter((msg)=>msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].SYSTEM && msg.authorId).map((msg)=>msg.authorId);
        const uniqueUserIds = [
            ...new Set([
                ...agentMessageAuthorIds,
                ...systemMessageAuthorIds
            ])
        ];
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findMany({
            where: {
                id: {
                    in: uniqueUserIds
                }
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        const userMap = new Map(users.map((user)=>[
                user.id,
                user
            ]));
        // 5. Attach user data to messages
        const messagesWithAuthors = messagesToReturn.map((msg)=>({
                ...msg,
                authorUser: msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].FIDUCIARY_AGENT || msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].SYSTEM ? userMap.get(msg.authorId) || null : null
            }));
        return {
            success: true,
            data: {
                messages: messagesWithAuthors.reverse(),
                nextCursor: hasMore ? messagesToReturn[messagesToReturn.length - 1].id : null,
                hasMore
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error fetching grievance messages", {
            error: error
        });
        return {
            success: false,
            error: "Failed to fetch messages"
        };
    }
}
async function getPrincipalGrievanceMessages(token, grievanceId, cursor, limit = 20) {
    try {
        // 1. Verify the DPRM token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
        const dataPrincipalId = tokenPayload.data_principal_id;
        // 2. Check access to grievance
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: grievanceId
            },
            select: {
                id: true,
                dataPrincipalId: true
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        // Check access: either own grievance or guardian of the owner
        if (grievance.dataPrincipalId !== dataPrincipalId) {
            const isGuardian = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findFirst({
                where: {
                    dataPrincipalId: grievance.dataPrincipalId,
                    majorDataPrincipalId: dataPrincipalId
                }
            });
            if (!isGuardian) {
                return {
                    success: false,
                    error: "You do not have access to this grievance request"
                };
            }
        }
        // 3. Fetch messages with cursor-based pagination
        const messages = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceMessage.findMany({
            where: {
                grievanceId,
                ...cursor ? {
                    id: {
                        lt: cursor
                    }
                } : {}
            },
            include: {
                attachments: {
                    select: {
                        id: true,
                        fileName: true,
                        fileSize: true,
                        mimeType: true,
                        createdAt: true
                    },
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            },
            take: limit + 1
        });
        const hasMore = messages.length > limit;
        const messagesToReturn = hasMore ? messages.slice(0, limit) : messages;
        // 4. Fetch user data for both agent messages and system messages
        const agentMessageAuthorIds = messagesToReturn.filter((msg)=>msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].FIDUCIARY_AGENT).map((msg)=>msg.authorId);
        const systemMessageAuthorIds = messagesToReturn.filter((msg)=>msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].SYSTEM && msg.authorId).map((msg)=>msg.authorId);
        const uniqueUserIds = [
            ...new Set([
                ...agentMessageAuthorIds,
                ...systemMessageAuthorIds
            ])
        ];
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findMany({
            where: {
                id: {
                    in: uniqueUserIds
                }
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        const userMap = new Map(users.map((user)=>[
                user.id,
                user
            ]));
        // 5. Attach user data to messages
        const messagesWithAuthors = messagesToReturn.map((msg)=>({
                ...msg,
                authorUser: msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].FIDUCIARY_AGENT || msg.authorType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceMessageAuthorType"].SYSTEM ? userMap.get(msg.authorId) || null : null
            }));
        return {
            success: true,
            data: {
                messages: messagesWithAuthors.reverse(),
                nextCursor: hasMore ? messagesToReturn[messagesToReturn.length - 1].id : null,
                hasMore
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error fetching principal grievance messages", {
            error: error
        });
        if (error.message === "TOKEN_EXPIRED") {
            return {
                success: false,
                error: "Your session has expired"
            };
        }
        if (error.message === "INVALID_TOKEN") {
            return {
                success: false,
                error: "Invalid access token"
            };
        }
        return {
            success: false,
            error: "Failed to fetch messages"
        };
    }
}
async function reopenGrievance(input) {
    try {
        // 1. Check authentication and authorization
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized: Please log in"
            };
        }
        // Get user roles
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        // Check if user has GRIEVANCE:UPDATE permission
        const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
        if (!hasPermission) {
            return {
                success: false,
                error: "Unauthorized: You don't have permission to reopen grievances"
            };
        }
        // 2. Validate input
        const { reopenGrievanceSchema } = await __turbopack_context__.A("[project]/lib/schemas/grievances.ts [app-rsc] (ecmascript, async loader)");
        const validatedInput = reopenGrievanceSchema.parse(input);
        // 3. Get grievance and verify status
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: validatedInput.grievanceId
            },
            select: {
                id: true,
                status: true,
                assignedToId: true
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        // Check if user is assigned to this grievance (unless they're an admin)
        const isAdmin = roleNames.includes("privy_cgp_admin");
        if (!isAdmin && grievance.assignedToId !== session.user.id) {
            return {
                success: false,
                error: "You can only reopen grievances assigned to you"
            };
        }
        // Only allow reopening from RESOLVED or CLOSED status
        if (grievance.status !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED && grievance.status !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED) {
            return {
                success: false,
                error: "Only resolved or closed grievances can be reopened"
            };
        }
        // 4. Update grievance status to REOPENED
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.update({
            where: {
                id: validatedInput.grievanceId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].REOPENED,
                updatedAt: new Date()
            }
        });
        // 5. Create reopened event
        const { createReopenedEvent } = await __turbopack_context__.A("[project]/lib/services/grievance-events.ts [app-rsc] (ecmascript, async loader)");
        await createReopenedEvent({
            grievanceId: validatedInput.grievanceId,
            reason: validatedInput.reason,
            performedByUserId: session.user.id,
            performedByName: session.user.name || session.user.email || "Unknown",
            previousStatus: grievance.status
        });
        // 6. Revalidate paths
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/grievances");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/grievances/${validatedInput.grievanceId}`);
        return {
            success: true,
            message: "Grievance reopened successfully"
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in reopenGrievance", {
            error: error
        });
        if (error.name === "ZodError") {
            return {
                success: false,
                error: "Validation failed",
                details: error.errors
            };
        }
        return {
            success: false,
            error: "Failed to reopen grievance. Please try again."
        };
    }
}
async function reopenGrievanceByPrincipal(token, input) {
    try {
        // 1. Verify the DPRM token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
        const dataPrincipalId = tokenPayload.data_principal_id;
        // 2. Validate input
        const { reopenGrievanceByPrincipalSchema } = await __turbopack_context__.A("[project]/lib/schemas/grievances.ts [app-rsc] (ecmascript, async loader)");
        const validatedInput = reopenGrievanceByPrincipalSchema.parse({
            ...input,
            token
        });
        // 3. Get grievance and verify ownership
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: validatedInput.grievanceId
            },
            select: {
                id: true,
                status: true,
                dataPrincipalId: true,
                metadata: true
            }
        });
        if (!grievance) {
            return {
                success: false,
                error: "Grievance not found"
            };
        }
        // Verify the principal owns this grievance
        if (grievance.dataPrincipalId !== dataPrincipalId) {
            return {
                success: false,
                error: "Unauthorized: This grievance doesn't belong to you"
            };
        }
        // Only allow reopening from RESOLVED or CLOSED status
        if (grievance.status !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED && grievance.status !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED) {
            return {
                success: false,
                error: "Only resolved or closed grievances can be reopened"
            };
        }
        // 4. Update grievance status to REOPENED
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.update({
            where: {
                id: validatedInput.grievanceId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].REOPENED,
                updatedAt: new Date()
            }
        });
        // 5. Create reopened event
        const { createReopenedByPrincipalEvent } = await __turbopack_context__.A("[project]/lib/services/grievance-events.ts [app-rsc] (ecmascript, async loader)");
        await createReopenedByPrincipalEvent({
            grievanceId: validatedInput.grievanceId,
            reason: validatedInput.reason,
            dataPrincipalId: dataPrincipalId,
            dataPrincipalName: grievance.metadata?.name || "Data Principal",
            previousStatus: grievance.status
        });
        // 6. Revalidate paths
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/principal/dprm/${token}/grievances`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/principal/dprm/${token}/grievances/${validatedInput.grievanceId}`);
        return {
            success: true,
            message: "Grievance reopened successfully"
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in reopenGrievanceByPrincipal", {
            error: error
        });
        if (error.message === "TOKEN_EXPIRED") {
            return {
                success: false,
                error: "Your session has expired"
            };
        }
        if (error.message === "INVALID_TOKEN") {
            return {
                success: false,
                error: "Invalid access token"
            };
        }
        if (error.name === "ZodError") {
            return {
                success: false,
                error: "Validation failed",
                details: error.errors
            };
        }
        return {
            success: false,
            error: "Failed to reopen grievance. Please try again."
        };
    }
}
async function uploadGrievanceAttachment(file, messageId, token) {
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("GCS Upload: Starting upload", {
            messageId
        });
        // Import dependencies (lazy import to avoid circular deps)
        const { StorageFactory } = await __turbopack_context__.A("[project]/lib/services/storage/storage-factory.ts [app-rsc] (ecmascript, async loader)");
        const { fileUploadSchema, sanitizeFileName } = await __turbopack_context__.A("[project]/lib/schemas/file-upload.ts [app-rsc] (ecmascript, async loader)");
        // 1. Authenticate user
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        const isAgent = !!session?.user;
        const isPrincipal = !isAgent && !!token;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Upload: Auth check", {
            isAgent,
            isPrincipal
        });
        if (!isAgent && !isPrincipal) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Upload: Unauthorized - no valid auth");
            return {
                error: "Unauthorized"
            };
        }
        // 2. Validate token if principal
        let dataPrincipalId;
        if (isPrincipal && token) {
            try {
                const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
                dataPrincipalId = tokenPayload.data_principal_id;
            } catch (error) {
                if (error.message === "TOKEN_EXPIRED") {
                    return {
                        error: "Your session has expired"
                    };
                }
                return {
                    error: "Invalid access token"
                };
            }
        }
        // 3. Get message and validate access
        const message = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceMessage.findUnique({
            where: {
                id: messageId
            },
            include: {
                grievance: true
            }
        });
        if (!message) {
            return {
                error: "Message not found"
            };
        }
        // 4. Check permissions
        if (isPrincipal) {
            // Principal can only upload to their own grievances
            if (message.grievance.dataPrincipalId !== dataPrincipalId) {
                const isGuardian = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findFirst({
                    where: {
                        dataPrincipalId: message.grievance.dataPrincipalId,
                        majorDataPrincipalId: dataPrincipalId
                    }
                });
                if (!isGuardian) {
                    return {
                        error: "Unauthorized"
                    };
                }
            }
        } else if (isAgent) {
            // Agent must be assigned to the grievance
            if (message.grievance.assignedToId !== session.user.id) {
                return {
                    error: "You are not assigned to this grievance"
                };
            }
        }
        // 5. Validate file
        if (!file) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Upload: No file provided");
            return {
                error: "No file provided"
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Upload: File received", {
            fileName: file.name,
            fileSize: file.size,
            fileType: file.type
        });
        // Check if file is actually a File object and has content
        if (!(file instanceof File)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Upload: File is not a File instance", {
                fileType: typeof file,
                fileString: Object.prototype.toString.call(file)
            });
            return {
                error: "Invalid file object"
            };
        }
        if (!file.name || file.name.trim() === "") {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Upload: File has no name");
            return {
                error: "File has no name"
            };
        }
        if (file.size === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Upload: File size is 0");
            return {
                error: "File is empty"
            };
        }
        // Validate file properties
        const validation = fileUploadSchema.safeParse({
            fileName: file.name,
            mimeType: file.type,
            fileSize: file.size
        });
        if (!validation.success) {
            const firstError = validation.error.issues[0];
            return {
                error: firstError?.message || "Invalid file"
            };
        }
        // 6. Check attachment count limit
        const existingAttachments = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceAttachment.count({
            where: {
                messageId
            }
        });
        const { FILE_UPLOAD_CONFIG } = await __turbopack_context__.A("[project]/lib/schemas/file-upload.ts [app-rsc] (ecmascript, async loader)");
        if (existingAttachments >= FILE_UPLOAD_CONFIG.MAX_FILES_PER_MESSAGE) {
            return {
                error: `Maximum ${FILE_UPLOAD_CONFIG.MAX_FILES_PER_MESSAGE} files per message`
            };
        }
        // 7. Convert file to buffer
        let arrayBuffer;
        let buffer;
        try {
            arrayBuffer = await file.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
            if (buffer.length === 0) {
                return {
                    error: "File buffer is empty"
                };
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug("GCS Upload: File converted to buffer", {
                fileName: file.name,
                fileSize: file.size,
                bufferLength: buffer.length
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Upload: Error converting file to buffer", {
                error
            });
            return {
                error: "Failed to read file content"
            };
        }
        // 8. Upload to storage
        const storage = StorageFactory.getInstance();
        const sanitizedName = sanitizeFileName(file.name);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("GCS Upload: Starting storage upload", {
            folder: `grievances/${message.grievanceId}`,
            sanitizedName
        });
        const uploadResult = await storage.upload({
            file: buffer,
            fileName: sanitizedName,
            mimeType: file.type,
            folder: `grievances/${message.grievanceId}`
        });
        // 9. Save to database
        const attachment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceAttachment.create({
            data: {
                messageId,
                fileKey: uploadResult.fileKey,
                fileName: file.name,
                fileSize: uploadResult.size,
                mimeType: uploadResult.mimeType
            }
        });
        // 10. Revalidate paths
        if (isPrincipal && token) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/principal/dprm/${token}/grievances/${message.grievanceId}/chat`);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/grievances/my-tickets`);
        }
        return {
            success: true,
            data: {
                id: attachment.id,
                fileName: attachment.fileName,
                fileSize: attachment.fileSize,
                mimeType: attachment.mimeType,
                url: uploadResult.url
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("GCS Upload: Caught error", {
            message: error?.message,
            stack: error?.stack,
            name: error?.name,
            error: error
        });
        return {
            error: error?.message || "Failed to upload file. Please try again."
        };
    }
}
async function getAttachmentUrl(attachmentId, token) {
    try {
        const { StorageFactory } = await __turbopack_context__.A("[project]/lib/services/storage/storage-factory.ts [app-rsc] (ecmascript, async loader)");
        // 1. Authenticate user
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        const isAgent = !!session?.user;
        const isPrincipal = !isAgent && !!token;
        if (!isAgent && !isPrincipal) {
            return {
                error: "Unauthorized"
            };
        }
        // 2. Validate token if principal
        let dataPrincipalId;
        if (isPrincipal && token) {
            try {
                const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
                dataPrincipalId = tokenPayload.data_principal_id;
            } catch (error) {
                if (error.message === "TOKEN_EXPIRED") {
                    return {
                        error: "Your session has expired"
                    };
                }
                return {
                    error: "Invalid access token"
                };
            }
        }
        // 3. Get attachment with message and grievance
        const attachment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceAttachment.findUnique({
            where: {
                id: attachmentId
            },
            include: {
                message: {
                    include: {
                        grievance: true
                    }
                }
            }
        });
        if (!attachment) {
            return {
                error: "Attachment not found"
            };
        }
        // 4. Check permissions
        if (isPrincipal) {
            if (attachment.message.grievance.dataPrincipalId !== dataPrincipalId) {
                const isGuardian = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findFirst({
                    where: {
                        dataPrincipalId: attachment.message.grievance.dataPrincipalId,
                        majorDataPrincipalId: dataPrincipalId
                    }
                });
                if (!isGuardian) {
                    return {
                        error: "Unauthorized"
                    };
                }
            }
        } else if (isAgent) {
            if (attachment.message.grievance.assignedToId !== session.user.id) {
                return {
                    error: "You are not assigned to this grievance"
                };
            }
        }
        // 5. Generate URL
        const storage = StorageFactory.getInstance();
        const url = await storage.getUrl(attachment.fileKey, 3600); // 1 hour expiry
        return {
            success: true,
            data: {
                url
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Get attachment URL error", {
            error: error
        });
        return {
            error: "Failed to get file URL"
        };
    }
}
async function deleteAttachment(attachmentId, token) {
    try {
        const { StorageFactory } = await __turbopack_context__.A("[project]/lib/services/storage/storage-factory.ts [app-rsc] (ecmascript, async loader)");
        // 1. Authenticate user
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        const isAgent = !!session?.user;
        const isPrincipal = !isAgent && !!token;
        if (!isAgent && !isPrincipal) {
            return {
                error: "Unauthorized"
            };
        }
        // 2. Validate token if principal
        let dataPrincipalId;
        if (isPrincipal && token) {
            try {
                const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
                dataPrincipalId = tokenPayload.data_principal_id;
            } catch (error) {
                if (error.message === "TOKEN_EXPIRED") {
                    return {
                        error: "Your session has expired"
                    };
                }
                return {
                    error: "Invalid access token"
                };
            }
        }
        // 3. Get attachment with message and grievance
        const attachment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceAttachment.findUnique({
            where: {
                id: attachmentId
            },
            include: {
                message: {
                    include: {
                        grievance: true
                    }
                }
            }
        });
        if (!attachment) {
            return {
                error: "Attachment not found"
            };
        }
        // 4. Check permissions
        if (isPrincipal) {
            if (attachment.message.grievance.dataPrincipalId !== dataPrincipalId) {
                return {
                    error: "Unauthorized"
                };
            }
        } else if (isAgent) {
            if (attachment.message.grievance.assignedToId !== session.user.id) {
                return {
                    error: "You are not assigned to this grievance"
                };
            }
        }
        // 5. Delete from storage (best effort - don't fail if storage delete fails)
        try {
            const storage = StorageFactory.getInstance();
            await storage.delete(attachment.fileKey);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to delete from storage", {
                error: error
            });
        // Continue with database deletion even if storage deletion fails
        }
        // 6. Delete from database
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceAttachment.delete({
            where: {
                id: attachmentId
            }
        });
        // 7. Revalidate paths
        if (isPrincipal && token) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/principal/dprm/${token}/grievances/${attachment.message.grievanceId}/chat`);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/grievances/my-tickets`);
        }
        return {
            success: true,
            message: "Attachment deleted successfully"
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Delete attachment error", {
            error: error
        });
        return {
            error: "Failed to delete attachment"
        };
    }
}
async function getGrievanceAttachments(grievanceId, token) {
    try {
        // 1. Authenticate user
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        const isAgent = !!session?.user;
        const isPrincipal = !isAgent && !!token;
        if (!isAgent && !isPrincipal) {
            return {
                error: "Unauthorized"
            };
        }
        // 2. Validate token if principal
        let dataPrincipalId;
        if (isPrincipal && token) {
            try {
                const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
                dataPrincipalId = tokenPayload.data_principal_id;
            } catch (error) {
                if (error.message === "TOKEN_EXPIRED") {
                    return {
                        error: "Your session has expired"
                    };
                }
                return {
                    error: "Invalid access token"
                };
            }
        }
        // 3. Get grievance and check permissions
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: grievanceId
            }
        });
        if (!grievance) {
            return {
                error: "Grievance not found"
            };
        }
        if (isPrincipal) {
            if (grievance.dataPrincipalId !== dataPrincipalId) {
                return {
                    error: "Unauthorized"
                };
            }
        } else if (isAgent) {
            if (grievance.assignedToId !== session.user.id) {
                return {
                    error: "You are not assigned to this grievance"
                };
            }
        }
        // 4. Get all attachments for this grievance
        const attachments = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievanceAttachment.findMany({
            where: {
                message: {
                    grievanceId
                }
            },
            include: {
                message: {
                    select: {
                        id: true,
                        createdAt: true,
                        authorType: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return {
            success: true,
            data: attachments
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Get grievance attachments error", {
            error: error
        });
        return {
            error: "Failed to get attachments"
        };
    }
}
async function submitGrievanceFeedback(input) {
    try {
        // 1. Validate input
        const validatedInput = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitGrievanceFeedbackSchema"].parse(input);
        const { grievanceId, token, rating, reasons, comment } = validatedInput;
        // 2. Verify the DPRM token
        const tokenPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDprmToken"])(token);
        const dataPrincipalId = tokenPayload.data_principal_id;
        // 3. Get the grievance and verify ownership
        const grievance = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findUnique({
            where: {
                id: grievanceId
            },
            select: {
                id: true,
                dataPrincipalId: true,
                status: true,
                feedback: true
            }
        });
        if (!grievance) {
            return {
                error: "Grievance not found"
            };
        }
        if (grievance.dataPrincipalId !== dataPrincipalId) {
            const isGuardian = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findFirst({
                where: {
                    dataPrincipalId: grievance.dataPrincipalId,
                    majorDataPrincipalId: dataPrincipalId
                }
            });
            if (!isGuardian) {
                return {
                    error: "You are not authorized to provide feedback for this grievance"
                };
            }
        }
        // 4. Check if grievance is in a state that can receive feedback
        // Feedback can be submitted when grievance is RESOLVED or CLOSED
        if (grievance.status !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED && grievance.status !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED) {
            return {
                error: "Feedback can only be submitted for resolved or closed grievances"
            };
        }
        // 5. Check if feedback already exists
        if (grievance.feedback) {
            return {
                error: "Feedback has already been submitted for this grievance"
            };
        }
        // 6. Prepare feedback data
        const feedbackData = {
            rating,
            reasons: reasons || [],
            comment: comment || null,
            submittedAt: new Date().toISOString()
        };
        // 7. Update the grievance with feedback
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.update({
            where: {
                id: grievanceId
            },
            data: {
                feedback: feedbackData
            }
        });
        // 8. Revalidate paths
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/grievances/admin");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/principal/dprm/${token}/grievances`);
        return {
            success: true,
            message: "Thank you for your feedback!"
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Submit grievance feedback error", {
            error: error
        });
        return {
            error: "Failed to submit feedback"
        };
    }
}
async function getAdminFeedbackAnalytics() {
    try {
        // 1. Check authentication and authorization
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "Unauthorized: Please log in"
            };
        }
        // Get user roles
        const userRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userRole.findMany({
            where: {
                userId: session.user.id
            },
            include: {
                role: true
            }
        });
        const roleNames = userRoles.map((ur)=>ur.role.name);
        // Check if user has GRIEVANCE:READ permission
        const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"])(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].GRIEVANCE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        if (!hasPermission) {
            return {
                success: false,
                error: "Unauthorized: You don't have permission to view analytics"
            };
        }
        // 2. Fetch all grievances with feedback
        const grievancesWithFeedback = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.findMany({
            where: {
                feedback: {
                    not: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull
                },
                status: {
                    in: [
                        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED,
                        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED
                    ]
                }
            },
            select: {
                id: true,
                feedback: true,
                category: true,
                status: true,
                createdAt: true,
                resolvedAt: true,
                assignedTo: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });
        // 3. Get total resolved/closed grievances for response rate
        const totalResolvedClosed = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].grievance.count({
            where: {
                status: {
                    in: [
                        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED,
                        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED
                    ]
                }
            }
        });
        // 4. Calculate statistics
        const feedbackCount = grievancesWithFeedback.length;
        const responseRate = totalResolvedClosed > 0 ? Math.round(feedbackCount / totalResolvedClosed * 100) : 0;
        // Parse feedback data
        const feedbackData = grievancesWithFeedback.map((g)=>({
                ...g,
                feedback: g.feedback
            }));
        // Calculate rating statistics
        const ratings = feedbackData.map((g)=>g.feedback.rating);
        const avgRating = ratings.length > 0 ? ratings.reduce((sum, r)=>sum + r, 0) / ratings.length : 0;
        // Rating distribution
        const ratingDistribution = {
            star1: ratings.filter((r)=>r === 1).length,
            star2: ratings.filter((r)=>r === 2).length,
            star3: ratings.filter((r)=>r === 3).length,
            star4: ratings.filter((r)=>r === 4).length,
            star5: ratings.filter((r)=>r === 5).length
        };
        // Satisfaction metrics
        const positiveCount = ratings.filter((r)=>r >= 4).length;
        const neutralCount = ratings.filter((r)=>r === 3).length;
        const negativeCount = ratings.filter((r)=>r <= 2).length;
        const satisfactionRate = ratings.length > 0 ? Math.round(positiveCount / ratings.length * 100) : 0;
        // Collect all reasons
        const allReasons = [];
        feedbackData.forEach((g)=>{
            if (g.feedback.reasons) {
                allReasons.push(...g.feedback.reasons);
            }
        });
        // Count reason frequency
        const reasonCounts = {};
        allReasons.forEach((reason)=>{
            reasonCounts[reason] = (reasonCounts[reason] || 0) + 1;
        });
        // Sort reasons by frequency
        const topReasons = Object.entries(reasonCounts).sort(([, a], [, b])=>b - a).slice(0, 10).map(([reason, count])=>({
                reason,
                count
            }));
        // Agent performance (group by assignedTo)
        const agentStats = {};
        feedbackData.forEach((g)=>{
            if (g.assignedTo) {
                const agentId = g.assignedTo.id;
                if (!agentStats[agentId]) {
                    agentStats[agentId] = {
                        agentId,
                        agentName: g.assignedTo.name || g.assignedTo.email,
                        totalFeedback: 0,
                        avgRating: 0,
                        ratings: []
                    };
                }
                agentStats[agentId].ratings.push(g.feedback.rating);
                agentStats[agentId].totalFeedback++;
            }
        });
        // Calculate averages and sort by rating
        const agentLeaderboard = Object.values(agentStats).map((agent)=>({
                agentId: agent.agentId,
                agentName: agent.agentName,
                totalFeedback: agent.totalFeedback,
                avgRating: agent.ratings.reduce((sum, r)=>sum + r, 0) / agent.ratings.length,
                positiveCount: agent.ratings.filter((r)=>r >= 4).length,
                neutralCount: agent.ratings.filter((r)=>r === 3).length,
                negativeCount: agent.ratings.filter((r)=>r <= 2).length
            })).sort((a, b)=>b.avgRating - a.avgRating);
        // Category-wise feedback
        const categoryStats = {};
        feedbackData.forEach((g)=>{
            const category = g.category;
            if (!categoryStats[category]) {
                categoryStats[category] = {
                    category,
                    feedbackCount: 0,
                    avgRating: 0
                };
            }
            categoryStats[category].feedbackCount++;
        });
        const categoryBreakdown = Object.values(categoryStats);
        // Calculate avg rating per category
        feedbackData.forEach((g)=>{
            const category = g.category;
            if (categoryStats[category]) {
                const categoryFeedback = feedbackData.filter((f)=>f.category === category);
                const categoryRatings = categoryFeedback.map((f)=>f.feedback.rating);
                categoryStats[category].avgRating = categoryRatings.reduce((sum, r)=>sum + r, 0) / categoryRatings.length;
            }
        });
        // 5. Return analytics data
        return {
            success: true,
            data: {
                overview: {
                    totalFeedback: feedbackCount,
                    totalResolved: totalResolvedClosed,
                    responseRate,
                    avgRating: Number(avgRating.toFixed(2)),
                    satisfactionRate,
                    positiveCount,
                    neutralCount,
                    negativeCount
                },
                ratingDistribution,
                topReasons,
                agentLeaderboard,
                categoryBreakdown
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getAdminFeedbackAnalytics", {
            error: error
        });
        return {
            success: false,
            error: "Failed to fetch feedback analytics"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createGrievance,
    getGrievancesForPrincipal,
    getAllGrievances,
    getGrievanceById,
    assignGrievance,
    getGrievanceStats,
    getAvailableAgents,
    getGrievanceWithMessages,
    addGrievanceMessage,
    updateGrievanceStatus,
    getGrievanceForPrincipal,
    addPrincipalMessage,
    getMyAssignedGrievances,
    markGrievanceSeenByAgent,
    markGrievanceSeenByPrincipal,
    getGrievanceTimeline,
    getGrievanceMessages,
    getPrincipalGrievanceMessages,
    reopenGrievance,
    reopenGrievanceByPrincipal,
    uploadGrievanceAttachment,
    getAttachmentUrl,
    deleteAttachment,
    getGrievanceAttachments,
    submitGrievanceFeedback,
    getAdminFeedbackAnalytics
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createGrievance, "6074f5d0e1c6021a6c59fc402abedb5916b5f9df5a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGrievancesForPrincipal, "607a973b141d138d7cb82673d98279e8fece519e80", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllGrievances, "40590f85d005c60bc60e54f150cbfd3dc89422af23", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGrievanceById, "40241f5ec67ef3cc15d99962dc3d16463db57225d3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(assignGrievance, "409207574a3047d75827b09accb31a3710292e33b9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGrievanceStats, "00637fa19632a3a0253e6c6ec30668ab6fe9dc9046", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAvailableAgents, "00ffe892559a659ccf7ce0c7e80f4b14439716f00b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGrievanceWithMessages, "40a02ab4ff60696682ae9c58641b54cbc389e2eb21", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addGrievanceMessage, "408bf653552f844137a6649e6fd510e1ea8586da69", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateGrievanceStatus, "7f4c4f801cc0421b1a11d61f9e3313f0bf35401347", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGrievanceForPrincipal, "609b8419ed31dc0813efda2518434fad89d305aefb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addPrincipalMessage, "60df83acfdd2fa591b289c78df69d9823f35cfea33", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMyAssignedGrievances, "0084c0942718b6e54643a977ab1b32794214686bac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markGrievanceSeenByAgent, "401a356d33c90fb346d570d11e758f823221af4fe5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markGrievanceSeenByPrincipal, "606e00b2cc7dc9d7b996955b3e9a69d8a4a8fb5278", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGrievanceTimeline, "70d861b3a9d9639a407c32b0c3b662c11680056c40", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGrievanceMessages, "70121e9560a36c62712f07d1371d129113679a0485", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPrincipalGrievanceMessages, "781967ba1d73a968624be3fdf30d4e4b78c7a2ea7e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reopenGrievance, "40b97cd4ea9d534df5c68fb4f052c694faa7d43293", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reopenGrievanceByPrincipal, "607a30b37dc802efb14c7a0b1a4df734aff5134aab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadGrievanceAttachment, "700f134e9a0e03b8a6980ebe8a07baad0272d475e3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAttachmentUrl, "60f1008992fb47d09d44e03556992dd2a506434e29", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAttachment, "60c671f01cbc2fa2b7dd8bfc9719bb38fccd29d1ab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGrievanceAttachments, "60966d185ac41363f0479b1b22d73cb3d488625f56", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitGrievanceFeedback, "40efd3e6eff04f3274f4a581ca96b6fa0b2a8532c5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminFeedbackAnalytics, "00a1d6b7183d7ca41be6bc77bf3d35ed530d8772eb", null);
}),
"[project]/.next-internal/server/app/cms/principal/dprm/[access_token]/grievances/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/dprm.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/grievances.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dprm.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/grievances.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/cms/principal/dprm/[access_token]/grievances/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/dprm.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/grievances.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007ed7046051a367ea295f22958c88a5a2ad656873",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiduciaryConfig"],
    "409835b588d5b3762e3eac883d8d0e15dc28958d2e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMinorsForMajor"],
    "40b7859f1e87f7206f724f14ce47ee5928d4ed0e31",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDprmLinkForNotice"],
    "6074f5d0e1c6021a6c59fc402abedb5916b5f9df5a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createGrievance"],
    "6093e481902cc85dba78014a82db0c9f3b6cb1e60a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDprmLink"],
    "60cf1ceac35ad0699f3db3b7ac232419b40331c996",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessesForPrincipal"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$grievances$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cms/principal/dprm/[access_token]/grievances/new/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/dprm.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/grievances.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dprm.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$grievances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/grievances.ts [app-rsc] (ecmascript)");
}),
"[project]/app/cms/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/principal/dprm/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/principal/dprm/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/invalid-link-page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "InvalidLinkPage",
    ()=>InvalidLinkPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-rsc] (ecmascript) <export default as AlertTriangle>");
;
;
;
function InvalidLinkPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
            className: "max-w-md w-full mx-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-4 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-6 h-6 text-orange-600"
                            }, void 0, false, {
                                fileName: "[project]/components/invalid-link-page.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/invalid-link-page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl font-semibold text-gray-900",
                            children: "Invalid Link"
                        }, void 0, false, {
                            fileName: "[project]/components/invalid-link-page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/invalid-link-page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-4",
                            children: "This link is invalid or has been tampered with. Please verify the link and try again."
                        }, void 0, false, {
                            fileName: "[project]/components/invalid-link-page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-orange-50 border border-orange-200 rounded-lg p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-orange-700",
                                children: "If you continue to experience issues, please contact the data fiduciary for assistance."
                            }, void 0, false, {
                                fileName: "[project]/components/invalid-link-page.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/invalid-link-page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/invalid-link-page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/invalid-link-page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/invalid-link-page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/link-expired-page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "LinkExpiredPage",
    ()=>LinkExpiredPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-rsc] (ecmascript) <export default as AlertCircle>");
;
;
;
function LinkExpiredPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
            className: "max-w-md w-full mx-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-4 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-6 h-6 text-red-600"
                            }, void 0, false, {
                                fileName: "[project]/components/link-expired-page.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/link-expired-page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl font-semibold text-gray-900",
                            children: "Link Expired"
                        }, void 0, false, {
                            fileName: "[project]/components/link-expired-page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/link-expired-page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-4",
                            children: "This notice link has expired and is no longer accessible. Please request a new link from the data fiduciary."
                        }, void 0, false, {
                            fileName: "[project]/components/link-expired-page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 rounded-lg p-3 flex items-start space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/components/link-expired-page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-700",
                                    children: "For security purposes, notice links have limited validity periods."
                                }, void 0, false, {
                                    fileName: "[project]/components/link-expired-page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/link-expired-page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/link-expired-page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/link-expired-page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/link-expired-page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/services/activity-service.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
    "cleanupOldActivityLogs",
    ()=>cleanupOldActivityLogs,
    "getRecentActivity",
    ()=>getRecentActivity,
    "trackDprmSessionActivity",
    ()=>trackDprmSessionActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/services.ts [app-rsc] (ecmascript)");
;
;
;
;
async function trackDprmSessionActivity(tokenPayload) {
    const { data_principal_id, session_id } = tokenPayload;
    if (!data_principal_id || !session_id) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Missing required fields for activity tracking.");
        return;
    }
    try {
        // --- OPERATION 1: Create the LOGIN event if it doesn't exist ---
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].principalActivityLog.create({
            data: {
                dataPrincipalId: data_principal_id,
                sessionId: session_id,
                eventType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTIVITY_EVENT_TYPES"].LOGIN
            }
        }).catch((error)=>{
            // SAFETY: P2002 error - unique constraint violation, login already exists
            if (error.code !== "P2002") {
                throw error;
            }
        });
        // --- OPERATION 2: Upsert the LOGOUT event ---
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].principalActivityLog.upsert({
            where: {
                sessionId_eventType: {
                    sessionId: session_id,
                    eventType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTIVITY_EVENT_TYPES"].LOGOUT
                }
            },
            update: {
                updatedAt: new Date()
            },
            create: {
                dataPrincipalId: data_principal_id,
                sessionId: session_id,
                eventType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTIVITY_EVENT_TYPES"].LOGOUT
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Activity checkpoint successful", {
            dataPrincipalId: data_principal_id,
            sessionId: session_id
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to track DPRM session activity", {
            error: error.message,
            stack: error.stack
        });
    }
}
async function getRecentActivity(dataPrincipalId, limit = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTIVITY_LOG_CONFIG"].DEFAULT_LIMIT) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].principalActivityLog.findMany({
            where: {
                dataPrincipalId
            },
            orderBy: {
                createdAt: "desc"
            },
            take: limit
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to fetch recent activity", {
            error: error.message,
            stack: error.stack
        });
        return [];
    }
}
async function cleanupOldActivityLogs(daysToKeep = 90) {
    try {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].principalActivityLog.deleteMany({
            where: {
                createdAt: {
                    lt: cutoffDate
                }
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Cleaned up old activity logs", {
            count: result.count
        });
        return result.count;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Failed to cleanup old activity logs", {
            error: error.message,
            stack: error.stack
        });
        return 0;
    }
}
}),
"[project]/components/hoc/with-dprm-session-handler.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "getRemainingSessionTime",
    ()=>getRemainingSessionTime,
    "isDprmSessionValid",
    ()=>isDprmSessionValid,
    "validateDprmSessionFromParams",
    ()=>validateDprmSessionFromParams,
    "withDprmSessionHandler",
    ()=>withDprmSessionHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$invalid$2d$link$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/invalid-link-page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$link$2d$expired$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/link-expired-page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$activity$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/services/activity-service.ts [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
/**
 * Verifies the DPRM JWT and returns a structured session context.
 * Throws specific errors for expired or invalid tokens.
 */ async function getSessionContext(accessToken) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(accessToken, secret);
        // Validate that the token has the required fields for a session
        if (!payload.data_principal_id || !payload.session_id) {
            throw new Error("INVALID_TOKEN_STRUCTURE");
        }
        const tokenPayload = payload;
        // The token is valid, so we create the session context object
        return {
            tokenPayload,
            accessToken,
            dataPrincipalId: tokenPayload.data_principal_id,
            sessionId: tokenPayload.session_id,
            sessionExpiresAt: new Date(tokenPayload.exp * 1000)
        };
    } catch (error) {
        if (error.code === "ERR_JWT_EXPIRED") {
            throw new Error("TOKEN_EXPIRED");
        }
        // For any other error, treat it as invalid
        throw new Error("INVALID_TOKEN");
    }
}
function withDprmSessionHandler(WrappedComponent) {
    // This is an async Server Component
    return async function DprmSessionValidatedPage(props) {
        const { params, ...otherProps } = props;
        const resolvedParams = await params;
        const { access_token } = resolvedParams;
        try {
            // 1. Validate the token and create the session context in one step.
            const sessionContext = await getSessionContext(access_token);
            // 2. LOG THE ACTIVITY. This is the new, integrated step.
            // We run this as a side effect. We don't need to await it because we
            // don't want to block the page render if activity logging fails.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$activity$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trackDprmSessionActivity"])(sessionContext.tokenPayload).catch((err)=>{
                // Log the error but don't fail the page load
                console.error("Background activity tracking failed:", err);
            });
            // 3. Prepare props and render the actual page component.
            const validatedProps = {
                ...otherProps,
                params: resolvedParams,
                sessionContext
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(WrappedComponent, {
                ...validatedProps
            }, void 0, false, {
                fileName: "[project]/components/hoc/with-dprm-session-handler.tsx",
                lineNumber: 131,
                columnNumber: 14
            }, this);
        } catch (error) {
            // 4. Handle any errors from getSessionContext.
            if (error.message === "TOKEN_EXPIRED") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$link$2d$expired$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkExpiredPage"], {}, void 0, false, {
                    fileName: "[project]/components/hoc/with-dprm-session-handler.tsx",
                    lineNumber: 135,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$invalid$2d$link$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidLinkPage"], {}, void 0, false, {
                fileName: "[project]/components/hoc/with-dprm-session-handler.tsx",
                lineNumber: 137,
                columnNumber: 14
            }, this);
        }
    };
}
async function validateDprmSessionFromParams(params) {
    const { access_token } = await params;
    try {
        const sessionContext = await getSessionContext(access_token);
        return {
            success: true,
            sessionContext,
            error: null
        };
    } catch (error) {
        return {
            success: false,
            sessionContext: null,
            error: error.message
        };
    }
}
function isDprmSessionValid(sessionContext) {
    const now = new Date();
    return now < sessionContext.sessionExpiresAt;
}
function getRemainingSessionTime(sessionContext) {
    const now = new Date();
    const remaining = sessionContext.sessionExpiresAt.getTime() - now.getTime();
    return Math.max(0, Math.floor(remaining / (1000 * 60))); // in minutes
}
}),
"[project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx <module evaluation>", "default");
}),
"[project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx", "default");
}),
"[project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$grievances$2f$new$2f$_components$2f$new$2d$grievance$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$grievances$2f$new$2f$_components$2f$new$2d$grievance$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$grievances$2f$new$2f$_components$2f$new$2d$grievance$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/principal/dprm/[access_token]/grievances/new/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dprm.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hoc$2f$with$2d$dprm$2d$session$2d$handler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hoc/with-dprm-session-handler.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$grievances$2f$new$2f$_components$2f$new$2d$grievance$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/grievances/new/_components/new-grievance-client.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function NewGrievancePage({ sessionContext, params, searchParams }) {
    const { access_token } = params;
    const resolvedSearchParams = await searchParams;
    const minorDataPrincipalId = resolvedSearchParams?.minor_data_principal_id;
    const dataPrincipalId = minorDataPrincipalId || sessionContext.dataPrincipalId;
    // Fetch business processes the principal has consent for
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessesForPrincipal"])(access_token, minorDataPrincipalId);
    if (!result.success) {
        console.error("Failed to fetch business processes:", result.error);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$grievances$2f$new$2f$_components$2f$new$2d$grievance$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        token: access_token,
        dataPrincipalId: dataPrincipalId,
        businessProcesses: result.data || []
    }, dataPrincipalId, false, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/grievances/new/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hoc$2f$with$2d$dprm$2d$session$2d$handler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDprmSessionHandler"])(NewGrievancePage);
}),
"[project]/app/cms/principal/dprm/[access_token]/grievances/new/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/grievances/new/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c59a1d8d._.js.map