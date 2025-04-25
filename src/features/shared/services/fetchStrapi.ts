import { z, ZodSchema } from "zod";
import { env } from "../../../config/env";

export const fetchStrapi = <T extends z.ZodTypeAny>(url: string, schema: T) => {
  return async (): Promise<z.infer<T>> => {
    const res = await fetch(`${env.PUBLIC_STRAPI_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${env.PUBLIC_STRAPI_API_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();

    // Validate and parse the response with the reusable schema
    return schema.parse(data);
  };
};
