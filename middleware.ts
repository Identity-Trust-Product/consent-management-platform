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

import authConfig from "@/auth.config";
import { validateApiKey } from "@/lib/api-auth-middleware";
import { API_ERROR_CODES, createErrorResponse } from "@/lib/api-errors";
import {
  PUBLIC_ROUTES,
  AUTH_ROUTES,
  API_PREFIXES,
  ROUTE_PREFIXES,
  DEFAULT_LOGIN_REDIRECT,
  HEALTH_CHECK_ENDPOINT,
} from "@/lib/constants/routes";
import type { Session } from "next-auth";
import NextAuth from "next-auth";
import { NextResponse, type NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);

async function middleware(
  req: NextRequest & { auth: Session | null }
): Promise<NextResponse | Response | undefined> {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // Private health route
  if (nextUrl.pathname.endsWith(HEALTH_CHECK_ENDPOINT)) {
    if (process.env.NEXT_RUNTIME === "nodejs") {
      return NextResponse.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      });
    } else {
      return NextResponse.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
      });
    }
  }

  const isPrincipalRoute = nextUrl.pathname.startsWith(ROUTE_PREFIXES.PRINCIPAL);

  if (isPrincipalRoute) {
    // Allow principal routes to proceed - validation will be handled by with-token-validation
    return NextResponse.next();
  }

  const isApiAuthRoute = nextUrl.pathname.startsWith(API_PREFIXES.AUTH);
  const isApiV1Route = nextUrl.pathname.startsWith(API_PREFIXES.V1);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname as any);
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname as any);

  // API v1 routes use API key authentication, not session auth
  if (isApiV1Route) {
    // Validate API key in middleware
    const apiContext = await validateApiKey(req);

    if (!apiContext) {
      return createErrorResponse(
        401,
        API_ERROR_CODES.UNAUTHORIZED,
        "Missing or invalid API key"
      );
    }

    // Attach API context to request headers for route handler to access
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-api-user-id", apiContext.user.id);
    requestHeaders.set("x-api-user-email", apiContext.user.email || "");
    requestHeaders.set("x-api-user-name", apiContext.user.name || "");
    requestHeaders.set("x-api-key-id", apiContext.apiKey.id);
    requestHeaders.set("x-api-key-name", apiContext.apiKey.name);
    requestHeaders.set("x-api-key-prefix", apiContext.apiKey.prefix);
    requestHeaders.set(
      "x-api-user-roles",
      JSON.stringify(apiContext.user.roles)
    );

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (isApiAuthRoute) {
    // NextAuth routes
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    const callbackUrl = encodeURIComponent(nextUrl.pathname + nextUrl.search);
    return Response.redirect(new URL(`/cms/login?callbackUrl=${callbackUrl}`, nextUrl));
  }

  return;
}

export default auth(middleware);

// Your matcher config remains the same.
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  runtime: "nodejs",
};
