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

import { deleteUser, getAllRoles } from "@/actions/admin";
import { DeleteUserDialog } from "@/components/admin/delete-user-dialog";
import { PermissionSetViewSheet } from "@/components/admin/permission-set-view-sheet";
import { PermissionSetsTable } from "@/components/admin/permission-sets-table";
import { UserFormSheet } from "@/components/admin/user-form-sheet";
import { UserViewSheet } from "@/components/admin/user-view-sheet";
import { UsersTable } from "@/components/admin/users-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Actions, Resources, ROLE_PERMISSIONS } from "@/lib/constants/rbac";
import { Plus, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
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

interface Role {
  id: string;
  name: string;
  description?: string | null;
}

interface AdminClientProps {
  initialUsers: User[];
  canCreate: boolean;
  canUpdate: boolean;
  canDelete: boolean;
}

type SheetMode = "create" | "edit" | "view-user" | "view-permission" | null;

export default function AdminClient({
  initialUsers,
  canCreate,
  canUpdate,
  canDelete,
}: AdminClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [users, setUsers] = useState<User[]>(initialUsers);
  const [roles, setRoles] = useState<Role[]>([]);
  const [sheetMode, setSheetMode] = useState<SheetMode>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [permissionSetFilter, setPermissionSetFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState("users");

  useEffect(() => {
    loadRoles();

    // Restore sheet state from URL
    const userId = searchParams.get("userId");
    const mode = searchParams.get("mode") as SheetMode;

    if (userId && mode === "view-user") {
      const user = users.find((u) => u.id === userId);
      if (user) {
        setSelectedUser(user);
        setSheetMode("view-user");
      }
    }
  }, []);

  const loadRoles = async () => {
    const result = await getAllRoles();
    if (result.success) {
      setRoles(result.data || []);
    } else {
      toast.error("Failed to load roles");
    }
  };

  const refreshUsers = () => {
    window.location.reload();
  };

  // Filter logic
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchQuery === "" ||
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPermissionSet =
      permissionSetFilter === "all" ||
      user.userRoles.some((ur) => ur.role.name === permissionSetFilter);

    return matchesSearch && matchesPermissionSet;
  });

  const filteredRoles = roles.filter((role) => {
    return (
      searchQuery === "" ||
      role.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Helper functions
  const formatRoleName = (roleName: string) => {
    return roleName
      .replace("privy_cgp_", "")
      .replace("privy_", "")
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getUserInitials = (
    name: string | null | undefined,
    email: string | null
  ) => {
    if (name) {
      const parts = name.split(" ");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    }
    return email?.substring(0, 2).toUpperCase() || "U";
  };

  const getInitialsColor = (name: string | null | undefined) => {
    const colors = [
      "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100",
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100",
      "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100",
      "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-100",
      "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-100",
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100",
    ];
    const index = (name?.length || 0) % colors.length;
    return colors[index];
  };

  const getRoleBadgeColor = (roleName: string) => {
    const lowerRole = roleName.toLowerCase();
    if (lowerRole.includes("admin")) {
      return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100";
    }
    if (lowerRole.includes("user")) {
      return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100";
    }
    if (lowerRole.includes("api") || lowerRole.includes("key")) {
      return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100";
    }
    if (lowerRole.includes("grievance")) {
      return "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-100";
    }
    if (lowerRole.includes("dpo") || lowerRole.includes("protection")) {
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100";
    }
    if (lowerRole.includes("auditor")) {
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-100";
    }
    return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100";
  };

  const getRolePermissions = (roleName: string): readonly string[] => {
    const roleKey = roleName as keyof typeof ROLE_PERMISSIONS;
    return ROLE_PERMISSIONS[roleKey] || [];
  };

  // Expand wildcard permissions to show all actual permissions
  const getExpandedPermissions = (roleName: string): string[] => {
    const permissions = getRolePermissions(roleName);
    const expanded: string[] = [];

    for (const permission of permissions) {
      const [resource, action] = permission.split(":");

      // If it's *:*, expand to all resources and all actions
      if (resource === "*" && action === "*") {
        const allResources = Object.values(Resources);
        const allActions = Object.values(Actions);
        for (const res of allResources) {
          for (const act of allActions) {
            expanded.push(`${res}:${act}`);
          }
        }
      }
      // If it's *:ACTION, expand to all resources with that action
      else if (resource === "*") {
        const allResources = Object.values(Resources);
        for (const res of allResources) {
          expanded.push(`${res}:${action}`);
        }
      }
      // If it's RESOURCE:*, expand to that resource with all actions
      else if (action === "*") {
        const allActions = Object.values(Actions);
        for (const act of allActions) {
          expanded.push(`${resource}:${act}`);
        }
      }
      // Otherwise, it's already specific
      else {
        expanded.push(permission);
      }
    }

    // Sort by resource then action for better display
    return expanded.sort((a, b) => {
      const [resA, actA] = a.split(":");
      const [resB, actB] = b.split(":");
      if (resA === resB) return actA.localeCompare(actB);
      return resA.localeCompare(resB);
    });
  };

  const formatPermission = (permission: string) => {
    const [resource, action] = permission.split(":");

    return {
      resource: resource.replace(/_/g, " "),
      action: action,
      isWildcard: false,
    };
  };

  // Sheet handlers
  const openCreateSheet = () => {
    setSelectedUser(null);
    setSelectedRole(null);
    setSheetMode("create");
  };

  const openEditSheet = (user: User) => {
    setSelectedUser(user);
    setSelectedRole(null);
    setSheetMode("edit");
  };

  const openViewUserSheet = (user: User) => {
    setSelectedUser(user);
    setSelectedRole(null);
    setSheetMode("view-user");

    // Add query params for persistence
    const params = new URLSearchParams(searchParams.toString());
    params.set("userId", user.id);
    params.set("mode", "view-user");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const openViewPermissionSheet = (role: Role) => {
    setSelectedUser(null);
    setSelectedRole(role);
    setSheetMode("view-permission");
  };

  const closeSheet = () => {
    setSheetMode(null);
    // Don't clear selected user/role immediately to avoid flashing
    setTimeout(() => {
      setSelectedUser(null);
      setSelectedRole(null);
    }, 300);

    // Remove query params
    const params = new URLSearchParams(searchParams.toString());
    params.delete("userId");
    params.delete("mode");
    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;
    router.push(newUrl, { scroll: false });
  };

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteUser = async () => {
    if (!userToDelete) return;

    setIsLoading(true);

    const result = await deleteUser({ userId: userToDelete.id });

    if (result.success) {
      toast.success("User deleted successfully");
      setDeleteDialogOpen(false);
      setUserToDelete(null);
      refreshUsers();
    } else {
      toast.error(result.error || "Failed to delete user");
    }

    setIsLoading(false);
  };

  // Handler to switch from view to edit
  const handleEditFromView = () => {
    if (selectedUser) {
      setSheetMode("edit");
    }
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value);
          setSearchQuery(""); // Clear search when switching tabs
          setPermissionSetFilter("all"); // Reset filter when switching tabs
        }}
        className="w-full"
      >
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="users" className="relative">
              Users
              <Badge
                variant="secondary"
                className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {users.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="permission-set" className="relative">
              Permission Set
              <Badge
                variant="secondary"
                className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {roles.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          {canCreate && activeTab === "users" && (
            <Button onClick={openCreateSheet}>
              <Plus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          )}
        </div>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-4 mt-0">
          {/* Search and Filter */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search a user"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                autoComplete="off"
                data-1p-ignore
                data-lpignore="true"
              />
            </div>
            <Select
              value={permissionSetFilter}
              onValueChange={setPermissionSetFilter}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Permission Sets</SelectItem>
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.name}>
                    {formatRoleName(role.name)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Users Table */}
          <UsersTable
            users={filteredUsers}
            canUpdate={canUpdate}
            canDelete={canDelete}
            onRowClick={openViewUserSheet}
            onEdit={openEditSheet}
            onDelete={handleDeleteUser}
            formatRoleName={formatRoleName}
            getRoleBadgeColor={getRoleBadgeColor}
            getUserInitials={getUserInitials}
            getInitialsColor={getInitialsColor}
          />
        </TabsContent>

        {/* Permission Set Tab */}
        <TabsContent value="permission-set" className="space-y-4 mt-0">
          {/* Search */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search a permission set"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                autoComplete="off"
                data-1p-ignore
                data-lpignore="true"
              />
            </div>
          </div>

          {/* Roles Table */}
          <PermissionSetsTable
            roles={filteredRoles}
            users={users}
            onRowClick={openViewPermissionSheet}
            formatRoleName={formatRoleName}
            getRolePermissions={getRolePermissions}
          />
        </TabsContent>
      </Tabs>

      {/* Delete User Dialog */}
      <DeleteUserDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setUserToDelete(null);
        }}
        onConfirm={confirmDeleteUser}
        userEmail={userToDelete?.email || ""}
        isLoading={isLoading}
      />

      {/* User Form Sheet (Create/Edit) */}
      {(sheetMode === "create" || sheetMode === "edit") && (
        <UserFormSheet
          isOpen={true}
          onClose={closeSheet}
          mode={sheetMode}
          user={selectedUser}
          roles={roles}
          onSuccess={refreshUsers}
          formatRoleName={formatRoleName}
        />
      )}

      {/* User View Sheet */}
      {sheetMode === "view-user" && selectedUser && (
        <UserViewSheet
          isOpen={true}
          onClose={closeSheet}
          user={selectedUser}
          canUpdate={canUpdate}
          onEdit={handleEditFromView}
          formatRoleName={formatRoleName}
          getRoleBadgeColor={getRoleBadgeColor}
          getUserInitials={getUserInitials}
          getInitialsColor={getInitialsColor}
        />
      )}

      {/* Permission Set View Sheet */}
      {sheetMode === "view-permission" && selectedRole && (
        <PermissionSetViewSheet
          isOpen={true}
          onClose={closeSheet}
          role={selectedRole}
          users={users}
          formatRoleName={formatRoleName}
          getRolePermissions={getRolePermissions}
          getExpandedPermissions={getExpandedPermissions}
          formatPermission={formatPermission}
          getUserInitials={getUserInitials}
          getInitialsColor={getInitialsColor}
        />
      )}
    </div>
  );
}
