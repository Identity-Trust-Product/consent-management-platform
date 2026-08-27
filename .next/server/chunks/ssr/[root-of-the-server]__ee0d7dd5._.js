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
"[project]/lib/constants/schemas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Schema Constants
 * Constants used in validation schemas and form configurations
 */ /**
 * Industry options for data processors
 */ __turbopack_context__.s([
    "INDUSTRY_OPTIONS",
    ()=>INDUSTRY_OPTIONS,
    "OU_ID_CONFIG",
    ()=>OU_ID_CONFIG,
    "VALIDATION_CONSTRAINTS",
    ()=>VALIDATION_CONSTRAINTS
]);
const INDUSTRY_OPTIONS = [
    {
        value: "gaming",
        label: "Gaming"
    },
    {
        value: "banking",
        label: "Banking"
    },
    {
        value: "finance",
        label: "Finance"
    },
    {
        value: "healthcare",
        label: "Healthcare"
    },
    {
        value: "retail",
        label: "Retail"
    },
    {
        value: "technology",
        label: "Technology"
    },
    {
        value: "telecommunications",
        label: "Telecommunications"
    },
    {
        value: "education",
        label: "Education"
    },
    {
        value: "manufacturing",
        label: "Manufacturing"
    },
    {
        value: "other",
        label: "Other"
    }
];
const OU_ID_CONFIG = {
    PREFIX: "OU",
    DEFAULT_LENGTH: 12,
    ALLOWED_CHARS: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
};
const VALIDATION_CONSTRAINTS = {
    OU_ID: {
        MIN_LENGTH: 1,
        MAX_LENGTH: 50
    },
    LEGAL_NAME: {
        MIN_LENGTH: 3,
        MAX_LENGTH: 255
    },
    BRAND_NAME: {
        MIN_LENGTH: 3,
        MAX_LENGTH: 255
    },
    CIN: {
        MIN_LENGTH: 1,
        MAX_LENGTH: 21
    }
};
}),
"[project]/lib/schemas/data-processor-schemas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "dataProcessorSchema",
    ()=>dataProcessorSchema,
    "generateRandomOuId",
    ()=>generateRandomOuId,
    "industryOptions",
    ()=>industryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/schemas.ts [app-rsc] (ecmascript)");
;
;
const dataProcessorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    ouId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION_CONSTRAINTS"].OU_ID.MIN_LENGTH, "OU ID is required").max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION_CONSTRAINTS"].OU_ID.MAX_LENGTH, "OU ID must be less than 50 characters"),
    legalName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION_CONSTRAINTS"].LEGAL_NAME.MIN_LENGTH, "Legal name should be at least 3 characters long").max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION_CONSTRAINTS"].LEGAL_NAME.MAX_LENGTH, "Legal name must be less than 255 characters"),
    brandName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION_CONSTRAINTS"].BRAND_NAME.MIN_LENGTH, "Brand name should be at least 3 characters long").max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION_CONSTRAINTS"].BRAND_NAME.MAX_LENGTH, "Brand name must be less than 255 characters"),
    cin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION_CONSTRAINTS"].CIN.MIN_LENGTH, "CIN is required").max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION_CONSTRAINTS"].CIN.MAX_LENGTH, "CIN must be less than 21 characters"),
    industry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Industry is required"),
    active: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
