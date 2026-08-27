module.exports = [
"[project]/.next-internal/server/app/cms/api/v1/consents/validate/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/constants/api.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
 * API Constants
 * All API-related constants including error codes and API key configuration
 */ /**
 * Standard API error codes
 */ __turbopack_context__.s([
    "API_ERROR_CODES",
    ()=>API_ERROR_CODES,
    "API_KEY_CONFIG",
    ()=>API_KEY_CONFIG,
    "API_KEY_PREFIX",
    ()=>API_KEY_PREFIX
]);
const API_ERROR_CODES = {
    UNAUTHORIZED: "UNAUTHORIZED",
    FORBIDDEN: "FORBIDDEN",
    NOT_FOUND: "NOT_FOUND",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    INTERNAL_ERROR: "INTERNAL_ERROR",
    RATE_LIMIT_EXCEEDED: "RATE_LIMIT_EXCEEDED",
    INVALID_API_KEY: "INVALID_API_KEY",
    INACTIVE_API_KEY: "INACTIVE_API_KEY"
};
const API_KEY_PREFIX = "pk_";
const API_KEY_CONFIG = {
    PREFIX: API_KEY_PREFIX,
    RANDOM_BYTES: 32,
    RANDOM_LENGTH: 48,
    DISPLAY_PREFIX_LENGTH: 8
};
}),
"[project]/lib/api-errors.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
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
    "ApiError",
    ()=>ApiError,
    "ApiErrors",
    ()=>ApiErrors,
    "createErrorResponse",
    ()=>createErrorResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/api.ts [app-route] (ecmascript)");
;
;
;
class ApiError extends Error {
    statusCode;
    code;
    details;
    constructor(statusCode, code, message, details){
        super(message), this.statusCode = statusCode, this.code = code, this.details = details;
        this.name = "ApiError";
    }
}
function createErrorResponse(statusCode, code, message, details) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        error: {
            code,
            message,
            ...details && {
                details
            }
        }
    }, {
        status: statusCode
    });
}
const ApiErrors = {
    unauthorized: (message = "Missing or invalid API key")=>createErrorResponse(401, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].UNAUTHORIZED, message),
    invalidApiKey: (message = "Invalid API key format or value")=>createErrorResponse(401, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].INVALID_API_KEY, message),
    inactiveApiKey: (message = "API key has been disabled")=>createErrorResponse(403, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].INACTIVE_API_KEY, message),
    forbidden: (message = "Insufficient permissions")=>createErrorResponse(403, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].FORBIDDEN, message),
    notFound: (message = "Resource not found")=>createErrorResponse(404, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].NOT_FOUND, message),
    validationError: (message = "Validation failed", details)=>createErrorResponse(400, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].VALIDATION_ERROR, message, details),
    rateLimitExceeded: (message = "Rate limit exceeded")=>createErrorResponse(429, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].RATE_LIMIT_EXCEEDED, message),
    internalError: (message = "Internal server error")=>createErrorResponse(500, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].INTERNAL_ERROR, message)
};
}),
"[project]/lib/api-response.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    "createPaginatedResponse",
    ()=>createPaginatedResponse,
    "createSuccessResponse",
    ()=>createSuccessResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
function createSuccessResponse(data, meta) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data,
        ...meta && {
            meta: {
                ...meta,
                timestamp: new Date().toISOString()
            }
        }
    });
}
function createPaginatedResponse(data, pagination) {
    const totalPages = Math.ceil(pagination.total / pagination.limit);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data,
        meta: {
            timestamp: new Date().toISOString(),
            pagination: {
                ...pagination,
                totalPages
            }
        }
    });
}
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/queries/consent-queries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    "findConsentsForValidation",
    ()=>findConsentsForValidation,
    "findProcessingPurposesByPoPCodes",
    ()=>findProcessingPurposesByPoPCodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
