"use client";

import {
    deleteTranslation,
    updateUserAttributeTranslation,
} from "@/actions/translations";
import { autoTranslateUserAttribute } from "@/actions/auto-translate";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { userAttributeTranslationSchema } from "@/lib/schemas/translation-schemas";
import {
    LanguageCode,
    SUPPORTED_LANGUAGES,
    LANGUAGE_CODES,
    getLanguageName,
} from "@/lib/types/languages";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { AutoTranslateButton } from "@/components/translations/auto-translate-button";

interface TranslationFormProps {
  userAttributeId: number;
  currentTranslations: Record<string, any>;
  supportedLanguages?: string[];
  onTranslationUpdate?: () => void;
}

type FormValues = z.infer<typeof userAttributeTranslationSchema>;

export function UserAttributeTranslationForm({
  userAttributeId,
  currentTranslations,
  supportedLanguages = ["en"],
  onTranslationUpdate,
}: TranslationFormProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("en");
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(userAttributeTranslationSchema),
    defaultValues: currentTranslations[selectedLanguage] || {
      name: "",
      description: null,
      placeholder: null,
    },
  });

  // Update form when language changes
  const handleLanguageChange = (lang: LanguageCode) => {
    setSelectedLanguage(lang);
    form.reset(currentTranslations[lang] || {
      name: "",
      description: null,
      placeholder: null,
    });
  };

  const onSubmit = async (data: FormValues) => {
    setIsSaving(true);
    try {
      const result = await updateUserAttributeTranslation(
        userAttributeId,
        selectedLanguage,
        data
      );

      if (result.success) {
        toast.success(`Translation saved for ${getLanguageName(selectedLanguage)}`);
        onTranslationUpdate?.();
      } else {
        toast.error(result.error || "Failed to save translation");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteTranslation(
        "userAttribute",
        userAttributeId,
        selectedLanguage
      );

      if (result.success) {
        toast.success(`Translation deleted for ${getLanguageName(selectedLanguage)}`);
        setShowDeleteDialog(false);
        onTranslationUpdate?.();
        // Switch to English after deletion
        setSelectedLanguage("en");
      } else {
        toast.error(result.error || "Failed to delete translation");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsDeleting(false);
    }
  };

  const isTranslationComplete = (lang: LanguageCode) => {
    const translation = currentTranslations[lang];
    if (!translation) return false;
    return !!translation.name;
  };

  const hasTranslation = (lang: LanguageCode) => {
    return !!currentTranslations[lang];
  };

  // Get all languages except English for auto-translate
  const getTargetLanguages = (): LanguageCode[] => {
    return LANGUAGE_CODES.filter(lang => lang !== 'en');
  };

  // Handle auto-translate
  const handleAutoTranslate = async (targetLanguages: LanguageCode[], sourceLanguage: LanguageCode) => {
    const result = await autoTranslateUserAttribute(
      userAttributeId,
      targetLanguages,
      sourceLanguage
    );
    return result;
  };

  return (
    <div className="space-y-6">
      {/* Language Selector & Actions */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <Select
            value={selectedLanguage}
            onValueChange={(val) => handleLanguageChange(val as LanguageCode)}
          >
            <SelectTrigger className="w-[300px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
                <SelectItem key={code} value={code}>
                  <div className="flex items-center gap-2">
                    <span>{lang.nativeName}</span>
                    <span className="text-muted-foreground text-xs">
                      ({lang.name})
                    </span>
                    {isTranslationComplete(code as LanguageCode) && (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            {supportedLanguages.map((lang) => (
              <Badge
                key={lang}
                variant={
                  isTranslationComplete(lang as LanguageCode)
                    ? "default"
                    : "secondary"
                }
              >
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {/* Auto-Translate Button */}
          <AutoTranslateButton
            targetLanguages={getTargetLanguages()}
            sourceLanguage="en"
            onTranslate={handleAutoTranslate}
            onSuccess={onTranslationUpdate}
            variant="default"
            size="sm"
          />

          {selectedLanguage !== "en" && hasTranslation(selectedLanguage) && (
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => setShowDeleteDialog(true)}
              disabled={isDeleting}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Translation
            </Button>
          )}
        </div>
      </div>

      {/* Translation Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={`Enter name in ${getLanguageName(selectedLanguage)}`}
                    dir={
                      SUPPORTED_LANGUAGES[selectedLanguage].rtl ? "rtl" : "ltr"
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2">
            <Button type="submit" disabled={isSaving}>
              {isSaving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Save Translation
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Translation</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the {getLanguageName(selectedLanguage)} translation?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
