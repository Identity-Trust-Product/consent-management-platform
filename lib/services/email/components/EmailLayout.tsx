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

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind
} from "@react-email/components";
import * as React from "react";

interface EmailLayoutProps {
  preview: string;
  children: React.ReactNode;
}

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="font-sans">
          <Container className="mx-auto my-8 max-w-[600px]">
            <div className="rounded-3xl bg-[#2a4fc2] p-4">
              <div className="rounded-2xl bg-white p-4">
                {children}
              </div>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
