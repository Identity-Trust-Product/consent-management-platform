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

  /**
   * Key for storing the verification method used for the parent/guardian.
   * Used to demonstrate verifiable consent for child data processing.
   */
  GUARDIAN_VERIFICATION_METHOD: "guardian_verification_method",

  /**
   * Key for storing the verification transaction/reference ID.
   */
  GUARDIAN_VERIFICATION_REFERENCE: "guardian_verification_reference",

  /**
   * Optional key for storing an evidence artifact URL or storage key.
   */
  GUARDIAN_EVIDENCE_ARTIFACT_URL: "guardian_evidence_artifact_url",

  /**
   * Optional key for storing a hash of the evidence artifact.
   */
  GUARDIAN_EVIDENCE_ARTIFACT_HASH: "guardian_evidence_artifact_hash",

  /**
   * Key for storing the timestamp at which the guardian verification completed.
   */
  GUARDIAN_VERIFIED_AT: "guardian_verified_at",

  /**
   * Optional key for storing the operator/system that verified the guardian.
   */
  GUARDIAN_VERIFIED_BY: "guardian_verified_by",
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

/**
 * Available verification methods for verifiable parent/guardian consent.
 */
export const GUARDIAN_VERIFICATION_METHOD_OPTIONS = [
  { value: "otp", label: "OTP" },
  { value: "identity_document", label: "Identity Document" },
  { value: "digilocker", label: "DigiLocker" },
  { value: "offline_kyc", label: "Offline KYC" },
  { value: "assisted_verification", label: "Assisted Verification" },
  { value: "other", label: "Other" },
] as const;
