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

import { Button } from "@/components/ui/button";
import { PencilLine, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  onClick: (e?: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
  variant?:
  | "default"
  | "ghost"
  | "destructive"
  | "outline"
  | "secondary"
  | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

interface EditButtonProps extends ActionButtonProps { }

interface DeleteButtonProps extends ActionButtonProps { }

export function EditButton({
  onClick,
  disabled = false,
  className,
  variant = "ghost",
  size = "sm",
  children,
  ...props
}: EditButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={cn("hover:bg-primary/10", className)}
      {...props}
    >
      <PencilLine className="h-4 w-4 text-primary" />
      {children && <span className="ml-2">{children}</span>}
    </Button>
  );
}

export function DeleteButton({
  onClick,
  disabled = false,
  className,
  variant = "ghost",
  size = "sm",
  children,
  ...props
}: DeleteButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "hover:bg-destructive/10",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      <Trash2 className="h-4 w-4 text-destructive" />
      {children && <span className="ml-2">{children}</span>}
    </Button>
  );
}

interface ActionButtonsGroupProps {
  onEdit: (e?: React.MouseEvent) => void;
  onDelete: (e?: React.MouseEvent) => void;
  editDisabled?: boolean;
  deleteDisabled?: boolean;
  className?: string;
}

export function ActionButtonsGroup({
  onEdit,
  onDelete,
  editDisabled = false,
  deleteDisabled = false,
  className,
}: ActionButtonsGroupProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <EditButton onClick={onEdit} disabled={editDisabled} />
      <DeleteButton onClick={onDelete} disabled={deleteDisabled} />
    </div>
  );
}
