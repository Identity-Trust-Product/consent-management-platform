"use server";
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

import { getCurrentUserRoles } from "@/lib/auth-utils";
import prisma from "@/lib/prisma";
import { Actions, hasPermission, Resources, Roles } from "@/lib/rbac";
import { createSafeAction } from "@/lib/safe-action";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

const updateUserSchema = z.object({
  userId: z.string(),
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
});

const deleteUserSchema = z.object({
  userId: z.string(),
});

const assignRoleSchema = z.object({
  userId: z.string(),
  roleName: z.string(),
});

const removeRoleSchema = z.object({
  userId: z.string(),
  roleName: z.string(),
});

export const createUser = createSafeAction(
  { resource: Resources.USER, action: Actions.CREATE },
  createUserSchema,
  async (userData, user) => {
    // Create user
    const newUser = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10),
      },
    });

    // Assign default user role to new user
    const userRole = await prisma.role.findUnique({
      where: { name: Roles.PRIVY_CGP_USER },
    });

    if (userRole) {
      await prisma.userRole.create({
        data: {
          userId: newUser.id,
          roleId: userRole.id,
        },
      });
    }

    revalidatePath("/admin");

    return newUser;
  },
);

export const updateUser = createSafeAction(
  { resource: Resources.USER, action: Actions.UPDATE },
  updateUserSchema,
  async (data, user) => {
    const { userId, ...updateData } = data;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    revalidatePath("/admin");

    return updatedUser;
  },
);

export const deleteUser = createSafeAction(
  { resource: Resources.USER, action: Actions.DELETE },
  deleteUserSchema,
  async (data, user) => {
    await prisma.user.delete({
      where: { id: data.userId },
    });

    revalidatePath("/admin");

    return { id: data.userId };
  },
);

export const assignRole = createSafeAction(
  { resource: Resources.USER_ROLE, action: Actions.CREATE },
  assignRoleSchema,
  async (data, user) => {
    const role = await prisma.role.findUnique({
      where: { name: data.roleName },
    });

    if (!role) {
      throw new Error(`Role ${data.roleName} does not exist`);
    }

    const userRole = await prisma.userRole.upsert({
      where: {
        userId_roleId: {
          userId: data.userId,
          roleId: role.id,
        },
      },
      update: {},
      create: {
        userId: data.userId,
        roleId: role.id,
      },
    });

    revalidatePath("/admin");

    return { id: userRole.id, userId: data.userId, roleName: data.roleName };
  },
);

export const removeRole = createSafeAction(
  { resource: Resources.USER_ROLE, action: Actions.DELETE },
  removeRoleSchema,
  async (data, user) => {
    const role = await prisma.role.findUnique({
      where: { name: data.roleName },
    });

    if (!role) {
      throw new Error(`Role ${data.roleName} does not exist`);
    }

    const deletedCount = await prisma.userRole.deleteMany({
      where: {
        userId: data.userId,
        roleId: role.id,
      },
    });

    revalidatePath("/admin");

    return {
      userId: data.userId,
      roleName: data.roleName,
      deletedCount: deletedCount.count,
    };
  },
);

