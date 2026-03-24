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

import {
  Eye,
  LogIn,
  LogOut,
  Pencil,
  Plus,
  Trash2,
  Download,
  type LucideIcon,
} from "lucide-react";

/**
 * Map of action types to human-readable labels
 */
export const ACTION_LABELS: { [key: string]: string } = {
  LOGIN: "Logged In",
  LOGOUT: "Logged Out",
  CREATE: "Created",
  UPDATE: "Updated",
  DELETE: "Deleted",
  EXPORT: "Exported Data",
  VIEW: "Viewed",
};

/**
 * Map of action types to icons
 */
export const ACTION_ICONS: { [key: string]: LucideIcon } = {
  LOGIN: LogIn,
  LOGOUT: LogOut,
  CREATE: Plus,
  UPDATE: Pencil,
  DELETE: Trash2,
  EXPORT: Download,
  VIEW: Eye,
};

/**
 * Map of resource types to human-readable labels
 */
export const RESOURCE_LABELS: { [key: string]: string } = {
  USER: "User",
  USER_ROLE: "User Role",
  ROLE: "Role",
  ADMIN: "Admin",
  BUSINESS_UNIT: "Business Unit",
  BUSINESS_PROCESS: "Business Process",
  CONSENT_PURPOSE: "Consent Purpose",
  PROCESSING_PURPOSE: "Processing Purpose",
  PURPOSE_OF_PROCESSING: "Purpose of Processing",
  USER_ATTRIBUTE: "User Attribute",
  DATA_PROCESSOR: "Data Processor",
  NOTICE: "Notice",
  CONSENT: "Consent",
  DPRM: "DPRM",
  GRIEVANCE: "Grievance",
  API_KEY: "API Key",
  WEBHOOK: "Webhook",
};

/**
 * Humanize action type
 */
export function humanizeAction(action: string): string {
  return ACTION_LABELS[action] || action.replace(/_/g, " ");
}

/**
 * Humanize resource type
 */
export function humanizeResource(resource: string): string {
  return RESOURCE_LABELS[resource] || resource.replace(/_/g, " ");
}

/**
 * Get icon for action type
 */
export function getActionIcon(action: string): LucideIcon {
  return ACTION_ICONS[action] || Eye;
}

/**
 * Format action with resource for display
 * Example: "Created Business Unit", "Updated User"
 */
export function formatActionWithResource(
  action: string,
  resource: string,
): string {
  const actionLabel = humanizeAction(action);
  const resourceLabel = humanizeResource(resource);

  // Special case for LOGIN/LOGOUT (no resource needed)
  if (action === "LOGIN" || action === "LOGOUT") {
    return actionLabel;
  }

  return `${actionLabel} ${resourceLabel}`;
}

/**
 * Format resource display with ID fallback
 * This is a client-side helper that doesn't fetch from database
 */
export function formatResourceId(
  resource: string,
  resourceId: string | null,
): string {
  if (!resourceId) {
    return humanizeResource(resource);
  }
  return `ID: ${resourceId}`;
}

/**
 * Get all unique action types from audit logs (for filter dropdown)
 */
export const AVAILABLE_ACTIONS = [
  { value: "LOGIN", label: "Login" },
  { value: "LOGOUT", label: "Logout" },
  { value: "CREATE", label: "Create" },
  { value: "UPDATE", label: "Update" },
  { value: "DELETE", label: "Delete" },
  { value: "EXPORT", label: "Export" },
  { value: "VIEW", label: "View" },
];

/**
 * Get all unique resource types from audit logs (for filter dropdown)
 */
export const AVAILABLE_RESOURCES = [
  { value: "USER", label: "User" },
  { value: "USER_ROLE", label: "User Role" },
  { value: "BUSINESS_UNIT", label: "Business Unit" },
  { value: "BUSINESS_PROCESS", label: "Business Process" },
  { value: "CONSENT_PURPOSE", label: "Consent Purpose" },
  { value: "PROCESSING_PURPOSE", label: "Processing Purpose" },
  { value: "DATA_PROCESSOR", label: "Data Processor" },
  { value: "NOTICE", label: "Notice" },
  { value: "CONSENT", label: "Consent" },
  { value: "GRIEVANCE", label: "Grievance" },
  { value: "API_KEY", label: "API Key" },
  { value: "WEBHOOK", label: "Webhook" },
];
