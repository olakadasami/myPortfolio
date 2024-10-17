import { z } from "zod";
import { StrapiResponseSchema } from "../shared/strapi.schema";

export const ExperienceSchema = z.object({
  id: z.number(), // Strapi usually includes an id field
  companyName: z.string(),
  companyLink: z.string().url(), // Ensures it's a valid URL
  description: z.string().nullable(), // Handles null values
  contributions: z.array(z.string()), // Array of strings for contributions
  startDate: z.string(), // ISO date format from API as string
  endDate: z.string().nullable(), // Nullable date as string
  jobTitle: z.string(),
  createdAt: z.string(), // Timestamps as strings (ISO format)
  updatedAt: z.string(),
  publishedAt: z.string(),
  documentId: z.string(), // Assuming documentId is a string
  locale: z.string().nullable(), // Nullable locale field
});

// Infer the type from the Zod schema (optional, but useful for TypeScript)
export type TExperience = z.infer<typeof ExperienceSchema>;

// Create a reusable Strapi response schema for the "Experience" model
export const ExperienceResponseSchema = StrapiResponseSchema(ExperienceSchema);

export type TExperienceResponse = z.infer<typeof ExperienceResponseSchema>;
