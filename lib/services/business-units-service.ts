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
import { BusinessUnitFormSchema } from "@/lib/schemas/business-unit-schemas";

export async function getAllBusinessUnits() {
  try {
    const businessUnits = await prisma.businessUnit.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return businessUnits;
  } catch (error) {
    console.error("Error fetching business units:", error);
    throw new Error("Failed to fetch business units");
  }
}

export async function getBusinessUnitById(id: number) {
  try {
    const businessUnit = await prisma.businessUnit.findUnique({
      where: { id },
    });
    return businessUnit;
  } catch (error) {
    console.error("Error fetching business unit:", error);
    throw new Error("Failed to fetch business unit");
  }
}

export async function createBusinessUnit(
  data: BusinessUnitFormSchema & { active?: boolean }
) {
  try {
    const businessUnit = await prisma.businessUnit.create({
      data: {
        name: data.name,
        code: data.code,
        active: data.active ?? true,
      },
    });
    return businessUnit;
  } catch (error) {
    console.error("Error creating business unit:", error);
    throw new Error("Failed to create business unit");
  }
}

export async function updateBusinessUnit(
  id: number,
  data: Partial<BusinessUnitFormSchema & { active?: boolean }>
) {
  try {
    const businessUnit = await prisma.businessUnit.update({
      where: { id },
      data,
    });
    return businessUnit;
  } catch (error) {
    console.error("Error updating business unit:", error);
    throw new Error("Failed to update business unit");
  }
}

export async function deleteBusinessUnit(id: number) {
  try {
    await prisma.businessUnit.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting business unit:", error);
    throw new Error("Failed to delete business unit");
  }
}

export async function getBusinessUnitByCode(code: string) {
  try {
    const businessUnit = await prisma.businessUnit.findUnique({
      where: { code },
    });
    return businessUnit;
  } catch (error) {
    console.error("Error fetching business unit by code:", error);
    throw new Error("Failed to fetch business unit");
  }
}

export async function checkBusinessUnitCodeExists(
  code: string,
  excludeId?: number
) {
  try {
    const businessUnit = await prisma.businessUnit.findUnique({
      where: { code },
    });

    if (!businessUnit) {
      return false;
    }

    // If excludeId is provided, check if the found business unit is different
    if (excludeId && businessUnit.id === excludeId) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error checking business unit code:", error);
    throw new Error("Failed to check business unit code");
  }
}
