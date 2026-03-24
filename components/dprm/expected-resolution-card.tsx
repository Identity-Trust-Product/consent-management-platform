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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { format } from "date-fns";

interface ExpectedResolutionCardProps {
  expectedResolutionAt: Date | null;
}

export function ExpectedResolutionCard({ expectedResolutionAt }: ExpectedResolutionCardProps) {
  if (!expectedResolutionAt) {
    return null;
  }

  return (
    <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">
            Expected Resolution
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold text-blue-900 dark:text-blue-100">
          {format(new Date(expectedResolutionAt), "PPP")}
        </p>
        <CardDescription className="mt-1 text-blue-700 dark:text-blue-300">
          at {format(new Date(expectedResolutionAt), "p")}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
