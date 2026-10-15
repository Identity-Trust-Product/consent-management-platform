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

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { saveConsentPurposeFromClientState } from "@/actions/consent-purpose-form";
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
import { BreakingChangeWarningDialog } from "./breaking-change-warning-dialog";
import { useConsentPurposeForm } from "@/contexts/consent-purpose-context";
import { detectBreakingChanges } from "@/lib/utils/breaking-change-detector";
import { getHighestVersionForConsentPurposeCode } from "@/actions/consent-purposes";

export interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
  userAttributes?: any[];
  purposesOfProcessing?: any[];
  dataProcessors?: any[];
}

interface Step5FormProps {
  data: StepData;
  isEdit: boolean;
  consentPurposeId?: string;
  affectedBPs: any[];
}

export function Step5Form({
  data,
  isEdit,
  consentPurposeId,
  affectedBPs,
}: Step5FormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  // Breaking change handling
  const [showBreakingChangeDialog, setShowBreakingChangeDialog] =
    useState(false);
  const [highestVersion, setHighestVersion] = useState<number | null>(null);

  // Affected BPs + propagate choice state
  const [isFetchingAffectedBPs, setIsFetchingAffectedBPs] = useState(false);
  const [selectedBPsToPropagate, setSelectedBPsToPropagate] = useState<
    number[]
  >([]);

  const { state, dispatch } = useConsentPurposeForm();

  const {
    consentPurpose,
    purposesOfProcessing = [],
  } = data;

  // Get processing purposes from context (source of truth)
  const processingPurposes = useMemo(() => {
    const modifiedPPIds = new Set(
      state.step2Data.modified.map((pp) => pp.id).filter(Boolean)
    );
    const existingPPs = state.step2Data.existing
      .filter((pp) => !modifiedPPIds.has(pp.id))
      .filter((pp) => !state.step2Data.deleted.includes(pp.id!));
    const modifiedPPs = state.step2Data.modified.filter(
      (pp) => !state.step2Data.deleted.includes(pp.id!)
    );
    const newPPs = state.step2Data.new;
    const allPPs = [...existingPPs, ...modifiedPPs, ...newPPs];

    return allPPs.map((pp) => ({
      ...pp,
      purposeOfProcessing: purposesOfProcessing.find(
        (pop: any) => pop.id === pp.purposeOfProcessingId
      ),
    }));
  }, [state.step2Data, purposesOfProcessing]);

  // Helpers
  const getPurposeOfProcessingName = (id: number) =>
    purposesOfProcessing.find((p: any) => p.id === id)?.name || "Unknown";
  const formatLastUpdated = (date: string | Date) =>
    !date
      ? ""
      : new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

  // Breaking change + affected BPs logic
  const breakingChanges = state.baseline
    ? detectBreakingChanges(state.baseline, state)
    : [];
  const handleSaveAsDraft = async () => {
    if (!state.step1Data) {
      toast.error("Please complete Step 1 first");
      return;
    }
    setIsSavingDraft(true);
    try {
      const result = await saveConsentPurposeFromClientState({
        clientState: state,
        action: "draft",
        consentPurposeId: consentPurposeId ? parseInt(consentPurposeId) : undefined
      });
      if (result.success) {
        toast.success(
          isEdit
            ? "Consent purpose saved as draft"
            : "Purpose Master saved successfully"
        );
        dispatch({ type: "RESET" });
        router.push("/cms/data-fiduciary/consent-purposes");
      } else {
        toast.error(
          result.error || "Failed to save consent purpose as draft"
        );
      }
    } catch (error) {
      console.error("Error saving consent purpose as draft:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSavingDraft(false);
    }
  };

  // MAIN publish handler triggers the breaking change dialog with affected BPs for versioned updates
  const handlePublish = async () => {
    if (!state.step1Data) {
      toast.error("Please complete Step 1 first");
      return;
    }

    if (
      consentPurpose?.status === "published" &&
      state.baseline &&
      breakingChanges.length > 0
    ) {
      setIsFetchingAffectedBPs(true);
      try {
        let highestVer = consentPurpose?.version || 1;
        if (consentPurpose?.code) {
          const result = await getHighestVersionForConsentPurposeCode(
            consentPurpose.code
          );
          if (result.success) highestVer = result.highestVersion;
        }
        setHighestVersion(highestVer);

        // Reset selection when opening dialog
        setSelectedBPsToPropagate([]);
        setShowBreakingChangeDialog(true);
        setIsFetchingAffectedBPs(false);
      } catch {
        toast.error("Failed to fetch affected processes.");
        setIsFetchingAffectedBPs(false);
      }
      return;
    }
    performPublish([]); // normal publish (no propagation)
  };

  // Use this for final publish after BC dialog confirmation
  const performPublish = async (propagateToBPIds: number[]) => {
    startTransition(async () => {
      try {
        const result = await saveConsentPurposeFromClientState({
          clientState: state,
          action: "publish",
          consentPurposeId: consentPurposeId ? parseInt(consentPurposeId) : undefined,
          propagateToBPIds // pass array of IDs
        });

        if (result.success) {
          const breakingChanges = state.baseline
            ? detectBreakingChanges(state.baseline, state)
            : [];
          const isVersioned =
            breakingChanges.length > 0 &&
            consentPurpose?.status === "published";

          toast.success(
            isVersioned
              ? `New version v${(consentPurpose?.version || 0) + 1
              } published successfully`
              : consentPurpose?.status === "published"
                ? "Consent purpose updated successfully"
                : isEdit
                  ? "Consent purpose published successfully"
                  : "Purpose Master published successfully"
          );
          dispatch({ type: "RESET" });
          setShowBreakingChangeDialog(false);
          setSelectedBPsToPropagate([]); // Reset selection
          router.push("/cms/data-fiduciary/consent-purposes");
        } else {
          toast.error(
            result.error ||
            (consentPurpose?.status === "published"
              ? "Failed to update consent purpose"
              : "Failed to publish consent purpose")
          );
        }
      } catch (error) {
        console.error("Error publishing consent purpose:", error);
        toast.error("An unexpected error occurred");
      }
    });
  };

  const handlePrevious = () => {
    const params = new URLSearchParams();
    params.set("step", "3");
    if (consentPurposeId) params.set("id", consentPurposeId);
    const basePath =
      isEdit && consentPurposeId
        ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit`
        : `/cms/data-fiduciary/consent-purposes/new`;
    router.push(`${basePath}?${params.toString()}`);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-bold tracking-tight">
            {(state.step1Data?.name ?? consentPurpose?.name) || "Consent Purpose"}
          </h2>
          {consentPurpose?.updatedAt && (
            <span className="text-sm text-muted-foreground">
              (Last updated: {formatLastUpdated(consentPurpose.updatedAt)})
            </span>
          )}
          <Badge
            variant={
              consentPurpose?.status === "published" ? "default" : "secondary"
            }
            className={
              consentPurpose?.status === "published"
                ? "border-green-200 bg-green-50 text-green-700 pointer-events-none"
                : ""
            }
          >
            {consentPurpose?.status?.toUpperCase() || "DRAFT"}
          </Badge>
        </div>
        <p className="text-muted-foreground">
          {consentPurpose?.status === "published"
            ? "Review all information and save your changes"
            : "Review all information and publish your consent purpose"}
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-10 space-y-6">
        {/* General Information */}
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-3">General Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="col-span-2">
                <span className="font-medium text-muted-foreground">
                  Description:
                </span>
                <p className="mt-1 whitespace-pre-wrap break-words">
                  {(state.step1Data?.description ?? consentPurpose?.description) || "No description provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Purposes of Processing List */}
          <div className="space-y-4">
            <h3 className="font-semibold">Purpose Sub Master List</h3>
            {processingPurposes.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-muted/30 border-r w-[200px]">
                        Purpose Sub Master
                      </TableHead>
                      <TableHead className="bg-muted/30 border-r w-[150px]">
                        Description
                      </TableHead>
                      <TableHead className="bg-muted/30">
                        Attributes Included
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {processingPurposes.map((purpose: any) => (
                      <TableRow key={purpose.id} className="hover:bg-muted/20">
                        <TableCell className="border-r w-[200px]">
                          <div className="font-medium">
                            {getPurposeOfProcessingName(
                              purpose.purposeOfProcessingId
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="border-r min-w-2xl">
                          <div className="text-xs text-muted-foreground text-wrap">
                            {purpose.description || "No description"}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {purpose.userAttributeNames?.map(
                              (attrName: string) => (
                                <Badge
                                  key={attrName}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {attrName}
                                </Badge>
                              )
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  No processing purposes defined
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0">
        <div className="flex gap-3 justify-end">
          {consentPurpose?.status === "published" ? (
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={isPending}
              className="min-w-[120px]"
            >
              Previous
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              onClick={handleSaveAsDraft}
              disabled={isSavingDraft || isPending}
              className="min-w-[120px]"
            >
              {isSavingDraft ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving Draft...
                </>
              ) : (
                "Save as Draft"
              )}
            </Button>
          )}
          <Button
            type="button"
            onClick={handlePublish}
            disabled={isPending || isSavingDraft || isFetchingAffectedBPs}
            className="min-w-[100px]"
          >
            {isPending || isFetchingAffectedBPs ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                {consentPurpose?.status === "published"
                  ? "Updating..."
                  : "Publishing..."}
              </>
            ) : consentPurpose?.status === "published" ? (
              "Update"
            ) : (
              "Publish"
            )}
          </Button>
        </div>
      </div>

      {/* Breaking Change Warning Dialog */}
      {state.baseline && showBreakingChangeDialog && (
        <BreakingChangeWarningDialog
          open={showBreakingChangeDialog}
          onOpenChange={setShowBreakingChangeDialog}
          breakingChanges={breakingChanges}
          currentVersion={consentPurpose?.version || 1}
          highestVersion={highestVersion || undefined}
          affectedBPs={affectedBPs}
          consentPurposeId={Number(consentPurposeId)}
          // Pass new state and handler
          selectedBPs={selectedBPsToPropagate}
          onSelectedBPsChange={setSelectedBPsToPropagate}
          onConfirm={() => {
            // Confirmation logic is simpler: just publish with the selected IDs
            performPublish(selectedBPsToPropagate);
          }}
          isLoading={isPending}
        />
      )}
    </div>
  );
}
