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
"[project]/lib/consentsJSONHasher.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "ConsentsJSONHasher",
    ()=>ConsentsJSONHasher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
class ConsentsJSONHasher {
    /**
   * Processes the consent data, generates hashes for each action, and converts to sorted JSON.
   * Matches Elixir: build_consent_records_with_hash
   */ static buildConsentRecordsWithHash(data) {
        try {
            const { history, taxonomy_version } = data;
            const allConsentsWithHash = [];
            // Map through history items (Business Processes)
            const historyJson = history.map((item)=>{
                const { json, events } = this.processHistoryItemToJson(item, taxonomy_version);
                allConsentsWithHash.push(...events);
                return json;
            });
            // Elixir logic assumes single root if array, extracting [history_json]
            const creatorData = historyJson.length === 1 ? historyJson[0] : historyJson;
            return {
                creator_data: creatorData,
                artifact_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateHash"])(creatorData),
                consents_with_artifact_hash: allConsentsWithHash
            };
        } catch (e) {
            console.error("JSON conversion failed", e);
            throw new Error("JSON conversion failed");
        }
    }
    static processHistoryItemToJson(item, taxonomyVersion) {
        const { purposesJson, consentsWithHash } = this.processPurposesToJson(item.processing_purposes, item, taxonomyVersion);
        const json = {
            business_process: {
                business_process_code: item.business_process_code,
                business_process_version: String(item.business_process_version),
                policy_code: item.policy_code,
                policy_name: item.policy_name,
                policy_version: String(item.policy_version),
                processing_purposes: purposesJson
            }
        };
        if (taxonomyVersion != null) {
            json.data_fiduciary_id = item.data_fiduciary_id;
        }
        return {
            json,
            events: consentsWithHash
        };
    }
    static processPurposesToJson(purposes, historyItem, taxonomyVersion) {
        const allEvents = [];
        const purposesJson = purposes.map((purpose)=>{
            const { purposeJson, purposeEvents } = this.processPurposeToJson(purpose, historyItem, taxonomyVersion);
            allEvents.push(...purposeEvents);
            return purposeJson;
        });
        return {
            purposesJson,
            consentsWithHash: allEvents
        };
    }
    static processPurposeToJson(purpose, historyItem, taxonomyVersion) {
        const { entitiesJson, consentsWithHash } = this.processEntitiesToJson(purpose.history_logs, historyItem, purpose, taxonomyVersion);
        const json = {
            processing_purpose_code: purpose.processing_purpose_code,
            consent_purpose_code: purpose.consent_purpose_code,
            consent_purpose_version: String(purpose.consent_purpose_version)
        };
        if (taxonomyVersion == null) {
            json.user_attributes = entitiesJson;
        } else {
            json.history_logs = entitiesJson;
        }
        return {
            purposeJson: json,
            purposeEvents: consentsWithHash
        };
    }
    static processEntitiesToJson(entities, historyItem, purpose, taxonomyVersion) {
        const allEvents = [];
        const entitiesJson = entities.map((entity)=>{
            const { entityJson, entityEvents } = this.processEntityToJson(entity, historyItem, purpose, taxonomyVersion);
            allEvents.push(...entityEvents);
            return entityJson;
        });
        return {
            entitiesJson,
            consentsWithHash: allEvents
        };
    }
    static processEntityToJson(entity, historyItem, purpose, taxonomyVersion) {
        const { actionsJson, consentsWithHash } = this.processActionsToJson(entity.actions, historyItem, purpose, entity, taxonomyVersion);
        const json = {
            reference_id: entity.reference_id,
            language: entity.language,
            status: entity.status,
            data_principal_id: entity.data_principal_id,
            minor_data_principal_id: entity.minor_data_principal_id,
            inserted_at: entity.inserted_at,
            updated_at: entity.updated_at,
            expires_at: entity.expires_at,
            actions: actionsJson
        };
        if (taxonomyVersion == null) {
            // Legacy logic: when taxonomy_version is nil, user_attributes only has one entry
            const [userAttributeName] = entity.user_attributes || [];
            json.data_fiduciary_id = entity.data_fiduciary_id;
            json.user_attribute_name = userAttributeName;
        } else {
            json.user_attributes = entity.user_attributes;
        }
        return {
            entityJson: json,
            entityEvents: consentsWithHash
        };
    }
    static processActionsToJson(actions, historyItem, purpose, entity, taxonomyVersion) {
        const allEvents = [];
        const actionsJson = actions.map((action)=>{
            const { json, event } = this.processActionToJson(action, historyItem, purpose, entity, taxonomyVersion);
            allEvents.push(event);
            return json;
        });
        return {
            actionsJson,
            consentsWithHash: allEvents
        };
    }
    static processActionToJson(action, historyItem, purpose, entity, taxonomyVersion) {
        // Generate the specific payload for the hash
        const consents = this.createActionEvent(historyItem, purpose, entity, action, taxonomyVersion);
        const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateHash"])(consents);
        // Needed for insertion in immudb (from Elixir context)
        const consentsWithHash = {
            ...consents,
            hash
        };
        const json = {
            type: action.action,
            consent_id: action.consent_id,
            performed_at: action.performed_at,
            performed_by: action.performed_by,
            data_integrity: {
                hash: hash
            }
        };
        return {
            json,
            event: consentsWithHash
        };
    }
    static createActionEvent(historyItem, purpose, entity, action, taxonomyVersion) {
        const json = {
            action: action.action,
            business_process_code: historyItem.business_process_code,
            business_process_version: historyItem.business_process_version,
            consent_id: action.consent_id,
            consent_purpose_code: purpose.consent_purpose_code,
            consent_purpose_version: purpose.consent_purpose_version,
            data_principal_id: entity.data_principal_id,
            language: entity.language,
            minor_data_principal_id: entity.minor_data_principal_id,
            performed_at: action.performed_at,
            performed_by: action.performed_by,
            policy_code: historyItem.policy_code,
            policy_version: historyItem.policy_version,
            processing_purpose_code: purpose.processing_purpose_code,
            reference_id: entity.reference_id
        };
        if (taxonomyVersion == null) {
            const [userAttributeName] = entity.user_attributes || [];
            json.user_attribute_name = userAttributeName;
            json.data_fiduciary_id = entity.data_fiduciary_id;
        } else {
            json.user_attributes = entity.user_attributes;
        }
        return json;
    }
}
}),
"[project]/lib/noticeUpdates.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "NoticeUpdates",
    ()=>NoticeUpdates
]);
class NoticeUpdates {
    /**
   * Merges business process and purpose names into timeline data.
   * Matches Elixir: modify_timeline_data/2
   */ static buildMessageBrokerEvent(consentData, timelineDataWithHashes, message, metadata) {
        const updatedTimelineData = this.modifyTimelineData(consentData, timelineDataWithHashes);
        return {
            data_fiduciary_id: message.data_fiduciary_id,
            eid: message.eid,
            type: message.type,
            data_principal_id: message.data_principal_id,
            reference_id: message.reference_id,
            business_process_code: message.business_process_code,
            business_process_version: message.business_process_version,
            timestamp: message.timestamp,
            metadata: metadata,
            timeline_data_with_hashes: updatedTimelineData,
            consent_ids: message.consent_ids,
            performed_by: message.performed_by,
            notice_metadata: message.notice_metadata,
            taxonomy_version: consentData.taxonomy_version
        };
    }
    static modifyTimelineData(consentData, timelineDataWithHashes) {
        if (!consentData || !timelineDataWithHashes) return timelineDataWithHashes;
        const lookupMap = this.buildLookupMap(consentData);
        // Deep clone to avoid mutation side effects
        const updatedData = JSON.parse(JSON.stringify(timelineDataWithHashes));
        // In the hashed structure, 'business_process' is usually the root property
        if (updatedData.business_process) {
            const bpCode = updatedData.business_process.business_process_code;
            const bpData = lookupMap[bpCode] || {};
            const ppLookup = bpData.processing_purposes || {};
            // Enrich Processing Purposes
            if (updatedData.business_process.processing_purposes) {
                updatedData.business_process.processing_purposes = updatedData.business_process.processing_purposes.map((pp)=>{
                    const ppCode = pp.processing_purpose_code;
                    const extraInfo = ppLookup[ppCode] || {};
                    return {
                        ...pp,
                        ...extraInfo
                    };
                });
            }
            // Enrich Business Process Name
            updatedData.business_process.business_process_name = bpData.business_process_name;
        }
        return updatedData;
    }
    static buildLookupMap(consentData) {
        const history = consentData.history || [];
        const map = {};
        history.forEach((item)=>{
            const bpCode = item.business_process_code;
            const bpName = item.business_process_name;
            const purposes = item.processing_purposes || [];
            const ppLookup = {};
            purposes.forEach((pp)=>{
                ppLookup[pp.processing_purpose_code] = {
                    consent_purpose_name: pp.consent_purpose_name,
                    processing_purpose_name: pp.processing_purpose_name
                };
            });
            map[bpCode] = {
                business_process_name: bpName,
                processing_purposes: ppLookup
            };
        });
        return map;
    }
}
}),
"[project]/lib/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ // src/lib/config.ts
__turbopack_context__.s([
    "Config",
    ()=>Config
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)"); // 1. Prevents client-side usage
;
const Config = {
    /**
   * Gets an environment variable or returns the default.
   */ get: (key, defaultValue)=>{
        return process.env[key.toUpperCase()] || defaultValue;
    },
    /**
   * Gets an environment variable or throws if missing.
   * Useful for critical keys like Private Keys.
   */ getOrThrow: (key)=>{
        const val = process.env[key.toUpperCase()];
        if (!val) {
            throw new Error(`[Configuration] Missing required environment variable: ${key}`);
        }
        return val;
    },
    // 2. Environment Variables Mapping (Cleaner access)
    env: {
        universe: process.env.UNIVERSE || "dev",
        gcpGsaSigner: process.env.GCP_GSA_SIGNER,
        rsaPrivateKey: process.env.RSA_PRIVATE_KEY,
        rsaPublicKey: process.env.RSA_PUBLIC_KEY,
        consentArtifactBucket: process.env.GCS_BUCKET_NAME || "my-consent-bucket",
        uploadUrlExpiry: parseInt(process.env.UPLOAD_URL_EXPIRY_TIME || "3600", 10)
    },
    // 3. Mock Data (Only for local dev if env vars are missing)
    mock: {
        rsaPrivateKey: `-----BEGIN PRIVATE KEY-----\nMOCK_KEY_FOR_DEV...\n-----END PRIVATE KEY-----`
    }
};
}),
"[project]/lib/kmsService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "KMSService",
    ()=>KMSService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-rsc] (ecmascript)");
