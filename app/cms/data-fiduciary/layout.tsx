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

import Navbar from "@/components/cms-navbar";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/cms-sidebar";
import { getCurrentUserRoles } from "@/lib/auth-utils";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userRoles = await getCurrentUserRoles();

  return (
    <div className="relative h-screen flex flex-col">
      <SidebarProvider defaultOpen={false}>
        <Sidebar userRoles={userRoles} />
        <div className="ml-[5rem] flex flex-col h-full w-[100%] relative">
          <Navbar />
          <Header />
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
}
