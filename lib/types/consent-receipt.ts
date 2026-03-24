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
 * Consent Receipt Types
 * 
 * Used for generating consent receipts after notice submission.
 * Data is generated dynamically from Notice, BusinessProcess, and Consent records.
 */

export interface ConsentReceiptPurpose {
  purpose: string; // Consent purpose name
  personalDataCollected: string[]; // User attribute names
}

export interface ExerciseRightsStep {
  step: number;
  description: string;
  link?: string; // DPRM link
}

export interface ConsentReceiptData {
  // From Notice
  receiptId: string; // Notice.publicId
  dateTime: Date; // Notice.markCompletedTimestamp
  dataPrincipalId: string; // Notice.dataPrincipalId
  language: string; // Notice.defaultLanguage

  // From BusinessProcess
  serviceDescription: string; // BusinessProcess.name (translated)

  // From Environment
  dataFiduciaryName: string; // process.env.DATA_FIDUCIARY_NAME

  // Dynamically built
  legalStatement: string; // "I acknowledge that I have given my consent to {DF_NAME} for {BP_NAME}."

  // From Consents (only accepted ones)
  purposes: ConsentReceiptPurpose[];

  // Static DPDPA rights
  rights: string[];

  // Static with dynamic DPRM links
  exerciseRightsSteps: ExerciseRightsStep[];

  // Placeholder/from env
  contactEmail: string;

  // Additional metadata
  noticePublicId: string; // For linking back
}

// Re-export DPDPA rights from constants
export { DPDPA_RIGHTS } from "@/lib/constants/services";

/**
 * Generate exercise rights steps with dynamic DPRM links
 */
export async function generateExerciseRightsSteps(
  dataPrincipalId: string,
  dprmUrl: string
): Promise<ExerciseRightsStep[]> {
  const dfName = process.env.DATA_FIDUCIARY_NAME || "the Data Fiduciary";

  return [
    {
      step: 1,
      description: "Submit an Access Request – Click",
      link: dprmUrl, // Link to DPRM portal
    },
    {
      step: 2,
      description: `View your consents provided to ${dfName} – Click`,
      link: dprmUrl, // Same DPRM link - shows consents
    },
    {
      step: 3,
      description: "Submit grievances – Click",
      link: dprmUrl, // Same DPRM link - has grievance section
    },
    {
      step: 4,
      description: `Contact the DPO of ${dfName} – Click`,
      link: process.env.DATA_FIDUCIARY_CONTACT_EMAIL
        ? `mailto:${process.env.DATA_FIDUCIARY_CONTACT_EMAIL}`
        : undefined,
    },
  ];
}
