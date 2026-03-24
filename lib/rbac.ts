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

// Re-export everything from rbac-config for backward compatibility
export {
  Resources,
  Actions,
  Roles,
  type Resource,
  type Action,
  type Role,
} from "./rbac-config";

import type { Resource, Action } from "./rbac-config";
import { Resources, Actions, Roles } from "./rbac-config";

export interface UserRole {
  id: string;
  role: {
    id: string;
    name: string;
  };
}

// Core RBAC function
export function hasPermission(
  userRoles: UserRole[],
  resource: Resource,
  action: Action
): boolean {
  if (!userRoles || userRoles.length === 0) {
    return false;
  }

  const roleNames = userRoles.map((ur) => ur.role.name);

  // Import here to avoid circular dependency
  const { hasConfigPermission } = require("./rbac-config");
  return hasConfigPermission(roleNames, Resources[resource], Actions[action]);
}

// Permission checking helper
export function canAccessAdmin(userRoles: UserRole[]): boolean {
  return hasPermission(userRoles, "ADMIN", "READ");
}

// Role utility functions
export function getUserRoleNames(userRoles: UserRole[]): string[] {
  return userRoles.map((ur) => ur.role.name);
}

export function isAdmin(userRoles: UserRole[]): boolean {
  return userRoles.some((ur) => ur.role.name === Roles.PRIVY_CGP_ADMIN);
}

// Server-side permission check (for Server Components)
export async function checkPermission(
  resource: Resource,
  action: Action
): Promise<boolean> {
  try {
    const { auth } = await import("@/auth");
    const session = await auth();
    if (!session?.user?.roles) return false;
    return hasPermission(session.user.roles, resource, action);
  } catch {
    return false;
  }
}
