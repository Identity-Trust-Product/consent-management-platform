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

import { ShieldAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ForbiddenProps {
  requiredRole?: string;
}

export function Forbidden({ requiredRole }: ForbiddenProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="rounded-full bg-destructive/10 p-4">
              <ShieldAlert className="h-16 w-16 text-destructive" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Access Denied</h1>
          <p className="text-muted-foreground">
            You don&apos;t have permission to access this resource
          </p>
        </div>

        {/* Alert */}
        <Alert variant="destructive">
          <AlertTitle>Insufficient Permissions</AlertTitle>
          <AlertDescription>
            {requiredRole ? (
              <>
                This resource requires the{" "}
                <code className="px-2 py-0.5 bg-destructive/20 rounded text-xs font-mono">
                  {requiredRole}
                </code>{" "}
                role. Please contact your administrator to request access.
              </>
            ) : (
              <>
                Please contact your administrator to request the necessary
                permissions.
              </>
            )}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
