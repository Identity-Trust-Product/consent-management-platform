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
  assignRole,
  createUser,
  removeRole,
  updateUser,
} from "@/actions/admin";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { AlertTriangle, Loader2, Pencil, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Role {
  id: string;
  name: string;
  description?: string | null;
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

interface UserFormSheetProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "create" | "edit";
  user: User | null;
  roles: Role[];
  onSuccess: () => void;
  formatRoleName: (name: string) => string;
}

export function UserFormSheet({
  isOpen,
  onClose,
  mode,
  user,
  roles,
  onSuccess,
  formatRoleName,
}: UserFormSheetProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showRoleWarning, setShowRoleWarning] = useState(false);
  const [rolesChanged, setRolesChanged] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    selectedRoles: [] as string[],
  });

  // Update form data when mode or user changes
  useEffect(() => {
    if (mode === "edit" && user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        password: "",
        selectedRoles: user.userRoles.map((ur) => ur.role.name),
      });
      setRolesChanged(false);
    } else if (mode === "create") {
      setFormData({
        name: "",
        email: "",
        password: "",
        selectedRoles: [],
      });
      setRolesChanged(false);
    }
  }, [mode, user]);

  // Check if roles have changed
  useEffect(() => {
    if (mode === "edit" && user) {
      const currentRoleNames = user.userRoles.map((ur) => ur.role.name).sort();
      const newRoleNames = [...formData.selectedRoles].sort();
      const changed = JSON.stringify(currentRoleNames) !== JSON.stringify(newRoleNames);
      setRolesChanged(changed);
    }
  }, [formData.selectedRoles, user, mode]);

  const handleSubmit = async () => {
    if (!formData.email) {
      toast.error("Email is required");
      return;
    }

    if (mode === "create" && !formData.password) {
      toast.error("Password is required");
      return;
    }

    // Show warning dialog if roles changed in edit mode
    if (mode === "edit" && rolesChanged) {
      setShowRoleWarning(true);
      return;
    }

    await performSave();
  };

  const performSave = async () => {
    setIsLoading(true);
    setShowRoleWarning(false);

    try {
      if (mode === "create") {
        const result = await createUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        if (result.success && result.data) {
          if (formData.selectedRoles.length > 0) {
            for (const roleName of formData.selectedRoles) {
              await assignRole({ userId: result.data.id, roleName });
            }
          }
          toast.success("User created successfully");
          onSuccess();
          onClose();
        } else {
          toast.error(result.error || "Failed to create user");
        }
      } else if (mode === "edit" && user) {
        const result = await updateUser({
          userId: user.id,
          name: formData.name,
          email: formData.email,
        });

        if (result.success) {
          const currentRoleNames = user.userRoles.map((ur) => ur.role.name);
          const newRoleNames = formData.selectedRoles;

          for (const roleName of currentRoleNames) {
            if (!newRoleNames.includes(roleName)) {
              await removeRole({ userId: user.id, roleName });
            }
          }

          for (const roleName of newRoleNames) {
            if (!currentRoleNames.includes(roleName)) {
              await assignRole({ userId: user.id, roleName });
            }
          }

          toast.success("User updated successfully");
          onSuccess();
          onClose();
        } else {
          toast.error(result.error || "Failed to update user");
        }
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-[600px] w-full overflow-y-auto">
        <SheetHeader className="space-y-3 pb-6 border-b">
          <SheetTitle className="text-2xl">
            {mode === "create" ? "Add New User" : "Edit User"}
          </SheetTitle>
          <SheetDescription className="text-base">
            {mode === "create"
              ? "Create a new user account and assign roles."
              : "Update user information and role assignments."}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 space-y-8 pb-6 px-3">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                name="fullname"
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                autoComplete="off"
                data-1p-ignore
                data-lpignore="true"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="user-email"
                type="email"
                placeholder="user@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                autoComplete="off"
                data-1p-ignore
                data-lpignore="true"
              />
            </div>

            {mode === "create" && (
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="password"
                  name="user-new-password"
                  type="password"
                  placeholder="Minimum 8 characters"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  autoComplete="new-password"
                  data-1p-ignore
                  data-lpignore="true"
                />
              </div>
            )}

            <div className="space-y-3">
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Shield className="h-4 w-4" />
                  Assign Roles
                </Label>
                {mode === "edit" && rolesChanged && (
                  <div className="flex items-start gap-2 p-3 rounded-md bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900">
                    <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-amber-700 dark:text-amber-400">
                      A change in the permission will affect all the ongoing services
                    </p>
                  </div>
                )}
              </div>
              <div className="border rounded-lg p-4 space-y-4 max-h-[300px] overflow-y-auto bg-muted/20">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/50 transition-colors"
                  >
                    <Checkbox
                      id={`role-${role.id}`}
                      checked={formData.selectedRoles.includes(role.name)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({
                            ...formData,
                            selectedRoles: [
                              ...formData.selectedRoles,
                              role.name,
                            ],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            selectedRoles: formData.selectedRoles.filter(
                              (r) => r !== role.name
                            ),
                          });
                        }
                      }}
                    />
                    <div className="flex-1 space-y-1">
                      <Label
                        htmlFor={`role-${role.id}`}
                        className="text-sm font-medium cursor-pointer"
                      >
                        {formatRoleName(role.name)}
                      </Label>
                      {role.description && (
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {role.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {formData.selectedRoles.length === 0 && (
                <p className="text-xs text-muted-foreground mt-2">
                  No roles selected. User will have limited access.
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-6 border-t">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {mode === "create" ? "Creating..." : "Updating..."}
                </>
              ) : (
                <>
                  {mode === "create" ? (
                    "Create User"
                  ) : (
                    <>
                      <Pencil className="mr-2 h-4 w-4" />
                      Update User
                    </>
                  )}
                </>
              )}
            </Button>
          </div>
        </div>
      </SheetContent>

      {/* Role Change Warning Dialog */}
      <Dialog open={showRoleWarning} onOpenChange={setShowRoleWarning}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Confirm Role Changes
            </DialogTitle>
            <DialogDescription className="pt-2">
              You are about to change the user&apos;s roles. This will affect their permissions and access to all ongoing services.
              <br />
              <br />
              Are you sure you want to proceed?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowRoleWarning(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={performSave}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Confirm Changes"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sheet>
  );
}
