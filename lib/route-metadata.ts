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

export interface BreadcrumbItem {
  type: "link" | "page";
  label: string;
  href?: string;
}

export interface RouteMetadata {
  title: string;
  breadcrumb_items: BreadcrumbItem[];
}

export const routeMetadata: Record<string, RouteMetadata> = {
  "/cms": {
    title: "Home",
    breadcrumb_items: [{ type: "page", label: "CMS" }],
  },
  "/admin": {
    title: "Admin Panel",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Admin Panel" },
    ],
  },
  "/cms/data-fiduciary/users": {
    title: "Users and Roles",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/webhooks": {
    title: "Webhooks",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/webhooks/logs": {
    title: "Webhook Logs",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "link", label: "Webhooks", href: "/cms/data-fiduciary/webhooks" },
      { type: "page", label: "Logs" },
    ],
  },
  "/cms/data-fiduciary/api-keys": {
    title: "API Keys",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/sla": {
    title: "SLA Configuration",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/business-units": {
    title: "Department",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/business-units/new": {
    title: "Add New Department",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Department",
        href: "/cms/data-fiduciary/business-units",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/business-units/:id": {
    title: "View Department",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Department",
        href: "/cms/data-fiduciary/business-units",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/business-units/:id/edit": {
    title: "Edit Department",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Department",
        href: "/cms/data-fiduciary/business-units",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/user-attributes": {
    title: "Purpose Attributes",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/user-attributes/new": {
    title: "New Purpose Attribute",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Purpose Attributes",
        href: "/cms/data-fiduciary/user-attributes",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/user-attributes/:id": {
    title: "View Purpose Attribute",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Purpose Attributes",
        href: "/cms/data-fiduciary/user-attributes",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/user-attributes/:id/edit": {
    title: "Edit Purpose Attribute",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Purpose Attributes",
        href: "/cms/data-fiduciary/user-attributes",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/purposes-of-processing": {
    title: "Purpose Sub Master",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/purposes-of-processing/new": {
    title: "New Purpose Sub Master",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Purpose Sub Master",
        href: "/cms/data-fiduciary/purposes-of-processing",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/purposes-of-processing/:id": {
    title: "View Purpose Sub Master",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Purpose Sub Master",
        href: "/cms/data-fiduciary/purposes-of-processing",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/purposes-of-processing/:id/edit": {
    title: "Edit Purpose Sub Master",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Purpose Sub Master",
        href: "/cms/data-fiduciary/purposes-of-processing",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/data-processors": {
    title: "Processors",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/data-processors/new": {
    title: "New Processor",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Processors",
        href: "/cms/data-fiduciary/data-processors",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/data-processors/:ouId": {
    title: "View Processor",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Processors",
        href: "/cms/data-fiduciary/data-processors",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/data-processors/:ouId/edit": {
    title: "Edit Processor",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Processors",
        href: "/cms/data-fiduciary/data-processors",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/consent-purposes": {
    title: "Purpose Master",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/consent-purposes/new": {
    title: "New Purpose Master",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Purpose Master",
        href: "/cms/data-fiduciary/consent-purposes",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/consent-purposes/:id": {
    title: "View Purpose Master",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Purpose Master",
        href: "/cms/data-fiduciary/consent-purposes",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/consent-purposes/:id/edit": {
    title: "Edit Purpose Master",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Purpose Master",
        href: "/cms/data-fiduciary/consent-purposes",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/business-processes": {
    title: "Process",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/business-processes/new": {
    title: "New Process",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Process",
        href: "/cms/data-fiduciary/business-processes",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/business-processes/:id": {
    title: "View Process",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Process",
        href: "/cms/data-fiduciary/business-processes",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/business-processes/:id/edit": {
    title: "Edit Process",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Process",
        href: "/cms/data-fiduciary/business-processes",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/notices": {
    title: "Notice Details",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/notices/new": {
    title: "New Notice Details",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Notice Details",
        href: "/cms/data-fiduciary/notices",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/notices/:public_id": {
    title: "Notice Details",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Notice Details",
        href: "/cms/data-fiduciary/notices",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/dashboard": {
    title: "Analytics Dashboard",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/consent-history": {
    title: "Consent History",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/consent-timeline/:id": {
    title: "Consent Timeline",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/grievances/admin": {
    title: "Grievances",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/grievances/my-tickets": {
    title: "My Tickets",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/data-retention": {
    title: "Data Retention Policies",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/data-retention/new": {
    title: "New Data Retention Policy",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Data Retention Policies",
        href: "/cms/data-fiduciary/data-retention",
      },
      { type: "page", label: "Current Page" },
    ],
  },
  "/cms/data-fiduciary/data-retention/:id/edit": {
    title: "Edit Data Retention Policy",
    breadcrumb_items: [
      { type: "link", label: "CMS", href: "/cms" },
      {
        type: "link",
        label: "Data Retention Policies",
        href: "/cms/data-fiduciary/data-retention",
      },
      { type: "page", label: "Current Page" },
    ],
  },
};

// Helper function to match route patterns with dynamic segments
export function matchRoute(currentPath: string): RouteMetadata | null {
  // First try exact match
  if (routeMetadata[currentPath]) {
    return routeMetadata[currentPath];
  }

  // Try pattern matching for dynamic routes
  for (const [pattern, metadata] of Object.entries(routeMetadata)) {
    if (pattern.includes(":")) {
      const regex = pattern.replace(/:[^/]+/g, "[^/]+");
      const regexPattern = new RegExp(`^${regex}$`);
      if (regexPattern.test(currentPath)) {
        return metadata;
      }
    }
  }

  return null;
}

// Helper function to replace dynamic segments in breadcrumb hrefs
export function resolveBreadcrumbHrefs(
  breadcrumbItems: BreadcrumbItem[],
  currentPath: string,
  params: Record<string, string>,
): BreadcrumbItem[] {
  return breadcrumbItems.map((item) => {
    if (item.type === "link" && item.href) {
      let resolvedHref = item.href;

      // Replace dynamic segments with actual values
      for (const [key, value] of Object.entries(params)) {
        resolvedHref = resolvedHref.replace(`:${key}`, value);
      }

      return { ...item, href: resolvedHref };
    }
    return item;
  });
}

// Helper function to extract params from current path using pattern
export function extractParams(
  currentPath: string,
  pattern: string,
): Record<string, string> {
  const params: Record<string, string> = {};

  const patternParts = pattern.split("/cms");
  const pathParts = currentPath.split("/cms");

  if (patternParts.length !== pathParts.length) {
    return params;
  }

  for (let i = 0; i < patternParts.length; i++) {
    const patternPart = patternParts[i];
    const pathPart = pathParts[i];

    if (patternPart.startsWith(":")) {
      const paramName = patternPart.slice(1);
      params[paramName] = pathPart;
    }
  }

  return params;
}
