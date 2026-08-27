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

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { PolicyFormData } from "./policy-form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getUsers } from "@/actions/data-retention-policies";

interface Step2Props {
  initialData: PolicyFormData;
  businessProcesses: any[];
  onBack: (data?: Partial<PolicyFormData>) => void;
  onSubmit: (data: Partial<PolicyFormData>) => void;
  isSubmitting: boolean;
  onCancel: () => void;
}

type ConfigRow = {
  businessProcessRuleId: number;
  trigger: string;
  notifyUserIds: string[];
  // Metadata for display
  consentPurposeName: string;
  processingPurposeName: string;
  userAttributeNames: string[];
  retentionDurationValue?: number;
  retentionDurationUnit?: string;
};

type BPConfig = {
  businessProcessId: number;
  name: string;
  version: number;
  rows: ConfigRow[];
};

export function Step2ConfigureProcess({
  initialData,
  businessProcesses,
  onBack,
  onSubmit,
  isSubmitting,
  onCancel,
}: Step2Props) {
  // Initialize state from initialData to support state retention
  const [selectedBPs, setSelectedBPs] = useState<BPConfig[]>(() => {
    if (!initialData.configurations || initialData.configurations.length === 0) {
      return [];
    }

    // Group configurations by business process
    const bpMap = new Map<number, BPConfig>();

    initialData.configurations.forEach((config) => {
      // Find the rule to get metadata
      let rule: any;
      let bp: any;

      for (const p of businessProcesses) {
        const foundRule = p.businessProcessRules.find((r: any) => r.id === config.businessProcessRuleId);
        if (foundRule) {
          rule = foundRule;
          bp = p;
          break;
        }
      }

      if (rule && bp) {
        if (!bpMap.has(bp.id)) {
          bpMap.set(bp.id, {
            businessProcessId: bp.id,
            name: bp.name,
            version: bp.version,
            rows: [],
          });
        }

        const bpConfig = bpMap.get(bp.id)!;
        bpConfig.rows.push({
          businessProcessRuleId: config.businessProcessRuleId,
          trigger: config.trigger,
          notifyUserIds: config.notifyUserIds || [],
          consentPurposeName: rule.consentPurpose.name,
          processingPurposeName: rule.processingPurpose.name,
          userAttributeNames: rule.processingPurpose.userAttributeNames || [],
          retentionDurationValue: rule.retentionDurationValue,
          retentionDurationUnit: rule.retentionDurationUnit,
        });
      }
    });

    return Array.from(bpMap.values());
  });

  const [users, setUsers] = useState<Array<{ id: string; name: string | null; email: string | null }>>([]);

  useEffect(() => {
    async function fetchUsers() {
      const result = await getUsers();
      if (result.success && result.data) {
        setUsers(result.data);
      }
    }
    fetchUsers();
  }, []);

  const handleValuesChange = (newValues: string[]) => {
    const newIds = newValues.map((v) => parseInt(v));
    const currentIds = selectedBPs.map((bp) => bp.businessProcessId);

    // Find added IDs
    const addedIds = newIds.filter((id) => !currentIds.includes(id));
    // Find removed IDs
    const removedIds = currentIds.filter((id) => !newIds.includes(id));

    let updatedBPs = [...selectedBPs];

    // Remove BPs
    if (removedIds.length > 0) {
      updatedBPs = updatedBPs.filter(
        (bp) => !removedIds.includes(bp.businessProcessId)
      );
    }

    // Add BPs
    addedIds.forEach((id) => {
      const bp = businessProcesses.find((b) => b.id === id);
      if (bp) {
        const newConfig: BPConfig = {
          businessProcessId: bp.id,
          name: bp.name,
          version: bp.version,
          rows: bp.businessProcessRules.map((rule: any) => ({
            businessProcessRuleId: rule.id,
            trigger: "Post Consent Revocation", // Default
            notifyUserIds: [],
            consentPurposeName: rule.consentPurpose.name,
            processingPurposeName: rule.processingPurpose.name,
            userAttributeNames: rule.processingPurpose.userAttributeNames || [],
            retentionDurationValue: rule.retentionDurationValue,
            retentionDurationUnit: rule.retentionDurationUnit,
          })),
        };
        updatedBPs.push(newConfig);
      }
    });

    setSelectedBPs(updatedBPs);
  };

  const handleRemoveBP = (bpId: number) => {
    setSelectedBPs(selectedBPs.filter((bp) => bp.businessProcessId !== bpId));
  };

  const updateRow = (
    bpId: number,
    ruleId: number,
    field: "trigger" | "notifyUserIds",
    value: string | string[]
  ) => {
    setSelectedBPs((prev) =>
      prev.map((bp) => {
        if (bp.businessProcessId !== bpId) return bp;
        return {
          ...bp,
          rows: bp.rows.map((row) => {
            if (row.businessProcessRuleId !== ruleId) return row;
            return { ...row, [field]: value };
          }),
        };
      })
    );
  };

  const setAllForBP = (
    bpId: number,
    field: "trigger" | "notifyUserIds",
    value: string | string[]
  ) => {
    setSelectedBPs((prev) =>
      prev.map((bp) => {
        if (bp.businessProcessId !== bpId) return bp;
        return {
          ...bp,
          rows: bp.rows.map((row) => ({ ...row, [field]: value })),
        };
      })
    );
  };

  const handleSubmit = () => {
    // Flatten configurations
    const configurations = selectedBPs.flatMap((bp) =>
      bp.rows.map((row) => ({
        businessProcessRuleId: row.businessProcessRuleId,
        trigger: row.trigger,
        notifyUserIds: row.notifyUserIds,
      }))
    );

    onSubmit({ configurations });
  };

  const handleBack = () => {
    // Save current state before going back
    const configurations = selectedBPs.flatMap((bp) =>
      bp.rows.map((row) => ({
        businessProcessRuleId: row.businessProcessRuleId,
        trigger: row.trigger,
        notifyUserIds: row.notifyUserIds,
      }))
    );
    onBack({ configurations });
  };

  const [setForAllSelections, setSetForAllSelections] = useState<{ [key: number]: string[] }>({});

  const handleSetForAllChange = (bpId: number, vals: string[]) => {
    setSetForAllSelections(prev => ({ ...prev, [bpId]: vals }));
    setAllForBP(bpId, "notifyUserIds", vals);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <h2 className="text-2xl font-bold tracking-tight">
          Step 2. Configure Policy for Processes
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label>Select Processes</Label>
              <MultiSelect
                values={selectedBPs.map((bp) => bp.businessProcessId.toString())}
                onValuesChange={handleValuesChange}
              >
                <MultiSelectTrigger className="w-full">
                  <MultiSelectValue placeholder="Select Processes..." />
                </MultiSelectTrigger>
                <MultiSelectContent>
                  {businessProcesses.map((bp) => (
                    <MultiSelectItem key={bp.id} value={bp.id.toString()}>
                      {bp.name} (v{bp.version})
                    </MultiSelectItem>
                  ))}
                </MultiSelectContent>
              </MultiSelect>
            </div>

            {selectedBPs.map((bp, index) => {
              // Group rows by consent purpose for row merging
              const groupedRows: { [key: string]: ConfigRow[] } = {};
              bp.rows.forEach(row => {
                if (!groupedRows[row.consentPurposeName]) {
                  groupedRows[row.consentPurposeName] = [];
                }
                groupedRows[row.consentPurposeName].push(row);
              });

              return (
                <div
                  key={bp.businessProcessId}
                  className="border rounded-lg p-4 bg-muted/10 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium flex items-center gap-2">
                      {index + 1}. {bp.name}
                      <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground border">
                        v{bp.version}
                      </span>
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => handleRemoveBP(bp.businessProcessId)}
                    >
                      <Trash2 className="h-4 w-4" /> Remove
                    </Button>
                  </div>

                  <div className="bg-white rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader className="bg-muted">
                        <TableRow>
                          <TableHead>Consent Purpose</TableHead>
                          <TableHead>Purpose Sub Master</TableHead>
                          <TableHead>Purpose Attribute</TableHead>
                          <TableHead>Retention Duration</TableHead>
                          <TableHead className="w-[200px]">Trigger*</TableHead>
                          <TableHead className="w-[300px]">
                            Send Notification To?
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* Set For All Row */}
                        <TableRow className="bg-muted/30">
                          <TableCell colSpan={4} className="font-medium text-muted-foreground border-r">
                            SET FOR ALL
                          </TableCell>
                          <TableCell className="border-r">
                            <Select
                              onValueChange={(val) =>
                                setAllForBP(bp.businessProcessId, "trigger", val)
                              }
                            >
                              <SelectTrigger className="h-8">
                                <SelectValue placeholder="Select..." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Post Consent Revocation">
                                  Post Consent Revocation
                                </SelectItem>
                                <SelectItem value="Post Consent Expiry">
                                  Post Consent Expiry
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <MultiSelect
                              values={setForAllSelections[bp.businessProcessId] || []}
                              onValuesChange={(vals) => handleSetForAllChange(bp.businessProcessId, vals)}
                            >
                              <MultiSelectTrigger className="h-8 w-full">
                                <MultiSelectValue placeholder="Select Users..." />
                              </MultiSelectTrigger>
                              <MultiSelectContent>
                                {users.map((user) => (
                                  <MultiSelectItem key={user.id} value={user.id}>
                                    {user.name}
                                  </MultiSelectItem>
                                ))}
                              </MultiSelectContent>
                            </MultiSelect>
                          </TableCell>
                        </TableRow>

                        {/* Rule Rows with Merged Cells */}
                        {Object.entries(groupedRows).map(([consentPurpose, rows]) => (
                          rows.map((row, rowIndex) => (
                            <TableRow key={row.businessProcessRuleId}>
                              {rowIndex === 0 && (
                                <TableCell
                                  rowSpan={rows.length}
                                  className="border-r font-medium align-top bg-muted/5"
                                >
                                  {consentPurpose}
                                </TableCell>
                              )}
                              <TableCell className="border-r">{row.processingPurposeName}</TableCell>
                              <TableCell className="border-r">
                                <div className="flex flex-wrap gap-1">
                                  {row.userAttributeNames.slice(0, 3).map((attr, i) => (
                                    <span
                                      key={i}
                                      className="text-xs bg-muted px-1.5 py-0.5 rounded w-fit"
                                    >
                                      {attr}
                                    </span>
                                  ))}
                                  {row.userAttributeNames.length > 3 && (
                                    <span className="text-xs text-muted-foreground">
                                      +{row.userAttributeNames.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="border-r">
                                {row.retentionDurationValue && row.retentionDurationUnit
                                  ? `${row.retentionDurationValue} ${row.retentionDurationUnit}`
                                  : "-"}
                              </TableCell>
                              <TableCell className="border-r">
                                <Select
                                  value={row.trigger}
                                  onValueChange={(val) =>
                                    updateRow(
                                      bp.businessProcessId,
                                      row.businessProcessRuleId,
                                      "trigger",
                                      val
                                    )
                                  }
                                >
                                  <SelectTrigger className="h-8">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Post Consent Revocation">
                                      Post Consent Revocation
                                    </SelectItem>
                                    <SelectItem value="Post Consent Expiry">
                                      Post Consent Expiry
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell>
                                <MultiSelect
                                  values={row.notifyUserIds}
                                  onValuesChange={(vals) =>
                                    updateRow(
                                      bp.businessProcessId,
                                      row.businessProcessRuleId,
                                      "notifyUserIds",
                                      vals
                                    )
                                  }
                                >
                                  <MultiSelectTrigger className="h-8 w-full">
                                    <MultiSelectValue placeholder="Select Users..." />
                                  </MultiSelectTrigger>
                                  <MultiSelectContent>
                                    {users.map((user) => (
                                      <MultiSelectItem key={user.id} value={user.id}>
                                        {user.name}
                                      </MultiSelectItem>
                                    ))}
                                  </MultiSelectContent>
                                </MultiSelect>
                              </TableCell>
                            </TableRow>
                          ))
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0">
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={onCancel} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button variant="outline" onClick={handleBack} disabled={isSubmitting}>
            Back
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Saving Policy..." : "Save Policy"}
          </Button>
        </div>
      </div>
    </div>
  );
}
