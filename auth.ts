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

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import authConfig from "./auth.config";
import { logAudit } from "@/lib/audit";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  // TODO handle absolute expiry
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 minutes session timeout
  },
  events: {
    async signIn({ user }) {
      if (user.id) {
        await logAudit({
          action: "LOGIN",
          resource: "USER",
          resourceId: user.id,
          performedByUserId: user.id,
          status: "SUCCESS",
        });
      }
    },
    async signOut(message) {
      if ("token" in message && message.token?.sub) {
        await logAudit({
          action: "LOGOUT",
          resource: "USER",
          resourceId: message.token.sub,
          performedByUserId: message.token.sub,
          status: "SUCCESS",
        });
      }
    },
  },
  ...authConfig,
});
