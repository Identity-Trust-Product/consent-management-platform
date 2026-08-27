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

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { Info, Plus } from "lucide-react";
import { AddConsentPurposeDialog } from "./dialogs/add-consent-purpose-dialog";
import { ActionButtonsGroup } from "@/components/ui/action-buttons";
import { useBusinessProcessContext } from "@/contexts/business-process-context";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface StepData {
  businessProcess?: any;
  businessUnits?: any[];
  consentPurposes?: any[];
  dataProcessors?: any[];
  userAttributes?: any[];
}

interface Step2FormProps {
  data: StepData;
  isEdit: boolean;
  businessProcessId?: string;
}

interface ConsentPurposeConfig {
  id: number;
  consentPurposeId: number;
  consentPurposeName: string;
  consentPurpose: {
    hasNewerVersion: boolean;
  };
  durationType: "until_purpose_met" | "custom_duration";

  // VVV --- FIX 1: Add missing property to interface --- VVV
  hasNewerVersion: boolean;
  // ^^^ --- END OF FIX 1 --- ^^^

  consentDuration?: number;
  durationUnit?: "days" | "weeks" | "months" | "years";
  processingRules: Array<{
    processingPurposeId: number;
    processingPurposeName: string;
    userAttributes: string[]; // Store as names
    isMandatory: boolean;
    isReconsentable: boolean;
    isRevocable: boolean;
    retentionDurationValue?: number;
    retentionDurationUnit?: string;
  }>;
}

