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
import {
  NoticesTable,
  type Notice,
} from "@/app/cms/data-fiduciary/notices/notices-table";

interface NoticesClientProps {
  data: Notice[];
  newButton: React.ReactNode;
}

export function NoticesClient({ data, newButton }: NoticesClientProps) {
  const router = useRouter();

  const handleView = (publicId: string) => {
    router.push(`/cms/data-fiduciary/notices/${publicId}`);
  };

  return (
    <div className="space-y-4">
      {/* Title and New Button Group */}
      <div className="flex items-center justify-end gap-4">
        <h5 className="flex-1 tracking-tight">
          List of Notices ({data.length} Entries)
        </h5>
        {newButton}
      </div>

      {/* Notices Table */}
      <NoticesTable data={data} onView={handleView} />
    </div>
  );
}
