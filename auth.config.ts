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

import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export default {
  basePath: "/cms/api/auth",
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // Do deep query once to fetch user with roles
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
          include: {
            userRoles: {
              include: {
                role: true,
              },
            },
          },
        });

        if (!user || !user.password) return null;

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (isPasswordCorrect) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            roles: user.userRoles as any,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.id = user.id;
        token.roles = user.roles;
      }

      // Do deep query to fetch roles if not already set
      // Or to refresh roles on session update
      if (trigger === "update" || !token.roles) {
        if (token.id) {
          const userWithRoles = await prisma.user.findUnique({
            where: { id: token.id as string },
            include: {
              userRoles: {
                include: {
                  role: true,
                },
              },
            },
          });

          if (userWithRoles) {
            token.roles = userWithRoles.userRoles as any;
          }
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id as string;
        session.user.roles = token.roles as any;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
