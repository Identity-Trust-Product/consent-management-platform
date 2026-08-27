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

import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  BreakingChange,
  groupBreakingChangesByType,
  getBreakingChangeTypeName
} from "@/lib/utils/business-process-breaking-changes";

interface BreakingChangeAlertProps {
  breakingChanges: BreakingChange[];
  currentVersion: number;
}

export function BreakingChangeAlert({ breakingChanges, currentVersion }: BreakingChangeAlertProps) {
  if (breakingChanges.length === 0) {
    return null;
  }

  const groupedChanges = groupBreakingChangesByType(breakingChanges);
  const newVersion = currentVersion + 1;

  return (
    <Alert variant="destructive" className="mb-6">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle className="font-semibold">Breaking Changes Detected</AlertTitle>
      <AlertDescription className="mt-2 space-y-3">
        <p className="text-sm">
          The following changes will create a <strong>new version (v{newVersion})</strong> of this process.
          The current version (v{currentVersion}) will remain unchanged for existing consents.
        </p>

        <div className="space-y-2">
          {Object.entries(groupedChanges).map(([type, changes]) => (
            <div key={type} className="bg-background/50 rounded-md p-3 border">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{getBreakingChangeTypeName(type)}</Badge>
                <span className="text-xs text-muted-foreground">
                  {changes.length} change{changes.length > 1 ? 's' : ''}
                </span>
              </div>
              <ul className="space-y-1 text-sm">
                {changes.map((change, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>{change.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-md p-3 border border-amber-200 dark:border-amber-800 mt-3">
          <p className="text-sm font-medium">What happens when you publish:</p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>A new version (v{newVersion}) will be created with your changes</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Version {currentVersion} remains unchanged for existing consents</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>New consents will use version {newVersion}</span>
            </li>
          </ul>
        </div>
      </AlertDescription>
    </Alert>
  );
}

interface NoBreakingChangesAlertProps {
  currentVersion: number;
}

export function NoBreakingChangesAlert({ currentVersion }: NoBreakingChangesAlertProps) {
  return (
    <Alert className="mb-6 border-green-200 dark:border-green-800">
      <AlertTriangle className="h-4 w-4 text-green-600" />
      <AlertTitle className="font-semibold text-green-600">No Breaking Changes</AlertTitle>
      <AlertDescription className="mt-2">
        <p className="text-sm text-muted-foreground">
          Your changes will update the current version (v{currentVersion}) in place.
          No new version will be created.
        </p>
      </AlertDescription>
    </Alert>
  );
}
