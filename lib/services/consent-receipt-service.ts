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
 * Consent Receipt Service
 *
 * Generates consent receipts dynamically from Notice, BusinessProcess, and Consent data.
 * No database storage - receipts are computed on-demand.
 */

import prisma from "@/lib/prisma";
import {
  ConsentReceiptData,
  ConsentReceiptPurpose,
  ExerciseRightsStep,
} from "@/lib/types/consent-receipt";
import { generateDprmLink } from "@/lib/services/dprm-service";
import {
  getReceiptTranslation,
  getDpdpaRights,
} from "@/lib/utils/consent-receipt-translations";
import { getUserAttributeTranslation } from "@/lib/utils/notice-translations";
import { LanguageCode } from "@/lib/types/languages";

/**
 * Get translated text from BusinessProcess or fallback to default
 */
function getTranslatedText(
  translations: any,
  language: string,
  field: string,
  fallback: string
): string {
  if (translations && typeof translations === "object") {
    const langData = translations[language];
    if (langData && langData[field]) {
      return langData[field];
    }
  }
  return fallback;
}

/**
 * Generate consent receipt for a completed notice
 *
 * @param noticePublicId - The public ID of the notice
 * @param targetLanguage - Optional language code to force translation to (updates receipt language)
 * @returns ConsentReceiptData or null if notice not found or not completed
 */
export async function generateConsentReceipt(
  noticePublicId: string,
  targetLanguage?: LanguageCode
): Promise<ConsentReceiptData | null> {
  try {
    // Fetch notice with all related data
    const notice = await prisma.notice.findUnique({
      where: { publicId: noticePublicId },
      include: {
        businessProcess: {
          include: {
            businessUnit: true,
            businessProcessRules: {
              include: {
                consentPurpose: true,
                processingPurpose: {
                  include: {
                    purposeOfProcessing: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!notice) {
      console.error("Notice not found:", noticePublicId);
      return null;
    }

    // Only generate receipt for completed notices
    if (notice.status !== "completed" && notice.status !== "submitted") {
      console.error("Notice not completed:", notice.status);
      return null;
    }

    // Fetch consents created for this notice
    // Consents are linked to notice via dataPrincipalId, businessProcessId, and referenceId
    const consents = await prisma.consent.findMany({
      where: {
        dataPrincipalId: notice.dataPrincipalId,
        businessProcessId: notice.businessProcess.publicId,
        referenceId: notice.referenceId || undefined,
        status: "accepted",
      },
      include: {
        consentPurpose: true,
        processingPurpose: true,
      },
      orderBy: {
        insertedAt: "asc",
      },
    });

    // Collect all unique user attribute names to fetch their translations
    const allUserAttributeNames = new Set<string>();
    consents.forEach((c) => {
      c.userAttributeNames.forEach((name) => allUserAttributeNames.add(name));
    });

    // Fetch UserAttribute definitions for translations
    const userAttributesWithTranslations = await prisma.userAttribute.findMany({
      where: {
        name: { in: Array.from(allUserAttributeNames) },
      },
    });

    // Map attribute name to UserAttribute object
    const userAttributeMap = new Map(
      userAttributesWithTranslations.map((attr) => [attr.name, attr])
    );

    // Use targetLanguage if provided, else fallback to notice's default language
    const lang = (targetLanguage || notice.defaultLanguage) as LanguageCode;
    const t = getReceiptTranslation(lang);

    // Group consents by consent purpose
    const purposesMap = new Map<string, ConsentReceiptPurpose>();

    consents.forEach((consent) => {
      const purposeName = getTranslatedText(
        consent.consentPurpose.translations,
        lang,
        "name",
        consent.consentPurpose.name
      );

      if (!purposesMap.has(purposeName)) {
        purposesMap.set(purposeName, {
          purpose: purposeName,
          personalDataCollected: [],
        });
      }

      // Add user attributes to the purpose (translated)
      const purpose = purposesMap.get(purposeName)!;
      consent.userAttributeNames.forEach((attrName) => {
        const attrDef = userAttributeMap.get(attrName);
        let translatedAttrName = attrName;

        if (attrDef) {
          translatedAttrName = getUserAttributeTranslation(
            attrDef.translations,
            lang,
            attrName
          );
        }

        if (!purpose.personalDataCollected.includes(translatedAttrName)) {
          purpose.personalDataCollected.push(translatedAttrName);
        }
      });
    });

    const purposes = Array.from(purposesMap.values());

    // Get environment variables
    const dataFiduciaryName =
      process.env.DATA_FIDUCIARY_NAME || "Data Fiduciary";
    const contactEmail =
      process.env.DATA_FIDUCIARY_CONTACT_EMAIL || "support@example.com";

    // Get translated business process name
    const serviceDescription = getTranslatedText(
      notice.businessProcess.translations,
      lang,
      "name",
      notice.businessProcess.name
    );

    // Build legal statement (Translated)
    const legalStatement = t.legalStatementTemplate
      .replace("{DF_NAME}", dataFiduciaryName)
      .replace("{BP_NAME}", serviceDescription);

    // Generate DPRM link for this data principal
    const dprmUrl = await generateDprmLink(notice.dataPrincipalId);

    // Generate exercise rights steps with DPRM link (Translated)
    const exerciseRightsSteps: ExerciseRightsStep[] = [
      {
        step: 1,
        description: t.exerciseSteps.step1,
        link: dprmUrl,
      },
      {
        step: 2,
        description: t.exerciseSteps.step2.replace(
          "{DF_NAME}",
          dataFiduciaryName
        ),
        link: dprmUrl,
      },
      {
        step: 3,
        description: t.exerciseSteps.step3,
        link: dprmUrl,
      },
      {
        step: 4,
        description: t.exerciseSteps.step4.replace(
          "{DF_NAME}",
          dataFiduciaryName
        ),
        link: contactEmail ? `mailto:${contactEmail}` : undefined,
      },
    ];

    // Build receipt data
    const receiptData: ConsentReceiptData = {
      receiptId: notice.publicId,
      dateTime: notice.markCompletedTimestamp || notice.updatedAt,
      dataPrincipalId: notice.dataPrincipalId,
      language: lang,
      serviceDescription,
      dataFiduciaryName,
      legalStatement,
      purposes,
      rights: getDpdpaRights(lang),
      exerciseRightsSteps,
      contactEmail,
      noticePublicId: notice.publicId,
    };

    return receiptData;
  } catch (error) {
    console.error("Error generating consent receipt:", error);
    return null;
  }
}

/**
 * Check if a consent receipt can be generated for a notice
 *
 * @param noticePublicId - The public ID of the notice
 * @returns boolean indicating if receipt can be generated
 */
export async function canGenerateReceipt(
  noticePublicId: string
): Promise<boolean> {
  try {
    const notice = await prisma.notice.findUnique({
      where: { publicId: noticePublicId },
      select: {
        status: true,
        consentStatus: true,
      },
    });

    if (!notice) {
      return false;
    }

    // Can generate receipt if notice is completed or submitted
    return notice.status === "completed" || notice.status === "submitted";
  } catch (error) {
    console.error("Error checking receipt eligibility:", error);
    return false;
  }
}
