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

import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  ChevronsUpDown,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProcessingPurposeData {
  name: string;
  description: string;
  purposeOfProcessingId: number | null;
  userAttributeNames: string[];
}

interface AddProcessingPurposeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: ProcessingPurposeData) => void;
  purposesOfProcessing: any[];
  userAttributes: any[];
  editData?: ProcessingPurposeData | null;
  isEdit?: boolean;
  existingProcessingPurposes?: any[]; // Array of already created processing purposes
}

export function AddProcessingPurposeDialog({
  open,
  onOpenChange,
  onSave,
  purposesOfProcessing,
  userAttributes,
  editData = null,
  isEdit = false,
  existingProcessingPurposes = [],
}: AddProcessingPurposeDialogProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [comboboxOpen, setComboboxOpen] = useState(false);
  const [attributesComboboxOpen, setAttributesComboboxOpen] = useState(false);
  const [formData, setFormData] = useState<ProcessingPurposeData>({
    name: "",
    purposeOfProcessingId: null,
    userAttributeNames: [],
    description: "",
  });

  // Initialize form data when dialog opens or editData changes
  React.useEffect(() => {
    if (open) {
      if (isEdit && editData) {
        setFormData({
          name: editData.name,
          description: editData.description,
          purposeOfProcessingId: editData.purposeOfProcessingId,
          userAttributeNames: editData.userAttributeNames,
        });
      } else {
        setFormData({
          name: "",
          description: "",
          purposeOfProcessingId: null,
          userAttributeNames: [],
        });
      }
      setCurrentStep(1);
    }
  }, [open, isEdit, editData]);

  // Filter out already used purposes of processing (except when editing)
  const usedPurposeIds = existingProcessingPurposes.map(
    (pp) => pp.purposeOfProcessingId
  );
  const availablePurposesOfProcessing = purposesOfProcessing.filter(
    (purpose) => {
      // If editing, include the current purpose to allow keeping the same selection
      if (isEdit && editData?.purposeOfProcessingId === purpose.id) {
        return true;
      }
      // Otherwise, only include purposes that haven't been used yet
      return !usedPurposeIds.includes(purpose.id);
    }
  );

  const handleClose = () => {
    setCurrentStep(1);
    setFormData({
      name: "",
      description: "",
      purposeOfProcessingId: 0,
      userAttributeNames: [],
    });
    setComboboxOpen(false);
    setAttributesComboboxOpen(false);
    onOpenChange(false);
  };

  const handleNext = () => {
    if (
      currentStep === 1 &&
      formData.purposeOfProcessingId &&
      formData.description.trim()
    ) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSave = () => {
    if (
      formData.description &&
      formData.purposeOfProcessingId &&
      formData.userAttributeNames.length > 0
    ) {
      onSave(formData);
      handleClose();
    }
  };

  const handlePurposeSelect = (purposeId: number) => {
    const selectedPurpose = purposesOfProcessing.find(
      (p) => p.id === purposeId
    );

    setFormData((prev) => ({
      ...prev,
      purposeOfProcessingId: purposeId,
      name: selectedPurpose?.name || "",
      // Pre-populate notice body with purpose of processing description
      description: selectedPurpose?.description || "",
    }));
    setComboboxOpen(false);
  };

  const handleUserAttributeToggle = (attributeName: string) => {
    setFormData((prev) => ({
      ...prev,
      userAttributeNames: prev.userAttributeNames.includes(attributeName)
        ? prev.userAttributeNames.filter((name) => name !== attributeName)
        : [...prev.userAttributeNames, attributeName],
    }));
  };

  const handleRemoveAttribute = (attributeName: string) => {
    setFormData((prev) => ({
      ...prev,
      userAttributeNames: prev.userAttributeNames.filter(
        (name) => name !== attributeName
      ),
    }));
  };

  const selectedPurpose = purposesOfProcessing.find(
    (p) => p.id === formData.purposeOfProcessingId
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] h-[600px] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>
            {isEdit ? "Edit" : "Add"} Processing Purpose - Step {currentStep} of
            2
          </DialogTitle>
        </DialogHeader>

        {currentStep === 1 ? (
          <div className="flex-1 flex flex-col space-y-6 overflow-hidden">
            <div className="flex-1 space-y-4 overflow-y-auto pr-2">
              <h3 className="text-lg font-medium">
                Select Purpose Sub Master
              </h3>
              <p className="text-sm text-muted-foreground">
                Choose the legal basis and purpose for processing user data, and
                provide a notice body.
              </p>

              <div className="space-y-2">
                <Label htmlFor="purpose-select">Purpose Sub Master</Label>
                {isEdit ? (
                  <div className="w-full p-3 border rounded-md bg-muted">
                    <span className="text-sm">
                      {purposesOfProcessing.find(
                        (purpose) =>
                          purpose.id === formData.purposeOfProcessingId
                      )?.name || "Unknown Purpose"}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      Purpose cannot be changed when editing
                    </p>
                  </div>
                ) : (
                  <Popover open={comboboxOpen} onOpenChange={setComboboxOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={comboboxOpen}
                        className="w-full justify-between"
                      >
                        {formData.purposeOfProcessingId
                          ? availablePurposesOfProcessing.find(
                            (purpose) =>
                              purpose.id === formData.purposeOfProcessingId
                          )?.name
                          : "Select a purpose sub master..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search purposes..." />
                        <CommandList>
                          <CommandEmpty>
                            {availablePurposesOfProcessing.length === 0
                              ? "All purpose sub masters are already in use."
                              : "No purpose found."}
                          </CommandEmpty>
                          <CommandGroup>
                            {availablePurposesOfProcessing.map((purpose) => (
                              <CommandItem
                                key={purpose.id}
                                value={purpose.name}
                                onSelect={() => handlePurposeSelect(purpose.id)}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    formData.purposeOfProcessingId ===
                                      purpose.id
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {purpose.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="notice-body">Notice Body</Label>
                <Textarea
                  id="notice-body"
                  placeholder="Enter the notice body text for this processing purpose..."
                  value={formData.description || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={4}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  This text will be shown to users as part of the consent notice
                  for this processing purpose.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                onClick={handleNext}
                disabled={
                  !formData.purposeOfProcessingId ||
                  !formData.description.trim() ||
                  availablePurposesOfProcessing.length === 0
                }
              >
                Next: Select Attributes
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col space-y-6 overflow-hidden">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={handlePrevious}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div>
                  <h3 className="text-lg font-medium">
                    Select Purpose Attributes
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Choose which purpose attributes will be collected for:{" "}
                    <strong>{formData.name}</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-hidden">
              <Label>
                Purpose Attributes ({formData.userAttributeNames.length} selected)
              </Label>

              {/* Selected Attributes Display - Fixed height container */}
              <div className="overflow-y-auto">
                {formData.userAttributeNames.length > 0 ? (
                  <div className="flex flex-wrap gap-2 p-3 border rounded-lg bg-muted/50">
                    {formData.userAttributeNames.map((attrName) => {
                      const attr = userAttributes.find(
                        (a) => a.name === attrName
                      );
                      return attr ? (
                        <Badge
                          key={attrName}
                          variant="outline"
                          className="text-xs flex items-center gap-1 bg-white"
                        >
                          {attrName}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveAttribute(attrName);
                            }}
                            className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ) : null;
                    })}
                  </div>
                ) : (
                  <div className="p-3 border rounded-lg bg-muted/20 text-center text-sm text-muted-foreground">
                    No attributes selected yet
                  </div>
                )}
              </div>

              {/* Multi-Select Combo Box */}
              <Popover
                open={attributesComboboxOpen}
                onOpenChange={setAttributesComboboxOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={attributesComboboxOpen}
                    className="w-full justify-between"
                  >
                    <span className="text-muted-foreground">
                      {formData.userAttributeNames.length === 0
                        ? "Select purpose attributes..."
                        : `${formData.userAttributeNames.length} attribute${formData.userAttributeNames.length === 1 ? "" : "s"
                        } selected`}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search attributes..." />
                    <CommandList>
                      <CommandEmpty>No attributes found.</CommandEmpty>
                      <CommandGroup>
                        {userAttributes.map((attribute) => (
                          <CommandItem
                            key={attribute.id}
                            value={attribute.name}
                            onSelect={() =>
                              handleUserAttributeToggle(attribute.name)
                            }
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <Check
                                className={cn(
                                  "h-4 w-4",
                                  formData.userAttributeNames.includes(
                                    attribute.name
                                  )
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              <span>{attribute.name}</span>
                              {attribute.pii && (
                                <Badge variant="secondary" className="text-xs">
                                  PII
                                </Badge>
                              )}
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex-shrink-0 flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                disabled={formData.userAttributeNames.length === 0}
              >
                {isEdit ? "Update" : "Add"} Processing Purpose
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
