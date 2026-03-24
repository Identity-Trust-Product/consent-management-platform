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

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface EulaData {
  title: string;
  link: string;
}

interface AddEulaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: EulaData) => void;
  editData?: EulaData | null;
  isEdit?: boolean;
}

export function AddEulaDialog({
  open,
  onOpenChange,
  onSave,
  editData,
  isEdit = false,
}: AddEulaDialogProps) {
  const [formData, setFormData] = useState<EulaData>({
    title: "",
    link: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValidating, setIsValidating] = useState(false);

  // Initialize form data when editing
  useEffect(() => {
    if (isEdit && editData) {
      setFormData({
        title: editData.title,
        link: editData.link,
      });
    } else {
      setFormData({
        title: "",
        link: "",
      });
    }
    setErrors({});
  }, [isEdit, editData, open]);

  const handleInputChange = (field: keyof EulaData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = async (): Promise<boolean> => {
    const newErrors: Record<string, string> = {};
    const linkValue = formData.link.trim();

    // Validate title
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    // Validate link
    if (!linkValue) {
      newErrors.link = "Link is required";
    } else {
      // 1. HTTP/HTTPS URL Pattern
      const urlPattern = /^https?:\/\/.+\..+/;

      // 2. Email Pattern (simple validation)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // 3. Mailto Pattern (e.g., mailto:user@example.com)
      const mailtoPattern = /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const isValidUrl = urlPattern.test(linkValue);
      const isValidEmail = emailPattern.test(linkValue);
      const isValidMailto = mailtoPattern.test(linkValue);

      if (!isValidUrl && !isValidEmail && !isValidMailto) {
        newErrors.link =
          "Please enter a valid URL (http/https) or email address";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsValidating(true);
    const isValid = await validateForm();
    setIsValidating(false);

    if (isValid) {
      let finalLink = formData.link.trim();

      // Helper: Check if it looks like a raw email (no protocol)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // If it's a raw email, prepend 'mailto:' so the link actually works
      if (emailPattern.test(finalLink)) {
        finalLink = `mailto:${finalLink}`;
      }

      onSave({
        ...formData,
        link: finalLink,
      });

      handleClose();
    }
  };

  const handleClose = () => {
    setFormData({
      title: "",
      link: "",
    });
    setErrors({});
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit EULA" : "Add EULA"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div className="space-y-2">
            <Label htmlFor="title">
              Add a Title for the EULA <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              placeholder="e.g. Terms and Conditions"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          {/* Link Field */}
          <div className="space-y-2">
            <Label htmlFor="link">
              Enter the EULA link or email{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="link"
              placeholder="e.g. https://example.com or support@example.com"
              value={formData.link}
              onChange={(e) => handleInputChange("link", e.target.value)}
              className={errors.link ? "border-red-500" : ""}
            />
            {errors.link && (
              <p className="text-sm text-red-500">{errors.link}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end pt-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isValidating}
              className="min-w-[100px]"
            >
              {isValidating ? "Validating..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
