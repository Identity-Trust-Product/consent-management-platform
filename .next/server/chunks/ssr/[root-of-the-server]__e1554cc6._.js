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
"[project]/lib/utils/consent-receipt-translations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "RECEIPT_TRANSLATIONS",
    ()=>RECEIPT_TRANSLATIONS,
    "getDpdpaRights",
    ()=>getDpdpaRights,
    "getReceiptTranslation",
    ()=>getReceiptTranslation,
    "localizeDigits",
    ()=>localizeDigits
]);
const RECEIPT_TRANSLATIONS = {
    en: {
        numerals: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ],
        header: "Consent Receipt",
        receiptId: "Receipt ID:",
        dateTime: "Date & Time:",
        dataPrincipalId: "Data Principal ID:",
        dataFiduciaryName: "Data Fiduciary Name:",
        nameOfGoodsService: "Name of Goods/Service:",
        legalStatementLabel: "Legal Statement:",
        purposeHeader: "Purpose",
        purposeColumn: "Purpose",
        dataCollectedColumn: "Personal Data Collected",
        noPurposes: "No purposes accepted",
        rightsHeader: "Rights:",
        rightsDescription: "As per the Digital Personal Data Protection Act (DPDPA), you have the following rights regarding your personal data:",
        exerciseRightsHeader: "How can I exercise my rights:",
        exerciseRightsDescription: "To exercise your rights, please follow these steps:",
        contactText: "For any requests regarding your data, please contact -",
        footerNote: "Note: Your request will be processed within 90 days, subject to legal and contractual obligations.",
        legalStatementTemplate: "I acknowledge that I have given my consent to {DF_NAME} for {BP_NAME}.",
        dpdpaRights: [
            "Right to Access Information about Personal Data",
            "Right to Correction and Erasure of Personal Data",
            "Right of Grievance Redressal",
            "Right to Nominate"
        ],
        exerciseSteps: {
            step1: "Submit an Access Request – Click",
            step2: "View your consents provided to {DF_NAME} – Click",
            step3: "Submit grievances – Click",
            step4: "Contact the DPO of {DF_NAME} – Click"
        },
        clickHere: "here",
        successTitle: "Your Consent has been submitted",
        successDesc: "Thank you for your consent and trust",
        manageConsentsBtn: "Manage Your Consents",
        viewReceiptBtn: "View Consent Receipt"
    },
    hi: {
        numerals: [
            "०",
            "१",
            "२",
            "३",
            "४",
            "५",
            "६",
            "७",
            "८",
            "९"
        ],
        header: "सहमति रसीद",
        receiptId: "रसीद आईडी:",
        dateTime: "दिनांक और समय:",
        dataPrincipalId: "डेटा प्रिंसिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्यूशियरी नाम:",
        nameOfGoodsService: "वस्तु/सेवा का नाम:",
        legalStatementLabel: "कानूनी बयान:",
        purposeHeader: "उद्देश्य",
        purposeColumn: "उद्देश्य",
        dataCollectedColumn: "एकत्रित व्यक्तिगत डेटा",
        noPurposes: "कोई उद्देश्य स्वीकार नहीं किया गया",
        rightsHeader: "अधिकार:",
        rightsDescription: "डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम (DPDPA) के अनुसार, आपके पास अपने व्यक्तिगत डेटा के संबंध में निम्नलिखित अधिकार हैं:",
        exerciseRightsHeader: "मैं अपने अधिकारों का प्रयोग कैसे कर सकता हूँ:",
        exerciseRightsDescription: "अपने अधिकारों का प्रयोग करने के लिए, कृपया इन चरणों का पालन करें:",
        contactText: "अपने डेटा के संबंध में किसी भी अनुरोध के लिए, कृपया संपर्क करें -",
        footerNote: "नोट: आपके अनुरोध को कानूनी और संविदात्मक दायित्वों के अधीन 90 दिनों के भीतर संसाधित किया जाएगा।",
        legalStatementTemplate: "मैं स्वीकार करता हूं कि मैंने {BP_NAME} के लिए {DF_NAME} को अपनी सहमति दी है।",
        dpdpaRights: [
            "व्यक्तिगत डेटा के बारे में जानकारी तक पहुंचने का अधिकार",
            "व्यक्तिगत डेटा के सुधार और उन्मूलन का अधिकार",
            "शिकायत निवारण का अधिकार",
            "नामित करने का अधिकार"
        ],
        exerciseSteps: {
            step1: "एक्सेस अनुरोध जमा करें – क्लिक करें",
            step2: "{DF_NAME} को दी गई अपनी सहमतियां देखें – क्लिक करें",
            step3: "शिकायतें जमा करें – क्लिक करें",
            step4: "{DF_NAME} के डीपीओ से संपर्क करें – क्लिक करें"
        },
        clickHere: "यहाँ",
        successTitle: "आपकी सहमति जमा कर दी गई है",
        successDesc: "आपकी सहमति और विश्वास के लिए धन्यवाद",
        manageConsentsBtn: "अपनी सहमतियाँ प्रबंधित करें",
        viewReceiptBtn: "सहमति रसीद देखें"
    },
    as: {
        header: "সন্মতি ৰচিদ",
        receiptId: "ৰচিদ নং:",
        dateTime: "তাৰিখ আৰু সময়:",
        dataPrincipalId: "তথ্য অধ্যক্ষ আই ডি:",
        dataFiduciaryName: "তথ্য ন্যাসৰক্ষীৰ নাম:",
        nameOfGoodsService: "সামগ্ৰী/সেৱাৰ নাম:",
        legalStatementLabel: "আইনগত বিবৃতি:",
        purposeHeader: "উদ্দেশ্য",
        purposeColumn: "উদ্দেশ্য",
        dataCollectedColumn: "সংগ্ৰহ কৰা ব্যক্তিগত তথ্য",
        noPurposes: "কোনো উদ্দেশ্য গ্ৰহণ কৰা হোৱা নাই",
        rightsHeader: "অধিকাৰসমূহ:",
        rightsDescription: "ডিজিটেল ব্যক্তিগত তথ্য সুৰক্ষা আইন (DPDPA) অনুসৰি, আপোনাৰ ব্যক্তিগত তথ্যৰ সন্দৰ্ভত আপোনাৰ তলত দিয়া অধিকাৰসমূহ আছে:",
        exerciseRightsHeader: "মই মোৰ অধিকাৰসমূহ কেনেকৈ সাব্যস্ত কৰিব পাৰো:",
        exerciseRightsDescription: "আপোনাৰ অধিকাৰসমূহ সাব্যস্ত কৰিবলৈ, অনুগ্ৰহ কৰি তলত দিয়া পদক্ষেপসমূহ অনুসৰণ কৰক:",
        contactText: "আপোনাৰ তথ্য সংক্ৰান্তীয় যিকোনো অনুৰোধৰ বাবে, অনুগ্ৰহ কৰি যোগাযোগ কৰক -",
        footerNote: "টোকা: আপোনাৰ অনুৰোধ আইনী আৰু চুক্তিভিত্তিক বাধ্যবাধকতাৰ সাপেক্ষে ৯০ দিনৰ ভিতৰত প্ৰক্ৰিয়াকৰণ কৰা হ’ব।",
        legalStatementTemplate: "মই স্বীকাৰ কৰো যে মই {BP_NAME} ৰ বাবে {DF_NAME} ক মোৰ সন্মতি প্ৰদান কৰিছো।",
        dpdpaRights: [
            "ব্যক্তিগত তথ্যৰ বিষয়ে তথ্য আহৰণৰ অধিকাৰ",
            "ব্যক্তিগত তথ্য শুধৰণি আৰু মচি পেলোৱাৰ অধিকাৰ",
            "অজুহাতে নিবাৰণৰ অধিকাৰ",
            "মনোনীত কৰাৰ অধিকাৰ"
        ],
        exerciseSteps: {
            step1: "এটা প্ৰৱেশ অনুৰোধ দাখিল কৰক – ক্লিক কৰক",
            step2: "{DF_NAME} ক প্ৰদান কৰা আপোনাৰ সন্মতিসমূহ চাওক – ক্লিক কৰক",
            step3: "অজুহাতে দাখিল কৰক – ক্লিক কৰক",
            step4: "{DF_NAME} ৰ DPO ৰ সৈতে যোগাযোগ কৰক – ক্লিক কৰক"
        },
        clickHere: "ইয়াত",
        successTitle: "আপোনাৰ সন্মতি দাখিল কৰা হৈছে",
        successDesc: "আপোনাৰ সন্মতি আৰু বিশ্বাসৰ বাবে ধন্যবাদ",
        manageConsentsBtn: "আপোনাৰ সন্মতিসমূহ পৰিচালনা কৰক",
        viewReceiptBtn: "সন্মতি ৰচিদ চাওক"
    },
    bn: {
        numerals: [
            "০",
            "১",
            "২",
            "৩",
            "৪",
            "৫",
            "৬",
            "৭",
            "৮",
            "৯"
        ],
        header: "সম্মতি রসিদ",
        receiptId: "রসিদ আইডি:",
        dateTime: "তারিখ ও সময়:",
        dataPrincipalId: "ডেটা প্রিন্সিপাল আইডি:",
        dataFiduciaryName: "ডেটা ফিডিউশিয়ারি নাম:",
        nameOfGoodsService: "পণ্য/সেবার নাম:",
        legalStatementLabel: "আইনি বিবৃতি:",
        purposeHeader: "উদ্দেশ্য",
        purposeColumn: "উদ্দেশ্য",
        dataCollectedColumn: "সংগৃহীত ব্যক্তিগত ডেটা",
        noPurposes: "কোনো উদ্দেশ্য গৃহীত হয়নি",
        rightsHeader: "অধিকার:",
        rightsDescription: "ডিজিটাল ব্যক্তিগত ডেটা সুরক্ষা আইন (DPDPA) অনুযায়ী, আপনার ব্যক্তিগত ডেটা সম্পর্কে আপনার নিম্নলিখিত অধিকারগুলি রয়েছে:",
        exerciseRightsHeader: "আমি কীভাবে আমার অধিকার প্রয়োগ করতে পারি:",
        exerciseRightsDescription: "আপনার অধিকার প্রয়োগ করার জন্য, অনুগ্রহ করে নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করুন:",
        contactText: "আপনার ডেটা সংক্রান্ত যেকোনো অনুরোধের জন্য, অনুগ্রহ করে যোগাযোগ করুন -",
        footerNote: "দ্রষ্টব্য: আইনগত এবং চুক্তিভিত্তিক বাধ্যবাধকতা সাপেক্ষে ৯০ দিনের মধ্যে আপনার অনুরোধ প্রক্রিয়া করা হবে।",
        legalStatementTemplate: "আমি স্বীকার করছি যে আমি {BP_NAME} এর জন্য {DF_NAME} কে আমার সম্মতি দিয়েছি।",
        dpdpaRights: [
            "ব্যক্তিগত ডেটা সম্পর্কে তথ্য অ্যাক্সেস করার অধিকার",
            "ব্যক্তিগত ডেটা সংশোধন এবং মুছে ফেলার অধিকার",
            "অভিযোগ নিষ্পত্তির অধিকার",
            "মনোনীত করার অধিকার"
        ],
        exerciseSteps: {
            step1: "একটি অ্যাক্সেস অনুরোধ জমা দিন – ক্লিক করুন",
            step2: "{DF_NAME} কে দেওয়া আপনার সম্মতিগুলি দেখুন – ক্লিক করুন",
            step3: "অভিযোগ জমা দিন – ক্লিক করুন",
            step4: "{DF_NAME} এর ডিপিও-এর সাথে যোগাযোগ করুন – ক্লিক করুন"
        },
        clickHere: "এখানে",
        successTitle: "আপনার সম্মতি জমা দেওয়া হয়েছে",
        successDesc: "আপনার সম্মতি এবং বিশ্বাসের জন্য ধন্যবাদ",
        manageConsentsBtn: "আপনার সম্মতিগুলি পরিচালনা করুন",
        viewReceiptBtn: "সম্মতি রসিদ দেখুন"
    },
    brx: {
        header: "गनायथि रसिद",
        receiptId: "रसिद ID:",
        dateTime: "तारीख आरो सम:",
        dataPrincipalId: "रोगा गाहाय ID:",
        dataFiduciaryName: "रोगा जिम्मादारि नाम:",
        nameOfGoodsService: "माल/सिबिथायनि नाम:",
        legalStatementLabel: "आइनि बिबुंथि:",
        purposeHeader: "थांखि",
        purposeColumn: "थांखि",
        dataCollectedColumn: "जथुमनाय गावआरि रोगा",
        noPurposes: "जेबो थांखि गनायनाय जायाखै",
        rightsHeader: "मोनथायफोर:",
        rightsDescription: "डिजिटल गावआरि रोगा रैखाथि आइन (DPDPA) बादियै, नोंथांनि गावआरि रोगानि सोमोन्दै थाहनाय मोनथायफोर दं:",
        exerciseRightsHeader: "आं आंनि मोनथायफोरखौ माबोरै बाहाय‌नो हायो:",
        exerciseRightsDescription: "नोंथांनि मोनथायफोरखौ बाहाय‌नो, अननानै गाहायनि नेरसोनफोरखौ मानि:",
        contactText: "नोंथांनि रोगानि सोमोन्दै जायखिजाया आरजगाबनायनि थाखाय, अननानै जगाजग खालाम -",
        footerNote: "सिग: नोंथांनि आरजगाबनायखौ आइनि आरो रादायनामानि दायबद्धताफोरनि सिङाव 90 साननि गेजेराव मावफुंनाय जागोन।",
        legalStatementTemplate: "आं मानिना लादों दि आं {BP_NAME} नि थाखाय {DF_NAME} नो आंनि गनायथि होबाय।",
        dpdpaRights: [
            "गावआरि रोगानि बागै मिथिनो मोननायनि मोनथाय",
            "गावआरि रोगाखौ सुद्रायनाय आरो हुखुमोरनायनि मोनथाय",
            "अजद सुस्रांनायनि मोनथाय",
            "साखोनो सायখनायनि मोनथाय"
        ],
        exerciseSteps: {
            step1: "होगारनाय आरजगाबनाय जमा खालाम - क्लिक",
            step2: "{DF_NAME} नो होनाय नोंथांनि गनायथि - क्लिक",
            step3: "अजदफोर जमा खालाम - क्लिक",
            step4: "{DF_NAME} नि DPO जों जगाजग खालाम - क्लिक"
        },
        clickHere: "बेयाव",
        successTitle: "नोंथांनि गनायथि होनायखौ जमा खालामनाय जाबाय",
        successDesc: "नोंथांनि गनायथि आरो फोथायनायनि थाखाय गोजोननाय थाबाय",
        manageConsentsBtn: "नोंथांनि गनायथिफोरखौ परिचालना खालाम",
        viewReceiptBtn: "गनायथि रसिद नाय"
    },
    doi: {
        header: "सहमति रसीद",
        receiptId: "रसीद आईडी:",
        dateTime: "तरीक ते समां:",
        dataPrincipalId: "डेटा प्रिंसिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्यूशियरी नां:",
        nameOfGoodsService: "चीजें/सेवा दा नां:",
        legalStatementLabel: "कानूनी बयान:",
        purposeHeader: "मकसद",
        purposeColumn: "मकसद",
        dataCollectedColumn: "इकट्ठा कीता गेदा निजी डेटा",
        noPurposes: "कोई मकसद मंजूर नेईं कीता गेदा",
        rightsHeader: "अधिकार:",
        rightsDescription: "डिजिटल निजी डेटा संरक्षण अधिनियम (डीपीडीपीए) दे मताबक, थुआड़े निजी डेटा दे बारे च थुआड़े कोल हेठ दित्ते दे अधिकार न:",
        exerciseRightsHeader: "मैं अपने अधिकारें दा इस्तेमाल किय्यां करी सकना/सकनी आं:",
        exerciseRightsDescription: "अपने अधिकारें दा इस्तेमाल करने लेई, किरपा करियै एह् कदम चक्को:",
        contactText: "थुआड़े डेटा दे बारे च कुसै बी बिनती लेई, किरपा करियै स्र्पक करो -",
        footerNote: "नोट: थुआड़ी बिनती गी कानूनी ते इकरारनामे दी पाबंदी दे तहत 90 दिनें दे अंदर पूरा कीता जाग।",
        legalStatementTemplate: "मैं मनना/मननी आं जे मैं {BP_NAME} लेई {DF_NAME} गी अपनी सहमति दित्ती ऐ।",
        dpdpaRights: [
            "निजी डेटा दे बारे च जानकारी हासल करने दा अधिकार",
            "निजी डेटा गी ठीक करने ते मिटाने दा अधिकार",
            "शिकायत निवारण दा अधिकार",
            "नामित करने दा अधिकार"
        ],
        exerciseSteps: {
            step1: "पहुंच बिनती जमा करो – क्लिक करो",
            step2: "{DF_NAME} गी दित्ती गेदी अपनी सहमति देखो – क्लिक करो",
            step3: "शिकायतां जमा करो – क्लिक करो",
            step4: "{DF_NAME} दे डीपीओ कन्नै स्र्पक करो – क्लिक करो"
        },
        clickHere: "इत्थें",
        successTitle: "तुंदी रजामंदी जमा होई गेई ऐ",
        successDesc: "तुंदी रजामंदी ते भरोसे लेई धन्यावाद",
        manageConsentsBtn: "अपनी रजामंदी दा प्रबंधन करो",
        viewReceiptBtn: "रजामंदी रसीद दिक्खो"
    },
    gu: {
        numerals: [
            "૦",
            "૧",
            "૨",
            "૩",
            "૪",
            "૫",
            "૬",
            "૭",
            "૮",
            "૯"
        ],
        header: "સંમતિ રસીદ",
        receiptId: "રસીદ આઈડી:",
        dateTime: "તારીખ અને સમય:",
        dataPrincipalId: "ડેટા પ્રિન્સિપાલ આઈડી:",
        dataFiduciaryName: "ડેટા ફિડ્યુશિયરી નામ:",
        nameOfGoodsService: "વસ્તુ/સેવાનું નામ:",
        legalStatementLabel: "કાયદાકીય નિવેદન:",
        purposeHeader: "હેતુ",
        purposeColumn: "હેતુ",
        dataCollectedColumn: "એકત્રિત વ્યક્તિગત ડેટા",
        noPurposes: "કોઈ હેતુ સ્વીકારવામાં આવ્યો નથી",
        rightsHeader: "અધિકારો:",
        rightsDescription: "ડિજિટલ પર્સનલ ડેટા પ્રોટેક્શન એક્ટ (DPDPA) મુજબ, તમારા વ્યક્તિગત ડેટા અંગે તમારી પાસે નીચે મુજબના અધિકારો છે:",
        exerciseRightsHeader: "હું મારા અધિકારોનો ઉપયોગ કેવી રીતે કરી શકું:",
        exerciseRightsDescription: "તમારા અધિકારોનો ઉપયોગ કરવા માટે, કૃપા કરીને નીચેના પગલાં અનુસરો:",
        contactText: "તમારા ડેટા અંગેની કોઈપણ વિનંતી માટે, કૃપા કરીને સંપર્ક કરો -",
        footerNote: "નોંધ: તમારી વિનંતી કાયદાકીય અને કરારબદ્ધ જવાબદારીઓને આધીન 90 દિવસની અંદર પ્રક્રિયા કરવામાં આવશે.",
        legalStatementTemplate: "હું સ્વીકારું છું કે મેં {BP_NAME} માટે {DF_NAME} ને મારી સંમતિ આપી છે.",
        dpdpaRights: [
            "વ્યક્તિગત ડેટા વિશે માહિતી મેળવવાનો અધિકાર",
            "વ્યક્તિગત ડેટા સુધારણા અને ભૂંસી નાખવાનો અધિકાર",
            "ફરિયાદ નિવારણનો અધિકાર",
            "નોમિનેટ કરવાનો અધિકાર"
        ],
        exerciseSteps: {
            step1: "એક્સેસ વિનંતી સબમિટ કરો – ક્લિક કરો",
            step2: "{DF_NAME} ને આપેલી તમારી સંમતિઓ જુઓ – ક્લિક કરો",
            step3: "ફરિયાદો સબમિટ કરો – ક્લિક કરો",
            step4: "{DF_NAME} ના DPO નો સંપર્ક કરો – ક્લિક કરો"
        },
        clickHere: "અહીં",
        successTitle: "તમારી સંમતિ સબમિટ કરવામાં આવી છે",
        successDesc: "તમારી સંમતિ અને વિશ્વાસ બદલ આભાર",
        manageConsentsBtn: "તમારી સંમતિઓનું સંચાલન કરો",
        viewReceiptBtn: "સંમતિ રસીદ જુઓ"
    },
    kn: {
        numerals: [
            "೦",
            "೧",
            "೨",
            "೩",
            "೪",
            "೫",
            "೬",
            "೭",
            "೮",
            "೯"
        ],
        header: "ಒಪ್ಪಿಗೆ ರಶೀದಿ",
        receiptId: "ರಶೀದಿ ಐಡಿ:",
        dateTime: "ದಿನಾಂಕ ಮತ್ತು ಸಮಯ:",
        dataPrincipalId: "ಡೇಟಾ ಪ್ರಿನ್ಸಿಪಾಲ್ ಐಡಿ:",
        dataFiduciaryName: "ಡೇಟಾ ಫಿಡ್ಯೂಷಿಯರಿ ಹೆಸರು:",
        nameOfGoodsService: "ಸರಕು/ಸೇವೆಯ ಹೆಸರು:",
        legalStatementLabel: "ಕಾನೂನು ಹೇಳಿಕೆ:",
        purposeHeader: "ಉದ್ದೇಶ",
        purposeColumn: "ಉದ್ದೇಶ",
        dataCollectedColumn: "ಸಂಗ್ರಹಿಸಲಾದ ವೈಯಕ್ತಿಕ ಡೇಟಾ",
        noPurposes: "ಯಾವುದೇ ಉದ್ದೇಶಗಳನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿಲ್ಲ",
        rightsHeader: "ಹಕ್ಕುಗಳು:",
        rightsDescription: "ಡಿಜಿಟಲ್ ವೈಯಕ್ತಿಕ ಡೇಟಾ ಸಂರಕ್ಷಣಾ ಕಾಯ್ದೆ (DPDPA) ಪ್ರಕಾರ, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ ನೀವು ಈ ಕೆಳಗಿನ ಹಕ್ಕುಗಳನ್ನು ಹೊಂದಿದ್ದೀರಿ:",
        exerciseRightsHeader: "ನನ್ನ ಹಕ್ಕುಗಳನ್ನು ನಾನು ಹೇಗೆ ಚಲಾಯಿಸಬಹುದು:",
        exerciseRightsDescription: "ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಚಲಾಯಿಸಲು, ದಯವಿಟ್ಟು ಈ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ:",
        contactText: "ನಿಮ್ಮ ಡೇಟಾಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ವಿನಂತಿಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು ಸಂಪರ್ಕಿಸಿ -",
        footerNote: "ಟಿಪ್ಪಣಿ: ಕಾನೂನು ಮತ್ತು ಒಪ್ಪಂದದ ಕರಾರುಗಳಿಗೆ ಒಳಪಟ್ಟು 90 ದಿನಗಳ ಒಳಗೆ ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತದೆ.",
        legalStatementTemplate: "ನಾನು {BP_NAME} ಗಾಗಿ {DF_NAME} ಗೆ ನನ್ನ ಒಪ್ಪಿಗೆಯನ್ನು ನೀಡಿದ್ದೇನೆ ಎಂದು ನಾನು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇನೆ.",
        dpdpaRights: [
            "ವೈಯಕ್ತಿಕ ಡೇಟಾ ಬಗ್ಗೆ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯುವ ಹಕ್ಕು",
            "ವೈಯಕ್ತಿಕ ಡೇಟಾ ತಿದ್ದುಪಡಿ ಮತ್ತು ಅಳಿಸುವ ಹಕ್ಕು",
            "ಕುಂದುಕೊರತೆ ನಿವಾರಣೆಯ ಹಕ್ಕು",
            "ನಾಮನಿರ್ದೇಶನ ಮಾಡುವ ಹಕ್ಕು"
        ],
        exerciseSteps: {
            step1: "ಪ್ರವೇಶ ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಿ – ಕ್ಲಿಕ್ ಮಾಡಿ",
            step2: "{DF_NAME} ಗೆ ನೀಡಲಾದ ನಿಮ್ಮ ಒಪ್ಪಿಗೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ – ಕ್ಲಿಕ್ ಮಾಡಿ",
            step3: "ಕುಂದುಕೊರತೆಗಳನ್ನು ಸಲ್ಲಿಸಿ – ಕ್ಲಿಕ್ ಮಾಡಿ",
            step4: "{DF_NAME} ನ DPO ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ – ಕ್ಲಿಕ್ ಮಾಡಿ"
        },
        clickHere: "ಇಲ್ಲಿ",
        successTitle: "ನಿಮ್ಮ ಒಪ್ಪಿಗೆಯನ್ನು ಸಲ್ಲಿಸಲಾಗಿದೆ",
        successDesc: "ನಿಮ್ಮ ಒಪ್ಪಿಗೆ ಮತ್ತು ನಂಬಿಕೆಗೆ ಧನ್ಯವಾದಗಳು",
        manageConsentsBtn: "ನಿಮ್ಮ ಒಪ್ಪಿಗೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
        viewReceiptBtn: "ಒಪ್ಪಿಗೆ ರಶೀದಿಯನ್ನು ವೀಕ್ಷಿಸಿ"
    },
    ks: {
        header: "رضامندی ہنٛز رسید",
        receiptId: "رسیدِ آیی ڈی:",
        dateTime: "تأریخ تہٕ وقت:",
        dataPrincipalId: "ڈیٹا پرنسپل آیی ڈی:",
        dataFiduciaryName: "ڈیٹا فیڈوشری سنٛد ناو:",
        nameOfGoodsService: "سامان/خدماتن ہنٛد ناو:",
        legalStatementLabel: "قونونی بیان:",
        purposeHeader: "مقصود",
        purposeColumn: "مقصود",
        dataCollectedColumn: "جمع کرنہٕ آمت ذاتی ڈیٹا",
        noPurposes: "کانہہ تہِ مقصود آو نہٕ قبول کرنہٕ",
        rightsHeader: "حقوق:",
        rightsDescription: "ڈیجیٹل ذاتی ڈیٹا تحفظ ایکٹ (DPDPA) مطابق، چھِ تہیہِ پننس ذاتی ڈیٹا سٟتۍ متعلق یم حقوق حاصل:",
        exerciseRightsHeader: "بہٕ کِتھ کن ہِکہٕ پننۍ حقوق استعمال کٔرتھ:",
        exerciseRightsDescription: "پننۍ حقوق استعمال کرنہٕ خأطرٕ، مہربأنی کٔرتھ کٔریو یم اقدامات:",
        contactText: "تہنٛدِس ڈیٹا ہس متعلق کسی بھی درخواست خأطرٕ، مہربأنی کٔرتھ کٔریو رابطہ -",
        footerNote: "نوٹ: تہنٛز درخواست ییہِ قونونی تہٕ معاہدہ کین ذمہ دارین تحت 90 دۄہن منٛز پروسیس کرنہٕ۔",
        legalStatementTemplate: "بہٕ چھُس اعتراف کران زِ میں دیت {BP_NAME} خأطرٕ {DF_NAME} دٕرِیہِ رضامندی۔",
        dpdpaRights: [
            "ذاتی ڈیٹا متعلق معلومات حأصل کرنک حق",
            "ذاتی ڈیٹا صحیح تہٕ مٹاونُک حق",
            "شکایت دور کرنُک حق",
            "نامزد کرنُک حق"
        ],
        exerciseSteps: {
            step1: "ایکسس درخواست جمع کٔریو – کلک کٔریو",
            step2: "{DF_NAME} حوالہٕ کٔرمژ رضامندی وچھو – کلک کٔریو",
            step3: "شکایت جمع کٔریو – کلک کٔریو",
            step4: "{DF_NAME} سٕنٛدِس DPO سٟتۍ رابطہ کٔریو – کلک کٔریو"
        },
        clickHere: "یتیتھ",
        successTitle: "तुहंज़ रज़ामंदी गेय जमा",
        successDesc: "तुहंज़ रज़ामंदी तॖ भरोसा करनॖ बापत शुक्रिया",
        manageConsentsBtn: "पनॖन रज़ामंदी करिव मैनेज",
        viewReceiptBtn: "رज़ामंदी रसीद वुछिव"
    },
    kok: {
        header: "संमती पावती",
        receiptId: "पावती आयडी:",
        dateTime: "तारीख आनी वेळ:",
        dataPrincipalId: "डेटा प्रिन्सिपल आयडी:",
        dataFiduciaryName: "डेटा फिड्यूशरीचें नांव:",
        nameOfGoodsService: "म्हाल/सेवेचें नांव:",
        legalStatementLabel: "कायदेशीर विधान:",
        purposeHeader: "उद्देश",
        purposeColumn: "उद्देश",
        dataCollectedColumn: "एकठांय केल्लो वैयक्तीक डेटा",
        noPurposes: "खंयचोच उद्देश स्वीकारूंक ना",
        rightsHeader: "हक्क:",
        rightsDescription: "डिजिटल वैयक्तीक डेटा राखण कायदो (DPDPA) प्रमाण, तुमच्या वैयक्तीक डेटा विशीं तुमकां सकयल दिल्ले हक्क आसात:",
        exerciseRightsHeader: "हांव म्हजे हक्क कसो वापरूंक शकतां:",
        exerciseRightsDescription: "तुमचे हक्क वापरपा खातीर, उपकार करून हीं पावलां अनुसरात:",
        contactText: "तुमच्या डेटा विशीं खंयच्याय विनवणे खातीर, उपकार करून संपर्क करात -",
        footerNote: "टीप: तुमची विनवणी कायदेशीर आनी करारी जबाबदाऱ्यांच्या अधीन रावून 90 दिसांच्या भितर प्रोसेस करतले.",
        legalStatementTemplate: "हांव मान्य करतां की {BP_NAME} खातीर हांवें {DF_NAME} क म्हजी संमती दिली आसा.",
        dpdpaRights: [
            "वैयक्तीक डेटा विशीं म्हायती मेळोवपाचो हक्क",
            "वैयक्तीक डेटा सुदारपाचो आनी पुसून उडोवपाचो हक्क",
            "गाऱ्हाणीं निवारण हक्क",
            "नामित करपाचो हक्क"
        ],
        exerciseSteps: {
            step1: "येरादारी विनवणी सादर करात – क्लिक करात",
            step2: "{DF_NAME} क दिल्ल्यो तुमच्यो संमती पळयात – क्लिक करात",
            step3: "गाऱ्हाणीं सादर करात – क्लिक करात",
            step4: "{DF_NAME} च्या DPO क संपर्क करात – क्लिक करात"
        },
        clickHere: "हांगा",
        successTitle: "तुमची संमती जमा केल्या",
        successDesc: "तुमच्या संमती आनी विश्वासा खातीर देव बरें करूं",
        manageConsentsBtn: "तुमच्यो संमती व्यवस्थापीत करात",
        viewReceiptBtn: "संमती पावती पळयात"
    },
    mai: {
        header: "सहमति रसीद",
        receiptId: "रसीद आईडी:",
        dateTime: "तारीख आ समय:",
        dataPrincipalId: "डेटा प्रिंसिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्यूशियरी के नाम:",
        nameOfGoodsService: "माल/सेवा के नाम:",
        legalStatementLabel: "कानूनी बयान:",
        purposeHeader: "उद्देश्य",
        purposeColumn: "उद्देश्य",
        dataCollectedColumn: "जमा कैल गेल व्यक्तिगत डेटा",
        noPurposes: "कोनो उद्देश्य स्वीकार नहि कैल गेल",
        rightsHeader: "अधिकार:",
        rightsDescription: "डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम (DPDPA) के अनुसार, अहाँक व्यक्तिगत डेटा के संबंध में अहाँ लेल निम्नलिखित अधिकार अछि:",
        exerciseRightsHeader: "हम अपन अधिकारक प्रयोग कोना कऽ सकैत छी:",
        exerciseRightsDescription: "अपन अधिकारक प्रयोग करबाक लेल, कृपया ई चरण सब अनुसरण करू:",
        contactText: "अहाँक डेटा के संबंध में कोनो अनुरोध लेल, कृपया संपर्क करू -",
        footerNote: "नोट: अहाँक अनुरोध के कानूनी आ संविदात्मक दायित्वक अधीन 90 दिनक भीतर संसाधित कैल जायत।",
        legalStatementTemplate: "हम स्वीकार करैत छी जे हम {BP_NAME} लेल {DF_NAME} के अपन सहमति देने छी।",
        dpdpaRights: [
            "व्यक्तिगत डेटा के जानकारी प्राप्त करबाक अधिकार",
            "व्यक्तिगत डेटा के सुधार आ मेटाब के अधिकार",
            "शिकायत निवारण के अधिकार",
            "नामित करबाक अधिकार"
        ],
        exerciseSteps: {
            step1: "एक्सेस अनुरोध जमा करू – क्लिक करू",
            step2: "{DF_NAME} के देल गेल अपन सहमति देखू – क्लिक करू",
            step3: "शिकायत जमा करू – क्लिक करू",
            step4: "{DF_NAME} के डीपीओ सँ संपर्क करू – क्लिक करू"
        },
        clickHere: "एतय",
        successTitle: "अहाँक सहमति जमा कएल गेल अछि",
        successDesc: "अहाँक सहमति आ विश्वास लेल धन्यवाद",
        manageConsentsBtn: "अपन सहमतिक प्रबंधन करू",
        viewReceiptBtn: "सहमति रसीद देखू"
    },
    ml: {
        numerals: [
            "൦",
            "൧",
            "൨",
            "൩",
            "൪",
            "൫",
            "൬",
            "൭",
            "൮",
            "൯"
        ],
        header: "സമ്മത രസീത്",
        receiptId: "രസീത് ഐഡി:",
        dateTime: "തീയതിയും സമയവും:",
        dataPrincipalId: "ഡാറ്റ പ്രിൻസിപ്പൽ ഐഡി:",
        dataFiduciaryName: "ഡാറ്റ ഫിഡ്യൂഷ്യറി പേര്:",
        nameOfGoodsService: "സാധനത്തിൻ്റെ/സേവനത്തിൻ്റെ പേര്:",
        legalStatementLabel: "നിയമപരമായ പ്രസ്താവന:",
        purposeHeader: "ഉദ്ദേശ്യം",
        purposeColumn: "ഉദ്ദേശ്യം",
        dataCollectedColumn: "ശേഖരിച്ച വ്യക്തിഗത വിവരങ്ങൾ",
        noPurposes: "ഉദ്ദേശ്യങ്ങളൊന്നും അംഗീകരിച്ചിട്ടില്ല",
        rightsHeader: "അവകാശങ്ങൾ:",
        rightsDescription: "ഡിജിറ്റൽ പേഴ്സണൽ ഡാറ്റ പ്രൊട്ടക്ഷൻ ആക്ട് (DPDPA) പ്രകാരം, നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾ സംബന്ധിച്ച് നിങ്ങൾക്ക് താഴെ പറയുന്ന അവകാശങ്ങളുണ്ട്:",
        exerciseRightsHeader: "എനിക്ക് എൻ്റെ അവകാശങ്ങൾ എങ്ങനെ വിനിയോഗിക്കാം:",
        exerciseRightsDescription: "നിങ്ങളുടെ അവകാശങ്ങൾ വിനിയോഗിക്കുന്നതിന്, ദയവായി ഈ ഘട്ടങ്ങൾ പാലിക്കുക:",
        contactText: "നിങ്ങളുടെ ഡാറ്റ സംബന്ധിച്ച ഏത് അഭ്യർത്ഥനകൾക്കും, ദയവായി ബന്ധപ്പെടുക -",
        footerNote: "ശ്രദ്ധിക്കുക: നിയമപരവും കരാർപരവുമായ ബാധ്യതകൾക്ക് വിധേയമായി 90 ദിവസത്തിനുള്ളിൽ നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതാണ്.",
        legalStatementTemplate: "{BP_NAME}-ന് വേണ്ടി {DF_NAME}-ന് ഞാൻ എൻ്റെ സമ്മതം നൽകിയതായി ഞാൻ സമ്മതിക്കുന്നു.",
        dpdpaRights: [
            "വ്യക്തിഗത വിവരങ്ങളെക്കുറിച്ചുള്ള വിവരങ്ങൾ അറിയാനുള്ള അവകാശം",
            "വ്യക്തിഗത വിവരങ്ങൾ തിരുത്താനും നീക്കം ചെയ്യാനുമുള്ള അവകാശം",
            "പരാതി പരിഹാരത്തിനുള്ള അവകാശം",
            "നോമിനേറ്റ് ചെയ്യാനുള്ള അവകാശം"
        ],
        exerciseSteps: {
            step1: "ആക്സസ് അഭ്യർത്ഥന സമർപ്പിക്കുക – ക്ലിക്ക് ചെയ്യുക",
            step2: "{DF_NAME}-ന് നൽകിയ നിങ്ങളുടെ സമ്മതങ്ങൾ കാണുക – ക്ലിക്ക് ചെയ്യുക",
            step3: "പരാതികൾ സമർപ്പിക്കുക – ക്ലിക്ക് ചെയ്യുക",
            step4: "{DF_NAME}-ൻ്റെ DPO-യുമായി ബന്ധപ്പെടുക – ക്ലിക്ക് ചെയ്യുക"
        },
        clickHere: "ഇവിടെ",
        successTitle: "നിങ്ങളുടെ സമ്മതം സമർപ്പിച്ചു",
        successDesc: "നിങ്ങളുടെ സമ്മതത്തിനും വിശ്വാസത്തിനും നന്ദി",
        manageConsentsBtn: "നിങ്ങളുടെ സമ്മതങ്ങൾ നിയന്ത്രിക്കുക",
        viewReceiptBtn: "സമ്മത രസീത് കാണുക"
    },
    mni: {
        numerals: [
            "꯰",
            "꯱",
            "꯲",
            "꯳",
            "꯴",
            "꯵",
            "꯶",
            "꯷",
            "꯸",
            "꯹"
        ],
        header: "অয়াবা রেসিপ্ট",
        receiptId: "রেসিপ্ট আইডি:",
        dateTime: "তাং অমসুং মতম:",
        dataPrincipalId: "দেতা প্রিন্সিপাল আইডি:",
        dataFiduciaryName: "দেতা ফিদুসিয়ারি মিং:",
        nameOfGoodsService: "পোৎলম/সেবগী মিং:",
        legalStatementLabel: "আইনগী ৱারোল:",
        purposeHeader: "পান্দম",
        purposeColumn: "পান্দম",
        dataCollectedColumn: "খোমসিনখিবা মমিংদগী দেতা",
        noPurposes: "অয়াবা পীবগী পান্দম লৈতে",
        rightsHeader: "হকশিং:",
        rightsDescription: "দিজিতেল পার্সুনেল দেতা প্রোতেক্সন এক্ট (DPDPA) গী মতুং ইন্না, নহাক্কী মমিংদগী দেতাগী মতাংদা নহাক্কী মখাগী হকশিং অসি লৈ:",
        exerciseRightsHeader: "ঐহাক্না ঐহাক্কী হকশিং করম্না শীজিন্নগনি:",
        exerciseRightsDescription: "নহাক্কী হকশিং শীজিন্ননবা, চানবীদুনা মখাগী খোংথাংশিং অসি ইনবীয়ু:",
        contactText: "নহাক্কী দেতাগী মতাংদা হংবিনিংবা লৈরবদি, চানবীদুনা পাউ ফাওবীয়ু -",
        footerNote: "খঙজিনবীয়ু: নহাক্কী অপাম্বা অদু আইনগী অমসুং কনত্রেক্টকী ওইবা বাধ্যতশিংগী মনুং চন্না নুমিৎ ৯০ গী মনুংদা থবক পাংথোক্কনি।",
        legalStatementTemplate: "ঐহাক্না {BP_NAME} গীদমক {DF_NAME} দা অয়াবা পীখ্রে হায়না শক্ খঙলে।",
        dpdpaRights: [
            "মমিংদগী দেতাগী মরমদা ইনফোর্মেসন ফংবগী হক",
            "মমিংদগী দেতা চুমথোকপা অমসুং মুত্থৎপগী হক",
            "ৱাকৎ কোকপগী হক",
            "মিং চনবগী হক"
        ],
        exerciseSteps: {
            step1: "এক্সেস রিকুয়েস্ত থাজিনবীয়ু – ক্লিক তৌবীয়ু",
            step2: "{DF_NAME} দা পীখিবা নহাক্কী অয়াবশিং য়েংবীয়ু – ক্লিক তৌবীয়ু",
            step3: "ৱাকৎশিং থাজিনবীয়ু – ক্লিক তৌবীয়ু",
            step4: "{DF_NAME} গী DPO গা পাউ ফাওবীয়ু – ক্লিক তৌবীয়ু"
        },
        clickHere: "মফম অসিদা",
        successTitle: "ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕ ꯄꯤꯁꯤꯟꯈ꯭ꯔꯦ",
        successDesc: "ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕ ꯑꯃꯁꯨꯡ ꯊꯥꯖꯕꯒꯤꯗꯃꯛ ꯊꯥꯒꯠꯆꯔꯤ",
        manageConsentsBtn: "ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕꯁꯤꯡ ꯃꯦꯅꯦꯖ ꯇꯧꯕꯤꯌꯨ",
        viewReceiptBtn: "ꯑꯌꯥꯕ ꯔꯁꯤꯗ ꯌꯦꯡꯕꯤꯌꯨ"
    },
    mr: {
        header: "संमती पावती",
        receiptId: "पावती आयडी:",
        dateTime: "तारीख आणि वेळ:",
        dataPrincipalId: "डेटा प्रिन्सिपल आयडी:",
        dataFiduciaryName: "डेटा फिड्यूशरीचे नाव:",
        nameOfGoodsService: "वस्तू/सेवेचे नाव:",
        legalStatementLabel: "कायदेशीर विधान:",
        purposeHeader: "उद्देश",
        purposeColumn: "उद्देश",
        dataCollectedColumn: "गोळा केलेला वैयक्तिक डेटा",
        noPurposes: "कोणतेही उद्देश स्वीकारले नाहीत",
        rightsHeader: "हक्क:",
        rightsDescription: "डिजिटल वैयक्तिक डेटा संरक्षण कायदा (DPDPA) नुसार, तुमच्या वैयक्तिक डेटाच्या संदर्भात तुम्हाला खालील हक्क आहेत:",
        exerciseRightsHeader: "मी माझे हक्क कसे वापरू शकतो:",
        exerciseRightsDescription: "तुमचे हक्क वापरण्यासाठी, कृपया खालील पायऱ्या फॉलो करा:",
        contactText: "तुमच्या डेटाच्या संदर्भात कोणत्याही विनंतीसाठी, कृपया संपर्क करा -",
        footerNote: "टीप: तुमची विनंती कायदेशीर आणि करारविषयक जबाबदाऱ्यांच्या अधीन राहून 90 दिवसांच्या आत प्रोसेस केली जाईल.",
        legalStatementTemplate: "मी मान्य करतो की मी {BP_NAME} साठी {DF_NAME} ला माझी संमती दिली आहे.",
        dpdpaRights: [
            "वैयक्तिक डेटाबद्दल माहिती मिळवण्याचा हक्क",
            "वैयक्तिक डेटा दुरुस्ती आणि नष्ट करण्याचा हक्क",
            "तक्रार निवारणाचा हक्क",
            "नामित करण्याचा हक्क"
        ],
        exerciseSteps: {
            step1: "प्रवेश विनंती सबमिट करा – क्लिक करा",
            step2: "{DF_NAME} ला दिलेल्या तुमच्या संमती पहा – क्लिक करा",
            step3: "तक्रारी सबमिट करा – क्लिक करा",
            step4: "{DF_NAME} च्या DPO शी संपर्क साधा – क्लिक करा"
        },
        clickHere: "येथे",
        successTitle: "आपली संमती जमा केली आहे",
        successDesc: "आपल्या संमती आणि विश्वासाबद्दल धन्यवाद",
        manageConsentsBtn: "आपल्या संमतींचे व्यवस्थापन करा",
        viewReceiptBtn: "संमती पावती पहा"
    },
    ne: {
        header: "सहमति रसिद",
        receiptId: "रसिद आईडी:",
        dateTime: "मिति र समय:",
        dataPrincipalId: "डेटा प्रिन्सिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्युसियरी नाम:",
        nameOfGoodsService: "सामान/सेवाको नाम:",
        legalStatementLabel: "कानुनी बयान:",
        purposeHeader: "उद्देश्य",
        purposeColumn: "उद्देश्य",
        dataCollectedColumn: "संकलन गरिएको व्यक्तिगत डेटा",
        noPurposes: "कुनै उद्देश्य स्वीकार गरिएको छैन",
        rightsHeader: "अधिकारहरू:",
        rightsDescription: "डिजिटल व्यक्तिगत डेटा संरक्षण ऐन (DPDPA) अनुसार, तपाईंको व्यक्तिगत डेटाको सम्बन्धमा तपाईंसँग निम्न अधिकारहरू छन्:",
        exerciseRightsHeader: "म मेरा अधिकारहरू कसरी प्रयोग गर्न सक्छु:",
        exerciseRightsDescription: "आफ्ना अधिकारहरू प्रयोग गर्न, कृपया यी चरणहरू पालना गर्नुहोस्:",
        contactText: "तपाईंको डेटाको सम्बन्धमा कुनै अनुरोधका लागि, कृपया सम्पर्क गर्नुहोस् -",
        footerNote: "नोट: तपाईंको अनुरोध कानुनी र सम्झौता दायित्वहरूको अधीनमा रही 90 दिन भित्र प्रशोधन गरिनेछ।",
        legalStatementTemplate: "म स्वीकार गर्दछु कि मैले {BP_NAME} को लागि {DF_NAME} लाई मेरो सहमति दिएको छु।",
        dpdpaRights: [
            "व्यक्तिगत डेटा बारे जानकारी प्राप्त गर्ने अधिकार",
            "व्यक्तिगत डेटा सुधार र मेटाउने अधिकार",
            "गुनासो निवारणको अधिकार",
            "नामित गर्ने अधिकार"
        ],
        exerciseSteps: {
            step1: "पहुँच अनुरोध पेश गर्नुहोस् – क्लिक गर्नुहोस्",
            step2: "{DF_NAME} लाई दिएका आफ्ना सहमतिहरू हेर्नुहोस् – क्लिक गर्नुहोस्",
            step3: "गुनासोहरू पेश गर्नुहोस् – क्लिक गर्नुहोस्",
            step4: "{DF_NAME} को डीपीओसँग सम्पर्क गर्नुहोस् – क्लिक गर्नुहोस्"
        },
        clickHere: "यहाँ",
        successTitle: "तपाईंको सहमति पेश गरिएको छ",
        successDesc: "तपाईंको सहमति र विश्वासको लागि धन्यवाद",
        manageConsentsBtn: "तपाईंका सहमतिहरू व्यवस्थापन गर्नुहोस्",
        viewReceiptBtn: "सहमति रसीद हेर्नुहोस्"
    },
    or: {
        numerals: [
            "୦",
            "୧",
            "୨",
            "୩",
            "୪",
            "୫",
            "୬",
            "୭",
            "୮",
            "୯"
        ],
        header: "ସମ୍ମତି ରସିଦ",
        receiptId: "ରସିଦ ଆଇଡି:",
        dateTime: "ତାରିଖ ଏବଂ ସମୟ:",
        dataPrincipalId: "ଡାଟା ପ୍ରିନ୍ସିପାଲ୍ ଆଇଡି:",
        dataFiduciaryName: "ଡାଟା ଫିଡ୍ୟୁସିଆରୀ ନାମ:",
        nameOfGoodsService: "ସାମଗ୍ରୀ/ସେବା ନାମ:",
        legalStatementLabel: "ଆଇନଗତ ବିବୃତ୍ତି:",
        purposeHeader: "ଉଦ୍ଦେଶ୍ୟ",
        purposeColumn: "ଉଦ୍ଦେଶ୍ୟ",
        dataCollectedColumn: "ସଂଗୃହିତ ବ୍ୟକ୍ତିଗତ ଡାଟା",
        noPurposes: "କୌଣସି ଉଦ୍ଦେଶ୍ୟ ଗ୍ରହଣ କରାଯାଇ ନାହିଁ",
        rightsHeader: "ଅଧିକାର:",
        rightsDescription: "ଡିଜିଟାଲ୍ ବ୍ୟକ୍ତିଗତ ଡାଟା ସୁରକ୍ଷା ଅଧିନିୟମ (DPDPA) ଅନୁଯାୟୀ, ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ଡାଟା ସମ୍ବନ୍ଧରେ ଆପଣଙ୍କର ନିମ୍ନଲିଖିତ ଅଧିକାର ଅଛି:",
        exerciseRightsHeader: "ମୁଁ ମୋର ଅଧିକାର କିପରି ବ୍ୟବହାର କରିପାରିବି:",
        exerciseRightsDescription: "ଆପଣଙ୍କର ଅଧିକାର ବ୍ୟବହାର କରିବାକୁ, ଦୟାକରି ନିମ୍ନଲିଖିତ ପଦକ୍ଷେପଗୁଡିକ ଅନୁସରଣ କରନ୍ତୁ:",
        contactText: "ଆପଣଙ୍କର ଡାଟା ସମ୍ବନ୍ଧୀୟ ଯେକୌଣସି ଅନୁରୋଧ ପାଇଁ, ଦୟାକରି ଯୋଗାଯୋଗ କରନ୍ତୁ -",
        footerNote: "ଦ୍ରଷ୍ଟବ୍ୟ: ଆଇନଗତ ଏବଂ ଚୁକ୍ତିଭିତ୍ତିକ ବାଧ୍ୟତା ଅଧୀନରେ ଆପଣଙ୍କର ଅନୁରୋଧ 90 ଦିନ ମଧ୍ୟରେ ପ୍ରକ୍ରିୟାକରଣ କରାଯିବ।",
        legalStatementTemplate: "ମୁଁ ସ୍ୱୀକାର କରୁଛି ଯେ ମୁଁ {BP_NAME} ପାଇଁ {DF_NAME} କୁ ମୋର ସମ୍ମତି ପ୍ରଦାନ କରିଛି।",
        dpdpaRights: [
            "ବ୍ୟକ୍ତିଗତ ଡାଟା ବିଷୟରେ ସୂଚନା ପାଇବାର ଅଧିକାର",
            "ବ୍ୟକ୍ତିଗତ ଡାଟା ସଂଶୋଧନ ଏବଂ ଲିଭାଇବାର ଅଧିକାର",
            "ଅଭିଯୋଗ ନିବାରଣର ଅଧିକାର",
            "ମନୋନୀତ କରିବାର ଅଧିକାର"
        ],
        exerciseSteps: {
            step1: "ଏକ ଆକ୍ସେସ୍ ଅନୁରୋଧ ଦାଖଲ କରନ୍ତୁ – କ୍ଲିକ୍ କରନ୍ତୁ",
            step2: "{DF_NAME} କୁ ଦିଆଯାଇଥିବା ଆପଣଙ୍କର ସମ୍ମତି ଦେଖନ୍ତୁ – କ୍ଲିକ୍ କରନ୍ତୁ",
            step3: "ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ – କ୍ଲିକ୍ କରନ୍ତୁ",
            step4: "{DF_NAME} ର DPO ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ – କ୍ଲିକ୍ କରନ୍ତୁ"
        },
        clickHere: "ଏଠାରେ",
        successTitle: "ଆପଣଙ୍କ ସମ୍ମତି ଦାଖଲ କରାଯାଇଛି",
        successDesc: "ଆପଣଙ୍କ ସମ୍ମତି ଏବଂ ବିଶ୍ୱାସ ପାଇଁ ଧନ୍ୟବାଦ",
        manageConsentsBtn: "ଆପଣଙ୍କ ସମ୍ମତି ପରିଚାଳନା କରନ୍ତୁ",
        viewReceiptBtn: "ସମ୍ମତି ରସିଦ ଦେଖନ୍ତୁ"
    },
    pa: {
        numerals: [
            "੦",
            "੧",
            "੨",
            "੩",
            "੪",
            "੫",
            "੬",
            "੭",
            "੮",
            "੯"
        ],
        header: "ਸਹਿਮਤੀ ਰਸੀਦ",
        receiptId: "ਰਸੀਦ ਆਈਡੀ:",
        dateTime: "ਮਿਤੀ ਅਤੇ ਸਮਾਂ:",
        dataPrincipalId: "ਡਾਟਾ ਪ੍ਰਿੰਸੀਪਲ ਆਈਡੀ:",
        dataFiduciaryName: "ਡਾਟਾ ਫਿਡਿਊਸ਼ਰੀ ਨਾਮ:",
        nameOfGoodsService: "ਵਸਤੂ/ਸੇਵਾ ਦਾ ਨਾਮ:",
        legalStatementLabel: "ਕਾਨੂੰਨੀ ਬਿਆਨ:",
        purposeHeader: "ਉਦੇਸ਼",
        purposeColumn: "ਉਦੇਸ਼",
        dataCollectedColumn: "ਇਕੱਠਾ ਕੀਤਾ ਨਿੱਜੀ ਡਾਟਾ",
        noPurposes: "ਕੋਈ ਉਦੇਸ਼ ਸਵੀਕਾਰ ਨਹੀਂ ਕੀਤਾ ਗਿਆ",
        rightsHeader: "ਅਧਿਕਾਰ:",
        rightsDescription: "ਡਿਜੀਟਲ ਨਿੱਜੀ ਡਾਟਾ ਸੁਰੱਖਿਆ ਐਕਟ (DPDPA) ਦੇ ਅਨੁਸਾਰ, ਤੁਹਾਡੇ ਨਿੱਜੀ ਡਾਟਾ ਦੇ ਸੰਬੰਧ ਵਿੱਚ ਤੁਹਾਡੇ ਕੋਲ ਹੇਠ ਲਿਖੇ ਅਧਿਕਾਰ ਹਨ:",
        exerciseRightsHeader: "ਮੈਂ ਆਪਣੇ ਅਧਿਕਾਰਾਂ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰ ਸਕਦਾ ਹਾਂ:",
        exerciseRightsDescription: "ਆਪਣੇ ਅਧਿਕਾਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਇਹ ਕਦਮ ਚੁੱਕੋ:",
        contactText: "ਤੁਹਾਡੇ ਡਾਟਾ ਸੰਬੰਧੀ ਕਿਸੇ ਵੀ ਬੇਨਤੀ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਸੰਪਰਕ ਕਰੋ -",
        footerNote: "ਨੋਟ: ਤੁਹਾਡੀ ਬੇਨਤੀ ਕਾਨੂੰਨੀ ਅਤੇ ਇਕਰਾਰਨਾਮੇ ਦੀਆਂ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਦੇ ਅਧੀਨ 90 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਪ੍ਰੋਸੈਸ ਕੀਤੀ ਜਾਵੇਗੀ।",
        legalStatementTemplate: "ਮੈਂ ਮੰਨਦਾ ਹਾਂ ਕਿ ਮੈਂ {BP_NAME} ਲਈ {DF_NAME} ਨੂੰ ਆਪਣੀ ਸਹਿਮਤੀ ਦਿੱਤੀ ਹੈ।",
        dpdpaRights: [
            "ਨਿੱਜੀ ਡਾਟਾ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰਨ ਦਾ ਅਧਿਕਾਰ",
            "ਨਿੱਜੀ ਡਾਟਾ ਸੁਧਾਰ ਅਤੇ ਮਿਟਾਉਣ ਦਾ ਅਧਿਕਾਰ",
            "ਸ਼ਿਕਾਇਤ ਨਿਵਾਰਣ ਦਾ ਅਧਿਕਾਰ",
            "ਨਾਮਜ਼ਦ ਕਰਨ ਦਾ ਅਧਿਕਾਰ"
        ],
        exerciseSteps: {
            step1: "ਪਹੁੰਚ ਬੇਨਤੀ ਜਮ੍ਹਾਂ ਕਰੋ – ਕਲਿੱਕ ਕਰੋ",
            step2: "{DF_NAME} ਨੂੰ ਦਿੱਤੀਆਂ ਆਪਣੀਆਂ ਸਹਿਮਤੀਆਂ ਦੇਖੋ – ਕਲਿੱਕ ਕਰੋ",
            step3: "ਸ਼ਿਕਾਇਤਾਂ ਜਮ੍ਹਾਂ ਕਰੋ – ਕਲਿੱਕ ਕਰੋ",
            step4: "{DF_NAME} ਦੇ DPO ਨਾਲ ਸੰਪਰਕ ਕਰੋ – ਕਲਿੱਕ ਕਰੋ"
        },
        clickHere: "ਇੱਥੇ",
        successTitle: "ਤੁਹਾਡੀ ਸਹਿਮਤੀ ਜਮ੍ਹਾਂ ਕਰ ਦਿੱਤੀ ਗਈ ਹੈ",
        successDesc: "ਤੁਹਾਡੀ ਸਹਿਮਤੀ ਅਤੇ ਭਰੋਸੇ ਲਈ ਧੰਨਵਾਦ",
        manageConsentsBtn: "ਆਪਣੀਆਂ ਸਹਿਮਤੀਆਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ",
        viewReceiptBtn: "ਸਹਿਮਤੀ ਰਸੀਦ ਦੇਖੋ"
    },
    sa: {
        header: "सहमति रसीद",
        receiptId: "रसीद आईडी:",
        dateTime: "दिनाङ्कः समयः च:",
        dataPrincipalId: "डेटा प्रिन्सिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्यूशियरी नाम:",
        nameOfGoodsService: "वस्तु/सेवा नाम:",
        legalStatementLabel: "न्यायिकं कथनम्:",
        purposeHeader: "उद्देश्यम्",
        purposeColumn: "उद्देश्यम्",
        dataCollectedColumn: "सङ्गृहीतः व्यक्तिगतदत्तांशः",
        noPurposes: "कोऽपि उद्देश्यः न स्वीकृतः",
        rightsHeader: "अधिकाराणि:",
        rightsDescription: "डिजिटल व्यक्तिगतदत्तांशसंरक्षणअधिनियम (DPDPA) अनुसारं, भवतः/भवत्याः व्यक्तिगतदत्तांशविषये अधोलिखिताः अधिकाराः सन्ति:",
        exerciseRightsHeader: "अहं मम अधिकारान् कथं प्रयोक्तुं शक्नोमि:",
        exerciseRightsDescription: "भवतः/भवत्याः अधिकारान् प्रयोक्तुं, कृपया एतानि पदानि अनुसरतु:",
        contactText: "भवतः/भवत्याः दत्तांशविषये कस्यापि अनुरोधस्य कृते, कृपया संपर्कं करोतु -",
        footerNote: "टिप्पणी: भवतः/भवत्याः अनुरोधः न्यायिक-संविदा-बाध्यतानाम् अधीनं 90 दिनेषु संसाधितः भविष्यति।",
        legalStatementTemplate: "अहं स्वीकरोमि यत् मया {BP_NAME} कृते {DF_NAME} इत्यस्मै मम सहमतिः प्रदत्ता।",
        dpdpaRights: [
            "व्यक्तिगतदत्तांशविषये सूचनां प्राप्तुं अधिकारः",
            "व्यक्तिगतदत्तांशस्य संशोधनस्य मार्जनस्य च अधिकारः",
            "शिकायतनिवारणस्य अधिकारः",
            "नामितस्य अधिकारः"
        ],
        exerciseSteps: {
            step1: "अभिगमन-अनुरोधं प्रस्तौतु – क्लिक् करोतु",
            step2: "{DF_NAME} इत्यस्मै प्रदत्तां र्भवतः/भवत्याः सहमतिं पश्यतु – क्लिक् करोतु",
            step3: "शिकायतं प्रस्तौतु – क्लिक् करोतु",
            step4: "{DF_NAME} इत्यस्य DPO इत्यनेन सह संपर्कं करोतु – क्लिक् करोतु"
        },
        clickHere: "अत्र",
        successTitle: "भवतां स्वीकृतिः समர்ப்பिता",
        successDesc: "भवतां स्वीकृतिः विश्वासः च इत्यर्थं धन्यवादः",
        manageConsentsBtn: "स्वस्य स्वीकृतीः प्रबंधयन्तु",
        viewReceiptBtn: "स्वीकृति-रसीदं पश्यन्तु"
    },
    sat: {
        numerals: [
            "᱐",
            "᱑",
            "᱒",
            "᱓",
            "᱔",
            "᱕",
            "᱖",
            "᱗",
            "᱘",
            "᱙"
        ],
        header: "ᱥᱚᱦᱚᱢᱚᱛᱤ ᱨᱟᱥᱤᱫᱽ",
        receiptId: "ᱨᱟᱥᱤᱫᱽ ID:",
        dateTime: "ᱢᱟᱹᱦᱤᱛ ᱟᱨ ᱚᱠᱛᱚ:",
        dataPrincipalId: "ᱰᱮᱴᱟ ᱯᱨᱤᱱᱥᱤᱯᱟᱞ ID:",
        dataFiduciaryName: "ᱰᱮᱴᱟ ᱯᱷᱤᱰᱭᱩᱥᱤᱭᱟᱨᱤ ᱧᱩᱛᱩᱢ:",
        nameOfGoodsService: "ᱡᱤᱱᱤᱥ/ᱥᱮᱵᱟ ᱨᱮᱱᱟᱜ ᱧᱩᱛᱩᱢ:",
        legalStatementLabel: "ᱟᱹᱭᱤᱱ ᱨᱮᱱᱟᱜ ᱠᱟᱛᱷᱟ:",
        purposeHeader: "ᱡᱚᱥ",
        purposeColumn: "ᱡᱚᱥ",
        dataCollectedColumn: "ᱡᱟᱣᱨᱟ ᱟᱠᱟᱱ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ",
        noPurposes: "ᱡᱟᱦᱟᱸ ᱡᱚᱥ ᱦᱚᱸ ᱵᱟᱝ ᱟᱛᱟᱝ ᱟᱠᱟᱱᱟ",
        rightsHeader: "ᱦᱚᱠ ᱠᱚ:",
        rightsDescription: "ᱰᱤᱡᱤᱴᱟᱞ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱟᱹᱨᱤ (DPDPA) ᱞᱮᱠᱟᱛᱮ, ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ ᱵᱟᱵᱚᱛ ᱛᱮ ᱞᱟᱛᱟᱨ ᱨᱮ ᱮᱢ ᱟᱠᱟᱱ ᱦᱚᱠ ᱠᱚ ᱢᱮᱱᱟᱜᱼᱟ:",
        exerciseRightsHeader: "ᱤᱧ ᱨᱮᱱᱟᱜ ᱦᱚᱠ ᱤᱧ ᱪᱮᱠᱟᱛᱮᱧ ᱵᱮᱵᱷᱟᱨ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ:",
        exerciseRightsDescription: "ᱟᱢᱟᱜ ᱦᱚᱠ ᱠᱚ ᱵᱮᱵᱷᱟᱨ ᱞᱟᱹᱜᱤᱫ, ᱫᱟᱭᱟᱠᱟᱛᱮ ᱱᱚᱣᱟ ᱠᱚ ᱢᱟᱱᱟᱣ ᱢᱮ:",
        contactText: "ᱟᱢᱟᱜ ᱰᱮᱴᱟ ᱵᱟᱵᱚᱛ ᱛᱮ ᱡᱟᱦᱟᱸ ᱱᱮᱦᱚᱨ ᱞᱟᱹᱜᱤᱫ, ᱫᱟᱭᱟᱠᱟᱛᱮ ᱥᱟᱹᱜᱟᱹᱭ ᱡᱚᱲᱟᱣ ᱢᱮ -",
        footerNote: "ᱱᱚᱴ: ᱟᱢᱟᱜ ᱱᱮᱦᱚᱨ ᱫᱚ ᱟᱹᱭᱤᱱ ᱟᱨ ᱪᱩᱠᱛᱤ ᱨᱮᱱᱟᱜ ᱟᱹᱨᱤ ᱞᱮᱠᱟᱛᱮ ᱙᱐ ᱢᱟᱦᱟ ᱵᱷᱤᱛᱨᱤ ᱨᱮ ᱠᱟᱹᱢᱤ ᱦᱩᱭᱩᱜᱼᱟ᱾",
        legalStatementTemplate: "ᱤᱧ ᱥᱤᱠᱟᱹᱨᱮᱫᱟᱹᱧ ᱡᱮ ᱤᱧ {BP_NAME} ᱞᱟᱹᱜᱤᱫ {DF_NAME} ᱴᱷᱮᱱ ᱥᱚᱦᱚᱢᱚᱛᱤᱧ ᱮᱢ ᱟᱠᱟᱫᱟ᱾",
        dpdpaRights: [
            "ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ ᱵᱟᱵᱚᱛ ᱛᱮ ᱵᱟᱰᱟᱭ ᱧᱟᱢ ᱨᱮᱱᱟᱜ ᱦᱚᱠ",
            "ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ ᱥᱩᱫᱷᱟᱹᱨ ᱟᱨ ᱢᱮᱴᱟᱣ ᱨᱮᱱᱟᱜ ᱦᱚᱠ",
            "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱥᱚᱞᱦᱮ ᱨᱮᱱᱟᱜ ᱦᱚᱠ",
            "ᱧᱩᱛᱩᱢ ᱮᱢ ᱨᱮᱱᱟᱜ ᱦᱚᱠ"
        ],
        exerciseSteps: {
            step1: "ᱮᱠᱥᱮᱥ ᱱᱮᱦᱚᱨ ᱡᱚᱢᱟᱭ ᱢᱮ – ᱠᱞᱤᱠ ᱢᱮ",
            step2: "{DF_NAME} ᱴᱷᱮᱱ ᱮᱢ ᱟᱠᱟᱱ ᱟᱢᱟᱜ ᱥᱚᱦᱚᱢᱚᱛᱤ ᱧᱮᱞ ᱢᱮ – ᱠᱞᱤᱠ ᱢᱮ",
            step3: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱡᱚᱢᱟᱭ ᱢᱮ – ᱠᱞᱤᱠ ᱢᱮ",
            step4: "{DF_NAME} ᱨᱤᱱᱤᱡ DPO ᱥᱟᱞᱟᱜ ᱥᱟᱹᱜᱟᱹᱭ ᱡᱚᱲᱟᱣ ᱢᱮ – ᱠᱞᱤᱠ ᱢᱮ"
        },
        clickHere: "ᱱᱚᱸᱰᱮ",
        successTitle: "ᱟᱢᱟᱜ ᱥᱚᱦᱚᱢᱚᱛᱤ ᱡᱚᱢᱟ ᱟᱠᱟᱱᱟ",
        successDesc: "ᱟᱢᱟᱜ ᱥᱚᱦᱚᱢᱚᱛᱤ ᱟᱨ ᱯᱟᱹᱛᱭᱟᱹᱣ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱨᱦᱟᱣ",
        manageConsentsBtn: "ᱟᱢᱟᱜ ᱥᱚᱦᱚᱢᱚᱛᱤ ᱠᱚ ᱥᱟᱢᱵᱽᱲᱟᱣ ᱢᱮ",
        viewReceiptBtn: "ᱥᱚᱦᱚᱢᱚᱛᱤ ᱨᱟᱹᱥᱤᱫᱽ ᱧᱮᱞ ᱢᱮ"
    },
    sd: {
        header: "رضامندي رسيد",
        receiptId: "رسيد ي سڃاڻپ:",
        dateTime: "تاريخ ۽ وقت:",
        dataPrincipalId: "ڊيٽا پرنسپل سڃاڻپ:",
        dataFiduciaryName: "ڊيٽا فيڊيوشري جو نالو:",
        nameOfGoodsService: "شيءِ/خدمت جو نالو:",
        legalStatementLabel: "قانوني بيان:",
        purposeHeader: "مقصد",
        purposeColumn: "مقصد",
        dataCollectedColumn: "گڏ ڪيل ذاتي ڊيٽا",
        noPurposes: "ڪوبه مقصد قبول نه ڪيو ويو",
        rightsHeader: "حق:",
        rightsDescription: "ڊجيٽل پرسنل ڊيٽا پروٽيڪشن ايڪٽ (DPDPA) موجب، توهان جي ذاتي ڊيٽا بابت توهان کي هيٺيان حق حاصل آهن:",
        exerciseRightsHeader: "مان پنهنجا حق ڪيئن استعمال ڪري سگهان ٿو:",
        exerciseRightsDescription: "پنهنجا حق استعمال ڪرڻ لاءِ، مهرباني ڪري هيٺين مرحلن تي عمل ڪريو:",
        contactText: "توهان جي ڊيٽا بابت ڪنهن به درخواست لاءِ، مهرباني ڪري رابطو ڪريو -",
        footerNote: "نوٽ: توهان جي درخواست قانوني ۽ معاهدي جي ذميوارين تحت 90 ڏينهن اندر پروسيس ڪئي ويندي.",
        legalStatementTemplate: "مان اقرار ڪريان ٿو ته مان {BP_NAME} لاءِ {DF_NAME} کي پنهنجي رضامندي ڏني آهي.",
        dpdpaRights: [
            "ذاتي ڊيٽا بابت معلومات حاصل ڪرڻ جو حق",
            "ذاتي ڊيٽا جي درستگي ۽ ختم ڪرڻ جو حق",
            "شڪايت جي حل جو حق",
            "نامزد ڪرڻ جو حق"
        ],
        exerciseSteps: {
            step1: "رسائي جي درخواست جمع ڪريو – ڪلڪ ڪريو",
            step2: "{DF_NAME} کي ڏنل رضامنديون ڏسو – ڪلڪ ڪريو",
            step3: "شڪايتون جمع ڪريو – ڪلڪ ڪريو",
            step4: "{DF_NAME} جي DPO سان رابطو ڪريو – ڪلڪ ڪريو"
        },
        clickHere: "هتي",
        successTitle: "توهان جي رضامندي جمع ڪرائي وئي آهي",
        successDesc: "توهان جي رضامندي ۽ ڀروسي جي مهرباني",
        manageConsentsBtn: "پنهنجي رضامندين جو انتظام كريو",
        viewReceiptBtn: "رضامندي رسيد ڏسو"
    },
    ta: {
        numerals: [
            "௦",
            "௧",
            "௨",
            "௩",
            "௪",
            "௫",
            "௬",
            "௭",
            "௮",
            "௯"
        ],
        header: "இசைவு ரசீது",
        receiptId: "ரசீது ஐடி:",
        dateTime: "தேதி மற்றும் நேரம்:",
        dataPrincipalId: "டேட்டா பிரின்சிபல் ஐடி:",
        dataFiduciaryName: "டேட்டா பிட்யூஷியரி பெயர்:",
        nameOfGoodsService: "பொருள்/சேவையின் பெயர்:",
        legalStatementLabel: "சட்ட அறிக்கை:",
        purposeHeader: "நோக்கம்",
        purposeColumn: "நோக்கம்",
        dataCollectedColumn: "சேகரிக்கப்பட்ட தனிப்பட்ட தரவு",
        noPurposes: "எந்த நோக்கங்களும் ஏற்கப்படவில்லை",
        rightsHeader: "உரிமைகள்:",
        rightsDescription: "டிஜிட்டல் தனிப்பட்ட தரவு பாதுகாப்புச் சட்டம் (DPDPA) படி, உங்கள் தனிப்பட்ட தரவு தொடர்பாக உங்களுக்கு பின்வரும் உரிமைகள் உள்ளன:",
        exerciseRightsHeader: "எனது உரிமைகளை நான் எவ்வாறு பயன்படுத்தலாம்:",
        exerciseRightsDescription: "உங்கள் உரிமைகளைப் பயன்படுத்த, தயவுசெய்து இந்த வழிமுறைகளைப் பின்பற்றவும்:",
        contactText: "உங்கள் தரவு தொடர்பான எந்தவொரு கோரிக்கைக்கும், தயவுசெய்து தொடர்பு கொள்ளவும் -",
        footerNote: "குறிப்பு: உங்கள் கோரிக்கை சட்ட மற்றும் ஒப்பந்த கடமைகளுக்கு உட்பட்டு 90 நாட்களுக்குள் செயல்படுத்தப்படும்.",
        legalStatementTemplate: "{BP_NAME}-க்காக {DF_NAME}-க்கு நான் எனது இசைவை அளித்துள்ளேன் என்பதை நான் உறுதிசெய்கிறேன்.",
        dpdpaRights: [
            "தனிப்பட்ட தரவு பற்றிய தகவலை அணுகும் உரிமை",
            "தனிப்பட்ட தரவை திருத்துதல் மற்றும் அழிப்பதற்கான உரிமை",
            "குறைதீர்க்கும் உரிமை",
            "நியமனம் செய்யும் உரிமை"
        ],
        exerciseSteps: {
            step1: "அணுகல் கோரிக்கையை சமர்ப்பிக்கவும் – கிளிக் செய்யவும்",
            step2: "{DF_NAME}-க்கு வழங்கப்பட்ட உங்கள் இசைவுகளைப் பார்க்கவும் – கிளிக் செய்யவும்",
            step3: "குறைகளைச் சமர்ப்பிக்கவும் – கிளிக் செய்யவும்",
            step4: "{DF_NAME}-இன் DPO-ஐத் தொடர்பு கொள்ளவும் – கிளிக் செய்யவும்"
        },
        clickHere: "இங்கே",
        successTitle: "உங்கள் ஒப்புதல் சமர்ப்பிக்கப்பட்டது",
        successDesc: "உங்கள் ஒப்புதல் மற்றும் நம்பிக்கைக்கு நன்றி",
        manageConsentsBtn: "உங்கள் ஒப்புதல்களை நிர்வகிக்கவும்",
        viewReceiptBtn: "ஒப்புதல் ரசீதைப் பார்க்கவும்"
    },
    te: {
        numerals: [
            "౦",
            "౧",
            "౨",
            "౩",
            "౪",
            "౫",
            "౬",
            "౭",
            "౮",
            "౯"
        ],
        header: "సమ్మతి రశీదు",
        receiptId: "రశీదు ID:",
        dateTime: "తేదీ మరియు సమయం:",
        dataPrincipalId: "డేటా ప్రిన్సిపల్ ID:",
        dataFiduciaryName: "డేటా ఫిడ్యూషరీ పేరు:",
        nameOfGoodsService: "వస్తువు/సేవ పేరు:",
        legalStatementLabel: "చట్టపరమైన ప్రకటన:",
        purposeHeader: "ఉద్దేశ్యం",
        purposeColumn: "ఉద్దేశ్యం",
        dataCollectedColumn: "సేకరించిన వ్యక్తిగత డేటా",
        noPurposes: "ఏ ఉద్దేశాలు స్వీకరించబడలేదు",
        rightsHeader: "హక్కులు:",
        rightsDescription: "డిజిటల్ పర్సనల్ డేటా ప్రొటెక్షన్ యాక్ట్ (DPDPA) ప్రకారం, మీ వ్యక్తిగత డేటాకు సంబంధించి మీకు ఈ క్రింది హక్కులు ఉన్నాయి:",
        exerciseRightsHeader: "నా హక్కులను నేను ఎలా వినియోగించుకోవచ్చు:",
        exerciseRightsDescription: "మీ హక్కులను వినియోగించుకోవడానికి, దయచేసి ఈ అడుగులు అనుసరించండి:",
        contactText: "మీ డేటాకు సంబంధించిన ఏవైనా అభ్యర్థనల కోసం, దయచేసి సంప్రదించండి -",
        footerNote: "గమనిక: మీ అభ్యర్థన చట్టపరమైన మరియు కాంట్రాక్టు బాధ్యతలకు లోబడి 90 రోజుల్లోగా ప్రాసెస్ చేయబడుతుంది.",
        legalStatementTemplate: "నేను {BP_NAME} కోసం {DF_NAME} కు నా సమ్మతిని ఇచ్చానని అంగీకరిస్తున్నాను.",
        dpdpaRights: [
            "వ్యక్తిగత డేటా గురించి సమాచారం పొందే హక్కు",
            "వ్యక్తిగత డేటా సవరణ మరియు తొలగింపు హక్కు",
            "ఫిర్యాదు పరిష్కార హక్కు",
            "నామినేట్ చేసే హక్కు"
        ],
        exerciseSteps: {
            step1: "యాక్సెస్ అభ్యర్థనను సమర్పించండి – క్లిక్ చేయండి",
            step2: "{DF_NAME} కు ఇచ్చిన మీ సమ్మతిని చూడండి – క్లిక్ చేయండి",
            step3: "ఫిర్యాదులను సమర్పించండి – క్లిక్ చేయండి",
            step4: "{DF_NAME} యొక్క DPO ని సంప్రదించండి – క్లిక్ చేయండి"
        },
        clickHere: "ఇక్కడ",
        successTitle: "మీ సమ్మతి సమర్పించబడింది",
        successDesc: "మీ సమ్మతి మరియు నమ్మకానికి ధన్యవాదాలు",
        manageConsentsBtn: "మీ సమ్మతులను నిర్వహించండి",
        viewReceiptBtn: "సమ్మతి రశీదును చూడండి"
    },
    ur: {
        numerals: [
            "۰",
            "۱",
            "۲",
            "۳",
            "۴",
            "۵",
            "۶",
            "۷",
            "۸",
            "۹"
        ],
        header: "رضامندی کی رسید",
        receiptId: "رسید آئی ڈی:",
        dateTime: "تاریخ اور وقت:",
        dataPrincipalId: "ڈیٹا پرنسپل آئی ڈی:",
        dataFiduciaryName: "ڈیٹا فیڈوشری نام:",
        nameOfGoodsService: "اشیاء/سروس کا نام:",
        legalStatementLabel: "قانونی بیان:",
        purposeHeader: "مقصد",
        purposeColumn: "مقصد",
        dataCollectedColumn: "جمع کردہ ذاتی ڈیٹا",
        noPurposes: "کوئی مقصد قبول نہیں کیا گیا",
        rightsHeader: "حقوق:",
        rightsDescription: "ڈیجیٹل پرسنل ڈیٹا پروٹیکشن ایکٹ (DPDPA) کے مطابق، آپ کے ذاتی ڈیٹا کے حوالے سے آپ کو درج ذیل حقوق حاصل ہیں:",
        exerciseRightsHeader: "میں اپنے حقوق کیسے استعمال کر سکتا ہوں:",
        exerciseRightsDescription: "اپنے حقوق استعمال کرنے کے لیے، براہ کرم ان اقدامات پر عمل کریں:",
        contactText: "اپنے ڈیٹا سے متعلق کسی بھی درخواست کے لیے، براہ کرم رابطہ کریں -",
        footerNote: "نوٹ: آپ کی درخواست پر قانونی اور معاہدے کی ذمہ داریوں کے تحت 90 دنوں کے اندر کارروائی کی جائے گی۔",
        legalStatementTemplate: "میں تسلیم کرتا ہوں کہ میں نے {BP_NAME} کے لیے {DF_NAME} کو اپنی رضامندی دی ہے۔",
        dpdpaRights: [
            "ذاتی ڈیٹا کے بارے میں معلومات حاصل کرنے کا حق",
            "ذاتی ڈیٹا کی اصلاح اور مٹانے کا حق",
            "شکایت کے ازالے کا حق",
            "نامزد کرنے کا حق"
        ],
        exerciseSteps: {
            step1: "رسائی کی درخواست جمع کروائیں – کلک کریں",
            step2: "{DF_NAME} کو دی گئی اپنی رضامنیاں دیکھیں – کلک کریں",
            step3: "شکایات جمع کروائیں – کلک کریں",
            step4: "{DF_NAME} کے DPO سے رابطہ کریں – کلک کریں"
        },
        clickHere: "یہاں",
        successTitle: "آپ کی رضامندی جمع کر دی گئی ہے",
        successDesc: "آپ کی رضامندی اور اعتماد کا شکریہ",
        manageConsentsBtn: "اپنی رضامندیوں کا انتظام کریں",
        viewReceiptBtn: "رضامندی کی رسید دیکھیں"
    }
};
function getReceiptTranslation(lang) {
    // Check if lang exists in mapping, otherwise default to 'en'
    const language = lang in RECEIPT_TRANSLATIONS ? lang : "en";
    return RECEIPT_TRANSLATIONS[language];
}
function getDpdpaRights(lang) {
    const t = getReceiptTranslation(lang);
    return [
        ...t.dpdpaRights
    ];
}
/**
 * Maps ASCII digits (0-9) to native script digits for supported languages.
 */ const DIGIT_MAPS = {
    // Devanagari numerals (Hindi, Marathi, Nepali, Konkani, Sanskrit, Maithili, Bodo, Dogri)
    hi: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    mr: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    ne: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    kok: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    sa: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    mai: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    brx: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    doi: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    // Bengali numerals (Bengali, Assamese, Manipuri)
    bn: [
        "০",
        "১",
        "২",
        "৩",
        "৪",
        "৫",
        "৬",
        "৭",
        "৮",
        "৯"
    ],
    as: [
        "০",
        "১",
        "২",
        "৩",
        "৪",
        "৫",
        "৬",
        "৭",
        "৮",
        "৯"
    ],
    mni: [
        "০",
        "১",
        "২",
        "৩",
        "৪",
        "৫",
        "৬",
        "৭",
        "৮",
        "৯"
    ],
    // Gujarati numerals
    gu: [
        "૦",
        "૧",
        "૨",
        "૩",
        "૪",
        "૫",
        "૬",
        "૭",
        "૮",
        "૯"
    ],
    // Gurmukhi numerals (Punjabi)
    pa: [
        "੦",
        "੧",
        "੨",
        "੩",
        "੪",
        "੫",
        "੬",
        "੭",
        "੮",
        "੯"
    ],
    // Kannada numerals
    kn: [
        "೦",
        "೧",
        "೨",
        "೩",
        "೪",
        "೫",
        "೬",
        "೭",
        "೮",
        "೯"
    ],
    // Telugu numerals
    te: [
        "౦",
        "౧",
        "౨",
        "౩",
        "౪",
        "౫",
        "౬",
        "౭",
        "౮",
        "౯"
    ],
    // Malayalam numerals
    ml: [
        "൦",
        "൧",
        "൨",
        "൩",
        "൪",
        "൫",
        " ",
        "൭",
        "൮",
        "൯"
    ],
    // Odia numerals
    or: [
        "୦",
        "୧",
        "୨",
        "୩",
        "୪",
        "୫",
        "୬",
        "୭",
        "୮",
        "୯"
    ],
    // Urdu/Sindhi usually use Eastern Arabic numerals (۰-۹)
    ur: [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ],
    sd: [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ],
    ks: [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ]
};
function localizeDigits(str, lang) {
    if (!str) return str;
    // If language isn't in our map, return original string (English/ASCII)
    if (!(lang in DIGIT_MAPS)) return str;
    const digits = DIGIT_MAPS[lang];
    return str.replace(/[0-9]/g, (d)=>digits[parseInt(d)]);
}
}),
"[project]/lib/constants/languages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Language Constants
 * Supported languages for India's 22 scheduled languages + English
 * Sorted alphabetically by English name (English first, then A-Z)
 */ /**
 * Supported language codes (ISO 639-1/639-3)
 */ __turbopack_context__.s([
    "DEFAULT_LANGUAGE",
    ()=>DEFAULT_LANGUAGE,
    "LANGUAGE_CODES",
    ()=>LANGUAGE_CODES,
    "SUPPORTED_LANGUAGES",
    ()=>SUPPORTED_LANGUAGES
]);
const SUPPORTED_LANGUAGES = {
    en: {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        rtl: false
    },
    as: {
        code: 'as',
        name: 'Assamese',
        nativeName: 'অসমীয়া',
        rtl: false
    },
    bn: {
        code: 'bn',
        name: 'Bengali',
        nativeName: 'বাংলা',
        rtl: false
    },
    brx: {
        code: 'brx',
        name: 'Bodo',
        nativeName: 'बड़ो',
        rtl: false
    },
    doi: {
        code: 'doi',
        name: 'Dogri',
        nativeName: 'डोगरी',
        rtl: false
    },
    gu: {
        code: 'gu',
        name: 'Gujarati',
        nativeName: 'ગુજરાતી',
        rtl: false
    },
    hi: {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिन्दी',
        rtl: false
    },
    kn: {
        code: 'kn',
        name: 'Kannada',
        nativeName: 'ಕನ್ನಡ',
        rtl: false
    },
    ks: {
        code: 'ks',
        name: 'Kashmiri',
        nativeName: 'کٲشُر',
        rtl: true
    },
    kok: {
        code: 'kok',
        name: 'Konkani',
        nativeName: 'कोंकणी',
        rtl: false
    },
    mai: {
        code: 'mai',
        name: 'Maithili',
        nativeName: 'मैथिली',
        rtl: false
    },
    ml: {
        code: 'ml',
        name: 'Malayalam',
        nativeName: 'മലയാളം',
        rtl: false
    },
    mni: {
        code: 'mni',
        name: 'Manipuri',
        nativeName: 'ꯃꯩꯇꯩꯂꯣꯟ',
        rtl: false
    },
    mr: {
        code: 'mr',
        name: 'Marathi',
        nativeName: 'मराठी',
        rtl: false
    },
    ne: {
        code: 'ne',
        name: 'Nepali',
        nativeName: 'नेपाली',
        rtl: false
    },
    or: {
        code: 'or',
        name: 'Odia',
        nativeName: 'ଓଡ଼ିଆ',
        rtl: false
    },
    pa: {
        code: 'pa',
        name: 'Punjabi',
        nativeName: 'ਪੰਜਾਬੀ',
        rtl: false
    },
    sa: {
        code: 'sa',
        name: 'Sanskrit',
        nativeName: 'संस्कृतम्',
        rtl: false
    },
    sat: {
        code: 'sat',
        name: 'Santali',
        nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ',
        rtl: false
    },
    sd: {
        code: 'sd',
        name: 'Sindhi',
        nativeName: 'سنڌي',
        rtl: true
    },
    ta: {
        code: 'ta',
        name: 'Tamil',
        nativeName: 'தமிழ்',
        rtl: false
    },
    te: {
        code: 'te',
        name: 'Telugu',
        nativeName: 'తెలుగు',
        rtl: false
    },
    ur: {
        code: 'ur',
        name: 'Urdu',
        nativeName: 'اردو',
        rtl: true
    }
};
const DEFAULT_LANGUAGE = 'en';
const LANGUAGE_CODES = Object.keys(SUPPORTED_LANGUAGES);
}),
"[project]/lib/types/languages.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ // Language types and helper functions
// Re-export constants from centralized location
__turbopack_context__.s([
    "getAllLanguages",
    ()=>getAllLanguages,
    "getLanguageInfo",
    ()=>getLanguageInfo,
    "getLanguageName",
    ()=>getLanguageName,
    "isRTL",
    ()=>isRTL,
    "isValidLanguageCode",
    ()=>isValidLanguageCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-rsc] (ecmascript)");
;
;
function getLanguageName(code, preferNative = false) {
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code];
    return preferNative ? lang.nativeName : lang.name;
}
function isRTL(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code].rtl;
}
function getLanguageInfo(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code];
}
function getAllLanguages() {
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]);
}
function isValidLanguageCode(code) {
    return code in __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"];
}
}),
"[project]/lib/utils/notice-translations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "getAvailableNoticeLanguages",
    ()=>getAvailableNoticeLanguages,
    "getBaseEntityTranslation",
    ()=>getBaseEntityTranslation,
    "getBusinessProcessTranslation",
    ()=>getBusinessProcessTranslation,
    "getUserAttributeTranslation",
    ()=>getUserAttributeTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/languages.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-rsc] (ecmascript)");
