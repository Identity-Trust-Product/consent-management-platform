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
import { UserAttributeForm } from "../_components/user-attribute-form";

export default async function NewUserAttributePage() {
  try {
    await verifyPermission(Resources.USER_ATTRIBUTE, Actions.CREATE);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  return (
    <div className="pt-4 px-6">
      <UserAttributeForm mode="new" />
    </div>
  );
}
