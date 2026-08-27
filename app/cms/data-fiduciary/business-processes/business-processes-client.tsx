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

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  BusinessProcessesTable,
  type BusinessProcess,
} from "@/app/cms/data-fiduciary/business-processes/business-processes-table";
import { deleteBusinessProcess } from "@/actions/business-processes";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface BusinessProcessesClientProps {
  data: BusinessProcess[];
  newButton: React.ReactNode;
  canUpdate: boolean;
  canDelete: boolean;
}

export function BusinessProcessesClient({
  data,
  newButton,
  canUpdate,
  canDelete,
}: BusinessProcessesClientProps) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState("");

  const handleEdit = (id: number) => {
    router.push(`/cms/data-fiduciary/business-processes/${id}/edit`);
  };

  const handleView = (id: number) => {
    router.push(`/cms/data-fiduciary/business-processes/${id}`);
  };

  const handleDelete = async (id: number) => {
    try {
      const result = await deleteBusinessProcess({ id });
      if (result.success) {
        toast.success("Process deleted successfully");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to delete process");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the process");
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter and New Button Group */}
      <div className="flex items-center justify-end gap-4">
        <h5 className="flex-1 tracking-tight">
          List of Processes ({data.length} Entries)
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

      {/* Business Processes Table */}
      <BusinessProcessesTable
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
