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

import { usePathname } from "next/navigation";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";
import { getRouteData } from "@/lib/route-metadata-parser";

export default function Header() {
  const pathname = usePathname();
  const { title, breadcrumbItems } = getRouteData(pathname);

  return (
    <div className="border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur">
      <div className="px-4 py-4">
        <div className="flex flex-col">
          <BreadcrumbNavigation items={breadcrumbItems} />
          <h1 className="text-xl font-semibold text-shades-black">{title}</h1>
        </div>
      </div>
    </div>
  );
}
