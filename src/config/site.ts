// Central venue configuration.
//
// The venue's data lives in ./site.data.ts (the one file the site builder
// rewrites). This module re-exports it as SITE and adds derived helpers used by
// the components, layout metadata, sitemap, robots, and manifest.

import { SITE_DATA } from "./site.data";

export const SITE = SITE_DATA;

// ---- Derived helpers (computed once from SITE; don't edit by hand) ----

const words = SITE.name.trim().split(/\s+/);

/** Two-letter monogram, e.g. "The Schäffler" -> "TS". */
export const brandInitials = words
  .map((w) => w[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

/** First word of the name, for the stacked brand lockup. */
export const brandTop = words[0];
/** Remaining words of the name, for the stacked brand lockup. */
export const brandBottom = words.slice(1).join(" ") || words[0];

/** Phone in tel: form, e.g. "(810) 358-4251" -> "+18103584251". */
export const phoneTel = (() => {
  const digits = SITE.phone.replace(/\D/g, "");
  if (!digits) return "";
  return digits.length === 10 ? `+1${digits}` : `+${digits}`;
})();

/** Single-line address, e.g. "281 Heinlein Strasse, Frankenmuth, MI 48734". */
export const addressOneLine = [
  SITE.address.street,
  `${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`.trim(),
]
  .filter(Boolean)
  .join(", ");

/** Google Maps directions link for the venue address. */
export const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(addressOneLine)}`;

/** Google Maps embed URL (no API key required) for the venue address. */
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(addressOneLine)}&output=embed`;

export const logoUrl = `${SITE.url.replace(/\/$/, "")}/logo.png`;
export const ogImageUrl = "/og-image.jpg";
