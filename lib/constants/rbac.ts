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
 * RBAC Constants
 * Role-Based Access Control configuration - Single Source of Truth
 */

/**
 * System resources that can be protected
 */
/**
 * Service categories for permission grouping
 */
export const ServiceCategories = {
  CGP: "CGP",
  DPRM: "DPRM",
  COOKIES_MANAGER: "COOKIES_MANAGER",
} as const;

/**
 * Resource to service category mapping
 */
export const RESOURCE_SERVICE_MAPPING: Record<
  string,
  keyof typeof ServiceCategories
> = {
  GRIEVANCE: "DPRM",
  GRIEVANCE_ADMIN: "DPRM",
  // All other resources default to CGP
};

export const Resources = {
  // System Resources
  USER: "USER",
  USER_ROLE: "USER_ROLE",
  ROLE: "ROLE",
  ADMIN: "ADMIN", // Used for admin panel access check only
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
  DATA_RETENTION_POLICY: "DATA_RETENTION_POLICY",
} as const;

/**
 * Actions that can be performed on resources
 */
export const Actions = {
  CREATE: "CREATE",
  READ: "READ",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
} as const;

/**
 * System roles
 */
export const Roles = {
  PRIVY_CGP_ADMIN: "privy_cgp_admin", // System Superuser
  PRIVY_CGP_USER: "privy_cgp_user", // Consent Manager / Operator
  PRIVY_API_KEY_MANAGER: "privy_api_key_manager", // Technical Admin
  PRIVY_CGP_GRIEVANCE_AGENT: "privy_cgp_grievance_agent", // Grievance Officer
  PRIVY_DATA_PROTECTION_OFFICER: "privy_data_protection_officer", // DPO
  PRIVY_AUDITOR: "privy_auditor", // External/Internal Auditor

  // Cookie Manager Roles (managed from this service, used by Cookie Manager)
  PRIVY_CM_EDITOR: "privy_cm_editor", // Cookie Manager Editor
  PRIVY_CM_ADMIN: "privy_cm_admin", // Cookie Manager Administrator
  PRIVY_CM_SCAN_OPERATOR: "privy_cm_scan_operator", // Cookie Scan Accessor
} as const;

/**
 * Role permission mappings
 * Each role has a set of permissions in the format "RESOURCE:ACTION"
 * "*:*" grants all permissions
 * "*:READ" grants read access to all resources
 * "RESOURCE:*" grants all actions on a specific resource
 */
export const ROLE_PERMISSIONS = {
  [Roles.PRIVY_CGP_ADMIN]: [
    "*:*", // Admin gets everything
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
    `${Resources.DATA_RETENTION_POLICY}:${Actions.READ}`,
  ],
  [Roles.PRIVY_API_KEY_MANAGER]: [
    `${Resources.API_KEY}:${Actions.CREATE}`,
    `${Resources.API_KEY}:${Actions.READ}`,
    `${Resources.API_KEY}:${Actions.UPDATE}`,
    `${Resources.API_KEY}:${Actions.DELETE}`,
    `${Resources.WEBHOOK}:${Actions.CREATE}`,
    `${Resources.WEBHOOK}:${Actions.READ}`,
    `${Resources.WEBHOOK}:${Actions.UPDATE}`,
    `${Resources.WEBHOOK}:${Actions.DELETE}`,
  ],
  [Roles.PRIVY_CGP_GRIEVANCE_AGENT]: [
    `${Resources.GRIEVANCE}:${Actions.READ}`,
    `${Resources.GRIEVANCE}:${Actions.UPDATE}`,
    `${Resources.NOTICE}:${Actions.READ}`, // Context for grievances
    `${Resources.DATA_RETENTION_POLICY}:${Actions.READ}`,
  ],
  [Roles.PRIVY_DATA_PROTECTION_OFFICER]: [
    "*:READ", // Read access to everything for oversight
    `${Resources.AUDIT_LOG}:${Actions.READ}`,
    `${Resources.CONSENT_RECORD}:${Actions.READ}`,
    `${Resources.GRIEVANCE}:${Actions.READ}`,
    `${Resources.GRIEVANCE}:${Actions.UPDATE}`,
    `${Resources.GRIEVANCE_ADMIN}:${Actions.READ}`,

    // Data Retention Policies
    `${Resources.DATA_RETENTION_POLICY}:${Actions.CREATE}`,
    `${Resources.DATA_RETENTION_POLICY}:${Actions.UPDATE}`,
    `${Resources.DATA_RETENTION_POLICY}:${Actions.DELETE}`,
  ],
  [Roles.PRIVY_AUDITOR]: [
    "*:READ", // Read access to everything
    `${Resources.AUDIT_LOG}:${Actions.READ}`,
    `${Resources.CONSENT_RECORD}:${Actions.READ}`,
  ],

  // Cookie Manager Roles (permissions managed by Cookie Manager service)
  [Roles.PRIVY_CM_EDITOR]: [],
  [Roles.PRIVY_CM_ADMIN]: [],
  [Roles.PRIVY_CM_SCAN_OPERATOR]: [],
} as const;

export type Resource = keyof typeof Resources;
export type Action = keyof typeof Actions;
export type Role = (typeof Roles)[keyof typeof Roles];
