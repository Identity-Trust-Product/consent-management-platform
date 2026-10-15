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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  ConsentCenterIcon,
  DPOCenterIcon,
  PolicyCenterIcon,
} from "./icons/sidebar-icons";

interface SidebarSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  defaultOpen: boolean;
  items: {
    title: string;
    href: string;
  }[];
}

// Menu items configuration
const getDataFiduciaryItems = (): SidebarSection[] => {
  // Build DPO Center items conditionally
  const dpoCenterItems = [
    {
      title: "Dashboard",
      href: "/cms/data-fiduciary/dashboard",
    },
    {
      title: "Consent History",
      href: "/cms/data-fiduciary/consent-history",
    },
  ];

  // Only add Grievances admin if user has GRIEVANCE_ADMIN:READ permission
  // if (canAccessGrievanceAdmin) {
  //   dpoCenterItems.push({
  //     title: "Grievances",
  //     href: "/cms/data-fiduciary/grievances/admin",
  //   });
  // }

  // Only add My Tickets if user has GRIEVANCE:READ permission
  // if (canAccessGrievance) {
  //   dpoCenterItems.push({
  //     title: "My Tickets",
  //     href: "/cms/data-fiduciary/grievances/my-tickets",
  //   });
  // }

  const sections: SidebarSection[] = [
    {
      title: "CONSENT MANAGER",
      icon: PolicyCenterIcon,
      defaultOpen: false,
      items: [
        {
          title: "Organization",
          href: "/cms/data-fiduciary/business-units",
        },
        {
          title: "Data attributes",
          href: "/cms/data-fiduciary/user-attributes",
        },
        {
          title: "Purpose Sub Master",
          href: "/cms/data-fiduciary/purposes-of-processing",
        },
        {
          title: "Purpose Master",
          href: "/cms/data-fiduciary/consent-purposes",
        },
        // {
        //   title: "Processors",
        //   href: "/cms/data-fiduciary/data-processors",
        // },
        // {
        //   title: "Data Retention Policy",
        //   href: "/cms/data-fiduciary/data-retention",
        // },
      ],
    },
    {
      title: "CREATE NOTICE TEMPLATE",
      icon: ConsentCenterIcon,
      defaultOpen: false,
      items: [
        {
          title: "Create Notice Template",
          href: "/cms/data-fiduciary/business-processes",
        },
      ],
    },
    {
      title: "ADMIN DEPARTMENT",
      icon: DPOCenterIcon,
      defaultOpen: false,
      items: dpoCenterItems,
    },
    {
      title: "NOTICE DETAILS",
      icon: ConsentCenterIcon,
      defaultOpen: false,
      items: [
        {
          title: "View Notice Details",
          href: "/cms/data-fiduciary/notices",
        },
      ],
    },
    {
      title: "DEVELOPER CENTER",
      icon: DPOCenterIcon,
      defaultOpen: false,
      items: [
        {
          title: "API Keys",
          href: "/cms/data-fiduciary/api-keys",
        },
        {
          title: "Webhooks",
          href: "/cms/data-fiduciary/webhooks",
        },
      ],
    },
  ];

  return sections;
};

