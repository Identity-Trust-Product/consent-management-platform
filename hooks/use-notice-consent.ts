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

import { useState, useCallback, useMemo } from "react";
import {
  NoticeData,
  ConsentSelection,
  SelectionState,
} from "@/components/notice/types";

export function useNoticeConsent(notice: NoticeData) {
  // Get consent purposes safely (should always be available after view mode processing)
  const consentPurposes = notice.businessProcess.consentPurposes || [];

  // Initialize consent selections
  const [consentSelections, setConsentSelections] = useState<{
    [consentPurposeId: number]: ConsentSelection;
  }>(() => {
    const initial: { [consentPurposeId: number]: ConsentSelection } = {};
    consentPurposes.forEach((cp) => {
      const processingPurposes: { [processingPurposeId: number]: boolean } = {};
      cp.processingPurposes.forEach((pp) => {
        // Mandatory processing purposes should be selected by default
        processingPurposes[pp.id] = pp.mandatory;
      });

      // If any processing purposes are mandatory, the consent purpose should be selected
      const hasMandatoryProcessingPurposes = cp.processingPurposes.some(
        (pp) => pp.mandatory
      );

      initial[cp.id] = {
        consentPurposeId: cp.id,
        selected: hasMandatoryProcessingPurposes,
        processingPurposes,
      };
    });
    return initial;
  });

  // Calculate overall selection state
  const overallSelectionState: SelectionState = useMemo(() => {
    // Count total processing purposes and selected processing purposes
    let totalProcessingPurposes = 0;
    let selectedProcessingPurposes = 0;

    Object.values(consentSelections).forEach((selection) => {
      const ppValues = Object.values(selection.processingPurposes);
      totalProcessingPurposes += ppValues.length;
      selectedProcessingPurposes += ppValues.filter(Boolean).length;
    });

    if (selectedProcessingPurposes === 0) return "none";
    if (selectedProcessingPurposes === totalProcessingPurposes) return "all";
    return "partial";
  }, [consentSelections]);

  // Calculate consent purpose selection state
  const getConsentPurposeSelectionState = useCallback(
    (consentPurposeId: number): SelectionState => {
      const selection = consentSelections[consentPurposeId];
      if (!selection) return "none";

      const processingPurposes = Object.values(selection.processingPurposes);
      const selectedCount = processingPurposes.filter(Boolean).length;

      if (selectedCount === 0) return "none";
      if (selectedCount === processingPurposes.length) return "all";
      return "partial";
    },
    [consentSelections]
  );

  // Calculate processing purpose selection state
  const getProcessingPurposeSelectionState = useCallback(
    (processingPurposeId: number): SelectionState => {
      // Find the consent purpose that contains this processing purpose
      for (const selection of Object.values(consentSelections)) {
        if (selection.processingPurposes[processingPurposeId] !== undefined) {
          return selection.processingPurposes[processingPurposeId]
            ? "all"
            : "none";
        }
      }
      return "none";
    },
    [consentSelections]
  );

  // Handle select all toggle
  const handleSelectAll = useCallback(() => {
    const shouldSelectAll = overallSelectionState !== "all";

    setConsentSelections((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((cpId) => {
        const consentPurposeId = parseInt(cpId);

        // Find the consent purpose data to check for mandatory processing purposes
        const consentPurpose = consentPurposes.find(
          (cp) => cp.id === consentPurposeId
        );

        const processingPurposes = Object.keys(
          updated[consentPurposeId].processingPurposes
        ).reduce((acc, ppId) => {
          const processingPurposeId = parseInt(ppId);
          const processingPurpose = consentPurpose?.processingPurposes.find(
            (pp) => pp.id === processingPurposeId
          );

          // Keep mandatory processing purposes selected, toggle others
          acc[processingPurposeId] =
            processingPurpose?.mandatory || shouldSelectAll;
          return acc;
        }, {} as { [processingPurposeId: number]: boolean });

        // Check if any processing purposes are selected
        const hasSelectedProcessingPurposes =
          Object.values(processingPurposes).some(Boolean);

        updated[consentPurposeId] = {
          ...updated[consentPurposeId],
          selected: hasSelectedProcessingPurposes,
          processingPurposes,
        };
      });
      return updated;
    });
  }, [overallSelectionState, consentPurposes]);

  // Handle consent purpose selection
  const handleConsentPurposeChange = useCallback(
    (consentPurposeId: number, selected: boolean) => {
      // Find the consent purpose data to check for mandatory processing purposes
      const consentPurpose = consentPurposes.find(
        (cp) => cp.id === consentPurposeId
      );

      setConsentSelections((prev) => {
        const processingPurposes = Object.keys(
          prev[consentPurposeId].processingPurposes
        ).reduce((acc, ppId) => {
          const processingPurposeId = parseInt(ppId);
          const processingPurpose = consentPurpose?.processingPurposes.find(
            (pp) => pp.id === processingPurposeId
          );

          // Keep mandatory processing purposes selected, set others based on selection
          acc[processingPurposeId] = processingPurpose?.mandatory || selected;
          return acc;
        }, {} as { [processingPurposeId: number]: boolean });

        // Check if any processing purposes are selected
        const hasSelectedProcessingPurposes =
          Object.values(processingPurposes).some(Boolean);

        return {
          ...prev,
          [consentPurposeId]: {
            ...prev[consentPurposeId],
            selected: hasSelectedProcessingPurposes,
            processingPurposes,
          },
        };
      });
    },
    [consentPurposes]
  );

  // Handle processing purpose selection
  const handleProcessingPurposeChange = useCallback(
    (
      consentPurposeId: number,
      processingPurposeId: number,
      selected: boolean
    ) => {
      // Find the processing purpose data to check if it's mandatory
      const consentPurpose = consentPurposes.find(
        (cp) => cp.id === consentPurposeId
      );
      const processingPurpose = consentPurpose?.processingPurposes.find(
        (pp) => pp.id === processingPurposeId
      );

      // Prevent unselecting mandatory processing purposes
      if (processingPurpose?.mandatory && !selected) {
        return;
      }

      setConsentSelections((prev) => {
        const updated = {
          ...prev,
          [consentPurposeId]: {
            ...prev[consentPurposeId],
            processingPurposes: {
              ...prev[consentPurposeId].processingPurposes,
              [processingPurposeId]: selected,
            },
          },
        };

        // Update consent purpose selection based on processing purposes
        const processingPurposes = Object.values(
          updated[consentPurposeId].processingPurposes
        );
        const selectedCount = processingPurposes.filter(Boolean).length;
        updated[consentPurposeId].selected = selectedCount > 0;

        return updated;
      });
    },
    [consentPurposes]
  );

  // Get selected consents (legacy format)
  const getSelectedConsents = useCallback(() => {
    return Object.values(consentSelections).filter((s) => s.selected);
  }, [consentSelections]);

  // Get selected business process rules (new format)
  const getSelectedRules = useCallback(() => {
    const selectedRules: { ruleId: number; selected: boolean }[] = [];

    // Convert consent-based selections to rule-based selections
    Object.values(consentSelections).forEach((consentSelection) => {
      Object.entries(consentSelection.processingPurposes).forEach(
        ([processingPurposeId, selected]) => {
          // Find the corresponding rule
          const rule = notice.businessProcess.businessProcessRules.find(
            (r) =>
              r.consentPurposeId === consentSelection.consentPurposeId &&
              r.processingPurposeId === parseInt(processingPurposeId)
          );

          if (rule) {
            selectedRules.push({
              ruleId: rule.id,
              selected: selected,
            });
          }
        }
      );
    });

    return selectedRules;
  }, [consentSelections, notice.businessProcess.businessProcessRules]);

  // Check if at least one selection is made
  const hasSelections = useMemo(
    () => Object.values(consentSelections).some((s) => s.selected),
    [consentSelections]
  );

  // Check if a consent purpose should be disabled (all processing purposes are mandatory)
  const isConsentPurposeDisabled = useCallback(
    (consentPurposeId: number): boolean => {
      const consentPurpose = consentPurposes.find(
        (cp) => cp.id === consentPurposeId
      );

      if (!consentPurpose || consentPurpose.processingPurposes.length === 0) {
        return false;
      }

      // Consent purpose is disabled if ALL its processing purposes are mandatory
      return consentPurpose.processingPurposes.every((pp) => pp.mandatory);
    },
    [consentPurposes]
  );

  // Check if the overall select all should be disabled (all processing purposes across all consent purposes are mandatory)
  const isOverallSelectDisabled = useMemo(() => {
    const allProcessingPurposes = consentPurposes.flatMap(
      (cp) => cp.processingPurposes
    );
    return (
      allProcessingPurposes.length > 0 &&
      allProcessingPurposes.every((pp) => pp.mandatory)
    );
  }, [consentPurposes]);

  return {
    overallSelectionState,
    getConsentPurposeSelectionState,
    getProcessingPurposeSelectionState,
    hasSelections,
    handleSelectAll,
    handleConsentPurposeChange,
    handleProcessingPurposeChange,
    getSelectedConsents,
    getSelectedRules, // New function for rule-based selections
    isConsentPurposeDisabled,
    isOverallSelectDisabled,
  };
}
