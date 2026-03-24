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
import { logger } from "@/lib/logger";

export type AuditAction =
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "LOGIN"
  | "LOGOUT"
  | "EXPORT"
  | "VIEW"
  | string;
export type AuditResource =
  | "USER"
  | "BUSINESS_UNIT"
  | "CONSENT"
  | "NOTICE"
  | "DPRM"
  | string;
export type AuditStatus = "SUCCESS" | "FAILURE";

export interface AuditLogParams {
  action: AuditAction;
  resource: AuditResource;
  resourceId?: string | number;
  performedByUserId?: string;
  payload?: any;
  result?: any;
  status?: AuditStatus;
  failureReason?: string;
  metadata?: Record<string, any>;
}

/**
 * Records an audit log entry in the database.
 * This function is designed to be safe and not throw errors that would break the main application flow.
 */
export async function logAudit(params: AuditLogParams) {
  try {
    const {
      action,
      resource,
      resourceId,
      performedByUserId,
      payload,
      result,
      status = "SUCCESS",
      failureReason,
      metadata,
    } = params;

    // Sanitize payload/result (remove passwords, large blobs, etc.)
    const sanitizedPayload = sanitizeData(payload);
    const sanitizedResult = sanitizeData(result);

    await prisma.auditLog.create({
      data: {
        action,
        resource,
        resourceId: resourceId ? String(resourceId) : null,
        performedByUserId,
        payload: sanitizedPayload ?? undefined,
        result: sanitizedResult ?? undefined,
        status,
        failureReason,
        metadata: metadata ?? undefined,
      },
    });
  } catch (error) {
    // Fallback to logger if DB write fails
    logger.error("Failed to write audit log", error, { params });
  }
}

function sanitizeData(data: any): any {
  if (!data) return null;

  // Handle arrays
  if (Array.isArray(data)) {
    return data.map((item) => sanitizeData(item));
  }

  // Handle objects
  if (typeof data === "object") {
    const sensitiveKeys = [
      "password",
      "token",
      "secret",
      "creditCard",
      "confirmPassword",
    ];
    const sanitized: Record<string, any> = {};

    for (const key of Object.keys(data)) {
      if (
        sensitiveKeys.some((k) => key.toLowerCase().includes(k.toLowerCase()))
      ) {
        sanitized[key] = "[REDACTED]";
      } else {
        sanitized[key] = sanitizeData(data[key]);
      }
    }
    return sanitized;
  }

  return data;
}
