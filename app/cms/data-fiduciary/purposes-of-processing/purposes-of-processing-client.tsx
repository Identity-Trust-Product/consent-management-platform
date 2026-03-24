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

import { deletePurposeOfProcessing } from "@/actions/purposes-of-processing";
import {
  PurposesOfProcessingTable,
  type PurposeOfProcessing,
} from "@/app/cms/data-fiduciary/purposes-of-processing/purposes-of-processing-table";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface PurposesOfProcessingClientProps {
  data: PurposeOfProcessing[];
  newButton: React.ReactNode;
  canUpdate: boolean;
  canDelete: boolean;
}

export function PurposesOfProcessingClient({
  data,
  newButton,
  canUpdate,
  canDelete,
}: PurposesOfProcessingClientProps) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState("");

  const handleView = (id: number) => {
    router.push(`/cms/data-fiduciary/purposes-of-processing/${id}`);
  };

  const handleEdit = (id: number) => {
    router.push(`/cms/data-fiduciary/purposes-of-processing/${id}/edit`);
  };

  const handleDelete = async (id: number) => {
    const result = await deletePurposeOfProcessing({ id });
    if (result.success) {
      toast.success("Purpose of processing deleted successfully");
      router.refresh();
    } else {
      toast.error(result.error || "Failed to delete purpose of processing");
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter and New Button Group */}
      <div className="flex items-center justify-end gap-4">
        <h5 className="flex-1 tracking-tight">
          List of Purposes of Processing ({data.length} Entries)
        </h5>
        <Input
          id="filter-names"
          placeholder="Filter by names..."
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
          className="max-w-60"
        />
        {newButton}
      </div>

      {/* Purposes of Processing Table */}
      <PurposesOfProcessingTable
        data={data}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        filterValue={filterValue}
        canUpdate={canUpdate}
        canDelete={canDelete}
      />
    </div>
  );
}
