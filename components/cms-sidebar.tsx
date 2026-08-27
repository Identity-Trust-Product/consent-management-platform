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
import { Actions, Resources } from "@/lib/constants/rbac";
import { type UserRole, hasPermission } from "@/lib/rbac";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  ConsentCenterIcon,
  DPOCenterIcon,
  PolicyCenterIcon,
} from "./icons/sidebar-icons";

interface SidebarProps {
  userRoles: UserRole[];
}

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
const getDataFiduciaryItems = (userRoles: UserRole[]): SidebarSection[] => {
  // Only check permissions for pages that already had permission checks
  const canAccessGrievanceAdmin = hasPermission(
    userRoles,
    Resources.GRIEVANCE_ADMIN,
    Actions.READ,
  );
  const canAccessGrievance = hasPermission(
    userRoles,
    Resources.GRIEVANCE,
    Actions.READ,
  ); // Build DPO Center items conditionally
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
          title: "Departments",
          href: "/cms/data-fiduciary/business-units",
        },
        {
          title: "Process",
          href: "/cms/data-fiduciary/business-processes",
        },
        {
          title: "Purpose Master",
          href: "/cms/data-fiduciary/consent-purposes",
        },
        {
          title: "Purpose Sub Master",
          href: "/cms/data-fiduciary/purposes-of-processing",
        },
        // {
        //   title: "Processors",
        //   href: "/cms/data-fiduciary/data-processors",
        // },
        {
          title: "Purpose Attributes",
          href: "/cms/data-fiduciary/user-attributes",
        },
        // {
        //   title: "Data Retention Policy",
        //   href: "/cms/data-fiduciary/data-retention",
        // },
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
    // {
    //   title: "DEVELOPER CENTER",
    //   icon: Code,
    //   defaultOpen: false,
    //   items: [
    //     {
    //       title: "API Keys",
    //       href: "/cms/data-fiduciary/api-keys",
    //     },
    //     {
    //       title: "Webhooks",
    //       href: "/cms/data-fiduciary/webhooks",
    //     },
    //   ],
    // },
  ];

  return sections;
};

export function Sidebar({ userRoles }: SidebarProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [openSections, setOpenSections] = React.useState<string[]>([]);
  const pathname = usePathname();

  // Get sidebar items
  const sidebarItems = React.useMemo(() => {
    return getDataFiduciaryItems(userRoles);
  }, [userRoles]);

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
        "fixed left-0 top-0 z-40 h-full bg-sidebar border-r border-sidebar-border transition-all duration-200 ease-in-out",
        isExpanded ? "w-[18.5rem]" : "w-[5rem]",
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="h-[4rem] flex items-center justify-start pl-5 border-b border-sidebar-border">
        <div
          className="font-semibold text-xl text-white whitespace-nowrap"
          aria-label="Consent Management"
          title="Consent Management"
        >
          {isExpanded ? "Consent Management" : "CM"}
        </div>
      </div>

      {/* Content */}
      <div className="py-2 overflow-y-auto h-[calc(100vh-5rem)]">
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
                className="border-none"
              >
                <AccordionTrigger className="hover:no-underline py-3 px-5 rounded-none hover:bg-sidebar-accent text-sidebar-foreground data-[state=open]:bg-sidebar-primary data-[state=open]:text-sidebar-primary-foreground transition-colors">
                  <div className="flex items-center gap-3">
                    <section.icon className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium truncate">
                      {section.title}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-2 px-2 bg-sidebar-accent">
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href || "#"}
                        className={cn(
                          "py-1 flex items-center gap-3 h-9 px-3 pl-6 text-sm transition-colors rounded-md",
                          isActiveItem(item.href || "")
                            ? "bg-primary-700 text-sidebar-primary-foreground font-medium"
                            : "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent",
                        )}
                      >
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
          <div className="space-y-2 px-2">
            {(sidebarItems as SidebarSection[]).map((section) => {
              const currentSection = getCurrentSection();
              const isCurrentSection = currentSection === section.title;

              return (
                <div key={section.title} className="group">
                  <div
                    className={cn(
                      "flex items-center justify-center h-12 w-12 ml-2 rounded-lg transition-colors",
                      isCurrentSection &&
                      "bg-sidebar-accent border border-sidebar-border",
                    )}
                  >
                    <section.icon
                      className={cn(
                        "h-4 w-4",
                        isCurrentSection
                          ? "text-sidebar-primary-foreground"
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
