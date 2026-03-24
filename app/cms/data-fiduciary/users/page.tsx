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

import { getUsersWithRoles } from "@/actions/admin";
import { Actions, Resources } from "@/lib/constants/rbac";
import { checkPermission } from "@/lib/rbac";
import AdminClient from "./admin-client";
import { Forbidden } from "@/components/forbidden";

export default async function UserManagementPage() {
  // Check permissions using standard pattern
  const canRead = await checkPermission(Resources.USER, Actions.READ);

  if (!canRead) {
    return <Forbidden requiredRole="privy_cgp_admin" />;
  }

  const canCreate = await checkPermission(Resources.USER, Actions.CREATE);
  const canUpdate = await checkPermission(Resources.USER, Actions.UPDATE);
  const canDelete = await checkPermission(Resources.USER, Actions.DELETE);

  const result = await getUsersWithRoles();

  if (!result.success) {
    console.error("Failed to fetch users:", result.error);
  }

  const users = result.data || [];

  return (
    <div className="pt-4 px-6 pb-6">
      <div className="space-y-4">
        {/* Main Content */}
        <AdminClient
          initialUsers={users}
          canCreate={canCreate}
          canUpdate={canUpdate}
          canDelete={canDelete}
        />
      </div>
    </div>
  );
}
