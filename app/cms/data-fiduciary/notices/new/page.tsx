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

import { Suspense } from "react";
import { redirect } from "next/navigation";
import { verifyPermission } from "@/lib/safe-action";
import { Resources, Actions } from "@/lib/constants/rbac";
import { NewNoticeForm } from "./new-notice-form";
import { getBusinessProcesses } from "@/actions/business-processes";

async function NewNoticeContent() {
  try {
    await verifyPermission(Resources.NOTICE, Actions.CREATE);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  const businessProcesses = await getBusinessProcesses();

  return (
    <div className="pt-4 px-6">
      <div className="mx-auto">
        <NewNoticeForm businessProcesses={businessProcesses} />
      </div>
    </div>
  );
}

export default function NewNoticePage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-sm text-muted-foreground">
              Loading form...
            </p>
          </div>
        </div>
      }
    >
      <NewNoticeContent />
    </Suspense>
  );
}
