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

import { createWebhook } from "@/actions/webhooks";
import { getDataProcessors } from "@/actions/data-processors";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import {
  createWebhookSchema,
  type CreateWebhookData,
  type WebhookCreatedResponse,
} from "@/lib/schemas/webhook-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { WebhookEventType, WebhookTargetType } from "@prisma/client";
import { AlertCircle, CheckCircle2, Copy, Key } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface CreateWebhookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateWebhookDialog({
  open,
  onOpenChange,
}: CreateWebhookDialogProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdWebhook, setCreatedWebhook] =
    useState<WebhookCreatedResponse | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [dataProcessors, setDataProcessors] = useState<Array<{ ouId: string; legalName: string; brandName: string }>>([]);
  const [isLoadingProcessors, setIsLoadingProcessors] = useState(false);

  const form = useForm<CreateWebhookData>({
    resolver: zodResolver(createWebhookSchema),
    defaultValues: {
      eventType: WebhookEventType.CONSENT_CREATED,
      endpointUrl: "",
      httpMethod: "POST" as const,
      isActive: true,
      targetType: "DATA_FIDUCIARY" as WebhookTargetType,
      dataProcessorId: null,
    },
  });

  const targetType = form.watch("targetType");

  // Load data processors when dialog opens
  useEffect(() => {
    if (open) {
      setIsLoadingProcessors(true);
      getDataProcessors()
        .then((processors) => {
          setDataProcessors(processors.filter((p) => p.active));
        })
        .finally(() => setIsLoadingProcessors(false));
    }
  }, [open]);

  // Reset dataProcessorId when targetType changes
  useEffect(() => {
    if (targetType === "DATA_FIDUCIARY") {
      form.setValue("dataProcessorId", null);
    }
  }, [targetType, form]);

  const handleCopySecret = async () => {
    if (!createdWebhook) return;

    try {
      await navigator.clipboard.writeText(createdWebhook.signingSecret);
      setIsCopied(true);
      toast.success("Signing secret copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Failed to copy signing secret");
    }
  };

  const handleClose = () => {
    if (createdWebhook) {
      setCreatedWebhook(null);
      setIsCopied(false);
      form.reset();
      router.refresh();
    }
    onOpenChange(false);
  };

  const onSubmit = async (data: CreateWebhookData) => {
    setIsSubmitting(true);
    try {
      const result = await createWebhook(data);

      if (result.success && result.data) {
        setCreatedWebhook(result.data);
        toast.success("Webhook created successfully!");
      } else {
        toast.error(result.error || "Failed to create webhook");
      }
    } catch {
      toast.error("Failed to create webhook");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        {!createdWebhook ? (
          <>
            <DialogHeader>
              <DialogTitle>Create Webhook</DialogTitle>
              <DialogDescription>
                Configure a new webhook endpoint to receive real-time event
                notifications. The signing secret will be shown only once.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="targetType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Type *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={isSubmitting}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select target type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="DATA_FIDUCIARY">Data Fiduciary</SelectItem>
                          <SelectItem value="DATA_PROCESSOR">Data Processor</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Who will receive this webhook notification
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {targetType === "DATA_PROCESSOR" && (
                  <FormField
                    control={form.control}
                    name="dataProcessorId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data Processor *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value || undefined}
                          disabled={isSubmitting || isLoadingProcessors}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={isLoadingProcessors ? "Loading..." : "Select data processor"} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {dataProcessors.length === 0 ? (
                              <SelectItem value="no-processors" disabled>
                                No active data processors
                              </SelectItem>
                            ) : (
                              dataProcessors.map((processor) => (
                                <SelectItem key={processor.ouId} value={processor.ouId}>
                                  {processor.brandName} ({processor.legalName})
                                </SelectItem>
                              ))
                            )}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The data processor that will receive this webhook
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={isSubmitting}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(WebhookEventType)
                            .filter((type) => {
                              // Filter events based on target type
                              if (targetType === "DATA_PROCESSOR") {
                                return ["CONSENT_REVOKED", "CONSENT_EXPIRED"].includes(type);
                              }
                              return true;
                            })
                            .map((type) => (
                              <SelectItem key={type} value={type}>
                                {type.replace(/_/g, " ")}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        {targetType === "DATA_PROCESSOR"
                          ? "Data processors can only receive CONSENT_REVOKED and CONSENT_EXPIRED events"
                          : "The event that will trigger this webhook"}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endpointUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endpoint URL *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://api.example.com/webhooks"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormDescription>
                        The URL where webhook events will be sent
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="httpMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>HTTP Method *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={isSubmitting}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select HTTP method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="POST">POST</SelectItem>
                          <SelectItem value="PUT">PUT</SelectItem>
                          <SelectItem value="PATCH">PATCH</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        The HTTP method to use for webhook requests
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="customHeaders"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Custom Headers (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='{"Authorization": "Bearer token", "X-Custom-Header": "value"}'
                          {...field}
                          value={field.value ? JSON.stringify(field.value) : ""}
                          onChange={(e) => {
                            try {
                              const parsed = e.target.value ? JSON.parse(e.target.value) : null;
                              field.onChange(parsed);
                            } catch {
                              // Invalid JSON, keep current value
                            }
                          }}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormDescription>
                        Additional HTTP headers as JSON object (e.g., {`{"Authorization": "Bearer token"}`})
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Webhook"}
                  </Button>
                </div>
              </form>
            </Form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Webhook Created Successfully
              </DialogTitle>
              <DialogDescription>
                Save the signing secret below. You won&apos;t be able to see it
                again!
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important!</AlertTitle>
                <AlertDescription>
                  Store this signing secret securely. You&apos;ll need it to
                  verify webhook signatures. This is the only time it will be
                  displayed.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Webhook ID</label>
                  <div className="mt-1">
                    <code className="block p-3 bg-muted rounded-md text-sm font-mono">
                      {createdWebhook.publicId}
                    </code>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Event Type</label>
                  <div className="mt-1">
                    <code className="block p-3 bg-muted rounded-md text-sm font-mono">
                      {createdWebhook.eventType}
                    </code>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Endpoint URL</label>
                  <div className="mt-1">
                    <code className="block p-3 bg-muted rounded-md text-sm font-mono break-all">
                      {createdWebhook.endpointUrl}
                    </code>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Key className="h-4 w-4" />
                    Signing Secret
                  </label>
                  <div className="mt-1 flex gap-2">
                    <code className="flex-1 p-3 bg-muted rounded-md text-sm font-mono break-all">
                      {createdWebhook.signingSecret}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCopySecret}
                      className="shrink-0"
                    >
                      {isCopied ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleClose}>Done</Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
