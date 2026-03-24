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

// FILE: app/consent-wallet/types.ts

import {
  Consent,
  BusinessProcess,
  BusinessProcessRule,
  ProcessingPurpose,
  PurposeOfProcessing,
  ConsentPurpose,
  ProcessingPurposeToDataProcessor,
  DataProcessor,
} from "@prisma/client";

// --- Database Relation Types ---
// Updated to include Data Processors deep nested relation
export type ConsentWithRelations = Consent & {
  businessProcess: BusinessProcess;
  businessProcessRule: BusinessProcessRule & {
    processingPurpose: ProcessingPurpose & {
      purposeOfProcessing: PurposeOfProcessing;
      processingPurposeToDataProcessors: (ProcessingPurposeToDataProcessor & {
        dataProcessor: DataProcessor;
      })[];
    };
    consentPurpose: ConsentPurpose;
  };
  consentPurpose: ConsentPurpose;
  processingPurpose: ProcessingPurpose & {
    purposeOfProcessing: PurposeOfProcessing;
    processingPurposeToDataProcessors: (ProcessingPurposeToDataProcessor & {
      dataProcessor: DataProcessor;
    })[];
  };
  versionUpdates: { id: number | string }[];
  successors: Consent[];
  // Add diff optional property for UI logic
  diff?: any;
};

// ... (Keep the rest of your existing types: TimelineEventType, TimelineEvent, etc.)
export type TimelineEventType = "GRANTED" | "UPDATED" | "REVOKED" | "EXPIRED";

export interface TimelineAttribute {
  name: string;
  status: "added" | "removed" | "unchanged" | "granted";
}

export interface TimelineSection {
  title: string;
  consentPurposeName?: string;
  description?: string;
  translations?: Record<string, any>;
  consentPurposeTranslations?: Record<string, any>;
  isEssential?: boolean;
  isOptional?: boolean;
  changes?: {
    summaryText?: string[];
  };
  attributesSummary?: {
    addedCount: number;
    removedCount: number;
  };
  attributes: TimelineAttribute[];
  stats?: {
    total?: number;
  };
}

export interface TimelineEvent {
  id: string;
  date: Date;
  type: TimelineEventType;
  serviceName: string;
  serviceTranslations?: Record<string, any>;
  dataPrincipal: string;
  isMinor?: boolean;
  summary?: string;
  details: {
    sections: TimelineSection[];
  };
}

export interface UpdateConsentPayload {
  selectedProcessingPurposes: string[];
  renewConsents: boolean;
}

export interface BusinessProcessRuleSelection {
  ruleId: number;
  selected: boolean;
}

export interface ConsentCreationResult {
  success: boolean;
  consentsCreated: number;
  consentIds: string[];
  errors?: string[];
}

export type UserAttributeDictionary = Record<
  string,
  {
    name: string;
    translations: Record<string, any>;
  }
>;
