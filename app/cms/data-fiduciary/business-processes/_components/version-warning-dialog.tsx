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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { BreakingChange } from "@/lib/utils/business-process-breaking-changes";
import { AlertTriangle, Info } from "lucide-react";

interface VersionWarningDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  currentVersion: number;
  newVersion: number;
  breakingChanges: BreakingChange[];
}

export function VersionWarningDialog({
  open,
  onOpenChange,
  onConfirm,
  currentVersion,
  newVersion,
  breakingChanges,
}: VersionWarningDialogProps) {
  const changeCount = breakingChanges.length;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-2xl max-h-[85vh]">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div className="flex-1">
              <AlertDialogTitle className="text-lg">
                New Version Will Be Created
              </AlertDialogTitle>
              <p className="text-sm text-muted-foreground">
                Version {currentVersion} → Version {newVersion}
              </p>
            </div>
          </div>
        </AlertDialogHeader>

        <div className="max-h-[50vh] overflow-y-auto pr-4">
          <AlertDialogDescription className="text-base space-y-4">
            <p className="text-foreground">
              You&apos;ve made{" "}
              <strong className="text-amber-700">
                {changeCount} breaking{" "}
                {changeCount === 1 ? "change" : "changes"}
              </strong>{" "}
              to this published business process:
            </p>

            {/* Breaking Changes List */}
            <div className="space-y-2">
              {breakingChanges.map((change, index) => (
                <div
                  key={index}
                  className="bg-amber-50 border border-amber-200 rounded-md p-3"
                >
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="font-medium text-amber-900">
                        {change.description}
                      </p>
                      {change.oldValue !== null && change.newValue !== null && (
                        <div className="mt-1.5 text-xs space-y-0.5">
                          <p className="text-amber-700">
                            <span className="font-medium">Previous:</span>{" "}
                            {typeof change.oldValue === "boolean"
                              ? change.oldValue
                                ? "Yes"
                                : "No"
                              : Array.isArray(change.oldValue)
                                ? change.oldValue.length > 0
                                  ? change.oldValue.join(", ")
                                  : "None"
                                : change.oldValue}
                          </p>
                          <p className="text-amber-700">
                            <span className="font-medium">New:</span>{" "}
                            {typeof change.newValue === "boolean"
                              ? change.newValue
                                ? "Yes"
                                : "No"
                              : Array.isArray(change.newValue)
                                ? change.newValue.length > 0
                                  ? change.newValue.join(", ")
                                  : "None"
                                : change.newValue}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
              <div className="flex gap-2">
                <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm space-y-1.5">
                  <p className="font-medium text-blue-900">
                    What happens next:
                  </p>
                  <ul className="space-y-1 text-blue-800 text-xs ml-4 list-disc">
                    <li>
                      Version {newVersion} will be created with your changes
                    </li>
                    <li>
                      Version {currentVersion} remains active for existing
                      consents
                    </li>
                    <li>New consents will use version {newVersion}</li>
                  </ul>
                </div>
              </div>
            </div>
          </AlertDialogDescription>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            Create Version {newVersion}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
