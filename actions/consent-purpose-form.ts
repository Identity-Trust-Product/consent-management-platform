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
import { saveConsentPurposeFromClientState as saveConsentPurposeFromClientStateService } from "@/lib/services/consent-purpose-service";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const saveConsentPurposeSchema = z.object({
  clientState: z.any(),
  action: z.enum(["publish", "draft"]),
  consentPurposeId: z.number().optional(),
  propagateToBPIds: z.array(z.number()).optional(),
});

export async function saveConsentPurposeFromClientState(
  data: z.infer<typeof saveConsentPurposeSchema>
) {
  try {
    // 1. Authentication Check
    const session = await auth();
    if (!session?.user?.id) {
      logger.warn("Action attempt without session", {
        resource: Resources.CONSENT_PURPOSE,
      });
      return {
        success: false,
        error: "Unauthorized: You must be logged in to perform this action.",
      };
    }

    // 2. Determine action type based on whether consentPurposeId exists
    const actionType = data.consentPurposeId ? Actions.UPDATE : Actions.CREATE;

    // 3. Permission Check
    const userRoles = session.user.roles || [];
    const isAllowed = hasPermission(
      userRoles,
      Resources.CONSENT_PURPOSE,
      actionType
    );

    if (!isAllowed) {
      logger.warn("Action permission denied", {
        userId: session.user.id,
        resource: Resources.CONSENT_PURPOSE,
        action: actionType,
        roles: userRoles.map((r: any) => r.role.name),
      });
      return {
        success: false,
        error: `Permission Denied: You do not have permission to ${actionType} ${Resources.CONSENT_PURPOSE}.`,
      };
    }

    // 4. Input Validation
    const validationResult = saveConsentPurposeSchema.safeParse(data);
    if (!validationResult.success) {
      logger.warn("Action validation failed", {
        userId: session.user.id,
        resource: Resources.CONSENT_PURPOSE,
        action: actionType,
        errors: validationResult.error.flatten().fieldErrors,
      });
      return {
        success: false,
        error: "Invalid Input",
        validationErrors: validationResult.error.flatten().fieldErrors,
      };
    }

    // 5. Execute
    const result = await saveConsentPurposeFromClientStateService(
      validationResult.data.clientState,
      validationResult.data.action,
      session.user.id,
      validationResult.data.consentPurposeId,
      validationResult.data.propagateToBPIds
    );

    // 6. Audit Logging
    await logAudit({
      action: actionType,
      resource: Resources.CONSENT_PURPOSE,
      resourceId: result.id,
      performedByUserId: session.user.id,
      payload: validationResult.data,
      result: { id: result.id },
      status: "SUCCESS",
    });

    logger.info("Action executed successfully", {
      userId: session.user.id,
      resource: Resources.CONSENT_PURPOSE,
      action: actionType,
      resourceId: result.id,
    });

    revalidatePath("/cms/data-fiduciary/consent-purposes");
    return { success: true, data: { id: result.id } };
  } catch (error) {
    logger.error("Action execution failed", {
      error,
      resource: Resources.CONSENT_PURPOSE,
    });
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
