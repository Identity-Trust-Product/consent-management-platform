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

import { useNoticeTranslation } from "@/hooks/use-notice-translation";

import { createGrievance } from "@/actions/grievances";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileUploadInput } from "@/components/dprm/file-upload-input";
import {
  GRIEVANCE_CATEGORY_DESCRIPTIONS,
  GRIEVANCE_CATEGORY_LABELS,
} from "@/lib/constants/grievances";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrievanceCategory } from "@prisma/client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { createDprmLink } from "@/lib/dprm-utils";

// Define form schema locally to avoid type conflicts
const formSchema = z.object({
  dataPrincipalId: z.string().min(1),
  metadata: z.object({
    name: z.string().optional(),
    email: z.string().email().optional().or(z.literal("")),
    phone: z.string().optional(),
  }),
  businessProcessId: z.number().int().positive(),
  category: z.nativeEnum(GrievanceCategory),
  subject: z.string().min(10).max(200),
  description: z.string().min(20).max(2000),
});

type FormValues = z.infer<typeof formSchema>;

import { DprmPageHeader } from "@/components/dprm/dprm-page-header";

interface NewGrievanceClientProps {
  token: string;
  dataPrincipalId: string;
  businessProcesses: Array<{
    id: number;
    publicId: string;
    name: string;
  }>;
}

export default function NewGrievanceClient({
  token,
  dataPrincipalId,
  businessProcesses,
}: NewGrievanceClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useNoticeTranslation("dprm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileUploadKey, setFileUploadKey] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dataPrincipalId,
      metadata: {
        name: "",
        email: "",
        phone: "",
      },
      businessProcessId: undefined,
      category: undefined,
      subject: "",
      description: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // Clean up metadata - remove empty strings
      const cleanedMetadata: Record<string, string> = {};
      if (values.metadata.name) cleanedMetadata.name = values.metadata.name;
      if (values.metadata.email) cleanedMetadata.email = values.metadata.email;
      if (values.metadata.phone) cleanedMetadata.phone = values.metadata.phone;

      const result = await createGrievance(token, {
        ...values,
        metadata:
          Object.keys(cleanedMetadata).length > 0 ? cleanedMetadata : undefined,
        files: selectedFiles, // Pass files to the action
      });

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success(t("Request submitted successfully!"));
        // Clear form and files
        form.reset();
        setSelectedFiles([]);
        setFileUploadKey((prev) => prev + 1);
        router.push(
          createDprmLink(
            `/cms/principal/dprm/${token}/grievances`,
            searchParams
          )
        );
      }
    } catch (error) {
      toast.error(t("Failed to submit request. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCategory = form.watch("category");

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-24">
      <DprmPageHeader
        title={t("Raise Request")}
        token={token}
        action={
          <Link
            href={createDprmLink(
              `/cms/principal/dprm/${token}/grievances`,
              searchParams
            )}
          >
            <Button size="sm" variant="outline" className="gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {t("Track Requests")}
            </Button>
          </Link>
        }
      />
      {/* Content */}
      <div className="p-4">
        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Principal Information Card */}
            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      1
                    </span>
                  </div>
                  {t("Your Information")}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t("This information helps us contact you about your request")}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-3 border">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {t("User ID")}
                  </label>
                  <p className="text-sm font-mono mt-1 font-semibold">
                    {dataPrincipalId}
                  </p>
                </div>{" "}
                <FormField
                  control={form.control}
                  name="metadata.name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("Name")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("Your full name")}
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="metadata.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Email")}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("your.email@example.com")}
                            className="h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="metadata.phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Phone")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("+1 (555) 000-0000")}
                            className="h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Request Details Card */}
            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      2
                    </span>
                  </div>
                  {t("Request Details")}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t("Provide information about your grievance")}
                </p>
              </CardHeader>
              <CardContent className="space-y-5">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        {t("Type of Request *")}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder={t("Select the type of request")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(GRIEVANCE_CATEGORY_LABELS).map(
                            ([value, label]) => (
                              <SelectItem
                                key={value}
                                value={value}
                                className="py-3"
                              >
                                <div className="flex flex-col items-start">
                                  <span className="font-medium">{t(label)}</span>
                                </div>
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      {selectedCategory && (
                        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                          <p className="text-sm text-blue-900 dark:text-blue-100">
                            {t(
                              GRIEVANCE_CATEGORY_DESCRIPTIONS[
                              selectedCategory as GrievanceCategory
                              ]
                            )}
                          </p>
                        </div>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessProcessId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        {t("Related Business Account *")}
                      </FormLabel>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(parseInt(value))
                        }
                        value={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder={t("Select the related business account")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {businessProcesses.map((bp) => (
                            <SelectItem
                              key={bp.id}
                              value={bp.id.toString()}
                              className="py-3"
                            >
                              {bp.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        {t("Choose the business account related to your request")}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">{t("Subject *")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("Brief summary of your request (e.g., Request to update consent)")}
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="flex items-center justify-between">
                        <span>
                          {t("Minimum 10 characters, maximum 200 characters")}
                        </span>
                        <span className="text-xs font-mono">
                          {field.value?.length || 0}/200
                        </span>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">{t("Details *")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("Provide detailed information about your request. Include any relevant context, dates, or specific concerns...")}
                          className="min-h-[150px] resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="flex items-center justify-between">
                        <span>
                          {t("Minimum 20 characters, maximum 2000 characters")}
                        </span>
                        <span className="text-xs font-mono">
                          {field.value?.length || 0}/2000
                        </span>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* File Upload */}
                <div className="space-y-2">
                  <FormLabel className="text-base">
                    {t("Attachments (Optional)")}
                  </FormLabel>
                  <FormDescription className="mb-2">
                    {t("Attach supporting documents or images (Max 5 files, 5MB each)")}
                  </FormDescription>
                  <FileUploadInput
                    key={fileUploadKey}
                    onFilesSelected={setSelectedFiles}
                    maxFiles={5}
                    maxSizeMB={5}
                    showPreview={true}
                    enableDragDrop={true}
                    disabled={isSubmitting}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Actions - Fixed Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 shadow-lg z-10 m-0">
              <div className="p-4 mx-auto">
                <div className="flex flex-col-reverse justify-end sm:flex-row gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      router.push(
                        createDprmLink(
                          `/cms/principal/dprm/${token}/grievances`,
                          searchParams
                        )
                      )
                    }
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none"
                  >
                    {t("Cancel")}
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none sm:min-w-[180px]"
                  >
                    {isSubmitting ? t("Submitting...") : t("Submit Request")}
                  </Button>
                </div>
              </div>
            </div>
            {/* Spacer for fixed footer */}
            <div className="h-20" />
          </form>
        </Form>
      </div>
    </div>
  );
}
