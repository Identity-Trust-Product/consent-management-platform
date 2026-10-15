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
    <div className="bg-background">
      <div className="px-5 pb-2 pt-20 sm:px-8 lg:px-10 lg:pt-8">
        <div className="flex flex-col">
          <BreadcrumbNavigation items={breadcrumbItems} />
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">{title}</h1>
        </div>
      </div>
    </div>
  );
}
