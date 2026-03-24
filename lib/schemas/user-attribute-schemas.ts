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

import { z } from "zod";

export const userAttributeSchema = z.object({
  name: z.string().min(3, "Name should be atleast 3 characters long"),
  pii: z.boolean(),
});

export const userAttributeUpdateSchema = z.object({
  name: z.string().min(3, "Name should be atleast 3 characters long"),
  pii: z.boolean(),
});

export type UserAttributeFormSchema = z.infer<typeof userAttributeSchema>;
export type UserAttributeUpdateData = z.infer<typeof userAttributeUpdateSchema>;

export type UserAttribute = {
  id: number;
  name: string;
  pii: boolean;
  supportedLanguages: string[];
  createdAt: Date;
  updatedAt: Date;
};
