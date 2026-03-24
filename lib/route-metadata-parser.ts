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

import {
  matchRoute,
  resolveBreadcrumbHrefs,
  extractParams,
  routeMetadata,
} from "@/lib/route-metadata";

export function getRouteData(pathname: string) {
  // Get route metadata
  const routeData = matchRoute(pathname);

  if (!routeData) {
    return {
      title: "Page",
      breadcrumbItems: [],
    };
  }

  // Find the matching pattern to extract params
  let params: Record<string, string> = {};
  for (const [pattern] of Object.entries(routeMetadata)) {
    if (pattern.includes(":")) {
      const regex = pattern.replace(/:[^/]+/g, "[^/]+");
      const regexPattern = new RegExp(`^${regex}$`);
      if (regexPattern.test(pathname)) {
        params = extractParams(pathname, pattern);
        break;
      }
    }
  }

  // Resolve dynamic segments in breadcrumb hrefs
  const resolvedBreadcrumbItems = resolveBreadcrumbHrefs(
    routeData.breadcrumb_items,
    pathname,
    params
  );

  return {
    title: routeData.title,
    breadcrumbItems: resolvedBreadcrumbItems,
  };
}
