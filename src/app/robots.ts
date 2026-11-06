import type { MetadataRoute } from "next";

// Demo site — disallow everything so this preview/demo build is never indexed.
// Remove this restriction only once the venue owns this build and it launches
// on its own domain.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
