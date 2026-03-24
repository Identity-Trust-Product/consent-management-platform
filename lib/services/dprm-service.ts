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

import { generateAccessToken } from "@/lib/utils";
import {
  getLatestActiveConsents,
  UserAttributeWithProcessingPurposes,
} from "./consents-service";
import { randomUUID } from "crypto";

export async function generateDprmAccessToken(
  dataPrincipalId: string,
  expiresAt: Date
) {
  try {
    const sessionId = randomUUID();
    const attrs = {
      data_principal_id: dataPrincipalId,
      session_id: sessionId,
      expires_at: expiresAt.toISOString(),
    };
    const accessToken = await generateAccessToken(attrs, expiresAt);
    return accessToken;
  } catch (error) {
    console.error("Error generating DPRM access token:", error);
    throw new Error("Failed to generate access token");
  }
}

export async function generateDprmLink(
  dataPrincipalId: string,
  expiresAt?: Date
) {
  try {
    // Use provided expiry date or default to half an hour from now
    const linkExpiresAt = expiresAt || new Date(Date.now() + 30 * 60 * 1000);

    const accessToken = await generateDprmAccessToken(
      dataPrincipalId,
      linkExpiresAt
    );

    const basePath =
      process.env.BASE_PATH || process.env.AUTH_URL || "http://localhost:3000";
    const dprmUrl = `${basePath}/principal/dprm/${accessToken}`;

    return dprmUrl;
  } catch (error) {
    console.error("Error generating DPRM link:", error);
    throw new Error("Failed to generate DPRM link");
  }
}

/**
 * Gets latest 5 active consents for DPRM dashboard
 */
export async function getLatestActiveConsentsForDprm(
  dataPrincipalId: string
): Promise<UserAttributeWithProcessingPurposes[]> {
  try {
    return await getLatestActiveConsents(dataPrincipalId);
  } catch (error) {
    console.error("Error fetching latest active consents for DPRM:", error);
    throw new Error("Failed to fetch latest active consents");
  }
}
