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

import { NextRequest } from "next/server";
import { ApiErrors } from "@/lib/api-errors";
import { verifyApiKey, isValidApiKeyFormat } from "@/lib/api-key-utils";
import {
  findApiKeyByPrefix,
  updateApiKeyLastUsed,
} from "@/lib/queries/api-key-queries";
import { UserRole } from "@/lib/rbac";
import { LRUCache } from "lru-cache";

// LRU Cache for validated API keys
// Stores: apiKey -> { apiKeyId, userId, roles, apiKeyData }
interface CachedApiKeyData {
  apiKeyId: string;
  userId: string;
  userName: string | null;
  userEmail: string | null;
  roles: UserRole[];
  apiKeyName: string;
  apiKeyPrefix: string;
  validatedAt: number;
}

const apiKeyCache = new LRUCache<string, CachedApiKeyData>({
  max: 50, // Maximum number of keys to cache
  ttl: 1000 * 60 * 5, // 5 minutes TTL
  ttlAutopurge: true, // Automatically remove expired entries
});

/**
 * API Request Context - attached to validated requests
 */
export interface ApiContext {
  user: {
    id: string;
    email: string | null;
    name: string | null;
    roles: UserRole[];
  };
  apiKey: {
    id: string;
    name: string;
    prefix: string;
  };
}

/**
 * Extract API key from Authorization header
 * Supports: "Bearer <api-key>" or just "<api-key>"
 */
function extractApiKey(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    return null;
  }

  // Support both "Bearer <key>" and just "<key>"
  const parts = authHeader.split(" ");
  if (parts.length === 2 && parts[0].toLowerCase() === "bearer") {
    return parts[1];
  }

  // If no "Bearer" prefix, treat entire header as the key
  return authHeader;
}

/**
 * Validate API key and return user context
 * @param request - Next.js request object
 * @returns ApiContext if valid, null if invalid
 */
export async function validateApiKey(
  request: NextRequest
): Promise<ApiContext | null> {
  try {
    // Extract API key from Authorization header
    const apiKey = extractApiKey(request);

    if (!apiKey) {
      return null;
    }

    // Validate format
    if (!isValidApiKeyFormat(apiKey)) {
      return null;
    }

    // Check LRU cache
    const cached = apiKeyCache.get(apiKey);
    if (cached) {
      // Update last used timestamp (fire and forget)
      updateApiKeyLastUsed(cached.apiKeyId).catch((error) => {
        console.error("Failed to update API key last used timestamp:", error);
      });

      return {
        user: {
          id: cached.userId,
          email: cached.userEmail,
          name: cached.userName,
          roles: cached.roles,
        },
        apiKey: {
          id: cached.apiKeyId,
          name: cached.apiKeyName,
          prefix: cached.apiKeyPrefix,
        },
      };
    }

    // Extract prefix for database lookup
    const prefix = apiKey.slice(0, 8);

    // Find API key by prefix in database
    const apiKeyRecord = await findApiKeyByPrefix(prefix);

    if (!apiKeyRecord) {
      return null;
    }

    // Verify hash
    const isValid = verifyApiKey(apiKey, apiKeyRecord.key);

    if (!isValid) {
      return null;
    }

    // Build user roles
    const roles: UserRole[] = apiKeyRecord.user.userRoles.map((ur) => ({
      id: ur.id,
      userId: ur.userId,
      roleId: ur.roleId,
      role: ur.role,
      assignedAt: ur.assignedAt,
      assignedBy: ur.assignedBy,
    }));

    // Cache the result
    apiKeyCache.set(apiKey, {
      apiKeyId: apiKeyRecord.id,
      userId: apiKeyRecord.user.id,
      userName: apiKeyRecord.user.name,
      userEmail: apiKeyRecord.user.email,
      roles,
      apiKeyName: apiKeyRecord.name,
      apiKeyPrefix: apiKeyRecord.prefix,
      validatedAt: Date.now(),
    });

    // Update last used timestamp (fire and forget)
    updateApiKeyLastUsed(apiKeyRecord.id).catch((error) => {
      console.error("Failed to update API key last used timestamp:", error);
    });

    // Return API context
    return {
      user: {
        id: apiKeyRecord.user.id,
        email: apiKeyRecord.user.email,
        name: apiKeyRecord.user.name,
        roles,
      },
      apiKey: {
        id: apiKeyRecord.id,
        name: apiKeyRecord.name,
        prefix: apiKeyRecord.prefix,
      },
    };
  } catch (error) {
    console.error("Error validating API key:", error);
    return null;
  }
}

/**
 * Middleware wrapper for API routes that require authentication
 * Usage in route handlers:
 * 
 * export const GET = withApiAuth(async (request, context) => {
 *   // context.user and context.apiKey are available
 *   return createSuccessResponse({ message: "Hello" });
 * });
 */
export function withApiAuth<T = any>(
  handler: (request: NextRequest, context: ApiContext) => Promise<Response>
) {
  return async (request: NextRequest): Promise<Response> => {
    // Validate API key
    const context = await validateApiKey(request);

    if (!context) {
      return ApiErrors.unauthorized();
    }

    // Call the actual handler with the context
    try {
      return await handler(request, context);
    } catch (error) {
      console.error("Error in API route handler:", error);
      return ApiErrors.internalError();
    }
  };
}

/**
 * Clear cached API key (call when key is disabled)
 */
export function clearApiKeyCache(apiKeyId: string): void {
  for (const [key, value] of apiKeyCache.entries()) {
    if (value.apiKeyId === apiKeyId) {
      apiKeyCache.delete(key);
    }
  }
}

/**
 * Get cache statistics
 */
export function getApiKeyCacheStats() {
  return {
    size: apiKeyCache.size,
    max: apiKeyCache.max,
    ttl: apiKeyCache.ttl,
  };
}

/**
 * Extract API context from request headers (set by middleware)
 * This should be used in route handlers instead of withApiAuth
 * 
 * @param request - Next.js request object
 * @returns ApiContext with user and apiKey information
 */
export function getApiContext(request: NextRequest): ApiContext {
  const userId = request.headers.get("x-api-user-id");
  const userEmail = request.headers.get("x-api-user-email");
  const userName = request.headers.get("x-api-user-name");
  const apiKeyId = request.headers.get("x-api-key-id");
  const apiKeyName = request.headers.get("x-api-key-name");
  const apiKeyPrefix = request.headers.get("x-api-key-prefix");
  const rolesJson = request.headers.get("x-api-user-roles");

  if (!userId || !apiKeyId) {
    throw new Error(
      "API context not found. Ensure middleware authentication is configured."
    );
  }

  const roles: UserRole[] = rolesJson ? JSON.parse(rolesJson) : [];

  return {
    user: {
      id: userId,
      email: userEmail || null,
      name: userName || null,
      roles,
    },
    apiKey: {
      id: apiKeyId,
      name: apiKeyName || "",
      prefix: apiKeyPrefix || "",
    },
  };
}
