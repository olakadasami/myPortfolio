export const fetchExperiences = async () => {
  const token = import.meta.env.PUBLIC_STRAPI_API_TOKEN;
  const BASE_URL = import.meta.env.PUBLIC_STRAPI_URL;

  const res = await fetch(`${BASE_URL}/api/experiences`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};
