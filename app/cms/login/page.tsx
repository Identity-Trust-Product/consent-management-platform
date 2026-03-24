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
    <Button type="submit" className="w-full" disabled={pending}>
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
  const callbackUrl = searchParams.get("callbackUrl") || "/cms";
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
      toast.success("Success! Redirecting...", { description: state.message });
      router.push(callbackUrl);
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
      <div className="relative w-full max-w-md mx-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Logo/Brand Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative group transform hover:scale-105 transition-transform duration-300">
            <div className="relative bg-primary dark:bg-black/10 backdrop-blur-2xl border border-white/30 dark:border-white/20 p-8 rounded-2xl shadow-2xl">
              <div className="flex flex-col items-center gap-3">
                <img src={"/cms/lgw.webp"} width={150} alt="" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 font-medium">
            Consent Management Platform
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>

          <Form {...form}>
            <form action={formAction} className="space-y-5" noValidate>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="you@example.com"
                          type="email"
                          className="pl-10 h-11 border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 transition-colors"
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
                    <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10 pr-10 h-11 border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 transition-colors"
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
          <div className="relative w-full max-w-md mx-4">
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-2xl border border-white/30 dark:border-white/20 p-8 rounded-2xl shadow-2xl">
                  <div className="flex flex-col items-center gap-3">
                    <img src={"/cms/logo.png"} width={150} alt="" />
                    <h1 className="text-4xl font-bold text-slate-800 dark:text-white tracking-tight">
                      Privy
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8">
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
