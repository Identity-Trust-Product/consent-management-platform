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

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { submitGrievanceFeedback } from "@/actions/grievances";
import {
  submitGrievanceFeedbackSchema,
  NEGATIVE_FEEDBACK_REASONS,
  NEUTRAL_FEEDBACK_REASONS,
  POSITIVE_FEEDBACK_REASONS,
} from "@/lib/schemas/grievances";
import { useIsMobile } from "@/hooks/use-mobile";

const formSchema = z.object({
  rating: z.number().int().min(1).max(5),
  reasons: z.array(z.string()),
  comment: z.string().max(1000).optional(),
}).refine(
  (data) => {
    // Require at least one reason if rating is 3 or below
    if (data.rating <= 3) {
      return data.reasons.length > 0;
    }
    return true;
  },
  {
    message: "Please select at least one reason for ratings of 3 or below",
    path: ["reasons"],
  }
);

type FormData = z.infer<typeof formSchema>;

interface GrievanceFeedbackFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  grievanceId: number;
  token: string;
  context?: "conversation" | "grievance";
}

export function GrievanceFeedbackForm({
  open,
  onOpenChange,
  grievanceId,
  token,
  context = "grievance",
}: GrievanceFeedbackFormProps) {
  const isMobile = useIsMobile();
  const [step, setStep] = useState<"rating" | "reasons" | "success">("rating");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      reasons: [],
      comment: "",
    },
  });

  const reasons = watch("reasons");
  const comment = watch("comment");

  // Determine which reasons to show based on rating
  const availableReasons =
    selectedRating && selectedRating <= 2
      ? NEGATIVE_FEEDBACK_REASONS
      : selectedRating === 3
        ? NEUTRAL_FEEDBACK_REASONS
        : selectedRating && selectedRating >= 4
          ? POSITIVE_FEEDBACK_REASONS
          : [];

  // All ratings should show reasons step (including rating 3)
  const showReasons = selectedRating !== null;

  const handleRatingSelect = (rating: number) => {
    // Always allow changing rating
    setSelectedRating(rating);
    setValue("rating", rating);
    setValue("reasons", []); // Reset reasons when changing rating

    // Show reasons step for all ratings if we're on rating step
    if (step === "rating") {
      setStep("reasons");
    }
    // If already on reasons step, just update the selection without changing step
  };

  const toggleReason = (reason: string) => {
    const currentReasons = reasons || [];
    if (currentReasons.includes(reason)) {
      setValue(
        "reasons",
        currentReasons.filter((r) => r !== reason)
      );
    } else {
      if (currentReasons.length < 5) {
        setValue("reasons", [...currentReasons, reason]);
      } else {
        toast.error("You can select up to 5 reasons");
      }
    }
  };

  const handleDirectSubmit = async (rating: number) => {
    setIsSubmitting(true);
    try {
      const result = await submitGrievanceFeedback({
        grievanceId,
        token,
        rating,
        reasons: [],
        comment: undefined,
      });

      if (result.error) {
        toast.error(result.error);
        setIsSubmitting(false);
        return;
      }

      setStep("success");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback");
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitGrievanceFeedback({
        grievanceId,
        token,
        rating: data.rating,
        reasons: data.reasons,
        comment: data.comment,
      });

      if (result.error) {
        toast.error(result.error);
        setIsSubmitting(false);
        return;
      }

      setStep("success");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback");
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (step !== "success") {
      // Reset form when closing without success
      reset();
      setSelectedRating(null);
      setStep("rating");
    }
    onOpenChange(false);

    // Reset state after animation
    setTimeout(() => {
      if (step === "success") {
        reset();
        setSelectedRating(null);
        setStep("rating");
        setIsSubmitting(false);
      }
    }, 300);
  };

  const handleSkip = () => {
    handleClose();
  };

  const getRatingColor = (rating: number) => {
    if (rating === 1) return "bg-red-500 border-red-500";
    if (rating === 2) return "bg-red-400 border-red-400";
    if (rating === 3) return "bg-orange-400 border-orange-400";
    if (rating === 4) return "bg-green-500 border-green-500";
    if (rating === 5) return "bg-green-600 border-green-600";
    return "bg-gray-100 border-gray-300";
  };

  const getContextTitle = () => {
    if (context === "conversation") {
      return "How was your conversation experience with us?";
    }
    return "How was your grievance resolution experience with us?";
  };

  const renderContent = () => {
    if (step === "success") {
      return (
        <div className="flex flex-col items-center justify-center py-8 px-4">
          <div className="mb-6 rounded-full bg-green-100 p-4">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Thank you so much!
          </h3>
          <p className="mb-8 text-center text-gray-600">
            Your feedback matters to us, stay tuned for improvements. You&apos;ll hear
            from us soon!
          </p>
          <Button
            onClick={handleClose}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            Close
          </Button>
        </div>
      );
    }

    if (step === "rating") {
      return (
        <div className="space-y-6 pb-2">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              {getContextTitle()}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Your feedback will help us serve you better
            </p>
          </div>

          {/* Rating Scale */}
          <div className="space-y-3">
            <div className="flex justify-between gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleRatingSelect(rating)}
                  disabled={isSubmitting}
                  className={cn(
                    "flex h-14 sm:h-16 flex-1 items-center justify-center rounded-lg border-2 text-xl sm:text-2xl font-semibold transition-all active:scale-95",
                    selectedRating === rating
                      ? getRatingColor(rating) + " text-white shadow-md"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50",
                    isSubmitting && "cursor-not-allowed opacity-50"
                  )}
                >
                  {rating}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 px-1">
              <span>Not satisfied</span>
              <span>Extremely Satisfied</span>
            </div>
          </div>

          {/* Skip Button */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={handleSkip}
              disabled={isSubmitting}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50 underline"
            >
              Skip this step
            </button>
          </div>
        </div>
      );
    }

    // Reasons step
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {getContextTitle()}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Your feedback will help us serve you better
          </p>
        </div>

        {/* Selected Rating Display - Clickable to change rating */}
        <div className="flex justify-between gap-2 sm:gap-3">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              type="button"
              onClick={() => handleRatingSelect(rating)}
              className={cn(
                "flex h-14 sm:h-16 flex-1 items-center justify-center rounded-lg border-2 text-xl sm:text-2xl font-semibold transition-all active:scale-95",
                selectedRating === rating
                  ? getRatingColor(rating) + " text-white shadow-md"
                  : "border-gray-300 bg-gray-50 text-gray-400 hover:border-gray-400 hover:bg-gray-100"
              )}
            >
              {rating}
            </button>
          ))}
        </div>

        {/* Reasons Selection */}
        {showReasons && (
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                {selectedRating && selectedRating <= 2
                  ? "What did you not like about this conversation?"
                  : selectedRating === 3
                    ? "What was your experience like?"
                    : "What did you like about this conversation?"}
              </h4>
              <p className="text-xs text-gray-500">(choose up to 5 reasons)</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {availableReasons.map((reason) => (
                <button
                  key={reason}
                  type="button"
                  onClick={() => toggleReason(reason)}
                  className={cn(
                    "rounded-full border-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all active:scale-95",
                    reasons.includes(reason)
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                  )}
                >
                  {reason}
                  {reasons.includes(reason) && (
                    <X className="ml-1 inline-block h-3 w-3" />
                  )}
                </button>
              ))}
            </div>
            {errors.reasons && (
              <p className="text-sm text-red-600">{errors.reasons.message}</p>
            )}
          </div>
        )}

        {/* Optional Comment */}
        {reasons.includes("Other") && (
          <div className="space-y-2">
            <Textarea
              {...register("comment")}
              placeholder="My query is still not resolved, please look into the resolution process."
              className="min-h-[120px] resize-none"
              maxLength={1000}
            />
            {errors.comment && (
              <p className="text-sm text-red-600">{errors.comment.message}</p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full text-white shadow-md",
            selectedRating && selectedRating <= 2
              ? "bg-red-500 hover:bg-red-600"
              : selectedRating === 3
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-600 hover:bg-blue-700"
          )}
          size="lg"
        >
          {isSubmitting ? "Submitting..." : "Submit feedback"}
        </Button>
      </form>
    );
  };

  // Render as Sheet (drawer) on mobile, Dialog on desktop
  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={handleClose}>
        <SheetContent
          side="bottom"
          className="max-h-[90vh] overflow-y-auto rounded-t-2xl px-5 pb-8"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Feedback</SheetTitle>
            <SheetDescription>Submit your feedback</SheetDescription>
          </SheetHeader>
          <div className="pt-6">{renderContent()}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="sr-only">
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription>Submit your feedback</DialogDescription>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
}
