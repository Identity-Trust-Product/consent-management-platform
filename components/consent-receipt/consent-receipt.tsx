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

/**
 * Consent Receipt Component
 *
 * Displays a formatted consent receipt matching the design specification.
 * This component is reusable and can be embedded in modals, pages, or email templates.
 */

import { ConsentReceiptData } from "@/lib/types/consent-receipt";
import { FiduciaryLogo } from "@/components/fiduciary-logo";
import { cn } from "@/lib/utils";
import {
  getReceiptTranslation,
  localizeDigits
} from "@/lib/utils/consent-receipt-translations";

interface ConsentReceiptProps {
  data: ConsentReceiptData;
  className?: string;
}

export function ConsentReceipt({ data, className }: ConsentReceiptProps) {
  const t = getReceiptTranslation(data.language);

  const formatDateTime = (date: Date) => {
    // specific formatting preference with fallback to en-GB style if needed
    // but using the data.language for locale
    let formattedDate = "";
    try {
      formattedDate = new Date(date).toLocaleString(data.language || "en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch (e) {
      formattedDate = new Date(date).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    }

    // Ensure digits are localized even if browser locale implementation doesn't do it
    // or does it inconsistently
    return localizeDigits(formattedDate, data.language);
  };

  return (
    <div
      className={cn(
        "consent-receipt-printable bg-white text-black p-8 max-w-4xl mx-auto",
        className
      )}
    >
      {/* Header */}
      <div className="mb-8 relative pb-4">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <FiduciaryLogo className="text-xl" />
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-3xl font-bold text-blue-600">{t.header}</h1>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="space-y-3 mb-8 text-sm">
        <MetadataRow
          label={t.receiptId}
          value={data.receiptId}
        />
        <MetadataRow
          label={t.dateTime}
          value={formatDateTime(data.dateTime)}
        />
        <MetadataRow
          label={t.dataPrincipalId}
          value={data.dataPrincipalId}
        />
        <MetadataRow
          label={t.dataFiduciaryName}
          value={data.dataFiduciaryName}
        />
        <MetadataRow
          label={t.nameOfGoodsService}
          value={data.serviceDescription}
        />
        <MetadataRow
          label={t.legalStatementLabel}
          value={data.legalStatement}
          isMultiline
        />
      </div>

      {/* Purpose Table */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">{t.purposeHeader}</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                {t.purposeColumn}
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                {t.dataCollectedColumn}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.purposes.length === 0 ? (
              <tr>
                <td
                  colSpan={2}
                  className="border border-gray-300 px-4 py-3 text-center text-gray-500"
                >
                  {t.noPurposes}
                </td>
              </tr>
            ) : (
              data.purposes.map((purpose, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-3">
                    {purpose.purpose}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    {purpose.personalDataCollected.join(", ")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Rights Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">{t.rightsHeader}</h2>
        <p className="mb-3 text-sm">
          {t.rightsDescription}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          {data.rights.map((right, index) => (
            <li key={index}>{right}</li>
          ))}
        </ul>
      </div>

      {/* Exercise Rights Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">
          {t.exerciseRightsHeader}
        </h2>
        <p className="mb-3 text-sm">
          {t.exerciseRightsDescription}
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-sm">
          {data.exerciseRightsSteps.map((step) => (
            <li key={step.step}>
              {step.description}
              {step.link && (
                <>
                  {" "}
                  <a
                    href={step.link}
                    className="text-primary-600 underline hover:text-primary-700"
                  >
                    {t.clickHere}
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm">
          {t.contactText}{" "}
          <a
            href={`mailto:${data.contactEmail}`}
            className="text-primary-600 underline hover:text-primary-700"
          >
            {data.contactEmail}
          </a>
        </p>
      </div>

      {/* Footer Note */}
      <div className="border-t pt-6 mt-8">
        <p className="text-sm text-gray-600 italic">
          {t.footerNote}
        </p>
      </div>
    </div>
  );
}

/**
 * Helper component for metadata rows
 */
function MetadataRow({
  label,
  value,
  isMultiline = false,
}: {
  label: string;
  value: string;
  isMultiline?: boolean;
}) {
  return (
    <div className={cn("flex", isMultiline ? "flex-col gap-1" : "gap-2")}>
      <span className="font-semibold min-w-[200px]">{label}</span>
      <span className={cn(isMultiline && "ml-0")}>{value}</span>
    </div>
  );
}
