import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

const SITE_URL = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/reserve`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
