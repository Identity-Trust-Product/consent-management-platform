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

import { Actions, Resources } from "@/lib/constants/rbac";
import { createSafeAction } from "@/lib/safe-action";
import { purposeOfProcessingSchema } from "@/lib/schemas/purpose-of-processing-schemas";
import {
  checkPurposeOfProcessingCodeExists as checkPurposeOfProcessingCodeExistsService,
  createPurposeOfProcessing as createPurposeOfProcessingService,
  deletePurposeOfProcessing as deletePurposeOfProcessingService,
  getAllPurposesOfProcessing as getAllPurposesOfProcessingService,
  getPurposeOfProcessingById as getPurposeOfProcessingByIdService,
  updatePurposeOfProcessing as updatePurposeOfProcessingService,
} from "@/lib/services/purposes-of-processing-service";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Read operations - No RBAC wrapper needed (handled at page level)
export async function getPurposesOfProcessing() {
  try {
    return await getAllPurposesOfProcessingService();
  } catch (error) {
    console.error("Error in getPurposesOfProcessing action:", error);
    return [];
  }
}

export async function getPurposeOfProcessingById(id: number) {
  try {
    return await getPurposeOfProcessingByIdService(id);
  } catch (error) {
    console.error("Error in getPurposeOfProcessingById action:", error);
    return null;
  }
}

const deletePurposeOfProcessingSchema = z.object({
  id: z.number(),
});

export const deletePurposeOfProcessing = createSafeAction(
  { resource: Resources.PURPOSE_OF_PROCESSING, action: Actions.DELETE },
  deletePurposeOfProcessingSchema,
  async (input, user) => {
    await deletePurposeOfProcessingService(input.id);
    revalidatePath("/cms/data-fiduciary/purposes-of-processing");
    return true;
  }
);

export const createPurposeOfProcessing = createSafeAction(
  { resource: Resources.PURPOSE_OF_PROCESSING, action: Actions.CREATE },
  purposeOfProcessingSchema,
  async (data, user) => {
    // Check if code already exists
    const codeExists = await checkPurposeOfProcessingCodeExistsService(
      data.code
    );
    if (codeExists) {
      throw new Error("Purpose of processing code already exists");
    }

    const purposeOfProcessing = await createPurposeOfProcessingService(data);
    revalidatePath("/cms/data-fiduciary/purposes-of-processing");
    return purposeOfProcessing;
  }
);

const updatePurposeOfProcessingSchema = z.object({
  id: z.number(),
  data: z.object({
    name: z.string().optional(),
    code: z.string().optional(),
    description: z.string().optional(),
    active: z.boolean().optional(),
  }),
});

export const updatePurposeOfProcessing = createSafeAction(
  { resource: Resources.PURPOSE_OF_PROCESSING, action: Actions.UPDATE },
  updatePurposeOfProcessingSchema,
  async (input, user) => {
    // Check if code already exists (excluding current purpose)
    if (input.data.code) {
      const codeExists = await checkPurposeOfProcessingCodeExistsService(
        input.data.code,
        input.id
      );
      if (codeExists) {
        throw new Error("Purpose of processing code already exists");
      }
    }

    const purposeOfProcessing = await updatePurposeOfProcessingService(
      input.id,
      input.data
    );
    revalidatePath("/cms/data-fiduciary/purposes-of-processing");
    return purposeOfProcessing;
  }
);

export async function checkPurposeOfProcessingCodeExists(
  code: string,
  excludeId?: number
) {
  try {
    // TODO: Add RBAC check here
    return await checkPurposeOfProcessingCodeExistsService(code, excludeId);
  } catch (error) {
    console.error("Error in checkPurposeOfProcessingCodeExists action:", error);
    return false;
  }
}
