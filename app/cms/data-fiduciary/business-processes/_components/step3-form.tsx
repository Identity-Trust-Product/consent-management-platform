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
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ActionButtonsGroup } from "@/components/ui/action-buttons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBusinessProcessContext } from "@/contexts/business-process-context";
import { AddEulaDialog } from "./dialogs/add-eula-dialog";
import { toast } from "sonner";

interface EulaData {
  id?: number;
  title: string;
  link: string;
}

export interface StepData {
  businessProcess?: any;
  businessUnits?: any[];
  consentPurposes?: any[];
  dataProcessors?: any[];
  userAttributes?: any[];
}

interface Step3FormProps {
  data: StepData;
  isEdit: boolean;
  businessProcessId?: string;
}

export function Step3Form({ data, isEdit, businessProcessId }: Step3FormProps) {
  const router = useRouter();
  const { state, dispatch } = useBusinessProcessContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEula, setEditingEula] = useState<{
    id: number;
    title: string;
    link: string;
  } | null>(null);

  // Get EULAs from context
  const eulas = state.eulas || [];

  const handleAddEula = (eulaData: EulaData) => {
    dispatch({
      type: "ADD_EULA",
      payload: {
        title: eulaData.title,
        link: eulaData.link,
      },
    });
    toast.success("Redirectional URL added successfully!");
    setDialogOpen(false);
  };

  const handleEditEula = (eulaData: EulaData) => {
    if (editingEula) {
      dispatch({
        type: "UPDATE_EULA",
        payload: {
          id: editingEula.id,
          title: eulaData.title,
          link: eulaData.link,
        },
      });
      toast.success("Redirectional URL updated successfully!");
      setEditingEula(null);
      setDialogOpen(false);
    }
  };

  const handleDeleteEula = (eulaId: number) => {
    dispatch({
      type: "DELETE_EULA",
      payload: eulaId,
    });
    toast.success("Redirectional URL deleted successfully!");
  };

  const openEditDialog = (eula: {
    id: number;
    title: string;
    link: string;
  }) => {
    setEditingEula(eula);
    setDialogOpen(true);
  };

  const openAddDialog = () => {
    setEditingEula(null);
    setDialogOpen(true);
  };

  const handleNext = () => {
    // Save EULAs as legal documents in the format: { "title": "link" }
    const legalDocuments: Record<string, string> = {};
    eulas.forEach((eula: any) => {
      legalDocuments[eula.title] = eula.link;
    });

    // Store the legal documents in step3 data
    dispatch({
      type: "SET_STEP3_DATA",
      payload: { legalDocuments },
    });

    // Navigate to next step (no DB operations)
    const params = new URLSearchParams();
    params.set("step", "4");
    if (businessProcessId) {
      params.set("id", businessProcessId);
    }

    const basePath =
      isEdit && businessProcessId
        ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit`
        : `/cms/data-fiduciary/business-processes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const handlePrevious = () => {
    const params = new URLSearchParams();
    params.set("step", "2");
    if (businessProcessId) {
      params.set("id", businessProcessId);
    }

    const basePath = businessProcessId
      ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit`
      : `/cms/data-fiduciary/business-processes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <h2 className="text-2xl font-bold tracking-tight">
          Step 3. Choose Redirectional URL
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* EULAs Table */}
        {eulas.length === 0 ? (
          <div className="border border-dashed rounded-lg p-8 text-center">
            <h3 className="text-lg font-medium mb-2">No Redirectional URL yet!</h3>
            <p className="text-muted-foreground mb-4">
              Add a Redirectional URL needed for carrying out the Process by clicking
              the button below
            </p>
            <Button onClick={openAddDialog}>Add Redirectional URL</Button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* List Header with Add Button */}
            <div className="flex items-center justify-between">
              <h5 className="text-neutral-500 font-medium">
                List of Redirectional URLs ({eulas.length}{" "}
                {eulas.length === 1 ? "Entry" : "Entries"})
              </h5>
              <Button onClick={openAddDialog}>Add Redirectional URL</Button>
            </div>

            {/* Table */}
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Redirectional URL Name</TableHead>
                    <TableHead className="font-semibold">Link</TableHead>
                    <TableHead className="font-semibold text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {eulas.map((eula: any, index: number) => (
                    <TableRow key={eula.id || index}>
                      <TableCell className="font-medium">
                        {eula.title}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span
                            className="truncate max-w-[300px]"
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
                      <TableCell className="text-center">
                        <ActionButtonsGroup
                          onEdit={() =>
                            eula.id &&
                            openEditDialog(
                              eula as {
                                id: number;
                                title: string;
                                link: string;
                              }
                            )
                          }
                          onDelete={() => eula.id && handleDeleteEula(eula.id)}
                          className="justify-center gap-1"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0">
        <div className="flex gap-3 justify-end">
          <Button type="button" variant="outline" onClick={handlePrevious}>
            Previous
          </Button>
          <Button type="button" onClick={handleNext} className="min-w-[100px]">
            Next
          </Button>
        </div>
      </div>

      {/* Add EULA Dialog */}
      <AddEulaDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSave={editingEula ? handleEditEula : handleAddEula}
        editData={
          editingEula
            ? { title: editingEula.title, link: editingEula.link }
            : null
        }
        isEdit={!!editingEula}
      />
    </div>
  );
}
