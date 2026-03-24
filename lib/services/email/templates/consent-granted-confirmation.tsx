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

import React from "react";
import { render, Section, Text } from "@react-email/components";
import { Button } from "../components/Button";
import { EmailIllustration } from "../components/EmailIllustration";
import { EmailLayout } from "../components/EmailLayout";
import { StatusBanner } from "../components/StatusBanner";

interface ConsentGrantedConfirmationProps {
  dprmLink: string;
  organizationName?: string;
  language?: string;
}

const TRANSLATIONS = {
  en: {
    title: "Consent Submitted Successfully!",
    greeting: "Thank you for sharing your consent. Your preferences have been securely recorded.",
    instruction: "You can view or update your consent anytime using the link below:",
    buttonText: "Click to manage your Consent",
    footer: "If you have any questions or concerns, please don't hesitate to contact us.",
    regards: "Regards,",
  },
  hi: {
    title: "सहमति सफलतापूर्वक जमा की गई!",
    greeting: "अनुमति साझा करने के लिए धन्यवाद। आपकी प्राथमिकताएं सुरक्षित रूप से दर्ज कर ली गई हैं।",
    instruction: "आप नीचे दिए गए लिंक का उपयोग करके कभी भी अपनी सहमति देख या अपडेट कर सकते हैं:",
    buttonText: "अपनी सहमति प्रबंधित करने के लिए क्लिक करें",
    footer: "यदि आपके कोई प्रश्न या चिंताएं हैं, तो कृपया हमसे संपर्क करने में संकोच न करें।",
    regards: "साभार,",
  },
  ml: {
    title: "സമ്മതം വിജയകരമായി സമർപ്പിച്ചു!",
    greeting: "നിങ്ങളുടെ സമ്മതം അറിയിച്ചതിന് നന്ദി. നിങ്ങളുടെ മുൻഗണനകൾ സുരക്ഷിതമായി രേഖപ്പെടുത്തിയിട്ടുണ്ട്.",
    instruction: "താഴെ നൽകിയിരിക്കുന്ന ലിങ്ക് ഉപയോഗിച്ച് നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും നിങ്ങളുടെ സമ്മതം കാണാനോ പുതുക്കാനോ കഴിയും:",
    buttonText: "നിങ്ങളുടെ സമ്മതം നിയന്ത്രിക്കാൻ ക്ലിക്ക് ചെയ്യുക",
    footer: "നിങ്ങൾക്ക് എന്തെങ്കിലും ചോദ്യങ്ങളോ ആശങ്കകളോ ഉണ്ടെങ്കിൽ, ഞങ്ങളെ ബന്ധപ്പെടാൻ മടിക്കരുത്.",
    regards: "ആശംസകളോടെ,",
  },
};

export function ConsentGrantedConfirmation({
  dprmLink,
  organizationName = "Open Bharart Digital Consent",
  language = "en",
}: ConsentGrantedConfirmationProps) {
  const t = TRANSLATIONS[language as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const preview = t.title;
  const baseUrl = process.env.BASE_PATH || "http://localhost:3000";

  return (
    <EmailLayout preview={preview}>
      <EmailIllustration baseUrl={baseUrl} />

      <StatusBanner type="success" title={t.title} baseUrl={baseUrl} />

      <Section>
        <Text className="mb-4 text-lg leading-relaxed text-[#484E56]">
          {t.greeting}
        </Text>

        <Text className="mb-6 text-lg leading-relaxed text-[#484E56]">
          {t.instruction}
        </Text>
      </Section>

      <Section className="text-center">
        <Button href={dprmLink}>{t.buttonText}</Button>
      </Section>
    </EmailLayout>
  );
}

// Export render function for email service
export async function renderEmail(
  variables: ConsentGrantedConfirmationProps
): Promise<{ subject: string; html: string; text: string }> {
  const t = TRANSLATIONS[variables.language as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const subject = t.title;
  const html = await render(<ConsentGrantedConfirmation {...variables} />);
  const text = `
${t.title}

${t.greeting}

${t.instruction}
${variables.dprmLink}

${t.footer}

${t.regards}
${variables.organizationName || "Open Bharart Digital Consent"}
  `.trim();

  return { subject, html, text };
}
