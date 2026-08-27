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
        throw new Error("Failed to fetch departments");
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
        throw new Error("Failed to fetch department");
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
        throw new Error("Failed to create department");
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
        throw new Error("Failed to update department");
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
        throw new Error("Failed to delete department");
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
        throw new Error("Failed to fetch department");
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
        throw new Error("Failed to check department code");
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
        throw new Error("Department code already exists");
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
            throw new Error("Department code already exists");
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
"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-diff.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ // lib/consent-diff.ts
__turbopack_context__.s([
    "generateConsentDiff",
    ()=>generateConsentDiff,
    "regroupBpData",
    ()=>regroupBpData
]);
// --- 2. Helper Functions ---
/**
 * Converts a duration in hours (from the DB) into a human-readable string.
 */ function formatDuration(hours) {
    if (hours === null || typeof hours === "undefined") {
        return "Not specified";
    }
    if (hours > 720) {
        // Approx > 1 month
        const years = Math.floor(hours / 8760);
        if (years > 0) return `${years} year(s)`;
        const months = Math.floor(hours / 720);
        if (months > 0) return `${months} month(s)`;
    }
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days} day(s)`;
    return `${hours} hour(s)`;
}
function regroupBpData(bp) {
    const serviceData = {
        name: bp.name,
        purposes: []
    };
    const purposeMap = new Map();
    // Iterate over each rule (which links one CP to one PP)
    for (const rule of bp.businessProcessRules){
        const cp = rule.consentPurpose;
        const pp = rule.processingPurpose;
        // Find or create the master Purpose object
        let purpose = purposeMap.get(cp.code);
        if (!purpose) {
            purpose = {
                id: cp.code,
                title: cp.name,
                duration: formatDuration(cp.consentDuration),
                defaultChecked: false,
                isNew: false,
                processingList: []
            };
            purposeMap.set(cp.code, purpose);
        }
        // Create the Processing object
        const processing = {
            id: pp.id.toString(),
            title: pp.name,
            description: pp.description || "",
            attributes: {
                newlyAddedCount: 0,
                list: pp.userAttributeNames
            },
            // --- Add rule fields ---
            defaultChecked: pp.mandatory,
            reconsentableByPrincipal: pp.reconsentableByPrincipal,
            revocableByPrincipal: pp.revocableByPrincipal,
            // --- Diff fields ---
            isNew: false,
            updateNotice: null
        };
        // Add to the list
        purpose.processingList.push(processing);
        // Update parent purpose's `defaultChecked`
        if (processing.defaultChecked) {
            purpose.defaultChecked = true;
        }
    }
    serviceData.purposes = Array.from(purposeMap.values());
    return serviceData;
}
function generateConsentDiff(oldData, newData) {
    const changedService = {
        name: newData.name,
        purposes: []
    };
    const oldPurposes = new Map(oldData.purposes.map((p)=>[
            p.id,
            p
        ]));
    const newPurposes = new Map(newData.purposes.map((p)=>[
            p.id,
            p
        ]));
    let hasChanges = false;
    // --- Check for New and Modified Purposes ---
    for (const [newPurposeId, newPurpose] of newPurposes.entries()){
        const oldPurpose = oldPurposes.get(newPurposeId);
        // --- Case 1: New Purpose ---
        if (!oldPurpose) {
            const changedPurpose = {
                ...newPurpose,
                isNew: true,
                // Mark all children as new and update attribute counts
                processingList: newPurpose.processingList.map((pp)=>({
                        ...pp,
                        isNew: true,
                        attributes: {
                            ...pp.attributes,
                            newlyAddedCount: pp.attributes.list.length
                        }
                    }))
            };
            changedService.purposes.push(changedPurpose);
            hasChanges = true;
            continue;
        }
        // --- Case 2: Existing Purpose (Check for modifications) ---
        const changedPurpose = {
            ...newPurpose,
            isNew: false,
            processingList: []
        };
        let purposeHasChanges = false;
        const purposeUpdates = [];
        if (oldPurpose.title !== newPurpose.title) purposeUpdates.push("title");
        if (oldPurpose.duration !== newPurpose.duration) purposeUpdates.push("duration");
        if (purposeUpdates.length > 0) {
            purposeHasChanges = true;
            changedPurpose.updateNotice = `This purpose has been updated. Changes: ${purposeUpdates.join(", ")}.`;
        }
        // --- Diff the Processing List ---
        const oldProcessing = new Map(oldPurpose.processingList.map((p)=>[
                p.id,
                p
            ]));
        const newProcessing = new Map(newPurpose.processingList.map((p)=>[
                p.id,
                p
            ]));
        // --- Check for New and Modified Processing ---
        for (const [newProcessingId, newProcessingItem] of newProcessing.entries()){
            const oldProcessingItem = oldProcessing.get(newProcessingId);
            // --- Case 2a: New Processing ---
            if (!oldProcessingItem) {
                const changedProcessing = {
                    ...newProcessingItem,
                    isNew: true,
                    attributes: {
                        ...newProcessingItem.attributes,
                        newlyAddedCount: newProcessingItem.attributes.list.length
                    }
                };
                changedPurpose.processingList.push(changedProcessing);
                purposeHasChanges = true;
                continue;
            }
            // --- Case 2b: Existing Processing (Check for modifications) ---
            const changedProcessing = {
                ...newProcessingItem,
                isNew: false,
                updateNotice: null
            };
            let processingHasChanges = false;
            const processingUpdates = [];
            const oldAttrs = new Set(oldProcessingItem.attributes.list);
            const newAttrs = new Set(newProcessingItem.attributes.list);
            const addedAttrs = newProcessingItem.attributes.list.filter((attr)=>!oldAttrs.has(attr));
            const removedAttrs = oldProcessingItem.attributes.list.filter((attr)=>!newAttrs.has(attr));
            if (oldProcessingItem.title !== newProcessingItem.title) processingUpdates.push("title");
            if (oldProcessingItem.description !== newProcessingItem.description) processingUpdates.push("description");
            if (oldProcessingItem.defaultChecked !== newProcessingItem.defaultChecked) processingUpdates.push("mandatory status");
            if (oldProcessingItem.revocableByPrincipal !== newProcessingItem.revocableByPrincipal) processingUpdates.push("revocation policy");
            if (oldProcessingItem.reconsentableByPrincipal !== newProcessingItem.reconsentableByPrincipal) processingUpdates.push("re-consent policy");
            changedProcessing.attributes.newlyAddedCount = addedAttrs.length;
            if (processingUpdates.length > 0 || addedAttrs.length > 0 || removedAttrs.length > 0) {
                processingHasChanges = true;
                let notice = "This processing has been updated. ";
                if (processingUpdates.length > 0) notice += `Changes: ${processingUpdates.join(", ")}. `;
                if (addedAttrs.length > 0) notice += `New attributes: ${addedAttrs.join(", ")}. `;
                if (removedAttrs.length > 0) notice += `Removed attributes: ${removedAttrs.join(", ")}. `;
                changedProcessing.updateNotice = notice.trim();
            }
            // --- MODIFICATION START ---
            // Only add the processing item to the list if it has changes.
            // Unchanged items should not be included in the diff.
            if (processingHasChanges) {
                purposeHasChanges = true;
                changedPurpose.processingList.push(changedProcessing);
            }
        // --- MODIFICATION END ---
        }
        // --- Check for Deleted Processing ---
        for (const [oldProcessingId, oldProcessingItem] of oldProcessing.entries()){
            if (!newProcessing.has(oldProcessingId)) {
                const deletedProcessing = {
                    ...oldProcessingItem,
                    isNew: false,
                    isDeleted: true,
                    updateNotice: "This data processing has been removed.",
                    attributes: {
                        newlyAddedCount: 0,
                        list: []
                    }
                };
                changedPurpose.processingList.push(deletedProcessing);
                purposeHasChanges = true;
            }
        }
        // Only add the Purpose to the final list if it's new or has *any* changes
        if (purposeHasChanges || changedPurpose.isNew) {
            changedService.purposes.push(changedPurpose);
            hasChanges = true;
        }
    }
    // --- Check for Deleted Purposes ---
    for (const [oldPurposeId, oldPurpose] of oldPurposes.entries()){
        if (!newPurposes.has(oldPurposeId)) {
            const deletedPurpose = {
                ...oldPurpose,
                isNew: false,
                isDeleted: true,
                updateNotice: "This entire purpose has been removed.",
                // Mark all children as deleted for clarity
                processingList: oldPurpose.processingList.map((pp)=>({
                        ...pp,
                        isNew: false,
                        isDeleted: true,
                        updateNotice: "Removed as part of purpose deletion."
                    }))
            };
            changedService.purposes.push(deletedPurpose);
            hasChanges = true;
        }
    }
    // --- Final Step (User's Step 9) ---
    // If no changes, additions, or deletions were found, return null.
    return hasChanges ? changedService : null;
}
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
"[project]/lib/services/notices-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "completeNotice",
    ()=>completeNotice,
    "deleteNotice",
    ()=>deleteNotice,
    "expireNotices",
    ()=>expireNotices,
    "generateNoticeAccessToken",
    ()=>generateNoticeAccessToken,
    "generateNoticeLink",
    ()=>generateNoticeLink,
    "generateNoticeLinkFromObject",
    ()=>generateNoticeLinkFromObject,
    "getAllNotices",
    ()=>getAllNotices,
    "getBusinessProcessWithFullDataById",
    ()=>getBusinessProcessWithFullDataById,
    "getBusinessProcessesByCode",
    ()=>getBusinessProcessesByCode,
    "getConsentNotice",
    ()=>getConsentNotice,
    "getNoticeById",
    ()=>getNoticeById,
    "getNoticeByPublicId",
    ()=>getNoticeByPublicId,
    "getNoticeResourceType",
    ()=>getNoticeResourceType,
    "getNoticeWithFullDataByPublicId",
    ()=>getNoticeWithFullDataByPublicId,
    "submitNotice",
    ()=>submitNotice,
    "validateNoticeSubmission",
    ()=>validateNoticeSubmission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-diff.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$artifact$2d$creation$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/artifact-creation-service.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
// Notice submission validation functions
function validateAtLeastOneRuleSelected(selections) {
    const selectedCount = selections.filter((s)=>s.selected).length;
    if (selectedCount === 0) {
        return {
            code: "NO_RULES_SELECTED",
            message: "At least one rule must be selected to accept the notice",
            details: {
                selectedCount: 0
            }
        };
    }
    return null;
}
function validateMandatoryRulesSelected(selections, businessProcessRules) {
    const mandatoryRuleIds = businessProcessRules.filter((rule)=>rule.mandatory).map((rule)=>rule.id);
    const unselectedMandatoryRules = mandatoryRuleIds.filter((ruleId)=>{
        const selection = selections.find((s)=>s.ruleId === ruleId);
        return !selection || !selection.selected;
    });
    if (unselectedMandatoryRules.length > 0) {
        return {
            code: "MANDATORY_RULES_NOT_SELECTED",
            message: "All mandatory rules must be selected",
            details: {
                unselectedMandatoryRuleIds: unselectedMandatoryRules,
                totalMandatoryRules: mandatoryRuleIds.length
            }
        };
    }
    return null;
}
function validateNoDuplicateOrInvalidRules(selections, businessProcessRules) {
    const validRuleIds = businessProcessRules.map((rule)=>rule.id);
    const submittedRuleIds = selections.map((s)=>s.ruleId);
    // Check for duplicates in submission
    const duplicateRuleIds = submittedRuleIds.filter((id, index)=>submittedRuleIds.indexOf(id) !== index);
    if (duplicateRuleIds.length > 0) {
        return {
            code: "DUPLICATE_RULES",
            message: "Duplicate rules found in submission",
            details: {
                duplicateRuleIds
            }
        };
    }
    // Check for invalid rules (not in database)
    const invalidRuleIds = submittedRuleIds.filter((id)=>!validRuleIds.includes(id));
    if (invalidRuleIds.length > 0) {
        return {
            code: "INVALID_RULES",
            message: "Invalid rules found in submission",
            details: {
                invalidRuleIds,
                validRuleIds: validRuleIds.slice(0, 10)
            }
        };
    }
    return null;
}
async function validateNoticeSubmission(noticePublicId, selections) {
    const errors = [];
    try {
        // Fetch the notice with full business process data
        const notice = await getNoticeWithFullDataByPublicId(noticePublicId);
        if (!notice) {
            errors.push({
                code: "NOTICE_NOT_FOUND",
                message: "Notice not found",
                details: {
                    noticePublicId
                }
            });
            return {
                isValid: false,
                errors
            };
        }
        const businessProcessRules = notice.businessProcess.businessProcessRules;
        // Validation 1: At least one rule must be selected
        const atLeastOneError = validateAtLeastOneRuleSelected(selections);
        if (atLeastOneError) {
            errors.push(atLeastOneError);
        }
        // Validation 2: All mandatory rules must be selected
        const mandatoryError = validateMandatoryRulesSelected(selections, businessProcessRules);
        if (mandatoryError) {
            errors.push(mandatoryError);
        }
        // Validation 3: No duplicate or invalid rules
        const duplicateInvalidError = validateNoDuplicateOrInvalidRules(selections, businessProcessRules);
        if (duplicateInvalidError) {
            errors.push(duplicateInvalidError);
        }
        return {
            isValid: errors.length === 0,
            errors
        };
    } catch (error) {
        console.error("Error validating notice submission:", error);
        errors.push({
            code: "VALIDATION_ERROR",
            message: "Failed to validate notice submission",
            details: {
                error: error instanceof Error ? error.message : "Unknown error"
            }
        });
        return {
            isValid: false,
            errors
        };
    }
}
async function getAllNotices() {
    try {
        getConsentNotice("2ea3c6a7-da30-424a-b86f-a27d059fe927", "eb24e488-8eb7-42af-a4c5-1abcf25dd669");
        const notices = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findMany({
            include: {
                businessProcess: {
                    select: {
                        name: true,
                        code: true
                    }
                },
                metadata: true
            },
            orderBy: {
                updatedAt: "desc"
            }
        });
        return notices;
    } catch (error) {
        console.error("Error fetching notices:", error);
        throw new Error("Failed to fetch notices");
    }
}
async function getNoticeById(id) {
    try {
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
            where: {
                id
            },
            include: {
                businessProcess: {
                    select: {
                        name: true,
                        code: true
                    }
                }
            }
        });
        return notice;
    } catch (error) {
        console.error("Error fetching notice:", error);
        throw new Error("Failed to fetch notice");
    }
}
async function getNoticeByPublicId(publicId) {
    try {
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
            where: {
                publicId
            },
            include: {
                businessProcess: {
                    select: {
                        name: true,
                        code: true
                    }
                }
            }
        });
        return notice;
    } catch (error) {
        console.error("Error fetching notice by public ID:", error);
        throw new Error("Failed to fetch notice");
    }
}
async function getBusinessProcessWithFullDataById(businessProcessId) {
    try {
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                id: businessProcessId
            },
            select: {
                id: true,
                name: true,
                code: true,
                grantDescription: true,
                revokeDescription: true,
                reconsentDescription: true,
                legalDocuments: true,
                translations: true,
                supportedLanguages: true,
                businessProcessRules: {
                    select: {
                        id: true,
                        mandatory: true,
                        reconsentableByPrincipal: true,
                        revocableByPrincipal: true,
                        consentPurposeId: true,
                        processingPurposeId: true,
                        consentPurpose: {
                            select: {
                                id: true,
                                name: true,
                                code: true,
                                description: true,
                                translations: true,
                                supportedLanguages: true
                            }
                        },
                        processingPurpose: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                userAttributeNames: true,
                                translations: true,
                                supportedLanguages: true,
                                purposeOfProcessing: true
                            }
                        }
                    }
                },
                businessProcessToConsentPurposes: {
                    select: {
                        consentPurposeId: true,
                        consentDuration: true
                    }
                }
            }
        });
        if (!businessProcess) return null;
        // Get all user attribute names from all processing purposes in rules
        const userAttributeNames = new Set();
        businessProcess.businessProcessRules.forEach((rule)=>{
            rule.processingPurpose.userAttributeNames.forEach((name)=>userAttributeNames.add(name));
        });
        // Fetch user attributes
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
            where: {
                name: {
                    in: Array.from(userAttributeNames)
                }
            },
            select: {
                id: true,
                name: true,
                pii: true,
                translations: true,
                supportedLanguages: true
            }
        });
        // Create a map for quick lookup by name
        const userAttributesMap = new Map(userAttributes.map((ua)=>[
                ua.name,
                ua
            ]));
        // Create consent duration map
        const consentDurationMap = new Map();
        businessProcess.businessProcessToConsentPurposes.forEach((bpcp)=>{
            consentDurationMap.set(bpcp.consentPurposeId, bpcp.consentDuration);
        });
        // Transform the data structure to be rules-based
        const transformedBusinessProcess = {
            ...businessProcess,
            legalDocuments: businessProcess.legalDocuments,
            businessProcessRules: businessProcess.businessProcessRules.map((rule)=>({
                    id: rule.id,
                    mandatory: rule.mandatory,
                    reconsentableByPrincipal: rule.reconsentableByPrincipal,
                    revocableByPrincipal: rule.revocableByPrincipal,
                    consentPurposeId: rule.consentPurpose.id,
                    processingPurposeId: rule.processingPurpose.id,
                    consentPurpose: {
                        id: rule.consentPurpose.id,
                        name: rule.consentPurpose.name,
                        code: rule.consentPurpose.code,
                        description: rule.consentPurpose.description,
                        consentDuration: consentDurationMap.get(rule.consentPurpose.id) || null,
                        mandatory: false
                    },
                    processingPurpose: {
                        id: rule.processingPurpose.id,
                        name: rule.processingPurpose.name,
                        description: rule.processingPurpose.description,
                        userAttributeNames: rule.processingPurpose.userAttributeNames,
                        userAttributes: rule.processingPurpose.userAttributeNames.map((name)=>userAttributesMap.get(name)).filter(Boolean),
                        mandatory: rule.mandatory,
                        reconsentableByPrincipal: rule.reconsentableByPrincipal,
                        revocableByPrincipal: rule.revocableByPrincipal,
                        showSelection: true
                    }
                }))
        };
        return transformedBusinessProcess;
    } catch (error) {
        console.error("Error fetching business process with full data by ID:", error);
        throw new Error("Failed to fetch process with full data");
    }
}
async function getNoticeWithFullDataByPublicId(publicId) {
    try {
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
            where: {
                publicId
            },
            select: {
                id: true,
                publicId: true,
                status: true,
                consentDuration: true,
                dataPrincipalId: true,
                defaultLanguage: true,
                noticeConfig: true,
                updatedAt: true,
                forMinor: true,
                metadata: {
                    select: {
                        key: true,
                        value: true
                    }
                },
                businessProcess: {
                    select: {
                        id: true,
                        name: true,
                        code: true,
                        businessUnit: {
                            select: {
                                name: true
                            }
                        },
                        grantDescription: true,
                        revokeDescription: true,
                        reconsentDescription: true,
                        legalDocuments: true,
                        template: true,
                        translations: true,
                        supportedLanguages: true,
                        businessProcessRules: {
                            select: {
                                id: true,
                                mandatory: true,
                                reconsentableByPrincipal: true,
                                revocableByPrincipal: true,
                                consentPurposeId: true,
                                processingPurposeId: true,
                                consentPurpose: {
                                    select: {
                                        id: true,
                                        name: true,
                                        code: true,
                                        description: true,
                                        translations: true,
                                        supportedLanguages: true
                                    }
                                },
                                processingPurpose: {
                                    select: {
                                        id: true,
                                        name: true,
                                        description: true,
                                        userAttributeNames: true,
                                        translations: true,
                                        supportedLanguages: true,
                                        purposeOfProcessing: true
                                    }
                                }
                            }
                        },
                        businessProcessToConsentPurposes: {
                            select: {
                                consentPurposeId: true,
                                consentDuration: true
                            }
                        }
                    }
                }
            }
        });
        if (!notice) return null;
        // Get all user attribute names from all processing purposes in rules
        const userAttributeNames = new Set();
        notice.businessProcess.businessProcessRules.forEach((rule)=>{
            rule.processingPurpose.userAttributeNames.forEach((name)=>userAttributeNames.add(name));
        });
        // Fetch user attributes
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
            where: {
                name: {
                    in: Array.from(userAttributeNames)
                }
            },
            select: {
                id: true,
                name: true,
                pii: true,
                translations: true,
                supportedLanguages: true
            }
        });
        // Create a map for quick lookup by name
        const userAttributesMap = new Map(userAttributes.map((ua)=>[
                ua.name,
                ua
            ]));
        // Create consent duration map
        const consentDurationMap = new Map();
        notice.businessProcess.businessProcessToConsentPurposes.forEach((bpcp)=>{
            consentDurationMap.set(bpcp.consentPurposeId, bpcp.consentDuration);
        });
        // Transform the data structure to be rules-based
        const transformedNotice = {
            ...notice,
            businessProcess: {
                ...notice.businessProcess,
                legalDocuments: notice.businessProcess.legalDocuments,
                businessProcessRules: notice.businessProcess.businessProcessRules.map((rule)=>({
                        id: rule.id,
                        mandatory: rule.mandatory,
                        reconsentableByPrincipal: rule.reconsentableByPrincipal,
                        revocableByPrincipal: rule.revocableByPrincipal,
                        consentPurposeId: rule.consentPurpose.id,
                        processingPurposeId: rule.processingPurpose.id,
                        consentPurpose: {
                            id: rule.consentPurpose.id,
                            name: rule.consentPurpose.name,
                            code: rule.consentPurpose.code,
                            description: rule.consentPurpose.description,
                            consentDuration: consentDurationMap.get(rule.consentPurpose.id) || null,
                            mandatory: false,
                            translations: rule.consentPurpose.translations,
                            supportedLanguages: rule.consentPurpose.supportedLanguages
                        },
                        processingPurpose: {
                            id: rule.processingPurpose.id,
                            name: rule.processingPurpose.name,
                            description: rule.processingPurpose.description,
                            userAttributeNames: rule.processingPurpose.userAttributeNames,
                            userAttributes: rule.processingPurpose.userAttributeNames.map((name)=>userAttributesMap.get(name)).filter(Boolean),
                            mandatory: rule.mandatory,
                            reconsentableByPrincipal: rule.reconsentableByPrincipal,
                            revocableByPrincipal: rule.revocableByPrincipal,
                            showSelection: true,
                            translations: rule.processingPurpose.translations,
                            supportedLanguages: rule.processingPurpose.supportedLanguages
                        }
                    }))
            }
        };
        return transformedNotice;
    } catch (error) {
        console.error("Error fetching notice with full data by public ID:", error);
        throw new Error("Failed to fetch notice with full data");
    }
}
async function getBusinessProcessesByCode(code, version) {
    try {
        // 1. Fetch all business processes matching the code
        const businessProcesses = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findMany({
            where: {
                code: code,
                version: {
                    gte: version
                }
            },
            // --- MODIFICATION: Order by version, not id ---
            orderBy: {
                version: "asc"
            },
            select: {
                id: true,
                name: true,
                code: true,
                // --- ADDITION: You must select the version column ---
                version: true,
                // --- End Addition ---
                grantDescription: true,
                revokeDescription: true,
                reconsentDescription: true,
                legalDocuments: true,
                businessProcessRules: {
                    select: {
                        id: true,
                        mandatory: true,
                        reconsentableByPrincipal: true,
                        revocableByPrincipal: true,
                        consentPurposeId: true,
                        processingPurposeId: true,
                        consentPurpose: {
                            select: {
                                id: true,
                                name: true,
                                code: true,
                                description: true,
                                translations: true,
                                supportedLanguages: true
                            }
                        },
                        processingPurpose: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                userAttributeNames: true,
                                translations: true,
                                supportedLanguages: true,
                                purposeOfProcessing: true
                            }
                        }
                    }
                },
                businessProcessToConsentPurposes: {
                    select: {
                        consentPurposeId: true,
                        consentDuration: true
                    }
                }
            }
        });
        if (!businessProcesses || businessProcesses.length === 0) {
            return [];
        }
        // 2. Efficiently fetch all unique UserAttributes for all versions at once
        const allUserAttributeNames = new Set();
        businessProcesses.forEach((bp)=>{
            bp.businessProcessRules.forEach((rule)=>{
                rule.processingPurpose.userAttributeNames.forEach((name)=>allUserAttributeNames.add(name));
            });
        });
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
            where: {
                name: {
                    in: Array.from(allUserAttributeNames)
                }
            },
            select: {
                id: true,
                name: true,
                pii: true,
                translations: true,
                supportedLanguages: true
            }
        });
        const userAttributesMap = new Map(userAttributes.map((ua)=>[
                ua.name,
                ua
            ]));
        // 3. Transform all fetched business processes in the array
        const transformedBusinessProcesses = businessProcesses.map((businessProcess)=>{
            const consentDurationMap = new Map();
            businessProcess.businessProcessToConsentPurposes.forEach((bpcp)=>{
                consentDurationMap.set(bpcp.consentPurposeId, bpcp.consentDuration);
            });
            return {
                ...businessProcess,
                legalDocuments: businessProcess.legalDocuments,
                businessProcessRules: businessProcess.businessProcessRules.map((rule)=>({
                        id: rule.id,
                        mandatory: rule.mandatory,
                        reconsentableByPrincipal: rule.reconsentableByPrincipal,
                        revocableByPrincipal: rule.revocableByPrincipal,
                        consentPurposeId: rule.consentPurpose.id,
                        processingPurposeId: rule.processingPurpose.id,
                        consentPurpose: {
                            id: rule.consentPurpose.id,
                            name: rule.consentPurpose.name,
                            code: rule.consentPurpose.code,
                            description: rule.consentPurpose.description,
                            consentDuration: consentDurationMap.get(rule.consentPurpose.id) || null,
                            mandatory: false
                        },
                        processingPurpose: {
                            id: rule.processingPurpose.id,
                            name: rule.processingPurpose.name,
                            description: rule.processingPurpose.description,
                            userAttributeNames: rule.processingPurpose.userAttributeNames,
                            userAttributes: rule.processingPurpose.userAttributeNames.map((name)=>userAttributesMap.get(name)).filter(Boolean),
                            mandatory: rule.mandatory,
                            reconsentableByPrincipal: rule.reconsentableByPrincipal,
                            revocableByPrincipal: rule.revocableByPrincipal,
                            showSelection: true
                        }
                    }))
            };
        });
        return transformedBusinessProcesses;
    } catch (error) {
        console.error("Error fetching business processes by code:", error);
        throw new Error("Failed to fetch processes by code");
    }
}
async function deleteNotice(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.delete({
            where: {
                id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting notice:", error);
        throw new Error("Failed to delete notice");
    }
}
async function generateNoticeAccessToken(publicId, expiresAt) {
    try {
        const attrs = {
            public_id: publicId
        };
        const accessToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateAccessToken"])(attrs, expiresAt);
        return accessToken;
    } catch (error) {
        console.error("Error generating notice access token:", error);
        throw new Error("Failed to generate access token");
    }
}
async function generateNoticeLink(noticeId) {
    try {
        // Get the notice to check if it has a valid expiry date and get public ID
        const notice = await getNoticeById(noticeId);
        if (!notice) {
            throw new Error("Notice not found");
        }
        // Use the notice's linkExpiresAt or default to half an hour from now
        const expiresAt = notice.linkExpiresAt || new Date(Date.now() + 30 * 60 * 1000);
        const accessToken = await generateNoticeAccessToken(notice.publicId, expiresAt);
        const basePath = process.env.BASE_PATH || process.env.AUTH_URL || "http://localhost:3000";
        const noticeUrl = `${basePath}/principal/notice/${notice.publicId}/view/${accessToken}`;
        return noticeUrl;
    } catch (error) {
        console.error("Error generating notice link:", error);
        throw new Error("Failed to generate notice link");
    }
}
async function generateNoticeLinkFromObject(notice, isEmbed = false) {
    const expiresAt = notice.linkExpiresAt || new Date(Date.now() + 30 * 60 * 1000);
    const accessToken = await generateNoticeAccessToken(notice.publicId, expiresAt);
    const basePath = process.env.BASE_PATH || process.env.AUTH_URL || "http://localhost:3000";
    const link = `${basePath}/principal/notice/${notice.publicId}/view/${accessToken}`;
    return isEmbed ? `${link}?embed=true` : link;
}
async function submitNotice(noticePublicId, selections, language = "en") {
    try {
        // Create the data principal submitted data object
        const dataPrincipalSubmittedData = {};
        selections.forEach((selection)=>{
            dataPrincipalSubmittedData[selection.ruleId.toString()] = selection.selected;
        });
        // Update notice with submission data and mark as submitted
        const updatedNotice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.update({
            where: {
                publicId: noticePublicId
            },
            data: {
                dataPrincipalSubmittedData,
                status: "submitted",
                updatedAt: new Date()
            },
            include: {
                businessProcess: {
                    select: {
                        name: true,
                        code: true,
                        version: true
                    }
                }
            }
        });
        // Trigger NOTICE_SUBMITTED webhook (fire-and-forget)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].NOTICE_SUBMITTED, {
            notice_id: updatedNotice.publicId,
            data_principal_id: updatedNotice.dataPrincipalId,
            reference_id: updatedNotice.referenceId,
            business_process_code: updatedNotice.businessProcess.code,
            business_process_name: updatedNotice.businessProcess.name,
            business_process_version: updatedNotice.businessProcess.version,
            status: updatedNotice.status,
            consent_status: "accepted",
            resource_type: "grant_notice",
            inserted_at: updatedNotice.createdAt.toISOString(),
            updated_at: updatedNotice.updatedAt.toISOString(),
            submitted_selections: selections
        }).catch((webhookError)=>{
            console.error("Failed to trigger NOTICE_SUBMITTED webhook:", webhookError);
        // Don't fail the submission if webhook fails
        });
        // Start the complete_notice process asynchronously (don't await)
        completeNotice(noticePublicId, selections, language).catch((error)=>{
            console.error("Error in complete_notice process:", error);
            // update notice status to indicate completion error
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.update({
                where: {
                    publicId: noticePublicId
                },
                data: {
                    status: "completion_failed",
                    statusReason: error instanceof Error ? error.message : "Unknown error"
                }
            }).catch(console.error);
        });
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.update({
            where: {
                publicId: noticePublicId
            },
            data: {
                status: "completed"
            }
        });
        return {
            success: true,
            message: "Notice submitted successfully. Processing will complete in the background."
        };
    } catch (error) {
        console.error("Error submitting notice:", error);
        return {
            success: false,
            message: "Failed to submit notice",
            errors: [
                {
                    code: "SUBMISSION_ERROR",
                    message: error instanceof Error ? error.message : "Unknown error",
                    details: {
                        noticePublicId
                    }
                }
            ]
        };
    }
}
async function completeNotice(noticePublicId, selections, language = "en") {
    try {
        // Get the notice to access language and other details
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
            where: {
                publicId: noticePublicId
            },
            select: {
                defaultLanguage: true,
                dataPrincipalId: true,
                businessProcessId: true
            }
        });
        if (!notice) {
            throw new Error("Notice not found for completion");
        }
        // Create consents based on the selections using the user's selected language
        const consentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createConsents"])(noticePublicId, selections, language);
        if (!consentResult.success) {
            throw new Error(`Failed to create consents: ${consentResult}`);
        }
        // Mark notice as completed with accepted consent status
        const updatedNotice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.update({
            where: {
                publicId: noticePublicId
            },
            data: {
                status: "completed",
                consentStatus: "accepted",
                markCompletedTimestamp: new Date(),
                updatedAt: new Date()
            }
        });
        const bp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                id: updatedNotice.businessProcessId
            }
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$artifact$2d$creation$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendForArtifactCreation"])(updatedNotice.dataPrincipalId, updatedNotice.referenceId, bp.code);
    } catch (error) {
        console.error("Error completing notice:", error);
        throw error; // Re-throw to be caught by submitNotice
    }
}
async function expireNotices() {
    try {
        const now = new Date();
        // Find all notices that are pending and have expired
        const expiredNotices = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.findMany({
            where: {
                status: "pending",
                linkExpiresAt: {
                    lt: now
                }
            },
            select: {
                id: true,
                publicId: true,
                dataPrincipalId: true,
                referenceId: true
            }
        });
        if (expiredNotices.length === 0) {
            return {
                expiredCount: 0
            };
        }
        // Update all expired notices to cancelled status
        const updateResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notice.updateMany({
            where: {
                id: {
                    in: expiredNotices.map((notice)=>notice.id)
                }
            },
            data: {
                status: "cancelled",
                statusReason: "system expiry"
            }
        });
        return {
            expiredCount: updateResult.count,
            expiredNotices: expiredNotices.map((notice)=>({
                    id: notice.id,
                    publicId: notice.publicId,
                    dataPrincipalId: notice.dataPrincipalId,
                    referenceId: notice.referenceId
                }))
        };
    } catch (error) {
        console.error(`Error expiring notices:`, error);
        throw error;
    }
}
function getNoticeResourceType(type = "grant") {
    switch(type){
        case "grant":
            return "grant_notice";
        case "revoke":
            return "revoke_notice";
        case "reconsent":
            return "reconsent_notice";
        default:
            return "grant_notice";
    }
}
async function getConsentNotice(businessProcessId, dataPrincipalId) {
    const finalChanges = {};
    // --- Step 1: Get user's active consents and the BP version they consented to ---
    const activeConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consent.findMany({
        where: {
            businessProcessId: businessProcessId,
            dataPrincipalId: dataPrincipalId,
            status: "accepted",
            isExpired: false
        },
        include: {
            businessProcess: {
                select: {
                    id: true,
                    version: true,
                    code: true,
                    publicId: true
                }
            }
        }
    });
    if (activeConsents.length === 0) {
        return {}; // No active consents, so no changes to show.
    }
    // --- Find the *latest* version the user consented to for each BP code ---
    const latestConsentedBp = new Map();
    let version;
    for (const consent of activeConsents){
        const bp = consent.businessProcess;
        const existing = latestConsentedBp.get(bp.code);
        // If we haven't seen this code, or if this consent is for a
        // newer version than one we've already seen, record it.
        version = bp.version;
        if (!existing || bp.version > existing.version) {
            latestConsentedBp.set(bp.code, {
                id: bp.id,
                publicId: bp.publicId,
                version: bp.version
            });
        }
    }
    // --- Step 2, 3, 4: Get all versions and find newer ones ---
    for (const [code, { id: consentedVersionId }] of latestConsentedBp.entries()){
        try {
            // Get ALL versions for this code (using your existing function)
            const allBps = await getBusinessProcessesByCode(code, version);
            // Find the specific BP version the user consented to
            const oldBp = allBps.find((bp)=>bp.id === consentedVersionId);
            // Find all BPs that are *newer* than the one they consented to
            const newBps = allBps.filter((bp)=>bp.id > consentedVersionId).sort((a, b)=>a.id - b.id); // Sort ascending by ID/version
            // If there is no old BP or no new versions, there's nothing to diff
            if (!oldBp || newBps.length === 0) {
                continue;
            }
            // Get the *latest* version from the new versions
            const latestBp = newBps[newBps.length - 1];
            // --- Step 5, 6, 7, 8: Regroup, Diff, and store changes ---
            // 5. Regroup data for diffing
            const oldData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regroupBpData"])(oldBp);
            const newData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regroupBpData"])(latestBp);
            // 6. Generate diff
            const changes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateConsentDiff"])(oldData, newData);
            // 7. Add to final result if changes exist
            if (changes) {
                finalChanges[code] = changes;
            }
        } catch (error) {
            console.error(`Failed to generate diff for BP code ${code}:`, error);
        // Decide if you want to stop or just skip this BP
        }
    }
    return finalChanges;
}
}),
"[project]/actions/business-processes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"004cc68e0992e3703fd8281888792623275653144c":"getBusinessProcesses","007f61f27ac40434952348ee6fcb9461d97e028d9a":"getPublishedConsentPurposes","00abbb200346583c692e48cbcc5379d863e1e9bc43":"getBusinessProcessData","4069a7fa3896cc2660a242629adc6a14e1d992203d":"getBusinessProcessById","40b1b85e0c514b2f8ee7f2130f5243b52de51d3efa":"getNextVersionsForBPCodes","40c1ee9d7309051fa093aee9bb065fa5426c7388ad":"getHighestVersionForCode","40f0ee935767046fb8670d43bb75d76a3b01e933be":"saveOrPublishBusinessProcessWithVersioning","40f172b44681dcf2f6e26caa7f3c3767cfc3d2950d":"getBusinessProcessWithFullData","7fe3369815b927904be81a9b69e05d585971c9ab8b":"deleteBusinessProcess"},"",""] */ __turbopack_context__.s([
    "deleteBusinessProcess",
    ()=>deleteBusinessProcess,
    "getBusinessProcessById",
    ()=>getBusinessProcessById,
    "getBusinessProcessData",
    ()=>getBusinessProcessData,
    "getBusinessProcessWithFullData",
    ()=>getBusinessProcessWithFullData,
    "getBusinessProcesses",
    ()=>getBusinessProcesses,
    "getHighestVersionForCode",
    ()=>getHighestVersionForCode,
    "getNextVersionsForBPCodes",
    ()=>getNextVersionsForBPCodes,
    "getPublishedConsentPurposes",
    ()=>getPublishedConsentPurposes,
    "saveOrPublishBusinessProcessWithVersioning",
    ()=>saveOrPublishBusinessProcessWithVersioning
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$processes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/business-processes-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$notices$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/notices-service.ts [app-rsc] (ecmascript)");
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
;
;
;
async function getBusinessProcesses() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$processes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllBusinessProcesses"])();
    } catch (error) {
        console.error("Error in getBusinessProcesses action:", error);
        return [];
    }
}
async function getBusinessProcessById(id) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$processes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessById"])(id);
    } catch (error) {
        console.error("Error in getBusinessProcessById action:", error);
        return null;
    }
}
const deleteBusinessProcessSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const deleteBusinessProcess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].DELETE
}, deleteBusinessProcessSchema, async (input, user)=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$processes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBusinessProcess"])(input.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/business-processes");
    return true;
});
async function getPublishedConsentPurposes() {
    try {
        // TODO: Add RBAC check here
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$processes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedConsentPurposes"])();
    } catch (error) {
        console.error("Error in getPublishedConsentPurposes action:", error);
        return [];
    }
}
async function getBusinessProcessData() {
    try {
        // TODO: Add RBAC check here
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$processes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessFormData"])();
    } catch (error) {
        console.error("Error in getBusinessProcessData action:", error);
        return {
            consentPurposes: [],
            userAttributes: [],
            dataProcessors: []
        };
    }
}
async function getBusinessProcessWithFullData(businessProcessId) {
    try {
        // TODO: Add RBAC check here
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$notices$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessWithFullDataById"])(businessProcessId);
    } catch (error) {
        console.error("Error in getBusinessProcessWithFullData action:", error);
        return null;
    }
}
// Zod schema for business process save/publish
const saveBusinessProcessSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    clientState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
    createdBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    businessProcessId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
async function saveOrPublishBusinessProcessWithVersioning(input) {
    try {
        // 1. Authentication Check
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Action attempt without session", {
                resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS
            });
            return {
                success: false,
                error: "Unauthorized: You must be logged in to perform this action."
            };
        }
        // 2. Determine action type based on whether businessProcessId exists
        const actionType = input.businessProcessId ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].CREATE;
        // 3. Permission Check
        const userRoles = session.user.roles || [];
        const isAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasPermission"])(userRoles, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS, actionType);
        if (!isAllowed) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Action permission denied", {
                userId: session.user.id,
                resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS,
                action: actionType,
                roles: userRoles.map((r)=>r.role.name)
            });
            return {
                success: false,
                error: `Permission Denied: You do not have permission to ${actionType} ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS}.`
            };
        }
        // 4. Input Validation
        const validationResult = saveBusinessProcessSchema.safeParse(input);
        if (!validationResult.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Action validation failed", {
                userId: session.user.id,
                resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS,
                action: actionType,
                errors: validationResult.error.flatten().fieldErrors
            });
            return {
                success: false,
                error: "Invalid Input",
                validationErrors: validationResult.error.flatten().fieldErrors
            };
        }
        // Use createdBy from input if provided, otherwise use authenticated user
        const createdBy = validationResult.data.createdBy || session.user.id;
        // Call the versioning service
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$business$2d$processes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveOrUpdateBusinessProcessWithVersioning"])(input.clientState, createdBy, input.businessProcessId, input.status);
        // If a new version was created and published, notify data principals
        if (result.isNewVersion && input.status === "published" && input.businessProcessId && input.clientState.step1Data?.code) {
            try {
                const { notifyDataPrincipalsOfVersionChange } = await __turbopack_context__.A("[project]/lib/services/bp-version-change-notification-service.ts [app-rsc] (ecmascript, async loader)");
                // Get the old version number
                const oldBp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
                    where: {
                        id: input.businessProcessId
                    },
                    select: {
                        version: true
                    }
                });
                if (oldBp) {
                    // Get the new business process publicId
                    const newBp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
                        where: {
                            id: result.businessProcessId
                        },
                        select: {
                            publicId: true
                        }
                    });
                    if (newBp) {
                        // Fire and forget - don't wait for notifications to complete
                        notifyDataPrincipalsOfVersionChange(input.clientState.step1Data.code, oldBp.version, newBp.publicId).catch((error)=>{
                            console.error("Error sending version change notifications:", error);
                        });
                    }
                }
            } catch (error) {
                console.error("Error initiating version change notifications:", error);
            // Don't fail the save operation if notification fails
            }
        }
        // Revalidate paths
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/business-processes");
        if (result.businessProcessId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/business-processes/${result.businessProcessId}`);
        }
        // 6. Audit Logging
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAudit"])({
            action: actionType,
            resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS,
            resourceId: result.businessProcessId,
            performedByUserId: session.user.id,
            payload: validationResult.data,
            result: {
                businessProcessId: result.businessProcessId,
                isNewVersion: result.isNewVersion,
                hasBreakingChanges: result.hasBreakingChanges
            },
            status: "SUCCESS"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Action executed successfully", {
            userId: session.user.id,
            resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS,
            action: actionType,
            resourceId: result.businessProcessId
        });
        return {
            success: true,
            data: {
                businessProcessId: result.businessProcessId,
                isNewVersion: result.isNewVersion,
                hasBreakingChanges: result.hasBreakingChanges,
                breakingChanges: result.breakingChanges
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Action execution failed", {
            error,
            resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS
        });
        return {
            success: false,
            error: error instanceof Error ? error.message : "An unexpected error occurred"
        };
    }
}
async function getHighestVersionForCode(code) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "User not authenticated"
            };
        }
        const highestBP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
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
            highestVersion: highestBP?.version || 0
        };
    } catch (error) {
        console.error("Error fetching highest version:", error);
        return {
            success: false,
            error: "Failed to fetch highest version"
        };
    }
}
async function getNextVersionsForBPCodes(codes) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                success: false,
                error: "User not authenticated"
            };
        }
        const results = await Promise.all(codes.map(async (code)=>{
            const highestBP = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
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
                code,
                nextVersion: (highestBP?.version || 0) + 1
            };
        }));
        const versionMap = {};
        results.forEach((r)=>{
            versionMap[r.code] = r.nextVersion;
        });
        return {
            success: true,
            versions: versionMap
        };
    } catch (error) {
        console.error("Error fetching next versions:", error);
        return {
            success: false,
            error: "Failed to fetch next versions"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBusinessProcesses,
    getBusinessProcessById,
    deleteBusinessProcess,
    getPublishedConsentPurposes,
    getBusinessProcessData,
    getBusinessProcessWithFullData,
    saveOrPublishBusinessProcessWithVersioning,
    getHighestVersionForCode,
    getNextVersionsForBPCodes
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessProcesses, "004cc68e0992e3703fd8281888792623275653144c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessProcessById, "4069a7fa3896cc2660a242629adc6a14e1d992203d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBusinessProcess, "7fe3369815b927904be81a9b69e05d585971c9ab8b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPublishedConsentPurposes, "007f61f27ac40434952348ee6fcb9461d97e028d9a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessProcessData, "00abbb200346583c692e48cbcc5379d863e1e9bc43", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessProcessWithFullData, "40f172b44681dcf2f6e26caa7f3c3767cfc3d2950d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveOrPublishBusinessProcessWithVersioning, "40f0ee935767046fb8670d43bb75d76a3b01e933be", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHighestVersionForCode, "40c1ee9d7309051fa093aee9bb065fa5426c7388ad", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNextVersionsForBPCodes, "40b1b85e0c514b2f8ee7f2130f5243b52de51d3efa", null);
}),
"[project]/lib/constants/google-translate-mapping.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Google Translate Language Code Mapping
 * Maps our internal language codes to Google Cloud Translation API language codes
 * 
 * Note: Some Indian languages may not have direct Google Translate support
 * In such cases, we map to the closest available language
 */ __turbopack_context__.s([
    "GOOGLE_TRANSLATE_LANG_MAP",
    ()=>GOOGLE_TRANSLATE_LANG_MAP,
    "UNSUPPORTED_LANGUAGES",
    ()=>UNSUPPORTED_LANGUAGES,
    "getFallbackLanguage",
    ()=>getFallbackLanguage,
    "getGoogleTranslateCode",
    ()=>getGoogleTranslateCode,
    "hasDirectTranslateSupport",
    ()=>hasDirectTranslateSupport
]);
const GOOGLE_TRANSLATE_LANG_MAP = {
    en: 'en',
    as: 'as',
    bn: 'bn',
    brx: 'hi',
    doi: 'doi',
    gu: 'gu',
    hi: 'hi',
    kn: 'kn',
    ks: 'ur',
    kok: 'gom',
    mai: 'mai',
    ml: 'ml',
    mni: 'mni-Mtei',
    mr: 'mr',
    ne: 'ne',
    or: 'or',
    pa: 'pa',
    sa: 'sa',
    sat: 'hi',
    sd: 'sd',
    ta: 'ta',
    te: 'te',
    ur: 'ur'
};
const UNSUPPORTED_LANGUAGES = [
    'brx',
    'ks',
    'sat'
];
function getGoogleTranslateCode(languageCode) {
    return GOOGLE_TRANSLATE_LANG_MAP[languageCode];
}
function hasDirectTranslateSupport(languageCode) {
    return !UNSUPPORTED_LANGUAGES.includes(languageCode);
}
function getFallbackLanguage(languageCode) {
    if (hasDirectTranslateSupport(languageCode)) {
        return null;
    }
    const googleCode = GOOGLE_TRANSLATE_LANG_MAP[languageCode];
    // Find a SUPPORTED language that uses this Google code
    for (const [code, gCode] of Object.entries(GOOGLE_TRANSLATE_LANG_MAP)){
        if (gCode === googleCode && code !== languageCode && hasDirectTranslateSupport(code)) {
            return code;
        }
    }
    return 'en'; // Ultimate fallback
}
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[project]/lib/services/google-translate-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Google Cloud Translation Service
 * 
 * Provides translation capabilities using Google Cloud Translation API v3
 * Includes development mode that simulates translations without API calls
 * 
 * Environment Variables:
 * - NODE_ENV: 'development' | 'production' (uses mock translations in dev)
 * - GCS_PROJECT_ID: Google Cloud Project ID
 * - GCS_KEYFILE_PATH: Path to service account key file
 * 
 * Dev Mode:
 * When NODE_ENV !== 'production' and GCS credentials are missing,
 * the service will use mock translations (prefixed with language code)
 */ __turbopack_context__.s([
    "getTranslationServiceStatus",
    ()=>getTranslationServiceStatus,
    "translateBatch",
    ()=>translateBatch,
    "translateObject",
    ()=>translateObject,
    "translateText",
    ()=>translateText,
    "translateToMultipleLanguages",
    ()=>translateToMultipleLanguages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/google-translate-mapping.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
;
;
// Only import Google Translate in production or when credentials exist
let TranslationServiceClient = null;
const isDevelopment = ("TURBOPACK compile-time value", "development") !== 'production';
const hasCredentials = Boolean(process.env.GCS_PROJECT_ID && process.env.GCS_KEYFILE_PATH);
// Initialize the client only if we have credentials
if (hasCredentials) {
    try {
        const { v3 } = __turbopack_context__.r("[project]/node_modules/@google-cloud/translate/build/src/index.js [app-rsc] (ecmascript)");
        TranslationServiceClient = v3.TranslationServiceClient;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn('Google Translate client initialization failed', {
            error
        });
    }
}
/**
 * Translation service configuration
 */ const config = {
    projectId: process.env.GCS_PROJECT_ID || '',
    keyFilename: process.env.GCS_KEYFILE_PATH || '',
    location: 'global'
};
/**
 * Check if we're in mock mode
 */ function isMockMode() {
    return isDevelopment && !hasCredentials;
}
/**
 * Mock translation for development (simulates translation by prefixing with language code)
 * Adds realistic delay to simulate API latency
 */ async function mockTranslate(text, targetLanguage) {
    if (!text || text.trim().length === 0) {
        return text;
    }
    // Simulate realistic API latency (100-300ms per translation)
    const delay = 100 + Math.random() * 200;
    await new Promise((resolve)=>setTimeout(resolve, delay));
    // Simple simulation: prefix with [LANG] to show it's "translated"
    return `[${targetLanguage.toUpperCase()}] ${text}`;
}
/**
 * Create translation client instance
 */ function createClient() {
    if (isMockMode()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Translation Service: Running in MOCK MODE (development without credentials)');
        return null;
    }
    if (!TranslationServiceClient) {
        throw new Error('Google Translate client not initialized. Check your credentials.');
    }
    return new TranslationServiceClient({
        projectId: config.projectId,
        keyFilename: config.keyFilename
    });
}
async function translateText(text, targetLanguage, sourceLanguage = 'en') {
    // Return empty strings as-is
    if (!text || text.trim().length === 0) {
        return text;
    }
    // If source and target are the same, no translation needed
    if (sourceLanguage === targetLanguage) {
        return text;
    }
    const targetGoogleCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGoogleTranslateCode"])(targetLanguage);
    const sourceGoogleCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGoogleTranslateCode"])(sourceLanguage);
    // Mock mode for development
    if (isMockMode()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug('Mock translating text', {
            sourceLanguage,
            targetLanguage,
            textLength: text.length
        });
        return await mockTranslate(text, targetGoogleCode);
    }
    try {
        const client = createClient();
        if (!client) {
            throw new Error('Translation client not available');
        }
        const request = {
            parent: `projects/${config.projectId}/locations/${config.location}`,
            contents: [
                text
            ],
            mimeType: 'text/plain',
            sourceLanguageCode: sourceGoogleCode,
            targetLanguageCode: targetGoogleCode
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Translating text via Google Translate API', {
            sourceLanguage: sourceGoogleCode,
            targetLanguage: targetGoogleCode,
            textLength: text.length
        });
        const [response] = await client.translateText(request);
        const translatedText = response.translations?.[0]?.translatedText || text;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Translation successful', {
            sourceLanguage: sourceGoogleCode,
            targetLanguage: targetGoogleCode,
            originalLength: text.length,
            translatedLength: translatedText.length
        });
        return translatedText;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Translation failed', {
            error,
            sourceLanguage,
            targetLanguage,
            textLength: text.length
        });
        // Fallback: return original text on error
        return text;
    }
}
async function translateBatch(texts, targetLanguage, sourceLanguage = 'en') {
    // Empty array check
    if (!texts || texts.length === 0) {
        return [];
    }
    // If source and target are the same, no translation needed
    if (sourceLanguage === targetLanguage) {
        return texts;
    }
    const targetGoogleCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGoogleTranslateCode"])(targetLanguage);
    const sourceGoogleCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGoogleTranslateCode"])(sourceLanguage);
    // Mock mode for development
    if (isMockMode()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug('Mock translating batch', {
            sourceLanguage,
            targetLanguage,
            count: texts.length
        });
        // Process sequentially to simulate realistic timing
        const results = [];
        for (const text of texts){
            if (text) {
                results.push(await mockTranslate(text, targetGoogleCode));
            } else {
                results.push(text);
            }
        }
        return results;
    }
    try {
        const client = createClient();
        if (!client) {
            throw new Error('Translation client not available');
        }
        const request = {
            parent: `projects/${config.projectId}/locations/${config.location}`,
            contents: texts,
            mimeType: 'text/plain',
            sourceLanguageCode: sourceGoogleCode,
            targetLanguageCode: targetGoogleCode
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Batch translating via Google Translate API', {
            sourceLanguage: sourceGoogleCode,
            targetLanguage: targetGoogleCode,
            count: texts.length
        });
        const [response] = await client.translateText(request);
        const translatedTexts = response.translations?.map((t)=>t.translatedText) || texts;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Batch translation successful', {
            sourceLanguage: sourceGoogleCode,
            targetLanguage: targetGoogleCode,
            count: translatedTexts.length
        });
        return translatedTexts;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Batch translation failed', {
            error,
            sourceLanguage,
            targetLanguage,
            count: texts.length
        });
        // Fallback: return original texts on error
        return texts;
    }
}
async function translateToMultipleLanguages(text, targetLanguages, sourceLanguage = 'en') {
    // Empty text check
    if (!text || text.trim().length === 0) {
        const result = {};
        targetLanguages.forEach((lang)=>{
            result[lang] = text;
        });
        return result;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Translating to multiple languages', {
        sourceLanguage,
        targetLanguages,
        textLength: text.length
    });
    // Translate to each language
    const translations = await Promise.all(targetLanguages.map(async (targetLang)=>{
        const translated = await translateText(text, targetLang, sourceLanguage);
        return {
            lang: targetLang,
            text: translated
        };
    }));
    // Build result object
    const result = {};
    translations.forEach(({ lang, text: translatedText })=>{
        result[lang] = translatedText;
    });
    return result;
}
async function translateObject(obj, targetLanguage, sourceLanguage = 'en') {
    const keys = Object.keys(obj);
    const values = keys.map((key)=>obj[key] || '');
    // Filter out empty values and keep track of which indices have content
    const nonEmptyIndices = [];
    const nonEmptyValues = [];
    values.forEach((value, index)=>{
        if (value && value.trim().length > 0) {
            nonEmptyIndices.push(index);
            nonEmptyValues.push(value);
        }
    });
    // Translate only non-empty values
    const translatedNonEmpty = await translateBatch(nonEmptyValues, targetLanguage, sourceLanguage);
    // Rebuild the result object
    const result = {};
    keys.forEach((key, index)=>{
        const nonEmptyIndex = nonEmptyIndices.indexOf(index);
        if (nonEmptyIndex !== -1) {
            result[key] = translatedNonEmpty[nonEmptyIndex];
        } else {
            result[key] = obj[key]; // Keep original empty/null values
        }
    });
    return result;
}
function getTranslationServiceStatus() {
    return {
        mode: isMockMode() ? 'mock' : 'production',
        hasCredentials,
        projectId: config.projectId ? '✓' : '✗',
        keyFile: config.keyFilename ? '✓' : '✗'
    };
}
}),
"[project]/actions/auto-translate.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"704ce32ef850c2bb4b6f4d46e757bc9db118d35e04":"translateTextToLanguages","706a268d80ff66c982e5e3f3b6e8f46051ad64ac85":"autoTranslateUserAttribute","7817f412d199e81c81597545fc9f54d9c77bdb0d92":"autoTranslateConsentPurpose","786fd342078d6b7afd66dc76df99e14c9e35cb1365":"autoTranslateProcessingPurpose","78fbfbd66a197b4f61ba4aa740092cd88ebe12c695":"autoTranslateBusinessProcess","78fc1f3d5cd0bd1dc8b98fe79b082bb3dee67c011b":"autoTranslateUserAttributeFields"},"",""] */ __turbopack_context__.s([
    "autoTranslateBusinessProcess",
    ()=>autoTranslateBusinessProcess,
    "autoTranslateConsentPurpose",
    ()=>autoTranslateConsentPurpose,
    "autoTranslateProcessingPurpose",
    ()=>autoTranslateProcessingPurpose,
    "autoTranslateUserAttribute",
    ()=>autoTranslateUserAttribute,
    "autoTranslateUserAttributeFields",
    ()=>autoTranslateUserAttributeFields,
    "translateTextToLanguages",
    ()=>translateTextToLanguages
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/google-translate-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function autoTranslateUserAttribute(userAttributeId, targetLanguages, sourceLanguage = "en") {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute: Starting", {
            userAttributeId,
            targetLanguages,
            sourceLanguage,
            userId: session.user.id
        });
        // Validate inputs
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        // Fetch user attribute
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findUnique({
            where: {
                id: userAttributeId
            },
            select: {
                id: true,
                name: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!userAttribute) {
            return {
                error: "User attribute not found"
            };
        }
        // Get source translation (English by default)
        const currentTranslations = userAttribute.translations || {};
        const sourceTranslation = currentTranslations[sourceLanguage] || {
            name: userAttribute.name,
            description: null,
            placeholder: null
        };
        // Validate source has content
        if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
            return {
                error: `Source translation (${sourceLanguage}) has no name`
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute: Translating fields", {
            userAttributeId,
            sourceLanguage,
            targetLanguages,
            fields: Object.keys(sourceTranslation)
        });
        // Translate to each target language
        const translationResults = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                // Skip if source and target are the same
                if (targetLang === sourceLanguage) {
                    translationResults[targetLang] = sourceTranslation;
                    continue;
                }
                // Translate the object
                const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])({
                    name: sourceTranslation.name,
                    description: sourceTranslation.description || null,
                    placeholder: sourceTranslation.placeholder || null
                }, targetLang, sourceLanguage);
                translationResults[targetLang] = translated;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute: Language completed", {
                    userAttributeId,
                    language: targetLang
                });
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                errors.push(errorMsg);
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate User Attribute: Language failed", {
                    error,
                    userAttributeId,
                    language: targetLang
                });
            }
        }
        // If all translations failed, return error
        if (Object.keys(translationResults).length === 0) {
            return {
                error: "All translations failed",
                details: errors
            };
        }
        // Merge with existing translations (don't overwrite manually edited ones unless explicitly requested)
        const updatedTranslations = {
            ...currentTranslations,
            ...translationResults
        };
        // Update supported languages
        const newLanguages = Object.keys(translationResults);
        const existingLanguages = userAttribute.supportedLanguages || [];
        const supportedLanguages = Array.from(new Set([
            ...existingLanguages,
            ...newLanguages
        ]));
        // Save to database
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.update({
            where: {
                id: userAttributeId
            },
            data: {
                translations: updatedTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute: Completed successfully", {
            userAttributeId,
            translatedLanguages: Object.keys(translationResults),
            totalLanguages: supportedLanguages.length
        });
        // Revalidate cache
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/user-attributes");
        return {
            success: true,
            translations: translationResults,
            translatedCount: Object.keys(translationResults).length,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate User Attribute: Failed", {
            error,
            userAttributeId,
            targetLanguages
        });
        return {
            error: "Failed to auto-translate",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function autoTranslateUserAttributeFields(userAttributeId, targetLanguage, fields, sourceLanguage = "en") {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        // Validate user attribute exists
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findUnique({
            where: {
                id: userAttributeId
            },
            select: {
                id: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!userAttribute) {
            return {
                error: "User attribute not found"
            };
        }
        // Translate the provided fields
        const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])(fields, targetLanguage, sourceLanguage);
        // Update translations
        const currentTranslations = userAttribute.translations || {};
        currentTranslations[targetLanguage] = {
            ...currentTranslations[targetLanguage] || {},
            ...translated
        };
        // Update supported languages
        const supportedLanguages = userAttribute.supportedLanguages || [];
        if (!supportedLanguages.includes(targetLanguage)) {
            supportedLanguages.push(targetLanguage);
        }
        // Save to database
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.update({
            where: {
                id: userAttributeId
            },
            data: {
                translations: currentTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute Fields: Completed", {
            userAttributeId,
            targetLanguage,
            fields: Object.keys(fields)
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/user-attributes");
        return {
            success: true,
            translation: translated
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate User Attribute Fields: Failed", {
            error,
            userAttributeId,
            targetLanguage
        });
        return {
            error: "Failed to auto-translate fields",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function translateTextToLanguages(text, targetLanguages, sourceLanguage = "en") {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Translate Text: Starting", {
            targetLanguages,
            sourceLanguage,
            textLength: text.length,
            userId: session.user.id
        });
        // Validate inputs
        if (!text || text.trim() === "") {
            return {
                error: "No text provided for translation"
            };
        }
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        // Import translation service
        const { translateText } = await __turbopack_context__.A("[project]/lib/services/google-translate-service.ts [app-rsc] (ecmascript, async loader)");
        // Translate to each target language
        const translations = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                // Skip if source and target are the same
                if (targetLang === sourceLanguage) {
                    translations[targetLang] = text;
                    continue;
                }
                // Translate the text
                const translated = await translateText(text, targetLang, sourceLanguage);
                translations[targetLang] = translated;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Translate Text: Language completed", {
                    targetLang,
                    textLength: translated.length
                });
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Translate Text: Language failed", {
                    error,
                    targetLang
                });
                errors.push(errorMsg);
            }
        }
        if (Object.keys(translations).length === 0) {
            return {
                error: "Failed to translate to any language",
                details: errors.join(", ")
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Translate Text: Completed", {
            successCount: Object.keys(translations).length,
            errorCount: errors.length
        });
        return {
            success: true,
            translations,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Translate Text: Failed", {
            error,
            sourceLanguage,
            targetLanguages
        });
        return {
            error: "Failed to translate text",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function autoTranslateBusinessProcess(businessProcessId, targetLanguages, sourceLanguage = "en", englishData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Business Process: Starting", {
            businessProcessId,
            targetLanguages,
            sourceLanguage,
            userId: session.user.id,
            hasEnglishData: !!englishData
        });
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                id: businessProcessId
            },
            select: {
                id: true,
                name: true,
                grantDescription: true,
                revokeDescription: true,
                reconsentDescription: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!businessProcess) {
            return {
                error: "Business process not found"
            };
        }
        const currentTranslations = businessProcess.translations || {};
        // Use provided englishData if available (for newly added/edited fields), otherwise fall back to DB
        const sourceTranslation = englishData || currentTranslations[sourceLanguage] || {
            name: businessProcess.name,
            grantDescription: businessProcess.grantDescription,
            revokeDescription: businessProcess.revokeDescription || null,
            reconsentDescription: businessProcess.reconsentDescription || null
        };
        if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
            return {
                error: `Source translation (${sourceLanguage}) has no name`
            };
        }
        const translationResults = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                if (targetLang === sourceLanguage) {
                    translationResults[targetLang] = sourceTranslation;
                    continue;
                }
                const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])({
                    name: sourceTranslation.name,
                    grantDescription: sourceTranslation.grantDescription || null,
                    revokeDescription: sourceTranslation.revokeDescription || null,
                    reconsentDescription: sourceTranslation.reconsentDescription || null
                }, targetLang, sourceLanguage);
                translationResults[targetLang] = translated;
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Business Process: Language failed", {
                    error,
                    targetLang
                });
                errors.push(errorMsg);
            }
        }
        if (Object.keys(translationResults).length === 0) {
            return {
                error: "Failed to translate to any language",
                details: errors.join(", ")
            };
        }
        // Merge with existing translations
        const updatedTranslations = {
            ...currentTranslations,
            ...translationResults
        };
        // Update supported languages
        const supportedLanguages = businessProcess.supportedLanguages || [
            "en"
        ];
        targetLanguages.forEach((lang)=>{
            if (!supportedLanguages.includes(lang)) {
                supportedLanguages.push(lang);
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.update({
            where: {
                id: businessProcessId
            },
            data: {
                translations: updatedTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Business Process: Completed", {
            businessProcessId,
            successCount: Object.keys(translationResults).length,
            errorCount: errors.length
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/business-processes");
        return {
            success: true,
            translations: updatedTranslations,
            translatedCount: Object.keys(translationResults).length,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Business Process: Failed", {
            error,
            businessProcessId,
            targetLanguages
        });
        return {
            error: "Failed to auto-translate business process",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function autoTranslateConsentPurpose(consentPurposeId, targetLanguages, sourceLanguage = "en", englishData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Consent Purpose: Starting", {
            consentPurposeId,
            targetLanguages,
            sourceLanguage,
            userId: session.user.id,
            hasEnglishData: !!englishData
        });
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        const consentPurpose = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findUnique({
            where: {
                id: consentPurposeId
            },
            select: {
                id: true,
                name: true,
                description: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!consentPurpose) {
            return {
                error: "Consent purpose not found"
            };
        }
        const currentTranslations = consentPurpose.translations || {};
        // Use provided englishData if available (for newly added/edited fields), otherwise fall back to DB
        const sourceTranslation = englishData || currentTranslations[sourceLanguage] || {
            name: consentPurpose.name,
            description: consentPurpose.description || null
        };
        if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
            return {
                error: `Source translation (${sourceLanguage}) has no name`
            };
        }
        const translationResults = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                if (targetLang === sourceLanguage) {
                    translationResults[targetLang] = sourceTranslation;
                    continue;
                }
                const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])({
                    name: sourceTranslation.name,
                    description: sourceTranslation.description || null
                }, targetLang, sourceLanguage);
                translationResults[targetLang] = translated;
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Consent Purpose: Language failed", {
                    error,
                    targetLang
                });
                errors.push(errorMsg);
            }
        }
        if (Object.keys(translationResults).length === 0) {
            return {
                error: "Failed to translate to any language",
                details: errors.join(", ")
            };
        }
        // Merge with existing translations
        const updatedTranslations = {
            ...currentTranslations,
            ...translationResults
        };
        // Update supported languages
        const supportedLanguages = consentPurpose.supportedLanguages || [
            "en"
        ];
        targetLanguages.forEach((lang)=>{
            if (!supportedLanguages.includes(lang)) {
                supportedLanguages.push(lang);
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.update({
            where: {
                id: consentPurposeId
            },
            data: {
                translations: updatedTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Consent Purpose: Completed", {
            consentPurposeId,
            successCount: Object.keys(translationResults).length,
            errorCount: errors.length
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/consent-purposes");
        return {
            success: true,
            translations: updatedTranslations,
            translatedCount: Object.keys(translationResults).length,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Consent Purpose: Failed", {
            error,
            consentPurposeId,
            targetLanguages
        });
        return {
            error: "Failed to auto-translate consent purpose",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function autoTranslateProcessingPurpose(processingPurposeId, targetLanguages, sourceLanguage = "en", englishData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Processing Purpose: Starting", {
            processingPurposeId,
            targetLanguages,
            sourceLanguage,
            userId: session.user.id,
            hasEnglishData: !!englishData
        });
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        const processingPurpose = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.findUnique({
            where: {
                id: processingPurposeId
            },
            select: {
                id: true,
                name: true,
                description: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!processingPurpose) {
            return {
                error: "Processing purpose not found"
            };
        }
        const currentTranslations = processingPurpose.translations || {};
        // Use provided englishData if available (for newly added/edited fields), otherwise fall back to DB
        const sourceTranslation = englishData || currentTranslations[sourceLanguage] || {
            name: processingPurpose.name,
            description: processingPurpose.description || null
        };
        if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
            return {
                error: `Source translation (${sourceLanguage}) has no name`
            };
        }
        const translationResults = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                if (targetLang === sourceLanguage) {
                    translationResults[targetLang] = sourceTranslation;
                    continue;
                }
                const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])({
                    name: sourceTranslation.name,
                    description: sourceTranslation.description || null
                }, targetLang, sourceLanguage);
                translationResults[targetLang] = translated;
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Processing Purpose: Language failed", {
                    error,
                    targetLang
                });
                errors.push(errorMsg);
            }
        }
        if (Object.keys(translationResults).length === 0) {
            return {
                error: "Failed to translate to any language",
                details: errors.join(", ")
            };
        }
        // Merge with existing translations
        const updatedTranslations = {
            ...currentTranslations,
            ...translationResults
        };
        // Update supported languages
        const supportedLanguages = processingPurpose.supportedLanguages || [
            "en"
        ];
        targetLanguages.forEach((lang)=>{
            if (!supportedLanguages.includes(lang)) {
                supportedLanguages.push(lang);
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.update({
            where: {
                id: processingPurposeId
            },
            data: {
                translations: updatedTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Processing Purpose: Completed", {
            processingPurposeId,
            successCount: Object.keys(translationResults).length,
            errorCount: errors.length
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/consent-purposes");
        return {
            success: true,
            translations: updatedTranslations,
            translatedCount: Object.keys(translationResults).length,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Processing Purpose: Failed", {
            error,
            processingPurposeId,
            targetLanguages
        });
        return {
            error: "Failed to auto-translate processing purpose",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    autoTranslateUserAttribute,
    autoTranslateUserAttributeFields,
    translateTextToLanguages,
    autoTranslateBusinessProcess,
    autoTranslateConsentPurpose,
    autoTranslateProcessingPurpose
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateUserAttribute, "706a268d80ff66c982e5e3f3b6e8f46051ad64ac85", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateUserAttributeFields, "78fc1f3d5cd0bd1dc8b98fe79b082bb3dee67c011b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(translateTextToLanguages, "704ce32ef850c2bb4b6f4d46e757bc9db118d35e04", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateBusinessProcess, "78fbfbd66a197b4f61ba4aa740092cd88ebe12c695", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateConsentPurpose, "7817f412d199e81c81597545fc9f54d9c77bdb0d92", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateProcessingPurpose, "786fd342078d6b7afd66dc76df99e14c9e35cb1365", null);
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/business-processes/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/business-units.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/business-processes.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/actions/auto-translate.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/business-units.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/business-processes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auto-translate.ts [app-rsc] (ecmascript)");
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
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/business-processes/[id]/edit/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/business-units.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/business-processes.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/actions/auto-translate.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "004cc68e0992e3703fd8281888792623275653144c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcesses"],
    "005d2c95fdb56466ca5505611cf672b3dd1bb5a03e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessUnits"],
    "0060c229d5c44aa39a52b0da063b4e763444cd1280",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "007f61f27ac40434952348ee6fcb9461d97e028d9a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedConsentPurposes"],
    "00abbb200346583c692e48cbcc5379d863e1e9bc43",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessData"],
    "4069a7fa3896cc2660a242629adc6a14e1d992203d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessById"],
    "407fb42ef5cd2c0329031b4fe4557520a2be064409",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessUnitById"],
    "40b1b85e0c514b2f8ee7f2130f5243b52de51d3efa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextVersionsForBPCodes"],
    "40c1ee9d7309051fa093aee9bb065fa5426c7388ad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHighestVersionForCode"],
    "40f0ee935767046fb8670d43bb75d76a3b01e933be",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveOrPublishBusinessProcessWithVersioning"],
    "40f172b44681dcf2f6e26caa7f3c3767cfc3d2950d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessWithFullData"],
    "608bf381e2cfea0baba3faaf0e1eaa120ac12ffcab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBusinessUnitCodeExists"],
    "704ce32ef850c2bb4b6f4d46e757bc9db118d35e04",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateTextToLanguages"],
    "78fbfbd66a197b4f61ba4aa740092cd88ebe12c695",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["autoTranslateBusinessProcess"],
    "7f2bb533b594647bdbcad1fd7903248e815caf0c93",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBusinessUnit"],
    "7f44ed65dcc21dfffc1845247fd786088910149c3c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBusinessUnit"],
    "7f7bb6a614de30e742aa9ceb488250395b24259c7b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBusinessUnit"],
    "7fe3369815b927904be81a9b69e05d585971c9ab8b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBusinessProcess"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cms/data-fiduciary/business-processes/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/business-units.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/business-processes.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/actions/auto-translate.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/business-units.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/business-processes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auto-translate.ts [app-rsc] (ecmascript)");
}),
"[project]/app/cms/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/step-progress.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "StepProgress",
    ()=>StepProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StepProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StepProgress() from the server but StepProgress is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/step-progress.tsx <module evaluation>", "StepProgress");
}),
"[project]/components/step-progress.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "StepProgress",
    ()=>StepProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StepProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StepProgress() from the server but StepProgress is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/step-progress.tsx", "StepProgress");
}),
"[project]/components/step-progress.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$step$2d$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/step-progress.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$step$2d$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/step-progress.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$step$2d$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/contexts/business-process-context.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BusinessProcessContext",
    ()=>BusinessProcessContext,
    "BusinessProcessProvider",
    ()=>BusinessProcessProvider,
    "useBusinessProcessContext",
    ()=>useBusinessProcessContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BusinessProcessContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BusinessProcessContext() from the server but BusinessProcessContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/contexts/business-process-context.tsx <module evaluation>", "BusinessProcessContext");
const BusinessProcessProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BusinessProcessProvider() from the server but BusinessProcessProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/contexts/business-process-context.tsx <module evaluation>", "BusinessProcessProvider");
const useBusinessProcessContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useBusinessProcessContext() from the server but useBusinessProcessContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/contexts/business-process-context.tsx <module evaluation>", "useBusinessProcessContext");
}),
"[project]/contexts/business-process-context.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BusinessProcessContext",
    ()=>BusinessProcessContext,
    "BusinessProcessProvider",
    ()=>BusinessProcessProvider,
    "useBusinessProcessContext",
    ()=>useBusinessProcessContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BusinessProcessContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BusinessProcessContext() from the server but BusinessProcessContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/contexts/business-process-context.tsx", "BusinessProcessContext");
const BusinessProcessProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BusinessProcessProvider() from the server but BusinessProcessProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/contexts/business-process-context.tsx", "BusinessProcessProvider");
const useBusinessProcessContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useBusinessProcessContext() from the server but useBusinessProcessContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/contexts/business-process-context.tsx", "useBusinessProcessContext");
}),
"[project]/contexts/business-process-context.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/contexts/business-process-context.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/contexts/business-process-context.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/baseline-initializer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BaselineInitializer",
    ()=>BaselineInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BaselineInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BaselineInitializer() from the server but BaselineInitializer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/baseline-initializer.tsx <module evaluation>", "BaselineInitializer");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/baseline-initializer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BaselineInitializer",
    ()=>BaselineInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BaselineInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BaselineInitializer() from the server but BaselineInitializer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/baseline-initializer.tsx", "BaselineInitializer");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/baseline-initializer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$baseline$2d$initializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/baseline-initializer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$baseline$2d$initializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/baseline-initializer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$baseline$2d$initializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step1Form",
    ()=>Step1Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step1Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step1Form() from the server but Step1Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx <module evaluation>", "Step1Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step1Form",
    ()=>Step1Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step1Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step1Form() from the server but Step1Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx", "Step1Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step1$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step1$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step1$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step2Form",
    ()=>Step2Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step2Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step2Form() from the server but Step2Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx <module evaluation>", "Step2Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step2Form",
    ()=>Step2Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step2Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step2Form() from the server but Step2Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx", "Step2Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step2$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step2$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step2$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step3Form",
    ()=>Step3Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step3Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step3Form() from the server but Step3Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx <module evaluation>", "Step3Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step3Form",
    ()=>Step3Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step3Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step3Form() from the server but Step3Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx", "Step3Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step3$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step3$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step3$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step4Form",
    ()=>Step4Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step4Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step4Form() from the server but Step4Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx <module evaluation>", "Step4Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step4Form",
    ()=>Step4Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step4Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step4Form() from the server but Step4Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx", "Step4Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step4$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step4$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step4$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step6Form",
    ()=>Step6Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step6Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step6Form() from the server but Step6Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx <module evaluation>", "Step6Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Step6Form",
    ()=>Step6Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Step6Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Step6Form() from the server but Step6Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx", "Step6Form");
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step6$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step6$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step6$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "BusinessProcessForm",
    ()=>BusinessProcessForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$step$2d$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/step-progress.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/business-process-context.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/business-units.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/business-processes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$baseline$2d$initializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/baseline-initializer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step1$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step2$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step3$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step4$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step6$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx [app-rsc] (ecmascript)");
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
const steps = [
    {
        number: 1,
        title: "General Settings",
        description: "Basic information"
    },
    {
        number: 2,
        title: "Configure Consent",
        description: "Consent configuration"
    },
    {
        number: 3,
        title: "Choose Redirectional URL",
        description: "End User License Agreement"
    },
    {
        number: 4,
        title: "Translate",
        description: "Language translations"
    },
    {
        number: 5,
        title: "Preview & Publish",
        description: "Review and publish"
    }
];
async function BusinessProcessFormContent({ searchParams, mode }) {
    const resolvedSearchParams = await searchParams;
    const step = parseInt(resolvedSearchParams.step || "1");
    const businessProcessId = resolvedSearchParams.id;
    const isEdit = mode === "edit";
    // Fetch the necessary data for business processes
    const [businessUnits, businessProcessData, existingBusinessProcess] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$units$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessUnits"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessData"])(),
        businessProcessId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$business$2d$processes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessProcessById"])(parseInt(businessProcessId)) : Promise.resolve(null)
    ]);
    const data = {
        businessProcess: existingBusinessProcess,
        businessUnits,
        consentPurposes: businessProcessData.consentPurposes,
        dataProcessors: businessProcessData.dataProcessors,
        userAttributes: businessProcessData.userAttributes
    };
    // Render the appropriate step component
    const renderStepComponent = ()=>{
        const commonProps = {
            data,
            isEdit,
            businessProcessId
        };
        switch(step){
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step1$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step1Form"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                    lineNumber: 89,
                    columnNumber: 16
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step2$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step2Form"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                    lineNumber: 91,
                    columnNumber: 16
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step3$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step3Form"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                    lineNumber: 93,
                    columnNumber: 16
                }, this);
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step4$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step4Form"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                    lineNumber: 95,
                    columnNumber: 16
                }, this);
            case 5:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step6$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step6Form"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                    lineNumber: 97,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$step1$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step1Form"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                    lineNumber: 99,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BusinessProcessProvider"], {
        initialData: existingBusinessProcess,
        userAttributes: data.userAttributes,
        children: [
            isEdit && existingBusinessProcess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$baseline$2d$initializer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaselineInitializer"], {
                data: data,
                isEdit: isEdit,
                businessProcessId: businessProcessId
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "-mx-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$step$2d$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StepProgress"], {
                    currentStep: step,
                    totalSteps: 5,
                    steps: steps
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-x flex-1 w-full",
                children: renderStepComponent()
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
function BusinessProcessForm({ searchParams, mode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto h-full flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-96",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                            lineNumber: 138,
                            columnNumber: 15
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-muted-foreground",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                            lineNumber: 139,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                    lineNumber: 137,
                    columnNumber: 13
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                lineNumber: 136,
                columnNumber: 11
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BusinessProcessFormContent, {
                searchParams: searchParams,
                mode: mode
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/business-processes/[id]/edit/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>EditBusinessProcessPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$business$2d$process$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/business-process-form.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function EditBusinessProcessPage({ searchParams, params }) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].BUSINESS_PROCESS, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE);
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/cms/forbidden");
    }
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    // Merge the ID from params into searchParams
    const mergedSearchParams = Promise.resolve({
        ...resolvedSearchParams,
        id: resolvedParams.id
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col pt-4 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$business$2d$process$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BusinessProcessForm"], {
            searchParams: mergedSearchParams,
            mode: "edit"
        }, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/business-processes/[id]/edit/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/[id]/edit/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/business-processes/[id]/edit/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/[id]/edit/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b05effd._.js.map