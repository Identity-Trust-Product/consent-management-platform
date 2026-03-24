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

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { UserRole } from "@/lib/rbac";
import { cache } from "react";

export const getCurrentUserRoles = cache(async (): Promise<UserRole[]> => {
  const session = await auth();

  if (!session?.user?.roles) {
    return [];
  }

  return session.user.roles;
});

export const getCurrentUser = cache(async () => {
  const session = await auth();
  return session?.user || null;
});

// Get user with roles by ID
export async function getUserWithRoles(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      userRoles: {
        include: {
          role: true,
        },
      },
    },
  });
}

// Get user roles by user ID
export async function getUserRoles(userId: string): Promise<UserRole[]> {
  const userRoles = await prisma.userRole.findMany({
    where: {
      userId,
    },
    include: {
      role: true,
    },
  });

  return userRoles as any;
}

// Assign role to user
export async function assignRoleToUser(userId: string, roleName: string) {
  const role = await prisma.role.findUnique({
    where: { name: roleName },
  });

  if (!role) {
    throw new Error(`Role ${roleName} not found`);
  }

  return prisma.userRole.create({
    data: {
      userId,
      roleId: role.id,
    },
  });
}

// Remove role from user
export async function removeRoleFromUser(userId: string, roleName: string) {
  const role = await prisma.role.findUnique({
    where: { name: roleName },
  });

  if (!role) {
    throw new Error(`Role ${roleName} not found`);
  }

  return prisma.userRole.deleteMany({
    where: {
      userId,
      roleId: role.id,
    },
  });
}
