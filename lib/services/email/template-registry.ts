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
 * Email Template Registry
 * 
 * Centralized template management for email service.
 * All email templates must be statically imported here for Next.js production builds.
 * 
 * To add a new template:
 * 1. Create your template file in ./templates/ (e.g., my-template.tsx)
 * 2. Export a `renderEmail` function that returns { subject, html, text }
 * 3. Add import below: import * as myTemplate from "./templates/my-template";
 * 4. Add to registry: "my-template": myTemplate,
 */

// Consent-related templates
import * as consentExpiringReminder from "./templates/consent-expiring-reminder";
import * as consentGrantedConfirmation from "./templates/consent-granted-confirmation";
import * as consentUpdatedSuccessfully from "./templates/consent-updated-successfully";
import * as consentVersionChanges from "./templates/consent-version-changes";
import * as consentVersionModifiedPurpose from "./templates/consent-version-modified-purpose";
import * as consentVersionNewPurpose from "./templates/consent-version-new-purpose";
import * as consentWithdrawnSuccessfully from "./templates/consent-withdrawn-successfully";

// Grievance-related templates
import * as grievanceResolved from "./templates/grievance-resolved";
import * as grievanceStatusUpdate from "./templates/grievance-status-update";

// SLA-related templates
import * as slaBreachEscalation from "./templates/sla-breach-escalation";

/**
 * Template registry mapping template names to their modules.
 * Template names should use kebab-case (e.g., "my-template-name").
 */
export const TEMPLATE_REGISTRY: Record<string, any> = {
  // Consent templates
  "consent-expiring-reminder": consentExpiringReminder,
  "consent-granted-confirmation": consentGrantedConfirmation,
  "consent-updated-successfully": consentUpdatedSuccessfully,
  "consent-version-changes": consentVersionChanges,
  "consent-version-modified-purpose": consentVersionModifiedPurpose,
  "consent-version-new-purpose": consentVersionNewPurpose,
  "consent-withdrawn-successfully": consentWithdrawnSuccessfully,

  // Grievance templates
  "grievance-resolved": grievanceResolved,
  "grievance-status-update": grievanceStatusUpdate,

  // SLA templates
  "sla-breach-escalation": slaBreachEscalation,
};

/** Get list of all available template names */
export function getAvailableTemplates(): string[] {
  return Object.keys(TEMPLATE_REGISTRY);
}

/** Check if a template exists in the registry */
export function hasTemplate(templateName: string): boolean {
  return templateName in TEMPLATE_REGISTRY;
}
