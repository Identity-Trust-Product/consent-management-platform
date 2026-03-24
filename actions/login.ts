"use server";
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

import { signIn } from "@/auth";
import { loginFormSchema } from "@/lib/validators";

type FormState = {
  success: boolean;
  message: string;
  callbackUrl?: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
};

export async function login(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = loginFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { success: true, message: "Login successful!" };
  } catch (error) {
    console.error("Login Error:", error);

    // Check if it's an authentication error
    if (
      error &&
      typeof error === "object" &&
      "type" in error &&
      error.type === "CredentialsSignin"
    ) {
      return {
        success: false,
        message: "Invalid email or password.",
        errors: {
          email: ["Invalid email or password."],
        },
      };
    }

    return {
      success: false,
      message: "An internal error occurred. Please try again later.",
    };
  }
}
