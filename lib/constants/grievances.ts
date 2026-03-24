/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */

/**
 * Grievance System Constants
 * Type-safe constants for the grievance redressal mechanism
 */

import {
  GrievanceCategory,
  GrievanceMessageAuthorType,
  GrievanceStatus,
  GrievanceSeverity,
} from "@prisma/client";

/**
 * Audit log action types for tracking grievance lifecycle events
 */
export const GRIEVANCE_AUDIT_ACTIONS = {
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
  REOPENED_BY_AGENT: "REOPENED_BY_AGENT",
} as const;

export type GrievanceAuditAction =
  (typeof GRIEVANCE_AUDIT_ACTIONS)[keyof typeof GRIEVANCE_AUDIT_ACTIONS];

/**
 * Human-readable labels for grievance categories
 */
export const GRIEVANCE_CATEGORY_LABELS: Record<GrievanceCategory, string> = {
  CONSENT_UPDATE: "Consent Update",
  WITHDRAW_CONSENT: "Withdraw Consent",
  ERASE_DATA: "Erase Data",
  PROCESSING_PURPOSE_ENQUIRY: "Processing Purpose Enquiry",
  REPORT_BREACH: "Report Breach",
  REVIEW_REQUEST: "Review Request",
  NOMINATE_MEMBER: "Nominate a Member",
};

/**
 * Human-readable labels for grievance statuses
 */
export const GRIEVANCE_STATUS_LABELS: Record<GrievanceStatus, string> = {
  SUBMITTED: "Unassigned",
  ASSIGNED: "Assigned",
  IN_PROGRESS: "In Progress",
  RESOLVED: "Resolved",
  CLOSED: "Closed",
  REOPENED: "Reopened",
};

/**
 * Human-readable labels for grievance severity levels
 */
export const GRIEVANCE_SEVERITY_LABELS: Record<GrievanceSeverity, string> = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  CRITICAL: "Critical",
};

/**
 * Color codes for status badges (Tailwind CSS classes)
 */
export const GRIEVANCE_STATUS_COLORS: Record<
  GrievanceStatus,
  {
    bg: string;
    text: string;
    border: string;
  }
> = {
  SUBMITTED: {
    bg: "bg-blue-50 dark:bg-blue-950",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-200 dark:border-blue-800",
  },
  ASSIGNED: {
    bg: "bg-purple-50 dark:bg-purple-950",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-200 dark:border-purple-800",
  },
  IN_PROGRESS: {
    bg: "bg-yellow-50 dark:bg-yellow-950",
    text: "text-yellow-700 dark:text-yellow-300",
    border: "border-yellow-200 dark:border-yellow-800",
  },
  RESOLVED: {
    bg: "bg-green-50 dark:bg-green-950",
    text: "text-green-700 dark:text-green-300",
    border: "border-green-200 dark:border-green-800",
  },
  CLOSED: {
    bg: "bg-gray-50 dark:bg-gray-950",
    text: "text-gray-700 dark:text-gray-300",
    border: "border-gray-200 dark:border-gray-800",
  },
  REOPENED: {
    bg: "bg-orange-50 dark:bg-orange-950",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-200 dark:border-orange-800",
  },
};

/**
 * Color codes for category badges (Tailwind CSS classes)
 */
export const GRIEVANCE_CATEGORY_COLORS: Record<GrievanceCategory, string> = {
  CONSENT_UPDATE:
    "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
  WITHDRAW_CONSENT:
    "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
  ERASE_DATA:
    "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  PROCESSING_PURPOSE_ENQUIRY:
    "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
  REPORT_BREACH:
    "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800",
  REVIEW_REQUEST:
    "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800",
  NOMINATE_MEMBER:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
};

/**
 * Description text for each grievance category
 */
export const GRIEVANCE_CATEGORY_DESCRIPTIONS: Record<
  GrievanceCategory,
  string
> = {
  CONSENT_UPDATE: "Request to update or modify existing consent preferences",
  WITHDRAW_CONSENT:
    "Request to withdraw consent for data processing activities",
  ERASE_DATA: "Request to erase personal data from our systems",
  PROCESSING_PURPOSE_ENQUIRY:
    "Enquiry about data processing purposes and activities",
  REPORT_BREACH: "Report a suspected data breach or privacy violation",
  REVIEW_REQUEST: "Request review of data processing decisions",
  NOMINATE_MEMBER: "Nominate a representative or member",
};

/**
 * Validation constraints for grievance fields
 */
export const GRIEVANCE_VALIDATION = {
  SUBJECT: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 200,
  },
  DESCRIPTION: {
    MIN_LENGTH: 20,
    MAX_LENGTH: 2000,
  },
} as const;

/**
 * Default values for grievance system
 */
export const GRIEVANCE_DEFAULTS = {
  STATUS: GrievanceStatus.SUBMITTED,
  ITEMS_PER_PAGE: 10,
  EXPECTED_RESOLUTION_DAYS: 15, // Default SLA for grievance resolution
} as const;

/**
 * Message author type labels
 */
export const MESSAGE_AUTHOR_LABELS: Record<
  GrievanceMessageAuthorType,
  string
> = {
  PRINCIPAL: "Data Principal",
  FIDUCIARY_AGENT: "Support Agent",
  SYSTEM: "System",
};

/**
 * Valid status transitions (from -> to[])
 */
export const VALID_STATUS_TRANSITIONS: Record<
  GrievanceStatus,
  GrievanceStatus[]
> = {
  SUBMITTED: [GrievanceStatus.ASSIGNED, GrievanceStatus.IN_PROGRESS],
  ASSIGNED: [GrievanceStatus.IN_PROGRESS, GrievanceStatus.SUBMITTED],
  IN_PROGRESS: [GrievanceStatus.RESOLVED, GrievanceStatus.ASSIGNED, GrievanceStatus.CLOSED],
  RESOLVED: [GrievanceStatus.CLOSED, GrievanceStatus.REOPENED], // Can reopen from resolved
  CLOSED: [GrievanceStatus.REOPENED], // Can reopen from closed
  REOPENED: [
    GrievanceStatus.IN_PROGRESS,
    GrievanceStatus.ASSIGNED,
    GrievanceStatus.RESOLVED,
    GrievanceStatus.CLOSED,
  ], // Reopened can go to any active state or be resolved/closed
};

/**
 * Validation constraints for messages
 */
export const MESSAGE_VALIDATION = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 5000,
} as const;

/**
 * Auto-close settings
 */
export const AUTO_CLOSE_SETTINGS = {
  DAYS_AFTER_RESOLVED: 7, // Auto-close after 7 days if no response
} as const;

/**
 * Auto-assignment settings
 */
export const AUTO_ASSIGNMENT_SETTINGS = {
  ENABLED: true, // Enable auto-assignment by default
  STRATEGY: "ROUND_ROBIN", // 'ROUND_ROBIN' or 'LEAST_LOADED'
  MAX_ACTIVE_PER_AGENT: 50, // Maximum active grievances per agent
} as const;

export type AssignmentStrategy = "ROUND_ROBIN" | "LEAST_LOADED";
