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
"[project]/lib/schemas/business-unit-schemas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "businessUnitSchema",
    ()=>businessUnitSchema,
    "generateRandomCode",
    ()=>generateRandomCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const businessUnitSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Name should be at least 3 characters long").max(255, "Name must be less than 255 characters"),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Code is required").max(50, "Code must be less than 50 characters")
});
function generateRandomCode(length = 10) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for(let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
}),
"[project]/lib/services/business-units-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "checkBusinessUnitCodeExists",
    ()=>checkBusinessUnitCodeExists,
    "createBusinessUnit",
    ()=>createBusinessUnit,
    "deleteBusinessUnit",
    ()=>deleteBusinessUnit,
    "getAllBusinessUnits",
    ()=>getAllBusinessUnits,
    "getBusinessUnitByCode",
    ()=>getBusinessUnitByCode,
    "getBusinessUnitById",
    ()=>getBusinessUnitById,
    "updateBusinessUnit",
    ()=>updateBusinessUnit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
;
async function getAllBusinessUnits() {
    try {
        const businessUnits = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessUnit.findMany({
            orderBy: {
                updatedAt: "desc"
            }
        });
        return businessUnits;
    } catch (error) {
        console.error("Error fetching business units:", error);
        throw new Error("Failed to fetch business units");
    }
}
async function getBusinessUnitById(id) {
    try {
        const businessUnit = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessUnit.findUnique({
            where: {
                id
            }
        });
        return businessUnit;
    } catch (error) {
        console.error("Error fetching business unit:", error);
        throw new Error("Failed to fetch business unit");
    }
}
async function createBusinessUnit(data) {
    try {
        const businessUnit = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessUnit.create({
            data: {
                name: data.name,
                code: data.code,
                active: data.active ?? true
            }
        });
        return businessUnit;
    } catch (error) {
        console.error("Error creating business unit:", error);
        throw new Error("Failed to create business unit");
    }
}
async function updateBusinessUnit(id, data) {
    try {
        const businessUnit = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessUnit.update({
            where: {
                id
            },
            data
        });
        return businessUnit;
    } catch (error) {
        console.error("Error updating business unit:", error);
        throw new Error("Failed to update business unit");
    }
}
async function deleteBusinessUnit(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessUnit.delete({
            where: {
                id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting business unit:", error);
        throw new Error("Failed to delete business unit");
    }
}
async function getBusinessUnitByCode(code) {
    try {
        const businessUnit = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessUnit.findUnique({
            where: {
                code
            }
        });
        return businessUnit;
    } catch (error) {
        console.error("Error fetching business unit by code:", error);
        throw new Error("Failed to fetch business unit");
    }
}
async function checkBusinessUnitCodeExists(code, excludeId) {
    try {
        const businessUnit = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessUnit.findUnique({
            where: {
                code
            }
        });
        if (!businessUnit) {
            return false;
        }
        // If excludeId is provided, check if the found business unit is different
        if (excludeId && businessUnit.id === excludeId) {
            return false;
        }
        return true;
    } catch (error) {
        console.error("Error checking business unit code:", error);
        throw new Error("Failed to check business unit code");
    }
}
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
"[project]/actions/business-units.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"005d2c95fdb56466ca5505611cf672b3dd1bb5a03e":"getBusinessUnits","407fb42ef5cd2c0329031b4fe4557520a2be064409":"getBusinessUnitById","608bf381e2cfea0baba3faaf0e1eaa120ac12ffcab":"checkBusinessUnitCodeExists","7f2bb533b594647bdbcad1fd7903248e815caf0c93":"deleteBusinessUnit","7f44ed65dcc21dfffc1845247fd786088910149c3c":"updateBusinessUnit","7f7bb6a614de30e742aa9ceb488250395b24259c7b":"createBusinessUnit"},"",""] */ __turbopack_context__.s([
    "checkBusinessUnitCodeExists",
    ()=>checkBusinessUnitCodeExists,
    "createBusinessUnit",
    ()=>createBusinessUnit,
    "deleteBusinessUnit",
    ()=>deleteBusinessUnit,
    "getBusinessUnitById",
    ()=>getBusinessUnitById,
    "getBusinessUnits",
    ()=>getBusinessUnits,
    "updateBusinessUnit",
    ()=>updateBusinessUnit
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$unit$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/business-unit-schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$units$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/business-units-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-rsc] (ecmascript)");
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
async function getBusinessUnits() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_UNIT, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$units$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllBusinessUnits"])();
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getBusinessUnits action:", error);
        return [];
    }
}
async function getBusinessUnitById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_UNIT, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$units$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessUnitById"])(id);
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in getBusinessUnitById action:", error);
        return null;
    }
}
const deleteBusinessUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_UNIT,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].DELETE
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
}), async ({ id })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$units$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBusinessUnit"])(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/business-units");
    return {
        success: true
    };
});
const createBusinessUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_UNIT,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].CREATE
}, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$unit$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["businessUnitSchema"], async (data)=>{
    // Check if code already exists
    const codeExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$units$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBusinessUnitCodeExists"])(data.code);
    if (codeExists) {
        throw new Error("Business unit code already exists");
    }
    const businessUnit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$units$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBusinessUnit"])(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/business-units");
    return businessUnit;
});
const updateBusinessUnitSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$unit$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["businessUnitSchema"].partial().extend({
        active: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
    })
});
const updateBusinessUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_UNIT,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE
}, updateBusinessUnitSchema, async ({ id, data })=>{
    // Check if code already exists (excluding current business unit)
    if (data.code) {
        const codeExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$units$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBusinessUnitCodeExists"])(data.code, id);
        if (codeExists) {
            throw new Error("Business unit code already exists");
        }
    }
    const businessUnit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$units$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBusinessUnit"])(id, data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/business-units");
    return businessUnit;
});
async function checkBusinessUnitCodeExists(code, excludeId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_UNIT, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].READ);
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$units$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBusinessUnitCodeExists"])(code, excludeId);
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Error in checkBusinessUnitCodeExists action:", error);
        return false;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBusinessUnits,
    getBusinessUnitById,
    deleteBusinessUnit,
    createBusinessUnit,
    updateBusinessUnit,
    checkBusinessUnitCodeExists
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessUnits, "005d2c95fdb56466ca5505611cf672b3dd1bb5a03e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessUnitById, "407fb42ef5cd2c0329031b4fe4557520a2be064409", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBusinessUnit, "7f2bb533b594647bdbcad1fd7903248e815caf0c93", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBusinessUnit, "7f7bb6a614de30e742aa9ceb488250395b24259c7b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBusinessUnit, "7f44ed65dcc21dfffc1845247fd786088910149c3c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkBusinessUnitCodeExists, "608bf381e2cfea0baba3faaf0e1eaa120ac12ffcab", null);
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/business-units/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/business-units.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/business-units.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/business-units/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/business-units.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "005d2c95fdb56466ca5505611cf672b3dd1bb5a03e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessUnits"],
    "0060c229d5c44aa39a52b0da063b4e763444cd1280",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "407fb42ef5cd2c0329031b4fe4557520a2be064409",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessUnitById"],
    "608bf381e2cfea0baba3faaf0e1eaa120ac12ffcab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBusinessUnitCodeExists"],
    "7f2bb533b594647bdbcad1fd7903248e815caf0c93",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBusinessUnit"],
    "7f44ed65dcc21dfffc1845247fd786088910149c3c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBusinessUnit"],
    "7f7bb6a614de30e742aa9ceb488250395b24259c7b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBusinessUnit"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$units$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cms/data-fiduciary/business-units/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/business-units.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/business-units.ts [app-rsc] (ecmascript)");
}),
"[project]/app/cms/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BusinessUnitForm",
    ()=>BusinessUnitForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BusinessUnitForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BusinessUnitForm() from the server but BusinessUnitForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx <module evaluation>", "BusinessUnitForm");
}),
"[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BusinessUnitForm",
    ()=>BusinessUnitForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BusinessUnitForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BusinessUnitForm() from the server but BusinessUnitForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx", "BusinessUnitForm");
}),
"[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$units$2f$_components$2f$business$2d$unit$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$units$2f$_components$2f$business$2d$unit$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$units$2f$_components$2f$business$2d$unit$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/business-units/[id]/edit/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>EditBusinessUnitPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/business-units.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$units$2f$_components$2f$business$2d$unit$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function EditBusinessUnitContent({ params }) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_UNIT, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/cms/forbidden");
    }
    const resolvedParams = await params;
    const businessUnitId = resolvedParams.id;
    const id = parseInt(businessUnitId);
    if (isNaN(id)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Fetch business unit data
    const businessUnit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessUnitById"])(id);
    // If no business unit found, show 404
    if (!businessUnit) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$units$2f$_components$2f$business$2d$unit$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BusinessUnitForm"], {
        mode: "edit",
        businessUnit: businessUnit,
        businessUnitId: businessUnitId
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/business-units/[id]/edit/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
function EditBusinessUnitPage({ params }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-4 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-units/[id]/edit/page.tsx",
                lineNumber: 58,
                columnNumber: 27
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBusinessUnitContent, {
                params: params
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-units/[id]/edit/page.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/business-units/[id]/edit/page.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/business-units/[id]/edit/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/business-units/[id]/edit/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/business-units/[id]/edit/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__87892141._.js.map