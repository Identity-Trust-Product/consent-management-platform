module.exports = [
"[project]/lib/constants/grievances.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
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
    STATUS: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].SUBMITTED,
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
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS
    ],
    ASSIGNED: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].SUBMITTED
    ],
    IN_PROGRESS: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED
    ],
    RESOLVED: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].REOPENED
    ],
    CLOSED: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].REOPENED
    ],
    REOPENED: [
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].IN_PROGRESS,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].ASSIGNED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].RESOLVED,
        __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceStatus"].CLOSED
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
}),
"[project]/lib/utils/sla.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
function getSeverityForCategory(category) {
    switch(category){
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].REPORT_BREACH:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].CRITICAL;
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].ERASE_DATA:
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].WITHDRAW_CONSENT:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].HIGH;
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].PROCESSING_PURPOSE_ENQUIRY:
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].CONSENT_UPDATE:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].MEDIUM;
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].REVIEW_REQUEST:
        case __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceCategory"].NOMINATE_MEMBER:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].LOW;
        default:
            return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["GrievanceSeverity"].MEDIUM;
    }
}
function calculateExpectedResolutionTime(start, days, businessHours) {
    if (!businessHours?.enabled) {
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
        formatted = `${days} day${days !== 1 ? "s" : ""}`;
    } else if (hours > 0) {
        formatted = `${hours} hour${hours !== 1 ? "s" : ""}`;
    } else if (minutes > 0) {
        formatted = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    } else {
        formatted = "less than a minute";
    }
    return isOverdue ? `Overdue by ${formatted}` : formatted;
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
}),
];

//# sourceMappingURL=lib_3de07619._.js.map