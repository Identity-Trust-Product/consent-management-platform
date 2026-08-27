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
  createPurposeOfProcessing,
  updatePurposeOfProcessing,
} from "@/actions/purposes-of-processing";
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
import {
  generateRandomCode,
  PurposeOfProcessingFormSchema,
  purposeOfProcessingSchema,
} from "@/lib/schemas/purpose-of-processing-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface PurposeOfProcessingFormProps {
  mode: "new" | "edit";
  purposeOfProcessing?: {
    id: number;
    name: string;
    code: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
  purposeOfProcessingId?: string;
}

export function PurposeOfProcessingForm({
  mode,
  purposeOfProcessing,
  purposeOfProcessingId,
}: PurposeOfProcessingFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<PurposeOfProcessingFormSchema>({
    resolver: zodResolver(purposeOfProcessingSchema),
    mode: "onChange",
    defaultValues: {
      name: purposeOfProcessing?.name || "",
      code: purposeOfProcessing?.code || generateRandomCode(),
      description: purposeOfProcessing?.description || "",
    },
  });

  const { isValid } = form.formState;

  const onSubmit = async (formData: PurposeOfProcessingFormSchema) => {
    setIsLoading(true);
    try {
      let result;

      if (mode === "new") {
        result = await createPurposeOfProcessing({
          name: formData.name,
          code: formData.code,
          description: formData.description,
        });
      } else {
        const id = parseInt(purposeOfProcessingId!);
        result = await updatePurposeOfProcessing({
          id,
          data: {
            name: formData.name,
            description: formData.description,
          },
        });
      }

      if (result.success) {
        toast.success(
          mode === "new"
            ? "Purpose sub master created successfully"
            : "Purpose sub master updated successfully"
        );
        router.push("/cms/data-fiduciary/purposes-of-processing");
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
    router.push("/cms/data-fiduciary/purposes-of-processing");
  };

  return (
    <div className="h-full flex flex-col border rounded-t-lg">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              {mode === "new"
                ? "New Purpose Sub Master"
                : "Edit Purpose Sub Master"}
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground">
          {mode === "new"
            ? "Create a new purpose sub master"
            : "Update purpose sub master details"}
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
                  {/* Purpose of Processing Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          Purpose Sub Master Name{" "}
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter purpose sub master name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Code */}
                  <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          Code <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Auto-generated code"
                            {...field}
                            disabled={mode === "edit"}
                            className={mode === "edit" ? "bg-muted" : ""}
                          />
                        </FormControl>
                        <FormMessage />
                        {mode === "edit" && (
                          <p className="text-xs text-muted-foreground">
                            Code cannot be changed once set
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Description */}
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          Description <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter purpose sub master description"
                            className="min-h-[100px]"
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