export function Sidebar() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [openSections, setOpenSections] = React.useState<string[]>([]);
  const pathname = usePathname();

  // Get sidebar items
  const sidebarItems = React.useMemo(() => {
    return getDataFiduciaryItems();
  }, []);

  // Find which section contains the current path
  const getCurrentSection = React.useCallback(() => {
    for (const section of sidebarItems as SidebarSection[]) {
      for (const item of section.items) {
        if (item.href && pathname.startsWith(item.href)) {
          return section.title;
        }
      }
    }
    return null;
  }, [pathname, sidebarItems]);

  // Initialize open sections on mount and when pathname changes
  React.useEffect(() => {
    const currentSection = getCurrentSection();
    const defaultOpenSections = (sidebarItems as SidebarSection[])
      .filter((section) => section.defaultOpen)
      .map((section) => section.title);

    // Ensure current section is always included if it exists
    const sectionsToOpen = currentSection
      ? [...new Set([...defaultOpenSections, currentSection])]
      : defaultOpenSections;

    setOpenSections(sectionsToOpen);
  }, [getCurrentSection, sidebarItems]);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleAccordionValueChange = (value: string[]) => {
    const currentSection = getCurrentSection();

    // Prevent closing the current section if it exists
    if (currentSection && !value.includes(currentSection)) {
      value.push(currentSection);
    }

    setOpenSections(value);
  };

  // Check if a menu item is the current active item
  const isActiveItem = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-40 h-full overflow-hidden border-r border-sky-200/10 bg-[linear-gradient(180deg,#07183a_0%,#0b2552_48%,#061229_100%)] shadow-[10px_0_34px_rgba(7,24,58,0.22)] transition-all duration-200 ease-in-out",
        isExpanded ? "w-[18.5rem]" : "w-[5rem]",
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="flex h-[4.25rem] items-center justify-start border-b border-sky-100/10 px-4">
        <div
          className={cn(
            "flex h-10 items-center rounded-md text-white transition-all",
            isExpanded ? "w-full gap-3 px-2" : "w-12 justify-center",
          )}
          aria-label="Consent Management"
          title="Consent Management"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white text-sm font-bold text-primary-800 shadow-[0_10px_24px_rgba(2,8,23,0.22)]">
            CM
          </span>
          {isExpanded && (
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold leading-5">
                Consent Management
              </span>
              <span className="block truncate text-[11px] font-medium uppercase leading-4 text-sky-100/55">
                Data Fiduciary
              </span>
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-4.25rem)] overflow-y-auto px-3 py-4">
        {isExpanded ? (
          <Accordion
            type="multiple"
            className="w-full space-y-2"
            value={openSections}
            onValueChange={handleAccordionValueChange}
          >
            {(sidebarItems as SidebarSection[]).map((section) => (
              <AccordionItem
                key={section.title}
                value={section.title}
                className="overflow-hidden rounded-md border border-sky-100/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <AccordionTrigger className="rounded-md px-3 py-3 text-sidebar-foreground transition-colors hover:bg-sky-100/[0.08] hover:text-white hover:no-underline data-[state=open]:bg-sky-100/[0.10] data-[state=open]:text-white">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-sky-100/[0.10] text-sky-50">
                      <section.icon className="h-4 w-4" />
                    </span>
                    <span className="truncate text-xs font-semibold uppercase">
                      {section.title}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-2 pb-2 pt-1">
                  <div className="space-y-1 border-l border-sky-100/10 pl-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href || "#"}
                        className={cn(
                          "group relative flex h-9 items-center gap-3 rounded-md px-3 text-sm transition-colors",
                          isActiveItem(item.href || "")
                            ? "bg-white text-primary-800 shadow-[0_8px_20px_rgba(2,8,23,0.18)] font-semibold"
                            : "text-sidebar-foreground/85 hover:bg-sky-100/[0.08] hover:text-white",
                        )}
                      >
                        {isActiveItem(item.href || "") && (
                          <span className="absolute -left-[13px] h-5 w-1 rounded-full bg-sky-300" />
                        )}
                        <span className="truncate">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          // Collapsed state - show only icons
          <div className="space-y-2">
            {(sidebarItems as SidebarSection[]).map((section) => {
              const currentSection = getCurrentSection();
              const isCurrentSection = currentSection === section.title;

              return (
                <div key={section.title} className="group">
                  <div
                    className={cn(
                      "mx-auto flex h-12 w-12 items-center justify-center rounded-md border transition-colors",
                      isCurrentSection &&
                        "border-white/30 bg-white text-primary-800 shadow-[0_10px_24px_rgba(2,8,23,0.22)]",
                      !isCurrentSection &&
                        "border-transparent text-sidebar-foreground hover:border-sky-100/15 hover:bg-sky-100/[0.08] hover:text-white",
                    )}
                    title={section.title}
                  >
                    <section.icon
                      className={cn(
                        "h-4 w-4",
                        isCurrentSection
                          ? "text-primary-800"
                          : "text-sidebar-foreground",
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
