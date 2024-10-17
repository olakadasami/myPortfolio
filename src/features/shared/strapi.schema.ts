import { z } from "zod";
// Define the schema for pagination metadata
const PaginationSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  pageCount: z.number(),
  total: z.number(),
});

// Generic function to create the Strapi response schema
export const StrapiResponseSchema = <T extends z.ZodTypeAny>(modelSchema: T) =>
  z.object({
    data: z.array(modelSchema),
    meta: z.object({ pagination: PaginationSchema }),
  });
