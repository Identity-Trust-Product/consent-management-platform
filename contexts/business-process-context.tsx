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

export interface BusinessProcessFormData {
  name: string;
  code: string;
  businessUnitId: number;
  grantDescription: string;
  revokeDescription?: string;
  reconsentDescription?: string;
}

export interface BusinessProcessState {
  step1Data: BusinessProcessFormData | null;
  step2Data: Record<string, any>;
  step3Data: Record<string, any>;
  step4Data: Record<string, any>;
  consentPurposes: any[];
  eulas: Array<{
    id: number;
    title: string;
    link: string;
  }>;
  baseline: BusinessProcessState | null; // For breaking change detection
}

export type BusinessProcessAction =
  | { type: "SET_STEP1_DATA"; payload: BusinessProcessFormData }
  | { type: "SET_STEP2_DATA"; payload: Record<string, any> }
  | { type: "SET_STEP3_DATA"; payload: Record<string, any> }
  | { type: "SET_STEP4_DATA"; payload: Record<string, any> }
  | { type: "UPDATE_FIELD"; field: string; value: any }
  | { type: "ADD_EULA"; payload: { title: string; link: string } }
  | {
      type: "UPDATE_EULA";
      payload: { id: number; title: string; link: string };
    }
  | { type: "DELETE_EULA"; payload: number }
  | { type: "SET_BASELINE"; payload: BusinessProcessState }
  | { type: "INITIALIZE_FROM_EXISTING"; payload: any }
  | { type: "RESET" };

const initialState: BusinessProcessState = {
  step1Data: null,
  step2Data: {},
  step3Data: {},
  step4Data: {},
  consentPurposes: [],
  eulas: [],
  baseline: null,
};

