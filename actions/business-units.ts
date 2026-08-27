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

import { revalidatePath } from "next/cache";
import {
  businessUnitSchema,
  type BusinessUnitFormSchema,
} from "@/lib/schemas/business-unit-schemas";
import {
  getAllBusinessUnits as getAllBusinessUnitsService,
  getBusinessUnitById as getBusinessUnitByIdService,
  createBusinessUnit as createBusinessUnitService,
  updateBusinessUnit as updateBusinessUnitService,
  deleteBusinessUnit as deleteBusinessUnitService,
  checkBusinessUnitCodeExists as checkBusinessUnitCodeExistsService,
} from "@/lib/services/business-units-service";
import { createSafeAction, verifyPermission } from "@/lib/safe-action";
import { Actions, Resources } from "@/lib/rbac";
import { logger } from "@/lib/logger";
import { z } from "zod";

export async function getBusinessUnits() {
  try {
    await verifyPermission(Resources.BUSINESS_UNIT, Actions.READ);
    return await getAllBusinessUnitsService();
  } catch (error) {
    logger.error("Error in getBusinessUnits action:", error);
    return [];
  }
}

export async function getBusinessUnitById(id: number) {
  try {
    await verifyPermission(Resources.BUSINESS_UNIT, Actions.READ);
    return await getBusinessUnitByIdService(id);
  } catch (error) {
    logger.error("Error in getBusinessUnitById action:", error);
    return null;
  }
}

export const deleteBusinessUnit = createSafeAction(
  { resource: Resources.BUSINESS_UNIT, action: Actions.DELETE },
  z.object({ id: z.number() }),
  async ({ id }) => {
    await deleteBusinessUnitService(id);
    revalidatePath("/cms/data-fiduciary/business-units");
    return { success: true };
  }
);

export const createBusinessUnit = createSafeAction(
  { resource: Resources.BUSINESS_UNIT, action: Actions.CREATE },
  businessUnitSchema,
  async (data) => {
    // Check if code already exists
    const codeExists = await checkBusinessUnitCodeExistsService(data.code);
    if (codeExists) {
      throw new Error("Department code already exists");
    }

    const businessUnit = await createBusinessUnitService(data);
    revalidatePath("/cms/data-fiduciary/business-units");
    return businessUnit;
  }
);

const updateBusinessUnitSchema = z.object({
  id: z.number(),
  data: businessUnitSchema.partial().extend({ active: z.boolean().optional() }),
});

export const updateBusinessUnit = createSafeAction(
  { resource: Resources.BUSINESS_UNIT, action: Actions.UPDATE },
  updateBusinessUnitSchema,
  async ({ id, data }) => {
    // Check if code already exists (excluding current business unit)
    if (data.code) {
      const codeExists = await checkBusinessUnitCodeExistsService(
        data.code,
        id
      );
      if (codeExists) {
        throw new Error("Department code already exists");
      }
    }

    const businessUnit = await updateBusinessUnitService(id, data);
    revalidatePath("/cms/data-fiduciary/business-units");
    return businessUnit;
  }
);

export async function checkBusinessUnitCodeExists(
  code: string,
  excludeId?: number
) {
  try {
    await verifyPermission(Resources.BUSINESS_UNIT, Actions.READ);
    return await checkBusinessUnitCodeExistsService(code, excludeId);
  } catch (error) {
    logger.error("Error in checkBusinessUnitCodeExists action:", error);
    return false;
  }
}

