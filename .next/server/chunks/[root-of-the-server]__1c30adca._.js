module.exports = [
"[project]/lib/utils/logger.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/node-cron [external] (node-cron, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("node-cron");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-diff.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/utils.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canonicalize/lib/canonicalize.js [instrumentation] (ecmascript)");
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
async function generateAccessToken(attrs, expiresAt) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    // Calculate expiry in seconds from now
    const expiryInSeconds = Math.floor(expiresAt.getTime() / 1000);
    const jwt = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SignJWT"](attrs).setProtectedHeader({
        alg: "HS256"
    }).setExpirationTime(expiryInSeconds).setIssuedAt().sign(secret);
    return jwt;
}
async function verifyAccessToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        return payload;
    } catch (error) {
        console.error("Error verifying access token:", error);
        return null;
    }
}
async function verifyNoticeToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
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
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
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
    const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"])(data);
    if (!encoded) return "";
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(encoded).digest("hex");
}
}),
"[project]/lib/constants/services.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/constants/notice-metadata.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/services/dprm-service.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [instrumentation] (ecmascript)");
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
        const accessToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["generateAccessToken"])(attrs, expiresAt);
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["getLatestActiveConsents"])(dataPrincipalId);
    } catch (error) {
        console.error("Error fetching latest active consents for DPRM:", error);
        throw new Error("Failed to fetch latest active consents");
    }
}
}),
"[project]/lib/services/webhook-service.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].webhookLog.create({
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
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Failed to create webhook log", {
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
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("Firing webhook", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Webhook delivered successfully", {
                endpointId: endpoint.publicId,
                eventId,
                status: response.status,
                responseTime
            });
            // Update log with success (fire-and-forget)
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].webhookLog.updateMany({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].warn("Webhook delivery failed with non-2xx response", {
                endpointId: endpoint.publicId,
                eventId,
                status: response.status,
                statusText: response.statusText,
                responseTime
            });
            // Update log with failure (fire-and-forget)
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].webhookLog.updateMany({
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
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Webhook delivery timeout", {
                    endpointId: endpoint.publicId,
                    eventId,
                    url: endpoint.endpointUrl,
                    responseTime
                });
            } else {
                errorMsg = error.message;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Webhook delivery error", {
                    endpointId: endpoint.publicId,
                    eventId,
                    error: error.message,
                    responseTime
                });
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Webhook delivery unknown error", {
                endpointId: endpoint.publicId,
                eventId,
                responseTime
            });
        }
        // Update log with error (fire-and-forget)
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].webhookLog.updateMany({
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
        const webhooks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].webhook.findMany({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("No active webhooks found for event type", {
                eventType
            });
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Triggering webhooks", {
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
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Unexpected error in fireWebhook", {
                    endpointId: endpoint.publicId,
                    error: error instanceof Error ? error.message : "Unknown error"
                });
            });
        }
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Error triggering webhook events", {
            eventType,
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
}
function generateSigningSecret() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])().replace(/-/g, "") + (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])().replace(/-/g, "");
}
}),
"[project]/lib/services/consents-service.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/services.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$notice$2d$metadata$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/notice-metadata.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/dprm-service.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [instrumentation] (ecmascript)");
;
;
;
;
;
;
async function createConsents(noticePublicId, selections, language = "en") {
    try {
        // Get the notice with full business process data
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
            const majorMetadata = notice.metadata.find((m)=>m.key === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$notice$2d$metadata$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOTICE_METADATA_KEYS"].MAJOR_DATA_PRINCIPAL_ID);
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
        const consentDurationsMap = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].businessProcessToConsentPurpose.findMany({
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
            const createdConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.createMany({
                data: consentData
            });
            // Get the created consent records with full details for webhook
            const createdConsentRecords = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consentAuditTrail.createMany({
                data: auditLogs
            });
            // WEBHOOK TRIGGER
            const dprmLink = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$dprm$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["generateDprmLink"])(notice.dataPrincipalId);
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
                const { generateNoticeLinkFromObject } = await __turbopack_context__.A("[project]/lib/services/notices-service.ts [instrumentation] (ecmascript, async loader)");
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_CREATED, {
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
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
        const consent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findUnique({
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.update({
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
        const topAttributesResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].$queryRaw`
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
        const processingPurposes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].processingPurpose.findMany({
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
    const BATCH_SIZE = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["CONSENT_BATCH_CONFIG"].BATCH_SIZE;
    const MAX_TOTAL_RECORDS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$services$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["CONSENT_BATCH_CONFIG"].MAX_TOTAL_RECORDS;
    let totalExpiredCount = 0;
    const allExpiredConsents = [];
    try {
        const now = new Date();
        let processedCount = 0;
        // Process in batches until no more expired consents or max limit reached
        while(processedCount < MAX_TOTAL_RECORDS){
            try {
                // Use a transaction with timeout and FOR UPDATE to lock rows
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
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
                const consentsWithDetails = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_EXPIRED, {
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
        const activeConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
    const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
    const currentBp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
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
"[project]/lib/consentsJSONHasher.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [instrumentation] (ecmascript)");
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
                artifact_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["generateHash"])(creatorData),
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
        const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["generateHash"])(consents);
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
"[project]/lib/noticeUpdates.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/config.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [instrumentation] (ecmascript)"); // 1. Prevents client-side usage
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
"[project]/lib/kmsService.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [instrumentation] (ecmascript)");
;
class KMSService {
    /**
   * Fetches the private key from kms service (or env vars) for encryption
   */ static async getSecretKey() {
        try {
            // In production, this might call an external KMS API or Vault
            // For Node/Prisma apps, this usually lives in secure ENV vars
            const privateKey = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["Config"].get('RSA_PRIVATE_KEY') || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["Config"].mock.rsaPrivateKey;
            if (!privateKey) {
                throw new Error("RSA Private Key not found configuration");
            }
            return {
                private_key: privateKey,
                // Public key is often not needed for signing, strictly speaking, but included for parity
                public_key: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["Config"].get('RSA_PUBLIC_KEY', '')
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
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/lib/services/storage/adapters/local-storage.adapter.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/services/storage/adapters/gcs-storage.adapter.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
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
            const { Storage } = await __turbopack_context__.A("[project]/node_modules/@google-cloud/storage/build/esm/src/index.js [instrumentation] (ecmascript, async loader)");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("GCS Adapter: Upload started", {
                fileName: params.fileName,
                folder: params.folder,
                bufferLength: params.file?.length
            });
            if (!params.file || params.file.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: No file buffer provided or buffer is empty");
                throw new Error("No file buffer provided");
            }
            await this.ensureInitialized();
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Storage initialized successfully");
            let fileKey;
            if (params.doesNotRequireUniqueName) {
                fileKey = params.fileName;
            } else {
                fileKey = this.generateFileKey(params.fileName, params.folder);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Generated fileKey", {
                fileKey
            });
            const file = this.bucket.file(fileKey);
            // Upload with metadata
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Starting file.save()");
            await file.save(params.file, {
                metadata: {
                    contentType: params.mimeType,
                    metadata: {
                        originalName: params.fileName
                    }
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: File saved successfully");
            // Generate signed URL
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Generating signed URL");
            const [url] = await file.getSignedUrl({
                action: "read",
                expires: Date.now() + this.config.urlExpiry * 1000
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Signed URL generated successfully");
            const result = {
                fileKey,
                url,
                size: params.file.length,
                mimeType: params.mimeType
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("GCS Adapter: Upload completed successfully", {
                fileKey,
                size: result.size
            });
            return result;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: Upload error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Generating download URL for", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: createSignedUrlForDownload error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: getUrl error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: delete error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: exists error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: getMetadata error", {
                error
            });
            throw new Error("Failed to get file metadata from Google Cloud Storage");
        }
    }
}
}),
"[project]/lib/services/storage/storage-factory.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$local$2d$storage$2e$adapter$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/adapters/local-storage.adapter.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$gcs$2d$storage$2e$adapter$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/adapters/gcs-storage.adapter.ts [instrumentation] (ecmascript)");
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
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Storage adapter created", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("GCS configuration detected");
            return "gcs";
        }
        if (this.hasS3Config()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("S3 configuration detected (not yet implemented)");
        // return StorageProvider.S3; // Uncomment when S3 is implemented
        }
        // Default to local storage
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("No cloud storage configured, using local storage");
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$local$2d$storage$2e$adapter$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]({
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$gcs$2d$storage$2e$adapter$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["GCSStorageAdapter"]({
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
"[project]/lib/signatureService.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/uploadConsentArtifacts.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$kmsService$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/kmsService.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$storage$2d$factory$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/storage-factory.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$signatureService$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/signatureService.ts [instrumentation] (ecmascript)");
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
            const keys = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$kmsService$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["KMSService"].getSecretKey();
            const privateKey = keys.private_key;
            // 2. Build Signatures (Sign payload + hashes)
            const signatureResult = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$signatureService$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["Signatures"].buildFinalDataWithSignatures(timeline_data_with_hashes, metadata.artifact_hash, metadata.db_hashes, privateKey);
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
            const storage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$storage$2d$factory$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["StorageFactory"].getInstance();
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
"[project]/lib/services/artifact-creation-service.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consentsJSONHasher$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/consentsJSONHasher.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$noticeUpdates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/noticeUpdates.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadConsentArtifacts$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/uploadConsentArtifacts.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [instrumentation] (ecmascript)");
;
;
;
;
;
;
async function sendForArtifactCreation(dataPrincipalId, referenceId, businessProcessCode, operation = "created") {
    const artifactPayload = await processAndLogConsentData(dataPrincipalId, referenceId, businessProcessCode);
    // Trigger CONSENT_ARTIFACTS_CREATED_OR_UPDATED webhook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_ARTIFACTS_CREATED_OR_UPDATED, {
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
        const consentData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["fetchConsentHistoryFromDB"])(dataPrincipalId, referenceId, businessProcessCode);
        // B. Hash Data (using the logic from Step 2)
        const hashResult = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consentsJSONHasher$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["ConsentsJSONHasher"].buildConsentRecordsWithHash(consentData);
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
        const finalMessage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$noticeUpdates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoticeUpdates"].buildMessageBrokerEvent(consentData, hashResult.creator_data, messagePayload, {
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadConsentArtifacts$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["UploadConsentArtifacts"].handleEvent(finalMessage);
        return finalMessage;
    } catch (error) {
        console.error("Error in processing consent data:", error);
        throw error;
    }
}
}),
"[project]/lib/services/notices-service.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-diff.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$artifact$2d$creation$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/artifact-creation-service.ts [instrumentation] (ecmascript)");
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
        const notices = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.findMany({
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
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
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
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
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
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
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
        const businessProcesses = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].businessProcess.findMany({
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
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.delete({
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
        const accessToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["generateAccessToken"])(attrs, expiresAt);
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
        const updatedNotice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.update({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].NOTICE_SUBMITTED, {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.update({
                where: {
                    publicId: noticePublicId
                },
                data: {
                    status: "completion_failed",
                    statusReason: error instanceof Error ? error.message : "Unknown error"
                }
            }).catch(console.error);
        });
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.update({
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
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
        const consentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["createConsents"])(noticePublicId, selections, language);
        if (!consentResult.success) {
            throw new Error(`Failed to create consents: ${consentResult}`);
        }
        // Mark notice as completed with accepted consent status
        const updatedNotice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.update({
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
        const bp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                id: updatedNotice.businessProcessId
            }
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$artifact$2d$creation$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["sendForArtifactCreation"])(updatedNotice.dataPrincipalId, updatedNotice.referenceId, bp.code);
    } catch (error) {
        console.error("Error completing notice:", error);
        throw error; // Re-throw to be caught by submitNotice
    }
}
async function expireNotices() {
    try {
        const now = new Date();
        // Find all notices that are pending and have expired
        const expiredNotices = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.findMany({
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
        const updateResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.updateMany({
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
    const activeConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
            const oldData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["regroupBpData"])(oldBp);
            const newData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["regroupBpData"])(latestBp);
            // 6. Generate diff
            const changes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["generateConsentDiff"])(oldData, newData);
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
"[project]/lib/cron/notice-expiry-cron.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
    "getNoticeExpiryCronStatus",
    ()=>getNoticeExpiryCronStatus,
    "startNoticeExpiryCron",
    ()=>startNoticeExpiryCron,
    "stopNoticeExpiryCron",
    ()=>stopNoticeExpiryCron
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$notices$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/notices-service.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
let cronJob = null;
function startNoticeExpiryCron() {
    // Stop existing cron if running
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
    }
    // Schedule cron to run every minute
    cronJob = __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__["schedule"]("* * * * *", async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$notices$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["expireNotices"])();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Error in notice expiry cron job", {
                error: error.message,
                stack: error.stack
            });
        }
    }, {
        timezone: "UTC"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Notice expiry cron job started - running every minute");
    return cronJob;
}
function stopNoticeExpiryCron() {
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
        cronJob = null;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Notice expiry cron job stopped");
    }
}
function getNoticeExpiryCronStatus() {
    return {
        isRunning: cronJob !== null
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/cron/consent-expiry-cron.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
    "getConsentExpiryCronStatus",
    ()=>getConsentExpiryCronStatus,
    "startConsentExpiryCron",
    ()=>startConsentExpiryCron,
    "stopConsentExpiryCron",
    ()=>stopConsentExpiryCron
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let cronJob = null;
function startConsentExpiryCron() {
    // Stop existing cron if running
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
    }
    // Schedule cron to run every minute
    cronJob = __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__["schedule"]("* * * * *", async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["expireConsents"])();
        } catch (error) {
            console.error("Error in consent expiry cron job:", error);
        }
    }, {
        timezone: "UTC"
    });
    return cronJob;
}
function stopConsentExpiryCron() {
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
        cronJob = null;
    }
}
function getConsentExpiryCronStatus() {
    return {
        isRunning: cronJob !== null
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/consent-notification-service.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
    "notifyExpiringConsents",
    ()=>notifyExpiringConsents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [instrumentation] (ecmascript)");
;
async function notifyExpiringConsents() {
    // Calculate the date range for consents expiring in exactly 1 day
    const now = new Date();
    const targetDay = new Date(now);
    targetDay.setDate(targetDay.getDate() + Number(process.env.NOTIFY_EXPIRY_DAYS_AHEAD ?? 1));
    // Start of tomorrow (midnight)
    const startOfTomorrow = new Date(targetDay);
    startOfTomorrow.setHours(0, 0, 0, 0);
    // End of tomorrow (23:59:59)
    const endOfTomorrow = new Date(targetDay);
    endOfTomorrow.setHours(23, 59, 59, 999);
    // Find consents expiring tomorrow that haven't expired yet
    const expiringConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findMany({
        where: {
            expiresAt: {
                gte: startOfTomorrow,
                lte: endOfTomorrow
            },
            isExpired: false,
            status: "accepted"
        },
        select: {
            publicId: true,
            businessProcessId: true,
            expiresAt: true,
            dataPrincipalId: true
        }
    });
    if (expiringConsents.length === 0) {
        return {
            notifiedCount: 0,
            skippedCount: 0
        };
    }
    // Get existing notifications to avoid duplicates
    const consentPublicIds = expiringConsents.map((c)=>c.publicId);
    // Query for existing expiry notifications for these consents
    const existingNotifications = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].$queryRaw`
    SELECT metadata 
    FROM notifications 
    WHERE type = 'expiry' 
    AND metadata->>'consentPublicId' = ANY(${consentPublicIds})
  `;
    // Create a set of consent IDs that already have notifications
    const notifiedConsentIds = new Set(existingNotifications.map((n)=>n.metadata?.consentPublicId).filter(Boolean));
    // Create notifications for consents that don't have one yet
    const notificationsToCreate = expiringConsents.filter((consent)=>!notifiedConsentIds.has(consent.publicId)).map((consent)=>{
        return {
            dataPrincipalId: consent.dataPrincipalId,
            type: "expiry",
            seen: false,
            metadata: {
                consentPublicId: consent.publicId,
                businessProcessId: consent.businessProcessId,
                expiresAt: consent.expiresAt?.toISOString()
            }
        };
    });
    const skippedCount = expiringConsents.length - notificationsToCreate.length;
    if (notificationsToCreate.length > 0) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notification.createMany({
            data: notificationsToCreate,
            skipDuplicates: true
        });
        // Send email notifications
        try {
            const { emailService } = await __turbopack_context__.A("[project]/lib/services/email/email-service.ts [instrumentation] (ecmascript, async loader)");
            const { generateDprmLink } = await __turbopack_context__.A("[project]/lib/services/dprm-service.ts [instrumentation] (ecmascript, async loader)");
            // Group consents by data principal to send one email per principal
            const consentsByPrincipal = new Map();
            expiringConsents.filter((consent)=>!notifiedConsentIds.has(consent.publicId)).forEach((consent)=>{
                const existing = consentsByPrincipal.get(consent.dataPrincipalId) || [];
                existing.push(consent);
                consentsByPrincipal.set(consent.dataPrincipalId, existing);
            });
            for (const [principalId, consents] of consentsByPrincipal.entries()){
                try {
                    // Get business process details and principal info
                    const firstConsent = consents[0];
                    const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].businessProcess.findFirst({
                        where: {
                            publicId: firstConsent.businessProcessId
                        },
                        select: {
                            name: true
                        }
                    });
                    // Try to get email from the most recent notice for this principal
                    const recentNotice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].notice.findFirst({
                        where: {
                            dataPrincipalId: principalId
                        },
                        include: {
                            metadata: true
                        },
                        orderBy: {
                            createdAt: "desc"
                        }
                    });
                    let principalEmail;
                    let principalName = "User";
                    if (recentNotice?.metadata) {
                        const metadata = recentNotice.metadata.reduce((acc, item)=>{
                            acc[item.key] = item.value;
                            return acc;
                        }, {});
                        principalEmail = metadata.email || metadata.Email;
                        principalName = metadata.name || metadata.Name || "User";
                    }
                    if (principalEmail && businessProcess) {
                        const dprmLink = await generateDprmLink(principalId, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
                        ) + "/consent-action-center?type=update";
                        // Calculate days until expiry for the first consent
                        const firstExpiryDate = consents[0].expiresAt;
                        const daysUntilExpiry = firstExpiryDate ? Math.ceil((firstExpiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : 1;
                        // Format consents for template
                        const formattedConsents = consents.map((consent)=>({
                                consentPurposeName: consent.publicId,
                                expiryDate: consent.expiresAt?.toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                }) || "Unknown"
                            }));
                        emailService.sendTemplatedEmail({
                            templateName: "consent-expiring-reminder",
                            to: {
                                email: principalEmail,
                                name: principalName
                            },
                            variables: {
                                consents: formattedConsents,
                                businessProcessName: businessProcess.name,
                                dprmLink,
                                principalName,
                                daysUntilExpiry
                            }
                        });
                    }
                } catch (emailError) {
                    console.error(`Failed to send expiry email to ${principalId}:`, emailError);
                }
            }
        } catch (emailError) {
            console.error("Failed to send expiry notification emails:", emailError);
        }
    }
    return {
        notifiedCount: notificationsToCreate.length,
        skippedCount
    };
}
}),
"[project]/lib/cron/consent-expiry-notification-cron.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
    "getConsentExpiryNotificationCronStatus",
    ()=>getConsentExpiryNotificationCronStatus,
    "startConsentExpiryNotificationCron",
    ()=>startConsentExpiryNotificationCron,
    "stopConsentExpiryNotificationCron",
    ()=>stopConsentExpiryNotificationCron
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$notification$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consent-notification-service.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
let cronJob = null;
function startConsentExpiryNotificationCron() {
    // Stop existing cron if running
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
    }
    // Schedule cron to run every day at midnight (00:00 UTC)
    cronJob = __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__["schedule"]("* * * * *", async ()=>{
        const startTime = new Date();
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Starting consent expiry notification cron job");
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consent$2d$notification$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["notifyExpiringConsents"])();
            const duration = Date.now() - startTime.getTime();
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Consent expiry notification cron job completed", {
                duration,
                notifiedCount: result.notifiedCount,
                skippedCount: result.skippedCount
            });
        } catch (error) {
            const duration = Date.now() - startTime.getTime();
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Error in consent expiry notification cron job", {
                duration,
                error: error.message,
                stack: error.stack
            });
        // Don't re-throw - let cron continue running
        }
    }, {
        timezone: "UTC"
    });
    return cronJob;
}
function stopConsentExpiryNotificationCron() {
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
        cronJob = null;
    }
}
function getConsentExpiryNotificationCronStatus() {
    return {
        isRunning: cronJob !== null
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/cron/sla-breach-detector.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
    "detectAndEscalateSlaBreaches",
    ()=>detectAndEscalateSlaBreaches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
;
;
async function detectAndEscalateSlaBreaches() {
    const now = new Date();
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Starting SLA breach detection", {
        timestamp: now.toISOString()
    });
    try {
        // Find all SLA trackers that are:
        // 1. Not resolved (resolvedAt is null)
        // 2. Not already breached
        // 3. Past expected resolution time
        const breachedTrackers = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].slaTracker.findMany({
            where: {
                resolvedAt: null,
                isBreached: false,
                expectedResolutionAt: {
                    lt: now
                }
            },
            include: {
                grievance: {
                    include: {
                        businessProcess: {
                            select: {
                                name: true
                            }
                        },
                        assignedTo: {
                            select: {
                                id: true,
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("SLA breach detection scan complete", {
            breachedCount: breachedTrackers.length
        });
        if (breachedTrackers.length === 0) {
            return {
                success: true,
                processed: 0,
                message: "No SLA breaches detected"
            };
        }
        const results = {
            processed: 0,
            escalated: 0,
            errors: 0
        };
        // Process each breached SLA
        for (const tracker of breachedTrackers){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
                    // Mark SLA as breached
                    await tx.slaTracker.update({
                        where: {
                            id: tracker.id
                        },
                        data: {
                            isBreached: true,
                            breachedAt: now
                        }
                    });
                    // Create audit log for SLA breach
                    await tx.grievanceAuditLog.create({
                        data: {
                            grievanceId: tracker.grievanceId,
                            action: "SLA_BREACHED",
                            details: {
                                severity: tracker.severity,
                                expectedResolutionAt: tracker.expectedResolutionAt.toISOString(),
                                breachedAt: now.toISOString(),
                                assignedTo: tracker.grievance.assignedTo?.id || null,
                                assignedToName: tracker.grievance.assignedTo?.name || null
                            },
                            performedByUserId: null
                        }
                    });
                    results.processed++;
                    // Get escalation configuration
                    const slaConfig = await tx.slaConfiguration.findUnique({
                        where: {
                            severity: tracker.severity
                        }
                    });
                    // If escalation recipients are configured, create escalation
                    if (slaConfig && slaConfig.escalationUserIds.length > 0) {
                        // Mark as escalated
                        await tx.slaTracker.update({
                            where: {
                                id: tracker.id
                            },
                            data: {
                                escalatedAt: now
                            }
                        });
                        // Create escalation audit log
                        await tx.grievanceAuditLog.create({
                            data: {
                                grievanceId: tracker.grievanceId,
                                action: "SLA_ESCALATED",
                                details: {
                                    severity: tracker.severity,
                                    escalatedTo: slaConfig.escalationUserIds,
                                    breachedAt: now.toISOString(),
                                    businessProcess: tracker.grievance.businessProcess.name
                                },
                                performedByUserId: null
                            }
                        });
                        results.escalated++;
                        // Send escalation emails to configured users
                        try {
                            const { emailService } = await __turbopack_context__.A("[project]/lib/services/email/email-service.ts [instrumentation] (ecmascript, async loader)");
                            // Calculate time overdue
                            const breachDuration = now.getTime() - tracker.expectedResolutionAt.getTime();
                            const hoursOverdue = Math.floor(breachDuration / (1000 * 60 * 60));
                            const minutesOverdue = Math.floor(breachDuration % (1000 * 60 * 60) / (1000 * 60));
                            const timeOverdue = hoursOverdue > 0 ? `${hoursOverdue}h ${minutesOverdue}m` : `${minutesOverdue} minutes`;
                            // Fetch escalation recipient details
                            const escalationUsers = await tx.user.findMany({
                                where: {
                                    id: {
                                        in: slaConfig.escalationUserIds
                                    }
                                },
                                select: {
                                    id: true,
                                    name: true,
                                    email: true
                                }
                            });
                            console.error(escalationUsers);
                            // Link to admin page with grievance ID query parameter
                            const baseUrl = process.env.BASE_PATH;
                            const grievanceUrl = `${baseUrl}/data-fiduciary/grievances/admin?id=${tracker.grievanceId}`;
                            // Send email to each escalation recipient
                            for (const user of escalationUsers){
                                if (user.email) {
                                    emailService.sendTemplatedEmail({
                                        templateName: "sla-breach-escalation",
                                        to: {
                                            email: user.email,
                                            name: user.name || "Team Member"
                                        },
                                        variables: {
                                            grievanceId: tracker.grievance.publicId,
                                            grievanceSubject: tracker.grievance.subject || "Untitled Grievance",
                                            severity: tracker.severity,
                                            expectedResolutionDate: tracker.expectedResolutionAt.toLocaleString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            }),
                                            breachedAt: now.toLocaleString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            }),
                                            timeOverdue,
                                            assignedToName: tracker.grievance.assignedTo?.name || undefined,
                                            businessProcessName: tracker.grievance.businessProcess.name,
                                            grievanceUrl,
                                            recipientName: user.name || "Team Member"
                                        }
                                    }).catch((err)=>{
                                        console.error(`[SLA Cron] Failed to send escalation email to ${user.email}:`, err);
                                    });
                                }
                            }
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("SLA breach escalation emails sent", {
                                grievanceId: tracker.grievance.publicId,
                                recipientCount: escalationUsers.length,
                                severity: tracker.severity
                            });
                        } catch (emailError) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Failed to send SLA escalation emails", {
                                grievanceId: tracker.grievance.publicId,
                                error: emailError instanceof Error ? emailError.message : String(emailError)
                            });
                        }
                    }
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("SLA breach processed successfully", {
                    grievanceId: tracker.grievance.publicId,
                    severity: tracker.severity
                });
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Error processing SLA breach", {
                    grievanceId: tracker.grievance.publicId,
                    error: error instanceof Error ? error.message : String(error)
                });
                results.errors++;
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("SLA breach detection completed", {
            processed: results.processed,
            escalated: results.escalated,
            errors: results.errors
        });
        return {
            success: true,
            ...results
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Fatal error in SLA breach detection", {
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined
        });
        return {
            success: false,
            error: "Fatal error in SLA breach detection"
        };
    }
}
}),
"[project]/lib/cron/sla-breach-cron.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
    "startSlaBreachCron",
    ()=>startSlaBreachCron,
    "stopSlaBreachCron",
    ()=>stopSlaBreachCron
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$sla$2d$breach$2d$detector$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cron/sla-breach-detector.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
let cronJob = null;
function startSlaBreachCron() {
    // Stop existing cron if running
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
    }
    // Schedule cron to run every 30 minutes
    cronJob = __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__["schedule"]("*/30 * * * *", async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$sla$2d$breach$2d$detector$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["detectAndEscalateSlaBreaches"])();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Error in SLA breach cron job", {
                error: error.message,
                stack: error.stack
            });
        }
    }, {
        timezone: "UTC"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("SLA breach detection cron job started - running every 30 minutes");
    return cronJob;
}
function stopSlaBreachCron() {
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
        cronJob = null;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("SLA breach detection cron job stopped");
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/data-retention-action-service.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
    "processDataRetentionActions",
    ()=>processDataRetentionActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
;
async function processDataRetentionActions() {
    const now = new Date();
    const result = {
        processedCount: 0,
        triggeredPolicies: []
    };
    try {
        // Get all active data retention policy configurations
        const policyConfigurations = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].dataRetentionPolicyConfiguration.findMany({
            include: {
                dataRetentionPolicy: true,
                businessProcessRule: {
                    select: {
                        publicId: true,
                        retentionDuration: true,
                        businessProcess: {
                            select: {
                                publicId: true,
                                name: true,
                                code: true,
                                version: true
                            }
                        },
                        processingPurpose: {
                            select: {
                                publicId: true,
                                name: true
                            }
                        },
                        consentPurpose: {
                            select: {
                                publicId: true,
                                name: true,
                                code: true
                            }
                        }
                    }
                }
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Processing data retention policies", {
            policyCount: policyConfigurations.length
        });
        // Process each policy configuration
        for (const config of policyConfigurations){
            const { trigger, businessProcessRule, dataRetentionPolicy } = config;
            const retentionDuration = businessProcessRule.retentionDuration;
            if (!retentionDuration) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].warn("Skipping policy configuration - no retention duration", {
                    policyId: dataRetentionPolicy.id,
                    ruleId: businessProcessRule.publicId
                });
                continue;
            }
            // Calculate the retention cutoff date
            const retentionCutoffDate = new Date(now);
            retentionCutoffDate.setHours(retentionCutoffDate.getHours() - retentionDuration);
            // Build the where clause based on trigger type
            const whereClause = {
                businessProcessRuleId: businessProcessRule.publicId,
                updatedAt: {
                    lte: retentionCutoffDate
                },
                dataRetentionActionTriggeredAt: null
            };
            // Add trigger-specific conditions
            if (trigger === "revoked") {
                whereClause.status = "revoked";
            } else if (trigger === "expired") {
                whereClause.isExpired = true;
            } else if (trigger === "revoked_or_expired") {
                whereClause.OR = [
                    {
                        status: "revoked"
                    },
                    {
                        isExpired: true
                    }
                ];
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].warn("Unknown trigger type", {
                    trigger,
                    policyId: dataRetentionPolicy.id
                });
                continue;
            }
            // Find consents that meet the retention criteria
            const consentsToProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.findMany({
                where: whereClause,
                select: {
                    publicId: true,
                    dataPrincipalId: true,
                    referenceId: true,
                    status: true,
                    isExpired: true,
                    updatedAt: true,
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
                            code: true
                        }
                    },
                    processingPurpose: {
                        select: {
                            name: true
                        }
                    },
                    businessUnit: {
                        select: {
                            name: true,
                            code: true
                        }
                    }
                }
            });
            if (consentsToProcess.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].debug("No consents found for data retention policy", {
                    policyId: dataRetentionPolicy.id,
                    policyName: dataRetentionPolicy.name,
                    trigger
                });
                continue;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Found consents for data retention action", {
                policyId: dataRetentionPolicy.id,
                policyName: dataRetentionPolicy.name,
                consentCount: consentsToProcess.length,
                trigger
            });
            // Group consents by data principal and reference ID for webhook
            const consentsByPrincipal = new Map();
            consentsToProcess.forEach((consent)=>{
                const key = `${consent.dataPrincipalId}_${consent.referenceId}`;
                const existing = consentsByPrincipal.get(key) || [];
                existing.push(consent);
                consentsByPrincipal.set(key, existing);
            });
            // Trigger webhook for each data principal
            for (const [key, consents] of consentsByPrincipal.entries()){
                const firstConsent = consents[0];
                const consentIds = consents.map((c)=>c.publicId);
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].DATA_RETENTION_ACTION, {
                        policy_id: dataRetentionPolicy.publicId,
                        policy_name: dataRetentionPolicy.name,
                        policy_url: dataRetentionPolicy.policyUrl,
                        trigger_type: trigger,
                        retention_duration_hours: retentionDuration,
                        data_principal_id: firstConsent.dataPrincipalId,
                        reference_id: firstConsent.referenceId,
                        business_process_name: firstConsent.businessProcess.name,
                        business_process_code: firstConsent.businessProcess.code,
                        business_process_version: firstConsent.businessProcess.version,
                        business_unit_name: firstConsent.businessUnit.name,
                        business_unit_code: firstConsent.businessUnit.code,
                        consent_count: consents.length,
                        consents: consents.map((c)=>({
                                consent_id: c.publicId,
                                consent_purpose_name: c.consentPurpose.name,
                                consent_purpose_code: c.consentPurpose.code,
                                processing_purpose_name: c.processingPurpose.name,
                                status: c.status,
                                is_expired: c.isExpired,
                                updated_at: c.updatedAt.toISOString()
                            })),
                        triggered_at: now.toISOString()
                    });
                    // Mark these consents as having been processed for data retention
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["default"].consent.updateMany({
                        where: {
                            publicId: {
                                in: consentIds
                            }
                        },
                        data: {
                            dataRetentionActionTriggeredAt: now
                        }
                    });
                    result.processedCount += consents.length;
                } catch (webhookError) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Failed to trigger data retention webhook", {
                        policyId: dataRetentionPolicy.id,
                        dataPrincipalId: firstConsent.dataPrincipalId,
                        error: webhookError instanceof Error ? webhookError.message : "Unknown error"
                    });
                }
            }
            result.triggeredPolicies.push({
                policyId: dataRetentionPolicy.id,
                policyName: dataRetentionPolicy.name,
                consentCount: consentsToProcess.length,
                trigger
            });
        }
        return result;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Error processing data retention actions", {
            error: error instanceof Error ? error.message : "Unknown error",
            stack: error instanceof Error ? error.stack : undefined
        });
        throw error;
    }
}
}),
"[project]/lib/cron/data-retention-action-cron.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
    "getDataRetentionActionCronStatus",
    ()=>getDataRetentionActionCronStatus,
    "startDataRetentionActionCron",
    ()=>startDataRetentionActionCron,
    "stopDataRetentionActionCron",
    ()=>stopDataRetentionActionCron
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$data$2d$retention$2d$action$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/data-retention-action-service.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
let cronJob = null;
function startDataRetentionActionCron() {
    // Stop existing cron if running
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
    }
    // Schedule cron to run every day at 2:00 AM UTC
    cronJob = __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__["schedule"]("0 2 * * *", async ()=>{
        const startTime = new Date();
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Starting data retention action cron job");
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$data$2d$retention$2d$action$2d$service$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["processDataRetentionActions"])();
            const duration = Date.now() - startTime.getTime();
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Data retention action cron job completed", {
                duration,
                processedCount: result.processedCount,
                triggeredPolicies: result.triggeredPolicies.length,
                policies: result.triggeredPolicies
            });
        } catch (error) {
            const duration = Date.now() - startTime.getTime();
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Error in data retention action cron job", {
                duration,
                error: error.message,
                stack: error.stack
            });
        // Don't re-throw - let cron continue running
        }
    }, {
        timezone: "UTC"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Data retention action cron job started (runs daily at 2:00 AM UTC)");
    return cronJob;
}
function stopDataRetentionActionCron() {
    if (cronJob) {
        cronJob.stop();
        cronJob.destroy();
        cronJob = null;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Data retention action cron job stopped");
    }
}
function getDataRetentionActionCronStatus() {
    return {
        isRunning: cronJob !== null
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/cron/index.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ // Initialize cron jobs when the application starts
__turbopack_context__.s([
    "initializeCronJobs",
    ()=>initializeCronJobs,
    "shutdownCronJobs",
    ()=>shutdownCronJobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$notice$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cron/notice-expiry-cron.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cron/consent-expiry-cron.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$notification$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cron/consent-expiry-notification-cron.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$sla$2d$breach$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cron/sla-breach-cron.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$data$2d$retention$2d$action$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cron/data-retention-action-cron.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$notice$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$notification$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$sla$2d$breach$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$data$2d$retention$2d$action$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$notice$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$notification$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$sla$2d$breach$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$data$2d$retention$2d$action$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
let isInitialized = false;
function initializeCronJobs() {
    if (isInitialized) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Cron jobs already initialized, skipping...");
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Initializing cron jobs...");
    // Start the notice expiry cron job
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$notice$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["startNoticeExpiryCron"])();
    // Start the consent expiry cron job
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["startConsentExpiryCron"])();
    // Start the consent expiry notification cron job
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$notification$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["startConsentExpiryNotificationCron"])();
    // Start the SLA breach detection cron job
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$sla$2d$breach$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["startSlaBreachCron"])();
    // Start the data retention action cron job
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$data$2d$retention$2d$action$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["startDataRetentionActionCron"])();
    isInitialized = true;
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("All cron jobs initialized successfully");
}
function shutdownCronJobs() {
    if (!isInitialized) {
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Shutting down cron jobs...");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$notice$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["stopNoticeExpiryCron"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["stopConsentExpiryCron"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$consent$2d$expiry$2d$notification$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["stopConsentExpiryNotificationCron"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$sla$2d$breach$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["stopSlaBreachCron"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cron$2f$data$2d$retention$2d$action$2d$cron$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["stopDataRetentionActionCron"])();
    isInitialized = false;
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("All cron jobs shut down successfully");
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1c30adca._.js.map