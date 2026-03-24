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

import { ReadonlyURLSearchParams } from "next/navigation";

/**
 * Creates a DPRM link that persists specific query parameters (font_size, minor_data_principal_id).
 *
 * @param basePath The base path for the link (e.g., "/cms/principal/dprm/...")
 * @param searchParams The current search params to extract values from
 * @returns The full URL with persisted query parameters
 */
export function createDprmLink(
  basePath: string,
  searchParams?:
    | URLSearchParams
    | ReadonlyURLSearchParams
    | Record<string, string | undefined | null>
    | null
): string {
  const params = new URLSearchParams();

  // Helper to add param if it exists
  const addParam = (key: string, value: string | null | undefined) => {
    if (value) {
      params.set(key, value);
    }
  };

  if (searchParams) {
    if (
      searchParams instanceof URLSearchParams ||
      searchParams instanceof ReadonlyURLSearchParams
    ) {
      addParam("font_size", searchParams.get("font_size"));
      addParam(
        "minor_data_principal_id",
        searchParams.get("minor_data_principal_id")
      );
    } else {
      addParam("font_size", searchParams.font_size);
      addParam("minor_data_principal_id", searchParams.minor_data_principal_id);
    }
  }

  const queryString = params.toString();
  // If basePath already has query params, append with &
  if (basePath.includes("?")) {
    return queryString ? `${basePath}&${queryString}` : basePath;
  }
  return queryString ? `${basePath}?${queryString}` : basePath;
}
