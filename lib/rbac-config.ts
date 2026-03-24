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

// RBAC Configuration - Single Source of Truth
// Re-export constants from centralized location
import {
  Resources,
  Actions,
  Roles,
  ROLE_PERMISSIONS,
  type Resource,
  type Action,
  type Role,
} from "@/lib/constants/rbac";

export { Resources, Actions, Roles, ROLE_PERMISSIONS };
export type { Resource, Action, Role };

export function getRolePermissions(roleName: string): readonly string[] {
  return ROLE_PERMISSIONS[roleName as Role] || [];
}

export function hasConfigPermission(
  roleNames: string[],
  resource: Resource,
  action: Action
): boolean {
  for (const roleName of roleNames) {
    const permissions = getRolePermissions(roleName);

    for (const permission of permissions) {
      // Admin wildcard check
      if (permission === "*:*") {
        return true;
      }

      const [permResource, permAction] = permission.split(":");

      // Resource wildcard check (e.g., "USER:*")
      if (permResource === resource && permAction === "*") {
        return true;
      }

      // Action wildcard check (e.g., "*:READ")
      if (permResource === "*" && permAction === action) {
        return true;
      }

      // Exact match check
      if (permResource === resource && permAction === action) {
        return true;
      }
    }
  }

  return false;
}
