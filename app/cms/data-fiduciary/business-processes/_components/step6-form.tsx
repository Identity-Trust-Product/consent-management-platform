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

import { useState, useTransition, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { ExternalLink, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useBusinessProcessContext } from "@/contexts/business-process-context";
import { detectBreakingChanges } from "@/lib/utils/business-process-breaking-changes";
import { VersionWarningDialog } from "./version-warning-dialog";

export interface StepData {
  businessProcess?: any;
  businessUnits?: any[];
  consentPurposes?: any[];
  dataProcessors?: any[];
  userAttributes?: any[];
}

interface Step6FormProps {
  data: StepData;
  isEdit: boolean;
  businessProcessId?: string;
}

export function Step6Form({ data, isEdit, businessProcessId }: Step6FormProps) {
  const router = useRouter();
  const { state } = useBusinessProcessContext();
  const [isPending, startTransition] = useTransition();
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [showVersionWarning, setShowVersionWarning] = useState(false);
  const [highestVersion, setHighestVersion] = useState<number | null>(null);

  const { businessProcess, businessUnits = [], consentPurposes = [] } = data;

  // Get data from context
  const step1Data = state.step1Data;
  const contextConsentPurposes = state.consentPurposes || [];
  const contextEulas = state.eulas || [];

  // Detect breaking changes
  const breakingChangeInfo = useMemo(() => {
    // Only detect breaking changes if editing a published business process
    if (!isEdit || businessProcess?.status !== "published" || !state.baseline) {
      return {
        hasBreakingChanges: false,
        breakingChanges: [],
        currentVersion: businessProcess?.version || 1,
      };
    }

    const breakingChanges = detectBreakingChanges(state.baseline, state);

    return {
      hasBreakingChanges: breakingChanges.length > 0,
      breakingChanges,
      currentVersion: businessProcess?.version || 1,
    };
  }, [
    isEdit,
    businessProcess?.status,
    businessProcess?.version,
    state.baseline,
    state,
  ]);

  // Helper function to get user attribute name from ID or array
  const getUserAttributeNames = (attributes: any[]): string[] => {
    if (!attributes || attributes.length === 0) return [];

    return attributes.map((attr: any) => {
      // If it's a number (ID), find the attribute name
      if (typeof attr === "number") {
        const userAttr = (data.userAttributes || []).find(
          (ua: any) => ua.id === attr,
        );
        return userAttr?.name || `Attribute ID: ${attr}`;
      }

      // If it's already a string, return it
      if (typeof attr === "string") return attr;

      // If it's an object with name
      if (attr.name) return attr.name;

      // If it's an object with id, try to find the name
      if (attr.id) {
        const userAttr = (data.userAttributes || []).find(
          (ua: any) => ua.id === attr.id,
        );
        return userAttr?.name || `Attribute ID: ${attr.id}`;
      }

      return "Unknown Attribute";
    });
  };

  // Helper function to get business unit name
  const getBusinessUnitName = (id: number) => {
    const unit = businessUnits.find((bu: any) => bu.id === id);
    return unit?.name || "Unknown Department";
  };

  // Helper function to convert duration to display format
  const convertDurationToDays = (config: any) => {
    if (config.durationType === "until_purpose_met") {
      return "Until purpose met";
    }

    const duration = config.consentDuration || 0;
    const unit = config.durationUnit || "days";

    if (unit === "hours") {
      return `${duration} ${duration === 1 ? "hour" : "hours"}`;
    }
    if (unit === "minutes") {
      return `${duration} ${duration === 1 ? "minute" : "minutes"}`;
    }

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
    }

    return `${totalDays} days`;
  };

  // Format last updated date
  const formatLastUpdated = (date: string | Date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handlePrevious = () => {
    const params = new URLSearchParams();
    params.set("step", "4");
    if (businessProcessId) {
      params.set("id", businessProcessId);
    }

    const basePath = businessProcessId
      ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit`
      : `/cms/data-fiduciary/business-processes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const handleSaveAsDraft = async () => {
    setIsSavingDraft(true);

    try {
      // Get step 1 data from context
      if (!state.step1Data) {
        console.error("Step 1 data not found in context!");
        toast.error("Process data not found");
        setIsSavingDraft(false);
        return;
      }

      // Create a clean copy of the state for serialization
      const stateForServer = {
        step1Data: state.step1Data,
        step2Data: state.step2Data,
        step3Data: state.step3Data,
        step4Data: state.step4Data,
        consentPurposes: state.consentPurposes,
        eulas: state.eulas,
        baseline: state.baseline,
      };

      // Call the versioning-aware action with full context state
      const { saveOrPublishBusinessProcessWithVersioning } = await import(
        "@/actions/business-processes"
      );

      // For new BP, businessProcessId will be undefined - that's expected!
      const result = await saveOrPublishBusinessProcessWithVersioning({
        clientState: stateForServer, // Pass clean state object for versioning
        businessProcessId: businessProcessId
          ? parseInt(businessProcessId)
          : undefined, // undefined for new BP
        status: "draft", // Set status to draft
      });

      if (result.success) {
        toast.success("Process saved as draft");
        router.push("/cms/data-fiduciary/business-processes");
      } else {
        toast.error(result.error || "Failed to save process as draft");
      }
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error("Failed to save process as draft");
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handlePublish = async () => {
    // Check if we need to show the version warning
    if (
      isEdit &&
      businessProcess?.status === "published" &&
      breakingChangeInfo.hasBreakingChanges
    ) {
      // Fetch highest version before showing modal
      if (businessProcess?.code) {
        const { getHighestVersionForCode } = await import(
          "@/actions/business-processes"
        );
        const result = await getHighestVersionForCode(businessProcess.code);
        if (result.success) {
          setHighestVersion(result.highestVersion);
        }
      }
      setShowVersionWarning(true);
      return;
    }

    // If no breaking changes or not editing published BP, proceed directly
    performPublish();
  };

  const performPublish = () => {
    // Create a clean copy of the state for serialization
    const stateForServer = {
      step1Data: state.step1Data,
      step2Data: state.step2Data,
      step3Data: state.step3Data,
      step4Data: state.step4Data,
      consentPurposes: state.consentPurposes,
      eulas: state.eulas,
      baseline: state.baseline,
    };

    startTransition(async () => {
      try {
        // Get step 1 data from context
        if (!state.step1Data) {
          console.error("Step 1 data not found in context!");
          toast.error("Process data not found");
          return;
        }

        // Call the versioning-aware action with full context state
        const { saveOrPublishBusinessProcessWithVersioning } = await import(
          "@/actions/business-processes"
        );

        // For new BP, businessProcessId will be undefined - that's expected!
        // Use the clean state object for server serialization
        const result = await saveOrPublishBusinessProcessWithVersioning({
          clientState: stateForServer, // Pass clean state object for versioning
          businessProcessId: businessProcessId
            ? parseInt(businessProcessId)
            : undefined, // undefined for new BP
          status: "published", // Set status to published
        });

        if (result.success && result.data) {
          // Show success message with version information
          let message = isEdit
            ? "Process updated successfully"
            : "Process published successfully";

          if (result.data.isNewVersion) {
            message += ` (New version created)`;
          }

          toast.success(message);
          router.push("/cms/data-fiduciary/business-processes");
        } else {
          toast.error(result.error || "Failed to publish process");
        }
      } catch (error) {
        console.error("Error publishing business process:", error);
        toast.error("An unexpected error occurred");
      }
    });
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-bold tracking-tight">
            {step1Data?.name || businessProcess?.name || "Process"}
          </h2>
          {businessProcess?.updatedAt && (
            <span className="text-sm text-muted-foreground">
              (Last updated: {formatLastUpdated(businessProcess.updatedAt)})
            </span>
          )}
          <Badge
            variant={
              businessProcess?.status === "published" ? "default" : "secondary"
            }
            className={
              businessProcess?.status === "published"
                ? "border-green-200 bg-green-50 text-green-700 pointer-events-none"
                : ""
            }
          >
            {businessProcess?.status?.toUpperCase() || "DRAFT"}
          </Badge>
        </div>
        <p className="text-muted-foreground">
          {businessProcess?.status === "published"
            ? "Review all information and save your changes"
            : "Review all information and publish your process"}
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-10 space-y-6">
        {/* General Information */}
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-3">General Information</h3>
            <div className="grid grid-cols-2 gap-6 text-sm">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-muted-foreground">
                    Process Name:
                  </span>
                  <p className="mt-1">
                    {step1Data?.name ||
                      businessProcess?.name ||
                      "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Department:
                  </span>
                  <p className="mt-1">
                    {step1Data?.businessUnitId
                      ? getBusinessUnitName(step1Data.businessUnitId)
                      : businessProcess?.businessUnit?.name || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Code:
                  </span>
                  <p className="mt-1">
                    {step1Data?.code ||
                      businessProcess?.code ||
                      "Not specified"}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-muted-foreground">
                    Grant Description:
                  </span>
                  <p className="mt-1">
                    {step1Data?.grantDescription ||
                      businessProcess?.grantDescription ||
                      "No description provided"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Revoke Description:
                  </span>
                  <p className="mt-1">
                    {step1Data?.revokeDescription ||
                      businessProcess?.revokeDescription ||
                      "No description provided"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Reconsent Description:
                  </span>
                  <p className="mt-1">
                    {step1Data?.reconsentDescription ||
                      businessProcess?.reconsentDescription ||
                      "No description provided"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">List of Purpose Master</h3>

            {contextConsentPurposes.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-muted/30 border-r whitespace-normal">
                        Purpose Master
                      </TableHead>
                      <TableHead className="bg-muted/30 border-r whitespace-normal">
                        Consent Duration
                      </TableHead>
                      <TableHead className="bg-muted/30 border-r whitespace-normal">
                        Purpose Sub Master
                      </TableHead>
                      <TableHead className="bg-muted/30 border-r whitespace-normal">
                        Attributes
                      </TableHead>
                      <TableHead className="bg-muted/30 border-r text-center whitespace-normal">
                        Mandatory
                      </TableHead>
                      <TableHead className="bg-muted/30 border-r text-center whitespace-normal py-2">
                        Re-consentable by Principal
                      </TableHead>
                      <TableHead className="bg-muted/30 text-center border-r whitespace-normal">
                        Revocable by Principal
                      </TableHead>
                      <TableHead className="bg-muted/30 whitespace-normal">
                        Retention Duration
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contextConsentPurposes.map((config: any) => {
                      const rules = config.processingRules || [];

                      // If no processing rules, show one row with a message
                      if (rules.length === 0) {
                        return (
                          <TableRow key={`${config.id}-empty`}>
                            <TableCell className="font-medium border-r">
                              {config.consentPurposeName ||
                                config.consentPurpose?.name ||
                                config.name ||
                                "Unnamed Purpose"}
                            </TableCell>
                            <TableCell className="border-r">
                              {convertDurationToDays(config)}
                            </TableCell>
                            <TableCell
                              className="font-medium text-muted-foreground border-r"
                              colSpan={6}
                            >
                              No processing rules configured
                            </TableCell>
                          </TableRow>
                        );
                      }

                      // Normal rendering with processing rules
                      return rules.map((rule: any, ruleIndex: number) => (
                        <TableRow key={`${config.id}-${ruleIndex}`}>
                          {ruleIndex === 0 && (
                            <TableCell
                              rowSpan={rules.length}
                              className="font-medium border-r"
                            >
                              {config.consentPurposeName ||
                                config.consentPurpose?.name ||
                                config.name ||
                                "Unnamed Purpose"}
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
                            {rule.processingPurposeName ||
                              "Unknown Processing Purpose"}
                          </TableCell>
                          <TableCell className="border-r">
                            <div className="flex flex-wrap gap-1">
                              {getUserAttributeNames(
                                rule.userAttributes || [],
                              ).map((attrName: string, i: number) => (
                                <Badge
                                  key={i}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {attrName}
                                </Badge>
                              ))}
                              {(!rule.userAttributes ||
                                rule.userAttributes.length === 0) && (
                                <span className="text-xs text-muted-foreground">
                                  No attributes
                                </span>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-center border-r">
                            <Checkbox checked={rule.isMandatory} disabled />
                          </TableCell>
                          <TableCell className="text-center border-r">
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
                        </TableRow>
                      ));
                    })}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  No consent purposes selected
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">List of Redirectional URLs</h3>

            {contextEulas.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-muted/30 border-r">
                        Redirectional URL Name
                      </TableHead>
                      <TableHead className="bg-muted/30">Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contextEulas.map((eula: any, index: number) => (
                      <TableRow
                        key={eula.id || index}
                        className="hover:bg-muted/20"
                      >
                        <TableCell className="border-r font-medium">
                          {eula.title}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span
                              className="truncate max-w-[400px] text-sm"
                              title={eula.link}
                            >
                              {eula.link}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => window.open(eula.link, "_blank")}
                            >
                              <ExternalLink className="h-3 w-3" />
                            </Button>
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
                  No Redirectional URLs added
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0">
        <div className="flex gap-3 justify-end">
          <Button type="button" variant="outline" onClick={handlePrevious}>
            Previous
          </Button>
          {!isEdit && (
            <Button
              type="button"
              variant="secondary"
              onClick={handleSaveAsDraft}
              className="min-w-[120px]"
              disabled={isSavingDraft}
            >
              {isSavingDraft ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save as Draft"
              )}
            </Button>
          )}
          <Button
            type="button"
            onClick={handlePublish}
            className="min-w-[100px]"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isEdit ? "Updating..." : "Publishing..."}
              </>
            ) : isEdit ? (
              "Update"
            ) : (
              "Publish"
            )}
          </Button>
        </div>
      </div>

      {/* Version Warning Dialog */}
      <VersionWarningDialog
        open={showVersionWarning}
        onOpenChange={setShowVersionWarning}
        onConfirm={() => {
          setShowVersionWarning(false);
          performPublish();
        }}
        currentVersion={breakingChangeInfo.currentVersion}
        newVersion={(highestVersion || breakingChangeInfo.currentVersion) + 1}
        breakingChanges={breakingChangeInfo.breakingChanges}
      />
    </div>
  );
}