;
class KMSService {
    /**
   * Fetches the private key from kms service (or env vars) for encryption
   */ static async getSecretKey() {
        try {
            // In production, this might call an external KMS API or Vault
            // For Node/Prisma apps, this usually lives in secure ENV vars
            const privateKey = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Config"].get('RSA_PRIVATE_KEY') || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Config"].mock.rsaPrivateKey;
            if (!privateKey) {
                throw new Error("RSA Private Key not found configuration");
            }
            return {
                private_key: privateKey,
                // Public key is often not needed for signing, strictly speaking, but included for parity
                public_key: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Config"].get('RSA_PUBLIC_KEY', '')
            };
        } catch (error) {
            console.error("KMS Error", error);
            throw new Error(`KMS Service failed: ${error.message}`);
        }
    }
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
"[project]/lib/signatureService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "Signatures",
    ()=>Signatures
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
class Signatures {
    /**
   * Signs the hashes and attaches signatures to the data object
   */ static buildFinalDataWithSignatures(dataPayload, artifactHash, dbHashes, privateKey) {
        try {
            // 1. Sign the Artifact Hash
            const artifactSignature = this.signData(artifactHash, privateKey);
            // 2. Sign DB Hashes (if they exist)
            let dbHashSignature = null;
            if (dbHashes) {
                const dbHashesString = JSON.stringify(dbHashes);
                dbHashSignature = this.signData(dbHashesString, privateKey);
            }
            // 3. Append Signatures to the Payload (Creating "Final Data")
            // We clone the data to avoid mutation
            const finalData = JSON.parse(JSON.stringify(dataPayload));
            // In the Elixir XML logic, it appended <artifact_signature> tags.
            // In JSON, we add them to the root or metadata section.
            // We will add them to the root to match the logic of "modifying the doc".
            finalData.artifact_signature = artifactSignature;
            finalData.signature_generation_timestamp = new Date().toISOString();
            if (dbHashSignature) {
                finalData.db_hash_signature = dbHashSignature;
            }
            return {
                final_data: finalData,
                artifact_signature: artifactSignature,
                db_hash_signature: dbHashSignature
            };
        } catch (error) {
            console.error("Signature Generation Failed", error);
            throw error;
        }
    }
    static signData(data, privateKey) {
        const strData = Buffer.from(JSON.stringify(data));
        const sign = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].sign("SHA256", strData, privateKey);
        // Convert returned buffer to base64
        return sign.toString("base64");
    }
}
}),
"[project]/lib/uploadConsentArtifacts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "UploadConsentArtifacts",
    ()=>UploadConsentArtifacts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$kmsService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/kmsService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$storage$2d$factory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/storage-factory.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$signatureService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/signatureService.ts [app-rsc] (ecmascript)");
