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

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserAttributeWithProcessingPurposes } from "@/lib/services/consents-service";
import { HelpCircle, ArrowRight } from "lucide-react";

interface ConsentsOverviewProps {
  consents: UserAttributeWithProcessingPurposes[];
}

function ConsentsOverviewComponent({ consents }: ConsentsOverviewProps) {
  if (consents.length === 0) {
    return (
      <div className="text-center py-8 text-neutral-400">
        No active consents found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {consents.map(userAttribute => (
        <div
          key={userAttribute.userAttributeName}
          className="border border-neutral-50 rounded-lg p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-neutral-900">
              {userAttribute.userAttributeName}
            </h3>
            <Button
              variant="link"
              size="sm"
              className="text-blue-600 hover:text-blue-800 p-0 h-auto"
            >
              View more
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
          <div className="text-sm text-neutral-600">
            <span className="text-neutral-500">Used for </span>
            {userAttribute.processingPurposes.map((purpose, purposeIndex) => (
              <React.Fragment key={purpose.id}>
                <span className="inline-flex items-center gap-1">
                  {purpose.name}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3 w-3 text-blue-500 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-black border border-neutral-50 [&_.bg-primary]:bg-white [&_.fill-primary]:fill-white max-w-36 w-fit px-3 py-2 rounded-md">
                      <p className="text-xs leading-tight">
                        {purpose.description || "No description available"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </span>
                {purposeIndex < userAttribute.processingPurposes.length - 1 && (
                  <span className="text-neutral-400 mx-1">and</span>
                )}
              </React.Fragment>
            ))}
            {userAttribute.totalCount > 2 && (
              <span className="text-neutral-500">
                {" "}
                and {userAttribute.totalCount - 2} more purposes
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export const ConsentsOverview = React.memo(ConsentsOverviewComponent);
