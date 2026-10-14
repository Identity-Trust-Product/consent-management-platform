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

import { getCurrentUser } from "@/lib/auth-utils";
import { User as UserType } from "@prisma/client";
import UserDropdown from "@/components/cms-dropdown";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <nav className="h-[4rem] border-b border-slate-200/80 bg-white/95 flex justify-between items-center px-4 pr-6 shadow-sm backdrop-blur">
      <h1 className="text-slate-700 font-semibold">
        Consent Management System
      </h1>
      <div className="flex items-center space-x-4">
        {user && (
          <UserDropdown
            user={user as UserType}
          />
        )}
      </div>
    </nav>
  );
}
