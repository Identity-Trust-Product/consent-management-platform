"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const flowSteps = [
  {
    number: 1,
    title: "Organization",
    href: "/cms/data-fiduciary/business-units",
  },
  {
    number: 2,
    title: "Data attributes",
    href: "/cms/data-fiduciary/user-attributes",
  },
  {
    number: 3,
    title: "Purpose Sub Master",
    href: "/cms/data-fiduciary/purposes-of-processing",
  },
  {
    number: 4,
    title: "Purpose Master",
    href: "/cms/data-fiduciary/consent-purposes",
  },
  {
    number: 5,
    title: "Create Notice Template",
    href: "/cms/data-fiduciary/business-processes",
  },
];

interface NoticeTemplateFlowProgressProps {
  currentStep: number;
}

export function NoticeTemplateFlowProgress({
  currentStep,
}: NoticeTemplateFlowProgressProps) {
  return (
    <div className="mb-5 rounded-lg border bg-white px-5 py-4 shadow-sm">
      <div className="flex items-start">
        {flowSteps.map((step, index) => {
          const isComplete = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div
              key={step.number}
              className={cn(
                "flex min-w-0 items-start",
                index < flowSteps.length - 1 ? "flex-1" : "shrink-0",
              )}
            >
              <Link
                href={step.href}
                className="group flex min-w-[92px] flex-col items-center gap-2 text-center"
              >
                <span
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full border text-sm font-semibold transition-colors",
                    isComplete &&
                      "border-primary-600 bg-primary-600 text-white",
                    isCurrent &&
                      "border-primary-700 bg-white text-primary-700 ring-4 ring-primary-50",
                    !isComplete &&
                      !isCurrent &&
                      "border-neutral-100 bg-neutral-10 text-neutral-200 group-hover:border-primary-200 group-hover:text-primary-600",
                  )}
                >
                  {isComplete ? <Check className="h-4 w-4" /> : step.number}
                </span>
                <span
                  className={cn(
                    "text-xs font-semibold leading-4",
                    isCurrent ? "text-primary-700" : "text-neutral-300",
                    isComplete && "text-neutral-500",
                  )}
                >
                  {step.title}
                </span>
              </Link>

              {index < flowSteps.length - 1 && (
                <div
                  className={cn(
                    "mt-4 h-px flex-1",
                    step.number < currentStep
                      ? "bg-primary-600"
                      : "bg-neutral-50",
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
