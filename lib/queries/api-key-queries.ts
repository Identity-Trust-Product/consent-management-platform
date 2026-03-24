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

/**
 * Find an active API key by its prefix for fast lookup
 * @param prefix - First 8 characters of the API key
 * @returns API key with user and roles, or null if not found
 */
export async function findApiKeyByPrefix(prefix: string) {
  return await prisma.apiKey.findFirst({
    where: {
      prefix,
      isActive: true,
    },
    include: {
      user: {
        include: {
          userRoles: {
            include: {
              role: true,
            },
          },
        },
      },
    },
  });
}

/**
 * Update the lastUsedAt timestamp for an API key
 * @param id - API key ID
 */
export async function updateApiKeyLastUsed(id: string) {
  return await prisma.apiKey.update({
    where: { id },
    data: {
      lastUsedAt: new Date(),
    },
  });
}
