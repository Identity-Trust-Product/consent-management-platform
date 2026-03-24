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

import { usePermission } from "@/hooks/use-rbac";
import { type Action, type Resource } from "@/lib/rbac-config";
import { ReactNode } from "react";

interface RBACGuardProps {
  resource: Resource;
  action: Action;
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * A component that renders its children only if the current user has the required permission.
 * Otherwise, it renders the fallback (if provided) or nothing.
 *
 * @example
 * <RBACGuard resource="USER" action="CREATE" fallback={<p>Access Denied</p>}>
 *   <CreateUserButton />
 * </RBACGuard>
 */
export function RBACGuard({
  resource,
  action,
  children,
  fallback = null,
}: RBACGuardProps) {
  const hasAccess = usePermission(resource, action);

  if (hasAccess) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}
