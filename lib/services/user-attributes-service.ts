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
import {
  UserAttributeFormSchema,
  UserAttributeUpdateData,
} from "@/lib/schemas/user-attribute-schemas";

export async function getAllUserAttributes() {
  try {
    const userAttributes = await prisma.userAttribute.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return userAttributes;
  } catch (error) {
    console.error("Error fetching user attributes:", error);
    throw new Error("Failed to fetch user attributes");
  }
}

export async function getUserAttributeById(id: number) {
  try {
    const userAttribute = await prisma.userAttribute.findUnique({
      where: { id },
    });
    return userAttribute;
  } catch (error) {
    console.error("Error fetching user attribute:", error);
    throw new Error("Failed to fetch user attribute");
  }
}

export async function createUserAttribute(
  data: UserAttributeFormSchema & { supportedLanguages?: string[] }
) {
  try {
    const userAttribute = await prisma.userAttribute.create({
      data: {
        name: data.name,
        pii: data.pii,
        supportedLanguages: data.supportedLanguages || ["en"], // Default for now
        translations: {}, // Explicitly initialize as empty object
      },
    });
    return userAttribute;
  } catch (error) {
    console.error("Error creating user attribute:", error);
    throw new Error("Failed to create user attribute");
  }
}

export async function updateUserAttribute(
  id: number,
  data: UserAttributeUpdateData & { supportedLanguages?: string[] }
) {
  try {
    const userAttribute = await prisma.userAttribute.update({
      where: { id },
      data,
    });
    return userAttribute;
  } catch (error) {
    console.error("Error updating user attribute:", error);
    throw new Error("Failed to update user attribute");
  }
}

export async function deleteUserAttribute(id: number) {
  try {
    await prisma.userAttribute.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting user attribute:", error);
    throw new Error("Failed to delete user attribute");
  }
}

export async function getUserAttributeByName(name: string) {
  try {
    const userAttribute = await prisma.userAttribute.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });
    return userAttribute;
  } catch (error) {
    console.error("Error fetching user attribute by name:", error);
    throw new Error("Failed to fetch user attribute");
  }
}

export async function checkUserAttributeNameExists(
  name: string,
  excludeId?: number
) {
  try {
    const userAttribute = await prisma.userAttribute.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });

    if (!userAttribute) {
      return false;
    }

    // If excludeId is provided, check if the found user attribute is different
    if (excludeId && userAttribute.id === excludeId) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error checking user attribute name:", error);
    throw new Error("Failed to check user attribute name");
  }
}
