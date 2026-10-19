(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/prisma.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/auth.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/providers/credentials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = {
    basePath: "/cms/api/auth",
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            async authorize (credentials) {
                if (!(credentials === null || credentials === void 0 ? void 0 : credentials.email) || !credentials.password) return null;
                // Do deep query once to fetch user with roles
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].user.findUnique({
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
                const isPasswordCorrect = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
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
        async jwt (param) {
            let { token, user, trigger } = param;
            if (user) {
                token.id = user.id;
                token.roles = user.roles;
            }
            // Do deep query to fetch roles if not already set
            // Or to refresh roles on session update
            if (trigger === "update" || !token.roles) {
                if (token.id) {
                    const userWithRoles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].user.findUnique({
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
        async session (param) {
            let { session, token } = param;
            if (token.id) {
                session.user.id = token.id;
                session.user.roles = token.roles;
            }
            return session;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/logger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
            console.log("".concat(color, "[").concat(level.toUpperCase(), "]\x1b[0m ").concat(message), context ? context : "");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/audit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-client] (ecmascript)");
;
;
async function logAudit(params) {
    try {
        const { action, resource, resourceId, performedByUserId, payload, result, status = "SUCCESS", failureReason, metadata } = params;
        // Sanitize payload/result (remove passwords, large blobs, etc.)
        const sanitizedPayload = sanitizeData(payload);
        const sanitizedResult = sanitizeData(result);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auditLog.create({
            data: {
                action,
                resource,
                resourceId: resourceId ? String(resourceId) : null,
                performedByUserId,
                payload: sanitizedPayload !== null && sanitizedPayload !== void 0 ? sanitizedPayload : undefined,
                result: sanitizedResult !== null && sanitizedResult !== void 0 ? sanitizedResult : undefined,
                status,
                failureReason,
                metadata: metadata !== null && metadata !== void 0 ? metadata : undefined
            }
        });
    } catch (error) {
        // Fallback to logger if DB write fails
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error("Failed to write audit log", error, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/prisma-adapter/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-client] (ecmascript)");
;
;
;
;
;
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    adapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismaAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    // TODO handle absolute expiry
    session: {
        strategy: "jwt",
        maxAge: 30 * 60
    },
    events: {
        async signIn (param) {
            let { user } = param;
            if (user.id) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAudit"])({
                    action: "LOGIN",
                    resource: "USER",
                    resourceId: user.id,
                    performedByUserId: user.id,
                    status: "SUCCESS"
                });
            }
        },
        async signOut (message) {
            var _message_token;
            if ("token" in message && ((_message_token = message.token) === null || _message_token === void 0 ? void 0 : _message_token.sub)) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAudit"])({
                    action: "LOGOUT",
                    resource: "USER",
                    resourceId: message.token.sub,
                    performedByUserId: message.token.sub,
                    status: "SUCCESS"
                });
            }
        }
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4776cb1a._.js.map