import { z } from "zod";
import { StrapiResponseSchema } from "../shared/strapi.schema";

export const ProjectSchema = z.object({
  id: z.number(), // Strapi usually includes an id field
  technologies: z.string(),
  liveUrl: z.string().url(), // Ensures it's a valid URL
  githubUrl: z.string().url().nullable(), // Ensures it's a valid URL
  description: z.string().nullable(), // Handles null values
  tag: z.string(),
  title: z.string(),
  createdAt: z.string(), // Timestamps as strings (ISO format)
  updatedAt: z.string(),
  publishedAt: z.string(),
  documentId: z.string(), // Assuming documentId is a string
  locale: z.string().nullable(), // Nullable locale field
});

// Infer the type from the Zod schema (optional, but useful for TypeScript)
export type TProject = z.infer<typeof ProjectSchema>;

// Create a reusable Strapi response schema for the "Project" model
export const ProjectResponseSchema = StrapiResponseSchema(ProjectSchema);

export type TProjectResponse = z.infer<typeof ProjectResponseSchema>;
