module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/cache-handlers/default.external.js [external] (next/dist/server/lib/cache-handlers/default.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/cache-handlers/default.external.js", () => require("next/dist/server/lib/cache-handlers/default.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/auth.config.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/providers/credentials.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [middleware] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = {
    basePath: "/cms/api/auth",
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])({
            async authorize (credentials) {
                if (!credentials?.email || !credentials.password) return null;
                // Do deep query once to fetch user with roles
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].user.findUnique({
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
                const isPasswordCorrect = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
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
                    const userWithRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].user.findUnique({
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
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/constants/api.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/api-errors.ts [middleware] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/api.ts [middleware] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
    unauthorized: (message = "Missing or invalid API key")=>createErrorResponse(401, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].UNAUTHORIZED, message),
    invalidApiKey: (message = "Invalid API key format or value")=>createErrorResponse(401, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].INVALID_API_KEY, message),
    inactiveApiKey: (message = "API key has been disabled")=>createErrorResponse(403, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].INACTIVE_API_KEY, message),
    forbidden: (message = "Insufficient permissions")=>createErrorResponse(403, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].FORBIDDEN, message),
    notFound: (message = "Resource not found")=>createErrorResponse(404, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].NOT_FOUND, message),
    validationError: (message = "Validation failed", details)=>createErrorResponse(400, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].VALIDATION_ERROR, message, details),
    rateLimitExceeded: (message = "Rate limit exceeded")=>createErrorResponse(429, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].RATE_LIMIT_EXCEEDED, message),
    internalError: (message = "Internal server error")=>createErrorResponse(500, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].INTERNAL_ERROR, message)
};
}),
"[project]/lib/api-key-utils.ts [middleware] (ecmascript) <locals>", ((__turbopack_context__) => {
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
    "generateApiKey",
    ()=>generateApiKey,
    "hashApiKey",
    ()=>hashApiKey,
    "isValidApiKeyFormat",
    ()=>isValidApiKeyFormat,
    "maskApiKey",
    ()=>maskApiKey,
    "verifyApiKey",
    ()=>verifyApiKey
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/api.ts [middleware] (ecmascript)");
;
;
;
function generateApiKey() {
    const prefix = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_KEY_PREFIX"];
    // Generate random data and convert to base64
    // Remove non-alphanumeric characters for clean key format
    const randomPart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_KEY_CONFIG"].RANDOM_BYTES).toString("base64").replace(/[+/=]/g, "") // Remove special characters
    .slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_KEY_CONFIG"].RANDOM_LENGTH); // Take first N characters
    const fullKey = `${prefix}${randomPart}`;
    return {
        fullKey,
        prefix: fullKey.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_KEY_CONFIG"].DISPLAY_PREFIX_LENGTH)
    };
}
function hashApiKey(apiKey) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])("sha256").update(apiKey).digest("hex");
}
function verifyApiKey(apiKey, hashedKey) {
    const computedHash = hashApiKey(apiKey);
    // Use constant-time comparison to prevent timing attacks
    // Both strings should be hex (64 chars for SHA-256)
    if (computedHash.length !== hashedKey.length) {
        return false;
    }
    let result = 0;
    for(let i = 0; i < computedHash.length; i++){
        result |= computedHash.charCodeAt(i) ^ hashedKey.charCodeAt(i);
    }
    return result === 0;
}
function isValidApiKeyFormat(apiKey) {
    const pattern = /^pk_[a-zA-Z0-9]{32,}$/;
    return pattern.test(apiKey);
}
function maskApiKey(apiKey) {
    if (apiKey.length < 16) return "***";
    const prefix = apiKey.slice(0, 8); // "pk_" + first 5 chars
    const suffix = apiKey.slice(-4); // Last 4 chars
    return `${prefix}...${suffix}`;
}
}),
"[project]/lib/queries/api-key-queries.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
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
    "findApiKeyByPrefix",
    ()=>findApiKeyByPrefix,
    "updateApiKeyLastUsed",
    ()=>updateApiKeyLastUsed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [middleware] (ecmascript)");
