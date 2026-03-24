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

import { useEffect } from "react";
import { Printer } from "lucide-react";

export function PrintButton() {
  // Auto-print on load (optional - can be removed if not desired)
  useEffect(() => {
    // Small delay to ensure page is fully rendered
    const timer = setTimeout(() => {
      // Uncomment to auto-print when page opens
      // window.print();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={() => window.print()}
      className="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center gap-2"
    >
      <Printer className="h-4 w-4" />
      Print / Save as PDF
    </button>
  );
}
