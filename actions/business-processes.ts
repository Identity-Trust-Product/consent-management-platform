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
import { hasPermission } from "@/lib/rbac";
import { logAudit } from "@/lib/audit";
import { logger } from "@/lib/utils/logger";
import prisma from "@/lib/prisma";
import { createSafeAction } from "@/lib/safe-action";
import {
  deleteBusinessProcess as deleteBusinessProcessService,
  getAllBusinessProcesses as getAllBusinessProcessesService,
  getBusinessProcessById as getBusinessProcessByIdService,
  getBusinessProcessFormData as getBusinessProcessFormDataService,
  getPublishedConsentPurposes as getPublishedConsentPurposesService,
  saveOrUpdateBusinessProcessWithVersioning as saveOrUpdateBusinessProcessWithVersioningService,
} from "@/lib/services/business-processes-service";
import { getBusinessProcessWithFullDataById as getBusinessProcessWithFullDataByIdService } from "@/lib/services/notices-service";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Read operations - No RBAC wrapper needed (handled at page level)
export async function getBusinessProcesses() {
  try {
    return await getAllBusinessProcessesService();
  } catch (error) {
    console.error("Error in getBusinessProcesses action:", error);
    return [];
  }
}

export async function getBusinessProcessById(id: number) {
  try {
    return await getBusinessProcessByIdService(id);
  } catch (error) {
    console.error("Error in getBusinessProcessById action:", error);
    return null;
  }
}

const deleteBusinessProcessSchema = z.object({
  id: z.number(),
});

export const deleteBusinessProcess = createSafeAction(
  { resource: Resources.BUSINESS_PROCESS, action: Actions.DELETE },
  deleteBusinessProcessSchema,
  async (input, user) => {
    await deleteBusinessProcessService(input.id);
    revalidatePath("/cms/data-fiduciary/business-processes");
    return true;
  }
);

export async function getPublishedConsentPurposes() {
  try {
    // TODO: Add RBAC check here
    return await getPublishedConsentPurposesService();
  } catch (error) {
    console.error("Error in getPublishedConsentPurposes action:", error);
    return [];
  }
}

export async function getBusinessProcessData() {
  try {
    // TODO: Add RBAC check here
    return await getBusinessProcessFormDataService();
  } catch (error) {
    console.error("Error in getBusinessProcessData action:", error);
    return {
      consentPurposes: [],
      userAttributes: [],
      dataProcessors: [],
    };
  }
}

export async function getBusinessProcessWithFullData(
  businessProcessId: number
) {
  try {
    // TODO: Add RBAC check here
    return await getBusinessProcessWithFullDataByIdService(businessProcessId);
  } catch (error) {
    console.error("Error in getBusinessProcessWithFullData action:", error);
    return null;
  }
}

// Zod schema for business process save/publish
const saveBusinessProcessSchema = z.object({
  clientState: z.any(), // BusinessProcessState from context - complex nested structure
  createdBy: z.string().optional(),
  businessProcessId: z.number().optional(),
  status: z.string().optional(),
});

/**
 * Save or publish business process with automatic versioning
 *
 * This action uses the full context state to detect breaking changes
 * and automatically create new versions when needed.
 */
