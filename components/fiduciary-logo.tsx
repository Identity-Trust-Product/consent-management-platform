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

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getFiduciaryConfig } from "@/actions/fiduciary-config";

interface FiduciaryConfig {
  logoUrl: string | null;
  fiduciaryName: string | null;
}

function FiduciaryName({ name }: { name?: string | null }) {
  if (!name) {
    return (
      <>
        <span className="font-bold text-xl">Penguin </span>
        <span className="font-bold text-xl bg-blue-700 text-white p-1 ml-px leading-5">Bank.</span>
      </>
    );
  }
  return <>{name}</>;
}

/**
 * Hook to fetch fiduciary config from server action.
 * This ensures runtime env vars work in production.
 */
function useFiduciaryConfig() {
  const [config, setConfig] = useState<FiduciaryConfig>({
    logoUrl: null,
    fiduciaryName: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFiduciaryConfig().then((data) => {
      setConfig(data);
      setIsLoading(false);
    });
  }, []);

  return { ...config, isLoading };
}

// Fiduciary Logo Component - Desktop version
export function FiduciaryLogo({
  className,
  isHighContrast = false,
}: {
  className?: string;
  isHighContrast?: boolean;
}) {
  const { logoUrl, fiduciaryName, isLoading } = useFiduciaryConfig();

  // Show placeholder while loading to prevent layout shift
  if (isLoading) {
    return (
      <div
        className={cn("flex items-center", className)}
        style={{ width: 150, height: 40 }}
      />
    );
  }

  if (!logoUrl) {
    return (
      <div
        className={cn(
          "flex text-blue-800 items-center font-bold text-xl",
          isHighContrast && "text-white!",
          className
        )}
        style={{ width: 150, height: 40 }}
      >
        <FiduciaryName name={fiduciaryName} />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={logoUrl}
        alt={fiduciaryName || "Logo"}
        width={150}
        height={40}
        className={cn("object-contain", isHighContrast && "hc-filter-invert")}
        priority
        unoptimized
      />
    </div>
  );
}

// Fiduciary Logo Component - Mobile version
export function FiduciaryLogoMobile({
  className,
  isHighContrast = false,
}: {
  className?: string;
  isHighContrast?: boolean;
}) {
  const { logoUrl, fiduciaryName, isLoading } = useFiduciaryConfig();

  // Show placeholder while loading to prevent layout shift
  if (isLoading) {
    return (
      <div
        className={cn("flex items-center", className)}
        style={{ width: 120, height: 32 }}
      />
    );
  }

  if (!logoUrl) {
    return (
      <div
        className={cn("flex items-center font-bold text-lg", className)}
        style={{ width: 120, height: 32 }}
      >
        <FiduciaryName name={fiduciaryName} />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={logoUrl}
        alt={fiduciaryName || "Logo"}
        width={120}
        height={32}
        className={cn("object-contain", isHighContrast && "hc-filter-invert")}
        priority
        unoptimized
      />
    </div>
  );
}
