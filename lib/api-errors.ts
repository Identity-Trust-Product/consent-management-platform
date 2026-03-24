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

import { NextResponse } from "next/server";
import { API_ERROR_CODES, type ApiErrorCode } from "@/lib/constants/api";

export { API_ERROR_CODES, type ApiErrorCode };

/**
 * API Error class
 */
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public code: ApiErrorCode,
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Create a standardized error response
 */
export function createErrorResponse(
  statusCode: number,
  code: ApiErrorCode,
  message: string,
  details?: any
) {
  return NextResponse.json(
    {
      success: false,
      error: {
        code,
        message,
        ...(details && { details }),
      },
    },
    { status: statusCode }
  );
}

/**
 * Common error responses
 */
export const ApiErrors = {
  unauthorized: (message = "Missing or invalid API key") =>
    createErrorResponse(401, API_ERROR_CODES.UNAUTHORIZED, message),

  invalidApiKey: (message = "Invalid API key format or value") =>
    createErrorResponse(401, API_ERROR_CODES.INVALID_API_KEY, message),

  inactiveApiKey: (message = "API key has been disabled") =>
    createErrorResponse(403, API_ERROR_CODES.INACTIVE_API_KEY, message),

  forbidden: (message = "Insufficient permissions") =>
    createErrorResponse(403, API_ERROR_CODES.FORBIDDEN, message),

  notFound: (message = "Resource not found") =>
    createErrorResponse(404, API_ERROR_CODES.NOT_FOUND, message),

  validationError: (message = "Validation failed", details?: any) =>
    createErrorResponse(400, API_ERROR_CODES.VALIDATION_ERROR, message, details),

  rateLimitExceeded: (message = "Rate limit exceeded") =>
    createErrorResponse(429, API_ERROR_CODES.RATE_LIMIT_EXCEEDED, message),

  internalError: (message = "Internal server error") =>
    createErrorResponse(500, API_ERROR_CODES.INTERNAL_ERROR, message),
};
