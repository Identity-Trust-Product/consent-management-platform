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

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Star, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";

interface FeedbackData {
  rating: number;
  reasons?: string[];
  comment?: string | null;
  submittedAt: string;
}

interface FeedbackDisplayProps {
  feedback: FeedbackData;
  compact?: boolean;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
            }`}
        />
      ))}
      <span className="ml-2 text-lg font-semibold">{rating}/5</span>
    </div>
  );
}

function getRatingColor(rating: number): string {
  if (rating >= 4) return "text-green-600 bg-green-50 border-green-200";
  if (rating === 3) return "text-yellow-600 bg-yellow-50 border-yellow-200";
  return "text-red-600 bg-red-50 border-red-200";
}

function getRatingLabel(rating: number): string {
  if (rating >= 4) return "Positive Feedback";
  if (rating === 3) return "Neutral Feedback";
  return "Needs Attention";
}

function getRatingIcon(rating: number) {
  if (rating >= 4) return <ThumbsUp className="h-4 w-4" />;
  if (rating === 3) return <MessageSquare className="h-4 w-4" />;
  return <ThumbsDown className="h-4 w-4" />;
}

export function FeedbackDisplay({ feedback, compact = false }: FeedbackDisplayProps) {
  const ratingColor = getRatingColor(feedback.rating);
  const ratingLabel = getRatingLabel(feedback.rating);
  const ratingIcon = getRatingIcon(feedback.rating);

  if (compact) {
    return (
      <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${ratingColor}`}>
        {ratingIcon}
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">{feedback.rating}/5</span>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Principal Feedback</CardTitle>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${ratingColor}`}>
            {ratingIcon}
            <span>{ratingLabel}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Rating */}
        <div className="flex items-center justify-between">
          <StarRating rating={feedback.rating} />
        </div>

        {/* Reasons */}
        {feedback.reasons && feedback.reasons.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Feedback Reasons</h4>
            <div className="flex flex-wrap gap-2">
              {feedback.reasons.map((reason, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {reason}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Comment */}
        {feedback.comment && (
          <div>
            <h4 className="text-sm font-medium mb-2">Additional Comments</h4>
            <div className="bg-muted p-3 rounded-md">
              <p className="text-sm whitespace-pre-wrap">{feedback.comment}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Compact badge version for list views
export function FeedbackBadge({ rating }: { rating: number }) {
  const color = getRatingColor(rating);

  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${color}`}>
      <Star className="h-3 w-3 fill-current" />
      <span>{rating}</span>
    </div>
  );
}