;
;
;
class UploadConsentArtifacts {
    /**
   * Orchestrates the signing and uploading process.
   * Matches: handle_event
   */ static async handleEvent(message) {
        try {
            const { timeline_data_with_hashes, metadata, data_fiduciary_id, reference_id, data_principal_id, business_process_code, business_process_version } = message;
            // 1. Get Private Key
            const keys = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$kmsService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KMSService"].getSecretKey();
            const privateKey = keys.private_key;
            // 2. Build Signatures (Sign payload + hashes)
            const signatureResult = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$signatureService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Signatures"].buildFinalDataWithSignatures(timeline_data_with_hashes, metadata.artifact_hash, metadata.db_hashes, privateKey);
            const { final_data, artifact_signature, db_hash_signature } = signatureResult;
            // 3. Update Metadata for Storage Headers
            const updatedMetadata = this.buildMetadata(metadata, {
                artifact_signature,
                db_hash_signature
            });
            // 4. Prepare Context for Object Naming
            const noticeContext = {
                data_fiduciary_id,
                reference_id,
                data_principal_id,
                business_process_code,
                business_process_version,
                content_type: "application/json"
            };
            const fileBuffer = Buffer.from(JSON.stringify(final_data));
            const storage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$storage$2d$factory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorageFactory"].getInstance();
            // Construct the file path manually (or import the helper if you prefer)
            const objectName = `meity/artifacts/${noticeContext.business_process_code}-${noticeContext.reference_id}-${noticeContext.data_principal_id}.json`;
            const uploadResult = await storage.upload({
                file: fileBuffer,
                fileName: objectName,
                mimeType: "application/json",
                // explicit 'folder' might be redundant if you included it in fileName,
                // but keeping it based on your specific StorageFactory implementation:
                folder: `artifacts`,
                doesNotRequireUniqueName: true
            });
            return {
                status: "ok",
                result: "success"
            };
        } catch (error) {
            console.error(`[UploadConsentArtifacts] Error: ${error.message}`);
            throw error;
        }
    }
    static buildMetadata(originalMetadata, signatures) {
        const newMeta = {
            notice_id: originalMetadata.notice_id,
            artifact_hash: originalMetadata.artifact_hash,
            artifact_signature: signatures.artifact_signature
        };
        if (signatures.db_hash_signature) {
            // Note: GCS headers have size limits. If db_hashes is large, do not put it in headers.
            // Elixir code put "db_hashes" in metadata, careful with size.
            // newMeta.db_hashes = originalMetadata.db_hashes;
            newMeta.db_hash_signature = signatures.db_hash_signature;
        }
        return newMeta;
    }
}
}),
"[project]/lib/services/artifact-creation-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "generateArtifactPayload",
    ()=>generateArtifactPayload,
    "sendForArtifactCreation",
    ()=>sendForArtifactCreation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consentsJSONHasher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/consentsJSONHasher.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$noticeUpdates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/noticeUpdates.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadConsentArtifacts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/uploadConsentArtifacts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function sendForArtifactCreation(dataPrincipalId, referenceId, businessProcessCode, operation = "created") {
    const artifactPayload = await processAndLogConsentData(dataPrincipalId, referenceId, businessProcessCode);
    // Trigger CONSENT_ARTIFACTS_CREATED_OR_UPDATED webhook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_ARTIFACTS_CREATED_OR_UPDATED, {
        data_principal_id: dataPrincipalId,
        reference_id: referenceId,
        business_process_code: businessProcessCode,
        artifact_payload: artifactPayload,
        updated_at: new Date().toISOString(),
        operation: operation
    }).catch((webhookError)=>{
        console.error("Failed to trigger CONSENT_ARTIFACTS_CREATED_OR_UPDATED webhook:", webhookError);
    });
}
async function generateArtifactPayload(dataPrincipalId, referenceId, businessProcessCode) {
    try {
        // A. Get Data (using the service we built in Step 4)
        const consentData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchConsentHistoryFromDB"])(dataPrincipalId, referenceId, businessProcessCode);
        // B. Hash Data (using the logic from Step 2)
        const hashResult = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consentsJSONHasher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConsentsJSONHasher"].buildConsentRecordsWithHash(consentData);
        // C. Prepare Payload Metadata
        const messagePayload = {
            eid: `evt_${Date.now()}`,
            type: "grant",
            data_principal_id: dataPrincipalId,
            reference_id: referenceId,
            business_process_code: consentData.history[0]?.business_process_code,
            timestamp: new Date().toISOString(),
            consent_ids: [],
            performed_by: "self",
            notice_metadata: {}
        };
        // D. Enrich Data
        const finalMessage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$noticeUpdates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoticeUpdates"].buildMessageBrokerEvent(consentData, hashResult.creator_data, messagePayload, {
            artifact_hash: hashResult.artifact_hash,
            db_hashes: {}
        });
        return finalMessage;
    } catch (error) {
        console.error("Error generating artifact payload:", error);
        throw error;
    }
}
async function processAndLogConsentData(dataPrincipalId, referenceId, businessProcessCode) {
    try {
        const finalMessage = await generateArtifactPayload(dataPrincipalId, referenceId, businessProcessCode);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadConsentArtifacts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UploadConsentArtifacts"].handleEvent(finalMessage);
        return finalMessage;
    } catch (error) {
        console.error("Error in processing consent data:", error);
        throw error;
    }
}
}),
"[project]/lib/services/consent-version-diff-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ // FILE: lib/services/consent-version-diff-service.ts
__turbopack_context__.s([
    "calculateBusinessProcessDiff",
    ()=>calculateBusinessProcessDiff,
    "getConsentsWithVersionDiffs",
    ()=>getConsentsWithVersionDiffs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
;
/**
 * Get the latest version of a business process by code
 */ async function getLatestBusinessProcessVersion(code, currentVersion) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
        where: {
            code,
            version: {
                gt: currentVersion
            },
            status: "published"
        },
        orderBy: {
            version: "desc"
        },
        include: {
            businessProcessRules: {
                include: {
                    consentPurpose: true,
                    processingPurpose: {
                        include: {
                            purposeOfProcessing: true
                        }
                    }
                }
            },
            businessProcessToConsentPurposes: {
                include: {
                    consentPurpose: true
                }
            }
        }
    });
}
async function calculateBusinessProcessDiff(currentBpPublicId) {
    // Fetch current BP with all relations
    const currentBp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
        where: {
            publicId: currentBpPublicId
        },
        include: {
            businessProcessRules: {
                include: {
                    consentPurpose: true,
                    processingPurpose: {
                        include: {
                            purposeOfProcessing: true
                        }
                    }
                }
            },
            businessProcessToConsentPurposes: {
                include: {
                    consentPurpose: true
                }
            }
        }
    });
    if (!currentBp) {
        throw new Error("Business process not found");
    }
    // Check for newer version
    const latestBp = await getLatestBusinessProcessVersion(currentBp.code, currentBp.version);
    if (!latestBp) {
        return {
            hasNewerVersion: false,
            currentBpId: currentBp.id.toString(),
            currentBpPublicId: currentBp.publicId,
            currentVersion: currentBp.version,
            latestBpId: null,
            latestBpPublicId: null,
            latestVersion: null,
            consentPurposes: [],
            translations: currentBp.translations || {},
            requiresAcknowledgement: false,
            changesSummary: {
                cpAdded: 0,
                cpRemoved: 0,
                ppAdded: 0,
                ppRemoved: 0,
                ppDescriptionChanged: 0,
                attributesAdded: 0,
                attributesRemoved: 0,
                rulesChanged: 0
            }
        };
    }
    // Group rules by consent purpose CODE (not publicId) to match across versions
    const currentCPMap = groupRulesByConsentPurposeCode(currentBp.businessProcessRules);
    const latestCPMap = groupRulesByConsentPurposeCode(latestBp.businessProcessRules);
    // Get consent durations by CODE
    const currentDurationsMap = new Map(currentBp.businessProcessToConsentPurposes.map((cp)=>[
            cp.consentPurpose.code,
            cp.consentDuration
        ]));
    const latestDurationsMap = new Map(latestBp.businessProcessToConsentPurposes.map((cp)=>[
            cp.consentPurpose.code,
            cp.consentDuration
        ]));
    const allCPCodes = new Set([
        ...currentCPMap.keys(),
        ...latestCPMap.keys()
    ]);
    const consentPurposes = [];
    let cpAdded = 0, cpRemoved = 0, ppAdded = 0, ppRemoved = 0, ppDescriptionChanged = 0, attributesAdded = 0, attributesRemoved = 0, rulesChanged = 0;
    let requiresAcknowledgement = false;
    for (const cpCode of allCPCodes){
        const currentRules = currentCPMap.get(cpCode) || [];
        const latestRules = latestCPMap.get(cpCode) || [];
        let cpStatus = "unchanged";
        if (currentRules.length === 0) {
            cpStatus = "added";
            cpAdded++;
        } else if (latestRules.length === 0) {
            cpStatus = "removed";
            cpRemoved++;
        }
        // Get CP details
        const currentCP = currentRules[0]?.consentPurpose;
        const latestCP = latestRules[0]?.consentPurpose;
        const cpName = latestCP?.name || currentCP?.name || "";
        const cpPublicId = latestCP?.publicId || currentCP?.publicId || "";
        const cpVersion = currentCP?.version || 1;
        const latestCpVersion = latestCP?.version || null;
        // Compare processing purposes within this consent purpose
        const ppDiffs = compareProcessingPurposes(currentRules, latestRules);
        // Count changes
        ppDiffs.forEach((pp)=>{
            if (pp.status === "added") ppAdded++;
            if (pp.status === "removed") ppRemoved++;
            if (pp.descriptionChanged) ppDescriptionChanged++;
            pp.userAttributes.forEach((attr)=>{
                if (attr.status === "added") attributesAdded++;
                if (attr.status === "removed") attributesRemoved++;
            });
            if (pp.ruleChanges.length > 0) {
                rulesChanged += pp.ruleChanges.length;
                // Optional to Mandatory or Reconsentable to Non-reconsentable requires acknowledgement
                pp.ruleChanges.forEach((change)=>{
                    if (change.field === "mandatory" && !change.oldValue && change.newValue || change.field === "reconsentableByPrincipal" && change.oldValue && !change.newValue) {
                        requiresAcknowledgement = true;
                    }
                });
            }
        });
        consentPurposes.push({
            cpId: cpCode,
            cpPublicId: cpPublicId,
            cpCode: cpCode,
            cpName,
            cpVersion,
            latestCpVersion,
            status: cpStatus,
            processingPurposes: ppDiffs,
            translations: latestCP?.translations || currentCP?.translations || {}
        });
    }
    return {
        hasNewerVersion: true,
        currentBpId: currentBp.id.toString(),
        currentBpPublicId: currentBp.publicId,
        currentVersion: currentBp.version,
        latestBpId: latestBp.id,
        latestBpPublicId: latestBp.publicId,
        latestVersion: latestBp.version,
        consentPurposes,
        translations: latestBp.translations || currentBp.translations || {},
        requiresAcknowledgement,
        changesSummary: {
            cpAdded,
            cpRemoved,
            ppAdded,
            ppRemoved,
            ppDescriptionChanged,
            attributesAdded,
            attributesRemoved,
            rulesChanged
        }
    };
}
/**
 * Group rules by consent purpose CODE (not publicId)
 * This allows matching consent purposes across versions
 */ function groupRulesByConsentPurposeCode(rules) {
    const map = new Map();
    rules.forEach((rule)=>{
        const cpCode = rule.consentPurpose.code;
        if (!map.has(cpCode)) {
            map.set(cpCode, []);
        }
        map.get(cpCode).push(rule);
    });
    return map;
}
/**
 * Compare processing purposes between two rule sets
 * Matches processing purposes by their publicId (assumes PP doesn't have versions)
 */ function compareProcessingPurposes(currentRules, latestRules) {
    // Map by purposeOfProcessingId - this is the stable identifier
    const currentPPMap = new Map(currentRules.map((r)=>[
            r.processingPurpose.purposeOfProcessingId,
            r
        ]));
    const latestPPMap = new Map(latestRules.map((r)=>[
            r.processingPurpose.purposeOfProcessingId,
            r
        ]));
    const allPurposeOfProcessingIds = new Set([
        ...currentPPMap.keys(),
        ...latestPPMap.keys()
    ]);
    const diffs = [];
    for (const purposeOfProcessingId of allPurposeOfProcessingIds){
        const currentRule = currentPPMap.get(purposeOfProcessingId);
        const latestRule = latestPPMap.get(purposeOfProcessingId);
        let status = "unchanged";
        let descriptionChanged = false;
        let oldDescription;
        let ppName = "";
        let ppDescription = "";
        let ppPublicId = "";
        let mandatory = false;
        let rulePublicId;
        const ruleChanges = [];
        const userAttributes = [];
        let translations = {};
        if (!currentRule && latestRule) {
            // New processing purpose added
            status = "added";
            ppName = latestRule.processingPurpose.name;
            mandatory = latestRule.mandatory;
            ppDescription = latestRule.processingPurpose.description || "";
            ppPublicId = latestRule.processingPurpose.publicId;
            rulePublicId = latestRule.publicId;
            translations = latestRule.processingPurpose.translations || {};
            // All attributes are new
            latestRule.processingPurpose.userAttributeNames.forEach((attr)=>{
                userAttributes.push({
                    name: attr,
                    status: "added"
                });
            });
        } else if (currentRule && !latestRule) {
            // Processing purpose was removed
            status = "removed";
            ppName = currentRule.processingPurpose.name;
            mandatory = currentRule.mandatory;
            ppDescription = currentRule.processingPurpose.description || "";
            ppPublicId = currentRule.processingPurpose.publicId;
            rulePublicId = currentRule.publicId;
            translations = currentRule.processingPurpose.translations || {};
            // All attributes are removed (deleted)
            currentRule.processingPurpose.userAttributeNames.forEach((attr)=>{
                userAttributes.push({
                    name: attr,
                    status: "removed"
                });
            });
        } else if (currentRule && latestRule) {
            // Processing purpose exists in both versions
            // Use the LATEST version's data
            ppName = latestRule.processingPurpose.name;
            mandatory = currentRule.mandatory;
            ppDescription = latestRule.processingPurpose.description || "";
            ppPublicId = latestRule.processingPurpose.publicId;
            rulePublicId = latestRule.publicId;
            translations = latestRule.processingPurpose.translations || {};
            // Check description change
            const currentDesc = currentRule.processingPurpose.description || "";
            const latestDesc = latestRule.processingPurpose.description || "";
            if (currentDesc !== latestDesc) {
                descriptionChanged = true;
                oldDescription = currentDesc;
            }
            // Compare user attributes
            const currentAttrs = new Set(currentRule.processingPurpose.userAttributeNames || []);
            const latestAttrs = new Set(latestRule.processingPurpose.userAttributeNames || []);
            // Get ALL attributes (union of current and latest)
            const allAttributes = new Set([
                ...currentAttrs,
                ...latestAttrs
            ]);
            allAttributes.forEach((attr)=>{
                const existsInCurrent = currentAttrs.has(attr);
                const existsInLatest = latestAttrs.has(attr);
                if (existsInCurrent && existsInLatest) {
                    // Attribute unchanged
                    userAttributes.push({
                        name: attr,
                        status: "unchanged"
                    });
                } else if (!existsInCurrent && existsInLatest) {
                    // Attribute added in new version
                    userAttributes.push({
                        name: attr,
                        status: "added"
                    });
                } else if (existsInCurrent && !existsInLatest) {
                    // Attribute removed/deleted in new version
                    userAttributes.push({
                        name: attr,
                        status: "removed"
                    });
                }
            });
            // Compare rule properties (mandatory, reconsentable, revocable)
            if (currentRule.mandatory !== latestRule.mandatory) {
                ruleChanges.push({
                    field: "mandatory",
                    oldValue: currentRule.mandatory,
                    newValue: latestRule.mandatory,
                    description: latestRule.mandatory ? "Consent is now Mandatory" : "Consent is now Non-Mandatory"
                });
            }
            if (currentRule.reconsentableByPrincipal !== latestRule.reconsentableByPrincipal) {
                ruleChanges.push({
                    field: "reconsentableByPrincipal",
                    oldValue: currentRule.reconsentableByPrincipal,
                    newValue: latestRule.reconsentableByPrincipal,
                    description: latestRule.reconsentableByPrincipal ? "Consent is now re-consentable" : "Consent is now non-re-consentable"
                });
            }
            if (currentRule.revocableByPrincipal !== latestRule.revocableByPrincipal) {
                ruleChanges.push({
                    field: "revocableByPrincipal",
                    oldValue: currentRule.revocableByPrincipal,
                    newValue: latestRule.revocableByPrincipal,
                    description: latestRule.revocableByPrincipal ? "Consent is now revocable" : "Consent is now non-revocable"
                });
            }
            // If nothing changed, keep status as "unchanged"
            // This prevents showing duplicate entries
            if (!descriptionChanged && ruleChanges.length === 0 && !userAttributes.some((attr)=>attr.status !== "unchanged")) {
                status = "unchanged";
            }
        }
        diffs.push({
            ppId: purposeOfProcessingId.toString(),
            ppPublicId: ppPublicId,
            ppName,
            ppDescription,
            purposeOfProcessingId,
            status,
            descriptionChanged,
            oldDescription,
            userAttributes,
            ruleChanges,
            rulePublicId,
            mandatory,
            translations
        });
    }
    return diffs;
}
async function getConsentsWithVersionDiffs(dataPrincipalId, majorDataPrincipalId) {
    // Get all active consents
    const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
        where: {
            dataPrincipalId: dataPrincipalId,
            ...majorDataPrincipalId && {
                majorDataPrincipalId
            },
            status: "accepted"
        },
        include: {
            businessProcess: true,
            businessProcessRule: {
                include: {
                    consentPurpose: true,
                    processingPurpose: true
                }
            }
        }
    });
    const consentsWithDiffs = [];
    // Group consents by business process to avoid duplicate calculations
    const bpMap = new Map();
    consents.forEach((consent)=>{
        const bpId = consent.businessProcessId;
        if (!bpMap.has(bpId)) {
            bpMap.set(bpId, []);
        }
        bpMap.get(bpId).push(consent);
    });
    // Calculate diff once per business process
    for (const [bpId, bpConsents] of bpMap){
        const diff = await calculateBusinessProcessDiff(bpId);
        if (diff.hasNewerVersion) {
            bpConsents.forEach((consent)=>{
                consentsWithDiffs.push({
                    consent,
                    diff
                });
            });
        }
    }
    return consentsWithDiffs;
}
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"783c9f621a55c09216c692aed4505aec5ca13551d7":"revokeConsent","78a8b47df2c893264a23d3a45377d407598c8a90a5":"updateConsent"},"",""] */ __turbopack_context__.s([
    "revokeConsent",
    ()=>revokeConsent,
    "updateConsent",
    ()=>updateConsent
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$artifact$2d$creation$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/artifact-creation-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$version$2d$diff$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consent-version-diff-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function updateConsent(dataPrincipalId, currentBpPublicId, payload, majorDataPrincipalId) {
    try {
        const { selectedProcessingPurposes } = payload;
        // 1. Fetch Active Consents
        const activeConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                dataPrincipalId,
                ...majorDataPrincipalId && {
                    majorDataPrincipalId
                },
                businessProcessId: currentBpPublicId,
                status: "accepted"
            },
            include: {
                businessProcessRule: {
                    include: {
                        processingPurpose: true
                    }
                }
            }
        });
        // 2. Diff Snapshot
        let bpDiff = null;
        try {
            bpDiff = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$version$2d$diff$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateBusinessProcessDiff"])(currentBpPublicId);
        } catch (e) {}
        // 3. Get Target BP
        const currentBp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                publicId: currentBpPublicId
            }
        });
        if (!currentBp) throw new Error("Current BP not found");
        const latestBp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
            where: {
                code: currentBp.code,
                status: "published",
                version: {
                    gt: currentBp.version
                }
            },
            orderBy: {
                version: "desc"
            },
            include: {
                businessProcessRules: {
                    include: {
                        processingPurpose: true,
                        consentPurpose: true
                    }
                }
            }
        });
        const targetBp = latestBp || await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                publicId: currentBpPublicId
            },
            include: {
                businessProcessRules: {
                    include: {
                        processingPurpose: true,
                        consentPurpose: true
                    }
                }
            }
        });
        if (!targetBp) throw new Error("Target BP not found");
        const requestId = `upd_${Date.now()}`;
        // Track for Email
        const updatedProcessingPurposes = [];
        // 4. Execute Transaction
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            const processedNewRuleIds = new Set();
            // =========================================================
            // PASS 1: Handle EXISTING Consents (Update, Migrate, or Revoke)
            // =========================================================
            for (const oldConsent of activeConsents){
                const pp = oldConsent.businessProcessRule.processingPurpose;
                const stableId = String(pp.purposeOfProcessingId);
                const newRule = targetBp?.businessProcessRules.find((r)=>String(r.processingPurpose.purposeOfProcessingId) === stableId);
                const isExplicitlySelected = selectedProcessingPurposes.some((sel)=>String(sel) === stableId || String(sel) === pp.publicId);
                if (newRule) {
                    processedNewRuleIds.add(stableId);
                    // Track for Email
                    updatedProcessingPurposes.push({
                        cpName: newRule.consentPurpose.name,
                        ppName: newRule.processingPurpose.name
                    });
                    await tx.consent.update({
                        where: {
                            publicId: oldConsent.publicId
                        },
                        data: {
                            status: "revoked",
                            updatedAt: new Date()
                        }
                    });
                    // --- DETECT ATTRIBUTE CHANGES ---
                    const oldAttrs = new Set(oldConsent.userAttributeNames);
                    const newAttrs = new Set(newRule.processingPurpose.userAttributeNames);
                    const addedAttrs = newRule.processingPurpose.userAttributeNames.filter((a)=>!oldAttrs.has(a));
                    const removedAttrs = oldConsent.userAttributeNames.filter((a)=>!newAttrs.has(a));
                    const hasAttributeChanges = addedAttrs.length > 0 || removedAttrs.length > 0;
                    // Timestamps Logic
                    const isFreshConsent = isExplicitlySelected || targetBp.version === currentBp.version || hasAttributeChanges;
                    const newConsent = await tx.consent.create({
                        data: {
                            parentConsentId: oldConsent.publicId,
                            requestId,
                            requestType: isFreshConsent ? "version_update" : "version_migration",
                            referenceId: oldConsent.referenceId,
                            dataPrincipalId: oldConsent.dataPrincipalId,
                            businessProcessId: targetBp.publicId,
                            businessProcessRuleId: newRule.publicId,
                            consentPurposeId: newRule.consentPurpose.publicId,
                            processingPurposeId: newRule.processingPurpose.publicId,
                            businessUnitId: String(oldConsent.businessUnitId),
                            userAttributeNames: newRule.processingPurpose.userAttributeNames,
                            language: oldConsent.language,
                            status: "accepted",
                            insertedAt: isFreshConsent ? new Date() : oldConsent.insertedAt,
                            expiresAt: isFreshConsent ? undefined : oldConsent.expiresAt
                        }
                    });
                    // --- PREPARE AUDIT DETAILS ---
                    const auditDetails = {
                        previousConsentId: oldConsent.publicId,
                        reason: isFreshConsent ? "Terms Updated" : "Version Migration"
                    };
                    if (isFreshConsent) {
                        const attrDiffs = [
                            ...addedAttrs.map((name)=>({
                                    name,
                                    status: "added"
                                })),
                            ...removedAttrs.map((name)=>({
                                    name,
                                    status: "removed"
                                }))
                        ];
                        if (attrDiffs.length > 0) auditDetails.attributesDiff = attrDiffs;
                        if (bpDiff) {
                            const ppDiff = bpDiff.consentPurposes.flatMap((cp)=>cp.processingPurposes).find((diff)=>String(diff.purposeOfProcessingId) === stableId);
                            if (ppDiff) {
                                const changesText = [];
                                if (ppDiff.descriptionChanged) changesText.push("Description Changed");
                                ppDiff.ruleChanges.forEach((rc)=>changesText.push(rc.description));
                                if (changesText.length > 0) auditDetails.changes = changesText;
                            }
                        }
                    }
                    await tx.consentAuditTrail.create({
                        data: {
                            consentId: newConsent.publicId,
                            dataPrincipalId,
                            action: "VERSION_UPDATED",
                            actor: "data_principal",
                            details: auditDetails
                        }
                    });
                } else {
                    await revokeSingleConsent(tx, oldConsent, "Purpose removed in new version");
                }
            }
            // =========================================================
            // PASS 2: Handle NEWLY ADDED Rules
            // =========================================================
            if (targetBp && targetBp.businessProcessRules) {
                for (const rule of targetBp.businessProcessRules){
                    const ruleStableId = String(rule.processingPurpose.purposeOfProcessingId);
                    if (!processedNewRuleIds.has(ruleStableId)) {
                        const isSelected = selectedProcessingPurposes.some((sel)=>String(sel) === ruleStableId || String(sel) === rule.processingPurpose.publicId);
                        if (isSelected) {
                            // Track for Email
                            updatedProcessingPurposes.push({
                                cpName: rule.consentPurpose.name,
                                ppName: rule.processingPurpose.name
                            });
                            const newConsent = await tx.consent.create({
                                data: {
                                    requestId,
                                    requestType: "version_addition",
                                    referenceId: activeConsents[0]?.referenceId || `ref_${Date.now()}`,
                                    dataPrincipalId: dataPrincipalId,
                                    businessProcessId: targetBp.publicId,
                                    businessProcessRuleId: rule.publicId,
                                    consentPurposeId: rule.consentPurpose.publicId,
                                    processingPurposeId: rule.processingPurpose.publicId,
                                    businessUnitId: String(activeConsents[0]?.businessUnitId || targetBp.businessUnitId),
                                    userAttributeNames: rule.processingPurpose.userAttributeNames,
                                    language: activeConsents[0]?.language || "en",
                                    status: "accepted",
                                    insertedAt: new Date()
                                }
                            });
                            const allNewAttributes = rule.processingPurpose.userAttributeNames.map((attr)=>({
                                    name: attr,
                                    status: "added"
                                }));
                            await tx.consentAuditTrail.create({
                                data: {
                                    consentId: newConsent.publicId,
                                    dataPrincipalId,
                                    action: "VERSION_UPDATED",
                                    actor: "data_principal",
                                    details: {
                                        reason: "New Purpose Added",
                                        changes: [
                                            "New Processing Purpose Added"
                                        ],
                                        attributesDiff: allNewAttributes
                                    }
                                }
                            });
                        }
                    }
                }
            }
        }).then(async ()=>{
            if (activeConsents.length === 0) return;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$artifact$2d$creation$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendForArtifactCreation"])(activeConsents[0].dataPrincipalId, activeConsents[0].referenceId, currentBp.code, "updated");
        }).catch((artifactError)=>{
            console.error("Artifact Creation Error:", artifactError);
        });
        // --- NOTIFICATIONS & EMAILS (From Merged Code) ---
        // 1. Mark notifications as seen
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notification.updateMany({
            where: {
                dataPrincipalId: dataPrincipalId,
                type: {
                    in: [
                        "update",
                        "expiry"
                    ]
                },
                seen: false,
                metadata: {
                    path: [
                        "businessProcessId"
                    ],
                    equals: currentBpPublicId
                }
            },
            data: {
                seen: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/consent-wallet");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/notifications");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/consent-action-center");
        // 2. Send Email
        try {
            const { emailService } = await __turbopack_context__.A("[project]/lib/services/email/email-service.ts [app-rsc] (ecmascript, async loader)");
            const { generateDprmLink } = await __turbopack_context__.A("[project]/lib/services/dprm-service.ts [app-rsc] (ecmascript, async loader)");
            const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
                where: {
                    publicId: currentBpPublicId
                },
                select: {
                    id: true,
                    name: true
                }
            });
            if (!businessProcess) {
                console.warn(`Business process not found for publicId: ${currentBpPublicId}`);
            } else {
                const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findFirst({
                    where: {
                        dataPrincipalId,
                        businessProcessId: businessProcess.id
                    },
                    include: {
                        metadata: true
                    },
                    orderBy: {
                        createdAt: "desc"
                    }
                });
                if (notice) {
                    const metadata = notice.metadata.reduce((acc, item)=>{
                        acc[item.key] = item.value;
                        return acc;
                    }, {});
                    const principalEmail = metadata.email || metadata.Email;
                    const principalName = metadata.name || metadata.Name || "User";
                    if (principalEmail) {
                        const dprmLink = await generateDprmLink(dataPrincipalId, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
                        emailService.sendTemplatedEmail({
                            templateName: "consent-updated-successfully",
                            to: {
                                email: principalEmail,
                                name: principalName
                            },
                            variables: {
                                principalName,
                                businessProcessName: businessProcess.name,
                                updateDate: new Date().toLocaleDateString("en-GB"),
                                updatedPurposes: updatedProcessingPurposes,
                                dprmLink
                            }
                        }).catch((err)=>console.error(`Failed to send consent update email:`, err));
                    }
                }
            }
        } catch (emailError) {
            console.error("Failed to send consent update confirmation email:", emailError);
        }
        return {
            success: true
        };
    } catch (error) {
        console.error("Update Error:", error);
        return {
            success: false,
            error: "Failed to update consents"
        };
    }
}
async function revokeConsent(dataPrincipalId, serviceId, consentPublicIds, majorDataPrincipalId) {
    try {
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                processingPurposeId: {
                    in: consentPublicIds
                },
                dataPrincipalId,
                ...majorDataPrincipalId && {
                    majorDataPrincipalId
                },
                status: "accepted"
            },
            include: {
                businessProcessRule: {
                    include: {
                        consentPurpose: true,
                        processingPurpose: true
                    }
                }
            }
        });
        const withdrawnPurposes = [];
        const revokedConsentIds = [];
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            for (const consent of consents){
                const result = await revokeSingleConsent(tx, consent, "User revoked via wallet");
                revokedConsentIds.push(result.publicId);
                if (consent.businessProcessRule) {
                    withdrawnPurposes.push({
                        cpName: consent.businessProcessRule.consentPurpose?.name || "Unknown Purpose",
                        ppName: consent.businessProcessRule.processingPurpose?.name || "Unknown Processing"
                    });
                }
            }
        }).then(async ()=>{
            if (consents.length === 0) return;
            const bp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
                where: {
                    publicId: consents[0].businessProcessId
                }
            });
            if (!bp) return;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$artifact$2d$creation$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendForArtifactCreation"])(consents[0].dataPrincipalId, consents[0].referenceId, bp.code, "updated");
            // Trigger webhooks for all revoked consents (fire-and-forget)
            for (const consentId of revokedConsentIds){
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findUnique({
                    where: {
                        publicId: consentId
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
                }).then((consent)=>{
                    if (!consent) return;
                    const userAttributeName = consent.userAttributeNames.length > 0 ? consent.userAttributeNames[0] : null;
                    const dataProcessorIds = consent.processingPurpose.processingPurposeToDataProcessors.map((dp)=>dp.dataProcessor.ouId).filter((id)=>id !== null);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_REVOKED, {
                        business_process_code: consent.businessProcess.code,
                        business_process_version: consent.businessProcess.version,
                        consent_id: consent.publicId,
                        consent_purpose_code: consent.consentPurpose.code,
                        consent_purpose_version: consent.consentPurpose.version,
                        data_principal_id: consent.dataPrincipalId,
                        user_attribute_name: userAttributeName,
                        status: "consent_revoked",
                        selected_language: consent.language,
                        notice_id: consent.requestId,
                        parent_consent_id: consent.parentConsentId,
                        business_unit_code: consent.businessUnit.code,
                        processing_purpose_code: consent.processingPurpose.purposeOfProcessing.code,
                        reference_id: consent.referenceId,
                        inserted_at: consent.insertedAt.toISOString(),
                        updated_at: consent.updatedAt.toISOString(),
                        revoked_at: consent.updatedAt.toISOString(),
                        reason: "User revoked via wallet"
                    }, dataProcessorIds).catch((error)=>{
                        console.error(`Failed to trigger CONSENT_REVOKED webhook for ${consentId}:`, error);
                    });
                }).catch((error)=>{
                    console.error(`Failed to fetch consent ${consentId} for webhook:`, error);
                });
            }
        }).catch((artifactError)=>{
            console.error("Artifact Creation Error:", artifactError);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/consent-wallet");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/consent-action-center");
        // Send Email
        if (withdrawnPurposes.length > 0) {
            try {
                const { emailService } = await __turbopack_context__.A("[project]/lib/services/email/email-service.ts [app-rsc] (ecmascript, async loader)");
                const { generateDprmLink } = await __turbopack_context__.A("[project]/lib/services/dprm-service.ts [app-rsc] (ecmascript, async loader)");
                const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
                    where: {
                        publicId: serviceId
                    },
                    select: {
                        id: true,
                        name: true
                    }
                });
                if (businessProcess) {
                    const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findFirst({
                        where: {
                            dataPrincipalId,
                            businessProcessId: businessProcess.id
                        },
                        include: {
                            metadata: true
                        },
                        orderBy: {
                            createdAt: "desc"
                        }
                    });
                    if (notice) {
                        const metadata = notice.metadata.reduce((acc, item)=>{
                            acc[item.key] = item.value;
                            return acc;
                        }, {});
                        const principalEmail = metadata.email || metadata.Email;
                        const principalName = metadata.name || metadata.Name || "User";
                        if (principalEmail) {
                            const dprmLink = await generateDprmLink(dataPrincipalId, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)) + "/consent-action-center";
                            emailService.sendTemplatedEmail({
                                templateName: "consent-withdrawn-successfully",
                                to: {
                                    email: principalEmail,
                                    name: principalName
                                },
                                variables: {
                                    principalName,
                                    withdrawnPurposes,
                                    dprmLink,
                                    withdrawalDate: new Date().toLocaleDateString("en-US", {
                                        month: "2-digit",
                                        day: "2-digit",
                                        year: "numeric"
                                    }),
                                    organizationName: process.env.DATA_FIDUCIARY_NAME,
                                    organizationEmail: process.env.DATA_FIDUCIARY_CONTACT_EMAIL
                                }
                            }).catch((err)=>console.error("Failed to send consent withdrawal email:", err));
                        }
                    }
                }
            } catch (emailError) {
                console.error("Error preparing withdrawal email:", emailError);
            }
        }
        return {
            success: true
        };
    } catch (e) {
        return {
            success: false
        };
    }
}
async function revokeSingleConsent(tx, consent, reason) {
    await tx.consent.update({
        where: {
            publicId: consent.publicId
        },
        data: {
            status: "revoked",
            updatedAt: new Date()
        }
    });
    await tx.consentAuditTrail.create({
        data: {
            consentId: consent.publicId,
            dataPrincipalId: consent.dataPrincipalId,
            action: "REVOKED",
            actor: "data_principal",
            details: {
                reason
            }
        }
    });
    // Return consent details for webhook triggering
    return {
        publicId: consent.publicId,
        dataPrincipalId: consent.dataPrincipalId,
        businessProcessRuleId: consent.businessProcessRuleId
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateConsent,
    revokeConsent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateConsent, "78a8b47df2c893264a23d3a45377d407598c8a90a5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(revokeConsent, "783c9f621a55c09216c692aed4505aec5ca13551d7", null);
}),
"[project]/.next-internal/server/app/cms/principal/dprm/[access_token]/consent-action-center/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/dprm.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dprm.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-action-center/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/cms/principal/dprm/[access_token]/consent-action-center/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/dprm.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007ed7046051a367ea295f22958c88a5a2ad656873",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiduciaryConfig"],
    "409835b588d5b3762e3eac883d8d0e15dc28958d2e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMinorsForMajor"],
    "783c9f621a55c09216c692aed4505aec5ca13551d7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revokeConsent"],
    "78a8b47df2c893264a23d3a45377d407598c8a90a5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateConsent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cms/principal/dprm/[access_token]/consent-action-center/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/dprm.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/cms/principal/dprm/[access_token]/consent-action-center/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dprm.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-action-center/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/app/cms/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/principal/dprm/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/principal/dprm/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/services/consent-update-transform-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ // FILE: lib/services/consent-update-transform-service.ts
