"use client";
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

import { logout } from "@/actions/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { User as UserType } from "@prisma/client";
import { ChevronDown, User, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface UserDropdownProps {
  user: UserType;
}

export default function UserDropdown({
  user,
}: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex items-center space-x-2 hover:bg-neutral-50 w-[12.5rem] px-2 py-1.5 rounded-md transition-colors border border-neutral-100 hover:cursor-pointer">
        <div className="relative">
          <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center overflow-hidden">
            <User className="w-8 h-8 relative top-1 text-neutral-300 fill-neutral-300" />
          </div>
          {/* Green dot */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex flex-col items-start text-xs flex-1">
          <span className="font-medium text-neutral-900">
            {user.name || user.email}
          </span>
          <span className="text-neutral-300">{process.env.NEXT_PUBLIC_DATA_FIDUCIARY_NAME}</span>
        </div>
        <div className="h-6 w-6 rounded-full bg-neutral-100/40 flex items-center justify-center">
          <ChevronDown
            className={`w-3.5 h-3.5 text-neutral-300 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
              }`}
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-[12.5rem] border-neutral-100 p-1 mt-1"
        sideOffset={-1}
      >
        <DropdownMenuItem asChild className="px-2 py-1.5">
          <Link href="/cms" className="cursor-pointer text-xs flex items-center gap-2">
            <Home className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-red-600 focus:text-red-600 text-xs px-2 py-1.5"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
