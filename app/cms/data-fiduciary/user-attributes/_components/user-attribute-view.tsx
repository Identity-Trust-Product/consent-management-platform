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

import { EditButton } from "@/components/ui/action-buttons";
import { Badge } from "@/components/ui/badge";
import { SUPPORTED_LANGUAGES } from "@/lib/types/languages";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";

interface UserAttributeWithDetails {
  id: number;
  name: string;
  pii: boolean;
  supportedLanguages: string[];
  translations: Prisma.JsonValue | null;
  createdAt: Date;
  updatedAt: Date;
}

interface UserAttributeViewProps {
  userAttribute: UserAttributeWithDetails;
  userAttributeId: string;
}

export function UserAttributeView({
  userAttribute,
  userAttributeId,
}: UserAttributeViewProps) {
  const router = useRouter();

  const formatDate = (dateStr: Date | string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatDateTime = (dateStr: Date | string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleEdit = () => {
    router.push(`/cms/data-fiduciary/user-attributes/${userAttributeId}/edit`);
  };

  return (
    <div className="h-full flex flex-col border rounded-t-lg">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              {userAttribute?.name || "Purpose Attribute"}
            </h2>
            {userAttribute?.updatedAt && (
              <span className="text-sm text-muted-foreground">
                (Last updated: {formatDate(userAttribute.updatedAt)})
              </span>
            )}
            <Badge
              variant={userAttribute?.pii ? "destructive" : "default"}
              className={
                userAttribute?.pii
                  ? "border-orange-200 bg-orange-50 text-orange-700 pointer-events-none"
                  : "border-green-200 bg-green-50 text-green-700 pointer-events-none"
              }
            >
              {userAttribute?.pii ? "PII" : "NON-PII"}
            </Badge>
          </div>
          <EditButton
            variant="outline"
            onClick={handleEdit}
            className="flex items-center gap-2"
          >
            Edit
          </EditButton>
        </div>
        <p className="text-muted-foreground">View purpose attribute details</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-10 space-y-6">
        {/* General Information */}
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-3">General Information</h3>
            <div className="grid grid-cols-2 gap-6 text-sm">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-muted-foreground">
                    Purpose Attribute Name:
                  </span>
                  <p className="mt-1">
                    {userAttribute?.name || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    PII Status:
                  </span>
                  <p className="mt-1">
                    {userAttribute?.pii ? "PII" : "Non-PII"}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-muted-foreground">
                    Created At:
                  </span>
                  <p className="mt-1">
                    {userAttribute?.createdAt
                      ? formatDateTime(userAttribute.createdAt)
                      : "Not available"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Updated At:
                  </span>
                  <p className="mt-1">
                    {userAttribute?.updatedAt
                      ? formatDateTime(userAttribute.updatedAt)
                      : "Not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Translations */}
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-4">
              Purpose Attribute in 22 Indian Languages
            </h3>

            {userAttribute.supportedLanguages && userAttribute.supportedLanguages.filter(code => code !== "en").length > 0 ? (
              <div className="space-y-2">
                {Object.entries(SUPPORTED_LANGUAGES)
                  .filter(([code]) => code !== "en" && userAttribute.supportedLanguages.includes(code))
                  .sort(([, a], [, b]) => a.name.localeCompare(b.name)) // Sort alphabetically
                  .map(([langCode, lang]) => {
                    const translation = userAttribute.translations?.[langCode];

                    return (
                      <div key={langCode} className="grid grid-cols-2 gap-4 py-2 border-b last:border-b-0 items-center">
                        <div className="font-medium">
                          {lang.name} ({lang.nativeName})
                        </div>
                        <div>
                          {translation?.name || "-"}
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No translations available. Add translations from the edit page.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
