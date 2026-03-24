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

import { jwtVerify } from "jose";
import { InvalidLinkPage } from "@/components/invalid-link-page";
import { LinkExpiredPage } from "@/components/link-expired-page";

// Notice token payload interface
export interface NoticeTokenPayload {
  exp: number;
  iat: number;
  public_id: string;
  [key: string]: any; // Allow additional fields
}

// Interface for the validated page props
export interface ValidatedNoticePageProps {
  tokenPayload: NoticeTokenPayload;
  accessToken: string;
  params: {
    access_token: string;
    notice_id?: string;
    [key: string]: any; // Allow additional parameters
  };
}

// Interface for pages that use notice token validation
interface NoticeTokenValidatedPageProps {
  params: Promise<{
    access_token: string;
    notice_id?: string;
    [key: string]: any; // Allow additional parameters
  }>;
}

/**
 * Notice token validation function - hardcoded implementation
 */
async function verifyNoticeToken(token: string): Promise<NoticeTokenPayload> {
  const secret = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "your-secret-key"
  );

  try {
    const { payload } = await jwtVerify(token, secret);

    // Check if token has the required public_id field
    if (!payload.public_id) {
      throw new Error("INVALID_TOKEN");
    }

    return payload as NoticeTokenPayload;
  } catch (error: any) {
    // Check for specific JWT errors
    if (
      error.code === "ERR_JWT_EXPIRED" ||
      error.message?.includes("expired")
    ) {
      throw new Error("TOKEN_EXPIRED");
    }

    // For any other error, throw invalid token
    throw new Error("INVALID_TOKEN");
  }
}

/**
 * Higher-order component that wraps pages requiring notice token validation
 * Handles token validation and renders appropriate error pages for invalid/expired tokens
 *
 * @param WrappedComponent - The page component to wrap
 * @returns A new component that handles notice token validation
 */
export function withNoticeTokenValidation<T extends Record<string, any> = {}>(
  WrappedComponent: React.ComponentType<T & ValidatedNoticePageProps>
) {
  return async function NoticeTokenValidatedPage(
    props: T & NoticeTokenValidatedPageProps
  ) {
    const { params, ...otherProps } = props;
    const resolvedParams = await params;
    const { access_token } = resolvedParams;

    // Validate the token and handle errors
    let payload;
    try {
      payload = await verifyNoticeToken(access_token);
    } catch (error: any) {
      // Handle token validation errors by rendering appropriate error pages
      if (error.message === "TOKEN_EXPIRED") {
        return <LinkExpiredPage />;
      }
      // For any other error (INVALID_TOKEN or others), show invalid link
      return <InvalidLinkPage />;
    }

    // Token is valid, render the wrapped component with token data and all params
    const validatedProps = {
      ...otherProps,
      params: resolvedParams, // Pass through all params including notice_id
      tokenPayload: payload,
      accessToken: access_token,
    } as unknown as T & ValidatedNoticePageProps;

    return <WrappedComponent {...validatedProps} />;
  };
}

// Return type for the validation utility function
export type NoticeTokenValidationResult =
  | {
    success: true;
    payload: NoticeTokenPayload;
    accessToken: string;
    error: null;
  }
  | {
    success: false;
    payload: null;
    accessToken: string;
    error: string;
  };

/**
 * Utility function to extract notice token from params for non-HOC usage
 * Useful for server actions or other functions that need token validation
 */
export async function validateNoticeTokenFromParams(
  params: Promise<{ access_token: string }>
): Promise<NoticeTokenValidationResult> {
  const { access_token } = await params;

  try {
    const payload = await verifyNoticeToken(access_token);
    return {
      success: true,
      payload,
      accessToken: access_token,
      error: null,
    };
  } catch (error: any) {
    return {
      success: false,
      payload: null,
      accessToken: access_token,
      error: error.message,
    };
  }
}
