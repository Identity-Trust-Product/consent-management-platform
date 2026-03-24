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

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Check, ChevronsUpDown } from "lucide-react";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  dataProcessorSchema,
  generateRandomOuId,
  industryOptions,
  DataProcessorFormSchema,
} from "@/lib/schemas/data-processor-schemas";
import {
  createDataProcessor,
  updateDataProcessor,
} from "@/actions/data-processors";
import { toast } from "sonner";

interface DataProcessorFormProps {
  mode: "new" | "edit";
  dataProcessor?: {
    ouId: string;
    legalName: string;
    brandName: string;
    cin: string | null;
    industry: string | null;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  dataProcessorId?: string;
}

export function DataProcessorForm({
  mode,
  dataProcessor,
  dataProcessorId,
}: DataProcessorFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [industryComboboxOpen, setIndustryComboboxOpen] = useState(false);

  const form = useForm<DataProcessorFormSchema>({
    resolver: zodResolver(dataProcessorSchema),
    mode: "onChange",
    defaultValues: {
      ouId: dataProcessor?.ouId || generateRandomOuId(),
      legalName: dataProcessor?.legalName || "",
      brandName: dataProcessor?.brandName || "",
      cin: dataProcessor?.cin || "",
      industry: dataProcessor?.industry || "",
      active: dataProcessor?.active ?? true,
    },
  });

  const { isValid } = form.formState;

  const onSubmit = async (formData: DataProcessorFormSchema) => {
    setIsLoading(true);
    try {
      let result;

      if (mode === "new") {
        result = await createDataProcessor({
          ouId: formData.ouId,
          legalName: formData.legalName,
          brandName: formData.brandName,
          cin: formData.cin,
          industry: formData.industry,
          active: formData.active,
        });
      } else {
        result = await updateDataProcessor({
          ouId: dataProcessorId!,
          data: {
            brandName: formData.brandName,
            industry: formData.industry,
            active: formData.active,
          },
        });
      }

      if (result.success) {
        toast.success(
          mode === "new"
            ? "Data processor created successfully"
            : "Data processor updated successfully"
        );
        router.push("/cms/data-fiduciary/data-processors");
      } else {
        toast.error(result.error || "An error occurred");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.push("/cms/data-fiduciary/data-processors");
  };

  return (
    <div className="h-full flex flex-col border rounded-t-lg">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              {mode === "new" ? "New Data Processor" : "Edit Data Processor"}
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground">
          {mode === "new"
            ? "Create a new data processor"
            : "Update data processor details"}
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* General Information */}
            <div className="space-y-4">
              <div className="rounded-lg border p-4 pb-6">
                <h3 className="font-semibold mb-3">General Information</h3>
                <div className="grid grid-cols-1 gap-6">
                  {/* OU ID */}
                  <FormField
                    control={form.control}
                    name="ouId"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          OU ID <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Auto-generated OU ID"
                            {...field}
                            disabled={mode === "edit"}
                            className={mode === "edit" ? "bg-muted" : ""}
                          />
                        </FormControl>
                        <FormMessage />
                        {mode === "edit" && (
                          <p className="text-xs text-muted-foreground">
                            OU ID cannot be changed once set
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Legal Name */}
                  <FormField
                    control={form.control}
                    name="legalName"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          Legal Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter legal name"
                            {...field}
                            disabled={mode === "edit"}
                            className={mode === "edit" ? "bg-muted" : ""}
                          />
                        </FormControl>
                        <FormMessage />
                        {mode === "edit" && (
                          <p className="text-xs text-muted-foreground">
                            Legal name cannot be changed once set
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Brand Name */}
                  <FormField
                    control={form.control}
                    name="brandName"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          Brand Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter brand name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* CIN */}
                  <FormField
                    control={form.control}
                    name="cin"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          CIN (Company Identification Number){" "}
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter CIN"
                            {...field}
                            disabled={mode === "edit"}
                            className={mode === "edit" ? "bg-muted" : ""}
                          />
                        </FormControl>
                        <FormMessage />
                        {mode === "edit" && (
                          <p className="text-xs text-muted-foreground">
                            CIN cannot be changed once set
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Industry */}
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          Industry <span className="text-red-500">*</span>
                        </FormLabel>
                        <Popover
                          open={industryComboboxOpen}
                          onOpenChange={setIndustryComboboxOpen}
                        >
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  "w-full justify-between",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value
                                  ? industryOptions.find(
                                    (industry) =>
                                      industry.value === field.value
                                  )?.label
                                  : "Select industry"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Command>
                              <CommandInput placeholder="Search industry..." />
                              <CommandList>
                                <CommandEmpty>No industry found.</CommandEmpty>
                                <CommandGroup>
                                  {industryOptions.map((industry) => (
                                    <CommandItem
                                      value={industry.label}
                                      key={industry.value}
                                      onSelect={() => {
                                        form.setValue(
                                          "industry",
                                          industry.value
                                        );
                                        setIndustryComboboxOpen(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          industry.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {industry.label}
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

                  {/* Active Status */}
                  <FormField
                    control={form.control}
                    name="active"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <div className="flex items-center space-x-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            Active
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={!isValid || isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {mode === "new" ? "Save" : "Update"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
