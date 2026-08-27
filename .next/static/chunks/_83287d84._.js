(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/use-grievance-polling.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGrievancePolling",
    ()=>useGrievancePolling
]);
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useGrievancePolling(pollFn) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _s();
    const { enabled = true, interval = 5000, onUpdate } = options;
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isPollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const errorCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const poll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGrievancePolling.useCallback[poll]": async ()=>{
            if (isPollingRef.current) return; // Prevent concurrent polls
            isPollingRef.current = true;
            try {
                await pollFn();
                errorCountRef.current = 0; // Reset error count on success
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate();
            } catch (error) {
                console.error("Polling error:", error);
                errorCountRef.current++;
                // Exponential backoff on errors (max 60 seconds)
                const backoffInterval = Math.min(interval * Math.pow(2, errorCountRef.current), 60000);
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(poll, backoffInterval);
                }
            } finally{
                isPollingRef.current = false;
            }
        }
    }["useGrievancePolling.useCallback[poll]"], [
        pollFn,
        interval,
        onUpdate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGrievancePolling.useEffect": ()=>{
            if (!enabled) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                return;
            }
            // Start polling
            intervalRef.current = setInterval(poll, interval);
            // Visibility change detection - pause when tab is hidden
            const handleVisibilityChange = {
                "useGrievancePolling.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden) {
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                        }
                    } else {
                        // Resume polling when tab becomes visible
                        poll(); // Immediate poll on visibility
                        if (!intervalRef.current) {
                            intervalRef.current = setInterval(poll, interval);
                        }
                    }
                }
            }["useGrievancePolling.useEffect.handleVisibilityChange"];
            document.addEventListener("visibilitychange", handleVisibilityChange);
            // Initial poll
            poll();
            // Cleanup
            return ({
                "useGrievancePolling.useEffect": ()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                }
            })["useGrievancePolling.useEffect"];
        }
    }["useGrievancePolling.useEffect"], [
        enabled,
        interval,
        poll
    ]);
    // Return manual trigger function
    return {
        poll
    };
}
_s(useGrievancePolling, "TMroZ+zsqNFi92HjD1QLnDUPbps=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-infinite-messages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInfiniteMessages",
    ()=>useInfiniteMessages
]);
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$dc5a49__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:dc5a49 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$b34447__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:b34447 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useInfiniteMessages(param) {
    let { grievanceId, token, isPrincipal = false, enabled = true } = param;
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: isPrincipal ? [
            "principal-messages",
            grievanceId,
            token
        ] : [
            "agent-messages",
            grievanceId
        ],
        queryFn: {
            "useInfiniteMessages.useInfiniteQuery": async (param)=>{
                let { pageParam } = param;
                if (isPrincipal && token) {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$b34447__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPrincipalGrievanceMessages"])(token, grievanceId, pageParam, 10);
                    if (!result.success) {
                        throw new Error(result.error);
                    }
                    return result.data;
                } else {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$dc5a49__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getGrievanceMessages"])(grievanceId, pageParam, 20);
                    if (!result.success) {
                        throw new Error(result.error);
                    }
                    return result.data;
                }
            }
        }["useInfiniteMessages.useInfiniteQuery"],
        initialPageParam: undefined,
        getNextPageParam: {
            "useInfiniteMessages.useInfiniteQuery": (lastPage)=>{
                return lastPage.hasMore ? lastPage.nextCursor : undefined;
            }
        }["useInfiniteMessages.useInfiniteQuery"],
        enabled,
        refetchInterval: 5000,
        staleTime: 0
    });
}
_s(useInfiniteMessages, "xMCOiuh9cV5e8gBi6hogZoGnISk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/schemas/file-upload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * File Upload Validation Schemas and Configuration
 */ __turbopack_context__.s([
    "FILE_UPLOAD_CONFIG",
    ()=>FILE_UPLOAD_CONFIG,
    "MIME_TYPE_EXTENSIONS",
    ()=>MIME_TYPE_EXTENSIONS,
    "fileUploadSchema",
    ()=>fileUploadSchema,
    "formatFileSize",
    ()=>formatFileSize,
    "getFileIcon",
    ()=>getFileIcon,
    "sanitizeFileName",
    ()=>sanitizeFileName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const FILE_UPLOAD_CONFIG = {
    // Max file size in bytes (configurable via env)
    MAX_FILE_SIZE: parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.MAX_FILE_SIZE_MB || "5", 10) * 1024 * 1024,
    // Max number of files per message
    MAX_FILES_PER_MESSAGE: 5,
    // Allowed MIME types
    ALLOWED_MIME_TYPES: [
        // Images
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/webp",
        // Documents
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        // Text
        "text/plain",
        "text/csv"
    ],
    // File name restrictions
    MAX_FILENAME_LENGTH: 255
};
const MIME_TYPE_EXTENSIONS = {
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "application/pdf": ".pdf",
    "application/msword": ".doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
    "application/vnd.ms-excel": ".xls",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
    "text/plain": ".txt",
    "text/csv": ".csv"
};
const fileUploadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    fileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "File name is required").max(FILE_UPLOAD_CONFIG.MAX_FILENAME_LENGTH, "File name too long").refine((name)=>!/[<>:"|?*\\\/]/.test(name), "File name contains invalid characters"),
    mimeType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((type)=>FILE_UPLOAD_CONFIG.ALLOWED_MIME_TYPES.includes(type), "File type not allowed. Allowed types: images, PDFs, Word, Excel, text files"),
    fileSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive("File size must be positive").max(FILE_UPLOAD_CONFIG.MAX_FILE_SIZE, "File too large. Maximum size is ".concat(FILE_UPLOAD_CONFIG.MAX_FILE_SIZE / 1024 / 1024, "MB"))
});
function sanitizeFileName(fileName) {
    // Remove path separators and special characters
    let sanitized = fileName.replace(/[<>:"|?*\\\/]/g, "_");
    // Remove leading/trailing spaces and dots
    sanitized = sanitized.trim().replace(/^\.+/, "");
    // Limit length
    if (sanitized.length > FILE_UPLOAD_CONFIG.MAX_FILENAME_LENGTH) {
        const ext = sanitized.substring(sanitized.lastIndexOf("."));
        const name = sanitized.substring(0, FILE_UPLOAD_CONFIG.MAX_FILENAME_LENGTH - ext.length);
        sanitized = name + ext;
    }
    return sanitized || "unnamed";
}
function formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
}
function getFileIcon(mimeType) {
    if (mimeType.startsWith("image/")) return "📷";
    if (mimeType === "application/pdf") return "📄";
    if (mimeType === "application/msword" || mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        return "📝";
    }
    if (mimeType === "application/vnd.ms-excel" || mimeType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        return "📊";
    }
    if (mimeType.startsWith("text/")) return "📃";
    return "📎";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants/grievances.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * Grievance System Constants
 * Type-safe constants for the grievance redressal mechanism
 */ __turbopack_context__.s([
    "AUTO_ASSIGNMENT_SETTINGS",
    ()=>AUTO_ASSIGNMENT_SETTINGS,
    "AUTO_CLOSE_SETTINGS",
    ()=>AUTO_CLOSE_SETTINGS,
    "GRIEVANCE_AUDIT_ACTIONS",
    ()=>GRIEVANCE_AUDIT_ACTIONS,
    "GRIEVANCE_CATEGORY_COLORS",
    ()=>GRIEVANCE_CATEGORY_COLORS,
    "GRIEVANCE_CATEGORY_DESCRIPTIONS",
    ()=>GRIEVANCE_CATEGORY_DESCRIPTIONS,
    "GRIEVANCE_CATEGORY_LABELS",
    ()=>GRIEVANCE_CATEGORY_LABELS,
    "GRIEVANCE_DEFAULTS",
    ()=>GRIEVANCE_DEFAULTS,
    "GRIEVANCE_SEVERITY_LABELS",
    ()=>GRIEVANCE_SEVERITY_LABELS,
    "GRIEVANCE_STATUS_COLORS",
    ()=>GRIEVANCE_STATUS_COLORS,
    "GRIEVANCE_STATUS_LABELS",
    ()=>GRIEVANCE_STATUS_LABELS,
    "GRIEVANCE_VALIDATION",
    ()=>GRIEVANCE_VALIDATION,
    "MESSAGE_AUTHOR_LABELS",
    ()=>MESSAGE_AUTHOR_LABELS,
    "MESSAGE_VALIDATION",
    ()=>MESSAGE_VALIDATION,
    "VALID_STATUS_TRANSITIONS",
    ()=>VALID_STATUS_TRANSITIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)");
;
const GRIEVANCE_AUDIT_ACTIONS = {
    CREATED_BY_PRINCIPAL: "CREATED_BY_PRINCIPAL",
    ASSIGNED_TO_AGENT: "ASSIGNED_TO_AGENT",
    AUTO_ASSIGNED_TO_AGENT: "AUTO_ASSIGNED_TO_AGENT",
    UNASSIGNED: "UNASSIGNED",
    STATUS_CHANGED: "STATUS_CHANGED",
    MESSAGE_SENT: "MESSAGE_SENT",
    RESOLVED: "RESOLVED",
    CLOSED: "CLOSED",
    REOPENED: "REOPENED",
    REOPENED_BY_PRINCIPAL: "REOPENED_BY_PRINCIPAL",
    REOPENED_BY_AGENT: "REOPENED_BY_AGENT"
};
const GRIEVANCE_CATEGORY_LABELS = {
    CONSENT_UPDATE: "Consent Update",
    WITHDRAW_CONSENT: "Withdraw Consent",
    ERASE_DATA: "Erase Data",
    PROCESSING_PURPOSE_ENQUIRY: "Processing Purpose Enquiry",
    REPORT_BREACH: "Report Breach",
    REVIEW_REQUEST: "Review Request",
    NOMINATE_MEMBER: "Nominate a Member"
};
const GRIEVANCE_STATUS_LABELS = {
    SUBMITTED: "Unassigned",
    ASSIGNED: "Assigned",
    IN_PROGRESS: "In Progress",
    RESOLVED: "Resolved",
    CLOSED: "Closed",
    REOPENED: "Reopened"
};
const GRIEVANCE_SEVERITY_LABELS = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
    CRITICAL: "Critical"
};
const GRIEVANCE_STATUS_COLORS = {
    SUBMITTED: {
        bg: "bg-blue-50 dark:bg-blue-950",
        text: "text-blue-700 dark:text-blue-300",
        border: "border-blue-200 dark:border-blue-800"
    },
    ASSIGNED: {
        bg: "bg-purple-50 dark:bg-purple-950",
        text: "text-purple-700 dark:text-purple-300",
        border: "border-purple-200 dark:border-purple-800"
    },
    IN_PROGRESS: {
        bg: "bg-yellow-50 dark:bg-yellow-950",
        text: "text-yellow-700 dark:text-yellow-300",
        border: "border-yellow-200 dark:border-yellow-800"
    },
    RESOLVED: {
        bg: "bg-green-50 dark:bg-green-950",
        text: "text-green-700 dark:text-green-300",
        border: "border-green-200 dark:border-green-800"
    },
    CLOSED: {
        bg: "bg-gray-50 dark:bg-gray-950",
        text: "text-gray-700 dark:text-gray-300",
        border: "border-gray-200 dark:border-gray-800"
    },
    REOPENED: {
        bg: "bg-orange-50 dark:bg-orange-950",
        text: "text-orange-700 dark:text-orange-300",
        border: "border-orange-200 dark:border-orange-800"
    }
};
const GRIEVANCE_CATEGORY_COLORS = {
    CONSENT_UPDATE: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
    WITHDRAW_CONSENT: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
    ERASE_DATA: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
    PROCESSING_PURPOSE_ENQUIRY: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
    REPORT_BREACH: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800",
    REVIEW_REQUEST: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800",
    NOMINATE_MEMBER: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
};
const GRIEVANCE_CATEGORY_DESCRIPTIONS = {
    CONSENT_UPDATE: "Request to update or modify existing consent preferences",
    WITHDRAW_CONSENT: "Request to withdraw consent for data processing activities",
    ERASE_DATA: "Request to erase personal data from our systems",
    PROCESSING_PURPOSE_ENQUIRY: "Enquiry about data processing purposes and activities",
    REPORT_BREACH: "Report a suspected data breach or privacy violation",
    REVIEW_REQUEST: "Request review of data processing decisions",
    NOMINATE_MEMBER: "Nominate a representative or member"
};
const GRIEVANCE_VALIDATION = {
    SUBJECT: {
        MIN_LENGTH: 10,
        MAX_LENGTH: 200
    },
    DESCRIPTION: {
        MIN_LENGTH: 20,
        MAX_LENGTH: 2000
    }
};
const GRIEVANCE_DEFAULTS = {
    STATUS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].SUBMITTED,
    ITEMS_PER_PAGE: 10,
    EXPECTED_RESOLUTION_DAYS: 15
};
const MESSAGE_AUTHOR_LABELS = {
    PRINCIPAL: "Data Principal",
    FIDUCIARY_AGENT: "Support Agent",
    SYSTEM: "System"
};
const VALID_STATUS_TRANSITIONS = {
    SUBMITTED: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].ASSIGNED,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].IN_PROGRESS
    ],
    ASSIGNED: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].IN_PROGRESS,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].SUBMITTED
    ],
    IN_PROGRESS: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].RESOLVED,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].ASSIGNED,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].CLOSED
    ],
    RESOLVED: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].CLOSED,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].REOPENED
    ],
    CLOSED: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].REOPENED
    ],
    REOPENED: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].IN_PROGRESS,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].ASSIGNED,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].RESOLVED,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceStatus"].CLOSED
    ]
};
const MESSAGE_VALIDATION = {
    MIN_LENGTH: 1,
    MAX_LENGTH: 5000
};
const AUTO_CLOSE_SETTINGS = {
    DAYS_AFTER_RESOLVED: 7
};
const AUTO_ASSIGNMENT_SETTINGS = {
    ENABLED: true,
    STRATEGY: "ROUND_ROBIN",
    MAX_ACTIVE_PER_AGENT: 50
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/sla.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "calculateExpectedResolutionTime",
    ()=>calculateExpectedResolutionTime,
    "checkSlaStatus",
    ()=>checkSlaStatus,
    "formatTimeRemaining",
    ()=>formatTimeRemaining,
    "getSeverityForCategory",
    ()=>getSeverityForCategory,
    "getSlaStatusColor",
    ()=>getSlaStatusColor,
    "getSlaStatusLabel",
    ()=>getSlaStatusLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)");
