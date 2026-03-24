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

import { updateUserAttributeTranslation } from "@/actions/translations";
import { autoTranslateUserAttribute, translateTextToLanguages } from "@/actions/auto-translate";
import {
  createUserAttribute,
  updateUserAttribute,
} from "@/actions/user-attributes";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  UserAttributeFormSchema,
  userAttributeSchema,
  UserAttributeUpdateData,
  userAttributeUpdateSchema,
} from "@/lib/schemas/user-attribute-schemas";
import { LanguageCode, SUPPORTED_LANGUAGES, LANGUAGE_CODES } from "@/lib/types/languages";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Prisma } from "@prisma/client";
import { AutoTranslateButton } from "@/components/translations/auto-translate-button";

interface UserAttributeFormProps {
  mode: "new" | "edit";
  userAttribute?: {
    id: number;
    name: string;
    pii: boolean;
    supportedLanguages: string[];
    translations: Prisma.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
  };
  userAttributeId?: string;
}

export function UserAttributeForm({
  mode,
  userAttribute,
  userAttributeId,
}: UserAttributeFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [translations, setTranslations] = useState<Record<string, string>>(
    mode === "edit" && userAttribute?.translations
      ? Object.entries(userAttribute.translations).reduce((acc, [lang, trans]: [string, any]) => {
        if (lang !== "en") { // Exclude English from translations state
          acc[lang] = trans?.name || "";
        }
        return acc;
      }, {} as Record<string, string>)
      : {}
  );

  const schema = mode === "new" ? userAttributeSchema : userAttributeUpdateSchema;

  const form = useForm<UserAttributeFormSchema | UserAttributeUpdateData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues:
      mode === "new"
        ? {
          name: "",
          pii: false,
        }
        : {
          name: userAttribute?.name || "",
          pii: userAttribute?.pii || false,
        },
  });

  const { isValid } = form.formState;

  const handleTranslationChange = (lang: string, value: string) => {
    setTranslations((prev) => ({
      ...prev,
      [lang]: value,
    }));
  };

  // Get all languages except English for auto-translate
  const getTargetLanguages = (): LanguageCode[] => {
    return LANGUAGE_CODES.filter(lang => lang !== 'en');
  };

  // Handle auto-translate for both create and edit modes
  const handleAutoTranslate = async (targetLanguages: LanguageCode[], sourceLanguage: LanguageCode) => {
    // Get source text from form
    const nameValue = form.getValues("name");

    if (!nameValue || nameValue.trim() === "") {
      toast.error("Please enter a user attribute name first");
      return { error: "User attribute name is required" };
    }

    // CREATE MODE: Use server action to translate text
    if (mode === "new") {
      const result = await translateTextToLanguages(nameValue, targetLanguages, sourceLanguage);

      if (result.success && result.translations) {
        // Update local translations state
        setTranslations(prev => ({ ...prev, ...result.translations }));

        // Show success message
        const successCount = Object.keys(result.translations).length;
        toast.success(`Successfully translated to ${successCount} language${successCount > 1 ? 's' : ''}`);

        // Show warning if there were partial errors
        if (result.errors && result.errors.length > 0) {
          toast.warning(`Some translations failed: ${result.errors.join(", ")}`);
        }

        return { success: true };
      } else {
        toast.error(result.error || "Translation failed");
        return { error: result.error || "Translation failed" };
      }
    }

    // EDIT MODE: Server-side translation with database update
    if (!userAttributeId) {
      toast.error("User attribute ID not found");
      return { error: "User attribute ID not found" };
    }

    const id = parseInt(userAttributeId);
    const result = await autoTranslateUserAttribute(id, targetLanguages, sourceLanguage);

    if (result.success && result.translations) {
      // Update local translations state
      const newTranslations: Record<string, string> = {};
      Object.entries(result.translations).forEach(([lang, trans]: [string, any]) => {
        if (lang !== "en") {
          newTranslations[lang] = trans?.name || "";
        }
      });
      setTranslations(prev => ({ ...prev, ...newTranslations }));
    }

    return result;
  };

  const onSubmit = async (
    formData: UserAttributeFormSchema | UserAttributeUpdateData
  ) => {
    setIsLoading(true);
    try {
      let result;

      if (mode === "new") {
        // Create user attribute first
        result = await createUserAttribute(formData as UserAttributeFormSchema);

        if (result.success && result.data) {
          // Then add translations
          const userAttrId = result.data.id;

          // Always save English translation (from main name field)
          await updateUserAttributeTranslation(userAttrId, "en", {
            name: formData.name,
          });

          // Save other language translations
          for (const [lang, translatedName] of Object.entries(translations)) {
            if (lang !== "en" && translatedName && translatedName.trim()) {
              await updateUserAttributeTranslation(userAttrId, lang as LanguageCode, {
                name: translatedName,
              });
            }
          }
        }
      } else {
        const id = parseInt(userAttributeId!);
        result = await updateUserAttribute({ id, data: formData as UserAttributeUpdateData });

        if (result.success) {
          // Always save English translation (from main name field)
          await updateUserAttributeTranslation(id, "en", {
            name: formData.name,
          });

          // Update other language translations
          for (const [lang, translatedName] of Object.entries(translations)) {
            if (lang !== "en" && translatedName && translatedName.trim()) {
              await updateUserAttributeTranslation(id, lang as LanguageCode, {
                name: translatedName,
              });
            }
          }
        }
      }

      if (result.success) {
        toast.success(
          mode === "new"
            ? "User attribute created successfully"
            : "User attribute updated successfully"
        );
        router.push("/cms/data-fiduciary/user-attributes");
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
    router.push("/cms/data-fiduciary/user-attributes");
  };

  return (
    <div className="h-full flex flex-col border rounded-t-lg">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              {mode === "new" ? "New User Attribute" : "Edit User Attribute"}
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground">
          {mode === "new"
            ? "Create a new user attribute"
            : "Update user attribute details"}
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
                  {/* User Attribute Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="max-w-lg">
                        <FormLabel>
                          User Attribute Name{" "}
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter user attribute name"
                            {...field}
                            disabled={mode === "edit"}
                            className={mode === "edit" ? "bg-muted" : ""}
                          />
                        </FormControl>
                        <FormMessage />
                        {mode === "edit" && (
                          <p className="text-xs text-muted-foreground">
                            Name cannot be changed once set
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* PII Checkbox */}
                  <FormField
                    control={form.control}
                    name="pii"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 max-w-lg">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Personally Identifiable Information (PII)
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Translations Section */}
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">
                    User Attribute in 22 Indian Languages
                  </h3>

                  {/* Auto-Translate Button - Available in both Create and Edit modes */}
                  <AutoTranslateButton
                    targetLanguages={getTargetLanguages()}
                    sourceLanguage="en"
                    onTranslate={handleAutoTranslate}
                    variant="default"
                    size="sm"
                  />
                </div>

                <div className="space-y-2">
                  {Object.entries(SUPPORTED_LANGUAGES)
                    .filter(([langCode]) => langCode !== "en") // Exclude English
                    .sort(([, a], [, b]) => a.name.localeCompare(b.name)) // Sort alphabetically
                    .map(([langCode, lang]) => (
                      <div
                        key={langCode}
                        className="grid grid-cols-2 gap-4 py-2 border-b last:border-b-0 items-center"
                      >
                        <div className="font-medium">
                          {lang.name} ({lang.nativeName})
                        </div>
                        <Input
                          placeholder={`Enter name in ${lang.name}`}
                          value={translations[langCode] || ""}
                          onChange={(e) =>
                            handleTranslationChange(langCode, e.target.value)
                          }
                          className="h-9"
                        />
                      </div>
                    ))}
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
