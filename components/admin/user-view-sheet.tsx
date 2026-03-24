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

import { getUserAuditLogs } from "@/actions/admin";
import { UserActivityChart } from "@/components/admin/user-activity-chart";
import { UserAuditLogs } from "@/components/admin/user-audit-logs";
import { UserAuditLogsDialog } from "@/components/admin/user-audit-logs-dialog";
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
import { Activity, Maximize2, Minimize2, Pencil, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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

interface UserViewSheetProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  canUpdate: boolean;
  onEdit: () => void;
  formatRoleName: (name: string) => string;
  getRoleBadgeColor: (name: string) => string;
  getUserInitials: (
    name: string | null | undefined,
    email: string | null
  ) => string;
  getInitialsColor: (name: string | null | undefined) => string;
}

export function UserViewSheet({
  isOpen,
  onClose,
  user,
  canUpdate,
  onEdit,
  formatRoleName,
  getRoleBadgeColor,
  getUserInitials,
  getInitialsColor,
}: UserViewSheetProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [recentLogs, setRecentLogs] = useState<any[]>([]);
  const [isLoadingLogs, setIsLoadingLogs] = useState(false);

  useEffect(() => {
    if (isOpen && user) {
      fetchRecentLogs();
    }
  }, [isOpen, user]);

  const fetchRecentLogs = async () => {
    if (!user) return;

    setIsLoadingLogs(true);
    try {
      const result = await getUserAuditLogs(user.id, { limit: 10 });
      if (result.success && result.data) {
        setRecentLogs(result.data.logs);
      } else {
        toast.error(result.message || "Failed to fetch activity logs");
      }
    } catch (error) {
      console.error("Error fetching recent logs:", error);
    } finally {
      setIsLoadingLogs(false);
    }
  };

  if (!user) return null;

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          className={`${isFullScreen ? "sm:max-w-[95vw]" : "sm:max-w-[800px]"
            } w-full overflow-y-auto transition-all duration-300`}
        >
          <SheetHeader className="pb-4 border-b">
            <SheetTitle className="text-2xl">User Details</SheetTitle>
            <div className="flex items-center justify-between gap-4">
              <SheetDescription className="text-base">
                View user information and activity logs.
              </SheetDescription>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="gap-2 flex-shrink-0"
              >
                {isFullScreen ? (
                  <>
                    <Minimize2 className="h-3.5 w-3.5" />
                    Exit Full Screen
                  </>
                ) : (
                  <>
                    <Maximize2 className="h-3.5 w-3.5" />
                    Full Screen
                  </>
                )}
              </Button>
            </div>
          </SheetHeader>

          <div className="mt-4 space-y-8 pb-6 px-3">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-muted/50 rounded-lg">
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-full text-3xl font-semibold ${getInitialsColor(
                    user.name
                  )}`}
                >
                  {getUserInitials(user.name, user.email)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{user.name || "N/A"}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Assigned Roles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {user.userRoles.map((ur, index) => (
                    <Badge
                      key={index}
                      className={`text-sm py-1.5 px-3 ${getRoleBadgeColor(
                        ur.role.name
                      )}`}
                    >
                      <Shield className="mr-1.5 h-3.5 w-3.5" />
                      {formatRoleName(ur.role.name)}
                    </Badge>
                  ))}
                  {user.userRoles.length === 0 && (
                    <span className="text-sm text-muted-foreground">
                      No roles assigned
                    </span>
                  )}
                </div>
              </div>

              <Separator />

              {/* Side by side layout in fullscreen, stacked otherwise */}
              <div className={isFullScreen ? "grid grid-cols-2 gap-6" : "space-y-8"}>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">User Statistics</h4>
                  <UserActivityChart userId={user.id} />
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    Recent Activity
                  </h4>
                  <UserAuditLogs
                    userId={user.id}
                    logs={recentLogs}
                    isLoading={isLoadingLogs}
                    onViewAll={() => setIsDialogOpen(true)}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-6 border-t">
              <Button variant="outline" onClick={onClose} className="flex-1">
                Close
              </Button>
              {canUpdate && (
                <Button onClick={onEdit} className="flex-1">
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit User
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Full Audit Logs Dialog */}
      <UserAuditLogsDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        userId={user.id}
        userName={user.name}
      />
    </>
  );
}