__turbopack_context__.s([
    "getTotalUpdateCount",
    ()=>getTotalUpdateCount,
    "getUpdateNotificationCount",
    ()=>getUpdateNotificationCount,
    "transformExpiringConsentsToUIData",
    ()=>transformExpiringConsentsToUIData,
    "transformProcessingPurpose",
    ()=>transformProcessingPurpose,
    "transformVersionDiffToUIData",
    ()=>transformVersionDiffToUIData
]);
function transformVersionDiffToUIData(consentsWithDiffs) {
    const services = {};
    // Group by business process to avoid processing the same BP diff multiple times
    const bpDiffMap = new Map();
    const bpServiceMap = new Map();
    consentsWithDiffs.forEach(({ consent, diff })=>{
        const bpId = consent.businessProcess.publicId;
        if (!bpDiffMap.has(bpId)) {
            bpDiffMap.set(bpId, diff);
            bpServiceMap.set(bpId, {
                id: consent.businessProcess.publicId,
                name: consent.businessProcess.name
            });
        }
    });
    // Process each unique business process once
    bpDiffMap.forEach((diff, bpId)=>{
        const serviceInfo = bpServiceMap.get(bpId);
        const serviceId = serviceInfo.id;
        const serviceName = serviceInfo.name;
        if (!services[serviceId]) {
            services[serviceId] = {
                name: serviceName,
                translations: diff.translations || {},
                purposes: []
            };
        }
        // Track added purposes by ID to avoid duplicates
        const addedPurposes = new Set();
        diff.consentPurposes.forEach((cpDiff)=>{
            // Only show purposes with changes
            const showPurpose = cpDiff.status !== "unchanged" || cpDiff.processingPurposes.some((ppDiff)=>ppDiff.status !== "unchanged" || ppDiff.descriptionChanged || ppDiff.ruleChanges.length > 0 || ppDiff.userAttributes.some((attr)=>attr.status === "added" || attr.status === "removed"));
            if (!showPurpose) {
                return;
            }
            // Skip if already added
            if (addedPurposes.has(cpDiff.cpPublicId)) {
                return;
            }
            const purpose = {
                id: cpDiff.cpPublicId,
                title: cpDiff.cpName,
                duration: "3 years",
                isNew: cpDiff.status === "added",
                isDeleted: cpDiff.status === "removed",
                defaultChecked: true,
                processingList: [],
                translations: cpDiff.translations || {}
            };
            // Track added processing purposes (by cp + purposeOfProcessingId)
            const addedProcessing = new Set();
            cpDiff.processingPurposes.forEach((ppDiff)=>{
                // Only show processing purposes with changes
                const showPP = ppDiff.status !== "unchanged" || ppDiff.descriptionChanged || ppDiff.ruleChanges.length > 0 || ppDiff.userAttributes.some((attr)=>attr.status === "added" || attr.status === "removed");
                if (!showPP) {
                    return;
                }
                // Use purposeOfProcessingId as the unique key (not ppPublicId)
                const ppKey = `${cpDiff.cpPublicId}-${ppDiff.purposeOfProcessingId}`;
                if (addedProcessing.has(ppKey)) {
                    return;
                }
                const processing = transformProcessingPurpose(ppDiff);
                purpose.processingList.push(processing);
                addedProcessing.add(ppKey);
            });
            // Only add purposes with at least one changed processing purpose
            if (purpose.processingList.length > 0) {
                services[serviceId].purposes.push(purpose);
                addedPurposes.add(cpDiff.cpPublicId);
            }
        });
    });
    return {
        services
    };
}
function transformProcessingPurpose(ppDiff) {
    const deletedAttributes = ppDiff.userAttributes.filter((attr)=>attr.status === "removed");
    const processing = {
        id: ppDiff.ppPublicId,
        title: ppDiff.ppName,
        description: ppDiff.ppDescription,
        oldDescription: ppDiff.descriptionChanged ? ppDiff.oldDescription : undefined,
        isNew: ppDiff.status === "added",
        isDeleted: ppDiff.status === "removed",
        mandatory: ppDiff.mandatory,
        defaultChecked: true,
        updateNotice: null,
        descriptionChangeNotice: undefined,
        ruleChangeNotices: undefined,
        attributes: {
            list: ppDiff.userAttributes.filter((attr)=>attr.status !== "removed").map((attr)=>({
                    name: attr.name,
                    status: attr.status
                })),
            newlyAddedCount: ppDiff.userAttributes.filter((attr)=>attr.status === "added").length,
            deletedCount: deletedAttributes.length,
            deletedList: deletedAttributes.map((attr)=>attr.name)
        },
        translations: ppDiff.translations || {}
    };
    // Handle description changes separately (green box)
    if (ppDiff.descriptionChanged && ppDiff.oldDescription) {
        processing.descriptionChangeNotice = ppDiff.ppDescription;
    }
    // Handle rule changes separately (yellow/orange box) - all of them
    if (ppDiff.ruleChanges.length > 0) {
        processing.ruleChangeNotices = ppDiff.ruleChanges.map((change)=>change.description);
    }
    return processing;
}
function getUpdateNotificationCount(consentsWithDiffs) {
    const uniqueBPs = new Set(consentsWithDiffs.map((item)=>item.diff.currentBpPublicId));
    return uniqueBPs.size;
}
function getTotalUpdateCount(consentsWithDiffs) {
    const uniqueBPs = new Set(consentsWithDiffs.map((item)=>item.diff.currentBpPublicId));
    return uniqueBPs.size;
}
function transformExpiringConsentsToUIData(expiringConsents) {
    const services = {};
    // Group by business process
    const bpMap = new Map();
    expiringConsents.forEach((consent)=>{
        const bpId = consent.businessProcess.publicId;
        if (!bpMap.has(bpId)) {
            bpMap.set(bpId, []);
        }
        bpMap.get(bpId).push(consent);
    });
    bpMap.forEach((consents, bpId)=>{
        const bp = consents[0].businessProcess;
        const serviceId = bp.publicId;
        const serviceName = bp.name;
        if (!services[serviceId]) {
            services[serviceId] = {
                name: serviceName,
                translations: bp.translations || {},
                purposes: []
            };
        }
        // Group by consent purpose
        const cpMap = new Map();
        consents.forEach((consent)=>{
            const cpId = consent.businessProcessRule.consentPurpose.publicId;
            if (!cpMap.has(cpId)) {
                cpMap.set(cpId, []);
            }
            cpMap.get(cpId).push(consent);
        });
        cpMap.forEach((consents, cpId)=>{
            const cp = consents[0].businessProcessRule.consentPurpose;
            const purpose = {
                id: cpId,
                title: cp.name,
                duration: "3 years",
                isNew: false,
                defaultChecked: true,
                processingList: [],
                translations: cp.translations || {}
            };
            // Track added processing purposes
            const addedProcessing = new Set();
            consents.forEach((consent)=>{
                const pp = consent.businessProcessRule.processingPurpose;
                const ppId = pp.publicId;
                if (addedProcessing.has(ppId)) return;
                const daysUntilExpiry = Math.ceil((new Date(consent.expiresAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                const attributes = [];
                pp.userAttributeNames.forEach((attr)=>{
                    attributes.push({
                        name: attr,
                        status: "unchanged"
                    });
                });
                const processing = {
                    id: ppId,
                    mandatory: consent.businessProcessRule.mandatory,
                    title: pp.name,
                    description: pp.description || "",
                    isNew: false,
                    defaultChecked: true,
                    updateNotice: null,
                    isExpiring: true,
                    expiresAt: consent.expiresAt,
                    daysUntilExpiry,
                    attributes: {
                        list: attributes,
                        newlyAddedCount: 0
                    },
                    translations: pp.translations || {}
                };
                purpose.processingList.push(processing);
                addedProcessing.add(ppId);
            });
            if (purpose.processingList.length > 0) {
                services[serviceId].purposes.push(purpose);
            }
        });
    });
    return {
        services
    };
}
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
"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx <module evaluation>", "default");
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx", "default");
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$action$2d$center$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$action$2d$center$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$action$2d$center$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ // FILE: app/consent-action-center/page.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$version$2d$diff$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consent-version-diff-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$update$2d$transform$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consent-update-transform-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hoc$2f$with$2d$dprm$2d$session$2d$handler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hoc/with-dprm-session-handler.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$action$2d$center$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-action-center.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function getRevokeData(dataPrincipalId, majorDataPrincipalId) {
    const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
        where: {
            dataPrincipalId,
            ...majorDataPrincipalId && {
                majorDataPrincipalId
            },
            status: "accepted",
            businessProcessRule: {
                revocableByPrincipal: true
            }
        },
        include: {
            businessProcess: true,
            businessProcessRule: {
                include: {
                    consentPurpose: true,
                    processingPurpose: true
                }
            }
        }
    });
    const services = {};
    consents.forEach((consent)=>{
        const serviceId = consent.businessProcess.publicId;
        const serviceName = consent.businessProcess.name;
        if (!services[serviceId]) {
            services[serviceId] = {
                name: serviceName,
                translations: consent.businessProcess.translations,
                purposes: []
            };
        }
        const cpId = consent.businessProcessRule.consentPurpose.publicId;
        const cpName = consent.businessProcessRule.consentPurpose.name;
        const cpTranslations = consent.businessProcessRule.consentPurpose.translations || {};
        let purpose = services[serviceId].purposes.find((p)=>p.id === cpId);
        if (!purpose) {
            purpose = {
                id: cpId,
                title: cpName,
                duration: "3 years",
                processingList: [],
                translations: cpTranslations
            };
            services[serviceId].purposes.push(purpose);
        }
        const ppTranslations = consent.businessProcessRule.processingPurpose.translations || {};
        const processing = {
            id: consent.businessProcessRule.processingPurpose.publicId,
            title: consent.businessProcessRule.processingPurpose.name,
            description: consent.businessProcessRule.processingPurpose.description || "",
            attributes: consent.businessProcessRule.processingPurpose.userAttributeNames,
            translations: ppTranslations
        };
        const exists = purpose.processingList.some((p)=>p.id === processing.id);
        if (!exists) {
            purpose.processingList.push(processing);
        }
    });
    return {
        services
    };
}
async function getOptedServices(dataPrincipalId, majorDataPrincipalId) {
    // Find all accepted consents for this principal (filter status if you only want current services)
    const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
        where: {
            dataPrincipalId,
            ...majorDataPrincipalId && {
                majorDataPrincipalId
            },
            status: "accepted"
        },
        select: {
            businessProcess: {
                select: {
                    id: true,
                    publicId: true,
                    name: true,
                    code: true,
                    version: true,
                    translations: true
                }
            }
        }
    });
    // Remove duplicates by BP id
    const seen = new Set();
    const uniqueBPs = consents.map((c)=>c.businessProcess).filter((bp)=>{
        if (!bp || seen.has(bp.id)) return false;
        seen.add(bp.id);
        return true;
    });
    return uniqueBPs;
}
async function getExpiringConsents(dataPrincipalId, majorDataPrincipalId) {
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
        where: {
            dataPrincipalId,
            ...majorDataPrincipalId && {
                majorDataPrincipalId
            },
            status: "accepted",
            expiresAt: {
                lte: thirtyDaysFromNow,
                gte: new Date()
            }
        },
        include: {
            businessProcess: true,
            businessProcessRule: {
                include: {
                    consentPurpose: true,
                    processingPurpose: true
                }
            }
        }
    });
}
async function ConsentActionCenterPage({ sessionContext, searchParams }) {
    const resolvedSearchParams = await searchParams;
    const minorDataPrincipalId = resolvedSearchParams?.minor_data_principal_id;
    const dataPrincipalId = minorDataPrincipalId || sessionContext.dataPrincipalId;
    const majorDataPrincipalId = minorDataPrincipalId ? sessionContext.dataPrincipalId : undefined;
    // Get consents with version diffs
    const consentsWithDiffs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$version$2d$diff$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConsentsWithVersionDiffs"])(dataPrincipalId, majorDataPrincipalId);
    // Get expiring consents
    const expiringConsents = await getExpiringConsents(dataPrincipalId, majorDataPrincipalId);
    // Transform version diffs to UI format
    const versionUpdateData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$update$2d$transform$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformVersionDiffToUIData"])(consentsWithDiffs);
    // Transform expiring consents to UI format
    const expiryUpdateData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$update$2d$transform$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformExpiringConsentsToUIData"])(expiringConsents);
    // Merge both update types
    const combinedUpdateData = mergeUpdateData(versionUpdateData, expiryUpdateData);
    // Get revoke data
    const revokeData = await getRevokeData(dataPrincipalId, majorDataPrincipalId);
    // Get all unique opted services
    const optedServices = await getOptedServices(dataPrincipalId, majorDataPrincipalId);
    // Fetch all UserAttribute translations
    const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
        select: {
            name: true,
            translations: true
        }
    });
    const attributeTranslations = userAttributes.reduce((acc, attr)=>{
        acc[attr.name] = attr.translations;
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$action$2d$center$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        dataPrincipalId: dataPrincipalId,
        initialUpdateData: combinedUpdateData,
        initialRevokeData: revokeData,
        optedServices: optedServices,
        majorDataPrincipalId: majorDataPrincipalId,
        attributeTranslations: attributeTranslations
    }, void 0, false, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-action-center/page.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hoc$2f$with$2d$dprm$2d$session$2d$handler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDprmSessionHandler"])(ConsentActionCenterPage);
const dynamic = "force-dynamic";
function mergeUpdateData(versionData, expiryData) {
    const merged = {
        services: {
            ...versionData.services
        }
    };
    // Merge expiring consents into version update data
    Object.entries(expiryData.services).forEach(([serviceId, serviceData])=>{
        if (!merged.services[serviceId]) {
            merged.services[serviceId] = serviceData;
        } else {
            // Merge purposes
            serviceData.purposes.forEach((expiryPurpose)=>{
                const existingPurpose = merged.services[serviceId].purposes.find((p)=>p.id === expiryPurpose.id);
                if (existingPurpose) {
                    // Merge processing purposes
                    expiryPurpose.processingList.forEach((expiryPP)=>{
                        const existingPP = existingPurpose.processingList.find((p)=>p.id === expiryPP.id);
                        if (!existingPP) {
                            existingPurpose.processingList.push(expiryPP);
                        } else {
                            // If already exists with version update, add expiry notice
                            if (!existingPP.isExpiring) {
                                existingPP.isExpiring = true;
                                existingPP.expiresAt = expiryPP.expiresAt;
                                existingPP.daysUntilExpiry = expiryPP.daysUntilExpiry;
                            }
                        }
                    });
                } else {
                    merged.services[serviceId].purposes.push(expiryPurpose);
                }
            });
        }
    });
    return merged;
}
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-action-center/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c7f13883._.js.map