;
async function findApiKeyByPrefix(prefix) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].apiKey.findFirst({
        where: {
            prefix,
            isActive: true
        },
        include: {
            user: {
                include: {
                    userRoles: {
                        include: {
                            role: true
                        }
                    }
                }
            }
        }
    });
}
async function updateApiKeyLastUsed(id) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].apiKey.update({
        where: {
            id
        },
        data: {
            lastUsedAt: new Date()
        }
    });
}
}),
"[project]/lib/api-auth-middleware.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
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
    "clearApiKeyCache",
    ()=>clearApiKeyCache,
    "getApiContext",
    ()=>getApiContext,
    "getApiKeyCacheStats",
    ()=>getApiKeyCacheStats,
    "validateApiKey",
    ()=>validateApiKey,
    "withApiAuth",
    ()=>withApiAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api-errors.ts [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$key$2d$utils$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api-key-utils.ts [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$api$2d$key$2d$queries$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/queries/api-key-queries.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lru-cache/dist/esm/index.js [middleware] (ecmascript)");
;
;
;
;
const apiKeyCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LRUCache"]({
    max: 50,
    ttl: 1000 * 60 * 5,
    ttlAutopurge: true
});
/**
 * Extract API key from Authorization header
 * Supports: "Bearer <api-key>" or just "<api-key>"
 */ function extractApiKey(request) {
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
        return null;
    }
    // Support both "Bearer <key>" and just "<key>"
    const parts = authHeader.split(" ");
    if (parts.length === 2 && parts[0].toLowerCase() === "bearer") {
        return parts[1];
    }
    // If no "Bearer" prefix, treat entire header as the key
    return authHeader;
}
async function validateApiKey(request) {
    try {
        // Extract API key from Authorization header
        const apiKey = extractApiKey(request);
        if (!apiKey) {
            return null;
        }
        // Validate format
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$key$2d$utils$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isValidApiKeyFormat"])(apiKey)) {
            return null;
        }
        // Check LRU cache
        const cached = apiKeyCache.get(apiKey);
        if (cached) {
            // Update last used timestamp (fire and forget)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$api$2d$key$2d$queries$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["updateApiKeyLastUsed"])(cached.apiKeyId).catch((error)=>{
                console.error("Failed to update API key last used timestamp:", error);
            });
            return {
                user: {
                    id: cached.userId,
                    email: cached.userEmail,
                    name: cached.userName,
                    roles: cached.roles
                },
                apiKey: {
                    id: cached.apiKeyId,
                    name: cached.apiKeyName,
                    prefix: cached.apiKeyPrefix
                }
            };
        }
        // Extract prefix for database lookup
        const prefix = apiKey.slice(0, 8);
        // Find API key by prefix in database
        const apiKeyRecord = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$api$2d$key$2d$queries$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["findApiKeyByPrefix"])(prefix);
        if (!apiKeyRecord) {
            return null;
        }
        // Verify hash
        const isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$key$2d$utils$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verifyApiKey"])(apiKey, apiKeyRecord.key);
        if (!isValid) {
            return null;
        }
        // Build user roles
        const roles = apiKeyRecord.user.userRoles.map((ur)=>({
                id: ur.id,
                userId: ur.userId,
                roleId: ur.roleId,
                role: ur.role,
                assignedAt: ur.assignedAt,
                assignedBy: ur.assignedBy
            }));
        // Cache the result
        apiKeyCache.set(apiKey, {
            apiKeyId: apiKeyRecord.id,
            userId: apiKeyRecord.user.id,
            userName: apiKeyRecord.user.name,
            userEmail: apiKeyRecord.user.email,
            roles,
            apiKeyName: apiKeyRecord.name,
            apiKeyPrefix: apiKeyRecord.prefix,
            validatedAt: Date.now()
        });
        // Update last used timestamp (fire and forget)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$api$2d$key$2d$queries$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["updateApiKeyLastUsed"])(apiKeyRecord.id).catch((error)=>{
            console.error("Failed to update API key last used timestamp:", error);
        });
        // Return API context
        return {
            user: {
                id: apiKeyRecord.user.id,
                email: apiKeyRecord.user.email,
                name: apiKeyRecord.user.name,
                roles
            },
            apiKey: {
                id: apiKeyRecord.id,
                name: apiKeyRecord.name,
                prefix: apiKeyRecord.prefix
            }
        };
    } catch (error) {
        console.error("Error validating API key:", error);
        return null;
    }
}
function withApiAuth(handler) {
    return async (request)=>{
        // Validate API key
        const context = await validateApiKey(request);
        if (!context) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].unauthorized();
        }
        // Call the actual handler with the context
        try {
            return await handler(request, context);
        } catch (error) {
            console.error("Error in API route handler:", error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].internalError();
        }
    };
}
function clearApiKeyCache(apiKeyId) {
    for (const [key, value] of apiKeyCache.entries()){
        if (value.apiKeyId === apiKeyId) {
            apiKeyCache.delete(key);
        }
    }
}
function getApiKeyCacheStats() {
    return {
        size: apiKeyCache.size,
        max: apiKeyCache.max,
        ttl: apiKeyCache.ttl
    };
}
function getApiContext(request) {
    const userId = request.headers.get("x-api-user-id");
    const userEmail = request.headers.get("x-api-user-email");
    const userName = request.headers.get("x-api-user-name");
    const apiKeyId = request.headers.get("x-api-key-id");
    const apiKeyName = request.headers.get("x-api-key-name");
    const apiKeyPrefix = request.headers.get("x-api-key-prefix");
    const rolesJson = request.headers.get("x-api-user-roles");
    if (!userId || !apiKeyId) {
        throw new Error("API context not found. Ensure middleware authentication is configured.");
    }
    const roles = rolesJson ? JSON.parse(rolesJson) : [];
    return {
        user: {
            id: userId,
            email: userEmail || null,
            name: userName || null,
            roles
        },
        apiKey: {
            id: apiKeyId,
            name: apiKeyName || "",
            prefix: apiKeyPrefix || ""
        }
    };
}
}),
"[project]/lib/constants/routes.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
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
 * Route Constants
 * Application route paths and prefixes
 */ /**
 * Public routes accessible without authentication
 */ __turbopack_context__.s([
    "API_PREFIXES",
    ()=>API_PREFIXES,
    "AUTH_ROUTES",
    ()=>AUTH_ROUTES,
    "DEFAULT_LOGIN_REDIRECT",
    ()=>DEFAULT_LOGIN_REDIRECT,
    "HEALTH_CHECK_ENDPOINT",
    ()=>HEALTH_CHECK_ENDPOINT,
    "PUBLIC_ROUTES",
    ()=>PUBLIC_ROUTES,
    "ROUTE_PREFIXES",
    ()=>ROUTE_PREFIXES
]);
const PUBLIC_ROUTES = [
    "/cms/signup",
    "/cms/login",
    "/cms/link-expired",
    "/cms/invalid-link"
];
const AUTH_ROUTES = [
    "/cms/signup",
    "/cms/login"
];
const API_PREFIXES = {
    AUTH: "/cms/api/auth",
    V1: "/cms/api/v1"
};
const ROUTE_PREFIXES = {
    PRINCIPAL: "/cms/principal",
    DATA_FIDUCIARY: "/cms/data-fiduciary",
    ADMIN: "/cms/admin"
};
const DEFAULT_LOGIN_REDIRECT = "/cms/data-fiduciary/dashboard";
const HEALTH_CHECK_ENDPOINT = "/_health";
}),
"[project]/middleware.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
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
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.config.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$auth$2d$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-auth-middleware.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api-errors.ts [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/api.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/routes.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
;
;
;
;
;
;
const { auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"]);
async function middleware(req) {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    // Private health route
    if (nextUrl.pathname.endsWith(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["HEALTH_CHECK_ENDPOINT"])) {
        if ("TURBOPACK compile-time truthy", 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: "healthy",
                timestamp: new Date().toISOString(),
                uptime: process.uptime()
            });
        } else //TURBOPACK unreachable
        ;
    }
    const isPrincipalRoute = nextUrl.pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ROUTE_PREFIXES"].PRINCIPAL);
    if (isPrincipalRoute) {
        // Allow principal routes to proceed - validation will be handled by with-token-validation
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const isApiAuthRoute = nextUrl.pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_PREFIXES"].AUTH);
    const isApiV1Route = nextUrl.pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_PREFIXES"].V1);
    const isPublicRoute = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["PUBLIC_ROUTES"].includes(nextUrl.pathname);
    const isAuthRoute = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["AUTH_ROUTES"].includes(nextUrl.pathname);
    // API v1 routes use API key authentication, not session auth
    if (isApiV1Route) {
        // Validate API key in middleware
        const apiContext = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$auth$2d$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["validateApiKey"])(req);
        if (!apiContext) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createErrorResponse"])(401, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].UNAUTHORIZED, "Missing or invalid API key");
        }
        // Attach API context to request headers for route handler to access
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set("x-api-user-id", apiContext.user.id);
        requestHeaders.set("x-api-user-email", apiContext.user.email || "");
        requestHeaders.set("x-api-user-name", apiContext.user.name || "");
        requestHeaders.set("x-api-key-id", apiContext.apiKey.id);
        requestHeaders.set("x-api-key-name", apiContext.apiKey.name);
        requestHeaders.set("x-api-key-prefix", apiContext.apiKey.prefix);
        requestHeaders.set("x-api-user-roles", JSON.stringify(apiContext.user.roles));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
            request: {
                headers: requestHeaders
            }
        });
    }
    if (isApiAuthRoute) {
        // NextAuth routes
        return;
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["DEFAULT_LOGIN_REDIRECT"], nextUrl));
        }
        return;
    }
    if (!isLoggedIn && !isPublicRoute) {
        const callbackUrl = encodeURIComponent(nextUrl.pathname + nextUrl.search);
        return Response.redirect(new URL(`/cms/login?callbackUrl=${callbackUrl}`, nextUrl));
    }
    return;
}
const __TURBOPACK__default__export__ = auth(middleware);
const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/",
        "/(api|trpc)(.*)"
    ],
    runtime: "nodejs"
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7cd6bc4c._.js.map