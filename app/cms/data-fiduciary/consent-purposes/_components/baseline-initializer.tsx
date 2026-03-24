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

import { useEffect, useRef } from "react";
import { useConsentPurposeForm } from "@/contexts/consent-purpose-context";

interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
}

interface BaselineInitializerProps {
  data: StepData;
  isEdit: boolean;
}

export function BaselineInitializer({ data, isEdit }: BaselineInitializerProps) {
  const { state, dispatch } = useConsentPurposeForm();
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Only set baseline once when editing an existing CP
    if (isEdit && data.consentPurpose && !hasInitialized.current && !state.baseline) {
      const baselineState = {
        step1Data: {
          name: data.consentPurpose.name,
          code: data.consentPurpose.code,
          description: data.consentPurpose.description || "",
        },
        step2Data: {
          existing: (data.processingPurposes || []).map((pp: any) => ({
            id: pp.id,
            tempId: undefined, // Existing PPs don't have tempIds
            name: pp.name,
            description: pp.description || "",
            purposeOfProcessingId: pp.purposeOfProcessingId,
            purposeOfProcessingCode: pp.purposeOfProcessing?.code || "",
            userAttributeNames: pp.userAttributeNames || [],
            status: pp.status,
            translations: pp.translations || {}, // Include translations from database
          })),
          new: [],
          modified: [],
          deleted: [],
        },
        step3Data: {
          existing: (data.dataProcessorMappings || []).map((dpm: any) => ({
            id: dpm.id,
            dataProcessorId: dpm.dataProcessorId,
            userAttributeNames: dpm.userAttributeNames || [],
            processingPurposeRef: dpm.processingPurposeId.toString(), // Use ID as ref for existing mappings
            status: dpm.status,
          })),
          new: [],
          modified: [],
          deleted: [],
        },
        step4Data: {
          cpTranslations: {},
          ppTranslations: {},
        },
      };

      dispatch({
        type: "SET_BASELINE",
        payload: baselineState,
      });

      hasInitialized.current = true;
    }
  }, [isEdit, data, dispatch, state.baseline]);

  return null; // This component doesn't render anything
}
