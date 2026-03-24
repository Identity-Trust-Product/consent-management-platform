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
import { hasPermission, type Action, type Resource } from "@/lib/rbac";
import { z } from "zod";
import { logger } from "@/lib/logger";
import { logAudit } from "@/lib/audit";

// --- TEST UTILITIES START ---
let mockSession: any = undefined; // undefined means "not set", null means "logged out"
export const _setMockSession = (session: any) => {
  if (process.env.NODE_ENV === "test" || process.env.RBAC_TEST_MODE === "true") {
    mockSession = session;
  } else {
    console.warn("Attempted to set mock session in non-test environment");
  }
};
// --- TEST UTILITIES END ---

export type SafeActionResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  validationErrors?: Record<string, string[]>;
};

/**
 * Verifies if the current user has the required permission.
 * Throws an error if unauthorized.
 * Use this for Data Fetching (Server Components) where you want to stop execution.
 */
export async function verifyPermission(resource: Resource, action: Action) {
  const session = (process.env.RBAC_TEST_MODE === "true" && mockSession !== undefined)
    ? mockSession
    : await auth();

  if (!session?.user || !session.user.id) {
    logger.warn("Access attempt without session", { resource, action });
    throw new Error("Unauthorized");
  }

  const userRoles = session.user.roles || [];
  const isAllowed = hasPermission(userRoles, resource, action);

  if (!isAllowed) {
    logger.warn("Permission denied", {
      userId: session.user.id,
      resource,
      action,
      roles: userRoles.map((r: any) => r.role.name),
    });
    throw new Error("Permission Denied");
  }

  return session.user;
}

/**
 * Creates a secure server action with built-in:
 * 1. Authentication check
 * 2. RBAC Permission check
 * 3. Input Validation (Zod)
 * 4. Error Handling
 * 5. (Future) Auditing
 */
export function createSafeAction<TInput, TOutput>(
  permission: { resource: Resource; action: Action },
  schema: z.Schema<TInput>,
  handler: (
    data: TInput,
    user: { id: string; email: string; name?: string | null; roles: any[] }
  ) => Promise<TOutput>
) {
  return async (data: TInput): Promise<SafeActionResponse<TOutput>> => {
    let session: any;
    try {
      // 1. Authentication Check
      session = (process.env.RBAC_TEST_MODE === "true" && mockSession !== undefined)
        ? mockSession
        : await auth();

      if (!session?.user || !session.user.id) {
        logger.warn("Action attempt without session", {
          resource: permission.resource,
          action: permission.action,
        });
        return {
          success: false,
          error: "Unauthorized: You must be logged in to perform this action.",
        };
      }

      // 2. Permission Check
      const userRoles = session.user.roles || [];
      const isAllowed = hasPermission(
        userRoles,
        permission.resource,
        permission.action
      );

      if (!isAllowed) {
        logger.warn("Action permission denied", {
          userId: session.user.id,
          resource: permission.resource,
          action: permission.action,
          roles: userRoles.map((r: any) => r.role.name),
        });
        return {
          success: false,
          error: `Permission Denied: You do not have permission to ${permission.action} ${permission.resource}.`,
        };
      }

      // 3. Input Validation
      const validationResult = schema.safeParse(data);
      if (!validationResult.success) {
        logger.warn("Action validation failed", {
          userId: session.user.id,
          resource: permission.resource,
          action: permission.action,
          errors: validationResult.error.flatten().fieldErrors,
        });
        return {
          success: false,
          error: "Invalid Input",
          validationErrors: validationResult.error.flatten().fieldErrors,
        };
      }

      // 4. Execution
      const result = await handler(validationResult.data, {
        id: session.user.id,
        email: session.user.email || "",
        name: session.user.name,
        roles: userRoles,
      });

      // 5. Auditing
      if (["CREATE", "UPDATE", "DELETE"].includes(permission.action)) {
        const resourceId = (result as any)?.id || (data as any)?.userId || (data as any)?.id;
        await logAudit({
          action: permission.action,
          resource: permission.resource,
          resourceId,
          performedByUserId: session.user.id,
          payload: validationResult.data,
          result: result,
          status: "SUCCESS",
        });
      }

      logger.info("Action executed successfully", {
        userId: session.user.id,
        resource: permission.resource,
        action: permission.action,
      });

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      logger.error(
        `Error in safe action [${permission.resource}:${permission.action}]`,
        error
      );

      // Auditing (Failure)
      if (["CREATE", "UPDATE", "DELETE"].includes(permission.action)) {
        const resourceId = (data as any)?.userId || (data as any)?.id;
        await logAudit({
          action: permission.action,
          resource: permission.resource,
          resourceId,
          performedByUserId: session?.user?.id,
          payload: data,
          status: "FAILURE",
          failureReason: error instanceof Error ? error.message : "Unknown error",
        });
      }

      return {
        success: false,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
      };
    }
  };
}
