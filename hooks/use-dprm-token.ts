"use client";
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

import { useEffect, useState } from "react";
import { verifyDprmToken } from "@/lib/utils";

// Function to extract access token from URL
export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;

  const urlParams = new URLSearchParams(window.location.search);
  const accessToken =
    urlParams.get("access_token") || window.location.pathname.split("/").pop();

  return accessToken && accessToken !== "dprm" ? accessToken : null;
}

export function useDprmToken() {
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = getAccessToken();

      if (accessToken) {
        try {
          await verifyDprmToken(accessToken);
          setIsValidToken(true);
        } catch (error) {
          setIsValidToken(false);
        }
      } else {
        setIsValidToken(false);
      }
    };

    checkToken();
  }, []);

  return isValidToken;
}
