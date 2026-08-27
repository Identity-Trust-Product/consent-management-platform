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

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export interface DataProcessorMappingData {
  dataProcessorId: string;
  processingPurposeMappings: {
    processingPurposeRef: string; // Uses ref instead of ID
    userAttributeNames: string[];
  }[];
}

interface AddDataProcessorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: DataProcessorMappingData) => void;
  dataProcessors: any[];
  processingPurposes: any[];
  userAttributes: any[];
  editData?: DataProcessorMappingData | null;
  isEdit: boolean;
  existingMappings?: any[];
}

export function AddDataProcessorDialog({
  open,
  onOpenChange,
  onSave,
  dataProcessors,
  processingPurposes,
  userAttributes,
  editData,
  isEdit,
  existingMappings = [],
}: AddDataProcessorDialogProps) {
  const [selectedDataProcessorId, setSelectedDataProcessorId] = useState<
    string | null
  >(null);
  const [dataProcessorDropdownOpen, setDataProcessorDropdownOpen] =
    useState(false);
  const [processingPurposeMappings, setProcessingPurposeMappings] = useState<
    Record<string, string[]> // Changed from number to string for processingPurposeRef
  >({});

  // Initialize form data when dialog opens or editData changes
  useEffect(() => {
    if (open) {
      if (isEdit && editData) {
        setSelectedDataProcessorId(editData.dataProcessorId);
        const mappings: Record<string, string[]> = {};
        editData.processingPurposeMappings.forEach((mapping) => {
          mappings[mapping.processingPurposeRef] = mapping.userAttributeNames;
        });
        setProcessingPurposeMappings(mappings);
      } else {
        setSelectedDataProcessorId(null);
        setProcessingPurposeMappings({});
      }
      setDataProcessorDropdownOpen(false);
    }
  }, [open, isEdit, editData]);

  const selectedDataProcessor = dataProcessors.find(
    (dp) => dp.ouId === selectedDataProcessorId
  );

  const handleSave = () => {
    if (!selectedDataProcessorId) return;

    const processingPurposeMappingsArray = Object.entries(
      processingPurposeMappings
    )
      .filter(([_, userAttributeNames]) => userAttributeNames.length > 0)
      .map(([processingPurposeRef, userAttributeNames]) => ({
        processingPurposeRef, // Now a string (id, tempId, or code)
        userAttributeNames,
      }));

    if (processingPurposeMappingsArray.length === 0) {
      return; // Show error toast
    }

    onSave({
      dataProcessorId: selectedDataProcessorId,
      processingPurposeMappings: processingPurposeMappingsArray,
    });

    // Reset form - only if not editing (for edit, parent handles dialog close)
    if (!isEdit) {
      setSelectedDataProcessorId(null);
      setProcessingPurposeMappings({});
    }
  };

  // Remove the processing purpose toggle function since we don't need it anymore

  const handleUserAttributeToggle = (
    processingPurposeRef: string, // Changed from number to string
    userAttributeName: string,
    checked: boolean
  ) => {
    setProcessingPurposeMappings((prev) => {
      const newMappings = { ...prev };
      const currentNames = newMappings[processingPurposeRef] || [];

      if (checked) {
        newMappings[processingPurposeRef] = [...currentNames, userAttributeName];
      } else {
        newMappings[processingPurposeRef] = currentNames.filter(
          (name) => name !== userAttributeName
        );
      }

      return newMappings;
    });
  };

  // Get reference string for a processing purpose (id, tempId, or code)
  const getProcessingPurposeRef = (processingPurpose: any): string => {
    if (processingPurpose.id) return processingPurpose.id.toString();
    if (processingPurpose.tempId) return processingPurpose.tempId;
    return processingPurpose.purposeOfProcessingCode || processingPurpose.purposeOfProcessing?.code || "";
  };

  const getPurposeOfProcessingName = (id: number) => {
    const processingPurpose = processingPurposes.find((pp) => pp.id === id);
    return processingPurpose?.purposeOfProcessing?.name || "Unknown";
  };

  const getUserAttributeName = (id: number) => {
    const attr = userAttributes.find((a) => a.id === id);
    return attr?.name || "Unknown";
  };

  const getProcessingPurposeName = (id: number) => {
    const processingPurpose = processingPurposes.find((pp) => pp.id === id);
    return processingPurpose?.name || "Unknown";
  };

  // Check if a data processor is already mapped to avoid duplicates
  const isDataProcessorAlreadyMapped = (dataProcessorId: string) => {
    return existingMappings.some(
      (mapping) => mapping.dataProcessorId === dataProcessorId
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] min-h-160 flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-center">
            {isEdit ? "Edit" : "Add"} Processor(s)
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 flex-1 flex flex-col">
          {/* Data Processor Selection */}
          <div className="space-y-2">
            <Label>Select Data Processor *</Label>
            <Popover
              open={dataProcessorDropdownOpen}
              onOpenChange={setDataProcessorDropdownOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={dataProcessorDropdownOpen}
                  className="w-full justify-between"
                  disabled={isEdit} // Don't allow changing data processor in edit mode
                >
                  {selectedDataProcessor
                    ? `${selectedDataProcessor.brandName} (${selectedDataProcessor.legalName})`
                    : "Select a Data Processor"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search data processors..." />
                  <CommandList>
                    <CommandEmpty>No data processors found.</CommandEmpty>
                    <CommandGroup>
                      {dataProcessors
                        .filter(
                          (dp) =>
                            isEdit ||
                            !isDataProcessorAlreadyMapped(dp.ouId) ||
                            dp.ouId === selectedDataProcessorId
                        )
                        .map((dataProcessor) => (
                          <CommandItem
                            key={dataProcessor.ouId}
                            value={`${dataProcessor.brandName} ${dataProcessor.legalName}`}
                            onSelect={() => {
                              setSelectedDataProcessorId(dataProcessor.ouId);
                              setDataProcessorDropdownOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedDataProcessorId === dataProcessor.ouId
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <div>
                              <div className="font-medium">
                                {dataProcessor.brandName}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {dataProcessor.legalName}
                              </div>
                            </div>
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Processing Purposes and User Attributes Mapping */}
          {selectedDataProcessorId && (
            <div className="space-y-4 flex-1 min-h-0">
              <div>
                <Label className="text-base font-medium">
                  Map Processing Purposes & Purpose Attributes
                </Label>
                <p className="text-sm text-muted-foreground">
                  Select which purpose attributes this data processor will handle
                  for each processing purpose.
                </p>
              </div>

              {/* Table layout using shadcn Table components */}
              <div className="border rounded-lg overflow-hidden flex-1 min-h-0">
                <div className="max-h-96 overflow-y-auto">
                  <Table>
                    <TableHeader className="sticky top-0 bg-white z-10">
                      <TableRow>
                        <TableHead className="bg-muted/30 border-r">
                          Purpose Sub Master
                        </TableHead>
                        <TableHead className="bg-muted/30 border-r">
                          Attributes
                        </TableHead>
                        <TableHead className="bg-muted/30">
                          Choose Purpose Attributes
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {processingPurposes.map((processingPurpose) => {
                        const processingPurposeRef = getProcessingPurposeRef(processingPurpose);
                        const mappedUserAttributeNames =
                          processingPurposeMappings[processingPurposeRef] || [];

                        return (
                          <TableRow
                            key={processingPurposeRef}
                            className="hover:bg-muted/20"
                          >
                            {/* Purpose of Processing Column */}
                            <TableCell className="border-r">
                              <div className="font-medium">
                                {processingPurpose.name}
                              </div>
                            </TableCell>

                            {/* Attributes Column */}
                            <TableCell className="border-r">
                              <div className="space-y-1">
                                {processingPurpose.userAttributeNames?.map(
                                  (userAttributeName: string) => (
                                    <div
                                      key={userAttributeName}
                                      className="text-sm"
                                    >
                                      {userAttributeName}
                                    </div>
                                  )
                                )}
                              </div>
                            </TableCell>

                            {/* Choose User Attributes Column */}
                            <TableCell>
                              <div className="space-y-2">
                                {processingPurpose.userAttributeNames?.map(
                                  (userAttributeName: string) => {
                                    const isSelected =
                                      mappedUserAttributeNames.includes(
                                        userAttributeName
                                      );

                                    return (
                                      <div
                                        key={userAttributeName}
                                        className="flex items-center"
                                      >
                                        <Checkbox
                                          id={`attr-${processingPurposeRef}-${userAttributeName}`}
                                          checked={isSelected}
                                          onCheckedChange={(checked) =>
                                            handleUserAttributeToggle(
                                              processingPurposeRef,
                                              userAttributeName,
                                              checked as boolean
                                            )
                                          }
                                        />
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-4 flex-1 items-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Previous
            </Button>
            <Button
              type="button"
              onClick={handleSave}
              disabled={
                !selectedDataProcessorId ||
                Object.values(processingPurposeMappings).every(
                  (mappings) => mappings.length === 0
                )
              }
            >
              {isEdit ? "Update" : "Submit"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
