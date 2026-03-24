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

import { createApiKey } from "@/actions/api-keys";
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
import { Textarea } from "@/components/ui/textarea";
import {
  createApiKeySchema,
  type CreateApiKeyData,
  type CreatedApiKeyResponse,
} from "@/lib/schemas/api-key-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Copy, Key } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface CreateApiKeyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateApiKeyDialog({
  open,
  onOpenChange,
}: CreateApiKeyDialogProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdKey, setCreatedKey] = useState<CreatedApiKeyResponse | null>(
    null
  );
  const [isCopied, setIsCopied] = useState(false);

  const form = useForm<CreateApiKeyData>({
    resolver: zodResolver(createApiKeySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const handleCopyKey = async () => {
    if (!createdKey) return;

    try {
      await navigator.clipboard.writeText(createdKey.fullKey);
      setIsCopied(true);
      toast.success("API key copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (_error) {
      toast.error("Failed to copy API key");
    }
  };

  const handleClose = () => {
    if (createdKey) {
      setCreatedKey(null);
      setIsCopied(false);
      form.reset();
      router.refresh();
    }
    onOpenChange(false);
  };

  const onSubmit = async (data: CreateApiKeyData) => {
    setIsSubmitting(true);
    try {
      const result = await createApiKey(data);

      if (result.success && result.data) {
        setCreatedKey(result.data);
        toast.success("API key created successfully!");
      } else {
        toast.error(result.error || "Failed to create API key");
      }
    } catch (_error) {
      toast.error("Failed to create API key");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        {!createdKey ? (
          <>
            <DialogHeader>
              <DialogTitle>Create API Key</DialogTitle>
              <DialogDescription>
                Create a new API key for programmatic access to the consent
                platform. The key will be shown only once.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Production API Key"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormDescription>
                        A descriptive name to identify this API key
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
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Used by mobile app in production environment"
                          className="resize-none"
                          {...field}
                          value={field.value || ""}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormDescription>
                        Optional notes about where this key is used
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    The API key will be displayed only once. Make sure to copy
                    and store it securely. You won&apos;t be able to see it
                    again.
                  </AlertDescription>
                </Alert>

                <div className="flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create API Key"}
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
                API Key Created Successfully
              </DialogTitle>
              <DialogDescription>
                Copy your API key now. You won&apos;t be able to see it again!
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <p className="text-sm text-muted-foreground">
                    {createdKey.name}
                  </p>
                </div>
                {createdKey.description && (
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <p className="text-sm text-muted-foreground">
                      {createdKey.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Your API Key
                </label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 px-4 py-3 bg-muted rounded-md text-sm font-mono break-all border-2 border-primary">
                    {createdKey.fullKey}
                  </code>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopyKey}
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

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Store this key securely</AlertTitle>
                <AlertDescription>
                  This is the only time you&apos;ll see this key. Store it in a
                  secure location like a password manager or environment
                  variable. If you lose it, you&apos;ll need to create a new
                  one.
                </AlertDescription>
              </Alert>

              <div className="space-y-2 text-sm">
                <p className="font-medium">Security Best Practices:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Never commit API keys to version control</li>
                  <li>
                    Store keys in environment variables or secret managers
                  </li>
                  <li>Rotate keys periodically</li>
                  <li>Delete unused keys immediately</li>
                  <li>Use different keys for development and production</li>
                </ul>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleClose} className="w-full sm:w-auto">
                  I&apos;ve Saved My Key, Close
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
