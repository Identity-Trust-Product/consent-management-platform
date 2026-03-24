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
    <nav className="border-b border-neutral-50 h-[4rem] flex justify-between items-center px-4 pr-6">
      <h1 className="text-neutral-300 font-medium">
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
