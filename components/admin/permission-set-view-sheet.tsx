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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Check, X } from "lucide-react";
import { useState } from "react";

interface Role {
  id: string;
  name: string;
  description?: string | null;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
}

interface User {
  id: string;
  name?: string | null;
  email: string | null;
  createdAt?: Date | string | null;
  userRoles: {
    role: {
      id: string;
      name: string;
    };
  }[];
}

interface PermissionSetViewSheetProps {
  isOpen: boolean;
  onClose: () => void;
  role: Role | null;
  users: User[];
  formatRoleName: (name: string) => string;
  getRolePermissions: (name: string) => readonly string[];
  getExpandedPermissions: (name: string) => string[];
  formatPermission: (permission: string) => {
    resource: string;
    action: string;
    isWildcard: boolean;
  };
  getUserInitials: (
    name: string | null | undefined,
    email: string | null,
  ) => string;
  getInitialsColor: (name: string | null | undefined) => string;
}

export function PermissionSetViewSheet({
  isOpen,
  onClose,
  role,
  users,
  formatRoleName,
  getExpandedPermissions,
  formatPermission,
  getUserInitials,
  getInitialsColor,
}: PermissionSetViewSheetProps) {
  const [activeTab, setActiveTab] = useState("cgp");

  if (!role) return null;

  const usersWithRole = users.filter((u) =>
    u.userRoles.some((ur) => ur.role.id === role.id),
  );

  // Categorize permissions
  const allPermissions = getExpandedPermissions(role.name);
  const dprmResources = ["GRIEVANCE", "GRIEVANCE_ADMIN"];

  const cgpPermissions = allPermissions.filter((permission) => {
    const { resource } = formatPermission(permission);
    return !dprmResources.includes(resource);
  });

  const dprmPermissions = allPermissions.filter((permission) => {
    const { resource } = formatPermission(permission);
    return dprmResources.includes(resource);
  });

  const renderPermissionsTable = (
    serviceCategory: "CGP" | "DPRM" | "COOKIES",
  ) => {
    // Get all possible resources from RBAC constants
    const allResources = [
      "USER",
      "USER_ROLE",
      "ROLE",
      "ADMIN",
      "API_KEY",
      "WEBHOOK",
      "GRIEVANCE",
      "GRIEVANCE_ADMIN",
      "AUDIT_LOG",
      "BUSINESS_UNIT",
      "BUSINESS_PROCESS",
      "CONSENT_PURPOSE",
      "PROCESSING_PURPOSE",
      "PURPOSE_OF_PROCESSING",
      "DATA_PROCESSOR",
      "USER_ATTRIBUTE",
      "NOTICE",
      "CONSENT_RECORD",
      "SLA",
    ];

    // All possible CRUD actions
    const allActions = ["CREATE", "READ", "UPDATE", "DELETE"];

    // Filter resources by service category
    const dprmResources = ["GRIEVANCE", "GRIEVANCE_ADMIN"];
    const filteredResources =
      serviceCategory === "DPRM"
        ? allResources.filter((r) => dprmResources.includes(r))
        : serviceCategory === "CGP"
          ? allResources.filter((r) => !dprmResources.includes(r))
          : []; // COOKIES has no resources yet

    if (filteredResources.length === 0) {
      return (
        <div className="p-8 text-center text-sm text-muted-foreground">
          No permissions available
        </div>
      );
    }

    // Get permissions that this role actually has
    const rolePermissions = getExpandedPermissions(role.name);
    const rolePermissionSet = new Set(rolePermissions);

    const sortedResources = filteredResources.sort();

    // Column labels
    const actionLabels: Record<string, string> = {
      CREATE: "Create",
      READ: "View",
      UPDATE: "Edit",
      DELETE: "Delete",
    };

    return (
      <div className="border rounded-lg overflow-hidden overflow-x-auto">
        <div className="min-w-max">
          <div
            className={`bg-muted/50 px-4 py-3 grid gap-4 text-xs font-medium text-muted-foreground border-b`}
            style={{
              gridTemplateColumns: `minmax(150px, 1fr) repeat(${allActions.length}, 100px)`,
            }}
          >
            <div></div>
            {allActions.map((action) => (
              <div key={action} className="text-center">
                {actionLabels[action] ||
                  action.charAt(0) + action.slice(1).toLowerCase()}
              </div>
            ))}
          </div>
          <div className="divide-y">
            {sortedResources.map((resource, idx) => {
              return (
                <div
                  key={idx}
                  className={`px-4 py-3 grid gap-4 text-sm hover:bg-muted/30 transition-colors`}
                  style={{
                    gridTemplateColumns: `minmax(150px, 1fr) repeat(${allActions.length}, 100px)`,
                  }}
                >
                  <div className="font-medium">{resource}</div>
                  {allActions.map((action) => {
                    // Check if this specific permission exists for the role
                    const permissionString = `${resource}:${action}`;
                    const hasPermission =
                      rolePermissionSet.has(permissionString);

                    return (
                      <div key={action} className="flex justify-center">
                        {hasPermission ? (
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/20">
                            <X className="h-4 w-4 text-red-600 dark:text-red-400" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-[600px] w-full overflow-y-auto">
        <SheetHeader className="space-y-3 pb-6 border-b">
          <SheetTitle className="text-2xl">Permission Set Details</SheetTitle>
          <SheetDescription className="text-base">
            View permission set details and assigned users.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 space-y-8 pb-6 px-3">
          <div className="space-y-6">
            <div className="p-6 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">
                  {formatRoleName(role.name)}
                </h3>
              </div>
              {role.description && (
                <p className="text-sm text-muted-foreground mt-2">
                  {role.description}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Active Users</h4>
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted/50 px-4 py-3 grid grid-cols-3 gap-4 text-xs font-medium text-muted-foreground border-b">
                  <div>User Name</div>
                  <div>Email</div>
                  <div>Last Activity</div>
                </div>
                <div className="divide-y max-h-[300px] overflow-y-auto">
                  {usersWithRole.map((user) => (
                    <div
                      key={user.id}
                      className="px-4 py-3 grid grid-cols-3 gap-4 text-sm hover:bg-muted/50"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold ${getInitialsColor(
                            user.name,
                          )}`}
                        >
                          {getUserInitials(user.name, user.email)}
                        </div>
                        <span className="font-medium truncate">
                          {user.name || "N/A"}
                        </span>
                      </div>
                      <div className="text-muted-foreground truncate">
                        {user.email}
                      </div>
                      <div className="text-muted-foreground">-</div>
                    </div>
                  ))}
                  {usersWithRole.length === 0 && (
                    <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                      No users assigned to this permission set
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <Shield className="h-4 w-4" /> Permissions
              </h4>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="cgp" className="relative">
                    CGP
                    <Badge
                      variant="secondary"
                      className="ml-2 h-5 px-1.5 text-xs"
                    >
                      {cgpPermissions.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="dprm" className="relative">
                    DPRM
                    <Badge
                      variant="secondary"
                      className="ml-2 h-5 px-1.5 text-xs"
                    >
                      {dprmPermissions.length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="cookies" className="relative">
                    Cookies Manager
                    <Badge
                      variant="secondary"
                      className="ml-2 h-5 px-1.5 text-xs"
                    >
                      0
                    </Badge>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="cgp" className="mt-4">
                  {renderPermissionsTable("CGP")}
                </TabsContent>

                <TabsContent value="dprm" className="mt-4">
                  {renderPermissionsTable("DPRM")}
                </TabsContent>

                <TabsContent value="cookies" className="mt-4">
                  {renderPermissionsTable("COOKIES")}
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="flex gap-3 pt-6 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
