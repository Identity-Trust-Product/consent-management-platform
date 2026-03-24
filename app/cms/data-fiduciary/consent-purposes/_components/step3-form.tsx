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
import { useEffect, useMemo, useState, useTransition } from "react";
import {
  AddDataProcessorDialog,
  DataProcessorMappingData,
} from "./dialogs/add-data-processor-dialog";

export interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
  userAttributes?: any[];
  purposesOfProcessing?: any[];
  dataProcessors?: any[];
}

interface Step3FormProps {
  data: StepData;
  isEdit: boolean;
  consentPurposeId?: string;
}

// Client state type for data processor mappings
interface DataProcessorMappingState {
  id?: number; // undefined for new items
  dataProcessorId: string;
  userAttributeNames: string[];
  processingPurposeRef: string; // References PP by id, tempId, or purposeOfProcessingCode
  status: "draft" | "published";
}

interface DataProcessorMappingsState {
  existing: DataProcessorMappingState[];
  new: DataProcessorMappingState[];
  modified: DataProcessorMappingState[];
  deleted: number[];
}

export function Step3Form({ data, isEdit, consentPurposeId }: Step3FormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { state: providerState, dispatch } = useConsentPurposeForm();
  const {
    dataProcessorMappings = [],
    userAttributes = [],
    purposesOfProcessing = [],
    dataProcessors = [],
  } = data;

  // Get processing purposes from context (source of truth)
  const processingPurposes = useMemo(() => {
    // Build a map of modified PP IDs for quick lookup
    const modifiedPPIds = new Set(
      providerState.step2Data.modified.map((pp) => pp.id).filter(Boolean)
    );

    // Combine: use modified version if it exists, otherwise use existing, plus new ones
    const existingPPs = providerState.step2Data.existing
      .filter((pp) => !modifiedPPIds.has(pp.id)) // Skip if modified version exists
      .filter((pp) => !providerState.step2Data.deleted.includes(pp.id!)); // Skip deleted

    const modifiedPPs = providerState.step2Data.modified.filter(
      (pp) => !providerState.step2Data.deleted.includes(pp.id!)
    ); // Skip deleted

    const newPPs = providerState.step2Data.new;

    const allPPs = [...existingPPs, ...modifiedPPs, ...newPPs];

    // Enrich with reference data
    return allPPs.map((pp) => ({
      ...pp,
      purposeOfProcessing: purposesOfProcessing.find(
        (pop: any) => pop.id === pp.purposeOfProcessingId
      ),
    }));
  }, [providerState.step2Data, purposesOfProcessing]);

  // Helper function to convert context data to local state format
  const convertToLocalFormat = (dpm: any): DataProcessorMappingState => ({
    id: dpm.id,
    dataProcessorId: dpm.dataProcessorId,
    userAttributeNames: dpm.userAttributeNames || [],
    processingPurposeRef:
      dpm.processingPurposeRef || dpm.processingPurposeId?.toString() || "",
    status: dpm.status || "draft",
  });

  // Client state for managing data processor mappings
  // Check context first, then fall back to database data
  const [state, setState] = useState<DataProcessorMappingsState>(() => {
    // If we have data in context, use it (user has already filled this step)
    if (
      providerState.step3Data.existing.length > 0 ||
      providerState.step3Data.new.length > 0 ||
      providerState.step3Data.modified.length > 0 ||
      providerState.step3Data.deleted.length > 0
    ) {
      return {
        existing: providerState.step3Data.existing.map(convertToLocalFormat),
        new: providerState.step3Data.new.map(convertToLocalFormat),
        modified: providerState.step3Data.modified.map(convertToLocalFormat),
        deleted: providerState.step3Data.deleted,
      };
    }

    // Otherwise, initialize from database data
    return {
      existing: dataProcessorMappings.map((dpm: any) => ({
        id: dpm.id,
        dataProcessorId: dpm.dataProcessorId,
        userAttributeNames: dpm.userAttributeNames || [],
        processingPurposeRef: dpm.processingPurposeId.toString(), // Existing mappings use PP ID
        status: dpm.status,
      })),
      new: [],
      modified: [],
      deleted: [],
    };
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<{
    dataProcessorId: string;
    data: DataProcessorMappingData;
  } | null>(null);

  // Sync context data to local state when navigating back to this step
  useEffect(() => {
    if (
      providerState.step3Data.existing.length > 0 ||
      providerState.step3Data.new.length > 0 ||
      providerState.step3Data.modified.length > 0 ||
      providerState.step3Data.deleted.length > 0
    ) {
      setState({
        existing: providerState.step3Data.existing.map(convertToLocalFormat),
        new: providerState.step3Data.new.map(convertToLocalFormat),
        modified: providerState.step3Data.modified.map(convertToLocalFormat),
        deleted: providerState.step3Data.deleted,
      });
    }
  }, [providerState.step3Data]);

  // Group mappings by data processor for display
  const groupedMappings = [...state.existing, ...state.new].reduce(
    (acc, mapping) => {
      if (!acc[mapping.dataProcessorId]) {
        acc[mapping.dataProcessorId] = [];
      }
      acc[mapping.dataProcessorId].push(mapping);
      return acc;
    },
    {} as Record<string, DataProcessorMappingState[]>
  );

  const handleNext = async () => {
    // Update provider state with Step 3 data
    dispatch({
      type: "SET_STEP3_DATA",
      payload: state,
    });

    // Navigate to next step
    const params = new URLSearchParams();
    params.set("step", "4");
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
      type: "SET_STEP3_DATA",
      payload: state,
    });

    const params = new URLSearchParams();
    params.set("step", "2");
    if (consentPurposeId) {
      params.set("id", consentPurposeId);
    }

    const basePath =
      isEdit && consentPurposeId
        ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit`
        : `/cms/data-fiduciary/consent-purposes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const handleAddDataProcessorMapping = (data: DataProcessorMappingData) => {
    // Convert the grouped data to individual mappings
    const newMappings: DataProcessorMappingState[] =
      data.processingPurposeMappings.map((mapping) => ({
        dataProcessorId: data.dataProcessorId,
        userAttributeNames: mapping.userAttributeNames,
        processingPurposeRef: mapping.processingPurposeRef, // Now uses ref instead of ID
        status: "draft" as const,
      }));

    setState((prev) => ({
      ...prev,
      new: [...prev.new, ...newMappings],
    }));
    setIsDialogOpen(false);
  };

  const handleEditDataProcessorMapping = (dataProcessorId: string) => {
    // Get all mappings for this data processor
    const mappings = groupedMappings[dataProcessorId] || [];
    const editData: DataProcessorMappingData = {
      dataProcessorId,
      processingPurposeMappings: mappings.map((mapping) => ({
        processingPurposeRef: mapping.processingPurposeRef,
        userAttributeNames: mapping.userAttributeNames,
      })),
    };

    setEditingItem({ dataProcessorId, data: editData });
    setIsDialogOpen(true);
  };

  const handleUpdateDataProcessorMapping = (data: DataProcessorMappingData) => {
    if (!editingItem) return;

    const { dataProcessorId } = editingItem;

    // Remove all existing mappings for this data processor
    setState((prev) => {
      // Get mappings to delete from existing
      const existingToDelete = prev.existing
        .filter((m) => m.dataProcessorId === dataProcessorId)
        .map((m) => m.id!)
        .filter((id) => id !== undefined);

      // Remove from new and existing arrays
      const filteredExisting = prev.existing.filter(
        (m) => m.dataProcessorId !== dataProcessorId
      );
      const filteredNew = prev.new.filter(
        (m) => m.dataProcessorId !== dataProcessorId
      );

      // Create new mappings
      const newMappings: DataProcessorMappingState[] =
        data.processingPurposeMappings.map((mapping) => ({
          dataProcessorId: data.dataProcessorId,
          userAttributeNames: mapping.userAttributeNames,
          processingPurposeRef: mapping.processingPurposeRef, // Now uses ref
          status: "draft" as const,
        }));

      return {
        existing: filteredExisting,
        new: [...filteredNew, ...newMappings],
        modified: prev.modified.filter(
          (m) => m.dataProcessorId !== dataProcessorId
        ),
        deleted: [...prev.deleted, ...existingToDelete],
      };
    });

    setEditingItem(null);
    setIsDialogOpen(false);
  };

  const handleDeleteDataProcessorMapping = (dataProcessorId: string) => {
    setState((prev) => {
      // Get mappings to delete from existing
      const existingToDelete = prev.existing
        .filter((m) => m.dataProcessorId === dataProcessorId)
        .map((m) => m.id!)
        .filter((id) => id !== undefined);

      return {
        existing: prev.existing.filter(
          (m) => m.dataProcessorId !== dataProcessorId
        ),
        new: prev.new.filter((m) => m.dataProcessorId !== dataProcessorId),
        modified: prev.modified.filter(
          (m) => m.dataProcessorId !== dataProcessorId
        ),
        deleted: [...prev.deleted, ...existingToDelete],
      };
    });
  };

  const getDataProcessorName = (dataProcessorId: string) => {
    const processor = dataProcessors.find(
      (dp: any) => dp.ouId === dataProcessorId
    );
    return processor?.brandName || processor?.legalName || "Unknown";
  };

  const getPurposeOfProcessingName = (processingPurposeRef: string) => {
    // Find processing purpose by ref (id, tempId, or code)
    const processingPurpose = processingPurposes.find((pp: any) => {
      if (pp.id && pp.id.toString() === processingPurposeRef) return true;
      if (pp.tempId && pp.tempId === processingPurposeRef) return true;
      if (pp.purposeOfProcessingCode === processingPurposeRef) return true;
      return false;
    });
    return (
      processingPurpose?.purposeOfProcessing?.name ||
      processingPurpose?.name ||
      "Unknown"
    );
  };

  const getUserAttributeName = (id: number) => {
    const attr = userAttributes.find((a: any) => a.id === id);
    return attr?.name || "Unknown";
  };

  const allMappings = Object.keys(groupedMappings);
  const hasAnyMappings = allMappings.length > 0;

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <h2 className="text-2xl font-bold tracking-tight">
          Step 3. Add Processor
        </h2>
        <p className="text-muted-foreground">
          Map processing purposes to data processors with user attributes
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Data Processor Mappings Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                List of all Processors ({allMappings.length} Entries)
              </h3>
              <p className="text-sm text-muted-foreground">
                Map data processors to handle specific processing purposes and
                user attributes
              </p>
            </div>
            {hasAnyMappings && (
              <Button
                onClick={() => {
                  setEditingItem(null);
                  setIsDialogOpen(true);
                }}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add a Processor
              </Button>
            )}
          </div>

          {/* Data Processor Mappings List */}
          {hasAnyMappings ? (
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-muted/30 border-r">
                      Processors Name
                    </TableHead>
                    <TableHead className="bg-muted/30 border-r">
                      Purposes of Processing
                    </TableHead>
                    <TableHead className="bg-muted/30 border-r">
                      Attributes Included
                    </TableHead>
                    <TableHead className="bg-muted/30">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allMappings.map((dataProcessorId) => {
                    const mappings = groupedMappings[dataProcessorId];
                    const uniquePurposes = [
                      ...new Set(
                        mappings.map((m) =>
                          getPurposeOfProcessingName(m.processingPurposeRef)
                        )
                      ),
                    ];
                    const allUserAttributes = [
                      ...new Set(mappings.flatMap((m) => m.userAttributeNames)),
                    ];

                    return (
                      <TableRow
                        key={dataProcessorId}
                        className="hover:bg-muted/20"
                      >
                        {/* Processor Name Column */}
                        <TableCell className="border-r">
                          <div className="font-medium">
                            {getDataProcessorName(dataProcessorId)}
                          </div>
                        </TableCell>

                        {/* Purposes of Processing Column */}
                        <TableCell className="border-r">
                          <div className="flex flex-wrap gap-1">
                            {uniquePurposes.map((purpose, index) => (
                              <Badge key={index} variant="secondary">
                                {purpose}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>

                        {/* Attributes Included Column */}
                        <TableCell className="border-r">
                          <div className="flex flex-wrap gap-1">
                            {allUserAttributes.map((attrName) => (
                              <Badge key={attrName} variant="outline">
                                {attrName}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>

                        {/* Action Column */}
                        <TableCell>
                          <ActionButtonsGroup
                            onEdit={() =>
                              handleEditDataProcessorMapping(dataProcessorId)
                            }
                            onDelete={() =>
                              handleDeleteDataProcessorMapping(dataProcessorId)
                            }
                            className="px-2"
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h4 className="text-lg font-medium mb-2">No Processors yet!</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Add Processors that you need for carrying out the Purpose by
                clicking the button below
              </p>
              <Button
                onClick={() => {
                  setEditingItem(null);
                  setIsDialogOpen(true);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add a Processor
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
            disabled={isPending}
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

      {/* Add/Edit Data Processor Dialog */}
      <AddDataProcessorDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setEditingItem(null);
          }
        }}
        onSave={
          editingItem
            ? handleUpdateDataProcessorMapping
            : handleAddDataProcessorMapping
        }
        dataProcessors={dataProcessors}
        processingPurposes={processingPurposes}
        userAttributes={userAttributes}
        isEdit={!!editingItem}
        editData={editingItem?.data || null}
        existingMappings={[...state.existing, ...state.new]}
      />
    </div>
  );
}
