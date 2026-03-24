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
import { Textarea } from "@/components/ui/textarea";
import { useConsentPurposeForm } from "@/contexts/consent-purpose-context";
import {
  ConsentPurposeFormSchema,
  consentPurposeSchema,
  generateRandomCode,
} from "@/lib/schemas/consent-purpose-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
  userAttributes?: any[];
  purposesOfProcessing?: any[];
  dataProcessors?: any[];
}

interface Step1FormProps {
  data: StepData;
  isEdit: boolean;
  consentPurposeId?: string;
}

export function Step1Form({ data, isEdit, consentPurposeId }: Step1FormProps) {
  const router = useRouter();
  const { state, dispatch } = useConsentPurposeForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize form with context first, then database
  const getDefaultValues = () => {
    // Priority: context > database > empty
    if (state.step1Data) {
      return {
        name: state.step1Data.name,
        code: state.step1Data.code,
        description: state.step1Data.description,
      };
    }
    return {
      name: data.consentPurpose?.name || "",
      code: data.consentPurpose?.code || generateRandomCode(),
      description: data.consentPurpose?.description || "",
    };
  };

  const form = useForm<ConsentPurposeFormSchema>({
    resolver: zodResolver(consentPurposeSchema),
    mode: "onChange", // Enable real-time validation
    defaultValues: getDefaultValues(),
  });

  const watchedCode = form.watch("code");
  const { isValid, errors } = form.formState;

  // Mark as initialized after first render
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Sync context data to form when navigating back to this step (not on first mount)
  useEffect(() => {
    if (!isInitialized) return; // Skip on first mount

    if (state.step1Data) {
      form.reset({
        name: state.step1Data.name,
        code: state.step1Data.code,
        description: state.step1Data.description,
      });
    }
  }, [state.step1Data, form, isInitialized]);

  // Generate a new random code if the current code is empty
  useEffect(() => {
    if (!watchedCode) {
      form.setValue("code", generateRandomCode());
    }
  }, [watchedCode, form]);

  const onSubmit = async (formData: ConsentPurposeFormSchema) => {
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
      if (consentPurposeId) {
        params.set("id", consentPurposeId);
      }

      const basePath =
        isEdit && consentPurposeId
          ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit`
          : `/cms/data-fiduciary/consent-purposes/new`;

      router.push(`${basePath}?${params.toString()}`);
    } catch (error) {
      console.error("Error proceeding to step 2:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    dispatch({ type: "RESET" });
    router.push("/cms/data-fiduciary/consent-purposes");
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
            <div className="px-6 py-6 space-y-6">
              {/* Version Info */}
              {isEdit && data.consentPurpose?.version && (
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <p className="text-sm font-medium text-blue-800">
                        Version {data.consentPurpose.version}
                      </p>
                    </div>
                    {data.consentPurpose.publishedAt && (
                      <p className="text-xs text-blue-600">
                        Published on{" "}
                        {new Date(
                          data.consentPurpose.publishedAt
                        ).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-blue-700 mt-1">
                    Code:{" "}
                    <span className="font-mono">
                      {data.consentPurpose.code}
                    </span>
                  </p>
                </div>
              )}

              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Title of the Purpose{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Open a Bank Account"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Code Field */}
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Purpose ID{" "}
                      <span className="text-neutral-200">(Optional)</span>
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="9HUttbeIL7"
                        {...field}
                        disabled={isEdit}
                        className={isEdit ? "bg-muted cursor-not-allowed" : ""}
                      />
                    </FormControl>
                    {isEdit && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Purpose ID cannot be changed for existing consent
                        purposes
                      </p>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Description <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the purpose for which consent is being collected..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