;
async function findProcessingPurposesByPoPCodes(codes) {
    const processingPurposes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].processingPurpose.findMany({
        where: {
            purposeOfProcessing: {
                code: {
                    in: codes
                }
            }
        },
        select: {
            publicId: true
        }
    });
    return processingPurposes.map((pp)=>pp.publicId);
}
async function findConsentsForValidation(options) {
    const { dataPrincipalId, referenceId, consentId, processingPurposeIds, statuses = [
        "accepted",
        "revoked"
    ] } = options;
    // Build where conditions
    const whereConditions = {
        status: {
            in: statuses
        }
    };
    // Add identifier-based filtering
    if (dataPrincipalId) {
        whereConditions.dataPrincipalId = dataPrincipalId;
    }
    if (referenceId) {
        whereConditions.referenceId = referenceId;
    }
    if (consentId) {
        whereConditions.publicId = consentId;
    }
    // Add processing purpose filtering if provided
    if (processingPurposeIds && processingPurposeIds.length > 0) {
        whereConditions.processingPurposeId = {
            in: processingPurposeIds
        };
    }
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
        where: whereConditions,
        include: {
            processingPurpose: {
                include: {
                    purposeOfProcessing: true
                }
            },
            businessProcess: {
                select: {
                    code: true,
                    version: true
                }
            },
            consentPurpose: {
                select: {
                    code: true,
                    version: true
                }
            }
        },
        orderBy: {
            insertedAt: "desc"
        }
    });
}
}),
"[project]/lib/constants/services.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/constants/notice-metadata.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canonicalize/lib/canonicalize.js [app-route] (ecmascript)");
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
async function generateAccessToken(attrs, expiresAt) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    // Calculate expiry in seconds from now
    const expiryInSeconds = Math.floor(expiresAt.getTime() / 1000);
    const jwt = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](attrs).setProtectedHeader({
        alg: "HS256"
    }).setExpirationTime(expiryInSeconds).setIssuedAt().sign(secret);
    return jwt;
}
async function verifyAccessToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        return payload;
    } catch (error) {
        console.error("Error verifying access token:", error);
        return null;
    }
}
async function verifyNoticeToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
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
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
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
    const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(data);
    if (!encoded) return "";
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(encoded).digest("hex");
}
}),
"[project]/lib/services/dprm-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [app-route] (ecmascript)");
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
        const accessToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateAccessToken"])(attrs, expiresAt);
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLatestActiveConsents"])(dataPrincipalId);
    } catch (error) {
        console.error("Error fetching latest active consents for DPRM:", error);
        throw new Error("Failed to fetch latest active consents");
    }
}
}),
"[project]/lib/utils/logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/services/webhook-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-route] (ecmascript)");
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].webhookLog.create({
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
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("Failed to create webhook log", {
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
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug("Firing webhook", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info("Webhook delivered successfully", {
                endpointId: endpoint.publicId,
                eventId,
                status: response.status,
                responseTime
            });
            // Update log with success (fire-and-forget)
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].webhookLog.updateMany({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].warn("Webhook delivery failed with non-2xx response", {
                endpointId: endpoint.publicId,
                eventId,
                status: response.status,
                statusText: response.statusText,
                responseTime
            });
            // Update log with failure (fire-and-forget)
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].webhookLog.updateMany({
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
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("Webhook delivery timeout", {
                    endpointId: endpoint.publicId,
                    eventId,
                    url: endpoint.endpointUrl,
                    responseTime
                });
            } else {
                errorMsg = error.message;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("Webhook delivery error", {
                    endpointId: endpoint.publicId,
                    eventId,
                    error: error.message,
                    responseTime
                });
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("Webhook delivery unknown error", {
                endpointId: endpoint.publicId,
                eventId,
                responseTime
            });
        }
        // Update log with error (fire-and-forget)
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].webhookLog.updateMany({
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
        const webhooks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].webhook.findMany({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug("No active webhooks found for event type", {
                eventType
            });
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info("Triggering webhooks", {
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
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("Unexpected error in fireWebhook", {
                    endpointId: endpoint.publicId,
                    error: error instanceof Error ? error.message : "Unknown error"
                });
            });
        }
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("Error triggering webhook events", {
            eventType,
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
}
function generateSigningSecret() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])().replace(/-/g, "") + (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])().replace(/-/g, "");
}
}),
"[project]/lib/services/consents-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/services.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$notice$2d$metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/notice-metadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/dprm-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [app-route] (ecmascript)");
;
;
;
;
;
;
async function createConsents(noticePublicId, selections, language = "en") {
    try {
        // Get the notice with full business process data
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
            const majorMetadata = notice.metadata.find((m)=>m.key === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$notice$2d$metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NOTICE_METADATA_KEYS"].MAJOR_DATA_PRINCIPAL_ID);
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
        const consentDurationsMap = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].businessProcessToConsentPurpose.findMany({
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
                throw new Error(`Process rule not found for ID: ${selection.ruleId}`);
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
            const createdConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.createMany({
                data: consentData
            });
            // Get the created consent records with full details for webhook
            const createdConsentRecords = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consentAuditTrail.createMany({
                data: auditLogs
            });
            // WEBHOOK TRIGGER
            const dprmLink = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateDprmLink"])(notice.dataPrincipalId);
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
                const { generateNoticeLinkFromObject } = await __turbopack_context__.A("[project]/lib/services/notices-service.ts [app-route] (ecmascript, async loader)");
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_CREATED, {
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
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
        const consent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findUnique({
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.update({
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
        const topAttributesResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].$queryRaw`
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
        const processingPurposes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].processingPurpose.findMany({
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
    const BATCH_SIZE = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONSENT_BATCH_CONFIG"].BATCH_SIZE;
    const MAX_TOTAL_RECORDS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONSENT_BATCH_CONFIG"].MAX_TOTAL_RECORDS;
    let totalExpiredCount = 0;
    const allExpiredConsents = [];
    try {
        const now = new Date();
        let processedCount = 0;
        // Process in batches until no more expired consents or max limit reached
        while(processedCount < MAX_TOTAL_RECORDS){
            try {
                // Use a transaction with timeout and FOR UPDATE to lock rows
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
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
                const consentsWithDetails = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_EXPIRED, {
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
        const activeConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
    const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
    const currentBp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
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
"[project]/lib/schemas/consent-validation-schemas.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    "consentValidationSchema",
    ()=>consentValidationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
/**
 * Schema for consent validation request
 * 
 * Supports three validation types:
 * 1. data_principal_id - Validates consents for a specific data principal
 * 2. reference_id - Validates consents for a reference (e.g., transaction ID)
 * 3. consent_id - Validates a specific consent
 */ // Custom validation function for processing_purpose_codes based on type
const validateProcessingPurposeCodes = (data)=>{
    const { type, processing_purpose_codes } = data;
    // For consent_id: processing_purpose_codes are optional
    if (type === "consent_id") {
        return true;
    }
    // For data_principal_id or reference_id: processing_purpose_codes are REQUIRED
    if (type === "data_principal_id" || type === "reference_id") {
        // Must not be null or undefined
        if (processing_purpose_codes == null) {
            return false;
        }
        // Must not be empty array
        if (Array.isArray(processing_purpose_codes) && processing_purpose_codes.length === 0) {
            return false;
        }
    }
    return true;
};
const consentValidationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "ID is required"),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "data_principal_id",
        "reference_id",
        "consent_id"
    ]),
    processing_purpose_codes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Processing purpose code cannot be empty")).optional().nullable()
}).refine(validateProcessingPurposeCodes, {
    message: "processing_purpose_codes is required and must not be empty when type is data_principal_id or reference_id",
    path: [
        "processing_purpose_codes"
    ]
});
}),
"[project]/app/cms/api/v1/consents/validate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api-errors.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$consent$2d$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/queries/consent-queries.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$consent$2d$validation$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/consent-validation-schemas.ts [app-route] (ecmascript)");
;
;
;
;
;
async function POST(request) {
    try {
        // Parse request body
        const body = await request.json();
        // Validate request body
        let validatedData;
        try {
            validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$consent$2d$validation$2d$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consentValidationSchema"].parse(body);
        } catch (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].validationError("Invalid request body", error.errors || error.message);
        }
        const { id, type, processing_purpose_codes } = validatedData;
        // Resolve processing purpose IDs if codes are provided
        let processingPurposeIds;
        if (processing_purpose_codes && processing_purpose_codes.length > 0) {
            processingPurposeIds = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$consent$2d$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findProcessingPurposesByPoPCodes"])(processing_purpose_codes);
            if (processingPurposeIds.length === 0) {
                // No matching processing purposes found
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSuccessResponse"])({
                    consents: []
                });
            }
        }
        // Build query options based on type
        const queryOptions = {
            processingPurposeIds,
            statuses: [
                "accepted",
                "revoked"
            ]
        };
        // Add identifier-based filtering
        switch(type){
            case "data_principal_id":
                queryOptions.dataPrincipalId = id;
                break;
            case "reference_id":
                queryOptions.referenceId = id;
                break;
            case "consent_id":
                queryOptions.consentId = id;
                break;
        }
        // Fetch consents using query function
        const consents = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$consent$2d$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findConsentsForValidation"])(queryOptions);
        // Group by latest rule and format response
        const latestConsentsByRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groupConsentsByLatestRule"])(consents);
        const formattedConsents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatConsentsForValidation"])(Array.from(latestConsentsByRule.values()));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSuccessResponse"])({
            consents: formattedConsents
        });
    } catch (error) {
        // Log unexpected errors
        console.error("Error validating consents via API:", error);
        // Return generic error
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].internalError("Failed to validate consents");
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__32b977a4._.js.map