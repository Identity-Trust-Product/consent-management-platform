import { z } from "zod";

const textValue = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const section = z.object({
  heading: z.string(),
  rows: z.array(z.object({ label: z.string(), value: textValue })).optional(),
  table: z.object({
    columns: z.array(z.string()),
    rows: z.array(z.union([z.array(textValue), z.record(z.string(), textValue)])),
  }).optional(),
  items: z.array(z.string()).optional(),
}).superRefine((value, context) => {
  if ([value.rows, value.table, value.items].filter((value) => value !== undefined).length !== 1) {
    context.addIssue({ code: "custom", message: "Section must contain exactly one of rows, table or items" });
  }
});

export const dxpDisplaySchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  sections: z.array(section),
});
export type DxpDisplay = z.infer<typeof dxpDisplaySchema>;

export function readDxpDisplay(rawBody: Uint8Array): DxpDisplay | null {
  try {
    const body = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(rawBody));
    const result = dxpDisplaySchema.safeParse(body?.display);
    return result.success ? result.data : null;
  } catch {
    return null;
  }
}