function businessProcessReducer(
  state: BusinessProcessState,
  action: BusinessProcessAction,
): BusinessProcessState {
  let newState: BusinessProcessState;
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
    case "UPDATE_FIELD":
      newState = { ...state, [action.field]: action.value };
      break;
    case "ADD_EULA":
      newState = {
        ...state,
        eulas: [
          ...state.eulas,
          {
            id: Date.now(),
            title: action.payload.title,
            link: action.payload.link,
          },
        ],
      };
      break;
    case "UPDATE_EULA":
      newState = {
        ...state,
        eulas: state.eulas.map((eula) =>
          eula.id === action.payload.id
            ? {
                id: eula.id,
                title: action.payload.title,
                link: action.payload.link,
              }
            : eula,
        ),
      };
      break;
    case "DELETE_EULA":
      newState = {
        ...state,
        eulas: state.eulas.filter((eula) => eula.id !== action.payload),
      };
      break;
    case "INITIALIZE_FROM_EXISTING":
      const { businessProcess, userAttributes = [] } = action.payload;
      if (!businessProcess) return state;

      // Convert the business process data to the state format
      const step1Data: BusinessProcessFormData = {
        name: businessProcess.name || "",
        code: businessProcess.code || "",
        businessUnitId: businessProcess.businessUnitId || 0,
        grantDescription: businessProcess.grantDescription || "",
        revokeDescription: businessProcess.revokeDescription || "",
        reconsentDescription: businessProcess.reconsentDescription || "",
      };

      // Create consent configurations from businessProcessToConsentPurposes
      const consentPurposes =
        businessProcess.businessProcessToConsentPurposes?.map(
          (relation: any, index: number) => {
            // Use the augmented rules attached to the consent purpose from the service
            const rawRules =
              relation.consentPurpose?.businessProcessRules || [];

            const processingRules = rawRules.map((rule: any) => ({
              processingPurposeId: rule.processingPurposeId,
              processingPurposeName:
                rule.processingPurpose?.name ||
                `Processing Purpose ${rule.processingPurposeId}`,
              userAttributes: rule.processingPurpose?.userAttributeNames || [], // Keep as names
              isMandatory: rule.mandatory,
              isReconsentable: rule.reconsentableByPrincipal,
              isRevocable: rule.revocableByPrincipal,
              retentionDurationValue: rule.retentionDurationValue,
              retentionDurationUnit: rule.retentionDurationUnit,
            }));

            // Convert hours back to duration
            let durationType: "until_purpose_met" | "custom_duration" =
              "until_purpose_met";
            let consentDuration: number | undefined;
            let durationUnit:
              | "minutes"
              | "hours"
              | "days"
              | "weeks"
              | "months"
              | "years"
              | undefined;

            if (relation.consentDuration) {
              durationType = "custom_duration";
              if (relation.consentDuration < 1) {
                consentDuration = Math.round(relation.consentDuration * 60);
                durationUnit = "minutes";
              } else if (relation.consentDuration < 24) {
                consentDuration = relation.consentDuration;
                durationUnit = "hours";
              } else {
                consentDuration = Math.round(relation.consentDuration / 24);
                durationUnit = "days";
              }
            }

            return {
              id: index + 1, // Generate a temporary ID for UI purposes
              consentPurposeId: relation.consentPurposeId,
              consentPurposeName:
                relation.consentPurpose?.name ||
                `Consent Purpose ${relation.consentPurposeId}`,
              consentPurpose: relation.consentPurpose,
              durationType,
              consentDuration,
              durationUnit,
              processingRules,
            };
          },
        ) || [];

      // Convert legal documents to EULAs
      const eulas: Array<{ id: number; title: string; link: string }> = [];
      if (
        businessProcess.legalDocuments &&
        typeof businessProcess.legalDocuments === "object"
      ) {
        Object.entries(businessProcess.legalDocuments).forEach(
          ([title, link], index) => {
            if (typeof link === "string") {
              eulas.push({
                id: index + 1,
                title,
                link,
              });
            }
          },
        );
      }

      const newStateFromInit = {
        ...state,
        // Set step1Data from business process (or keep existing if user modified)
        step1Data: state.step1Data || step1Data,
        // Only overwrite consentPurposes if not already set (preserve user changes from Step 2)
        consentPurposes:
          state.consentPurposes.length > 0
            ? state.consentPurposes
            : consentPurposes,
        // Only overwrite eulas if not already set (preserve user changes from Step 3)
        eulas: state.eulas.length > 0 ? state.eulas : eulas,
      };
      return newStateFromInit;
    case "RESET":
      newState = initialState;
      break;
    default:
      newState = state;
  }
  return newState;
}

export const BusinessProcessContext = createContext<{
  state: BusinessProcessState;
  dispatch: React.Dispatch<BusinessProcessAction>;
} | null>(null);

interface BusinessProcessProviderProps {
  children: ReactNode;
  initialData?: any;
  userAttributes?: any[];
}

export function BusinessProcessProvider({
  children,
  initialData,
  userAttributes,
}: BusinessProcessProviderProps) {
  const [state, dispatch] = useReducer(businessProcessReducer, initialState);

  // Track if we've already initialized to prevent re-initialization on navigation
  const initializedRef = React.useRef(false);

  // Initialize state from existing data on mount ONLY ONCE
  React.useEffect(() => {
    if (initialData && !initializedRef.current) {
      initializedRef.current = true;
      dispatch({
        type: "INITIALIZE_FROM_EXISTING",
        payload: {
          businessProcess: initialData,
          userAttributes: userAttributes || [],
        },
      });
    }
  }, [initialData, userAttributes]); // Keep dependencies but use ref to prevent re-init

  return (
    <BusinessProcessContext.Provider value={{ state, dispatch }}>
      {children}
    </BusinessProcessContext.Provider>
  );
}

export function useBusinessProcessContext() {
  const context = React.useContext(BusinessProcessContext);
  if (!context) {
    throw new Error(
      "useBusinessProcessContext must be used within BusinessProcessProvider",
    );
  }
  return context;
}
