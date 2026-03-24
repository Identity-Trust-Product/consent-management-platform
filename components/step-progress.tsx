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

import { cn } from "@/lib/utils";
import { ChevronRight, CirclePlus, CircleCheck } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  steps: { number: number; title: string; description?: string }[];
}

export function StepProgress({
  currentStep,
  totalSteps,
  steps,
}: StepProgressProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Build URL for step navigation
  const buildStepUrl = (stepNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("step", stepNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Check if a step should be clickable (only completed steps)
  const isStepClickable = (stepNumber: number) => {
    return stepNumber < currentStep;
  };

  return (
    <div className="w-full border-b pb-4 flex items-center justify-center">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step Title as Badge with Icon */}
            {isStepClickable(step.number) ? (
              <Link
                href={buildStepUrl(step.number)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium transition-colors hover:bg-green-100",
                  step.number < currentStep
                    ? "border-green-500 bg-green-50 text-green-700"
                    : step.number === currentStep
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-muted bg-muted/50 text-muted-foreground"
                )}
              >
                {/* Icon */}
                {step.number < currentStep ? (
                  <CircleCheck className="h-4 w-4 text-green-500" />
                ) : step.number === currentStep ? (
                  <CirclePlus className="h-4 w-4 text-primary" />
                ) : (
                  <CirclePlus className="h-4 w-4 text-muted-foreground" />
                )}

                {/* Title with step number */}
                <span>
                  {step.number}. {step.title}
                </span>
              </Link>
            ) : (
              <div
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium",
                  step.number < currentStep
                    ? "border-green-500 bg-green-50 text-green-700"
                    : step.number === currentStep
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-muted bg-muted/50 text-muted-foreground"
                )}
              >
                {/* Icon */}
                {step.number < currentStep ? (
                  <CircleCheck className="h-4 w-4 text-green-500" />
                ) : step.number === currentStep ? (
                  <CirclePlus className="h-4 w-4 text-primary" />
                ) : (
                  <CirclePlus className="h-4 w-4 text-muted-foreground" />
                )}

                {/* Title with step number */}
                <span>
                  {step.number}. {step.title}
                </span>
              </div>
            )}

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <ChevronRight className="mx-2 h-5 w-5 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
