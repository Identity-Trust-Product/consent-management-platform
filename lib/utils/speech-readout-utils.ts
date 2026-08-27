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

import { NoticeReadoutContent, ReadoutSection } from '@/lib/types/speech-readout';
import { NoticeData, ConsentPurposeData, ProcessingPurposeData, UserAttributeData } from '@/components/notice/types';
import { LanguageCode } from '@/lib/types/languages';
import {
  getBaseEntityTranslation,
  getBusinessProcessTranslation,
  getUserAttributeTranslation,
} from '@/lib/utils/notice-translations';

export interface ReadoutOptions {
  skipConsentPurpose?: boolean;
  brandName?: string;
}

/**
 * Prepares notice content for speech readout
 * Collates all notice sections into a structured format with translations
 */
export function prepareNoticeReadoutContent(
  notice: NoticeData,
  translate: (key: string, options?: Record<string, string>) => string,
  currentLanguage: LanguageCode,
  options: ReadoutOptions = {}
): NoticeReadoutContent {
  const sections: ReadoutSection[] = [];

  // Get translated business process content
  const translatedBP = getBusinessProcessTranslation(
    notice.businessProcess.translations,
    currentLanguage,
    {
      name: notice.businessProcess.name,
      grantDescription: notice.businessProcess.grantDescription,
      revokeDescription: notice.businessProcess.revokeDescription,
      reconsentDescription: notice.businessProcess.reconsentDescription,
    }
  );

  // Process consent purposes and their processing purposes
  const consentPurposes = notice.businessProcess.consentPurposes || [];

  if (options.skipConsentPurpose) {
    // Flatten processing purposes and create sections for each
    consentPurposes.forEach((consentPurpose) => {
      if (consentPurpose.processingPurposes && consentPurpose.processingPurposes.length > 0) {
        consentPurpose.processingPurposes.forEach((pp) => {
          const ppSection = buildProcessingPurposeSection(pp, currentLanguage, translate);
          sections.push(ppSection);
        });
      }
    });
  } else {
    consentPurposes.forEach((consentPurpose) => {
      const consentPurposeData = buildConsentPurposeContent(consentPurpose, currentLanguage, translate);
      sections.push(consentPurposeData);
    });
  }

  return {
    title: translate('CONSENT NOTICE'),
    subtitle: buildNoticeSubtitle(notice, translatedBP.name, translate, options.brandName),
    description: translatedBP.grantDescription || '',
    sections,
    rights: buildRightsText(translate),
    cta: translate('Do you agree to provide consent?'),
  };
}

/**
 * Builds the notice subtitle text
 */
function buildNoticeSubtitle(
  notice: NoticeData,
  translatedBPName: string,
  translate: (key: string, options?: Record<string, string>) => string,
  brandName?: string
): string {

  const brand = brandName || process.env.DATA_FIDUCIARY_NAME || "Brand";
  return translate('{{brand_name}} is seeking your consent for {{title}}', {
    brand_name: brand,
    title: translatedBPName,
  });
}

/**
 * Builds content for a single processing purpose as a section (for skipConsentPurpose mode)
 */
function buildProcessingPurposeSection(
  pp: ProcessingPurposeData,
  currentLanguage: LanguageCode,
  translate: (key: string) => string
): ReadoutSection {
  const translatedPP = getBaseEntityTranslation(
    pp.translations,
    currentLanguage,
    {
      name: pp.name,
      description: pp.description,
    }
  );

  const parts: string[] = [];
  if (translatedPP.description) {
    parts.push(translatedPP.description);
  }

  // Add user attributes if available
  if (pp.userAttributes && pp.userAttributes.length > 0) {
    const attributes = pp.userAttributes.map((attr: UserAttributeData) => {
      const translatedUA = getUserAttributeTranslation(attr.translations, currentLanguage, attr.name);
      return translatedUA;
    }).join(', ');
    parts.push(`${translate('Attributes Linked')}: ${attributes}`);
  }

  return {
    title: `${translate('Purpose Sub Master')}: ${translatedPP.name}`,
    content: parts.join('\n\n')
  };
}

/**
 * Builds consent purpose content with processing purposes
 */
function buildConsentPurposeContent(
  consentPurpose: ConsentPurposeData,
  currentLanguage: LanguageCode,
  translate: (key: string) => string
): ReadoutSection {

  const translatedCP = getBaseEntityTranslation(
    consentPurpose.translations,
    currentLanguage,
    {
      name: consentPurpose.name,
      description: consentPurpose.description,
    }
  );

  const parts: string[] = [translatedCP.description || ''];

  // Add processing purposes under this consent purpose
  if (consentPurpose.processingPurposes && consentPurpose.processingPurposes.length > 0) {
    consentPurpose.processingPurposes.forEach((pp: ProcessingPurposeData) => {
      // Get translated processing purpose
      const translatedPP = getBaseEntityTranslation(
        pp.translations,
        currentLanguage,
        {
          name: pp.name,
          description: pp.description,
        }
      );

      parts.push(`\n\n${translate('Purpose Sub Master')}: ${translatedPP.name}`);
      if (translatedPP.description) {
        parts.push(`\n\n${translatedPP.description}`);
      }

      // Add user attributes if available
      if (pp.userAttributes && pp.userAttributes.length > 0) {
        const attributes = pp.userAttributes.map((attr: UserAttributeData) => {
          const translatedUA = getUserAttributeTranslation(attr.translations, currentLanguage, attr.name);
          return translatedUA;
        }).join(', ');
        parts.push(`\n\n${translate('Attributes Linked')}: ${attributes}`);
      }
    });
  }

  return {
    title: `${translate('Major Purpose Master')}: ${translatedCP.name}`,
    content: parts.join(''),
  }
};

/**
 * Builds the rights information text
 */
function buildRightsText(translate: (key: string) => string): string {
  return [
    translate("You have the right to:"),
    translate("(1) Access information about your personal data"),
    translate("(2) Correct and update your personal data"),
    translate("(3) Erase your personal data"),
    translate("(4) Seek redress of any grievance regarding processing of your personal data"),
    translate("If you have any questions about the processing of your personal data, contact the Data Protection Officer."),
  ].join("\n");
}
