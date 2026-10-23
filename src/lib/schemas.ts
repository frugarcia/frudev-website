import { z } from "zod";

export const PROJECT_TYPES = [
  "management",
  "web",
  "apps",
  "ai",
  "apis",
  "automation",
  "cloud",
  "maintenance",
  "other",
] as const;

export const BUDGETS = ["lt3k", "3to10k", "10to25k", "gt25k", "unknown"] as const;

export const TIMELINES = ["asap", "1to3m", "3to6m", "flexible"] as const;

export type QuoteErrorKey =
  "projectType" | "budget" | "timeline" | "name" | "email" | "phone" | "message" | "privacy";

const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

export const quoteSchema = z.object({
  projectTypes: z.array(z.enum(PROJECT_TYPES)).min(1, { error: "projectType" }),
  budget: z.enum(BUDGETS, { error: "budget" }),
  timeline: z.enum(TIMELINES, { error: "timeline" }),
  name: z.string().trim().min(2, { error: "name" }).max(100, { error: "name" }),
  email: z.email({ error: "email" }).max(200, { error: "email" }),
  company: optionalText(120),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+()\d\s.-]*$/, { error: "phone" })
    .optional(),
  message: z.string().trim().min(20, { error: "message" }).max(4000, { error: "message" }),
  privacy: z.boolean().refine((value) => value, { error: "privacy" }),
  website: z.string().optional(),
});

export type QuoteInput = z.input<typeof quoteSchema>;
export type QuoteData = z.output<typeof quoteSchema>;

export const QUOTE_STEPS = [
  { key: "type", fields: ["projectTypes"] },
  { key: "scope", fields: ["budget", "timeline"] },
  { key: "contact", fields: ["name", "email", "company", "phone", "message", "privacy"] },
] as const satisfies ReadonlyArray<{ key: string; fields: ReadonlyArray<keyof QuoteInput> }>;
