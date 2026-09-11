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
import { useBusinessProcessContext } from "@/contexts/business-process-context";

interface BaselineInitializerProps {
  data: any;
  isEdit: boolean;
  businessProcessId?: string;
}

/**
 * Baseline Initializer Component
 *
 * Sets the baseline state when editing an existing business process.
 * The baseline is used for breaking change detection.
 * Only runs once on mount.
 */
export function BaselineInitializer({
  data,
  isEdit,
}: BaselineInitializerProps) {
  const { state, dispatch } = useBusinessProcessContext();
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Only set baseline once when editing an existing BP
    if (
      isEdit &&
      data.businessProcess &&
      !hasInitialized.current &&
      !state.baseline
    ) {
      const { businessProcess } = data;

      // Prepare step1Data
      const step1Data = {
        name: businessProcess.name || "",
        code: businessProcess.code || "",
        businessUnitId: businessProcess.businessUnitId || 0,
        grantDescription: businessProcess.grantDescription || "",
        revokeDescription: businessProcess.revokeDescription || "",
        reconsentDescription: businessProcess.reconsentDescription || "",
      };

      const consentPurposes =
        businessProcess.businessProcessToConsentPurposes?.map(
          (relation: any, index: number) => {
            // Use the augmented rules attached to the consent purpose from the service
            const rawRules =
              relation.consentPurpose?.businessProcessRules || [];

            const processingRules = rawRules.map((rule: any) => ({
              processingPurposeId: rule.processingPurposeId,
              userAttributes: rule.processingPurpose?.userAttributeNames || [], // Use 'userAttributes' to match context
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
              id: index + 1,
              consentPurposeId: relation.consentPurposeId,
              durationType,
              consentDuration,
              durationUnit,
              processingRules,
            };
          },
        ) || [];

      // Prepare eulas
      const eulas = Object.entries(businessProcess.legalDocuments || {}).map(
        ([title, link], index) => ({
          id: index + 1,
          title,
          link: link as string,
        }),
      );

      // Create baseline state
      const baseline = {
        step1Data,
        step2Data: {},
        step3Data: {},
        step4Data: {},
        consentPurposes,
        eulas,
        baseline: null, // baseline doesn't have its own baseline
      };

      // Set baseline in context
      dispatch({
        type: "SET_BASELINE",
        payload: baseline,
      });

      hasInitialized.current = true;
    }
  }, [isEdit, data, dispatch, state.baseline]);

  // This component doesn't render anything
  return null;
}
