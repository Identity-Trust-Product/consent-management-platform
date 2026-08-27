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

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getNextVersionsForBPCodes } from "@/actions/business-processes";

export interface BreakingChange {
  description: string;
  details?: string;
  oldValue?: any;
  newValue?: any;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  breakingChanges: BreakingChange[];
  currentVersion: number;
  highestVersion?: number;
  consentPurposeId: number;
  selectedBPs: number[];
  onSelectedBPsChange: (ids: number[]) => void;
  onConfirm: () => void;
  affectedBPs: any[];
  isLoading?: boolean;
}

function formatValue(value: any): string {
  if (value === null || value === undefined) return "None";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value))
    return value.length === 0 ? "None" : value.join(", ");
  if (typeof value === "string" && value.trim() === "") return "None";
  return String(value);
}

// Remove 'async' here - Client components generally shouldn't be async functions in React/Next.js
export function BreakingChangeWarningDialog({
  open,
  onOpenChange,
  breakingChanges,
  currentVersion,
  highestVersion,
  consentPurposeId,
  selectedBPs,
  onSelectedBPsChange,
  onConfirm,
  affectedBPs,
  isLoading = false,
}: Props) {
  const nextVersion = (highestVersion || currentVersion) + 1;
  const [visibleVersions, setVisibleVersions] = React.useState<
    Record<string, number>
  >({});
  const [nextVersions, setNextVersions] = React.useState<
    Record<string, number>
  >({});
  const [loadingVersions, setLoadingVersions] = React.useState(false);

  // Group BPs by code
  const groupedBPs = useMemo(() => {
    if (!affectedBPs) return {};
    const groups: Record<string, any[]> = {};
    affectedBPs.forEach((bp) => {
      if (!groups[bp.code]) groups[bp.code] = [];
      groups[bp.code].push(bp);
    });
    // Sort versions descending
    Object.values(groups).forEach((group) =>
      group.sort((a, b) => b.version - a.version)
    );
    return groups;
  }, [affectedBPs]);

  const uniqueCodes = useMemo(() => Object.keys(groupedBPs), [groupedBPs]);

  // Fetch next versions from database
  useEffect(() => {
    const fetchNextVersions = async () => {
      if (uniqueCodes.length === 0) return;
      setLoadingVersions(true);
      try {
        const result = await getNextVersionsForBPCodes(uniqueCodes);
        if (result.success && result.versions) {
          setNextVersions(result.versions);
        }
      } catch (error) {
        console.error("Error fetching next versions:", error);
      } finally {
        setLoadingVersions(false);
      }
    };
    fetchNextVersions();
  }, [uniqueCodes]);

  const getCurrentBP = (code: string) => {
    const versions = groupedBPs[code];
    if (!versions || versions.length === 0) return null;

    // 1. Check if we have a specific visible version override
    if (visibleVersions[code]) {
      return (
        versions.find((v) => v.id === visibleVersions[code]) || versions[0]
      );
    }

    // 2. Check if one of these versions is already selected
    const selected = versions.find((v) => selectedBPs.includes(v.id));
    if (selected) return selected;

    // 3. Default to latest
    return versions[0];
  };

  const hasAffectedBPs = uniqueCodes.length > 0;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      // Select the current visible/latest version for all codes
      const newSelectedIds = uniqueCodes
        .map((code) => getCurrentBP(code)?.id)
        .filter((id): id is number => id !== undefined);
      onSelectedBPsChange(newSelectedIds);
    } else {
      onSelectedBPsChange([]);
    }
  };

  const handleSelectBP = (bpId: number, checked: boolean) => {
    if (checked) {
      onSelectedBPsChange([...selectedBPs, bpId]);
    } else {
      onSelectedBPsChange(selectedBPs.filter((id) => id !== bpId));
    }
  };

  const handleVersionChange = (code: string, newVersionIdStr: string) => {
    const newVersionId = parseInt(newVersionIdStr);
    setVisibleVersions((prev) => ({ ...prev, [code]: newVersionId }));

    // If currently selected, update the selection
    const versions = groupedBPs[code];
    const oldSelected = versions.find((v) => selectedBPs.includes(v.id));

    if (oldSelected && oldSelected.id !== newVersionId) {
      const newSelected = selectedBPs.filter((id) => id !== oldSelected.id);
      onSelectedBPsChange([...newSelected, newVersionId]);
    }
  };

  // Calculate selection state based on unique codes (rows)
  const selectedCount = uniqueCodes.filter((code) => {
    const bp = getCurrentBP(code);
    return bp && selectedBPs.includes(bp.id);
  }).length;

  const allBPsSelected = hasAffectedBPs && selectedCount === uniqueCodes.length;
  const someBPsSelected = selectedCount > 0 && !allBPsSelected;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" max-h-[85vh] flex flex-col">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-100 rounded-full">
              <AlertCircle className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <DialogTitle className="text-xl">Create New Version?</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">
                The changes you made require creating version {nextVersion}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-3 py-2">
          <p className="text-sm text-muted-foreground mb-4">
            The following breaking changes were detected:
          </p>
          {breakingChanges.map((change, index) => (
            <div
              key={index}
              className="p-4 border border-amber-200 bg-amber-50 rounded-lg space-y-2"
            >
              <div className="flex items-start gap-2">
                <div className="mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-amber-600" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="font-medium text-sm text-amber-900">
                    {change.description}
                  </p>
                  {change.details && (
                    <p className="text-sm text-amber-800">{change.details}</p>
                  )}
                  {(change.oldValue !== undefined ||
                    change.newValue !== undefined) && (
                      <div className="mt-2 space-y-1 text-sm">
                        {change.oldValue !== undefined && (
                          <p className="text-amber-800">
                            <span className="font-medium">Previous:</span>{" "}
                            {formatValue(change.oldValue)}
                          </p>
                        )}
                        {change.newValue !== undefined && (
                          <p className="text-amber-800">
                            <span className="font-medium">New:</span>{" "}
                            {formatValue(change.newValue)}
                          </p>
                        )}
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}

          {hasAffectedBPs && (
            <div className="mt-4">
              <div className="font-semibold mb-2 text-sm text-blue-900">
                Select affected processes to propagate changes to:
              </div>
              <div className="border rounded-lg mb-3 overflow-y-auto max-h-[200px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox
                          checked={
                            someBPsSelected ? "indeterminate" : allBPsSelected
                          }
                          onCheckedChange={handleSelectAll}
                          aria-label="Select all"
                        />
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {uniqueCodes.map((code) => {
                      const bp = getCurrentBP(code);
                      if (!bp) return null;
                      const isSelected = selectedBPs.includes(bp.id);
                      const versions = groupedBPs[code];

                      return (
                        <TableRow key={code}>
                          <TableCell>
                            <Checkbox
                              checked={isSelected}
                              onCheckedChange={(checked) =>
                                handleSelectBP(bp.id, !!checked)
                              }
                              aria-label={`Select ${bp.name}`}
                            />
                          </TableCell>
                          <TableCell>{bp.name}</TableCell>
                          <TableCell>{bp.code}</TableCell>
                          <TableCell>
                            <Select
                              value={String(bp.id)}
                              onValueChange={(val) =>
                                handleVersionChange(code, val)
                              }
                            >
                              <SelectTrigger className="h-8 w-[100px]">
                                <SelectValue placeholder="Version" />
                              </SelectTrigger>
                              <SelectContent>
                                {versions.map((v) => (
                                  <SelectItem key={v.id} value={String(v.id)}>
                                    v{v.version}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            {loadingVersions ? (
                              <span className="text-muted-foreground">
                                Loading...
                              </span>
                            ) : (
                              <span className="font-medium">
                                v{nextVersions[code] || versions[0].version + 1}
                              </span>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <span className="font-medium">What happens next:</span> A new
              version (v{nextVersion}) will be created with these changes. The
              previous version will remain accessible for reference.
              {hasAffectedBPs && selectedBPs.length > 0 ? (
                <>
                  {" "}
                  New versions of the{" "}
                  <strong>{selectedBPs.length} selected</strong> business
                  processes will also be created.
                </>
              ) : hasAffectedBPs && selectedBPs.length === 0 ? (
                <> Affected processes will remain unchanged.</>
              ) : null}
            </p>
          </div>
        </div>

        <DialogFooter className="border-t pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="button" onClick={onConfirm} disabled={isLoading}>
            {isLoading ? "Creating..." : `Create Version ${nextVersion}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
