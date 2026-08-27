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
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  businessUnitSchema,
  generateRandomCode,
  BusinessUnitFormSchema,
} from "@/lib/schemas/business-unit-schemas";
import {
  createBusinessUnit,
  updateBusinessUnit,
} from "@/actions/business-units";
import { toast } from "sonner";

interface BusinessUnitFormProps {
  mode: "new" | "edit";
  businessUnit?: {
    id: number;
    name: string;
    code: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  businessUnitId?: string;
}

export function BusinessUnitForm({
  mode,
  businessUnit,
  businessUnitId,
}: BusinessUnitFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<BusinessUnitFormSchema>({
    resolver: zodResolver(businessUnitSchema),
    mode: "onChange",
    defaultValues: {
      name: businessUnit?.name || "",
      code: businessUnit?.code || generateRandomCode(),
    },
  });

  const { isValid } = form.formState;

  const onSubmit = async (formData: BusinessUnitFormSchema) => {
    setIsLoading(true);
    try {
      let result;

      if (mode === "new") {
        result = await createBusinessUnit({
          name: formData.name,
          code: formData.code,
        });
      } else {
        const id = parseInt(businessUnitId!);
        result = await updateBusinessUnit({
          id,
          data: {
            name: formData.name,
          },
        });
      }

      if (result.success) {
        toast.success(
          mode === "new"
            ? "Department created successfully"
            : "Department updated successfully"
        );
        router.push("/cms/data-fiduciary/business-units");
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
    router.push("/cms/data-fiduciary/business-units");
  };

  return (
    <div className="h-full flex flex-col border rounded-t-lg">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              {mode === "new" ? "New Department" : "Edit Department"}
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground">
          {mode === "new"
            ? "Create a new department"
            : "Update department details"}
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
                  {/* Business Unit Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          Department Name{" "}
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Department name"
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
