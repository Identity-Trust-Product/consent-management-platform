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

// types.ts

export interface TimelineEvent {
  id: string;
  date: string;
  type: "GRANTED" | "REVOKED" | "UPDATED" | "EXPIRED" | "NOTICE";
  dataPrincipal: string;
  serviceName: string;
  count: number;
  details: {
    sections: TimelineSection[];
  };
}

export interface TimelineSection {
  title: string;
  description?: string;
  consentPurposeName?: string;
  isEssential: boolean;
  attributes: { name: string; status: string }[];
  changes?: { summaryText: string[] };
}

export interface ConsentHistoryRow {
  consentId: string;
  referenceId: string;
  dataPrincipalId: string;
  consentedAt: string;
  purposeOfProcessing: string;
  purposeCode: string;
  userAttributes: string;
  status: string;
}

export interface FilterOption {
  label: string;
  value: string;
  description?: string; // <--- ADDED: To hold the ID/Code
}

export interface ReceiptOption {
  referenceId: string;
  dataPrincipalId: string;
  processCode: string;
  version: number;
  lastUpdated: string; // useful for display
}

export interface HistoryResponse {
  events: TimelineEvent[];
  tableData: ConsentHistoryRow[];
  referenceId: string;
  dropdownOptions: FilterOption[];
  bpOptions: FilterOption[];
  receiptOptions: ReceiptOption[]; // <--- NEW FIELD
}
