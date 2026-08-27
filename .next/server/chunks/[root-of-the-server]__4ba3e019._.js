module.exports = [
"[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-diff.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/consentsJSONHasher.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-route] (ecmascript)");
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
                artifact_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateHash"])(creatorData),
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
        const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateHash"])(consents);
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
"[project]/lib/noticeUpdates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)"); // 1. Prevents client-side usage
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
"[project]/lib/kmsService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-route] (ecmascript)");
;
class KMSService {
    /**
   * Fetches the private key from kms service (or env vars) for encryption
   */ static async getSecretKey() {
        try {
            // In production, this might call an external KMS API or Vault
            // For Node/Prisma apps, this usually lives in secure ENV vars
            const privateKey = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Config"].get('RSA_PRIVATE_KEY') || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Config"].mock.rsaPrivateKey;
            if (!privateKey) {
                throw new Error("RSA Private Key not found configuration");
            }
            return {
                private_key: privateKey,
                // Public key is often not needed for signing, strictly speaking, but included for parity
                public_key: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Config"].get('RSA_PUBLIC_KEY', '')
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
"[project]/lib/services/storage/adapters/local-storage.adapter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/services/storage/adapters/gcs-storage.adapter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-route] (ecmascript)");
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
            const { Storage } = await __turbopack_context__.A("[project]/node_modules/@google-cloud/storage/build/esm/src/index.js [app-route] (ecmascript, async loader)");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info("GCS Adapter: Upload started", {
                fileName: params.fileName,
                folder: params.folder,
                bufferLength: params.file?.length
            });
            if (!params.file || params.file.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: No file buffer provided or buffer is empty");
                throw new Error("No file buffer provided");
            }
            await this.ensureInitialized();
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Storage initialized successfully");
            let fileKey;
            if (params.doesNotRequireUniqueName) {
                fileKey = params.fileName;
            } else {
                fileKey = this.generateFileKey(params.fileName, params.folder);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Generated fileKey", {
                fileKey
            });
            const file = this.bucket.file(fileKey);
            // Upload with metadata
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Starting file.save()");
            await file.save(params.file, {
                metadata: {
                    contentType: params.mimeType,
                    metadata: {
                        originalName: params.fileName
                    }
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: File saved successfully");
            // Generate signed URL
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Generating signed URL");
            const [url] = await file.getSignedUrl({
                action: "read",
                expires: Date.now() + this.config.urlExpiry * 1000
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Signed URL generated successfully");
            const result = {
                fileKey,
                url,
                size: params.file.length,
                mimeType: params.mimeType
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info("GCS Adapter: Upload completed successfully", {
                fileKey,
                size: result.size
            });
            return result;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: Upload error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].debug("GCS Adapter: Generating download URL for", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: createSignedUrlForDownload error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: getUrl error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: delete error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: exists error", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].error("GCS Adapter: getMetadata error", {
                error
            });
            throw new Error("Failed to get file metadata from Google Cloud Storage");
        }
    }
}
}),
"[project]/lib/services/storage/storage-factory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$local$2d$storage$2e$adapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/adapters/local-storage.adapter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$gcs$2d$storage$2e$adapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/adapters/gcs-storage.adapter.ts [app-route] (ecmascript)");
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
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info("Storage adapter created", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info("GCS configuration detected");
            return "gcs";
        }
        if (this.hasS3Config()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info("S3 configuration detected (not yet implemented)");
        // return StorageProvider.S3; // Uncomment when S3 is implemented
        }
        // Default to local storage
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"].info("No cloud storage configured, using local storage");
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$local$2d$storage$2e$adapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]({
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$adapters$2f$gcs$2d$storage$2e$adapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GCSStorageAdapter"]({
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
"[project]/lib/signatureService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/uploadConsentArtifacts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$kmsService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/kmsService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$storage$2d$factory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/storage/storage-factory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$signatureService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/signatureService.ts [app-route] (ecmascript)");
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
            const keys = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$kmsService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KMSService"].getSecretKey();
            const privateKey = keys.private_key;
            // 2. Build Signatures (Sign payload + hashes)
            const signatureResult = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$signatureService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Signatures"].buildFinalDataWithSignatures(timeline_data_with_hashes, metadata.artifact_hash, metadata.db_hashes, privateKey);
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
            const storage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$storage$2f$storage$2d$factory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StorageFactory"].getInstance();
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
"[project]/lib/services/artifact-creation-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consentsJSONHasher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/consentsJSONHasher.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$noticeUpdates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/noticeUpdates.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadConsentArtifacts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/uploadConsentArtifacts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [app-route] (ecmascript)");
;
;
;
;
;
;
async function sendForArtifactCreation(dataPrincipalId, referenceId, businessProcessCode, operation = "created") {
    const artifactPayload = await processAndLogConsentData(dataPrincipalId, referenceId, businessProcessCode);
    // Trigger CONSENT_ARTIFACTS_CREATED_OR_UPDATED webhook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].CONSENT_ARTIFACTS_CREATED_OR_UPDATED, {
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
        const consentData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchConsentHistoryFromDB"])(dataPrincipalId, referenceId, businessProcessCode);
        // B. Hash Data (using the logic from Step 2)
        const hashResult = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consentsJSONHasher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConsentsJSONHasher"].buildConsentRecordsWithHash(consentData);
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
        const finalMessage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$noticeUpdates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoticeUpdates"].buildMessageBrokerEvent(consentData, hashResult.creator_data, messagePayload, {
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadConsentArtifacts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UploadConsentArtifacts"].handleEvent(finalMessage);
        return finalMessage;
    } catch (error) {
        console.error("Error in processing consent data:", error);
        throw error;
    }
}
}),
"[project]/lib/services/notices-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-action-center/consent-diff.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/consents-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/webhook-service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$artifact$2d$creation$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/artifact-creation-service.ts [app-route] (ecmascript)");
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
        const notices = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.findMany({
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
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
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
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
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
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
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
        const businessProcesses = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].businessProcess.findMany({
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
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.delete({
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
        const accessToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateAccessToken"])(attrs, expiresAt);
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
        const updatedNotice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.update({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$webhook$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["triggerWebhookEvent"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebhookEventType"].NOTICE_SUBMITTED, {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.update({
                where: {
                    publicId: noticePublicId
                },
                data: {
                    status: "completion_failed",
                    statusReason: error instanceof Error ? error.message : "Unknown error"
                }
            }).catch(console.error);
        });
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.update({
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
        const notice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.findUnique({
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
        const consentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$consents$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createConsents"])(noticePublicId, selections, language);
        if (!consentResult.success) {
            throw new Error(`Failed to create consents: ${consentResult}`);
        }
        // Mark notice as completed with accepted consent status
        const updatedNotice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.update({
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
        const bp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                id: updatedNotice.businessProcessId
            }
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$artifact$2d$creation$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendForArtifactCreation"])(updatedNotice.dataPrincipalId, updatedNotice.referenceId, bp.code);
    } catch (error) {
        console.error("Error completing notice:", error);
        throw error; // Re-throw to be caught by submitNotice
    }
}
async function expireNotices() {
    try {
        const now = new Date();
        // Find all notices that are pending and have expired
        const expiredNotices = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.findMany({
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
        const updateResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].notice.updateMany({
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
    const activeConsents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
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
            const oldData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["regroupBpData"])(oldBp);
            const newData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["regroupBpData"])(latestBp);
            // 6. Generate diff
            const changes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$action$2d$center$2f$consent$2d$diff$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateConsentDiff"])(oldData, newData);
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
"[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4ba3e019._.js.map