"use client";
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

import React, { useReducer, createContext, ReactNode } from "react";

export interface ConsentPurposeFormData {
  name: string;
  code: string;
  description: string;
}

export interface ProcessingPurposeFormData {
  id?: number; // Only set for existing PPs from database
  tempId?: string; // Temporary ID for new PPs (format: "pop_<popCode>_<timestamp>")
  name: string;
  description: string;
  purposeOfProcessingId: number;
  purposeOfProcessingCode: string; // POP code - used as reference before PP is created
  userAttributeNames: string[];
  status: "draft" | "published";
  translations?: Record<string, { name: string; description: string }>; // Translations from database
}

export interface DataProcessorMappingFormData {
  id?: number; // Only set for existing mappings from database
  dataProcessorId: string;
  userAttributeNames: string[];
  processingPurposeRef: string; // References PP by: id (if exists) OR tempId (for new PPs) OR purposeOfProcessingCode
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
  step4Data: {
    cpTranslations: Record<string, { name: string; description: string }>;
    ppTranslations: Record<string, Record<string, { name: string; description: string }>>; // Key is processingPurposeRef (same as in DataProcessorMappingFormData)
  };
  // Baseline state for detecting breaking changes (set when editing existing CP)
  baseline: ConsentPurposeState | null;
}

export type ConsentPurposeAction =
  | { type: "SET_STEP1_DATA"; payload: ConsentPurposeFormData }
  | { type: "SET_STEP2_DATA"; payload: ConsentPurposeState["step2Data"] }
  | { type: "SET_STEP3_DATA"; payload: ConsentPurposeState["step3Data"] }
  | { type: "SET_STEP4_DATA"; payload: ConsentPurposeState["step4Data"] }
  | { type: "SET_BASELINE"; payload: Omit<ConsentPurposeState, "baseline"> }
  | { type: "RESET" };

const initialState: ConsentPurposeState = {
  step1Data: null,
  step2Data: {
    existing: [],
    new: [],
    modified: [],
    deleted: [],
  },
  step3Data: {
    existing: [],
    new: [],
    modified: [],
    deleted: [],
  },
  step4Data: {
    cpTranslations: {},
    ppTranslations: {},
  },
  baseline: null,
};

function consentPurposeReducer(
  state: ConsentPurposeState,
  action: ConsentPurposeAction
): ConsentPurposeState {
  let newState: ConsentPurposeState;

  switch (action.type) {
    case "SET_STEP1_DATA":
      newState = { ...state, step1Data: action.payload };
      break;
    case "SET_STEP2_DATA":
      newState = { ...state, step2Data: action.payload };
      break;
    case "SET_STEP3_DATA":
      newState = { ...state, step3Data: action.payload };
      break;
    case "SET_STEP4_DATA":
      newState = { ...state, step4Data: action.payload };
      break;
    case "SET_BASELINE":
      newState = { ...state, baseline: { ...action.payload, baseline: null } };
      break;
    case "RESET":
      newState = initialState;
      break;
    default:
      newState = state;
  }

  return newState;
}

export const ConsentPurposeContext = createContext<{
  state: ConsentPurposeState;
  dispatch: React.Dispatch<ConsentPurposeAction>;
} | null>(null);

interface ConsentPurposeProviderProps {
  children: ReactNode;
}

export function ConsentPurposeProvider({
  children,
}: ConsentPurposeProviderProps) {
  const [state, dispatch] = useReducer(consentPurposeReducer, initialState);

  return (
    <ConsentPurposeContext.Provider value={{ state, dispatch }}>
      {children}
    </ConsentPurposeContext.Provider>
  );
}

export function useConsentPurposeForm() {
  const context = React.useContext(ConsentPurposeContext);
  if (!context) {
    throw new Error(
      "useConsentPurposeForm must be used within a ConsentPurposeProvider"
    );
  }
  return context;
}
