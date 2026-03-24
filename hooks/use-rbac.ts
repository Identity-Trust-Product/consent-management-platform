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

import { useSession } from "next-auth/react";
import {
  hasConfigPermission,
  type Action,
  type Resource,
  type Role,
} from "@/lib/rbac-config";

export function useCurrentUser() {
  const { data: session, status } = useSession();
  return {
    user: session?.user,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
  };
}

export function usePermission(resource: Resource, action: Action) {
  const { user } = useCurrentUser();

  if (!user || !user.roles) {
    return false;
  }

  // Extract role names from the user's roles
  // The session shape for roles matches what we expect in hasConfigPermission
  const roleNames = user.roles.map((r: any) => r.role.name);

  return hasConfigPermission(roleNames, resource, action);
}

export function useRole(roleName: Role) {
  const { user } = useCurrentUser();

  if (!user || !user.roles) {
    return false;
  }

  return user.roles.some((r: any) => r.role.name === roleName);
}
