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

import { ActionButtonsGroup } from "@/components/ui/action-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useConsentPurposeForm } from "@/contexts/consent-purpose-context";
import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import type { ProcessingPurposeData } from "./dialogs/add-processing-purpose-dialog";
import { AddProcessingPurposeDialog } from "./dialogs/add-processing-purpose-dialog";

export interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
  userAttributes?: any[];
  purposesOfProcessing?: any[];
  dataProcessors?: any[];
}

interface Step2FormProps {
  data: StepData;
  isEdit: boolean;
  consentPurposeId?: string;
}

// Client state type for processing purposes
interface ProcessingPurposeState {
  id?: number; // undefined for new items
  tempId?: string; // Temporary ID for new items
  name: string;
  description: string;
  purposeOfProcessingId: number;
  purposeOfProcessingCode: string; // POP code for referencing
  userAttributeNames: string[];
  status: "draft" | "published";
}

interface ProcessingPurposesState {
  existing: ProcessingPurposeState[];
  new: ProcessingPurposeState[];
  modified: ProcessingPurposeState[];
  deleted: number[];
}

export function Step2Form({ data, isEdit, consentPurposeId }: Step2FormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { state: providerState, dispatch } = useConsentPurposeForm();
  const {
    processingPurposes = [],
    userAttributes = [],
    purposesOfProcessing = [],
  } = data;

  // Helper function to convert context data to local state format
  const convertToLocalFormat = (pp: any): ProcessingPurposeState => {
    const pop = purposesOfProcessing.find(
      (p: any) => p.id === pp.purposeOfProcessingId
    );
    return {
      id: pp.id,
      tempId: pp.tempId,
      name: pp.name,
      description: pp.description || "",
      purposeOfProcessingId: pp.purposeOfProcessingId,
      purposeOfProcessingCode: pp.purposeOfProcessingCode || pop?.code || "",
      userAttributeNames: pp.userAttributeNames || [],
      status: pp.status || "draft",
    };
  };

  // Client state for managing processing purposes
  // Check context first, then fall back to database data
  const [state, setState] = useState<ProcessingPurposesState>(() => {
    // If we have data in context, use it (user has already filled this step)
    if (
      providerState.step2Data.existing.length > 0 ||
      providerState.step2Data.new.length > 0 ||
      providerState.step2Data.modified.length > 0 ||
      providerState.step2Data.deleted.length > 0
    ) {
      return {
        existing: providerState.step2Data.existing.map(convertToLocalFormat),
        new: providerState.step2Data.new.map(convertToLocalFormat),
        modified: providerState.step2Data.modified.map(convertToLocalFormat),
        deleted: providerState.step2Data.deleted,
      };
    }

    // Otherwise, initialize from database data
    return {
      existing: processingPurposes.map((pp: any) => {
        const pop = purposesOfProcessing.find(
          (p: any) => p.id === pp.purposeOfProcessingId
        );
        return {
          id: pp.id,
          tempId: undefined,
          name: pp.name,
          description: pp.description || "",
          purposeOfProcessingId: pp.purposeOfProcessingId,
          purposeOfProcessingCode: pop?.code || "",
          userAttributeNames: pp.userAttributeNames || [],
          status: pp.status,
        };
      }),
      new: [],
      modified: [],
      deleted: [],
    };
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<{
    index: number;
    isNew: boolean;
    data: ProcessingPurposeState;
  } | null>(null);

  // Sync context data to local state when navigating back to this step
  useEffect(() => {
    if (
      providerState.step2Data.existing.length > 0 ||
      providerState.step2Data.new.length > 0 ||
      providerState.step2Data.modified.length > 0 ||
      providerState.step2Data.deleted.length > 0
    ) {
      setState({
        existing: providerState.step2Data.existing.map(convertToLocalFormat),
        new: providerState.step2Data.new.map(convertToLocalFormat),
        modified: providerState.step2Data.modified.map(convertToLocalFormat),
        deleted: providerState.step2Data.deleted,
      });
    }
  }, [providerState.step2Data]);

  // All processing purposes (existing + new)
  const allProcessingPurposes = [...state.existing, ...state.new];

  const handleNext = async () => {
    // Update provider state with Step 2 data
    dispatch({
      type: "SET_STEP2_DATA",
      payload: state,
    });

    // Navigate to next step
    const params = new URLSearchParams();
    params.set("step", "3");
    if (consentPurposeId) {
      params.set("id", consentPurposeId);
    }

    const basePath =
      isEdit && consentPurposeId
        ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit`
        : `/cms/data-fiduciary/consent-purposes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const handlePrevious = () => {
    // Save state before navigating back
    dispatch({
      type: "SET_STEP2_DATA",
      payload: state,
    });

    const params = new URLSearchParams();
    params.set("step", "1");
    if (consentPurposeId) {
      params.set("id", consentPurposeId);
    }

    const basePath =
      isEdit && consentPurposeId
        ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit`
        : `/cms/data-fiduciary/consent-purposes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const handleAddProcessingPurpose = (data: ProcessingPurposeData) => {
    if (data.purposeOfProcessingId === null) {
      toast.error("Please select a purpose of processing");
      return;
    }

    const pop = purposesOfProcessing.find(
      (p: any) => p.id === data.purposeOfProcessingId
    );
    const popCode = pop?.code || "";
    const tempId = `pop_${popCode}_${Date.now()}`;

    const newPurpose: ProcessingPurposeState = {
      tempId,
      name: data.name,
      description: data.description,
      purposeOfProcessingId: data.purposeOfProcessingId,
      purposeOfProcessingCode: popCode,
      userAttributeNames: data.userAttributeNames,
      status: "draft",
    };

    setState((prev) => ({
      ...prev,
      new: [...prev.new, newPurpose],
    }));
    setIsDialogOpen(false);
  };

  const handleEditProcessingPurpose = (index: number, isNew: boolean) => {
    const purpose = isNew ? state.new[index] : state.existing[index];
    setEditingItem({ index, isNew, data: purpose });
    setIsDialogOpen(true);
  };

  const handleUpdateProcessingPurpose = (data: ProcessingPurposeData) => {
    if (!editingItem) return;

    const { index, isNew } = editingItem;
    const pop = purposesOfProcessing.find(
      (p: any) => p.id === data.purposeOfProcessingId
    );
    const popCode = pop?.code || "";

    const updatedPurpose: ProcessingPurposeState = {
      id: editingItem.data.id,
      tempId: editingItem.data.tempId,
      name: data.name,
      description: data.description,
      purposeOfProcessingId: data.purposeOfProcessingId!,
      purposeOfProcessingCode: popCode,
      userAttributeNames: data.userAttributeNames,
      status: editingItem.data.status,
    };

    if (isNew) {
      setState((prev) => ({
        ...prev,
        new: prev.new.map((item, i) => (i === index ? updatedPurpose : item)),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        existing: prev.existing.map((item, i) =>
          i === index ? updatedPurpose : item
        ),
        modified: updatedPurpose.id
          ? [
            ...prev.modified.filter((m) => m.id !== updatedPurpose.id),
            updatedPurpose,
          ]
          : prev.modified,
      }));
    }

    setEditingItem(null);
    setIsDialogOpen(false);
  };

  const handleDeleteProcessingPurpose = (index: number, isNew: boolean) => {
    if (isNew) {
      setState((prev) => ({
        ...prev,
        new: prev.new.filter((_, i) => i !== index),
      }));
    } else {
      const purpose = state.existing[index];
      if (purpose.id) {
        setState((prev) => ({
          ...prev,
          existing: prev.existing.filter((_, i) => i !== index),
          deleted: [...prev.deleted, purpose.id!],
        }));
      }
    }
  };

  const getPurposeOfProcessingName = (id: number) => {
    const purpose = purposesOfProcessing.find((p: any) => p.id === id);
    return purpose?.name || "Unknown";
  };

  const getUserAttributeName = (id: number) => {
    const attr = userAttributes.find((a: any) => a.id === id);
    return attr?.name || "Unknown";
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <h2 className="text-2xl font-bold tracking-tight">
          Step 2. Add Purpose of Processing
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Processing Purposes Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Processing Purposes</h3>
              <p className="text-sm text-muted-foreground">
                Define how user data will be processed and which attributes are
                involved
              </p>
            </div>
            {/* Only show Add Processing Purpose button if there are existing purposes */}
            {allProcessingPurposes.length > 0 && (
              <Button
                onClick={() => {
                  setEditingItem(null);
                  setIsDialogOpen(true);
                }}
                className="flex items-center gap-2 group"
              >
                <Plus className="h-4 w-4 group-hover:scale-125 transition-transform" />
                Add Processing Purpose
              </Button>
            )}
          </div>

          {/* Processing Purposes List */}
          {allProcessingPurposes.length > 0 ? (
            <div className="border rounded-lg">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead>Purpose of Processing</TableHead>
                    <TableHead className="w-1/3">Description</TableHead>
                    <TableHead>Attributes Included</TableHead>
                    <TableHead className="text-center w-24">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Existing Processing Purposes */}
                  {state.existing.map((purpose, index) => (
                    <TableRow key={purpose.id}>
                      <TableCell className="font-medium border-r">
                        {purpose.name}
                      </TableCell>
                      <TableCell className="border-r min-w-2xl">
                        <div className="text-xs text-muted-foreground text-wrap">
                          {purpose.description || "No description"}
                        </div>
                      </TableCell>
                      <TableCell className="border-r">
                        <div className="flex flex-wrap gap-1">
                          {purpose.userAttributeNames.map((attrName) => (
                            <Badge
                              key={attrName}
                              variant="outline"
                              className="text-xs"
                            >
                              {attrName}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <ActionButtonsGroup
                          onEdit={() =>
                            handleEditProcessingPurpose(index, false)
                          }
                          onDelete={() =>
                            handleDeleteProcessingPurpose(index, false)
                          }
                          className="justify-center gap-1"
                        />
                      </TableCell>
                    </TableRow>
                  ))}

                  {/* New Processing Purposes */}
                  {state.new.map((purpose, index) => (
                    <TableRow
                      key={`new-${index}`}
                      className="bg-muted/30 border-dashed"
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {purpose.name}
                          <Badge variant="secondary" className="text-xs">
                            New
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {getPurposeOfProcessingName(
                            purpose.purposeOfProcessingId
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <div className="break-words whitespace-normal">
                          {purpose.description || "No description"}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {purpose.userAttributeNames.map((attrName) => (
                            <Badge
                              key={attrName}
                              variant="outline"
                              className="text-xs"
                            >
                              {attrName}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <ActionButtonsGroup
                          onEdit={() =>
                            handleEditProcessingPurpose(index, true)
                          }
                          onDelete={() =>
                            handleDeleteProcessingPurpose(index, true)
                          }
                          className="justify-center gap-1"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h4 className="text-lg font-medium mb-2">
                No Processing Purposes Yet
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Start by adding your first processing purpose to define how user
                data will be handled.
              </p>
              <Button
                onClick={() => {
                  setEditingItem(null);
                  setIsDialogOpen(true);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add First Processing Purpose
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0">
        <div className="flex gap-3 justify-end">
          <Button type="button" variant="outline" onClick={handlePrevious}>
            Previous
          </Button>
          <Button
            type="button"
            onClick={handleNext}
            disabled={isPending || allProcessingPurposes.length === 0}
            className="min-w-[100px]"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </div>

      {/* Add/Edit Processing Purpose Dialog */}
      <AddProcessingPurposeDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setEditingItem(null);
          }
        }}
        onSave={
          editingItem
            ? handleUpdateProcessingPurpose
            : handleAddProcessingPurpose
        }
        purposesOfProcessing={purposesOfProcessing}
        userAttributes={userAttributes}
        isEdit={!!editingItem}
        existingProcessingPurposes={allProcessingPurposes}
        editData={
          editingItem
            ? {
              name: editingItem.data.name,
              description: editingItem.data.description,
              purposeOfProcessingId: editingItem.data.purposeOfProcessingId,
              userAttributeNames: editingItem.data.userAttributeNames,
            }
            : null
        }
      />
    </div>
  );
}
