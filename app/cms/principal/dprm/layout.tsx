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

import { LayoutClient } from "@/components/dprm/layout-client";

export default function DprmLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <LayoutClient>{children}</LayoutClient>;
}
