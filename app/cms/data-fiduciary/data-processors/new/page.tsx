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

import { redirect } from "next/navigation";
import { verifyPermission } from "@/lib/safe-action";
import { Resources, Actions } from "@/lib/constants/rbac";
import { DataProcessorForm } from "@/app/cms/data-fiduciary/data-processors/_components/data-processor-form";

export default async function NewDataProcessorPage() {
  try {
    await verifyPermission(Resources.DATA_PROCESSOR, Actions.CREATE);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  return (
    <div className="pt-4 px-6">
      <DataProcessorForm mode="new" />
    </div>
  );
}