export async function saveOrPublishBusinessProcessWithVersioning(
  input: z.infer<typeof saveBusinessProcessSchema>
) {
  try {
    // 1. Authentication Check
    const session = await auth();
    if (!session?.user?.id) {
      logger.warn("Action attempt without session", {
        resource: Resources.BUSINESS_PROCESS,
      });
      return {
        success: false,
        error: "Unauthorized: You must be logged in to perform this action.",
      };
    }

    // 2. Determine action type based on whether businessProcessId exists
    const actionType = input.businessProcessId
      ? Actions.UPDATE
      : Actions.CREATE;

    // 3. Permission Check
    const userRoles = session.user.roles || [];
    const isAllowed = hasPermission(
      userRoles,
      Resources.BUSINESS_PROCESS,
      actionType
    );

    if (!isAllowed) {
      logger.warn("Action permission denied", {
        userId: session.user.id,
        resource: Resources.BUSINESS_PROCESS,
        action: actionType,
        roles: userRoles.map((r: any) => r.role.name),
      });
      return {
        success: false,
        error: `Permission Denied: You do not have permission to ${actionType} ${Resources.BUSINESS_PROCESS}.`,
      };
    }

    // 4. Input Validation
    const validationResult = saveBusinessProcessSchema.safeParse(input);
    if (!validationResult.success) {
      logger.warn("Action validation failed", {
        userId: session.user.id,
        resource: Resources.BUSINESS_PROCESS,
        action: actionType,
        errors: validationResult.error.flatten().fieldErrors,
      });
      return {
        success: false,
        error: "Invalid Input",
        validationErrors: validationResult.error.flatten().fieldErrors,
      };
    }

    // Use createdBy from input if provided, otherwise use authenticated user
    const createdBy = validationResult.data.createdBy || session.user.id;

    // Call the versioning service
    const result = await saveOrUpdateBusinessProcessWithVersioningService(
      input.clientState,
      createdBy,
      input.businessProcessId,
      input.status
    );

    // If a new version was created and published, notify data principals
    if (
      result.isNewVersion &&
      input.status === "published" &&
      input.businessProcessId &&
      input.clientState.step1Data?.code
    ) {
      try {
        const { notifyDataPrincipalsOfVersionChange } = await import(
          "@/lib/services/bp-version-change-notification-service"
        );

        // Get the old version number
        const oldBp = await prisma.businessProcess.findUnique({
          where: { id: input.businessProcessId },
          select: { version: true },
        });

        if (oldBp) {
          // Get the new business process publicId
          const newBp = await prisma.businessProcess.findUnique({
            where: { id: result.businessProcessId },
            select: { publicId: true },
          });

          if (newBp) {
            // Fire and forget - don't wait for notifications to complete
            notifyDataPrincipalsOfVersionChange(
              input.clientState.step1Data.code,
              oldBp.version,
              newBp.publicId
            ).catch((error) => {
              console.error(
                "Error sending version change notifications:",
                error
              );
            });
          }
        }
      } catch (error) {
        console.error("Error initiating version change notifications:", error);
        // Don't fail the save operation if notification fails
      }
    }

    // Revalidate paths
    revalidatePath("/cms/data-fiduciary/business-processes");
    if (result.businessProcessId) {
      revalidatePath(
        `/cms/data-fiduciary/business-processes/${result.businessProcessId}`
      );
    }

    // 6. Audit Logging
    await logAudit({
      action: actionType,
      resource: Resources.BUSINESS_PROCESS,
      resourceId: result.businessProcessId,
      performedByUserId: session.user.id,
      payload: validationResult.data,
      result: {
        businessProcessId: result.businessProcessId,
        isNewVersion: result.isNewVersion,
        hasBreakingChanges: result.hasBreakingChanges,
      },
      status: "SUCCESS",
    });

    logger.info("Action executed successfully", {
      userId: session.user.id,
      resource: Resources.BUSINESS_PROCESS,
      action: actionType,
      resourceId: result.businessProcessId,
    });

    return {
      success: true,
      data: {
        businessProcessId: result.businessProcessId,
        isNewVersion: result.isNewVersion,
        hasBreakingChanges: result.hasBreakingChanges,
        breakingChanges: result.breakingChanges,
      },
    };
  } catch (error) {
    logger.error("Action execution failed", {
      error,
      resource: Resources.BUSINESS_PROCESS,
    });
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

/**
 * Get the highest version number for a business process code
 */
export async function getHighestVersionForCode(code: string) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "User not authenticated" };
    }

    const highestBP = await prisma.businessProcess.findFirst({
      where: { code },
      orderBy: { version: "desc" },
      select: { version: true },
    });

    return {
      success: true,
      highestVersion: highestBP?.version || 0,
    };
  } catch (error) {
    console.error("Error fetching highest version:", error);
    return { success: false, error: "Failed to fetch highest version" };
  }
}

/**
 * Get next versions for multiple BP codes
 */
export async function getNextVersionsForBPCodes(codes: string[]) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "User not authenticated" };
    }

    const results = await Promise.all(
      codes.map(async (code) => {
        const highestBP = await prisma.businessProcess.findFirst({
          where: { code },
          orderBy: { version: "desc" },
          select: { version: true },
        });
        return {
          code,
          nextVersion: (highestBP?.version || 0) + 1,
        };
      })
    );

    const versionMap: Record<string, number> = {};
    results.forEach((r) => {
      versionMap[r.code] = r.nextVersion;
    });

    return {
      success: true,
      versions: versionMap,
    };
  } catch (error) {
    console.error("Error fetching next versions:", error);
    return { success: false, error: "Failed to fetch next versions" };
  }
}