export async function getAllRoles() {
  try {
    const roles = await prisma.role.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return {
      success: true,
      data: roles,
    };
  } catch (error) {
    console.error("Error fetching roles:", error);
    return {
      success: false,
      message: "Failed to fetch roles",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Get all users with their roles
 * Used in the admin user management page
 */
export async function getUsersWithRoles() {
  try {
    const users = await prisma.user.findMany({
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
      },
      orderBy: {
        email: "asc",
      },
    });

    return {
      success: true,
      data: users,
    };
  } catch (error) {
    console.error("Error fetching users with roles:", error);
    return {
      success: false,
      message: "Failed to fetch users",
      error: error instanceof Error ? error.message : "Unknown error",
      data: [],
    };
  }
}

/**
 * Get audit logs for a specific user with filters
 * Used in the user details sheet
 */
export async function getUserAuditLogs(
  userId: string,
  filters?: {
    dateFrom?: Date;
    dateTo?: Date;
    action?: string;
    resource?: string;
    search?: string;
    limit?: number;
    offset?: number;
  },
) {
  try {
    // Check permissions
    const roles = await getCurrentUserRoles();
    if (!hasPermission(roles, Resources.AUDIT_LOG, Actions.READ)) {
      return {
        success: false,
        message: "Permission denied",
        error: "You do not have permission to view audit logs",
      };
    }

    const limit = filters?.limit || 20;
    const offset = filters?.offset || 0;

    // Build where clause
    const where: any = {
      performedByUserId: userId,
    };

    if (filters?.dateFrom || filters?.dateTo) {
      where.createdAt = {};
      if (filters.dateFrom) {
        where.createdAt.gte = filters.dateFrom;
      }
      if (filters.dateTo) {
        where.createdAt.lte = filters.dateTo;
      }
    }

    if (filters?.action && filters.action !== "all") {
      where.action = filters.action;
    }

    if (filters?.resource && filters.resource !== "all") {
      where.resource = filters.resource;
    }

    if (filters?.search && filters.search.trim() !== "") {
      where.OR = [
        { resource: { contains: filters.search, mode: "insensitive" } },
        { action: { contains: filters.search, mode: "insensitive" } },
        { resourceId: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    // Fetch total count
    const total = await prisma.auditLog.count({ where });

    // Fetch logs
    const logs = await prisma.auditLog.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      skip: offset,
      take: limit,
      select: {
        id: true,
        action: true,
        resource: true,
        resourceId: true,
        payload: true,
        result: true,
        metadata: true,
        status: true,
        failureReason: true,
        createdAt: true,
        performedByUser: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return {
      success: true,
      data: {
        logs,
        total,
        hasMore: offset + limit < total,
      },
    };
  } catch (error) {
    console.error("Error fetching user audit logs:", error);
    return {
      success: false,
      message: "Failed to fetch audit logs",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Get display names for resources
 * Used to resolve resource IDs to human-readable names
 */
export async function getResourceNames(
  resources: Array<{ resource: string; resourceId: string }>,
) {
  try {
    // Check permissions
    const roles = await getCurrentUserRoles();
    if (!hasPermission(roles, Resources.AUDIT_LOG, Actions.READ)) {
      return {
        success: false,
        message: "Permission denied",
        error: "You do not have permission to view resource names",
      };
    }

    const names: { [key: string]: string } = {};

    for (const item of resources) {
      const cacheKey = `${item.resource}:${item.resourceId}`;

      try {
        let name: string | null = null;

        switch (item.resource) {
          case "USER":
            const user = await prisma.user.findUnique({
              where: { id: item.resourceId },
              select: { name: true, email: true },
            });
            name = user?.name || user?.email || null;
            break;

          case "BUSINESS_UNIT":
            const businessUnit = await prisma.businessUnit.findUnique({
              where: { id: parseInt(item.resourceId) },
              select: { name: true },
            });
            name = businessUnit?.name || null;
            break;

          case "BUSINESS_PROCESS":
            const businessProcess = await prisma.businessProcess.findUnique({
              where: { id: parseInt(item.resourceId) },
              select: { name: true },
            });
            name = businessProcess?.name || null;
            break;

          case "CONSENT_PURPOSE":
            const consentPurpose = await prisma.consentPurpose.findUnique({
              where: { id: parseInt(item.resourceId) },
              select: { name: true },
            });
            name = consentPurpose?.name || null;
            break;

          case "PROCESSING_PURPOSE":
            const processingPurpose = await prisma.processingPurpose.findUnique(
              {
                where: { id: parseInt(item.resourceId) },
                select: { name: true },
              },
            );
            name = processingPurpose?.name || null;
            break;

          case "DATA_PROCESSOR":
            const dataProcessor = await prisma.dataProcessor.findUnique({
              where: { ouId: item.resourceId },
              select: { legalName: true, brandName: true },
            });
            name = dataProcessor?.brandName || dataProcessor?.legalName || null;
            break;

          case "NOTICE":
            const notice = await prisma.notice.findUnique({
              where: { id: parseInt(item.resourceId) },
              select: { publicId: true },
            });
            name = notice?.publicId || null;
            break;

          case "ROLE":
            const role = await prisma.role.findUnique({
              where: { id: item.resourceId },
              select: { name: true },
            });
            name = role?.name || null;
            break;

          default:
            name = null;
        }

        names[cacheKey] = name || `ID: ${item.resourceId}`;
      } catch (error) {
        console.error(`Error fetching name for ${cacheKey}:`, error);
        names[cacheKey] = `ID: ${item.resourceId}`;
      }
    }

    return {
      success: true,
      data: names,
    };
  } catch (error) {
    console.error("Error fetching resource names:", error);
    return {
      success: false,
      message: "Failed to fetch resource names",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Get user activity statistics for charts
 * Used in the user details sheet
 */
export async function getUserActivityStats(userId: string, days: number = 7) {
  try {
    // Check permissions
    const roles = await getCurrentUserRoles();
    if (!hasPermission(roles, Resources.AUDIT_LOG, Actions.READ)) {
      return {
        success: false,
        message: "Permission denied",
        error: "You do not have permission to view activity statistics",
      };
    }

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    startDate.setHours(0, 0, 0, 0);

    // Fetch logs for the period
    const logs = await prisma.auditLog.findMany({
      where: {
        performedByUserId: userId,
        createdAt: {
          gte: startDate,
        },
      },
      select: {
        action: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    // Group by date
    const dailyActivity: { [key: string]: number } = {};
    const actionCounts: { [key: string]: number } = {};

    logs.forEach((log) => {
      const dateKey = log.createdAt.toISOString().split("T")[0];
      dailyActivity[dateKey] = (dailyActivity[dateKey] || 0) + 1;
      actionCounts[log.action] = (actionCounts[log.action] || 0) + 1;
    });

    // Fill in missing dates with 0
    const result: Array<{ date: string; count: number }> = [];
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (days - 1 - i));
      const dateKey = date.toISOString().split("T")[0];
      result.push({
        date: dateKey,
        count: dailyActivity[dateKey] || 0,
      });
    }

    // Get most common action
    let mostCommonAction = null;
    let maxCount = 0;
    for (const [action, count] of Object.entries(actionCounts)) {
      if (count > maxCount) {
        maxCount = count;
        mostCommonAction = action;
      }
    }

    // Get last login time
    const lastLogin = await prisma.auditLog.findFirst({
      where: {
        performedByUserId: userId,
        action: "LOGIN",
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        createdAt: true,
      },
    });

    return {
      success: true,
      data: {
        dailyActivity: result,
        totalActions: logs.length,
        mostCommonAction,
        lastLoginAt: lastLogin?.createdAt || null,
        actionBreakdown: actionCounts,
      },
    };
  } catch (error) {
    console.error("Error fetching user activity stats:", error);
    return {
      success: false,
      message: "Failed to fetch activity statistics",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
