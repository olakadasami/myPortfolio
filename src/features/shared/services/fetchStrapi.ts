import { z, ZodSchema } from "zod";

const token = import.meta.env.PUBLIC_STRAPI_API_TOKEN;
const BASE_URL = import.meta.env.PUBLIC_STRAPI_URL;

export const fetchStrapi = <T extends z.ZodTypeAny>(url: string, schema: T) => {
  return async (): Promise<z.infer<T>> => {
    const res = await fetch(`${BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
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
