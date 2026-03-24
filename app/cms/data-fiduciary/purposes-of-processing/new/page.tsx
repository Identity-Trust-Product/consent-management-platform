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
import { PurposeOfProcessingForm } from "@/app/cms/data-fiduciary/purposes-of-processing/_components/purpose-of-processing-form";

export default async function NewPurposeOfProcessingPage() {
  try {
    await verifyPermission(Resources.PURPOSE_OF_PROCESSING, Actions.CREATE);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  return (
    <div className="pt-4 px-6">
      <PurposeOfProcessingForm mode="new" />
    </div>
  );
}
