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

import { getMyAssignedGrievances } from "@/actions/grievances";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MyTicketsClient from "./_components/my-tickets-client";

export default async function MyTicketsPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/cms/login");
  }

  const result = await getMyAssignedGrievances();

  if (!result.success) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center py-12">
          <p className="text-muted-foreground">{result.error}</p>
        </div>
      </div>
    );
  }

  return <MyTicketsClient tickets={result.data || []} session={session} />;
}
