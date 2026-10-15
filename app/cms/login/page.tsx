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

import { useActionState, useEffect, Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  BadgeCheck,
  Eye,
  EyeOff,
  FileCheck2,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { loginFormSchema } from "@/lib/validators";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { login } from "@/actions/login";

type FormState = {
  success: boolean;
  message: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
};

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

const trustFeatures = [
  {
    title: "Transparent",
    description: "Clear consent records and auditable user activity.",
    icon: BadgeCheck,
  },
  {
    title: "Secure",
    description: "Protected access with encrypted credential handling.",
    icon: ShieldCheck,
  },
  {
    title: "Compliant",
    description: "Built for accountable privacy and governance workflows.",
    icon: FileCheck2,
  },
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="h-12 w-full rounded-xl bg-primary text-base font-semibold shadow-sm hover:bg-primary-600"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing In...
        </>
      ) : (
        "Sign In"
      )}
    </Button>
  );
}

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedCallbackUrl = searchParams.get("callbackUrl");
  const callbackUrl =
    !requestedCallbackUrl || requestedCallbackUrl === "/cms"
      ? "/cms/data-fiduciary/dashboard"
      : requestedCallbackUrl;
  const [state, formAction] = useActionState(login, initialState);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (state.success) {
      toast.success("Login successful", {
        description: state.message || "Redirecting to your dashboard...",
        duration: 2200,
        classNames: {
          toast:
            "min-w-[360px] rounded-2xl border border-emerald-200 bg-white p-5 shadow-2xl",
          title: "text-lg font-bold text-emerald-800",
          description: "mt-1 text-base text-slate-600",
        },
      });

      const redirectTimer = window.setTimeout(() => {
        router.replace(callbackUrl);
      }, 1200);

      return () => window.clearTimeout(redirectTimer);
    } else {
      if (state.errors) {
        for (const [field, messages] of Object.entries(state.errors)) {
          if (messages && messages.length > 0) {
            form.setError(field as keyof z.infer<typeof loginFormSchema>, {
              type: "server",
              message: messages[0],
            });
          }
        }
      } else if (state.message) {
        toast.error("Error", { description: state.message });
      }
    }
  }, [state, form, callbackUrl, router]);

  return (
    <main className="cms-theme min-h-screen bg-background text-foreground">
      <section className="grid min-h-screen w-full lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col justify-center gap-8 bg-sidebar px-6 py-12 text-white sm:px-12 lg:px-16">
          {/* <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-sm font-bold">CM</span>
            <span className="text-lg font-semibold">Consent Management System</span>
          </div> */}

          <div className="space-y-5">
            <h1 className="max-w-xl text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
              Consent Management System
            </h1>
            <p className="max-w-xl text-lg leading-8 text-sidebar-foreground">
              A framework for capturing, governing and auditing user consent. Built for regulatory
              compliance, transparency and user trust.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-xl border border-sidebar-border bg-white/5 p-4"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-blue-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-sm font-bold text-white">
                    {feature.title}
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-sidebar-foreground">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[600px] items-center px-5 py-12 sm:px-10">
          <div className="w-full rounded-2xl border border-border bg-card shadow-sm">
            <div className="p-7 sm:p-9">
              <div className="mb-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <Lock className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Welcome back
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Sign in with your authorized CMP account.
                </p>
              </div>

              <Form {...form}>
                <form action={formAction} className="space-y-5" noValidate>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Email address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                            <Input
                              placeholder="you@example.com"
                              type="email"
                              autoComplete="email"
                              className="h-12 rounded-xl border-input bg-white pl-11 text-base shadow-none focus-visible:border-primary focus-visible:ring-ring/50"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                              autoComplete="current-password"
                              className="h-12 rounded-xl border-input bg-white pl-11 pr-12 text-base shadow-none focus-visible:border-primary focus-visible:ring-ring/50"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              aria-label={
                                showPassword ? "Hide password" : "Show password"
                              }
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <SubmitButton />
                </form>
              </Form>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden cms-theme bg-background">
          <div className="relative mx-4 w-full max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight text-foreground">
                Consent Management Platform
              </h1>
            </div>
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-12 shadow-sm">
              <div className="flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            </div>
          </div>
        </main>
      }
    >
      <LoginFormContent />
    </Suspense>
  );
}
