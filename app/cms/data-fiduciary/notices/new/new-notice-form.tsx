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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createNoticeSchema,
  type CreateNoticeData,
} from "@/lib/schemas/notice-schemas";
import { createNotice } from "@/actions/notices";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Plus, Delete } from "lucide-react";
import {
  NOTICE_METADATA_KEYS,
  RELATIONSHIP_OPTIONS,
} from "@/lib/constants/notice-metadata";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

type BusinessProcess = {
  id: number;
  name: string;
  code: string;
  version: number;
};

interface NewNoticeFormProps {
  businessProcesses: BusinessProcess[];
}

export function NewNoticeForm({ businessProcesses }: NewNoticeFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openCombobox, setOpenCombobox] = useState(false);
  const [metadataRows, setMetadataRows] = useState<
    Array<{
      id: string;
      key: string;
      value: string;
      isLocked?: boolean;
      isSelect?: boolean;
    }>
  >([]);

  // Find the latest business process (first one since they're ordered by updatedAt desc)
  const latestBusinessProcess =
    businessProcesses.length > 0 ? businessProcesses[0] : undefined;

  const form = useForm<CreateNoticeData>({
    resolver: zodResolver(createNoticeSchema) as any,
    defaultValues: {
      referenceId: "",
      dataPrincipalId: uuidv4(),
      businessProcessId: latestBusinessProcess?.id,
      noticeDuration: 1,
      noticeDurationType: "days",
      noticeViewMode: "purpose_of_processing",
      attributesDefaultSelection: "mandatory",
      redirectionEndpoint: "",
      consentDuration: undefined,
      consentDurationType: "days",
      forMinor: false,
      metadata: [],
    },
  });

  // Watch the forMinor field
  const forMinor = form.watch("forMinor");

  // Handle forMinor checkbox changes
  useEffect(() => {
    if (forMinor) {
      // Add major_data_principal_id and relationship_with_minor metadata if not already present
      const hasMajorMetadata = metadataRows.some(
        (row) => row.key === NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID
      );
      const hasRelationshipMetadata = metadataRows.some(
        (row) => row.key === NOTICE_METADATA_KEYS.RELATIONSHIP_WITH_MINOR
      );

      const newRows = [];

      if (!hasMajorMetadata) {
        newRows.push({
          id: uuidv4(),
          key: NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID,
          value: "",
          isLocked: true,
        });
      }

      if (!hasRelationshipMetadata) {
        newRows.push({
          id: uuidv4(),
          key: NOTICE_METADATA_KEYS.RELATIONSHIP_WITH_MINOR,
          value: "",
          isLocked: true,
          isSelect: true,
        });
      }

      if (newRows.length > 0) {
        setMetadataRows([...newRows, ...metadataRows]);
      }
    } else {
      // Remove major_data_principal_id and relationship_with_minor metadata
      setMetadataRows(
        metadataRows.filter(
          (row) =>
            row.key !== NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID &&
            row.key !== NOTICE_METADATA_KEYS.RELATIONSHIP_WITH_MINOR
        )
      );
    }
  }, [forMinor]);

  // Add metadata row
  const addMetadataRow = () => {
    if (metadataRows.length < 20) {
      setMetadataRows([...metadataRows, { id: uuidv4(), key: "", value: "" }]);
    } else {
      toast.error("Maximum 20 metadata entries allowed");
    }
  };

  // Remove metadata row
  const removeMetadataRow = (id: string) => {
    const rowToRemove = metadataRows.find((row) => row.id === id);
    // Don't allow removing locked rows
    if (rowToRemove?.isLocked) {
      return;
    }
    setMetadataRows(metadataRows.filter((row) => row.id !== id));
  };

  // Update metadata row
  const updateMetadataRow = (
    id: string,
    field: "key" | "value",
    value: string
  ) => {
    setMetadataRows(
      metadataRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  async function onSubmit(data: CreateNoticeData) {
    try {
      setIsSubmitting(true);

      // Validate major data principal ID and relationship if forMinor is checked
      if (data.forMinor) {
        const majorMetadata = metadataRows.find(
          (row) => row.key === NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID
        );
        const relationshipMetadata = metadataRows.find(
          (row) => row.key === NOTICE_METADATA_KEYS.RELATIONSHIP_WITH_MINOR
        );

        if (!majorMetadata || !majorMetadata.value.trim()) {
          toast.error(
            "Major Data Principal ID is required when creating a notice for a minor"
          );
          setIsSubmitting(false);
          return;
        }

        // Validate major data principal ID format (UUID with min 3 characters)
        const majorIdValue = majorMetadata.value.trim();
        if (majorIdValue.length < 3) {
          toast.error(
            "Major Data Principal ID must be at least 3 characters long"
          );
          setIsSubmitting(false);
          return;
        }

        const uuidRegex = /^[0-9a-z-]{3,}$/i;
        if (!uuidRegex.test(majorIdValue)) {
          toast.error(
            "Major Data Principal ID must be a valid UUID format (e.g., 123e4567-e89b-12d3-a456-426614174000)"
          );
          setIsSubmitting(false);
          return;
        }

        if (!relationshipMetadata || !relationshipMetadata.value.trim()) {
          toast.error(
            "Relationship with minor is required when creating a notice for a minor"
          );
          setIsSubmitting(false);
          return;
        }
      }

      // Filter out empty metadata rows and add to form data
      const validMetadata = metadataRows.filter(
        (row) => row.key.trim() !== "" && row.value.trim() !== ""
      );

      const submitData = {
        ...data,
        metadata: validMetadata.length > 0 ? validMetadata : undefined,
      };

      const result = await createNotice(submitData);

      if (result.success && result.data) {
        toast.success("Notice created successfully");
        // Redirect to the show notice page with the public ID and query param to show dialog
        router.push(
          `/cms/data-fiduciary/notices/${result.data.publicId}?copy_notice_link=true`
        );
      } else {
        toast.error(result.error || "Failed to create notice");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">New Notice</h2>
        <p className="text-sm text-muted-foreground">
          Use this form to manage notice records in your database.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Reference ID */}
          <FormField
            control={form.control}
            name="referenceId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Enter Reference ID<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., ref-123 (3-255 chars, alphanumeric + ( ) . _ - /)"
                    className="max-w-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Data Principal ID */}
          <FormField
            control={form.control}
            name="dataPrincipalId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Enter Data Principal ID
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., user-123 (3-255 chars, alphanumeric + ( ) . _ - /)"
                    className="max-w-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Business Process */}
          <FormField
            control={form.control}
            name="businessProcessId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choose Business Process</FormLabel>
                <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openCombobox}
                        className="max-w-xl justify-between"
                      >
                        {field.value
                          ? (() => {
                            const selectedProcess = businessProcesses.find(
                              (process) => process.id === field.value
                            );
                            return selectedProcess
                              ? `${selectedProcess.name} (${selectedProcess.code}) (v${selectedProcess.version})`
                              : "Select business process";
                          })()
                          : "Select business process"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="max-w-xl p-0">
                    <Command>
                      <CommandInput placeholder="Search business process..." />
                      <CommandList>
                        <CommandEmpty>No business process found.</CommandEmpty>
                        <CommandGroup>
                          {businessProcesses.map((process) => (
                            <CommandItem
                              key={process.id}
                              value={`${process.name} ${process.code} v${process.version}`}
                              onSelect={() => {
                                field.onChange(process.id);
                                setOpenCombobox(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  field.value === process.id
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              <div>
                                <div className="font-medium">
                                  {process.name} (v{process.version})
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {process.code}
                                </div>
                              </div>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Notice Duration and Type */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-fit">
            <FormField
              control={form.control}
              name="noticeDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Notice Duration<span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      placeholder="1"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value) || 1)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="noticeDurationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Duration Type<span className="text-destructive">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="min-w-30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="noticeViewMode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Notice View Mode<span className="text-destructive">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="purpose_of_processing">
                        Purpose of Processing
                      </SelectItem>
                      <SelectItem value="purpose_of_consent">
                        Purpose of Consent
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attributesDefaultSelection"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Attributes Default Selection
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="mandatory">Mandatory</SelectItem>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Redirection Endpoint */}
          <FormField
            control={form.control}
            name="redirectionEndpoint"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Redirection Endpoint</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/redirect"
                    className="max-w-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Consent Duration (Optional) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-fit">
            <FormField
              control={form.control}
              name="consentDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Consent Duration</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      placeholder="e.g., 30"
                      value={field.value || ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        const numValue = value ? parseInt(value) : undefined;
                        field.onChange(numValue);

                        // Clear duration type if consent duration is cleared
                        if (!numValue) {
                          form.setValue("consentDurationType", undefined);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consentDurationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <FormControl className="min-w-30">
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* For Minor Checkbox */}
          <FormField
            control={form.control}
            name="forMinor"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>For Minor</FormLabel>
                  <p className="text-sm text-muted-foreground">
                    Check this if the consent is for a minor (requires
                    major/guardian data principal ID)
                  </p>
                </div>
              </FormItem>
            )}
          />

          {/* Metadata Section */}
          <div className="space-y-4 max-w-4/5">
            <div className="flex items-center justify-start">
              <Button
                type="button"
                onClick={addMetadataRow}
                disabled={metadataRows.length >= 20}
                variant="outline"
                className="border-primary text-primary"
              >
                <Plus className="h-4 w-4" />
                Add Metadata
              </Button>
            </div>

            {metadataRows.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {metadataRows.map((row, index) => (
                  <div
                    key={row.id}
                    className="flex gap-2 border border-neutral-50 rounded-md p-2"
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeMetadataRow(row.id)}
                      disabled={row.isLocked}
                      className={cn(
                        "text-destructive hover:text-destructive hover:bg-transparent -scale-x-100 -mx-2 p-0 self-center",
                        row.isLocked && "opacity-0 cursor-not-allowed"
                      )}
                    >
                      <Delete className="h-5! w-5!" />
                    </Button>
                    <Input
                      placeholder={
                        row.isLocked &&
                          row.key === NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID
                          ? "Major Data Principal ID"
                          : row.isLocked &&
                            row.key ===
                            NOTICE_METADATA_KEYS.RELATIONSHIP_WITH_MINOR
                            ? "Relationship with Minor"
                            : "-- Enter Metadata Key --"
                      }
                      value={
                        row.isLocked &&
                          row.key === NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID
                          ? "Major Data Principal ID"
                          : row.isLocked &&
                            row.key ===
                            NOTICE_METADATA_KEYS.RELATIONSHIP_WITH_MINOR
                            ? "Relationship with Minor"
                            : row.key
                      }
                      onChange={(e) =>
                        !row.isLocked &&
                        updateMetadataRow(row.id, "key", e.target.value)
                      }
                      disabled={row.isLocked}
                      className={cn(
                        row.isLocked && "bg-muted cursor-not-allowed"
                      )}
                    />
                    {row.isSelect ? (
                      <Select
                        value={row.value}
                        onValueChange={(value) =>
                          updateMetadataRow(row.id, "value", value)
                        }
                      >
                        <SelectTrigger
                          className={cn(
                            "border-blue",
                            !row.value && "text-muted-foreground"
                          )}
                        >
                          <SelectValue placeholder="Select relationship *" />
                        </SelectTrigger>
                        <SelectContent>
                          {RELATIONSHIP_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        placeholder={
                          row.isLocked
                            ? "Enter major/guardian ID *"
                            : "-- Enter Metadata Value --"
                        }
                        value={row.value}
                        onChange={(e) =>
                          updateMetadataRow(row.id, "value", e.target.value)
                        }
                        required={row.isLocked}
                        className={cn(row.isLocked && "border-blue")}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-start gap-4 pb-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/cms/data-fiduciary/notices")}
              disabled={isSubmitting}
            >
              Back
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Generating..." : "Generate Notice"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
