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

export interface ConsentPurposeFormData {
  name: string;
  code: string;
  description: string;
}

export interface ProcessingPurposeFormData {
  id?: number;
  name: string;
  purposeOfProcessingId: number;
  userAttributeNames: string[];
  status: "draft" | "published";
}

export interface DataProcessorMappingFormData {
  id?: number;
  dataProcessorId: string;
  userAttributeNames: string[];
  processingPurposeId: number;
  status: "draft" | "published";
}

export interface ConsentPurposeState {
  step1Data: ConsentPurposeFormData | null;
  step2Data: {
    existing: ProcessingPurposeFormData[];
    new: ProcessingPurposeFormData[];
    modified: ProcessingPurposeFormData[];
    deleted: number[];
  };
  step3Data: {
    existing: DataProcessorMappingFormData[];
    new: DataProcessorMappingFormData[];
    modified: DataProcessorMappingFormData[];
    deleted: number[];
  };
  step4Data: Record<string, any>; // For future general settings
}

export interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
  userAttributes?: any[];
  purposesOfProcessing?: any[];
  dataProcessors?: any[];
}

export type ConsentPurposeAction =
  | { type: "SET_STEP1_DATA"; payload: ConsentPurposeFormData }
  | { type: "SET_STEP2_DATA"; payload: ConsentPurposeState["step2Data"] }
  | { type: "SET_STEP3_DATA"; payload: ConsentPurposeState["step3Data"] }
  | { type: "SET_STEP4_DATA"; payload: Record<string, any> }
  | { type: "RESET" };
