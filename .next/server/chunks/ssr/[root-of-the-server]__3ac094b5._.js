module.exports = [
"[project]/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0060c229d5c44aa39a52b0da063b4e763444cd1280":"logout"},"",""] */ __turbopack_context__.s([
    "logout",
    ()=>logout
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function logout() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])({
        redirectTo: "/cms/login"
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    logout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "0060c229d5c44aa39a52b0da063b4e763444cd1280", null);
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
"[project]/lib/utils/breaking-change-detector.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "detectBreakingChanges",
    ()=>detectBreakingChanges,
    "hasBreakingChanges",
    ()=>hasBreakingChanges
]);
function detectBreakingChanges(baseline, current) {
    const breakingChanges = [];
    // If no baseline, this is a new CP - no breaking changes possible
    if (!baseline) {
        return breakingChanges;
    }
    // 1. Check for deleted processing purposes
    if (current.step2Data.deleted.length > 0) {
        // Get names from baseline for deleted IDs
        const deletedNames = current.step2Data.deleted.map((id)=>baseline.step2Data.existing.find((pp)=>pp.id === id)?.name).filter(Boolean).join(", ");
        breakingChanges.push({
            type: "pp_deleted",
            description: `${current.step2Data.deleted.length} processing purpose(s) deleted`,
            details: deletedNames,
            oldValue: deletedNames,
            newValue: null
        });
    }
    // 2. Check for ANY modifications to processing purposes
    for (const modifiedPP of current.step2Data.modified){
        // Find baseline PP by comparing: id (if exists), tempId, or purposeOfProcessingCode
        const baselinePP = baseline.step2Data.existing.find((pp)=>{
            if (modifiedPP.id && pp.id === modifiedPP.id) return true;
            if (modifiedPP.tempId && pp.tempId === modifiedPP.tempId) return true;
            if (modifiedPP.purposeOfProcessingCode && pp.purposeOfProcessingCode === modifiedPP.purposeOfProcessingCode) return true;
            return false;
        });
        if (baselinePP) {
            // Check if name changed
            if (baselinePP.name !== modifiedPP.name) {
                breakingChanges.push({
                    type: "pp_modified",
                    description: `Processing purpose name changed`,
                    oldValue: baselinePP.name,
                    newValue: modifiedPP.name
                });
            }
            // Check if description changed
            if ((baselinePP.description || "") !== (modifiedPP.description || "")) {
                breakingChanges.push({
                    type: "pp_modified",
                    description: `Processing purpose "${baselinePP.name}": Description changed`,
                    oldValue: baselinePP.description || "None",
                    newValue: modifiedPP.description || "None"
                });
            }
            // Check if purpose of processing changed
            if (baselinePP.purposeOfProcessingId !== modifiedPP.purposeOfProcessingId) {
                breakingChanges.push({
                    type: "pp_modified",
                    description: `Processing purpose "${baselinePP.name}": Purpose sub master changed`,
                    details: "Changing the purpose sub master category requires a new version"
                });
            }
            // Check if user attributes were removed
            const removedAttributes = baselinePP.userAttributeNames.filter((ua)=>!modifiedPP.userAttributeNames.includes(ua));
            if (removedAttributes.length > 0) {
                breakingChanges.push({
                    type: "ua_removed",
                    description: `Processing purpose "${baselinePP.name}": Purpose attributes removed`,
                    oldValue: baselinePP.userAttributeNames,
                    newValue: modifiedPP.userAttributeNames
                });
            }
            // Check if user attributes were added
            const addedAttributes = modifiedPP.userAttributeNames.filter((ua)=>!baselinePP.userAttributeNames.includes(ua));
            if (addedAttributes.length > 0) {
                breakingChanges.push({
                    type: "pp_modified",
                    description: `Processing purpose "${baselinePP.name}": Purpose attributes added`,
                    oldValue: baselinePP.userAttributeNames,
                    newValue: modifiedPP.userAttributeNames
                });
            }
        }
    }
    // 3. Check for new processing purposes added (also requires versioning for published CPs)
    if (current.step2Data.new.length > 0) {
        const newNames = current.step2Data.new.map((pp)=>pp.name).join(", ");
        breakingChanges.push({
            type: "pp_modified",
            description: `${current.step2Data.new.length} new processing purpose(s) added`,
            details: newNames,
            oldValue: null,
            newValue: newNames
        });
    }
    return breakingChanges;
}
function hasBreakingChanges(baseline, current) {
    return detectBreakingChanges(baseline, current).length > 0;
}
}),
"[project]/lib/utils/business-process-breaking-changes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Business Process Breaking Change Detection
 *
 * Detects breaking changes between baseline and current business process state.
 * Breaking changes require creating a new version instead of updating in-place.
 */ __turbopack_context__.s([
    "detectBreakingChanges",
    ()=>detectBreakingChanges,
    "getBreakingChangeTypeName",
    ()=>getBreakingChangeTypeName,
    "groupBreakingChangesByType",
    ()=>groupBreakingChangesByType
]);
function detectBreakingChanges(baseline, current) {
    if (!baseline) {
        return []; // No baseline means new business process
    }
    const changes = [];
    // ONLY Step 2: Consent Purposes & Business Process Rules Changes (CRITICAL)
    // These are the ONLY breaking changes for Business Process
    const baselineConsentPurposes = baseline.consentPurposes || [];
    const currentConsentPurposes = current.consentPurposes || [];
    // Check if consent purposes were added or removed
    const baselineCPIds = new Set(baselineConsentPurposes.map((cp)=>cp.consentPurposeId));
    const currentCPIds = new Set(currentConsentPurposes.map((cp)=>cp.consentPurposeId));
    // Consent purposes added
    for (const cpId of currentCPIds){
        if (!baselineCPIds.has(cpId)) {
            changes.push({
                type: "step2",
                field: "consentPurposes",
                oldValue: null,
                newValue: cpId,
                description: `Consent purpose ${cpId} added`
            });
        }
    }
    // Consent purposes removed
    for (const cpId of baselineCPIds){
        if (!currentCPIds.has(cpId)) {
            changes.push({
                type: "step2",
                field: "consentPurposes",
                oldValue: cpId,
                newValue: null,
                description: `Consent purpose ${cpId} removed`
            });
        }
    }
    // Check changes within existing consent purposes
    for (const currentCP of currentConsentPurposes){
        const baselineCP = baselineConsentPurposes.find((cp)=>cp.consentPurposeId === currentCP.consentPurposeId);
        if (baselineCP) {
            // Duration type change
            if (baselineCP.durationType !== currentCP.durationType) {
                changes.push({
                    type: "step2",
                    field: "durationType",
                    oldValue: baselineCP.durationType,
                    newValue: currentCP.durationType,
                    description: `Consent purpose ${currentCP.consentPurposeId}: Duration type changed`
                });
            }
            // Consent duration change
            if (currentCP.durationType === "custom_duration") {
                const baselineDuration = baselineCP.consentDuration;
                const currentDuration = currentCP.consentDuration;
                const baselineUnit = baselineCP.durationUnit || "days";
                const currentUnit = currentCP.durationUnit || "days";
                if (baselineDuration !== currentDuration || baselineUnit !== currentUnit) {
                    changes.push({
                        type: "step2",
                        field: "consentDuration",
                        oldValue: `${baselineDuration} ${baselineUnit}`,
                        newValue: `${currentDuration} ${currentUnit}`,
                        description: `Consent purpose ${currentCP.consentPurposeId}: Consent duration changed`
                    });
                }
            }
            // Processing rules changes (CRITICAL - these are BusinessProcessRules)
            const baselineRules = baselineCP.processingRules || [];
            const currentRules = currentCP.processingRules || [];
            const baselinePPIds = new Set(baselineRules.map((r)=>r.processingPurposeId));
            const currentPPIds = new Set(currentRules.map((r)=>r.processingPurposeId));
            // Processing purposes added
            for (const ppId of currentPPIds){
                if (!baselinePPIds.has(ppId)) {
                    changes.push({
                        type: "step2_rules",
                        field: "processingRules",
                        oldValue: null,
                        newValue: ppId,
                        description: `Processing purpose ${ppId} added to consent purpose ${currentCP.consentPurposeId}`
                    });
                }
            }
            // Processing purposes removed
            for (const ppId of baselinePPIds){
                if (!currentPPIds.has(ppId)) {
                    changes.push({
                        type: "step2_rules",
                        field: "processingRules",
                        oldValue: ppId,
                        newValue: null,
                        description: `Processing purpose ${ppId} removed from consent purpose ${currentCP.consentPurposeId}`
                    });
                }
            }
            // Check rule field changes (mandatory, revocable, reconsentable)
            for (const currentRule of currentRules){
                const baselineRule = baselineRules.find((r)=>r.processingPurposeId === currentRule.processingPurposeId);
                if (baselineRule) {
                    // Mandatory flag change
                    if (baselineRule.isMandatory !== currentRule.isMandatory) {
                        changes.push({
                            type: "step2_rules",
                            field: "isMandatory",
                            oldValue: baselineRule.isMandatory,
                            newValue: currentRule.isMandatory,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Mandatory flag changed`
                        });
                    }
                    // Revocable flag change
                    if (baselineRule.isRevocable !== currentRule.isRevocable) {
                        changes.push({
                            type: "step2_rules",
                            field: "isRevocable",
                            oldValue: baselineRule.isRevocable,
                            newValue: currentRule.isRevocable,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Revocable flag changed`
                        });
                    }
                    // Reconsentable flag change
                    if (baselineRule.isReconsentable !== currentRule.isReconsentable) {
                        changes.push({
                            type: "step2_rules",
                            field: "isReconsentable",
                            oldValue: baselineRule.isReconsentable,
                            newValue: currentRule.isReconsentable,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Reconsentable flag changed`
                        });
                    }
                    // User attributes change
                    const baselineAttrs = (baselineRule.userAttributes || []).sort();
                    const currentAttrs = (currentRule.userAttributes || []).sort();
                    if (JSON.stringify(baselineAttrs) !== JSON.stringify(currentAttrs)) {
                        changes.push({
                            type: "step2_rules",
                            field: "userAttributes",
                            oldValue: baselineAttrs,
                            newValue: currentAttrs,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Purpose attributes changed`
                        });
                    }
                    // Retention duration change (compare calculated hours)
                    const baselineHours = calculateRetentionHours(baselineRule.retentionDurationValue, baselineRule.retentionDurationUnit);
                    const currentHours = calculateRetentionHours(currentRule.retentionDurationValue, currentRule.retentionDurationUnit);
                    if (baselineHours !== currentHours) {
                        changes.push({
                            type: "step2_rules",
                            field: "retentionDuration",
                            oldValue: `${baselineRule.retentionDurationValue} ${baselineRule.retentionDurationUnit}`,
                            newValue: `${currentRule.retentionDurationValue} ${currentRule.retentionDurationUnit}`,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Retention duration changed`
                        });
                    }
                }
            }
        }
    }
    return changes;
}
function groupBreakingChangesByType(changes) {
    return changes.reduce((acc, change)=>{
        if (!acc[change.type]) {
            acc[change.type] = [];
        }
        acc[change.type].push(change);
        return acc;
    }, {});
}
function getBreakingChangeTypeName(type) {
    const typeNames = {
        step2: "Consent Purposes",
        step2_rules: "Processing Rules (BusinessProcessRules)"
    };
    return typeNames[type] || type;
}
function calculateRetentionHours(value, unit) {
    if (!value || !unit) return null;
    switch(unit){
        case "years":
            return value * 365 * 24;
        case "months":
            return value * 30 * 24;
        case "weeks":
            return value * 7 * 24;
        case "days":
        default:
            return value * 24;
    }
}
}),
"[project]/lib/services/business-processes-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "bulkUpdateBusinessProcessesForConsentPurposeVersion",
    ()=>bulkUpdateBusinessProcessesForConsentPurposeVersion,
    "checkBusinessProcessCodeExists",
    ()=>checkBusinessProcessCodeExists,
    "createBusinessProcess",
    ()=>createBusinessProcess,
    "deleteBusinessProcess",
    ()=>deleteBusinessProcess,
    "getAllBusinessProcesses",
    ()=>getAllBusinessProcesses,
    "getBusinessProcessById",
    ()=>getBusinessProcessById,
    "getBusinessProcessFormData",
    ()=>getBusinessProcessFormData,
    "getBusinessProcessesUsingConsentPurpose",
    ()=>getBusinessProcessesUsingConsentPurpose,
    "getBusinessProcessesUsingConsentPurposeForView",
    ()=>getBusinessProcessesUsingConsentPurposeForView,
    "getLatestBusinessProcessVersionByCode",
    ()=>getLatestBusinessProcessVersionByCode,
    "getPublishedConsentPurposes",
    ()=>getPublishedConsentPurposes,
    "propagateConsentPurposeVersionToBusinessProcesses",
    ()=>propagateConsentPurposeVersionToBusinessProcesses,
    "saveBusinessProcess",
    ()=>saveBusinessProcess,
    "saveOrUpdateBusinessProcess",
    ()=>saveOrUpdateBusinessProcess,
    "saveOrUpdateBusinessProcessWithVersioning",
    ()=>saveOrUpdateBusinessProcessWithVersioning,
    "updateBusinessProcess",
    ()=>updateBusinessProcess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$business$2d$process$2d$breaking$2d$changes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/business-process-breaking-changes.ts [app-rsc] (ecmascript)");
;
;
async function getAllBusinessProcesses() {
    try {
        const businessProcesses = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findMany({
            include: {
                businessUnit: {
                    select: {
                        name: true,
                        code: true
                    }
                }
            },
            orderBy: {
                updatedAt: "desc"
            }
        });
        return businessProcesses;
    } catch (error) {
        console.error("Error fetching business processes:", error);
        throw new Error("Failed to fetch processes");
    }
}
async function getBusinessProcessById(id) {
    try {
        // 1. Fetch the business process and its relations (same as your original query)
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                id
            },
            include: {
                businessUnit: {
                    select: {
                        id: true,
                        name: true,
                        code: true
                    }
                },
                businessProcessRules: {
                    include: {
                        consentPurpose: {
                            select: {
                                id: true,
                                name: true,
                                code: true
                            }
                        },
                        processingPurpose: {
                            select: {
                                id: true,
                                name: true,
                                userAttributeNames: true
                            }
                        }
                    }
                },
                businessProcessToConsentPurposes: {
                    include: {
                        consentPurpose: {
                            select: {
                                id: true,
                                name: true,
                                code: true,
                                version: true
                            }
                        }
                    }
                }
            }
        });
        // 2. If no process or no consent purposes, return the result immediately
        if (!businessProcess || !businessProcess.businessProcessToConsentPurposes || businessProcess.businessProcessToConsentPurposes.length === 0) {
            return businessProcess;
        }
        // 3. --- NEW LOGIC STARTS HERE ---
        // Collect all unique consent purpose codes from the result
        const consentPurposeCodes = [
            ...new Set(businessProcess.businessProcessToConsentPurposes.map((bpToCp)=>bpToCp.consentPurpose.code))
        ];
        // 4. Run a single "groupBy" query to find the max version for each code
        const maxVersions = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.groupBy({
            by: [
                "code"
            ],
            where: {
                code: {
                    in: consentPurposeCodes
                }
            },
            _max: {
                version: true
            }
        });
        // 5. Create a simple lookup map for max versions (e.g., { 'CP_CODE_A': 3 })
        const maxVersionMap = new Map();
        for (const item of maxVersions){
            maxVersionMap.set(item.code, item._max.version);
        }
        // 6. Augment the consent purposes with the new flag
        // We must re-map the array to create new objects with the added field
        const augmentedBpToCps = businessProcess.businessProcessToConsentPurposes.map((bpToCp)=>{
            const cp = bpToCp.consentPurpose;
            const maxVersionForCode = maxVersionMap.get(cp.code);
            // The flag is true if a max version was found AND it's greater than the current one
            const hasNewerVersion = maxVersionForCode !== null && maxVersionForCode !== undefined && maxVersionForCode > cp.version;
            // Convert retention duration (hours) to value/unit for each rule
            // Filter rules for this specific consent purpose from the main businessProcess.businessProcessRules array
            const rules = businessProcess.businessProcessRules?.filter((r)=>r.consentPurposeId === cp.id) || [];
            const augmentedRules = rules.map((rule)=>{
                let value = rule.retentionDurationValue;
                let unit = rule.retentionDurationUnit;
                // If we have retentionDuration (hours) but no value/unit (which is expected now), convert it
                if (rule.retentionDuration !== null && rule.retentionDuration !== undefined) {
                    const hours = rule.retentionDuration;
                    if (hours % (24 * 365) === 0) {
                        value = hours / (24 * 365);
                        unit = "years";
                    } else if (hours % (24 * 30) === 0) {
                        value = hours / (24 * 30);
                        unit = "months";
                    } else if (hours % (24 * 7) === 0) {
                        value = hours / (24 * 7);
                        unit = "weeks";
                    } else if (hours % 24 === 0) {
                        value = hours / 24;
                        unit = "days";
                    } else {
                        // Fallback to days with decimal if needed, or just days
                        value = parseFloat((hours / 24).toFixed(2));
                        unit = "days";
                    }
                }
                return {
                    ...rule,
                    retentionDurationValue: value,
                    retentionDurationUnit: unit
                };
            });
            return {
                ...bpToCp,
                consentPurpose: {
                    ...cp,
                    businessProcessRules: augmentedRules,
                    hasNewerVersion: hasNewerVersion
                }
            };
        });
        // 7. Return the modified businessProcess object
        // We create a new object, replacing the original array with our augmented one
        return {
            ...businessProcess,
            businessProcessToConsentPurposes: augmentedBpToCps
        };
    } catch (error) {
        console.error("Error fetching business process:", error);
        throw new Error("Failed to fetch process");
    }
}
async function createBusinessProcess(data) {
    try {
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.create({
            data: {
                name: data.name,
                code: data.code,
                status: data.status || "draft",
                grantDescription: data.grantDescription,
                revokeDescription: data.revokeDescription || null,
                reconsentDescription: data.reconsentDescription || null,
                defaultLanguage: data.defaultLanguage ?? "en",
                supportedLanguages: data.supportedLanguages ?? [
                    "en"
                ],
                legalDocuments: data.legalDocuments ?? {},
                creationType: data.creationType || "manual",
                createdBy: data.createdBy,
                businessUnitId: data.businessUnitId
            }
        });
        return businessProcess;
    } catch (error) {
        console.error("Error creating business process:", error);
        throw new Error("Failed to create process");
    }
}
async function updateBusinessProcess(id, data) {
    try {
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.update({
            where: {
                id
            },
            data
        });
        return businessProcess;
    } catch (error) {
        console.error("Error updating business process:", error);
        throw new Error("Failed to update process");
    }
}
async function deleteBusinessProcess(id) {
    try {
        // Use transaction to ensure all deletes succeed or all fail
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            // Delete business process rules related to this business process
            await tx.businessProcessRule.deleteMany({
                where: {
                    businessProcessId: id
                }
            });
            // Delete business process to consent purpose mappings
            await tx.businessProcessToConsentPurpose.deleteMany({
                where: {
                    businessProcessId: id
                }
            });
            // Finally, delete the business process itself
            await tx.businessProcess.delete({
                where: {
                    id
                }
            });
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting business process:", error);
        throw new Error("Failed to delete process");
    }
}
async function saveOrUpdateBusinessProcess(formData, createdBy, businessProcessId, status) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            let businessProcess;
            if (businessProcessId) {
                // Prepare update data
                const updateData = {
                    name: formData.name,
                    code: formData.code,
                    grantDescription: formData.grantDescription,
                    revokeDescription: formData.revokeDescription || null,
                    reconsentDescription: formData.reconsentDescription || null,
                    businessUnitId: formData.businessUnitId,
                    ...status && {
                        status
                    },
                    // Only update legalDocuments if provided
                    ...formData.legalDocuments && {
                        legalDocuments: formData.legalDocuments
                    }
                };
                // Update existing business process - only update basic fields and status
                businessProcess = await tx.businessProcess.update({
                    where: {
                        id: businessProcessId
                    },
                    data: updateData
                });
                // Only update consent purposes if they are provided
                if (formData.consentPurposes && formData.consentPurposes.length > 0) {
                    // Delete existing consent purpose relationships and rules
                    await tx.businessProcessRule.deleteMany({
                        where: {
                            businessProcessId
                        }
                    });
                    await tx.businessProcessToConsentPurpose.deleteMany({
                        where: {
                            businessProcessId
                        }
                    });
                }
            } else {
                // Create new business process
                businessProcess = await tx.businessProcess.create({
                    data: {
                        name: formData.name,
                        code: formData.code,
                        status: status || "draft",
                        grantDescription: formData.grantDescription,
                        revokeDescription: formData.revokeDescription || null,
                        reconsentDescription: formData.reconsentDescription || null,
                        defaultLanguage: "en",
                        supportedLanguages: [
                            "en"
                        ],
                        legalDocuments: formData.legalDocuments || {},
                        template: "default",
                        creationType: "manual",
                        createdBy,
                        businessUnitId: formData.businessUnitId
                    }
                });
            }
            // 2. Create BusinessProcessToConsentPurpose records and BusinessProcessRules
            // Only do this if consent purposes are provided and not empty
            if (formData.consentPurposes && formData.consentPurposes.length > 0) {
                for (const consentConfig of formData.consentPurposes){
                    // Calculate duration in hours
                    let durationInHours = null;
                    if (consentConfig.durationType === "custom_duration" && consentConfig.consentDuration) {
                        const duration = consentConfig.consentDuration;
                        const unit = consentConfig.durationUnit || "days";
                        switch(unit){
                            case "days":
                                durationInHours = duration * 24;
                                break;
                            case "weeks":
                                durationInHours = duration * 24 * 7;
                                break;
                            case "months":
                                durationInHours = duration * 24 * 30; // approximate
                                break;
                            case "years":
                                durationInHours = duration * 24 * 365; // approximate
                                break;
                            default:
                                durationInHours = duration * 24; // default to days
                        }
                    }
                    // Create BusinessProcessToConsentPurpose record
                    await tx.businessProcessToConsentPurpose.create({
                        data: {
                            businessProcessId: businessProcess.id,
                            consentPurposeId: consentConfig.consentPurposeId,
                            consentDuration: durationInHours
                        }
                    });
                    // Create BusinessProcessRule records for each processing purpose
                    for (const rule of consentConfig.processingRules){
                        await tx.businessProcessRule.create({
                            data: {
                                businessProcessId: businessProcess.id,
                                consentPurposeId: consentConfig.consentPurposeId,
                                processingPurposeId: rule.processingPurposeId,
                                mandatory: rule.isMandatory,
                                reconsentableByPrincipal: rule.isReconsentable,
                                revocableByPrincipal: rule.isRevocable,
                                retentionDuration: rule.retentionDurationValue !== undefined && rule.retentionDurationValue !== null && rule.retentionDurationUnit ? (()=>{
                                    const val = rule.retentionDurationValue;
                                    switch(rule.retentionDurationUnit){
                                        case "years":
                                            return val * 365 * 24;
                                        case "months":
                                            return val * 30 * 24;
                                        case "weeks":
                                            return val * 7 * 24;
                                        case "days":
                                        default:
                                            return val * 24;
                                    }
                                })() : null,
                                createdBy
                            }
                        });
                    }
                }
            }
            return businessProcess;
        });
        return result;
    } catch (error) {
        console.error("Error saving business process:", error);
        throw new Error("Failed to save process");
    }
}
async function saveBusinessProcess(formData, createdBy) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            // 1. Create the business process
            const businessProcess = await tx.businessProcess.create({
                data: {
                    name: formData.name,
                    code: formData.code,
                    status: "draft",
                    grantDescription: formData.grantDescription,
                    revokeDescription: formData.revokeDescription || null,
                    reconsentDescription: formData.reconsentDescription || null,
                    defaultLanguage: "en",
                    supportedLanguages: [
                        "en"
                    ],
                    legalDocuments: {},
                    template: "default",
                    creationType: "manual",
                    createdBy,
                    businessUnitId: formData.businessUnitId
                }
            });
            // 2. Create BusinessProcessToConsentPurpose records and BusinessProcessRules
            for (const consentConfig of formData.consentPurposes){
                // Calculate duration in hours
                let durationInHours = null;
                if (consentConfig.durationType === "custom_duration" && consentConfig.consentDuration) {
                    const duration = consentConfig.consentDuration;
                    const unit = consentConfig.durationUnit || "days";
                    switch(unit){
                        case "days":
                            durationInHours = duration * 24;
                            break;
                        case "weeks":
                            durationInHours = duration * 24 * 7;
                            break;
                        case "months":
                            durationInHours = duration * 24 * 30; // approximate
                            break;
                        case "years":
                            durationInHours = duration * 24 * 365; // approximate
                            break;
                        default:
                            durationInHours = duration * 24; // default to days
                    }
                }
                // Create BusinessProcessToConsentPurpose record
                await tx.businessProcessToConsentPurpose.create({
                    data: {
                        businessProcessId: businessProcess.id,
                        consentPurposeId: consentConfig.consentPurposeId,
                        consentDuration: durationInHours
                    }
                });
                // Create BusinessProcessRule records for each processing purpose
                for (const rule of consentConfig.processingRules){
                    await tx.businessProcessRule.create({
                        data: {
                            businessProcessId: businessProcess.id,
                            consentPurposeId: consentConfig.consentPurposeId,
                            processingPurposeId: rule.processingPurposeId,
                            mandatory: rule.isMandatory,
                            reconsentableByPrincipal: rule.isReconsentable,
                            revocableByPrincipal: rule.isRevocable,
                            retentionDuration: rule.retentionDurationValue !== undefined && rule.retentionDurationValue !== null && rule.retentionDurationUnit ? (()=>{
                                const val = rule.retentionDurationValue;
                                switch(rule.retentionDurationUnit){
                                    case "years":
                                        return val * 365 * 24;
                                    case "months":
                                        return val * 30 * 24;
                                    case "weeks":
                                        return val * 7 * 24;
                                    case "days":
                                    default:
                                        return val * 24;
                                }
                            })() : null,
                            createdBy
                        }
                    });
                }
            }
            return businessProcess;
        });
        return result;
    } catch (error) {
        console.error("Error saving business process:", error);
        throw new Error("Failed to save process");
    }
}
async function getPublishedConsentPurposes() {
    try {
        const consentPurposes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findMany({
            where: {
                status: "published"
            },
            include: {
                processingPurposes: {
                    where: {
                        status: "published"
                    },
                    include: {
                        purposeOfProcessing: true
                    }
                }
            },
            orderBy: {
                name: "asc"
            }
        });
        return consentPurposes;
    } catch (error) {
        console.error("Error fetching published consent purposes:", error);
        throw new Error("Failed to fetch published consent purposes");
    }
}
async function getBusinessProcessFormData() {
    try {
        const [consentPurposes, userAttributes, dataProcessors] = await Promise.all([
            getPublishedConsentPurposes(),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
                orderBy: {
                    name: "asc"
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].dataProcessor.findMany({
                where: {
                    active: true
                },
                orderBy: {
                    brandName: "asc"
                }
            })
        ]);
        return {
            consentPurposes,
            userAttributes,
            dataProcessors
        };
    } catch (error) {
        console.error("Error fetching business process form data:", error);
        throw new Error("Failed to fetch process form data");
    }
}
async function checkBusinessProcessCodeExists(code, excludeId) {
    try {
        // Build the where clause to find business processes with the same code
        const where = {
            code
        };
        // If excludeId is provided, exclude that specific record
        if (excludeId !== undefined) {
            where.id = {
                not: excludeId
            };
        }
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
            where
        });
        // Return true if a business process with this code exists (excluding the current one)
        return !!businessProcess;
    } catch (error) {
        console.error("Error checking business process code:", error);
        throw new Error("Failed to check process code");
    }
}
async function saveOrUpdateBusinessProcessWithVersioning(clientState, createdBy, businessProcessId, status) {
    try {
        // Calculate supported languages from translations
        const translations = clientState.step4Data?.translations || {};
        const supportedLanguages = Object.keys(translations).length > 0 ? Object.keys(translations) : [
            "en"
        ]; // Default to English if no translations
        // Detect breaking changes
        const breakingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$business$2d$process$2d$breaking$2d$changes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectBreakingChanges"])(clientState.baseline, clientState);
        const hasBreakingChanges = breakingChanges.length > 0;
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            let bpId = businessProcessId;
            const bpStatus = status || "draft";
            let isNewVersion = false;
            if (!clientState.step1Data) {
                throw new Error("Step 1 data is required");
            }
            // Determine if we need to create a new version
            if (hasBreakingChanges && bpId) {
                const currentBP = await tx.businessProcess.findUnique({
                    where: {
                        id: bpId
                    },
                    select: {
                        version: true,
                        code: true,
                        status: true
                    }
                });
                if (!currentBP) {
                    throw new Error("Process not found");
                }
                // Only create new version if current BP is published
                if (currentBP.status === "published") {
                    // Find the highest version for this code to avoid conflicts
                    const highestVersion = await getLatestBusinessProcessVersionByCode(currentBP.code);
                    const newVersion = highestVersion + 1;
                    // Create new version
                    const newBP = await tx.businessProcess.create({
                        data: {
                            name: clientState.step1Data.name,
                            code: currentBP.code,
                            version: newVersion,
                            status: bpStatus,
                            grantDescription: clientState.step1Data.grantDescription,
                            revokeDescription: clientState.step1Data.revokeDescription || null,
                            reconsentDescription: clientState.step1Data.reconsentDescription || null,
                            businessUnit: {
                                connect: {
                                    id: clientState.step1Data.businessUnitId
                                }
                            },
                            template: "default",
                            defaultLanguage: "en",
                            supportedLanguages: supportedLanguages,
                            translations: clientState.step4Data?.translations || {},
                            legalDocuments: clientState.step3Data?.legalDocuments || {},
                            publishedAt: bpStatus === "published" ? new Date() : null,
                            creationType: "manual",
                            createdBy
                        }
                    });
                    bpId = newBP.id;
                    isNewVersion = true;
                } else {
                    // Draft BP with breaking changes → update in place
                    await tx.businessProcess.update({
                        where: {
                            id: bpId
                        },
                        data: {
                            name: clientState.step1Data.name,
                            code: clientState.step1Data.code,
                            status: bpStatus,
                            grantDescription: clientState.step1Data.grantDescription,
                            revokeDescription: clientState.step1Data.revokeDescription || null,
                            reconsentDescription: clientState.step1Data.reconsentDescription || null,
                            businessUnitId: clientState.step1Data.businessUnitId,
                            supportedLanguages: supportedLanguages,
                            template: "default",
                            translations: clientState.step4Data?.translations || {},
                            legalDocuments: clientState.step3Data?.legalDocuments || {},
                            publishedAt: bpStatus === "published" ? new Date() : null
                        }
                    });
                }
            } else if (bpId) {
                // Update existing (no breaking changes or draft)
                const updateData = {
                    name: clientState.step1Data.name,
                    code: clientState.step1Data.code,
                    status: bpStatus,
                    grantDescription: clientState.step1Data.grantDescription,
                    revokeDescription: clientState.step1Data.revokeDescription || null,
                    reconsentDescription: clientState.step1Data.reconsentDescription || null,
                    businessUnitId: clientState.step1Data.businessUnitId,
                    supportedLanguages: supportedLanguages,
                    template: "default",
                    translations: clientState.step4Data?.translations || {},
                    legalDocuments: clientState.step3Data?.legalDocuments || {},
                    publishedAt: bpStatus === "published" ? new Date() : null
                };
                await tx.businessProcess.update({
                    where: {
                        id: bpId
                    },
                    data: updateData
                });
            } else {
                const translationsToSave = clientState.step4Data?.translations || {};
                const legalDocsToSave = clientState.step3Data?.legalDocuments || {};
                // Create new BP
                const newBP = await tx.businessProcess.create({
                    data: {
                        name: clientState.step1Data.name,
                        code: clientState.step1Data.code,
                        version: 1,
                        status: bpStatus,
                        grantDescription: clientState.step1Data.grantDescription,
                        revokeDescription: clientState.step1Data.revokeDescription || null,
                        reconsentDescription: clientState.step1Data.reconsentDescription || null,
                        businessUnit: {
                            connect: {
                                id: clientState.step1Data.businessUnitId
                            }
                        },
                        template: "default",
                        defaultLanguage: "en",
                        supportedLanguages: supportedLanguages,
                        translations: translationsToSave,
                        legalDocuments: legalDocsToSave,
                        publishedAt: bpStatus === "published" ? new Date() : null,
                        creationType: "manual",
                        createdBy
                    }
                });
                bpId = newBP.id;
            }
            // Handle Step 2: Consent Purposes and Business Process Rules
            // Only recreate rules if there were Step 2 changes or it's a new version/BP
            const step2Changes = breakingChanges.filter((c)=>c.type === "step2");
            const hasStep2Changes = step2Changes.length > 0 || isNewVersion || !businessProcessId;
            if (bpId && hasStep2Changes) {
                // Only delete existing rules if we're updating an existing BP (not creating a new version)
                // When creating a new version, bpId is the NEW BP's ID which has no rules yet
                if (!isNewVersion && businessProcessId) {
                    // Check if there are any business process rules for this BP
                    const existingRules = await tx.businessProcessRule.findMany({
                        where: {
                            businessProcessId: bpId
                        },
                        select: {
                            publicId: true
                        }
                    });
                    if (existingRules.length > 0) {
                        // Check if any of these rules have consents referencing them
                        const rulePublicIds = existingRules.map((r)=>r.publicId);
                        const existingConsents = await tx.consent.findFirst({
                            where: {
                                businessProcessRuleId: {
                                    in: rulePublicIds
                                }
                            },
                            select: {
                                id: true
                            }
                        });
                        if (existingConsents) {
                            throw new Error("Cannot modify process rules as there are existing consents. Please create a new version instead.");
                        }
                    }
                    // Safe to delete as no consents exist
                    await tx.businessProcessRule.deleteMany({
                        where: {
                            businessProcessId: bpId
                        }
                    });
                    await tx.businessProcessToConsentPurpose.deleteMany({
                        where: {
                            businessProcessId: bpId
                        }
                    });
                }
                // Create new rules (for new versions, new BPs, or when Step 2 has changes)
                const consentPurposes = clientState.consentPurposes || [];
                for (const consentConfig of consentPurposes){
                    // Calculate duration in hours
                    let durationInHours = null;
                    if (consentConfig.durationType === "custom_duration" && consentConfig.consentDuration) {
                        const duration = consentConfig.consentDuration;
                        const unit = consentConfig.durationUnit || "days";
                        switch(unit){
                            case "days":
                                durationInHours = duration * 24;
                                break;
                            case "weeks":
                                durationInHours = duration * 24 * 7;
                                break;
                            case "months":
                                durationInHours = duration * 24 * 30;
                                break;
                            case "years":
                                durationInHours = duration * 24 * 365;
                                break;
                            default:
                                durationInHours = duration * 24;
                        }
                    }
                    // Create BusinessProcessToConsentPurpose record
                    await tx.businessProcessToConsentPurpose.create({
                        data: {
                            businessProcessId: bpId,
                            consentPurposeId: consentConfig.consentPurposeId,
                            consentDuration: durationInHours
                        }
                    });
                    // Create BusinessProcessRule records
                    for (const rule of consentConfig.processingRules){
                        await tx.businessProcessRule.create({
                            data: {
                                businessProcessId: bpId,
                                consentPurposeId: consentConfig.consentPurposeId,
                                processingPurposeId: rule.processingPurposeId,
                                mandatory: rule.isMandatory,
                                reconsentableByPrincipal: rule.isReconsentable,
                                revocableByPrincipal: rule.isRevocable,
                                retentionDuration: rule.retentionDurationValue !== undefined && rule.retentionDurationValue !== null && rule.retentionDurationUnit ? (()=>{
                                    const val = rule.retentionDurationValue;
                                    switch(rule.retentionDurationUnit){
                                        case "years":
                                            return val * 365 * 24;
                                        case "months":
                                            return val * 30 * 24;
                                        case "weeks":
                                            return val * 7 * 24;
                                        case "days":
                                        default:
                                            return val * 24;
                                    }
                                })() : null,
                                createdBy
                            }
                        });
                    }
                }
            }
            return {
                businessProcessId: bpId,
                isNewVersion,
                hasBreakingChanges,
                breakingChanges
            };
        });
        return result;
    } catch (error) {
        console.error("Error saving business process with versioning:", error);
        throw new Error("Failed to save process");
    }
}
async function getBusinessProcessesUsingConsentPurpose(code, version) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findMany({
        where: {
            businessProcessToConsentPurposes: {
                some: {
                    consentPurpose: {
                        code,
                        version
                    }
                }
            }
        },
        include: {
            businessProcessToConsentPurposes: true
        }
    });
}
async function bulkUpdateBusinessProcessesForConsentPurposeVersion({ code, oldVersion, newVersion, userId }) {
    const affectedBPs = await getBusinessProcessesUsingConsentPurpose(code, oldVersion);
    const newBusinessProcesses = [];
    for (const bp of affectedBPs){
        // Find the join objects for BP <-> CP
        const joined = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcessToConsentPurpose.findMany({
            where: {
                businessProcessId: bp.id
            },
            include: {
                consentPurpose: true
            }
        });
        // Map to set: for any joined CP with this code, swap to new version; else keep as is
        const newBPtoCPs = await Promise.all(joined.map(async (j)=>{
            let consentPurposeId = j.consentPurposeId;
            if (j.consentPurpose.code === code && j.consentPurpose.version === oldVersion) {
                // Get new version for this code
                const newCP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findFirst({
                    where: {
                        code,
                        version: newVersion
                    }
                });
                if (newCP) consentPurposeId = newCP.id;
            }
            return {
                consentPurposeId
            };
        }));
        // Deep clone business process
        const { id, createdAt, updatedAt, publishedAt, ...bpCloneData } = bp;
        const highestVersion = await getLatestBusinessProcessVersionByCode(bp.code);
        const createdBP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.create({
            data: {
                ...bpCloneData,
                version: highestVersion + 1,
                status: "draft",
                createdBy: userId,
                createdAt: new Date(),
                updatedAt: new Date(),
                publishedAt: null,
                businessProcessToConsentPurposes: {
                    create: newBPtoCPs
                }
            }
        });
        newBusinessProcesses.push(createdBP);
    }
    return newBusinessProcesses;
}
async function propagateConsentPurposeVersionToBusinessProcesses(code, oldVersion, newVersion, userId, propagateToBPIds) {
    // 1. Fetch all selected BPs, and relevant sub-entities
    const affectedBPs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findMany({
        where: {
            id: {
                in: propagateToBPIds
            }
        },
        include: {
            businessProcessToConsentPurposes: {
                include: {
                    consentPurpose: true
                }
            },
            businessProcessRules: true
        }
    });
    const newBusinessProcesses = [];
    // 2. Fetch both new and old CP versions to create a PP map
    const newCP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findFirst({
        where: {
            code,
            version: newVersion
        },
        include: {
            processingPurposes: true
        }
    });
    if (!newCP) {
        throw new Error(`ConsentPurpose ${code} v${newVersion} not found`);
    }
    const oldCP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findFirst({
        where: {
            code,
            version: oldVersion
        },
        include: {
            processingPurposes: true
        }
    });
    if (!oldCP) {
        // This should not happen if affectedBPs were found, but it's a safe check
        throw new Error(`ConsentPurpose ${code} v${oldVersion} not found for mapping`);
    }
    // 3. Create the Processing Purpose ID mapping
    // Map: purposeOfProcessingId (definition) -> old processingPurpose.id (instance)
    const popIdToOldPPId = new Map();
    for (const pp of oldCP.processingPurposes){
        if (pp.purposeOfProcessingId) {
            popIdToOldPPId.set(pp.purposeOfProcessingId, pp.id);
        }
    }
    // Map: purposeOfProcessingId (definition) -> new processingPurpose.id (instance)
    const popIdToNewPPId = new Map();
    for (const pp of newCP.processingPurposes){
        if (pp.purposeOfProcessingId) {
            popIdToNewPPId.set(pp.purposeOfProcessingId, pp.id);
        }
    }
    // Final Map: old processingPurpose.id -> new processingPurpose.id
    const oldPPIdToNewPPIdMap = new Map();
    for (const [popId, oldPPId] of popIdToOldPPId.entries()){
        const newPPId = popIdToNewPPId.get(popId);
        if (newPPId) {
            oldPPIdToNewPPIdMap.set(oldPPId, newPPId);
        }
    }
    // --- End of PP Mapping ---
    for (const bp of affectedBPs){
        // 4. Build join data for new BP (swapping new CP ID)
        const newBPtoCPs = bp.businessProcessToConsentPurposes.map((j)=>{
            let consentPurposeId = j.consentPurposeId;
            if (j.consentPurpose.code === code && j.consentPurpose.version === oldVersion) {
                consentPurposeId = newCP.id;
            }
            return {
                consentPurposeId,
                consentDuration: j.consentDuration
            };
        });
        // 5. Create the new business process
        const highestVersion = await getLatestBusinessProcessVersionByCode(bp.code);
        const createdBP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.create({
            data: {
                name: bp.name,
                code: bp.code,
                version: highestVersion + 1,
                status: "published",
                grantDescription: bp.grantDescription,
                revokeDescription: bp.revokeDescription,
                reconsentDescription: bp.reconsentDescription,
                defaultLanguage: bp.defaultLanguage ?? "en",
                supportedLanguages: bp.supportedLanguages ?? [
                    "en"
                ],
                translations: bp.translations ?? {},
                legalDocuments: bp.legalDocuments ?? {},
                creationType: bp.creationType || "manual",
                createdBy: userId,
                businessUnitId: bp.businessUnitId,
                template: bp.template ?? "default",
                createdAt: new Date(),
                updatedAt: new Date(),
                publishedAt: null,
                businessProcessToConsentPurposes: {
                    create: newBPtoCPs
                }
            },
            include: {
                businessProcessToConsentPurposes: true
            }
        });
        // 6. Create CP ID map for rule lookup
        const oldCPIdToNewCPIdMap = new Map();
        bp.businessProcessToConsentPurposes.forEach((j)=>{
            if (j.consentPurpose.code === code && j.consentPurpose.version === oldVersion) {
                oldCPIdToNewCPIdMap.set(j.consentPurposeId, newCP.id);
            }
        });
        // 7. Re-create Business Process Rules for the new BP version
        for (const bpToCp of createdBP.businessProcessToConsentPurposes){
            // Fetch all current processing purposes for this CP
            const currentCP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findUnique({
                where: {
                    id: bpToCp.consentPurposeId
                },
                include: {
                    processingPurposes: true
                }
            });
            if (!currentCP) continue;
            // For each processing purpose, find the rule in the old BP (if any)
            for (const procPurpose of currentCP.processingPurposes){
                // ** UPDATED LOGIC TO FIND OLD RULE **
                const oldRule = bp.businessProcessRules.find((r)=>{
                    // Check if this rule belonged to the old, versioned CP
                    const ruleBelongedToOldCP = oldCPIdToNewCPIdMap.has(r.consentPurposeId);
                    // --- Consent Purpose Check ---
                    let cpMatch = false;
                    if (ruleBelongedToOldCP) {
                        // Case 1: Rule for the CP that was versioned
                        cpMatch = oldCPIdToNewCPIdMap.get(r.consentPurposeId) === bpToCp.consentPurposeId;
                    } else {
                        // Case 2: Rule for a CP that was not versioned
                        cpMatch = r.consentPurposeId === bpToCp.consentPurposeId;
                    }
                    if (!cpMatch) return false;
                    // --- Processing Purpose Check ---
                    let ppMatch = false;
                    if (ruleBelongedToOldCP) {
                        // Case 1: This PP belongs to the CP that was versioned.
                        // Map its old ID to the new ID using our new map.
                        ppMatch = oldPPIdToNewPPIdMap.get(r.processingPurposeId) === procPurpose.id;
                    } else {
                        // Case 2: This PP belongs to a CP that was *not* versioned.
                        // The ID should be a direct match.
                        ppMatch = r.processingPurposeId === procPurpose.id;
                    }
                    return ppMatch; // Both CP and PP must match
                });
                // Create the new rule, using defaults if oldRule is not found
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcessRule.create({
                    data: {
                        businessProcessId: createdBP.id,
                        consentPurposeId: bpToCp.consentPurposeId,
                        processingPurposeId: procPurpose.id,
                        // ** ADDED NULL CHECKS **
                        mandatory: oldRule?.mandatory ?? false,
                        reconsentableByPrincipal: oldRule?.reconsentableByPrincipal ?? false,
                        revocableByPrincipal: oldRule?.revocableByPrincipal ?? false,
                        retentionDuration: oldRule?.retentionDuration ?? null,
                        createdBy: userId
                    }
                });
            }
        }
        newBusinessProcesses.push(createdBP);
    }
    return newBusinessProcesses;
}
async function getLatestBusinessProcessVersionByCode(code) {
    const latestBP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
        where: {
            code
        },
        orderBy: {
            version: "desc"
        }
    });
    if (!latestBP) return null;
    return latestBP.version;
}
async function getBusinessProcessesUsingConsentPurposeForView(consentPurposeId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findMany({
        where: {
            businessProcessToConsentPurposes: {
                some: {
                    consentPurpose: {
                        id: consentPurposeId
                    }
                }
            }
        },
        select: {
            id: true,
            name: true,
            code: true,
            status: true,
            version: true,
            updatedAt: true,
            businessUnit: {
                select: {
                    name: true
                }
            }
        }
    });
}
}),
"[project]/lib/services/consent-purpose-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "deleteConsentPurpose",
    ()=>deleteConsentPurpose,
    "getAllConsentPurposes",
    ()=>getAllConsentPurposes,
    "getLatestConsentPurposeVersionByCode",
    ()=>getLatestConsentPurposeVersionByCode,
    "saveConsentPurposeFromClientState",
    ()=>saveConsentPurposeFromClientState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$breaking$2d$change$2d$detector$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/breaking-change-detector.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$processes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/business-processes-service.ts [app-rsc] (ecmascript)");
;
;
;
async function getAllConsentPurposes() {
    try {
        const consentPurposes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findMany({
            orderBy: {
                updatedAt: "desc"
            }
        });
        return consentPurposes;
    } catch (error) {
        console.error("Error fetching consent purposes:", error);
        throw new Error("Failed to fetch consent purposes");
    }
}
async function deleteConsentPurpose(id) {
    try {
        // Use transaction to ensure all deletes succeed or all fail
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            // First, get all processing purpose IDs for this consent purpose
            const processingPurposes = await tx.processingPurpose.findMany({
                where: {
                    consentPurposeId: id
                },
                select: {
                    id: true
                }
            });
            const processingPurposeIds = processingPurposes.map((pp)=>pp.id);
            if (processingPurposeIds.length > 0) {
                // Delete business process rules related to these processing purposes
                await tx.businessProcessRule.deleteMany({
                    where: {
                        processingPurposeId: {
                            in: processingPurposeIds
                        }
                    }
                });
                // Delete processing purpose to data processor mappings
                await tx.processingPurposeToDataProcessor.deleteMany({
                    where: {
                        processingPurposeId: {
                            in: processingPurposeIds
                        }
                    }
                });
            }
            // Delete business process rules directly related to the consent purpose
            await tx.businessProcessRule.deleteMany({
                where: {
                    consentPurposeId: id
                }
            });
            // Delete all processing purposes for this consent purpose
            await tx.processingPurpose.deleteMany({
                where: {
                    consentPurposeId: id
                }
            });
            // Finally, delete the consent purpose itself
            await tx.consentPurpose.delete({
                where: {
                    id
                }
            });
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting consent purpose:", error);
        throw new Error("Failed to delete consent purpose");
    }
}
async function saveConsentPurposeFromClientState(clientState, action, userId, consentPurposeId, propagateToBPIds) {
    try {
        // Detect breaking changes
        const breakingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$breaking$2d$change$2d$detector$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectBreakingChanges"])(clientState.baseline, clientState);
        const hasBreaking = breakingChanges.length > 0;
        let ltVersion;
        let cpCode;
        let currVersion;
        let isNewVersion = false; // Track if we're creating a new version
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            // Step 1: Create or Update Consent Purpose
            let cpId = consentPurposeId;
            const status = action === "publish" ? "published" : "draft";
            if (!clientState.step1Data) {
                throw new Error("Step 1 data is required");
            }
            // If breaking changes detected and we're editing a published CP, create a new version
            if (hasBreaking && cpId) {
                const currentCP = await tx.consentPurpose.findUnique({
                    where: {
                        id: cpId
                    },
                    select: {
                        version: true,
                        code: true,
                        status: true
                    }
                });
                if (!currentCP) {
                    throw new Error("Consent purpose not found");
                }
                // Only create new version if the current CP is published
                if (currentCP.status === "published") {
                    // Create new version - old version stays untouched
                    const latestCPVersion = await getLatestConsentPurposeVersionByCode(currentCP.code) + 1;
                    ltVersion = latestCPVersion;
                    const newCP = await tx.consentPurpose.create({
                        data: {
                            name: clientState.step1Data.name,
                            code: currentCP.code,
                            version: latestCPVersion,
                            description: clientState.step1Data.description || null,
                            status,
                            publishedAt: status === "published" ? new Date() : null,
                            supportedLanguages: [
                                "en"
                            ],
                            createdBy: userId
                        }
                    });
                    cpId = newCP.id;
                    isNewVersion = true;
                    cpCode = newCP.code;
                    currVersion = currentCP.version;
                } else {
                    // Draft CP with breaking changes - just update in place
                    await tx.consentPurpose.update({
                        where: {
                            id: cpId
                        },
                        data: {
                            name: clientState.step1Data.name,
                            code: clientState.step1Data.code,
                            description: clientState.step1Data.description || null,
                            status,
                            publishedAt: status === "published" ? new Date() : null
                        }
                    });
                }
            } else if (cpId) {
                // Update existing (no breaking changes)
                await tx.consentPurpose.update({
                    where: {
                        id: cpId
                    },
                    data: {
                        name: clientState.step1Data.name,
                        code: clientState.step1Data.code,
                        description: clientState.step1Data.description || null,
                        status,
                        publishedAt: status === "published" ? new Date() : null
                    }
                });
            } else {
                // Create new
                const newCP = await tx.consentPurpose.create({
                    data: {
                        name: clientState.step1Data.name,
                        code: clientState.step1Data.code,
                        description: clientState.step1Data.description || null,
                        status,
                        publishedAt: status === "published" ? new Date() : null,
                        supportedLanguages: [
                            "en"
                        ],
                        createdBy: userId
                    }
                });
                cpId = newCP.id;
            }
            // Step 2: Handle Processing Purposes
            const newPPIds = {}; // Map refs (id, tempId, or code) to real PP IDs
            // Helper to get processingPurposeRef from a PP object
            const getPPRef = (pp)=>{
                if (pp.id) return pp.id.toString();
                if (pp.tempId) return pp.tempId;
                return pp.purposeOfProcessingCode || "";
            };
            if (isNewVersion) {
                // New version: Create ALL processing purposes fresh (don't touch old version)
                // Combine existing and modified PPs, using modified version if it exists
                const modifiedPPIds = new Set(clientState.step2Data.modified.map((pp)=>pp.id));
                // Create from existing PPs that weren't modified
                for (const pp of clientState.step2Data.existing){
                    // Skip if this PP was modified (we'll use the modified version instead)
                    if (pp.id && modifiedPPIds.has(pp.id)) {
                        continue;
                    }
                    const created = await tx.processingPurpose.create({
                        data: {
                            name: pp.name,
                            description: pp.description || null,
                            purposeOfProcessingId: pp.purposeOfProcessingId,
                            consentPurposeId: cpId,
                            status,
                            createdBy: userId,
                            userAttributeNames: pp.userAttributeNames || []
                        }
                    });
                    // Map ref to new ID for data processor mappings
                    const ppRef = getPPRef(pp);
                    if (ppRef) {
                        newPPIds[ppRef] = created.id;
                    }
                }
                // Create from modified PPs (these are the updated versions of existing PPs)
                for (const pp of clientState.step2Data.modified){
                    const created = await tx.processingPurpose.create({
                        data: {
                            name: pp.name,
                            description: pp.description || null,
                            purposeOfProcessingId: pp.purposeOfProcessingId,
                            consentPurposeId: cpId,
                            status,
                            createdBy: userId,
                            userAttributeNames: pp.userAttributeNames || []
                        }
                    });
                    // Map ref to new ID
                    const ppRef = getPPRef(pp);
                    if (ppRef) {
                        newPPIds[ppRef] = created.id;
                    }
                }
                // Create new PPs
                for (const pp of clientState.step2Data.new){
                    const created = await tx.processingPurpose.create({
                        data: {
                            name: pp.name,
                            description: pp.description || null,
                            purposeOfProcessingId: pp.purposeOfProcessingId,
                            consentPurposeId: cpId,
                            status,
                            createdBy: userId,
                            userAttributeNames: pp.userAttributeNames || []
                        }
                    });
                    const ppRef = getPPRef(pp);
                    if (ppRef) {
                        newPPIds[ppRef] = created.id;
                    }
                }
            // Note: deleted PPs are simply not created in the new version
            } else {
                // Normal update: Delete/Update/Create as before
                // Delete removed processing purposes
                if (clientState.step2Data.deleted.length > 0) {
                    // First delete data processor mappings
                    await tx.processingPurposeToDataProcessor.deleteMany({
                        where: {
                            processingPurposeId: {
                                in: clientState.step2Data.deleted
                            }
                        }
                    });
                    // Then delete processing purposes
                    await tx.processingPurpose.deleteMany({
                        where: {
                            id: {
                                in: clientState.step2Data.deleted
                            }
                        }
                    });
                }
                // Create new processing purposes
                for (const pp of clientState.step2Data.new){
                    const created = await tx.processingPurpose.create({
                        data: {
                            name: pp.name,
                            description: pp.description || null,
                            purposeOfProcessingId: pp.purposeOfProcessingId,
                            consentPurposeId: cpId,
                            status,
                            createdBy: userId,
                            userAttributeNames: pp.userAttributeNames || []
                        }
                    });
                    const ppRef = getPPRef(pp);
                    if (ppRef) {
                        newPPIds[ppRef] = created.id;
                    }
                }
                // Update modified processing purposes
                for (const pp of clientState.step2Data.modified){
                    await tx.processingPurpose.update({
                        where: {
                            id: pp.id
                        },
                        data: {
                            name: pp.name,
                            description: pp.description || null,
                            purposeOfProcessingId: pp.purposeOfProcessingId,
                            status,
                            userAttributeNames: pp.userAttributeNames || []
                        }
                    });
                }
            }
            // Step 3: Handle Data Processor Mappings
            if (isNewVersion) {
                // New version: Create ALL mappings fresh
                // Create from existing mappings (become new records)
                for (const mapping of clientState.step3Data.existing){
                    const ppId = newPPIds[mapping.processingPurposeRef] || parseInt(mapping.processingPurposeRef);
                    await tx.processingPurposeToDataProcessor.create({
                        data: {
                            processingPurposeId: ppId,
                            dataProcessorId: mapping.dataProcessorId,
                            userAttributeNames: mapping.userAttributeNames || [],
                            status,
                            createdBy: userId
                        }
                    });
                }
                // Create from modified mappings (also become new records)
                for (const mapping of clientState.step3Data.modified){
                    const ppId = newPPIds[mapping.processingPurposeRef] || parseInt(mapping.processingPurposeRef);
                    await tx.processingPurposeToDataProcessor.create({
                        data: {
                            processingPurposeId: ppId,
                            dataProcessorId: mapping.dataProcessorId,
                            userAttributeNames: mapping.userAttributeNames || [],
                            status,
                            createdBy: userId
                        }
                    });
                }
                // Create new mappings
                for (const mapping of clientState.step3Data.new){
                    const ppId = newPPIds[mapping.processingPurposeRef];
                    if (!ppId) {
                        console.error(`❌ No PP ID found for ref: ${mapping.processingPurposeRef}`);
                        throw new Error(`Processing purpose not found for ref: ${mapping.processingPurposeRef}`);
                    }
                    await tx.processingPurposeToDataProcessor.create({
                        data: {
                            processingPurposeId: ppId,
                            dataProcessorId: mapping.dataProcessorId,
                            userAttributeNames: mapping.userAttributeNames || [],
                            status,
                            createdBy: userId
                        }
                    });
                }
            // Note: deleted mappings are simply not created in the new version
            } else {
                // Normal update: Delete/Update/Create as before
                // Delete removed mappings
                if (clientState.step3Data.deleted.length > 0) {
                    await tx.processingPurposeToDataProcessor.deleteMany({
                        where: {
                            id: {
                                in: clientState.step3Data.deleted
                            }
                        }
                    });
                }
                // Create new mappings
                for (const mapping of clientState.step3Data.new){
                    const ppId = newPPIds[mapping.processingPurposeRef];
                    if (!ppId) {
                        console.error(`❌ No PP ID found for ref: ${mapping.processingPurposeRef}`);
                        throw new Error(`Processing purpose not found for ref: ${mapping.processingPurposeRef}`);
                    }
                    await tx.processingPurposeToDataProcessor.create({
                        data: {
                            processingPurposeId: ppId,
                            dataProcessorId: mapping.dataProcessorId,
                            userAttributeNames: mapping.userAttributeNames || [],
                            status,
                            createdBy: userId
                        }
                    });
                }
                // Update modified mappings
                for (const mapping of clientState.step3Data.modified){
                    // For modified existing mappings, the ref should be an ID already
                    const ppId = newPPIds[mapping.processingPurposeRef] || parseInt(mapping.processingPurposeRef);
                    await tx.processingPurposeToDataProcessor.update({
                        where: {
                            id: mapping.id
                        },
                        data: {
                            processingPurposeId: ppId,
                            dataProcessorId: mapping.dataProcessorId,
                            userAttributeNames: mapping.userAttributeNames || [],
                            status
                        }
                    });
                }
            }
            // Step 4: Handle Translations
            // Build translation object for consent purpose
            const cpTranslationsObj = {
                en: {
                    name: clientState.step1Data.name,
                    description: clientState.step1Data.description || null
                }
            };
            for (const [lang, trans] of Object.entries(clientState.step4Data.cpTranslations)){
                if (lang !== "en" && ((trans.name || "").trim() || (trans.description || "").trim())) {
                    cpTranslationsObj[lang] = {
                        name: (trans.name || "").trim() || null,
                        description: (trans.description || "").trim() || null
                    };
                }
            }
            // Update consent purpose with translations
            await tx.consentPurpose.update({
                where: {
                    id: cpId
                },
                data: {
                    translations: cpTranslationsObj,
                    supportedLanguages: Object.keys(cpTranslationsObj)
                }
            });
            // Handle processing purpose translations
            if (isNewVersion) {
                // New version: Apply translations to newly created PPs
                for (const [ppRef, newId] of Object.entries(newPPIds)){
                    // Try to find the PP data from existing, modified, or new
                    const ppData = clientState.step2Data.existing.find((pp)=>getPPRef(pp) === ppRef) || clientState.step2Data.modified.find((pp)=>getPPRef(pp) === ppRef) || clientState.step2Data.new.find((pp)=>getPPRef(pp) === ppRef);
                    if (!ppData) continue;
                    const ppTranslationsObj = {
                        en: {
                            name: ppData.name,
                            description: ppData.description || null
                        }
                    };
                    const ppTrans = clientState.step4Data.ppTranslations[ppRef];
                    if (ppTrans) {
                        for (const [lang, trans] of Object.entries(ppTrans)){
                            if (lang !== "en" && ((trans.name || "").trim() || (trans.description || "").trim())) {
                                ppTranslationsObj[lang] = {
                                    name: (trans.name || "").trim() || null,
                                    description: (trans.description || "").trim() || null
                                };
                            }
                        }
                    }
                    await tx.processingPurpose.update({
                        where: {
                            id: newId
                        },
                        data: {
                            translations: ppTranslationsObj,
                            supportedLanguages: Object.keys(ppTranslationsObj)
                        }
                    });
                }
            } else {
                // Normal update: Update existing PPs and newly created ones
                // Build a map of modified PP IDs for deduplication
                const modifiedPPIds = new Set(clientState.step2Data.modified.map((pp)=>pp.id).filter(Boolean));
                // Update existing and modified PPs (avoiding duplicates)
                const existingPPRefs = [
                    // Only include existing PPs that haven't been modified
                    ...clientState.step2Data.existing.filter((pp)=>!modifiedPPIds.has(pp.id)).map((pp)=>({
                            ref: getPPRef(pp),
                            id: pp.id,
                            name: pp.name,
                            description: pp.description
                        })),
                    // Include all modified PPs
                    ...clientState.step2Data.modified.map((pp)=>({
                            ref: getPPRef(pp),
                            id: pp.id,
                            name: pp.name,
                            description: pp.description
                        }))
                ];
                for (const pp of existingPPRefs){
                    const ppTranslationsObj = {
                        en: {
                            name: pp.name,
                            description: pp.description || null
                        }
                    };
                    const ppTrans = clientState.step4Data.ppTranslations[pp.ref];
                    if (ppTrans) {
                        for (const [lang, trans] of Object.entries(ppTrans)){
                            if (lang !== "en" && ((trans.name || "").trim() || (trans.description || "").trim())) {
                                ppTranslationsObj[lang] = {
                                    name: (trans.name || "").trim() || null,
                                    description: (trans.description || "").trim() || null
                                };
                            }
                        }
                    }
                    await tx.processingPurpose.update({
                        where: {
                            id: pp.id
                        },
                        data: {
                            translations: ppTranslationsObj,
                            supportedLanguages: Object.keys(ppTranslationsObj)
                        }
                    });
                }
                // Handle translations for newly created PPs
                for (const [ppRef, realId] of Object.entries(newPPIds)){
                    const pp = clientState.step2Data.new.find((p)=>getPPRef(p) === ppRef);
                    if (!pp) continue;
                    const ppTranslationsObj = {
                        en: {
                            name: pp.name,
                            description: pp.description || null
                        }
                    };
                    const ppTrans = clientState.step4Data.ppTranslations[ppRef];
                    if (ppTrans) {
                        for (const [lang, trans] of Object.entries(ppTrans)){
                            if (lang !== "en" && ((trans.name || "").trim() || (trans.description || "").trim())) {
                                ppTranslationsObj[lang] = {
                                    name: (trans.name || "").trim() || null,
                                    description: (trans.description || "").trim() || null
                                };
                            }
                        }
                    }
                    await tx.processingPurpose.update({
                        where: {
                            id: realId
                        },
                        data: {
                            translations: ppTranslationsObj,
                            supportedLanguages: Object.keys(ppTranslationsObj)
                        }
                    });
                }
            }
            return {
                success: true,
                id: cpId
            };
        });
        const shouldPropagate = propagateToBPIds && propagateToBPIds.length > 0;
        if (isNewVersion && shouldPropagate) {
            const newBPVersions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$processes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["propagateConsentPurposeVersionToBusinessProcesses"])(cpCode, currVersion, ltVersion, userId, propagateToBPIds);
        // Send version change notifications for each propagated BP
        // Fire and forget - don't block the response
        // if (newBPVersions && newBPVersions.length > 0) {
        //   const { notifyDataPrincipalsOfVersionChange } = await import(
        //     "./bp-version-change-notification-service"
        //   );
        //   for (const newBp of newBPVersions) {
        //     // Get the old BP version
        //     const oldBp = await prisma.businessProcess.findFirst({
        //       where: {
        //         code: newBp.code,
        //         version: newBp.version - 1, // Previous version
        //       },
        //       select: { version: true },
        //     });
        //     if (oldBp) {
        //       // Fire and forget - don't wait for notifications
        //       notifyDataPrincipalsOfVersionChange(
        //         newBp.code,
        //         oldBp.version,
        //         newBp.publicId
        //       ).catch((error) => {
        //         console.error(
        //           `Error sending version change notifications for BP ${newBp.code}:`,
        //           error
        //         );
        //       });
        //     }
        //   }
        // }
        }
        return result;
    } catch (error) {
        console.error("Error saving consent purpose from client state:", error);
        throw new Error("Failed to save consent purpose");
    }
}
async function getLatestConsentPurposeVersionByCode(code) {
    const latestCP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findFirst({
        where: {
            code
        },
        orderBy: {
            version: "desc"
        }
    });
    if (!latestCP) return null;
    return latestCP.version;
}
}),
"[project]/actions/consent-purposes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00179b190fc8ea83b7432ce347c38b818692bf5daa":"getConsentPurposes","40c1285b7faea57d407352b9d1568677f640797c7e":"getHighestVersionForConsentPurposeCode","7fd6514c48dc567376567b5bface59bd4edc37062a":"deleteConsentPurpose"},"",""] */ __turbopack_context__.s([
    "deleteConsentPurpose",
    ()=>deleteConsentPurpose,
    "getConsentPurposes",
    ()=>getConsentPurposes,
    "getHighestVersionForConsentPurposeCode",
    ()=>getHighestVersionForConsentPurposeCode
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$purpose$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consent-purpose-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
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
async function getConsentPurposes() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].CONSENT_PURPOSE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$purpose$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllConsentPurposes"])();
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getConsentPurposes action:", error);
        return [];
    }
}
const deleteConsentPurpose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].CONSENT_PURPOSE,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].DELETE
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
}), async ({ id })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$purpose$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteConsentPurpose"])(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/consent-purposes");
    return {
        success: true
    };
});
async function getHighestVersionForConsentPurposeCode(code) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "User not authenticated"
            };
        }
        const highestCP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findFirst({
            where: {
                code
            },
            orderBy: {
                version: "desc"
            },
            select: {
                version: true
            }
        });
        return {
            success: true,
            highestVersion: highestCP?.version || 0
        };
    } catch (error) {
        console.error("Error fetching highest version for consent purpose:", error);
        return {
            success: false,
            error: "Failed to fetch highest version"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getConsentPurposes,
    deleteConsentPurpose,
    getHighestVersionForConsentPurposeCode
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getConsentPurposes, "00179b190fc8ea83b7432ce347c38b818692bf5daa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteConsentPurpose, "7fd6514c48dc567376567b5bface59bd4edc37062a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHighestVersionForConsentPurposeCode, "40c1285b7faea57d407352b9d1568677f640797c7e", null);
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/consent-purposes/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/consent-purposes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$consent$2d$purposes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/consent-purposes.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/consent-purposes/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/consent-purposes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00179b190fc8ea83b7432ce347c38b818692bf5daa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$consent$2d$purposes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConsentPurposes"],
    "0060c229d5c44aa39a52b0da063b4e763444cd1280",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "40c1285b7faea57d407352b9d1568677f640797c7e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$consent$2d$purposes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHighestVersionForConsentPurposeCode"],
    "7fd6514c48dc567376567b5bface59bd4edc37062a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$consent$2d$purposes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteConsentPurpose"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$consent$2d$purposes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cms/data-fiduciary/consent-purposes/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/consent-purposes.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$consent$2d$purposes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/consent-purposes.ts [app-rsc] (ecmascript)");
}),
"[project]/app/cms/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript)"));
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
"[project]/components/ui/button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/cms/data-fiduciary/consent-purposes/consent-purposes-client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ConsentPurposesClient",
    ()=>ConsentPurposesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ConsentPurposesClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConsentPurposesClient() from the server but ConsentPurposesClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/consent-purposes/consent-purposes-client.tsx <module evaluation>", "ConsentPurposesClient");
}),
"[project]/app/cms/data-fiduciary/consent-purposes/consent-purposes-client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ConsentPurposesClient",
    ()=>ConsentPurposesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ConsentPurposesClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConsentPurposesClient() from the server but ConsentPurposesClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/consent-purposes/consent-purposes-client.tsx", "ConsentPurposesClient");
}),
"[project]/app/cms/data-fiduciary/consent-purposes/consent-purposes-client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$consent$2d$purposes$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-purposes/consent-purposes-client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$consent$2d$purposes$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-purposes/consent-purposes-client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$consent$2d$purposes$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/ui/alert.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/forbidden.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "Forbidden",
    ()=>Forbidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-rsc] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.tsx [app-rsc] (ecmascript)");
;
;
;
function Forbidden({ requiredRole }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[60vh] p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-full bg-destructive/10 p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                    className: "h-16 w-16 text-destructive"
                                }, void 0, false, {
                                    fileName: "[project]/components/forbidden.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/forbidden.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/forbidden.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold tracking-tight",
                            children: "Access Denied"
                        }, void 0, false, {
                            fileName: "[project]/components/forbidden.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "You don't have permission to access this resource"
                        }, void 0, false, {
                            fileName: "[project]/components/forbidden.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forbidden.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Alert"], {
                    variant: "destructive",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AlertTitle"], {
                            children: "Insufficient Permissions"
                        }, void 0, false, {
                            fileName: "[project]/components/forbidden.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: requiredRole ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "This resource requires the",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "px-2 py-0.5 bg-destructive/20 rounded text-xs font-mono",
                                        children: requiredRole
                                    }, void 0, false, {
                                        fileName: "[project]/components/forbidden.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    "role. Please contact your administrator to request access."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Please contact your administrator to request the necessary permissions."
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/components/forbidden.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forbidden.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/forbidden.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/forbidden.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/consent-purposes/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ConsentPurposesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$consent$2d$purposes$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-purposes/consent-purposes-client.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$consent$2d$purposes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/consent-purposes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-rsc] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forbidden$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forbidden.tsx [app-rsc] (ecmascript)");
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
async function ConsentPurposesContent() {
    const canRead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].CONSENT_PURPOSE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
    if (!canRead) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forbidden$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Forbidden"], {
            requiredRole: "privy_cgp_user"
        }, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
            lineNumber: 26,
            columnNumber: 12
        }, this);
    }
    const consentPurposes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$consent$2d$purposes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConsentPurposes"])();
    // Check permissions
    const canCreate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].CONSENT_PURPOSE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].CREATE);
    const canUpdate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].CONSENT_PURPOSE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
    const canDelete = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].CONSENT_PURPOSE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].DELETE);
    const newButton = canCreate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
        asChild: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: "/cms/data-fiduciary/consent-purposes/new",
            className: "group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "h-4 w-4 group-hover:scale-125 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base",
                    children: "New Consent Purpose"
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-4 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$consent$2d$purposes$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConsentPurposesClient"], {
                data: consentPurposes,
                newButton: newButton,
                canUpdate: canUpdate,
                canDelete: canDelete
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function ConsentPurposesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-muted-foreground",
                        children: "Loading consent purposes..."
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
                lineNumber: 64,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
            lineNumber: 63,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentPurposesContent, {}, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/consent-purposes/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-purposes/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3ac094b5._.js.map