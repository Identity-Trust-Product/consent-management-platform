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
import { Loader2, Lock, Mail, Eye, EyeOff } from "lucide-react";
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

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="h-12 w-full rounded-xl bg-linear-to-r from-blue-700 to-indigo-700 text-base font-semibold shadow-md transition-all hover:from-blue-800 hover:to-indigo-800 hover:shadow-lg"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
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
      // Handle server-side validation errors
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
    <main className="relative flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 via-violet-50 to-fuchsia-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-400/20 dark:bg-violet-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-400/20 dark:bg-fuchsia-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-pink-300/15 dark:bg-pink-500/8 rounded-full blur-3xl animate-float"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>

        {/* Animated gradient meshes */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-indigo-300/20 to-purple-500/20 dark:from-indigo-500/10 dark:to-purple-700/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-linear-to-tl from-fuchsia-300/20 to-pink-500/20 dark:from-fuchsia-500/10 dark:to-pink-700/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 right-10 w-60 h-60 bg-linear-to-br from-violet-300/15 to-indigo-400/15 dark:from-violet-500/8 dark:to-indigo-600/8 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Login Card */}
      <div className="relative mx-4 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Brand Section */}
        <div className="mb-8 text-center">
          <h1 className="whitespace-nowrap bg-linear-to-r from-blue-950 via-blue-800 to-indigo-700 bg-clip-text text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold tracking-tight text-transparent dark:from-blue-200 dark:via-white dark:to-indigo-200">
            Consent Management Platform
          </h1>
        </div>

        {/* Login Form Card */}
        <div className="mx-auto max-w-xl space-y-8 rounded-3xl border border-white/80 bg-white/90 p-10 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-gray-700/50 dark:bg-slate-800/90 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Welcome Back
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>

          <Form {...form}>
            <form action={formAction} className="space-y-6" noValidate>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold text-gray-700 dark:text-gray-300">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="you@example.com"
                          type="email"
                          className="h-13 rounded-xl border-gray-300 pl-11 text-base transition-colors focus:border-blue-600 focus:ring-blue-500/20 dark:border-gray-600 dark:focus:border-blue-500"
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
                    <FormLabel className="text-base font-semibold text-gray-700 dark:text-gray-300">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="h-13 rounded-xl border-gray-300 pr-11 pl-11 text-base transition-colors focus:border-blue-600 focus:ring-blue-500/20 dark:border-gray-600 dark:focus:border-blue-500"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, -15px) scale(1.05);
          }
          50% {
            transform: translate(-15px, 10px) scale(0.95);
          }
          75% {
            transform: translate(15px, 15px) scale(1.02);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-20px, 15px) scale(1.08);
          }
          66% {
            transform: translate(15px, -20px) scale(0.92);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, -20px) rotate(5deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1) rotate(3deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 30s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="relative flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="relative mx-4 w-full max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="whitespace-nowrap bg-linear-to-r from-blue-950 via-blue-800 to-indigo-700 bg-clip-text text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold tracking-tight text-transparent dark:from-blue-200 dark:via-white dark:to-indigo-200">
                Consent Management Platform
              </h1>
            </div>
            <div className="mx-auto max-w-xl rounded-3xl border border-white/80 bg-white/90 p-12 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-gray-700/50 dark:bg-slate-800/90">
              <div className="flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
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
