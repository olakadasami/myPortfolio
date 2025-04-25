import { env } from "../../config/env";

export const fetchProjects = async () => {
  const res = await fetch(`${env.PUBLIC_STRAPI_URL}/api/projects`, {
    headers: {
      Authorization: `Bearer ${env.PUBLIC_STRAPI_API_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};
