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

import { Img, Section } from "@react-email/components";
import * as React from "react";

interface EmailIllustrationProps {
  baseUrl?: string;
}

export function EmailIllustration({ baseUrl }: EmailIllustrationProps) {
  const imageUrl = `${baseUrl}/email-illustration.png`;

  return (
    <Section className="py-8 text-center">
      <Img
        src={imageUrl}
        alt="Email Notification"
        width="auto"
        height="auto"
        className="mx-auto inline-block max-w-full h-auto"
      />
    </Section>
  );
}
