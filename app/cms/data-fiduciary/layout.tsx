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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-screen flex flex-col bg-background">
      <SidebarProvider defaultOpen={false}>
        <Sidebar />
        <div className="ml-[5rem] flex h-full w-[100%] flex-col bg-background relative">
          <Navbar />
          <Header />
          <div className="flex-1 overflow-auto bg-background">{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
}
