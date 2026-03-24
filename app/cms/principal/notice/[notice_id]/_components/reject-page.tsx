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

import { RejectNoticeIcon } from "@/components/icons/notice-icons";

interface RejectPageProps {
  title?: string;
  description?: string;
}

export function RejectPage({
  title = "Sorry to let you go.",
  description = "Hope to serve you better next time",
}: RejectPageProps) {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center pb-24">
      <RejectNoticeIcon />
      <div className="max-w-[45rem] text-center -mt-12">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
      </div>
    </section>
  );
}
