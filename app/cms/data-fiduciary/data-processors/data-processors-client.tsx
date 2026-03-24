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

import { deleteDataProcessor } from "@/actions/data-processors";
import {
  DataProcessorsTable,
  type DataProcessor,
} from "@/app/cms/data-fiduciary/data-processors/data-processors-table";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface DataProcessorsClientProps {
  data: DataProcessor[];
  newButton: React.ReactNode;
  canUpdate: boolean;
  canDelete: boolean;
}

export function DataProcessorsClient({
  data,
  newButton,
  canUpdate,
  canDelete,
}: DataProcessorsClientProps) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState("");

  const handleEdit = (ouId: string) => {
    router.push(`/cms/data-fiduciary/data-processors/${ouId}/edit`);
  };

  const handleView = (ouId: string) => {
    router.push(`/cms/data-fiduciary/data-processors/${ouId}`);
  };

  const handleDelete = async (ouId: string) => {
    const result = await deleteDataProcessor({ ouId });
    if (result.success) {
      toast.success("Data processor deleted successfully");
      router.refresh();
    } else {
      toast.error(result.error || "Failed to delete data processor");
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter and New Button Group */}
      <div className="flex items-center justify-end gap-4">
        <h5 className="flex-1 tracking-tight">
          List of Data Processors ({data.length} Entries)
        </h5>
        <Input
          id="filter-names"
          placeholder="Filter by legal name..."
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
          className="max-w-60"
        />
        {newButton}
      </div>

      {/* Data Processors Table */}
      <DataProcessorsTable
        data={data}
        onEdit={handleEdit}
        onView={handleView}
        onDelete={handleDelete}
        filterValue={filterValue}
        canUpdate={canUpdate}
        canDelete={canDelete}
      />
    </div>
  );
}