export function Step2Form({ data, isEdit, businessProcessId }: Step2FormProps) {
  const router = useRouter();
  const { state, dispatch } = useBusinessProcessContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingConsent, setEditingConsent] =
    useState<ConsentPurposeConfig | null>(null);

  // Get configured consent purposes from context
  const consentConfigs = state.consentPurposes || [];

  const handleAddConsent = (consentData: any) => {
    // Check if consent purpose already exists to prevent duplicates
    const exists = consentConfigs.some(
      (config: ConsentPurposeConfig) =>
        config.consentPurposeId === consentData.consentPurposeId
    );

    if (exists) {
      console.warn(
        "[Step2Form] Consent purpose already exists, skipping duplicate"
      );
      setDialogOpen(false);
      return;
    }

    // Convert ConsentPurposeData to ConsentPurposeConfig
    const consentPurpose = data.consentPurposes?.find(
      (cp) => cp.id === consentData.consentPurposeId
    );

    const consentConfig: ConsentPurposeConfig = {
      id: Date.now(),
      consentPurposeId: consentData.consentPurposeId,
      consentPurpose: {
        hasNewerVersion: consentData.hasNewerVersion || false,
      },

      // VVV --- FIX 2: Add missing property to object --- VVV
      hasNewerVersion: consentData.hasNewerVersion || false,
      // ^^^ --- END OF FIX 2 --- ^^^

      consentPurposeName:
        consentPurpose?.name ||
        `Consent Purpose ${consentData.consentPurposeId}`,
      durationType: consentData.durationType,
      consentDuration: consentData.consentDuration,
      durationUnit: consentData.durationUnit,
      processingRules: consentData.processingRules.map((rule: any) => ({
        processingPurposeId: rule.processingPurposeId,
        processingPurposeName: getProcessingPurposeName(
          rule.processingPurposeId
        ),
        userAttributes: rule.userAttributeNames, // Store as names
        isMandatory: rule.mandatory,
        isReconsentable: rule.reconsentableByPrincipal,
        isRevocable: rule.revocableByPrincipal,
        retentionDurationValue: rule.retentionDurationValue,
        retentionDurationUnit: rule.retentionDurationUnit,
      })),
    };

    dispatch({
      type: "UPDATE_FIELD",
      field: "consentPurposes",
      value: [...consentConfigs, consentConfig],
    });

    setDialogOpen(false);
  };

  const handleEditConsent = (consentData: any) => {
    if (!editingConsent) return;

    const consentPurpose = data.consentPurposes?.find(
      (cp) => cp.id === consentData.consentPurposeId
    );

    const updatedConfig: ConsentPurposeConfig = {
      ...editingConsent,
      consentPurposeId: consentData.consentPurposeId,
      // This line was correct and now matches the updated interface
      hasNewerVersion: consentData.hasNewerVersion || false,
      consentPurposeName:
        consentPurpose?.name ||
        `Consent Purpose ${consentData.consentPurposeId}`,
      durationType: consentData.durationType,
      consentDuration: consentData.consentDuration,
      durationUnit: consentData.durationUnit,
      processingRules: consentData.processingRules.map((rule: any) => ({
        processingPurposeId: rule.processingPurposeId,
        processingPurposeName: getProcessingPurposeName(
          rule.processingPurposeId
        ),
        userAttributes: rule.userAttributeNames, // Store as names
        isMandatory: rule.mandatory,
        isReconsentable: rule.reconsentableByPrincipal,
        isRevocable: rule.revocableByPrincipal,
        retentionDurationValue: rule.retentionDurationValue,
        retentionDurationUnit: rule.retentionDurationUnit,
      })),
    };

    const updatedConfigs = consentConfigs.map((config: ConsentPurposeConfig) =>
      config.id === editingConsent.id ? updatedConfig : config
    );

    dispatch({
      type: "UPDATE_FIELD",
      field: "consentPurposes",
      value: updatedConfigs,
    });

    setEditingConsent(null);
    setDialogOpen(false);
  };

  const handleDeleteConsent = (id: number) => {
    const updatedConfigs = consentConfigs.filter(
      (config: ConsentPurposeConfig) => config.id !== id
    );

    dispatch({
      type: "UPDATE_FIELD",
      field: "consentPurposes",
      value: updatedConfigs,
    });
  };

  const openEditDialog = (consent: ConsentPurposeConfig) => {
    setEditingConsent(consent);
    setDialogOpen(true);
  };

  const convertToEditData = (config: ConsentPurposeConfig | null) => {
    if (!config) return null;

    return {
      consentPurpose: {
        hasNewerVersion: config.hasNewerVersion || false,
      },
      consentPurposeId: config.consentPurposeId,
      durationType: config.durationType,
      consentDuration: config.consentDuration,
      durationUnit: config.durationUnit,
      processingRules: config.processingRules.map((rule) => ({
        processingPurposeId: rule.processingPurposeId,
        userAttributeNames: rule.userAttributes, // Already names, no conversion needed
        mandatory: rule.isMandatory,
        reconsentableByPrincipal: rule.isReconsentable,
        revocableByPrincipal: rule.isRevocable,
        retentionDurationValue: rule.retentionDurationValue,
        retentionDurationUnit: rule.retentionDurationUnit,
      })),
    };
  };

  const getUserAttributeName = (id: number) => {
    const attribute = data.userAttributes?.find((attr) => attr.id === id);
    return attribute?.name || `Attribute ${id}`;
  };

  const getUserAttributeId = (name: string) => {
    const attribute = data.userAttributes?.find((attr) => attr.name === name);
    return attribute?.id;
  };

  const getProcessingPurposeName = (id: number) => {
    for (const consentPurpose of data.consentPurposes || []) {
      const processingPurpose = consentPurpose.processingPurposes?.find(
        (pp: any) => pp.id === id
      );
      if (processingPurpose) {
        return processingPurpose.name;
      }
    }
    return `Processing Purpose ${id}`;
  };

  const convertDurationToDays = (config: ConsentPurposeConfig) => {
    if (config.durationType === "until_purpose_met") {
      return "Until purpose met";
    }

    const duration = config.consentDuration || 0;
    const unit = config.durationUnit || "days";

    let totalDays = duration;
    switch (unit) {
      case "weeks":
        totalDays = duration * 7;
        break;
      case "months":
        totalDays = duration * 30; // approximate
        break;
      case "years":
        totalDays = duration * 365; // approximate
        break;
      default:
        totalDays = duration;
    }

    return `${totalDays} days`;
  };

  const handleNext = () => {
    // Get step 1 data from context
    const step1Data = state.step1Data;

    if (!step1Data) {
      console.error("Step 1 data not found in context!");
      toast.error("Please complete Step 1 first");
      return;
    }

    if (consentConfigs.length === 0) {
      console.error("No consent purposes configured!");
      toast.error("Please add at least one consent purpose");
      return;
    }

    // Save consent purposes to context (already saved via dispatch in add/edit/delete handlers)
    // No DB operations here - everything happens in Step 6

    // Navigate to next step
    const params = new URLSearchParams();
    params.set("step", "3");
    if (businessProcessId) {
      params.set("id", businessProcessId);
    }

    const basePath =
      isEdit && businessProcessId
        ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit`
        : `/cms/data-fiduciary/business-processes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const handleCancel = () => {
    router.push("/cms/data-fiduciary/business-processes");
  };

  return (
    // Wrap your component in TooltipProvider (ideally at a higher level)
    <TooltipProvider>
      <div className="h-full flex flex-col">
        {/* Header - Fixed */}
        <div className="border-b px-6 py-5 flex-shrink-0">
          <h2 className="text-2xl font-bold tracking-tight">
            Step 2. Configure Consent
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-6">
            {/* Add Consent Purpose Button */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">Consent Purposes</h3>
                <p className="text-sm text-muted-foreground">
                  Configure consent purposes and their processing rules
                </p>
              </div>
              {consentConfigs.length > 0 && (
                <Button
                  onClick={() => {
                    setEditingConsent(null);
                    setDialogOpen(true);
                  }}
                  className="group"
                >
                  <Plus className="h-4 w-4 group-hover:scale-125 transition-transform" />
                  Add Consent Purpose
                </Button>
              )}
            </div>

            {/* Consent Purposes List */}
            {consentConfigs.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <h4 className="text-lg font-medium text-muted-foreground">
                      No consent purposes configured
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Add a consent purpose to start configuring processing
                      rules
                    </p>
                    <Button
                      className="mt-4 group"
                      onClick={() => {
                        setEditingConsent(null);
                        setDialogOpen(true);
                      }}
                    >
                      <Plus className="h-4 w-4 group-hover:scale-125 transition-transform" />
                      Add a Purpose Master
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="border rounded-lg">
                <Table>
                  <TableHeader className="bg-muted">
                    <TableRow>
                      <TableHead className="whitespace-normal">Purpose Master</TableHead>
                      <TableHead className="whitespace-normal">Consent Duration</TableHead>
                      <TableHead className="whitespace-normal">Purpose of Processing</TableHead>
                      <TableHead className="whitespace-normal">Attributes</TableHead>
                      <TableHead className="text-center whitespace-normal">Mandatory</TableHead>
                      <TableHead className="text-center whitespace-normal">
                        Re-consentable by Principal
                      </TableHead>
                      <TableHead className="text-center whitespace-normal border-r py-2">Revocable by Principal</TableHead>
                      <TableHead className="whitespace-normal">Retention Duration</TableHead>
                      <TableHead className="text-center whitespace-normal">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {consentConfigs.map((config: ConsentPurposeConfig) => {
                      const rules = config.processingRules || [];

                      // If no processing rules, show one row with a message
                      if (rules.length === 0) {
                        return (
                          <TableRow key={`${config.id}-empty`}>
                            <TableCell className="font-medium border-r">
                              <div className="flex items-center gap-2">
                                <span>{config.consentPurposeName}</span>

                                {/* Conditionally render the icon and tooltip */}
                                {config.consentPurpose.hasNewerVersion && (
                                  <Tooltip>
                                    <TooltipTrigger>
                                      {/* You can style the icon's color, size, etc. */}
                                      <Info className="h-4 w-4 text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>A newer version is available.</p>
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                            </TableCell>
                            <TableCell className="border-r">
                              {convertDurationToDays(config)}
                            </TableCell>
                            <TableCell
                              className="font-medium text-muted-foreground"
                              colSpan={4}
                            >
                              No processing rules configured
                            </TableCell>
                            <TableCell className="text-center border-l">
                              <ActionButtonsGroup
                                onEdit={() => openEditDialog(config)}
                                onDelete={() => handleDeleteConsent(config.id)}
                                className="justify-center gap-1"
                              />
                            </TableCell>
                          </TableRow>
                        );
                      }

                      // Normal rendering with processing rules
                      return rules.map((rule, ruleIndex) => (
                        <TableRow key={`${config.id}-${ruleIndex}`}>
                          {ruleIndex === 0 && (
                            <TableCell
                              rowSpan={rules.length}
                              className="font-medium border-r"
                            >
                              <div className="flex items-center gap-2">
                                <span>{config.consentPurposeName}</span>

                                {/* Conditionally render the icon and tooltip */}
                                {config.consentPurpose.hasNewerVersion && (
                                  <Tooltip>
                                    <TooltipTrigger>
                                      {/* You can style the icon's color, size, etc. */}
                                      <Info className="h-4 w-4 text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>A newer version is available.</p>
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                            </TableCell>
                          )}
                          {ruleIndex === 0 && (
                            <TableCell
                              rowSpan={rules.length}
                              className="border-r"
                            >
                              {convertDurationToDays(config)}
                            </TableCell>
                          )}
                          <TableCell className="font-medium border-r">
                            {rule.processingPurposeName}
                          </TableCell>
                          <TableCell className="border-r">
                            <div className="flex flex-wrap gap-1">
                              {(rule.userAttributes || []).map(
                                (attrName: string, i: number) => (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {attrName}
                                  </Badge>
                                )
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <Checkbox checked={rule.isMandatory} disabled />
                          </TableCell>
                          <TableCell className="text-center">
                            <Checkbox checked={rule.isReconsentable} disabled />
                          </TableCell>
                          <TableCell className="text-center border-r">
                            <Checkbox checked={rule.isRevocable} disabled />
                          </TableCell>
                          <TableCell>
                            {rule.retentionDurationValue &&
                              rule.retentionDurationUnit
                              ? `${rule.retentionDurationValue} ${rule.retentionDurationUnit}`
                              : "-"}
                          </TableCell>
                          {ruleIndex === 0 && (
                            <TableCell
                              rowSpan={rules.length}
                              className="text-center border-l"
                            >
                              <ActionButtonsGroup
                                onEdit={() => openEditDialog(config)}
                                onDelete={() => handleDeleteConsent(config.id)}
                                className="justify-center gap-1"
                              />
                            </TableCell>
                          )}
                        </TableRow>
                      ));
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Bottom Buttons */}
        <div className="flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0">
          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="min-w-[100px]"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              className="min-w-[120px]"
              disabled={consentConfigs.length === 0}
            >
              Next
            </Button>
          </div>
        </div>

        {/* Add Consent Purpose Dialog */}
        <AddConsentPurposeDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          onSave={editingConsent ? handleEditConsent : handleAddConsent}
          editData={convertToEditData(editingConsent)}
          consentPurposes={data.consentPurposes || []}
          userAttributes={data.userAttributes || []}
          isEdit={!!editingConsent}
          existingConsentConfigs={state.consentPurposes || []}
        />
      </div>
    </TooltipProvider>
  );
}