function generateRandomOuId(length = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OU_ID_CONFIG"].DEFAULT_LENGTH) {
    const chars = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OU_ID_CONFIG"].ALLOWED_CHARS;
    let result = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OU_ID_CONFIG"].PREFIX;
    for(let i = 0; i < length - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OU_ID_CONFIG"].PREFIX.length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
const industryOptions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INDUSTRY_OPTIONS"];
}),
"[project]/actions/data-processors.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0080660a4a63d47250789ff590a484c549d274126d":"getDataProcessors","40392f9ade305ccb324160fdfc16e85638287b3d67":"getDataProcessorById","7f5b0fd906a75272105d6149baa8d02656230ed6af":"createDataProcessor","7f9d9537af0a750a1a3598d72abf93d448c127a8e1":"deleteDataProcessor","7fa96640637cb34480e479ad203f6e5fde1d02edfa":"updateDataProcessor"},"",""] */ __turbopack_context__.s([
    "createDataProcessor",
    ()=>createDataProcessor,
    "deleteDataProcessor",
    ()=>deleteDataProcessor,
    "getDataProcessorById",
    ()=>getDataProcessorById,
    "getDataProcessors",
    ()=>getDataProcessors,
    "updateDataProcessor",
    ()=>updateDataProcessor
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$data$2d$processor$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/data-processor-schemas.ts [app-rsc] (ecmascript)");
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
async function getDataProcessors() {
    try {
        const dataProcessors = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].dataProcessor.findMany({
            orderBy: {
                updatedAt: "desc"
            }
        });
        return dataProcessors;
    } catch (error) {
        console.error("Error fetching data processors:", error);
        return [];
    }
}
async function getDataProcessorById(ouId) {
    try {
        const dataProcessor = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].dataProcessor.findUnique({
            where: {
                ouId
            }
        });
        return dataProcessor;
    } catch (error) {
        console.error("Error fetching data processor:", error);
        return null;
    }
}
const createDataProcessor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].DATA_PROCESSOR,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].CREATE
}, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$data$2d$processor$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dataProcessorSchema"], async (data, user)=>{
    const dataProcessor = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].dataProcessor.create({
        data: {
            ouId: data.ouId,
            legalName: data.legalName,
            brandName: data.brandName,
            cin: data.cin,
            industry: data.industry,
            active: data.active
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/data-processors");
    return dataProcessor;
});
// Update with RBAC
const updateDataProcessorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    ouId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$data$2d$processor$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dataProcessorSchema"].partial()
});
const updateDataProcessor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].DATA_PROCESSOR,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE
}, updateDataProcessorSchema, async (input, user)=>{
    const dataProcessor = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].dataProcessor.update({
        where: {
            ouId: input.ouId
        },
        data: input.data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/data-processors");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/data-processors/${input.ouId}`);
    return dataProcessor;
});
// Delete with RBAC
const deleteDataProcessorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    ouId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const deleteDataProcessor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].DATA_PROCESSOR,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].DELETE
}, deleteDataProcessorSchema, async (input, user)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].dataProcessor.delete({
        where: {
            ouId: input.ouId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/data-processors");
    return true;
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDataProcessors,
    getDataProcessorById,
    createDataProcessor,
    updateDataProcessor,
    deleteDataProcessor
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDataProcessors, "0080660a4a63d47250789ff590a484c549d274126d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDataProcessorById, "40392f9ade305ccb324160fdfc16e85638287b3d67", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createDataProcessor, "7f5b0fd906a75272105d6149baa8d02656230ed6af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateDataProcessor, "7fa96640637cb34480e479ad203f6e5fde1d02edfa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDataProcessor, "7f9d9537af0a750a1a3598d72abf93d448c127a8e1", null);
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/data-processors/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/data-processors.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$2d$processors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/data-processors.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/data-processors/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/data-processors.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0060c229d5c44aa39a52b0da063b4e763444cd1280",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "7f5b0fd906a75272105d6149baa8d02656230ed6af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$2d$processors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDataProcessor"],
    "7fa96640637cb34480e479ad203f6e5fde1d02edfa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$2d$processors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDataProcessor"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cms$2f$data$2d$fiduciary$2f$data$2d$processors$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$data$2d$processors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cms/data-fiduciary/data-processors/new/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/data-processors.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$2d$processors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/data-processors.ts [app-rsc] (ecmascript)");
}),
"[project]/app/cms/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/data-fiduciary/data-processors/_components/data-processor-form.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "DataProcessorForm",
    ()=>DataProcessorForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DataProcessorForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DataProcessorForm() from the server but DataProcessorForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/data-processors/_components/data-processor-form.tsx <module evaluation>", "DataProcessorForm");
}),
"[project]/app/cms/data-fiduciary/data-processors/_components/data-processor-form.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "DataProcessorForm",
    ()=>DataProcessorForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DataProcessorForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DataProcessorForm() from the server but DataProcessorForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/data-processors/_components/data-processor-form.tsx", "DataProcessorForm");
}),
"[project]/app/cms/data-fiduciary/data-processors/_components/data-processor-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$data$2d$processors$2f$_components$2f$data$2d$processor$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/data-processors/_components/data-processor-form.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$data$2d$processors$2f$_components$2f$data$2d$processor$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/data-processors/_components/data-processor-form.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$data$2d$processors$2f$_components$2f$data$2d$processor$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/data-processors/new/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>NewDataProcessorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$data$2d$processors$2f$_components$2f$data$2d$processor$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/data-processors/_components/data-processor-form.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function NewDataProcessorPage() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].DATA_PROCESSOR, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].CREATE);
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/cms/forbidden");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-4 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$data$2d$processors$2f$_components$2f$data$2d$processor$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DataProcessorForm"], {
            mode: "new"
        }, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/data-processors/new/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/data-processors/new/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/data-processors/new/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/data-processors/new/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ee0d7dd5._.js.map