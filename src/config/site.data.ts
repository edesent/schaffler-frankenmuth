// Venue data — the ONLY file the self-serve site builder rewrites.
//
// Every component, the layout metadata, sitemap, robots, and manifest read this
// (via site.ts, which adds derived helpers). Edit these values to customize the
// site; leave the helpers in site.ts alone.

export const SITE_DATA = {
  name: "The Schäffler",
  // Short name for the PWA manifest / home-screen icon.
  shortName: "The Schäffler",
  tagline: "An Elegant Wedding & Event Venue in Frankenmuth, Michigan",
  description:
    "The Schäffler is a wedding and event venue in Frankenmuth, Michigan — the reintroduction of the venue long known as Sullivan's Black Forest. Reach out to check availability and request pricing for your wedding day, reception, or private event.",
  shortDescription:
    "A wedding and event venue in Frankenmuth, Michigan, formerly known as Sullivan's Black Forest.",
  url: "https://schaffler-frankenmuth.elijahdesent.com",

  // What this venue was known as for years before reopening under this name.
  formerName: "Sullivan's Black Forest",

  // Contact — no public office email was available at build time, so the
  // contact methods are phone, the inquiry form, and Facebook.
  phone: "(810) 358-4251",
  email: "",
  address: {
    street: "281 Heinlein Strasse",
    city: "Frankenmuth",
    state: "MI",
    zip: "48734",
  },

  // Social (leave blank to hide the link)
  facebookUrl: "https://www.facebook.com/profile.php?id=61594621417698",
  instagramUrl: "",

  // Theme
  themeColorDark: "#2b2420",
  backgroundColor: "#fffbf4",
} as const;