;
function getBusinessProcessTranslation(translations, languageCode, fallbackData) {
    // Try to get translation for requested language
    if (translations && typeof translations === "object") {
        const translation = translations[languageCode];
        if (translation) {
            return {
                name: translation.name || fallbackData.name,
                grantDescription: translation.grantDescription || fallbackData.grantDescription,
                revokeDescription: translation.revokeDescription || fallbackData.revokeDescription,
                reconsentDescription: translation.reconsentDescription || fallbackData.reconsentDescription
            };
        }
    }
    // Fallback to English
    return fallbackData;
}
function getBaseEntityTranslation(translations, languageCode, fallbackData) {
    // Try to get translation for requested language
    if (translations && typeof translations === "object") {
        const translation = translations[languageCode];
        if (translation) {
            return {
                name: translation.name || fallbackData.name,
                description: translation.description || fallbackData.description
            };
        }
    }
    // Fallback to English
    return fallbackData;
}
function getUserAttributeTranslation(translations, languageCode, fallbackName) {
    // Try to get translation for requested language
    if (translations && typeof translations === "object") {
        const translation = translations[languageCode];
        if (translation && translation.name) {
            return translation.name;
        }
    }
    // Fallback to English
    return fallbackName;
}
function getAvailableNoticeLanguages(businessProcess) {
    const languages = [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"]
    ];
    if (businessProcess.supportedLanguages && Array.isArray(businessProcess.supportedLanguages)) {
        // Filter out duplicates and English (already added)
        const additionalLanguages = businessProcess.supportedLanguages.filter((lang)=>lang !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"]);
        languages.push(...additionalLanguages);
    }
    return languages;
}
}),
"[project]/lib/services/consent-receipt-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Consent Receipt Service
 *
 * Generates consent receipts dynamically from Notice, BusinessProcess, and Consent data.
 * No database storage - receipts are computed on-demand.
 */ __turbopack_context__.s([
    "canGenerateReceipt",
    ()=>canGenerateReceipt,
    "generateConsentReceipt",
    ()=>generateConsentReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/dprm-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$consent$2d$receipt$2d$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/consent-receipt-translations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$notice$2d$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/notice-translations.ts [app-rsc] (ecmascript)");
;
;
;
;
/**
 * Get translated text from BusinessProcess or fallback to default
 */ function getTranslatedText(translations, language, field, fallback) {
    if (translations && typeof translations === "object") {
        const langData = translations[language];
        if (langData && langData[field]) {
            return langData[field];
        }
    }
    return fallback;
}
async function generateConsentReceipt(noticePublicId, targetLanguage) {
    try {
        // Fetch notice with all related data
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
                                processingPurpose: {
                                    include: {
                                        purposeOfProcessing: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        if (!notice) {
            console.error("Notice not found:", noticePublicId);
            return null;
        }
        // Only generate receipt for completed notices
        if (notice.status !== "completed" && notice.status !== "submitted") {
            console.error("Notice not completed:", notice.status);
            return null;
        }
        // Fetch consents created for this notice
        // Consents are linked to notice via dataPrincipalId, businessProcessId, and referenceId
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                dataPrincipalId: notice.dataPrincipalId,
                businessProcessId: notice.businessProcess.publicId,
                referenceId: notice.referenceId || undefined,
                status: "accepted"
            },
            include: {
                consentPurpose: true,
                processingPurpose: true
            },
            orderBy: {
                insertedAt: "asc"
            }
        });
        // Collect all unique user attribute names to fetch their translations
        const allUserAttributeNames = new Set();
        consents.forEach((c)=>{
            c.userAttributeNames.forEach((name)=>allUserAttributeNames.add(name));
        });
        // Fetch UserAttribute definitions for translations
        const userAttributesWithTranslations = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
            where: {
                name: {
                    in: Array.from(allUserAttributeNames)
                }
            }
        });
        // Map attribute name to UserAttribute object
        const userAttributeMap = new Map(userAttributesWithTranslations.map((attr)=>[
                attr.name,
                attr
            ]));
        // Use targetLanguage if provided, else fallback to notice's default language
        const lang = targetLanguage || notice.defaultLanguage;
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$consent$2d$receipt$2d$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getReceiptTranslation"])(lang);
        // Group consents by consent purpose
        const purposesMap = new Map();
        consents.forEach((consent)=>{
            const purposeName = getTranslatedText(consent.consentPurpose.translations, lang, "name", consent.consentPurpose.name);
            if (!purposesMap.has(purposeName)) {
                purposesMap.set(purposeName, {
                    purpose: purposeName,
                    personalDataCollected: []
                });
            }
            // Add user attributes to the purpose (translated)
            const purpose = purposesMap.get(purposeName);
            consent.userAttributeNames.forEach((attrName)=>{
                const attrDef = userAttributeMap.get(attrName);
                let translatedAttrName = attrName;
                if (attrDef) {
                    translatedAttrName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$notice$2d$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserAttributeTranslation"])(attrDef.translations, lang, attrName);
                }
                if (!purpose.personalDataCollected.includes(translatedAttrName)) {
                    purpose.personalDataCollected.push(translatedAttrName);
                }
            });
        });
        const purposes = Array.from(purposesMap.values());
        // Get environment variables
        const dataFiduciaryName = process.env.DATA_FIDUCIARY_NAME || "Data Fiduciary";
        const contactEmail = process.env.DATA_FIDUCIARY_CONTACT_EMAIL || "support@example.com";
        // Get translated business process name
        const serviceDescription = getTranslatedText(notice.businessProcess.translations, lang, "name", notice.businessProcess.name);
        // Build legal statement (Translated)
        const legalStatement = t.legalStatementTemplate.replace("{DF_NAME}", dataFiduciaryName).replace("{BP_NAME}", serviceDescription);
        // Generate DPRM link for this data principal
        const dprmUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDprmLink"])(notice.dataPrincipalId);
        // Generate exercise rights steps with DPRM link (Translated)
        const exerciseRightsSteps = [
            {
                step: 1,
                description: t.exerciseSteps.step1,
                link: dprmUrl
            },
            {
                step: 2,
                description: t.exerciseSteps.step2.replace("{DF_NAME}", dataFiduciaryName),
                link: dprmUrl
            },
            {
                step: 3,
                description: t.exerciseSteps.step3,
                link: dprmUrl
            },
            {
                step: 4,
                description: t.exerciseSteps.step4.replace("{DF_NAME}", dataFiduciaryName),
                link: ("TURBOPACK compile-time truthy", 1) ? `mailto:${contactEmail}` : "TURBOPACK unreachable"
            }
        ];
        // Build receipt data
        const receiptData = {
            receiptId: notice.publicId,
            dateTime: notice.markCompletedTimestamp || notice.updatedAt,
            dataPrincipalId: notice.dataPrincipalId,
            language: lang,
            serviceDescription,
            dataFiduciaryName,
            legalStatement,
            purposes,
            rights: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$consent$2d$receipt$2d$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDpdpaRights"])(lang),
            exerciseRightsSteps,
            contactEmail,
            noticePublicId: notice.publicId
        };
        return receiptData;
    } catch (error) {
        console.error("Error generating consent receipt:", error);
        return null;
    }
}
async function canGenerateReceipt(noticePublicId) {
    try {
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
            where: {
                publicId: noticePublicId
            },
            select: {
                status: true,
                consentStatus: true
            }
        });
        if (!notice) {
            return false;
        }
        // Can generate receipt if notice is completed or submitted
        return notice.status === "completed" || notice.status === "submitted";
    } catch (error) {
        console.error("Error checking receipt eligibility:", error);
        return false;
    }
}
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"602c2f9e018e90b80bde35601186e3a7755e3ceba5":"getConsentWalletData","781aec0c4263c41d913648cab3c7f1fc0173902e8d":"getReceiptViewDetails","788fc4bd2d8c3d7ef4a01379cb9bdcd71e167e52ef":"getReceiptData"},"",""] */ __turbopack_context__.s([
    "getConsentWalletData",
    ()=>getConsentWalletData,
    "getReceiptData",
    ()=>getReceiptData,
    "getReceiptViewDetails",
    ()=>getReceiptViewDetails
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
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$receipt$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consent-receipt-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
// 1. Define the include object as a plain const (Type Inference will handle the rest)
const dbInclude = {
    businessProcess: true,
    businessProcessRule: {
        include: {
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
            consentPurpose: true
        }
    },
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
    consentPurpose: true,
    // --- FIX IS HERE ---
    childConsents: {
        where: {
            auditTrail: {
                some: {
                    action: {
                        in: [
                            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ConsentAction"].VERSION_UPDATED,
                            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ConsentAction"].RENEWED,
                            __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ConsentAction"].SUPERCEDED
                        ]
                    }
                }
            }
        },
        select: {
            id: true
        }
    }
};
async function getUserAttributesDictionary() {
    const attributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
        select: {
            name: true,
            translations: true
        }
    });
    return attributes.reduce((acc, attr)=>{
        acc[attr.name] = {
            name: attr.name,
            translations: attr.translations
        };
        return acc;
    }, {});
}
async function getConsentWalletData(dataPrincipalId, majorDataPrincipalId) {
    try {
        // 2. Remove explicit type annotation.
        // 'allConsents' automatically infers the shape based on 'dbInclude' above.
        const allConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                dataPrincipalId,
                ...majorDataPrincipalId && {
                    majorDataPrincipalId
                }
            },
            include: dbInclude,
            orderBy: {
                insertedAt: "desc"
            }
        });
        const userAttributes = await getUserAttributesDictionary();
        const servicesMap = new Map();
        for (const dbConsent of allConsents){
            // TS knows businessProcess exists because of the inferred 'dbInclude'
            if (!dbConsent.businessProcess) continue;
            // TS knows childConsents exists and is an array
            const isSuperseded = dbConsent.status === "revoked" && dbConsent.childConsents && dbConsent.childConsents.length > 0;
            if (isSuperseded) {
                continue;
            }
            // Map to frontend type
            const consentForFrontend = {
                ...dbConsent,
                versionUpdates: dbConsent.childConsents,
                childConsents: undefined
            };
            const bpId = consentForFrontend.businessProcess.publicId;
            if (!servicesMap.has(bpId)) {
                servicesMap.set(bpId, {
                    serviceName: consentForFrontend.businessProcess.name,
                    serviceTranslations: consentForFrontend.businessProcess.translations,
                    servicePublicId: bpId,
                    consents: []
                });
            }
            servicesMap.get(bpId).consents.push(consentForFrontend);
        }
        return {
            success: true,
            services: Array.from(servicesMap.values()),
            userAttributes
        };
    } catch (error) {
        console.error("Error fetching consent wallet data:", error);
        return {
            success: false,
            services: [],
            userAttributes: {}
        };
    }
}
async function getReceiptViewDetails(referenceId, dataPrincipalId, processCode, version) {
    try {
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                code_version: {
                    code: processCode,
                    version: version
                }
            },
            select: {
                id: true
            }
        });
        if (!businessProcess) {
            return {
                success: false,
                error: "Business Process not found"
            };
        }
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
            where: {
                notice_accepted_unique_index: {
                    referenceId: referenceId,
                    dataPrincipalId: dataPrincipalId,
                    businessProcessId: businessProcess.id
                }
            },
            select: {
                publicId: true,
                dataPrincipalId: true
            }
        });
        if (!notice) {
            return {
                success: false,
                error: "Receipt/Notice not found"
            };
        }
        return {
            success: true,
            noticePublicId: notice.publicId,
            accessToken: notice.dataPrincipalId
        };
    } catch (error) {
        console.error("Error fetching receipt details:", error);
        return {
            success: false,
            error: "Failed to retrieve receipt details."
        };
    }
}
;
async function getReceiptData(referenceId, dataPrincipalId, processCode, version) {
    try {
        // 1. Resolve Notice Public ID using the existing helper
        const result = await getReceiptViewDetails(referenceId, dataPrincipalId, processCode, version);
        if (!result.success || !result.noticePublicId) {
            return {
                success: false,
                error: result.error || "Notice not found"
            };
        }
        // 2. Generate the receipt JSON data
        const receiptData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$receipt$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateConsentReceipt"])(result.noticePublicId);
        return {
            success: true,
            data: receiptData
        };
    } catch (error) {
        console.error("Error fetching receipt data:", error);
        return {
            success: false,
            error: "Failed to load receipt data."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getConsentWalletData,
    getReceiptViewDetails,
    getReceiptData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getConsentWalletData, "602c2f9e018e90b80bde35601186e3a7755e3ceba5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReceiptViewDetails, "781aec0c4263c41d913648cab3c7f1fc0173902e8d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReceiptData, "788fc4bd2d8c3d7ef4a01379cb9bdcd71e167e52ef", null);
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/timeline-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"606ef6b1e611dddbf652866b6d5a1e1b97b5a745f1":"getTimelineData"},"",""] */ __turbopack_context__.s([
    "getTimelineData",
    ()=>getTimelineData
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getTimelineData(dataPrincipalId, majorDataPrincipalId) {
    try {
        const rawAuditLogs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentAuditTrail.findMany({
            where: {
                dataPrincipalId,
                ...majorDataPrincipalId && {
                    consent: {
                        majorDataPrincipalId
                    }
                }
            },
            orderBy: {
                timestamp: "desc"
            },
            include: {
                consent: {
                    include: {
                        businessProcess: true,
                        businessProcessRule: {
                            include: {
                                consentPurpose: true,
                                processingPurpose: {
                                    include: {
                                        purposeOfProcessing: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        const groupedEvents = new Map();
        for (const log of rawAuditLogs){
            const details = log.details;
            // Group by requestId + action + businessProcessId
            const groupKey = `${log.consent.requestId}_${log.action}_${log.consent.businessProcessId}`;
            if (!groupedEvents.has(groupKey)) groupedEvents.set(groupKey, []);
            groupedEvents.get(groupKey).push(log);
        }
        const events = [];
        for (const [key, logs] of groupedEvents){
            const firstLog = logs[0];
            const consent = firstLog.consent;
            let type = "GRANTED";
            if (firstLog.action === "REVOKED") type = "REVOKED";
            else if ([
                "VERSION_UPDATED",
                "RENEWED",
                "SUPERCEDED"
            ].includes(firstLog.action)) type = "UPDATED";
            else if (firstLog.action === "EXPIRED") type = "EXPIRED";
            const sections = logs.reduce((acc, log)=>{
                const details = log.details;
                const rule = log.consent.businessProcessRule;
                const pp = rule?.processingPurpose;
                const ppMaster = pp?.purposeOfProcessing;
                const cpName = rule?.consentPurpose?.name;
                const currentAttrs = log.consent.userAttributeNames || [];
                // --- 1. Filter out updates with no actual changes ---
                if (log.action === "VERSION_UPDATED") {
                    const hasSpecificChanges = details?.changes && details.changes.length > 0 || details?.attributesDiff && details.attributesDiff.length > 0;
                    if (!hasSpecificChanges) return acc;
                }
                // --- 2. Change Summary Text ---
                let changeSummary = undefined;
                if (type === "UPDATED") {
                    if (details?.changes && Array.isArray(details.changes) && details.changes.length > 0) {
                        changeSummary = details.changes;
                    } else if (details?.reason === "New Purpose Added") {
                        changeSummary = [
                            "New Processing Purpose Added"
                        ];
                    }
                } else if (type === "REVOKED") {
                    changeSummary = details?.reason ? [
                        details.reason
                    ] : [
                        "Consent Revoked"
                    ];
                }
                // --- 3. ATTRIBUTES MERGE LOGIC (Unchanged + Diff) ---
                // Step A: Map all CURRENT attributes as 'unchanged' by default
                // (If type is GRANTED, everything is 'granted'/'added')
                const attrMap = new Map();
                const defaultStatus = type === "GRANTED" ? "added" : type === "REVOKED" ? "removed" : "unchanged";
                currentAttrs.forEach((attr)=>{
                    attrMap.set(attr, defaultStatus);
                });
                // Step B: Overlay the Diff from Audit Logs
                if (type === "UPDATED" && details?.attributesDiff && Array.isArray(details.attributesDiff)) {
                    details.attributesDiff.forEach((d)=>{
                        // 'added': Will update the existing 'unchanged' entry to 'added'
                        // 'removed': Will ADD a new entry (since it's missing from currentAttrs) as 'removed'
                        attrMap.set(d.name, d.status);
                    });
                }
                // Step C: Convert Map back to List
                const attributesList = Array.from(attrMap.entries()).map(([name, status])=>({
                        name,
                        status
                    }));
                // Step D: Calculate Stats for the Header Badge
                let addedCount = 0;
                let removedCount = 0;
                attributesList.forEach((a)=>{
                    if (a.status === "added") addedCount++;
                    if (a.status === "removed") removedCount++;
                });
                acc.push({
                    title: pp?.name || "Data Processing",
                    consentPurposeName: cpName,
                    description: pp?.description || ppMaster?.description || undefined,
                    translations: pp?.translations,
                    consentPurposeTranslations: rule?.consentPurpose?.translations,
                    isEssential: rule?.mandatory || false,
                    isOptional: !rule?.mandatory,
                    attributes: attributesList,
                    attributesSummary: {
                        addedCount,
                        removedCount
                    },
                    changes: changeSummary ? {
                        summaryText: changeSummary
                    } : undefined
                });
                return acc;
            }, []);
            if (sections.length > 0) {
                events.push({
                    id: key,
                    date: firstLog.timestamp,
                    type,
                    serviceName: consent.businessProcess.name,
                    serviceTranslations: consent.businessProcess.translations,
                    dataPrincipal: dataPrincipalId,
                    isMinor: false,
                    summary: type === "UPDATED" ? "Updated" : undefined,
                    details: {
                        sections
                    }
                });
            }
        }
        return {
            success: true,
            events
        };
    } catch (error) {
        console.error("Timeline Error:", error);
        return {
            success: false,
            events: []
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getTimelineData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTimelineData, "606ef6b1e611dddbf652866b6d5a1e1b97b5a745f1", null);
}),
"[project]/.next-internal/server/app/cms/principal/dprm/[access_token]/consent-wallet/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/dprm.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/timeline-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dprm.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$timeline$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/timeline-actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/cms/principal/dprm/[access_token]/consent-wallet/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/dprm.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/timeline-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007ed7046051a367ea295f22958c88a5a2ad656873",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiduciaryConfig"],
    "409835b588d5b3762e3eac883d8d0e15dc28958d2e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMinorsForMajor"],
    "602c2f9e018e90b80bde35601186e3a7755e3ceba5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConsentWalletData"],
    "606ef6b1e611dddbf652866b6d5a1e1b97b5a745f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$timeline$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimelineData"],
    "781aec0c4263c41d913648cab3c7f1fc0173902e8d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getReceiptViewDetails"],
    "788fc4bd2d8c3d7ef4a01379cb9bdcd71e167e52ef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getReceiptData"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$timeline$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cms/principal/dprm/[access_token]/consent-wallet/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/dprm.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/timeline-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$dprm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/dprm.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$fiduciary$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/fiduciary-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$timeline$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/timeline-actions.ts [app-rsc] (ecmascript)");
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
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ConsentWalletClientPage",
    ()=>ConsentWalletClientPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ConsentWalletClientPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConsentWalletClientPage() from the server but ConsentWalletClientPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx <module evaluation>", "ConsentWalletClientPage");
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ConsentWalletClientPage",
    ()=>ConsentWalletClientPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ConsentWalletClientPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConsentWalletClientPage() from the server but ConsentWalletClientPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx", "ConsentWalletClientPage");
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$ConsentWalletClientPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$ConsentWalletClientPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$ConsentWalletClientPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>__TURBOPACK__default__export__,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hoc$2f$with$2d$dprm$2d$session$2d$handler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hoc/with-dprm-session-handler.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$timeline$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/timeline-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$ConsentWalletClientPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function ConsentWalletPage({ sessionContext, searchParams }) {
    const resolvedSearchParams = await searchParams;
    const minorDataPrincipalId = resolvedSearchParams?.minor_data_principal_id;
    const dataPrincipalId = minorDataPrincipalId || sessionContext.dataPrincipalId;
    const majorDataPrincipalId = minorDataPrincipalId ? sessionContext.dataPrincipalId : undefined;
    // Fetch both datasets in parallel for performance
    const [walletResult, timelineResult] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConsentWalletData"])(dataPrincipalId, majorDataPrincipalId),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$timeline$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimelineData"])(dataPrincipalId, majorDataPrincipalId)
    ]);
    if (!walletResult.success) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-center text-red-500",
            children: "Error loading consent wallet. Please refresh."
        }, void 0, false, {
            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    // Use timeline events if successful, otherwise empty array
    const timelineEvents = timelineResult.success ? timelineResult.events : [];
    return(// CHANGED: Increased max-width from 'max-w-md' to 'max-w-6xl'
    // to accommodate the Desktop Split View (Timeline + Details)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mx-auto bg-white shadow-sm min-h-screen md:shadow-lg md:rounded-lg  md:min-h-[800px] overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$ConsentWalletClientPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConsentWalletClientPage"], {
            services: walletResult.services,
            timelineEvents: timelineEvents,
            userAttributes: walletResult.userAttributes
        }, void 0, false, {
            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/page.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this));
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hoc$2f$with$2d$dprm$2d$session$2d$handler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDprmSessionHandler"])(ConsentWalletPage);
const dynamic = "force-dynamic";
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e1554cc6._.js.map