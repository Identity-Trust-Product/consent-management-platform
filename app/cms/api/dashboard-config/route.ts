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

import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET() {
  // Verify authentication
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Return runtime environment variable (accessible server-side only)
  return NextResponse.json({
    dashboardUrl: process.env.METABASE_DASHBOARD_URL || null,
  });
}
