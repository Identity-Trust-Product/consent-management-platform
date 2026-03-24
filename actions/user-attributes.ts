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
import {
  userAttributeSchema,
  userAttributeUpdateSchema,
} from "@/lib/schemas/user-attribute-schemas";
import {
  checkUserAttributeNameExists as checkUserAttributeNameExistsService,
  createUserAttribute as createUserAttributeService,
  deleteUserAttribute as deleteUserAttributeService,
  getAllUserAttributes as getAllUserAttributesService,
  getUserAttributeById as getUserAttributeByIdService,
  updateUserAttribute as updateUserAttributeService,
} from "@/lib/services/user-attributes-service";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Read operations - No RBAC wrapper needed (handled at page level)
export async function getUserAttributes() {
  try {
    return await getAllUserAttributesService();
  } catch (error) {
    console.error("Error in getUserAttributes action:", error);
    return [];
  }
}

export async function getUserAttributeById(id: number) {
  try {
    return await getUserAttributeByIdService(id);
  } catch (error) {
    console.error("Error in getUserAttributeById action:", error);
    return null;
  }
}

const deleteUserAttributeSchema = z.object({
  id: z.number(),
});

export const deleteUserAttribute = createSafeAction(
  { resource: Resources.USER_ATTRIBUTE, action: Actions.DELETE },
  deleteUserAttributeSchema,
  async (input, user) => {
    await deleteUserAttributeService(input.id);
    revalidatePath("/cms/data-fiduciary/user-attributes");
    return true;
  }
);

export const createUserAttribute = createSafeAction(
  { resource: Resources.USER_ATTRIBUTE, action: Actions.CREATE },
  userAttributeSchema,
  async (data, user) => {
    // Check if name already exists (case-insensitive)
    const nameExists = await checkUserAttributeNameExistsService(data.name);
    if (nameExists) {
      throw new Error("User attribute name already exists");
    }

    const userAttribute = await createUserAttributeService(data);
    revalidatePath("/cms/data-fiduciary/user-attributes");
    return userAttribute;
  }
);

const updateUserAttributeWithIdSchema = z.object({
  id: z.number(),
  data: userAttributeUpdateSchema,
});

export const updateUserAttribute = createSafeAction(
  { resource: Resources.USER_ATTRIBUTE, action: Actions.UPDATE },
  updateUserAttributeWithIdSchema,
  async (input, user) => {
    // Check if name already exists (excluding current user attribute)
    const nameExists = await checkUserAttributeNameExistsService(
      input.data.name,
      input.id
    );
    if (nameExists) {
      throw new Error("User attribute name already exists");
    }

    const userAttribute = await updateUserAttributeService(
      input.id,
      input.data
    );
    revalidatePath("/cms/data-fiduciary/user-attributes");
    revalidatePath(`/cms/data-fiduciary/user-attributes/${input.id}`);
    return userAttribute;
  }
);

export async function checkUserAttributeNameExists(
  name: string,
  excludeId?: number
) {
  try {
    // TODO: Add RBAC check here
    return await checkUserAttributeNameExistsService(name, excludeId);
  } catch (error) {
    console.error("Error in checkUserAttributeNameExists action:", error);
    return false;
  }
}
