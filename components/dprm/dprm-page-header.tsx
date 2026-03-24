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

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { createDprmLink } from "@/lib/dprm-utils";

interface DprmPageHeaderProps {
  title: string;
  backHref?: string;
  action?: ReactNode;
  token?: string;
}

export function DprmPageHeader({
  title,
  backHref,
  action,
  token,
}: DprmPageHeaderProps) {
  const searchParams = useSearchParams();

  const defaultBackHref = token
    ? createDprmLink(`/cms/principal/dprm/${token}`, searchParams)
    : undefined;

  const finalBackHref = backHref || defaultBackHref;

  return (
    <header className="sticky top-0 z-10 bg-white border-b">
      <div className="flex items-center justify-between gap-3 p-4 max-w-full">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {finalBackHref && (
            <Link href={finalBackHref}>
              <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <h1 className="text-xl font-semibold truncate">{title}</h1>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </header>
  );
}
