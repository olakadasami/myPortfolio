import { z } from "zod";

const envSchema = z.object({
  PUBLIC_STRAPI_API_TOKEN: z.string(),
  PUBLIC_STRAPI_URL: z.string().url(),
  PUBLIC_SCREENSHOT_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse({
  PUBLIC_STRAPI_API_TOKEN: import.meta.env.PUBLIC_STRAPI_API_TOKEN,
  PUBLIC_STRAPI_URL: import.meta.env.PUBLIC_STRAPI_URL,
  PUBLIC_SCREENSHOT_URL: import.meta.env.PUBLIC_SCREENSHOT_URL,
});
console.log(parsedEnv);
if (parsedEnv.error) {
  console.log(
    "❌ Invalid environment variables:",
    parsedEnv.error.flatten().fieldErrors
  );
  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
