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
import prisma from "@/lib/prisma";
import { createSafeAction } from "@/lib/safe-action";
import { dataProcessorSchema } from "@/lib/schemas/data-processor-schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Read operation - no RBAC needed (handled by page-level checks)
export async function getDataProcessors() {
  try {
    const dataProcessors = await prisma.dataProcessor.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return dataProcessors;
  } catch (error) {
    console.error("Error fetching data processors:", error);
    return [];
  }
}

// Read single - no RBAC needed (handled by page-level checks)
export async function getDataProcessorById(ouId: string) {
  try {
    const dataProcessor = await prisma.dataProcessor.findUnique({
      where: { ouId },
    });
    return dataProcessor;
  } catch (error) {
    console.error("Error fetching data processor:", error);
    return null;
  }
}

// Create with RBAC
export const createDataProcessor = createSafeAction(
  { resource: Resources.DATA_PROCESSOR, action: Actions.CREATE },
  dataProcessorSchema,
  async (data, user) => {
    const dataProcessor = await prisma.dataProcessor.create({
      data: {
        ouId: data.ouId,
        legalName: data.legalName,
        brandName: data.brandName,
        cin: data.cin,
        industry: data.industry,
        active: data.active,
      },
    });
    revalidatePath("/cms/data-fiduciary/data-processors");
    return dataProcessor;
  }
);

// Update with RBAC
const updateDataProcessorSchema = z.object({
  ouId: z.string(),
  data: dataProcessorSchema.partial(),
});

export const updateDataProcessor = createSafeAction(
  { resource: Resources.DATA_PROCESSOR, action: Actions.UPDATE },
  updateDataProcessorSchema,
  async (input, user) => {
    const dataProcessor = await prisma.dataProcessor.update({
      where: { ouId: input.ouId },
      data: input.data,
    });
    revalidatePath("/cms/data-fiduciary/data-processors");
    revalidatePath(`/cms/data-fiduciary/data-processors/${input.ouId}`);
    return dataProcessor;
  }
);

// Delete with RBAC
const deleteDataProcessorSchema = z.object({
  ouId: z.string(),
});

export const deleteDataProcessor = createSafeAction(
  { resource: Resources.DATA_PROCESSOR, action: Actions.DELETE },
  deleteDataProcessorSchema,
  async (input, user) => {
    await prisma.dataProcessor.delete({
      where: { ouId: input.ouId },
    });
    revalidatePath("/cms/data-fiduciary/data-processors");
    return true;
  }
);
