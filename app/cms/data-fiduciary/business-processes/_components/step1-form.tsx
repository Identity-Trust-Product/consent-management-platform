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

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  businessProcessSchema,
  generateRandomCode,
  BusinessProcessFormSchema,
} from "@/lib/schemas/business-process-schemas";
import { useBusinessProcessContext } from "@/contexts/business-process-context";

export interface StepData {
  businessProcess?: any;
  businessUnits?: any[];
  consentPurposes?: any[];
  dataProcessors?: any[];
  userAttributes?: any[];
}

interface Step1FormProps {
  data: StepData;
  isEdit: boolean;
  businessProcessId?: string;
}

export function Step1Form({ data, isEdit, businessProcessId }: Step1FormProps) {
  const router = useRouter();
  const { state, dispatch } = useBusinessProcessContext();
  const [isLoading, setIsLoading] = useState(false);
  const [businessUnitComboboxOpen, setBusinessUnitComboboxOpen] =
    useState(false);

  const form = useForm<BusinessProcessFormSchema>({
    resolver: zodResolver(businessProcessSchema),
    mode: "onChange", // Enable real-time validation
    defaultValues: {
      name: data.businessProcess?.name || state.step1Data?.name || "",
      code:
        data.businessProcess?.code ||
        state.step1Data?.code ||
        generateRandomCode(),
      businessUnitId:
        data.businessProcess?.businessUnitId ||
        state.step1Data?.businessUnitId ||
        undefined,
      grantDescription:
        data.businessProcess?.grantDescription ||
        state.step1Data?.grantDescription ||
        "",
      revokeDescription:
        data.businessProcess?.revokeDescription ||
        state.step1Data?.revokeDescription ||
        "",
      reconsentDescription:
        data.businessProcess?.reconsentDescription ||
        state.step1Data?.reconsentDescription ||
        "",
    },
  });

  const watchedCode = form.watch("code");
  const { isValid, errors } = form.formState;

  // Generate a new random code if the current code is empty
  useEffect(() => {
    if (!watchedCode) {
      form.setValue("code", generateRandomCode());
    }
  }, [watchedCode, form]);

  const onSubmit = async (formData: BusinessProcessFormSchema) => {
    setIsLoading(true);

    try {
      // Store form data in client state
      dispatch({
        type: "SET_STEP1_DATA",
        payload: formData,
      });

      // Navigate to step 2
      const params = new URLSearchParams();
      params.set("step", "2");
      if (businessProcessId) {
        params.set("id", businessProcessId);
      }

      const basePath =
        isEdit && businessProcessId
          ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit`
          : `/cms/data-fiduciary/business-processes/new`;

      router.push(`${basePath}?${params.toString()}`);
    } catch (error) {
      console.error("Error proceeding to step 2:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    dispatch({ type: "RESET" });
    router.push("/cms/data-fiduciary/business-processes");
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <h2 className="text-2xl font-bold tracking-tight border-b px-6 py-5 flex-shrink-0">
        Step 1. General Settings
      </h2>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
            <div className="space-y-6 px-6 py-6">
              {/* Version Info */}
              {isEdit && data.businessProcess?.version && (
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <p className="text-sm font-medium text-blue-800">
                        Version {data.businessProcess.version}
                      </p>
                    </div>
                    {data.businessProcess.updatedAt && (
                      <p className="text-xs text-blue-600">
                        Last updated{" "}
                        {new Date(
                          data.businessProcess.updatedAt
                        ).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-blue-700 mt-1">
                    Code:{" "}
                    <span className="font-mono">
                      {data.businessProcess.code}
                    </span>
                    {data.businessProcess.status === "published" && (
                      <span className="ml-2 text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded">
                        Published
                      </span>
                    )}
                  </p>
                </div>
              )}

              {/* Split Layout - 7 column grid: 2/7 left, 1/7 gap, 4/7 right */}
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-0">
                {/* Left Column - Basic Information (2/7) */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Basic Information
                    </h3>
                    <div className="space-y-6">
                      {/* Business Process Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Process Name{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Customer Onboarding Process"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Business Unit Combobox */}
                      <FormField
                        control={form.control}
                        name="businessUnitId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Department{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <Popover
                              open={businessUnitComboboxOpen}
                              onOpenChange={setBusinessUnitComboboxOpen}
                            >
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={businessUnitComboboxOpen}
                                    className="w-full justify-between"
                                  >
                                    {field.value
                                      ? data.businessUnits?.find(
                                        (unit) => unit.id === field.value
                                      )?.name +
                                      " (" +
                                      data.businessUnits?.find(
                                        (unit) => unit.id === field.value
                                      )?.code +
                                      ")"
                                      : "Select a Department..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-full p-0"
                                align="start"
                                side="top"
                              >
                                <Command>
                                  <CommandInput placeholder="Search departments..." />
                                  <CommandList>
                                    <CommandEmpty>
                                      No department found.
                                    </CommandEmpty>
                                    <CommandGroup>
                                      {data.businessUnits?.map((unit) => (
                                        <CommandItem
                                          key={unit.id}
                                          value={unit.name}
                                          onSelect={() => {
                                            field.onChange(unit.id);
                                            setBusinessUnitComboboxOpen(false);
                                          }}
                                        >
                                          <Check
                                            className={cn(
                                              "mr-2 h-4 w-4",
                                              field.value === unit.id
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                          {unit.name} ({unit.code})
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

                      {/* Business Process Code */}
                      <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Process Code{" "}
                              <span className="text-neutral-200">
                                (Optional)
                              </span>
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="9HUttbeIL7"
                                {...field}
                                disabled={isEdit}
                                className={cn(
                                  isEdit && "bg-muted cursor-not-allowed"
                                )}
                              />
                            </FormControl>
                            {isEdit && (
                              <p className="text-sm text-muted-foreground">
                                Code cannot be changed after creation
                              </p>
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Gap Column (1/7) */}
                <div className="lg:col-span-1 hidden lg:block"></div>

                {/* Right Column - Descriptions (4/7) */}
                <div className="lg:col-span-4 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Process Descriptions
                    </h3>
                    <div className="space-y-6">
                      {/* Grant Description */}
                      <FormField
                        control={form.control}
                        name="grantDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Grant Description{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="This text will be shown on Grant Notices"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Revoke Description */}
                      <FormField
                        control={form.control}
                        name="revokeDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Revoke Description
                              <span className="text-neutral-200">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="This text will be shown on Revoke Notices"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Reconsent Description */}
                      <FormField
                        control={form.control}
                        name="reconsentDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Reconsent Description
                              <span className="text-neutral-200">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="This text will be shown on Reconsent Notices"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0">
        <div className="flex gap-3 justify-end">
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isLoading || !isValid}
            className="min-w-[100px]"
            onClick={form.handleSubmit(onSubmit)}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
