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
import { hasPermission } from "@/lib/rbac";
import { Actions, Resources } from "@/lib/rbac-config";
import { calculateExpectedResolutionTime } from "@/lib/utils/sla";
import { GrievanceSeverity } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const changeSeveritySchema = z.object({
  grievanceId: z.number().int().positive(),
  newSeverity: z.nativeEnum(GrievanceSeverity),
  reason: z.string().min(1).max(500).optional(),
});

type ChangeSeverityInput = z.infer<typeof changeSeveritySchema>;

/**
 * Change grievance severity and recalculate SLA (Agent)
 */
export async function changeGrievanceSeverity(input: ChangeSeverityInput) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    // Check permission
    if (
      !hasPermission(
        session.user.roles || [],
        Resources.GRIEVANCE,
        Actions.UPDATE
      )
    ) {
      return { success: false, error: "Forbidden" };
    }

    const validated = changeSeveritySchema.parse(input);

    // Get current grievance and SLA tracker
    const grievance = await prisma.grievance.findUnique({
      where: { id: validated.grievanceId },
      include: { slaTracker: true },
    });

    if (!grievance) {
      return { success: false, error: "Grievance not found" };
    }

    if (grievance.severity === validated.newSeverity) {
      return { success: false, error: "Severity is already set to this value" };
    }

    const oldSeverity = grievance.severity;

    // Get new SLA configuration
    const slaConfig = await prisma.slaConfiguration.findUnique({
      where: { severity: validated.newSeverity },
    });

    const result = await prisma.$transaction(async (tx) => {
      // Update grievance severity
      const updatedGrievance = await tx.grievance.update({
        where: { id: validated.grievanceId },
        data: { severity: validated.newSeverity },
      });

      // Recalculate SLA if tracker exists
      if (grievance.slaTracker) {
        const days = slaConfig?.resolutionTimeInDays ?? 3;
        const newExpectedResolution = calculateExpectedResolutionTime(
          grievance.slaTracker.startedAt,
          days
        );

        await tx.slaTracker.update({
          where: { grievanceId: validated.grievanceId },
          data: {
            severity: validated.newSeverity,
            expectedResolutionAt: newExpectedResolution,
          },
        });
      }

      // Create audit log
      await tx.grievanceAuditLog.create({
        data: {
          grievanceId: validated.grievanceId,
          action: "SEVERITY_CHANGED",
          details: {
            from: oldSeverity,
            to: validated.newSeverity,
            reason: validated.reason || null,
            changedBy: session.user.name || session.user.email,
          },
          performedByUserId: session.user.id,
        },
      });

      return updatedGrievance;
    });

    revalidatePath(`/cms/data-fiduciary/grievances/${validated.grievanceId}`);

    return { success: true, data: result };
  } catch (error: any) {
    console.error("Error changing grievance severity:", error);

    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Validation failed",
        details: error.errors,
      };
    }

    return { success: false, error: "Failed to change severity" };
  }
}
