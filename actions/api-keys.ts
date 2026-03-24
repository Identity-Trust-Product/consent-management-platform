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
import { clearApiKeyCache } from "@/lib/api-auth-middleware";
import { generateApiKey, hashApiKey } from "@/lib/api-key-utils";
import { Actions, Resources } from "@/lib/constants/rbac";
import prisma from "@/lib/prisma";
import { createSafeAction } from "@/lib/safe-action";
import {
  createApiKeySchema,
  toggleApiKeyStatusSchema,
  type ApiKeyResponse,
} from "@/lib/schemas/api-key-schemas";
import { revalidatePath } from "next/cache";

// Transform database API key to response format (exclude sensitive data)
function transformApiKeyToResponse(apiKey: any): ApiKeyResponse {
  return {
    id: apiKey.id,
    name: apiKey.name,
    description: apiKey.description,
    prefix: apiKey.prefix,
    userId: apiKey.userId,
    isActive: apiKey.isActive,
    lastUsedAt: apiKey.lastUsedAt,
    createdAt: apiKey.createdAt,
    updatedAt: apiKey.updatedAt,
  };
}

/**
 * Get all API keys for the current user
 */
export async function getApiKeys(): Promise<{
  success: boolean;
  data?: ApiKeyResponse[];
  error?: string;
}> {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const apiKeys = await prisma.apiKey.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      data: apiKeys.map(transformApiKeyToResponse),
    };
  } catch (error) {
    console.error("Error fetching API keys:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to fetch API keys",
    };
  }
}

/**
 * Get a single API key by ID
 */
export async function getApiKeyById(id: string): Promise<{
  success: boolean;
  data?: ApiKeyResponse;
  error?: string;
}> {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const apiKey = await prisma.apiKey.findFirst({
      where: {
        id,
        userId: session.user.id, // Ensure user can only access their own keys
      },
    });

    if (!apiKey) {
      return {
        success: false,
        error: "API key not found",
      };
    }

    return {
      success: true,
      data: transformApiKeyToResponse(apiKey),
    };
  } catch (error) {
    console.error("Error fetching API key:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch API key",
    };
  }
}

/**
 * Create a new API key
 * Returns the full API key ONLY ONCE - it won't be retrievable later
 */
export const createApiKey = createSafeAction(
  { resource: Resources.API_KEY, action: Actions.CREATE },
  createApiKeySchema,
  async (data, user) => {
    // Generate API key
    const { fullKey, prefix } = generateApiKey();

    // Hash the API key for storage (SHA-256 - instant)
    const hashedKey = hashApiKey(fullKey);

    // Create API key in database
    const apiKey = await prisma.apiKey.create({
      data: {
        name: data.name,
        description: data.description || null,
        key: hashedKey,
        prefix,
        userId: user.id,
        isActive: true,
      },
    });

    revalidatePath("/cms/data-fiduciary/api-keys");

    // Return the full key ONLY ONCE
    return {
      ...transformApiKeyToResponse(apiKey),
      fullKey, // This is the only time the full key is returned
    };
  }
);

/**
 * Toggle API key active status (soft enable/disable)
 */
export const toggleApiKeyStatus = createSafeAction(
  { resource: Resources.API_KEY, action: Actions.UPDATE },
  toggleApiKeyStatusSchema,
  async (data, user) => {
    // Check if API key exists and belongs to user
    const existingKey = await prisma.apiKey.findFirst({
      where: {
        id: data.id,
        userId: user.id,
      },
    });

    if (!existingKey) {
      throw new Error("API key not found");
    }

    // Update status
    const updatedKey = await prisma.apiKey.update({
      where: {
        id: data.id,
      },
      data: {
        isActive: data.isActive,
      },
    });

    // Clear cache when key is disabled
    if (!data.isActive) {
      clearApiKeyCache(data.id);
    }

    revalidatePath("/cms/data-fiduciary/api-keys");

    return transformApiKeyToResponse(updatedKey);
  }
);

/**
 * Get API key statistics for the current user
 */
export async function getApiKeyStats(): Promise<{
  success: boolean;
  data?: {
    total: number;
    active: number;
    inactive: number;
  };
  error?: string;
}> {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const [total, active, inactive] = await Promise.all([
      prisma.apiKey.count({
        where: { userId: session.user.id },
      }),
      prisma.apiKey.count({
        where: { userId: session.user.id, isActive: true },
      }),
      prisma.apiKey.count({
        where: { userId: session.user.id, isActive: false },
      }),
    ]);

    return {
      success: true,
      data: {
        total,
        active,
        inactive,
      },
    };
  } catch (error) {
    console.error("Error fetching API key stats:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch API key statistics",
    };
  }
}
