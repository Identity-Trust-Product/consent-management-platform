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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock, AlertCircle } from "lucide-react";

// Invalid Link Component
function InvalidLinkContent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full mx-4">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Invalid Link
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            This link is invalid or has been tampered with. Please verify the
            link and try again.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <p className="text-sm text-orange-700">
              If you continue to experience issues, please contact the data
              fiduciary for assistance.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Link Expired Component
function LinkExpiredContent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full mx-4">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <Clock className="w-6 h-6 text-red-600" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Link Expired
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            This notice link has expired and is no longer accessible. Please
            request a new link from the data fiduciary.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-700">
              For security purposes, notice links have limited validity periods.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Generic interface for any token payload
export interface TokenPayload {
  exp: number;
  iat: number;
  [key: string]: any; // Allow additional fields
}

// Interface for the validated page props
export interface ValidatedPageProps {
  tokenPayload: TokenPayload;
  accessToken: string;
  params: {
    access_token: string;
    [key: string]: any; // Allow additional parameters
  };
}

// Interface for pages that use token validation
interface TokenValidatedPageProps {
  params: Promise<{
    access_token: string;
    [key: string]: any; // Allow additional parameters
  }>;
}

// Type for token validation function
export type TokenValidationFunction = (token: string) => Promise<any>;

/**
 * Higher-order component that wraps pages requiring token validation
 * Handles token validation and renders appropriate error pages for invalid/expired tokens
 *
 * @param WrappedComponent - The page component to wrap
 * @param validateToken - The token validation function to use
 * @returns A new component that handles token validation
 */
export function withTokenValidation<T extends Record<string, any> = {}>(
  WrappedComponent: React.ComponentType<T & ValidatedPageProps>,
  validateToken: TokenValidationFunction
) {
  return async function TokenValidatedPage(props: T & TokenValidatedPageProps) {
    const { params, ...otherProps } = props;
    const resolvedParams = await params;
    const { access_token } = resolvedParams;

    // Validate the token and handle errors
    let payload;
    try {
      payload = await validateToken(access_token);
    } catch (error: any) {
      // Handle token validation errors by rendering appropriate error pages
      if (error.message === "TOKEN_EXPIRED") {
        return <LinkExpiredContent />;
      }
      // For any other error (INVALID_TOKEN or others), show invalid link
      return <InvalidLinkContent />;
    }

    // Token is valid, render the wrapped component with token data and all params
    const validatedProps = {
      ...otherProps,
      params: resolvedParams, // Pass through all params including notice_id
      tokenPayload: payload as TokenPayload,
      accessToken: access_token,
    } as unknown as T & ValidatedPageProps;

    return <WrappedComponent {...validatedProps} />;
  };
}

// Return type for the validation utility function
export type TokenValidationResult =
  | {
    success: true;
    payload: TokenPayload;
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
 * Utility function to extract token from params for non-HOC usage
 * Useful for server actions or other functions that need token validation
 */
export async function validateTokenFromParams(
  params: Promise<{ access_token: string }>,
  validateToken: TokenValidationFunction
): Promise<TokenValidationResult> {
  const { access_token } = await params;

  try {
    const payload = await validateToken(access_token);
    return {
      success: true,
      payload: payload as TokenPayload,
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
