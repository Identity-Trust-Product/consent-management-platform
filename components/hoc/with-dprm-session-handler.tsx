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
import { trackDprmSessionActivity } from "@/lib/services/activity-service";

// DPRM token payload interface
export interface DprmTokenPayload {
  exp: number;
  iat: number;
  data_principal_id: string;
  session_id: string; // Ensure session_id is part of the token
  [key: string]: any; // Allow additional fields for future session data
}

// Interface for session context that can be extended
export interface DprmSessionContext {
  tokenPayload: DprmTokenPayload;
  accessToken: string;
  dataPrincipalId: string;
  sessionId: string;
  sessionExpiresAt: Date;
  // Future session handling fields can be added here
  // permissions?: string[];
  // activityLog?: ActivityEntry[];
}

// Interface for the validated page props
export interface ValidatedDprmPageProps {
  sessionContext: DprmSessionContext;
  params: {
    access_token: string;
    [key: string]: any; // Allow additional parameters
  };
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Interface for pages that use DPRM session handling
interface DprmSessionValidatedPageProps {
  params: Promise<{
    access_token: string;
    [key: string]: any; // Allow additional parameters
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * Verifies the DPRM JWT and returns a structured session context.
 * Throws specific errors for expired or invalid tokens.
 */
async function getSessionContext(
  accessToken: string
): Promise<DprmSessionContext> {
  const secret = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "your-secret-key"
  );

  try {
    const { payload } = await jwtVerify(accessToken, secret);

    // Validate that the token has the required fields for a session
    if (!payload.data_principal_id || !payload.session_id) {
      throw new Error("INVALID_TOKEN_STRUCTURE");
    }

    const tokenPayload = payload as DprmTokenPayload;

    // The token is valid, so we create the session context object
    return {
      tokenPayload,
      accessToken,
      dataPrincipalId: tokenPayload.data_principal_id,
      sessionId: tokenPayload.session_id,
      sessionExpiresAt: new Date(tokenPayload.exp * 1000),
    };
  } catch (error: any) {
    if (error.code === "ERR_JWT_EXPIRED") {
      throw new Error("TOKEN_EXPIRED");
    }
    // For any other error, treat it as invalid
    throw new Error("INVALID_TOKEN");
  }
}

/**
 * A Higher-Order Component to protect DPRM pages.
 * It handles token validation, creates a session context, logs user activity,
 * and renders error pages for invalid or expired sessions.
 *
 * @param WrappedComponent The page component to protect.
 */
export function withDprmSessionHandler<T extends Record<string, any> = {}>(
  WrappedComponent: React.ComponentType<T & ValidatedDprmPageProps>
) {
  // This is an async Server Component
  return async function DprmSessionValidatedPage(
    props: T & DprmSessionValidatedPageProps
  ) {
    const { params, ...otherProps } = props;
    const resolvedParams = await params;
    const { access_token } = resolvedParams;

    try {
      // 1. Validate the token and create the session context in one step.
      const sessionContext = await getSessionContext(access_token);
      // 2. LOG THE ACTIVITY. This is the new, integrated step.
      // We run this as a side effect. We don't need to await it because we
      // don't want to block the page render if activity logging fails.
      trackDprmSessionActivity(sessionContext.tokenPayload).catch((err) => {
        // Log the error but don't fail the page load
        console.error("Background activity tracking failed:", err);
      });

      // 3. Prepare props and render the actual page component.
      const validatedProps = {
        ...otherProps,
        params: resolvedParams,
        sessionContext,
      } as unknown as T & ValidatedDprmPageProps;

      return <WrappedComponent {...validatedProps} />;
    } catch (error: any) {
      // 4. Handle any errors from getSessionContext.
      if (error.message === "TOKEN_EXPIRED") {
        return <LinkExpiredPage />;
      }
      return <InvalidLinkPage />;
    }
  };
}

// Return type for the validation utility function
export type DprmSessionValidationResult =
  | {
    success: true;
    sessionContext: DprmSessionContext;
    error: null;
  }
  | {
    success: false;
    sessionContext: null;
    error: string;
  };

/**
 * Utility function to extract DPRM session from params for non-HOC usage
 * Useful for server actions or other functions that need session validation
 */
export async function validateDprmSessionFromParams(
  params: Promise<{ access_token: string }>
): Promise<DprmSessionValidationResult> {
  const { access_token } = await params;

  try {
    const sessionContext = await getSessionContext(access_token);

    return {
      success: true,
      sessionContext,
      error: null,
    };
  } catch (error: any) {
    return {
      success: false,
      sessionContext: null,
      error: error.message,
    };
  }
}

/**
 * Helper function to check if DPRM session is still valid
 * Can be used for client-side session checks
 */
export function isDprmSessionValid(
  sessionContext: DprmSessionContext
): boolean {
  const now = new Date();
  return now < sessionContext.sessionExpiresAt;
}

/**
 * Helper function to get remaining session time in minutes
 */
export function getRemainingSessionTime(
  sessionContext: DprmSessionContext
): number {
  const now = new Date();
  const remaining = sessionContext.sessionExpiresAt.getTime() - now.getTime();
  return Math.max(0, Math.floor(remaining / (1000 * 60))); // in minutes
}
