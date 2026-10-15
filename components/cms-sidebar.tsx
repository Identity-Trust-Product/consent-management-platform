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
import { logout } from "@/actions/auth";
import { Menu, X } from "lucide-react";
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
      title: "DATA ELEMENT REPOSITORY",
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
          title: "Audit Logs",
          href: "/cms/data-fiduciary/webhooks/logs",
        },
      ],
    },
  ];

  return sections;
};

interface SidebarProps {
  userName?: string | null;
  organizationName?: string;
}

export function Sidebar({ userName, organizationName }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const sidebarItems = React.useMemo(() => getDataFiduciaryItems(), []);
  const currentSection = sidebarItems.find((section) =>
    section.items.some((item) => pathname === item.href || pathname.startsWith(item.href + "/")),
  )?.title;
  const [openSections, setOpenSections] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (currentSection) {
      setOpenSections((sections) => Array.from(new Set([...sections, currentSection])));
    }
    setMobileOpen(false);
  }, [pathname, currentSection]);

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-50 grid size-10 place-items-center rounded-lg bg-sidebar text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        aria-controls="cms-navigation"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        id="cms-navigation"
        aria-label="Main navigation"
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-[19.5rem] max-w-[85vw] flex-col bg-sidebar text-sidebar-foreground transition-transform duration-200 motion-reduce:transition-none lg:translate-x-0",
          mobileOpen ? "visible translate-x-0" : "invisible -translate-x-full lg:visible",
        )}
        onKeyDown={(event) => { if (event.key === "Escape") setMobileOpen(false); }}
      >
        <Link href="/cms/data-fiduciary/dashboard" className="flex items-center gap-3 px-6 pb-8 pt-20 lg:pt-8">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-white">CM</span>
          <span className="text-lg font-bold leading-6 text-white">Consent Management<br />Platform</span>
        </Link>
        <nav className="min-h-0 flex-1 overflow-y-auto px-3 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Accordion
            type="multiple"
            value={openSections}
            onValueChange={setOpenSections}
            className="space-y-2"
          >
            {sidebarItems.map((section) => (
              <AccordionItem key={section.title} value={section.title} className="border-0">
                <AccordionTrigger className="gap-2 rounded-xl px-3 py-4 text-sidebar-foreground hover:bg-white/5 hover:text-white hover:no-underline [&>svg]:text-sidebar-foreground">
                  <span className="flex min-w-0 items-center gap-3">
                    <section.icon className="size-5 shrink-0" />
                    <span className="text-left text-sm font-semibold">{section.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-1">
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const active = pathname === item.href || pathname.startsWith(item.href + "/");
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex min-h-12 items-center rounded-xl py-3 pl-11 pr-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                            active ? "bg-primary text-white" : "text-sidebar-foreground hover:bg-white/5 hover:text-white",
                          )}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
        <div className="mx-4 border-t border-sidebar-border py-5 text-sm leading-6">
          {userName && <p className="font-semibold text-white">{userName}</p>}
          {organizationName && <p className="break-words">{organizationName}</p>}
          <p>Data Fiduciary</p>
          <form action={logout} className="mt-3">
            <button type="submit" className="h-10 w-full rounded-xl border border-white/15 font-semibold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Sign out</button>
          </form>
        </div>
      </aside>
    </>
  );
}
