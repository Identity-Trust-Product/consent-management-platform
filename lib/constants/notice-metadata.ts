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
 * Notice Metadata Constants
 *
 * Defines standard metadata keys used in the notice system,
 * particularly for minor consent workflows.
 */

export const NOTICE_METADATA_KEYS = {
  /**
   * Key for storing the major (parent/guardian) data principal ID
   * Used when a notice is created for a minor
   */
  MAJOR_DATA_PRINCIPAL_ID: "major_data_principal_id",

  /**
   * Key for storing the relationship between the major and minor
   * (e.g., parent, guardian, foster_parent, etc.)
   */
  RELATIONSHIP_WITH_MINOR: "relationship_with_minor",
} as const;

/**
 * Available relationship types for minor consent
 */
export const RELATIONSHIP_OPTIONS = [
  { value: "parent", label: "Parent" },
  { value: "guardian", label: "Guardian" },
  { value: "foster_parent", label: "Foster Parent" },
  { value: "custodian", label: "Custodian" },
  { value: "caregiver", label: "Caregiver" },
  { value: "mentor_adviser", label: "Mentor/Adviser" },
  { value: "other", label: "Other" },
] as const;
