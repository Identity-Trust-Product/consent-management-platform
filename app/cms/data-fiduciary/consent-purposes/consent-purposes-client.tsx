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
  ConsentPurposesTable,
  type ConsentPurpose,
} from "@/app/cms/data-fiduciary/consent-purposes/consent-purposes-table";
import { deleteConsentPurpose } from "@/actions/consent-purposes";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface ConsentPurposesClientProps {
  data: ConsentPurpose[];
  newButton: React.ReactNode;
  canUpdate: boolean;
  canDelete: boolean;
}

export function ConsentPurposesClient({
  data,
  newButton,
  canUpdate,
  canDelete,
}: ConsentPurposesClientProps) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState("");

  const handleEdit = (id: number) => {
    router.push(`/cms/data-fiduciary/consent-purposes/${id}/edit`);
  };

  const handleView = (id: number) => {
    router.push(`/cms/data-fiduciary/consent-purposes/${id}`);
  };

  const handleDelete = async (id: number) => {
    try {
      const result = await deleteConsentPurpose({ id });
      if (result.success) {
        toast.success("Consent purpose deleted successfully");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to delete consent purpose");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the consent purpose");
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter and New Button Group */}
      <div className="flex items-center justify-end gap-4">
        <h5 className="flex-1 tracking-tight">
          List of Consent Purposes ({data.length} Entries)
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

      {/* Consent Purposes Table */}
      <ConsentPurposesTable
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
