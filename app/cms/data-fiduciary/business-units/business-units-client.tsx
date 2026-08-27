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
  BusinessUnitsTable,
  type BusinessUnit,
} from "@/app/cms/data-fiduciary/business-units/business-units-table";
import { deleteBusinessUnit } from "@/actions/business-units";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface BusinessUnitsClientProps {
  data: BusinessUnit[];
  newButton: React.ReactNode;
  canUpdate: boolean;
  canDelete: boolean;
}

export function BusinessUnitsClient({
  data,
  newButton,
  canUpdate,
  canDelete,
}: BusinessUnitsClientProps) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState("");

  const handleView = (id: number) => {
    router.push(`/cms/data-fiduciary/business-units/${id}`);
  };

  const handleEdit = (id: number) => {
    router.push(`/cms/data-fiduciary/business-units/${id}/edit`);
  };

  const handleDelete = async (id: number) => {
    try {
      const result = await deleteBusinessUnit({ id });
      if (result.success) {
        toast.success("Department deleted successfully");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to delete department");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the department");
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter and New Button Group */}
      <div className="flex items-center justify-end gap-4">
        <h5 className="flex-1 tracking-tight">
          List of Departments ({data.length} Entries)
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

      {/* Business Units Table */}
      <BusinessUnitsTable
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
