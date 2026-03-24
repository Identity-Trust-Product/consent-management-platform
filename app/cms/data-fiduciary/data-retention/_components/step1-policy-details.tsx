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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PolicyFormData } from "./policy-form";
import { FileText } from "lucide-react";

import { FileUploadInput } from "@/components/dprm/file-upload-input";
import { useState } from "react";

const step1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .optional()
    .or(z.literal("")),
  policyUrl: z.string().optional(),
});

interface Step1Props {
  initialData: PolicyFormData;
  onNext: (data: Partial<PolicyFormData>) => void;
  onCancel: () => void;
}

export function Step1PolicyDetails({ initialData, onNext, onCancel }: Step1Props) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileUploadKey, setFileUploadKey] = useState(0);

  const form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      name: initialData.name,
      description: initialData.description,
      policyUrl: initialData.policyUrl,
    },
  });

  function onSubmit(values: z.infer<typeof step1Schema>) {
    // In a real implementation, we would upload the file here and get the URL
    // For now, we'll just use the file name as the URL if a file is selected
    let policyUrl = values.policyUrl;
    if (selectedFiles.length > 0) {
      policyUrl = `https://example.com/uploads/${selectedFiles[0].name}`;
    }

    onNext({
      name: values.name,
      description: values.description || "",
      policyUrl: policyUrl || "",
    });
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <h2 className="text-2xl font-bold tracking-tight border-b px-6 py-5 flex-shrink-0">
        Step 1. Create Policy
      </h2>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
            <div className="space-y-6 px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Policy Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Marketing Data Retention Policy" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter description..."
                            className="min-h-40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="policyUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Policy (Optional)</FormLabel>
                        <FormDescription className="mb-2">
                          Attach supporting documents (Max 5 files, 5MB each)
                        </FormDescription>
                        <FileUploadInput
                          key={fileUploadKey}
                          onFilesSelected={setSelectedFiles}
                          maxFiles={5}
                          maxSizeMB={5}
                          showPreview={true}
                          enableDragDrop={true}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0">
        <div className="flex gap-3 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}
