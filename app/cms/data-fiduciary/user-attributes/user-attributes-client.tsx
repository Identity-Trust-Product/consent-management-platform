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
  UserAttributesTable,
  type UserAttribute,
} from "@/app/cms/data-fiduciary/user-attributes/user-attributes-table";
import { deleteUserAttribute } from "@/actions/user-attributes";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface UserAttributesClientProps {
  data: UserAttribute[];
  newButton: React.ReactNode;
  canUpdate: boolean;
  canDelete: boolean;
}

export function UserAttributesClient({
  data,
  newButton,
  canUpdate,
  canDelete,
}: UserAttributesClientProps) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState("");

  const handleEdit = (id: number) => {
    router.push(`/cms/data-fiduciary/user-attributes/${id}/edit`);
  };

  const handleView = (id: number) => {
    router.push(`/cms/data-fiduciary/user-attributes/${id}`);
  };

  const handleDelete = async (id: number) => {
    const result = await deleteUserAttribute({ id });
    if (result.success) {
      toast.success("Purpose attribute deleted successfully");
      router.refresh();
    } else {
      toast.error(result.error || "Failed to delete purpose attribute");
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter and New Button Group */}
      <div className="flex items-center justify-end gap-4">
        <h5 className="flex-1 tracking-tight">
          List of Purpose Attributes ({data.length} Entries)
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

      {/* User Attributes Table */}
      <UserAttributesTable
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
