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

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { Actions, Resources } from "@/lib/rbac-config";
import { createSafeAction } from "@/lib/safe-action";
import { GrievanceSeverity } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Schema for updating SLA configuration
const updateSlaConfigSchema = z.object({
  severity: z.nativeEnum(GrievanceSeverity),
  resolutionTimeInDays: z.number().int().min(1).max(30),
  escalationUserIds: z.array(z.string()),
  active: z.boolean(),
  businessHoursEnabled: z.boolean(),
  businessHoursStart: z.string().nullable().optional(),
  businessHoursEnd: z.string().nullable().optional(),
  businessDays: z.array(z.number().int().min(1).max(7)).nullable().optional(),
});

type UpdateSlaConfigInput = z.infer<typeof updateSlaConfigSchema>;

/**
 * Get all SLA configurations (Admin)
 */
export async function getSlaConfigurations() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    const configs = await prisma.slaConfiguration.findMany({
      orderBy: { severity: "asc" },
    });

    return { success: true, data: configs };
  } catch (error) {
    console.error("Error fetching SLA configurations:", error);
    return { success: false, error: "Failed to fetch SLA configurations" };
  }
}

/**
 * Update SLA configuration (Admin)
 */
export const updateSlaConfiguration = createSafeAction(
  { resource: Resources.SLA, action: Actions.UPDATE },
  updateSlaConfigSchema,
  async (data, user) => {
    const config = await prisma.slaConfiguration.upsert({
      where: { severity: data.severity },
      update: {
        resolutionTimeInDays: data.resolutionTimeInDays,
        escalationUserIds: data.escalationUserIds,
        active: data.active,
        businessHoursEnabled: data.businessHoursEnabled,
        businessHoursStart: data.businessHoursStart ?? null,
        businessHoursEnd: data.businessHoursEnd ?? null,
        businessDays: data.businessDays ?? [],
      },
      create: {
        severity: data.severity,
        resolutionTimeInDays: data.resolutionTimeInDays,
        escalationUserIds: data.escalationUserIds,
        active: data.active,
        businessHoursEnabled: data.businessHoursEnabled,
        businessHoursStart: data.businessHoursStart ?? null,
        businessHoursEnd: data.businessHoursEnd ?? null,
        businessDays: data.businessDays ?? [],
      },
    });

    revalidatePath("/cms/data-fiduciary/sla");

    return config;
  }
);

/**
 * Get all fiduciary agents for escalation recipient selection
 */
export async function getFiduciaryAgents() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    const users = await prisma.user.findMany({
      where: {
        userRoles: {
          some: {
            role: {
              name: "privy_cgp_admin", // Both admins and users can be escalation recipients
            },
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
      orderBy: { name: "asc" },
    });

    return { success: true, data: users };
  } catch (error) {
    console.error("Error fetching fiduciary agents:", error);
    return { success: false, error: "Failed to fetch agents" };
  }
}

/**
 * Get SLA statistics for grievances
 */
export async function getSlaStatistics() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    // Get total grievances by severity
    const grievancesBySeverity = await prisma.grievance.groupBy({
      by: ["severity"],
      _count: {
        id: true,
      },
    });

    // Get SLA breaches (grievances where resolution exceeded SLA time)
    const slaBreaches = await prisma.grievance.count({
      where: {
        status: "RESOLVED",
        resolvedAt: {
          not: null,
        },
      },
    });

    // Get pending grievances
    const pendingGrievances = await prisma.grievance.count({
      where: {
        status: {
          in: ["SUBMITTED", "ASSIGNED", "IN_PROGRESS"],
        },
      },
    });

    // Get resolved grievances
    const resolvedGrievances = await prisma.grievance.count({
      where: {
        status: "RESOLVED",
      },
    });

    // Calculate average resolution time for resolved grievances
    const resolvedWithTimes = await prisma.grievance.findMany({
      where: {
        status: "RESOLVED",
        resolvedAt: {
          not: null,
        },
      },
      select: {
        createdAt: true,
        resolvedAt: true,
      },
    });

    const avgResolutionHours =
      resolvedWithTimes.length > 0
        ? resolvedWithTimes.reduce((sum, g) => {
          const hours =
            (new Date(g.resolvedAt!).getTime() -
              new Date(g.createdAt).getTime()) /
            (1000 * 60 * 60);
          return sum + hours;
        }, 0) / resolvedWithTimes.length
        : 0;

    return {
      success: true,
      data: {
        bySeverity: grievancesBySeverity.reduce((acc, item) => {
          acc[item.severity] = item._count.id;
          return acc;
        }, {} as Record<GrievanceSeverity, number>),
        totalGrievances: pendingGrievances + resolvedGrievances,
        pendingGrievances,
        resolvedGrievances,
        slaBreaches,
        avgResolutionHours: Math.round(avgResolutionHours * 10) / 10,
        complianceRate:
          resolvedGrievances > 0
            ? Math.round(
              ((resolvedGrievances - slaBreaches) / resolvedGrievances) * 100
            )
            : 100,
      },
    };
  } catch (error) {
    console.error("Error fetching SLA statistics:", error);
    return { success: false, error: "Failed to fetch SLA statistics" };
  }
}