;
function getSeverityForCategory(category) {
    switch(category){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceCategory"].REPORT_BREACH:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceSeverity"].CRITICAL;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceCategory"].ERASE_DATA:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceCategory"].WITHDRAW_CONSENT:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceSeverity"].HIGH;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceCategory"].PROCESSING_PURPOSE_ENQUIRY:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceCategory"].CONSENT_UPDATE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceSeverity"].MEDIUM;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceCategory"].REVIEW_REQUEST:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceCategory"].NOMINATE_MEMBER:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceSeverity"].LOW;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrievanceSeverity"].MEDIUM;
    }
}
function calculateExpectedResolutionTime(start, days, businessHours) {
    if (!(businessHours === null || businessHours === void 0 ? void 0 : businessHours.enabled)) {
        // Simple calendar days mode
        const result = new Date(start);
        result.setUTCDate(result.getUTCDate() + days);
        return result;
    }
    // Business hours mode: count only work hours
    const { startHour, endHour, businessDays } = businessHours;
    const hoursPerDay = endHour - startHour;
    const totalHoursNeeded = days * hoursPerDay;
    const current = new Date(start);
    let hoursAccumulated = 0;
    while(hoursAccumulated < totalHoursNeeded){
        const dayOfWeek = current.getUTCDay() || 7; // Convert Sunday (0) to 7
        const currentHour = current.getUTCHours();
        if (businessDays.includes(dayOfWeek) && currentHour >= startHour && currentHour < endHour) {
            hoursAccumulated++;
        }
        current.setUTCHours(current.getUTCHours() + 1);
    }
    return current;
}
function checkSlaStatus(startedAt, expectedResolutionAt, resolvedAt, isBreached) {
    const now = new Date();
    const start = new Date(startedAt).getTime();
    const expected = new Date(expectedResolutionAt).getTime();
    const resolved = resolvedAt ? new Date(resolvedAt).getTime() : null;
    // If resolved, return resolved status
    if (resolved) {
        return {
            status: "resolved",
            timeRemaining: 0,
            percentComplete: 100,
            isBreached: isBreached || resolved > expected
        };
    }
    const currentTime = now.getTime();
    const timeRemaining = expected - currentTime;
    const totalDuration = expected - start;
    const elapsed = currentTime - start;
    const percentComplete = Math.min(100, Math.max(0, elapsed / totalDuration * 100));
    // If breached (past expected resolution time)
    if (isBreached || timeRemaining <= 0) {
        return {
            status: "breached",
            timeRemaining: timeRemaining,
            percentComplete: 100,
            isBreached: true
        };
    }
    // At risk: less than 25% time remaining
    const percentRemaining = timeRemaining / totalDuration * 100;
    if (percentRemaining < 25) {
        return {
            status: "at-risk",
            timeRemaining,
            percentComplete,
            isBreached: false
        };
    }
    // On track
    return {
        status: "on-track",
        timeRemaining,
        percentComplete,
        isBreached: false
    };
}
function formatTimeRemaining(milliseconds) {
    const isOverdue = milliseconds < 0;
    const absMs = Math.abs(milliseconds);
    const minutes = Math.floor(absMs / (1000 * 60));
    const hours = Math.floor(absMs / (1000 * 60 * 60));
    const days = Math.floor(absMs / (1000 * 60 * 60 * 24));
    let formatted;
    if (days > 0) {
        formatted = "".concat(days, " day").concat(days !== 1 ? "s" : "");
    } else if (hours > 0) {
        formatted = "".concat(hours, " hour").concat(hours !== 1 ? "s" : "");
    } else if (minutes > 0) {
        formatted = "".concat(minutes, " minute").concat(minutes !== 1 ? "s" : "");
    } else {
        formatted = "less than a minute";
    }
    return isOverdue ? "Overdue by ".concat(formatted) : formatted;
}
function getSlaStatusColor(status) {
    switch(status){
        case "on-track":
            return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
        case "at-risk":
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
        case "breached":
            return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
        case "resolved":
            return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
        default:
            return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
}
function getSlaStatusLabel(status) {
    switch(status){
        case "on-track":
            return "On Track";
        case "at-risk":
            return "At Risk";
        case "breached":
            return "Breached";
        case "resolved":
            return "Resolved";
        default:
            return "Unknown";
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_83287d84._.js.map