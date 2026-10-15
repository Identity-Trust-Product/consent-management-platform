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
  KeyRound,
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
      className="h-12 w-full rounded-lg bg-[#0b3a9a] text-base font-semibold shadow-[0_14px_28px_-16px_rgba(11,58,154,0.65)] transition-all hover:bg-[#07287c] hover:shadow-[0_18px_34px_-18px_rgba(11,58,154,0.75)]"
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
    <main className="relative min-h-screen overflow-hidden bg-[#f7f9fc] text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(224,240,253,0.9)_0%,rgba(255,255,255,0.92)_42%,rgba(230,249,221,0.72)_100%)] dark:bg-[linear-gradient(115deg,rgba(8,20,53,0.98)_0%,rgba(15,23,42,0.98)_55%,rgba(10,47,50,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,58,154,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,58,154,0.12)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.36] dark:opacity-[0.16]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#0b3a9a] via-[#007fad] to-[#1a7a1e]" />

      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.03fr_0.97fr] lg:px-12">
        <div className="mx-auto w-full max-w-2xl space-y-8 lg:mx-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-sm font-semibold text-[#0b3a9a] shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-blue-100">
            <KeyRound className="h-4 w-4" />
            Trusted consent operations
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-[clamp(2.2rem,5.2vw,4.9rem)] font-black leading-[0.98] tracking-normal text-[#09132a] dark:text-white">
              Consent Management Platform
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Access your workspace for consent lifecycle management, evidence
              capture, privacy requests, and governance reporting.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-lg border border-white/75 bg-[rgba(255,255,255,0.78)] p-4 shadow-[0_20px_45px_-34px_rgba(15,23,42,0.65)] backdrop-blur dark:border-white/10 dark:bg-white/10"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-[#ebf6fe] text-[#0b3a9a] dark:bg-white/10 dark:text-blue-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-sm font-bold text-slate-950 dark:text-white">
                    {feature.title}
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[520px] animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="rounded-lg border border-white/80 bg-[rgba(255,255,255,0.82)] p-2 shadow-[0_30px_80px_-36px_rgba(7,40,124,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-[rgba(15,23,42,0.78)]">
            <div className="rounded-md border border-slate-200/80 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-slate-950/70 sm:p-9">
              <div className="mb-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#09132a] text-white shadow-lg shadow-slate-900/20 dark:bg-white dark:text-[#09132a]">
                  <Lock className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black tracking-normal text-slate-950 dark:text-white">
                  Welcome back
                </h2>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
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
                        <FormLabel className="text-sm font-bold text-slate-700 dark:text-slate-200">
                          Email address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                            <Input
                              placeholder="you@example.com"
                              type="email"
                              autoComplete="email"
                              className="h-12 rounded-lg border-slate-300 bg-white pl-11 text-base shadow-none transition-colors focus-visible:border-[#1766d6] focus-visible:ring-[#a1d1fa]/70 dark:border-slate-700 dark:bg-slate-900 dark:focus-visible:border-blue-300"
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
                        <FormLabel className="text-sm font-bold text-slate-700 dark:text-slate-200">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                              autoComplete="current-password"
                              className="h-12 rounded-lg border-slate-300 bg-white pl-11 pr-12 text-base shadow-none transition-colors focus-visible:border-[#1766d6] focus-visible:ring-[#a1d1fa]/70 dark:border-slate-700 dark:bg-slate-900 dark:focus-visible:border-blue-300"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a1d1fa] dark:hover:bg-white/10 dark:hover:text-slate-100"
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

              <div className="mt-7 border-t border-slate-200 pt-5 dark:border-white/10">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#1a7a1e]" />
                    Secure session
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BadgeCheck className="h-4 w-4 text-[#007fad]" />
                    Transparent audit
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FileCheck2 className="h-4 w-4 text-[#0b3a9a]" />
                    Compliance ready
                  </span>
                </div>
              </div>
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
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f9fc] dark:bg-slate-950">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(224,240,253,0.9)_0%,rgba(255,255,255,0.92)_42%,rgba(230,249,221,0.72)_100%)] dark:bg-[linear-gradient(115deg,rgba(8,20,53,0.98)_0%,rgba(15,23,42,0.98)_55%,rgba(10,47,50,0.94)_100%)]" />
          <div className="relative mx-4 w-full max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-normal text-[#09132a] dark:text-white">
                Consent Management Platform
              </h1>
            </div>
            <div className="mx-auto max-w-xl rounded-lg border border-white/80 bg-[rgba(255,255,255,0.82)] p-12 shadow-[0_30px_80px_-36px_rgba(7,40,124,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-[rgba(15,23,42,0.78)]">
              <div className="flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#0b3a9a]" />
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
