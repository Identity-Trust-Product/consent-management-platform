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

export interface NoticeData {
  id: number;
  publicId: string;
  status: string;
  consentDuration?: number | null;
  dataPrincipalId: string;
  defaultLanguage: string;
  noticeConfig?: {
    viewMode?: string;
    attributesDefaultSelection?: string;
  } | null;
  businessProcess: {
    id: number;
    name: string;
    code: string;
    businessUnit: {
      name: string;
    };
    grantDescription: string;
    revokeDescription?: string | null;
    reconsentDescription?: string | null;
    legalDocuments?: Record<string, string>;
    translations?: any;
    supportedLanguages?: string[];
    template?: string; // Notice template: "default" | "processing-purpose-only" | "mandatory-non-mandatory-split"
    businessProcessRules: BusinessProcessRuleData[];
    // Optional: computed structure for backward compatibility
    consentPurposes?: ConsentPurposeData[];
  };
}

export interface BusinessProcessRuleData {
  id: number;
  mandatory: boolean;
  reconsentableByPrincipal: boolean;
  revocableByPrincipal: boolean;
  consentPurposeId: number;
  processingPurposeId: number;
  consentPurpose: ConsentPurposeInfo;
  processingPurpose: ProcessingPurposeInfo;
}

export interface ConsentPurposeInfo {
  id: number;
  name: string;
  code: string;
  description?: string | null;
  consentDuration?: number | null;
  mandatory?: boolean; // Computed from rules
  translations?: any;
  supportedLanguages?: string[];
}

export interface ProcessingPurposeInfo {
  id: number;
  name: string;
  description?: string | null;
  userAttributeNames: string[];
  userAttributes: UserAttributeData[];
  mandatory: boolean; // From the rule
  reconsentableByPrincipal: boolean; // From the rule
  revocableByPrincipal: boolean; // From the rule
  showSelection?: boolean; // UI control
  translations?: any;
  supportedLanguages?: string[];
}

// Legacy interface for backward compatibility
export interface ConsentPurposeData {
  id: number;
  name: string;
  code: string;
  description?: string | null;
  consentDuration?: number | null;
  mandatory?: boolean;
  processingPurposes: ProcessingPurposeData[];
  translations?: any;
  supportedLanguages?: string[];
}

export interface ProcessingPurposeData {
  id: number;
  name: string;
  description?: string | null;
  userAttributeNames: string[];
  userAttributes: UserAttributeData[];
  mandatory: boolean;
  reconsentableByPrincipal: boolean;
  revocableByPrincipal: boolean;
  showSelection?: boolean;
  translations?: any;
  supportedLanguages?: string[];
}

export interface UserAttributeData {
  id: number;
  name: string;
  pii: boolean;
  translations?: any;
  supportedLanguages?: string[];
}

export type SelectionState = "all" | "partial" | "none";

export interface BusinessProcessRuleSelection {
  ruleId: number;
  selected: boolean;
}

export interface ConsentSelection {
  consentPurposeId: number;
  selected: boolean;
  processingPurposes: {
    [processingPurposeId: number]: boolean;
  };
}
