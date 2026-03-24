import NextAuth from "next-auth";
import { UserRole } from "@/lib/rbac";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      roles?: UserRole[];
    };
  }

  interface User {
    id: string;
    email?: string | null;
    name?: string | null;
    roles?: UserRole[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    roles?: UserRole[];
  }
}

declare module "canonicalize";
