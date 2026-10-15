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

import Header from "@/components/header";
import { getCurrentUser } from "@/lib/auth-utils";
import { Sidebar } from "@/components/cms-sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <div className="cms-theme min-h-screen bg-background text-foreground">
      <Sidebar userName={user?.name || user?.email} organizationName={process.env.NEXT_PUBLIC_DATA_FIDUCIARY_NAME} />
      <div className="min-w-0 lg:ml-[19.5rem]">
        <Header />
        <div className="min-w-0 pb-8">{children}</div>
      </div>
    </div>
  );
}
