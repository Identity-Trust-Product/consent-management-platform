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

import prisma from "@/lib/prisma";
import { PurposeOfProcessingFormSchema } from "@/lib/schemas/purpose-of-processing-schemas";

export async function getAllPurposesOfProcessing() {
  try {
    const purposesOfProcessing = await prisma.purposeOfProcessing.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return purposesOfProcessing;
  } catch (error) {
    console.error("Error fetching purposes of processing:", error);
    throw new Error("Failed to fetch purposes of processing");
  }
}

export async function getPurposeOfProcessingById(id: number) {
  try {
    const purposeOfProcessing = await prisma.purposeOfProcessing.findUnique({
      where: { id },
    });
    return purposeOfProcessing;
  } catch (error) {
    console.error("Error fetching purpose of processing:", error);
    throw new Error("Failed to fetch purpose of processing");
  }
}

export async function createPurposeOfProcessing(
  data: PurposeOfProcessingFormSchema
) {
  try {
    const purposeOfProcessing = await prisma.purposeOfProcessing.create({
      data: {
        name: data.name,
        code: data.code,
        description: data.description || null,
      },
    });
    return purposeOfProcessing;
  } catch (error) {
    console.error("Error creating purpose of processing:", error);
    throw new Error("Failed to create purpose of processing");
  }
}

export async function updatePurposeOfProcessing(
  id: number,
  data: Partial<PurposeOfProcessingFormSchema>
) {
  try {
    const purposeOfProcessing = await prisma.purposeOfProcessing.update({
      where: { id },
      data,
    });
    return purposeOfProcessing;
  } catch (error) {
    console.error("Error updating purpose of processing:", error);
    throw new Error("Failed to update purpose of processing");
  }
}

export async function deletePurposeOfProcessing(id: number) {
  try {
    await prisma.purposeOfProcessing.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting purpose of processing:", error);
    throw new Error("Failed to delete purpose of processing");
  }
}

export async function getPurposeOfProcessingByCode(code: string) {
  try {
    const purposeOfProcessing = await prisma.purposeOfProcessing.findUnique({
      where: { code },
    });
    return purposeOfProcessing;
  } catch (error) {
    console.error("Error fetching purpose of processing by code:", error);
    throw new Error("Failed to fetch purpose of processing");
  }
}

export async function checkPurposeOfProcessingCodeExists(
  code: string,
  excludeId?: number
) {
  try {
    const purposeOfProcessing = await prisma.purposeOfProcessing.findUnique({
      where: { code },
    });

    if (!purposeOfProcessing) {
      return false;
    }

    // If excludeId is provided, check if the found purpose is different
    if (excludeId && purposeOfProcessing.id === excludeId) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error checking purpose of processing code:", error);
    throw new Error("Failed to check purpose of processing code");
  }
}
