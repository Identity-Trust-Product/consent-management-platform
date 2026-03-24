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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";

export interface ConsentPurposeData {
  consentPurpose: {
    hasNewerVersion: boolean
  },
  consentPurposeId: number;
  durationType: "until_purpose_met" | "custom_duration";
  consentDuration?: number;
  durationUnit?: "days" | "weeks" | "months" | "years";
  processingRules: {
    processingPurposeId: number;
    userAttributeNames: string[];
    mandatory: boolean;
    reconsentableByPrincipal: boolean;
    revocableByPrincipal: boolean;
    retentionDurationValue?: number;
    retentionDurationUnit?: string;
  }[];
}

interface AddConsentPurposeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: ConsentPurposeData) => void;
  consentPurposes: any[];
  editData?: ConsentPurposeData | null;
  isEdit?: boolean;
  userAttributes?: any[];
  existingConsentConfigs?: any[]; // Array of already selected consent purpose configurations
}

export function AddConsentPurposeDialog({
  open,
  onOpenChange,
  onSave,
  consentPurposes,
  editData = null,
  isEdit = false,
  userAttributes = [],
  existingConsentConfigs = [],
}: AddConsentPurposeDialogProps) {
  const [consentPurposeComboboxOpen, setConsentPurposeComboboxOpen] =
    useState(false);
  const [formData, setFormData] = useState<ConsentPurposeData>({
    consentPurposeId: 0,
    durationType: "custom_duration",
    consentDuration: 365,
    durationUnit: "days",
    processingRules: [],
    consentPurpose: {
      hasNewerVersion: false
    }
  });

  // Initialize form data when dialog opens or editData changes
  useEffect(() => {
    if (open) {
      if (isEdit && editData) {
        setFormData(editData);
      } else {
        setFormData({
          consentPurposeId: 0,
          durationType: "custom_duration",
          consentDuration: 365,
          durationUnit: "days",
          processingRules: [],
          consentPurpose: {
            hasNewerVersion: false
          }
        });
      }
    }
  }, [open, isEdit, editData]);

  // Get processing purposes for selected consent purpose
  const selectedConsentPurpose = consentPurposes.find(
    (cp) => cp.id === formData.consentPurposeId
  );
  const processingPurposes = selectedConsentPurpose?.processingPurposes || [];

  // Filter published consent purposes and exclude already selected ones
  const existingConsentPurposeIds = existingConsentConfigs.map(
    (config) => config.consentPurposeId
  );

  // Get codes that are already selected in existing configs
  const existingConsentPurposeCodes = existingConsentConfigs
    .map((config) => {
      const cp = consentPurposes.find((p) => p.id === config.consentPurposeId);
      return cp?.code;
    })
    .filter(Boolean);

  const publishedConsentPurposes = consentPurposes.filter((cp) => {
    // Must be published
    if (cp.status !== "published") return false;

    // If editing, always allow the currently selected consent purpose
    if (isEdit && cp.id === editData?.consentPurposeId) return true;

    // Exclude if this exact ID is already selected
    if (existingConsentPurposeIds.includes(cp.id)) return false;

    // Exclude if another version of this code is already selected
    if (cp.code && existingConsentPurposeCodes.includes(cp.code)) return false;

    return true;
  });

  const handleClose = () => {
    setFormData({
      consentPurposeId: 0,
      durationType: "custom_duration",
      consentDuration: 365,
      durationUnit: "days",
      processingRules: [],
      consentPurpose: {
        hasNewerVersion: false
      }
    });
    setConsentPurposeComboboxOpen(false);
    onOpenChange(false);
  };

  const handleConsentPurposeSelect = (consentPurposeId: number) => {
    const selectedPurpose = consentPurposes.find(
      (cp) => cp.id === consentPurposeId
    );
    const newProcessingRules =
      selectedPurpose?.processingPurposes?.map((pp: any) => ({
        processingPurposeId: pp.id,
        userAttributeNames: pp.userAttributeNames || [],
        mandatory: false,
        reconsentableByPrincipal: false,
        revocableByPrincipal: false,
        retentionDurationValue: 365,
        retentionDurationUnit: "days",
      })) || [];

    setFormData((prev) => ({
      ...prev,
      consentPurposeId,
      processingRules: newProcessingRules,
    }));
    setConsentPurposeComboboxOpen(false);
  };

  const handleProcessingRuleUpdate = (
    processingPurposeId: number,
    field: string,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      processingRules: prev.processingRules.map((rule) => {
        if (rule.processingPurposeId === processingPurposeId) {
          const updatedRule = { ...rule, [field]: value };
          // If mandatory is selected, disable revocable by principal
          if (field === "mandatory" && value) {
            updatedRule.revocableByPrincipal = false;
          }
          return updatedRule;
        }
        return rule;
      }),
    }));
  };

  const handleSave = () => {
    if (formData.consentPurposeId && formData.processingRules.length > 0) {
      onSave(formData);
      handleClose();
    } else {
      console.warn("[Dialog] Save validation failed:", {
        hasConsentPurpose: !!formData.consentPurposeId,
        processingRulesCount: formData.processingRules.length,
      });
    }
  };

  const getUserAttributeName = (id: number) => {
    const attribute = userAttributes.find((attr) => attr.id === id);
    return attribute?.name || `Attribute ${id}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-6xl h-[700px] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>
            {isEdit ? "Edit" : "Add"} Purpose of Consent
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex flex-col space-y-6 overflow-hidden">
          <div className="flex-1 space-y-6 overflow-y-auto pr-2">
            {/* Consent Purpose Selection */}
            <div className="space-y-2">
              <Label>Purpose of Consent</Label>
              {publishedConsentPurposes.length === 0 && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-yellow-800">
                    No published consent purposes available. Please publish
                    consent purposes first before creating business processes.
                  </p>
                </div>
              )}
              <Popover
                open={consentPurposeComboboxOpen}
                onOpenChange={setConsentPurposeComboboxOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={consentPurposeComboboxOpen}
                    className="w-full max-w-lg justify-between"
                    disabled={publishedConsentPurposes.length === 0}
                  >
                    {formData.consentPurposeId
                      ? (() => {
                        const selectedPurpose = consentPurposes.find(
                          (cp) => cp.id === formData.consentPurposeId
                        );
                        return selectedPurpose ? (
                          <div className="flex flex-col text-left">
                            <span className="font-medium">
                              {selectedPurpose.name} (
                              {selectedPurpose.code || selectedPurpose.id}
                              {selectedPurpose.version
                                ? ` - v${selectedPurpose.version}`
                                : ""}
                              )
                            </span>
                          </div>
                        ) : null;
                      })()
                      : "Select a purpose of consent..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search consent purposes..." />
                    <CommandList>
                      <CommandEmpty>
                        {publishedConsentPurposes.length === 0
                          ? "No published consent purposes available. Please publish consent purposes first."
                          : "No consent purpose found."}
                      </CommandEmpty>
                      <CommandGroup>
                        {publishedConsentPurposes.map((purpose) => (
                          <CommandItem
                            key={purpose.id}
                            value={`${purpose.name} (${purpose.code || purpose.id
                              }) v${purpose.version || 1}`}
                            onSelect={() =>
                              handleConsentPurposeSelect(purpose.id)
                            }
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                formData.consentPurposeId === purpose.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <div className="flex flex-col">
                              <span className="font-medium">
                                {purpose.name} ({purpose.code || purpose.id}
                                {purpose.version
                                  ? ` - v${purpose.version}`
                                  : ""}
                                )
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {purpose.processingPurposes?.length || 0}{" "}
                                processing purposes • Published
                              </span>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Consent Duration Configuration */}
            <div className="space-y-4">
              <Label>Consent Duration Configuration</Label>
              <div className="flex items-center gap-6">
                {/* Radio buttons */}
                <RadioGroup
                  value={formData.durationType}
                  onValueChange={(
                    value: "until_purpose_met" | "custom_duration"
                  ) =>
                    setFormData((prev) => ({ ...prev, durationType: value }))
                  }
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="until_purpose_met"
                      id="until_purpose_met"
                    />
                    <Label
                      htmlFor="until_purpose_met"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Until Purpose Met
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="custom_duration"
                      id="custom_duration"
                    />
                    <Label
                      htmlFor="custom_duration"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Custom Duration
                    </Label>
                  </div>
                </RadioGroup>

                {/* Duration input and unit selector - shown only for custom duration */}
                {formData.durationType === "custom_duration" && (
                  <div className="flex items-center gap-2">
                    <div className="w-24">
                      <Input
                        type="number"
                        min="1"
                        placeholder="Duration"
                        value={formData.consentDuration || ""}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            consentDuration: parseInt(e.target.value) || 1,
                          }))
                        }
                      />
                    </div>
                    <div className="w-32">
                      <Select
                        value={formData.durationUnit}
                        onValueChange={(
                          value: "days" | "weeks" | "months" | "years"
                        ) =>
                          setFormData((prev) => ({
                            ...prev,
                            durationUnit: value,
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="days">Days</SelectItem>
                          <SelectItem value="weeks">Weeks</SelectItem>
                          <SelectItem value="months">Months</SelectItem>
                          <SelectItem value="years">Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Processing Rules Table */}
            {formData.consentPurposeId > 0 && processingPurposes.length > 0 && (
              <div className="space-y-4">
                <Label>Processing Rules</Label>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead>Purpose of Processing</TableHead>
                        <TableHead>User Attributes</TableHead>
                        <TableHead className="text-center">Mandatory</TableHead>
                        <TableHead className="text-center">
                          Re-consentable by Principal
                        </TableHead>
                        <TableHead className="text-center">
                          Revocable by Principal
                        </TableHead>
                        <TableHead className="w-[200px]">Retention Duration</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {processingPurposes.map((pp: any) => {
                        const rule = formData.processingRules.find(
                          (r) => r.processingPurposeId === pp.id
                        );
                        if (!rule) return null;

                        return (
                          <TableRow key={pp.id}>
                            <TableCell className="font-medium border-r">
                              {pp.name}
                            </TableCell>
                            <TableCell className="border-r">
                              <div className="flex flex-wrap gap-1">
                                {rule.userAttributeNames.map((attrName) => (
                                  <Badge
                                    key={attrName}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {attrName}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <Checkbox
                                checked={rule.mandatory}
                                onCheckedChange={(checked) =>
                                  handleProcessingRuleUpdate(
                                    pp.id,
                                    "mandatory",
                                    checked as boolean
                                  )
                                }
                              />
                            </TableCell>
                            <TableCell className="text-center">
                              <Checkbox
                                checked={rule.reconsentableByPrincipal}
                                onCheckedChange={(checked) =>
                                  handleProcessingRuleUpdate(
                                    pp.id,
                                    "reconsentableByPrincipal",
                                    checked as boolean
                                  )
                                }
                              />
                            </TableCell>
                            <TableCell className="text-center border-r">
                              <Checkbox
                                checked={rule.revocableByPrincipal}
                                disabled={rule.mandatory}
                                onCheckedChange={(checked) =>
                                  handleProcessingRuleUpdate(
                                    pp.id,
                                    "revocableByPrincipal",
                                    checked as boolean
                                  )
                                }
                              />
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Input
                                  type="number"
                                  min="1"
                                  className="w-20 h-8"
                                  value={rule.retentionDurationValue || ""}
                                  onChange={(e) =>
                                    handleProcessingRuleUpdate(
                                      pp.id,
                                      "retentionDurationValue",
                                      parseInt(e.target.value) || 0
                                    )
                                  }
                                />
                                <Select
                                  value={rule.retentionDurationUnit || "days"}
                                  onValueChange={(value) =>
                                    handleProcessingRuleUpdate(
                                      pp.id,
                                      "retentionDurationUnit",
                                      value
                                    )
                                  }
                                >
                                  <SelectTrigger className="h-8 w-24">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="days">Days</SelectItem>
                                    <SelectItem value="weeks">Weeks</SelectItem>
                                    <SelectItem value="months">Months</SelectItem>
                                    <SelectItem value="years">Years</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </div>

          <div className="flex-shrink-0 flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={
                !formData.consentPurposeId ||
                formData.processingRules.length === 0 ||
                publishedConsentPurposes.length === 0
              }
            >
              {isEdit ? "Update" : "Add"} Purpose of Consent
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
