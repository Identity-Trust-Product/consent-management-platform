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

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SignJWT, jwtVerify } from "jose";
import { ColorOption } from "@/components/ui/color-dropdown";
import crypto from "crypto";
import canonicalize from "canonicalize";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function generateAccessToken(
  attrs: Record<string, any>,
  expiresAt: Date,
): Promise<string> {
  const secret = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "your-secret-key",
  );

  // Calculate expiry in seconds from now
  const expiryInSeconds = Math.floor(expiresAt.getTime() / 1000);

  const jwt = await new SignJWT(attrs)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expiryInSeconds)
    .setIssuedAt()
    .sign(secret);

  return jwt;
}

export async function verifyAccessToken(token: string): Promise<any> {
  const secret = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "your-secret-key",
  );

  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error("Error verifying access token:", error);
    return null;
  }
}

export async function verifyNoticeToken(token: string): Promise<any> {
  const secret = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "your-secret-key",
  );

  try {
    const { payload } = await jwtVerify(token, secret);

    // Check if token has the required public_id field
    if (!payload.public_id) {
      throw new Error("INVALID_TOKEN");
    }

    return payload;
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

export async function verifyDprmToken(token: string): Promise<any> {
  const secret = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || "your-secret-key",
  );

  try {
    const { payload } = await jwtVerify(token, secret);

    // Check if token has the required data_principal_id field
    if (!payload.data_principal_id) {
      throw new Error("INVALID_TOKEN");
    }

    return payload;
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

// Color mapping for CSS variables
export const colorMap: Record<ColorOption, string> = {
  primary: "primary",
  secondary: "info",
  success: "success",
  error: "destructive",
  warning: "warning",
  "shades-black": "shades-black",
  "shades-white": "shades-white",
  "neutral-shades": "neutral",
  "pick-color": "pick-color",
  default: "default",
};

export const getCSSVariable = (color: ColorOption, colorNumber: number) => {
  if (color === "default") return undefined;

  const mappedColor = colorMap[color];

  // Handle special cases where no color number is needed
  if (color === "shades-black" || color === "shades-white") {
    return `var(--${mappedColor})`;
  }

  return `var(--${mappedColor}-${colorNumber})`;
};

// Convert CSS variable to hex color by reading computed style
export const cssVariableToHex = (cssVariable: string): string => {
  if (!cssVariable || !cssVariable.startsWith("var(--")) {
    return cssVariable; // Return as-is if not a CSS variable
  }

  // Create a temporary element to get computed style
  if (typeof window !== "undefined") {
    try {
      const tempElement = document.createElement("div");
      tempElement.style.color = cssVariable;
      tempElement.style.position = "absolute";
      tempElement.style.visibility = "hidden";
      tempElement.style.pointerEvents = "none";
      tempElement.style.top = "-9999px";
      document.body.appendChild(tempElement);

      // Force a reflow to ensure styles are applied
      tempElement.offsetHeight;

      const computedColor = window.getComputedStyle(tempElement).color;
      document.body.removeChild(tempElement);

      // Convert rgb() to hex
      if (computedColor && computedColor.startsWith("rgb")) {
        const rgbMatch = computedColor.match(/\d+/g);
        if (rgbMatch && rgbMatch.length >= 3) {
          const r = parseInt(rgbMatch[0]);
          const g = parseInt(rgbMatch[1]);
          const b = parseInt(rgbMatch[2]);
          const hex = `#${r.toString(16).padStart(2, "0")}${g
            .toString(16)
            .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
          return hex;
        }
      }
    } catch (error) {
      console.warn("Failed to convert CSS variable to hex:", error);
    }
  }

  return "#23DA7F"; // Default fallback
};

/**
 * Generates a SHA-256 hash for a given object using JCS (RFC 8785).
 * Matches Elixir: Jcs.encode() |> Utils.hash()
 */
export function generateHash(data: any): string {
  // canonicalize ensures keys are sorted and whitespace is removed per RFC 8785
  const encoded = canonicalize(data);
  if (!encoded) return "";
  return crypto.createHash("sha256").update(encoded).digest("hex");
}
