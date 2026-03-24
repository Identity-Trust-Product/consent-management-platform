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
import { Actions, Resources } from "@/lib/constants/rbac";
import prisma from "@/lib/prisma";
import { createSafeAction } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Schema for creating/updating a policy
const dataRetentionPolicySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),
  policyUrl: z.string().optional(),
  configurations: z.array(
    z.object({
      businessProcessRuleId: z.number(),
      trigger: z.string(),
      notifyUserIds: z.array(z.string()).default([]),
    })
  ),
});

const updateDataRetentionPolicySchema = dataRetentionPolicySchema.extend({
  id: z.number(),
});

const deleteDataRetentionPolicySchema = z.object({
  id: z.number(),
});

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
      orderBy: {
        name: "asc",
      },
    });
    return { success: true, data: users };
  } catch (error) {
    console.error("Error fetching users:", error);
    return { success: false, error: "Failed to fetch users" };
  }
}

export type DataRetentionPolicyInput = z.infer<typeof dataRetentionPolicySchema>;

export async function getDataRetentionPolicies() {
  try {
    const session = await auth();
    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    const policies = await prisma.dataRetentionPolicy.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        configurations: {
          include: {
            businessProcessRule: {
              include: {
                businessProcess: {
                  select: {
                    name: true,
                    version: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // Extract unique user IDs
    const userIds = Array.from(new Set(policies.map((p) => p.createdBy)));

    // Fetch user details
    const users = await prisma.user.findMany({
      where: {
        id: { in: userIds },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    // Create a map for quick lookup
    const userMap = new Map(users.map((u) => [u.id, u]));

    // Map policies to include user details and formatted business processes
    const enrichedPolicies = policies.map((policy) => {
      const user = userMap.get(policy.createdBy);

      // Get unique business processes
      const businessProcesses = Array.from(
        new Set(
          policy.configurations.map(
            (c) =>
              `${c.businessProcessRule.businessProcess.name} v${c.businessProcessRule.businessProcess.version}`
          )
        )
      );

      return {
        ...policy,
        createdAt: policy.createdAt.toISOString(),
        updatedAt: policy.updatedAt.toISOString(),
        createdByUser: user
          ? { name: user.name, email: user.email }
          : { name: "Unknown", email: null },
        businessProcesses,
        _count: {
          configurations: policy.configurations.length,
        },
      };
    });

    return { success: true, data: enrichedPolicies };
  } catch (error) {
    console.error("Error fetching data retention policies:", error);
    return { success: false, error: "Failed to fetch policies" };
  }
}

export async function getDataRetentionPolicyById(id: number) {
  try {
    const session = await auth();
    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    const policy = await prisma.dataRetentionPolicy.findUnique({
      where: { id },
      include: {
        configurations: {
          include: {
            businessProcessRule: {
              include: {
                businessProcess: true,
                processingPurpose: true,
                consentPurpose: true,
              },
            },
          },
        },
      },
    });

    if (!policy) {
      return { success: false, error: "Policy not found" };
    }

    // Process the policy to add retention duration value/unit to rules
    const processedPolicy = {
      ...policy,
      configurations: policy.configurations.map((config) => {
        const rule = config.businessProcessRule;
        let retentionDurationValue: number | undefined;
        let retentionDurationUnit: string | undefined;

        if (rule.retentionDuration) {
          if (rule.retentionDuration % (24 * 365) === 0) {
            retentionDurationValue = rule.retentionDuration / (24 * 365);
            retentionDurationUnit = "years";
          } else if (rule.retentionDuration % (24 * 30) === 0) {
            retentionDurationValue = rule.retentionDuration / (24 * 30);
            retentionDurationUnit = "months";
          } else if (rule.retentionDuration % (24 * 7) === 0) {
            retentionDurationValue = rule.retentionDuration / (24 * 7);
            retentionDurationUnit = "weeks";
          } else if (rule.retentionDuration % 24 === 0) {
            retentionDurationValue = rule.retentionDuration / 24;
            retentionDurationUnit = "days";
          } else {
            retentionDurationValue = rule.retentionDuration;
            retentionDurationUnit = "hours";
          }
        }

        return {
          ...config,
          businessProcessRule: {
            ...rule,
            retentionDurationValue,
            retentionDurationUnit,
          },
        };
      }),
    };

    return { success: true, data: processedPolicy };
  } catch (error) {
    console.error("Error fetching data retention policy:", error);
    return { success: false, error: "Failed to fetch policy" };
  }
}

export const createDataRetentionPolicy = createSafeAction(
  { resource: Resources.DATA_RETENTION_POLICY, action: Actions.CREATE },
  dataRetentionPolicySchema,
  async (input, user) => {
    const { name, description, policyUrl, configurations } = input;

    const policy = await prisma.dataRetentionPolicy.create({
      data: {
        name,
        description,
        policyUrl,
        createdBy: user.id,
        configurations: {
          create: configurations.map((config) => ({
            businessProcessRuleId: config.businessProcessRuleId,
            trigger: config.trigger,
            notifyUserIds: config.notifyUserIds,
          })),
        },
      },
    });

    revalidatePath("/cms/data-fiduciary/data-retention");
    return policy;
  }
);

export const updateDataRetentionPolicy = createSafeAction(
  { resource: Resources.DATA_RETENTION_POLICY, action: Actions.UPDATE },
  updateDataRetentionPolicySchema,
  async (input, user) => {
    const { id, name, description, policyUrl, configurations } = input;

    // Transaction to update policy and replace configurations
    const policy = await prisma.$transaction(async (tx) => {
      // Update basic info
      const updatedPolicy = await tx.dataRetentionPolicy.update({
        where: { id },
        data: {
          name,
          description,
          policyUrl,
        },
      });

      // Delete existing configurations
      await tx.dataRetentionPolicyConfiguration.deleteMany({
        where: { dataRetentionPolicyId: id },
      });

      // Create new configurations
      if (configurations.length > 0) {
        await tx.dataRetentionPolicyConfiguration.createMany({
          data: configurations.map((config) => ({
            dataRetentionPolicyId: id,
            businessProcessRuleId: config.businessProcessRuleId,
            trigger: config.trigger,
            notifyUserIds: config.notifyUserIds,
          })),
        });
      }

      return updatedPolicy;
    });

    revalidatePath("/cms/data-fiduciary/data-retention");
    return policy;
  }
);

export const deleteDataRetentionPolicy = createSafeAction(
  { resource: Resources.DATA_RETENTION_POLICY, action: Actions.DELETE },
  deleteDataRetentionPolicySchema,
  async (input, user) => {
    await prisma.dataRetentionPolicy.delete({
      where: { id: input.id },
    });

    revalidatePath("/cms/data-fiduciary/data-retention");
    return true;
  }
);

// Helper to fetch Business Processes with Rules for the configuration step
export async function getBusinessProcessesWithRules() {
  try {
    const session = await auth();
    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    const businessProcesses = await prisma.businessProcess.findMany({
      where: {
        status: "published", // Only show published processes? Or all? Assuming published for now as they are "existing"
      },
      include: {
        businessProcessRules: {
          include: {
            processingPurpose: true,
            consentPurpose: true,
          },
        },
      },
      orderBy: { name: "asc" },
    });

    // Process rules to add retention duration value/unit
    const processedBPs = businessProcesses.map((bp) => ({
      ...bp,
      businessProcessRules: bp.businessProcessRules.map((rule) => {
        let retentionDurationValue: number | undefined;
        let retentionDurationUnit: string | undefined;

        if (rule.retentionDuration) {
          if (rule.retentionDuration % (24 * 365) === 0) {
            retentionDurationValue = rule.retentionDuration / (24 * 365);
            retentionDurationUnit = "years";
          } else if (rule.retentionDuration % (24 * 30) === 0) {
            retentionDurationValue = rule.retentionDuration / (24 * 30);
            retentionDurationUnit = "months";
          } else if (rule.retentionDuration % (24 * 7) === 0) {
            retentionDurationValue = rule.retentionDuration / (24 * 7);
            retentionDurationUnit = "weeks";
          } else if (rule.retentionDuration % 24 === 0) {
            retentionDurationValue = rule.retentionDuration / 24;
            retentionDurationUnit = "days";
          } else {
            retentionDurationValue = rule.retentionDuration;
            retentionDurationUnit = "hours";
          }
        }

        return {
          ...rule,
          retentionDurationValue,
          retentionDurationUnit,
        };
      }),
    }));

    return { success: true, data: processedBPs };
  } catch (error) {
    console.error("Error fetching business processes with rules:", error);
    return { success: false, error: "Failed to fetch business processes" };
  }
}
