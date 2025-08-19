export const SITE = {
  title: "Mi sitio",
  baseUrl: import.meta.env.PUBLIC_BASE_URL || "http://localhost/",
  apiBase: import.meta.env.PUBLIC_API_BASE || "http://localhost/wp-json",
  social: {
    linkedin: import.meta.env.PUBLIC_LINKEDIN || "",
  },
};

export type SiteConfig = typeof SITE;