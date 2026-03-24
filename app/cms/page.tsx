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

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth-utils";
import { ArrowRight, Cookie, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome to Open Bharart Digital Consent</h1>
            <div className="mt-4 py-2">
              <p className="mb-4">Please sign in to continue</p>
              <Link href="/cms/login">
                <Button className="w-full">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-8 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-tl from-background via-teal-500/5 to-background animate-gradient-reverse" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative w-full max-w-6xl space-y-10 z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Welcome to Privy
          </h1>
          <p className="text-2xl text-muted-foreground font-medium">
            Hello, <span className="text-foreground">{user.name || user.email}</span>!
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Choose your workspace to manage privacy and compliance across your organization
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Consent Management Card */}
          <Link href="/cms/data-fiduciary/business-units" className="group">
            <Card className="relative h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.03] border-2 hover:border-primary overflow-hidden bg-card/50 backdrop-blur-sm">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="relative p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                    Consent Management
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Manage consent lifecycles, privacy notices, data processing
                    activities, and user consent records with comprehensive RBAC
                    controls.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Cookie Manager Card */}
          <Link
            href="/cms/cookie-manager/dashboard/"
            target="_blank"
            className="group"
          >
            <Card className="relative h-full transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:scale-[1.03] border-2 hover:border-teal-500 overflow-hidden bg-card/50 backdrop-blur-sm">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="relative p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Cookie className="h-8 w-8 text-teal-500" />
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-teal-500 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold group-hover:text-teal-500 transition-colors duration-300">
                    Cookie Manager
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Configure cookie consent banners, manage cookie categories,
                    scan websites for cookies, and ensure compliance with
                    privacy regulations.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-teal-500">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
            <span className="text-xs text-muted-foreground">
              Need help? Contact your system administrator
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
