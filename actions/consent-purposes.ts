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
import { logger } from "@/lib/logger";
import prisma from "@/lib/prisma";
import { Actions, Resources } from "@/lib/rbac";
import { createSafeAction, verifyPermission } from "@/lib/safe-action";
import {
  deleteConsentPurpose as deleteConsentPurposeService,
  getAllConsentPurposes as getAllConsentPurposesService,
} from "@/lib/services/consent-purpose-service";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function getConsentPurposes() {
  try {
    await verifyPermission(Resources.CONSENT_PURPOSE, Actions.READ);
    return await getAllConsentPurposesService();
  } catch (error) {
    logger.error("Error in getConsentPurposes action:", error);
    return [];
  }
}

export const deleteConsentPurpose = createSafeAction(
  { resource: Resources.CONSENT_PURPOSE, action: Actions.DELETE },
  z.object({ id: z.number() }),
  async ({ id }) => {
    await deleteConsentPurposeService(id);
    revalidatePath("/cms/data-fiduciary/consent-purposes");
    return { success: true };
  }
);

/**
 * Get the highest version number for a consent purpose code
 */
export async function getHighestVersionForConsentPurposeCode(code: string) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "User not authenticated" };
    }

    const highestCP = await prisma.consentPurpose.findFirst({
      where: { code },
      orderBy: { version: "desc" },
      select: { version: true },
    });

    return {
      success: true,
      highestVersion: highestCP?.version || 0,
    };
  } catch (error) {
    console.error("Error fetching highest version for consent purpose:", error);
    return { success: false, error: "Failed to fetch highest version" };
  }
}
