// Venue data — the ONLY file the self-serve site builder rewrites.
//
// Every component, the layout metadata, sitemap, robots, and manifest read this
// (via site.ts, which adds derived helpers). Edit these values to customize the
// site; leave the helpers in site.ts alone.

export const SITE_DATA = {
  name: "The Schäffler",
  // Short name for the PWA manifest / home-screen icon.
  shortName: "The Schäffler",
  tagline: "A Storied Frankenmuth Venue, Reimagined",
  description:
    "The Schäffler is a wedding and event venue in Frankenmuth, Michigan — a new chapter for the gathering place long known as Sullivan's Black Forest. Explore the space, discover its story, and request a private tour for your celebration.",
  shortDescription:
    "A wedding and event venue in Frankenmuth, Michigan, formerly known as Sullivan's Black Forest.",
  url: "https://theschaffler.com",

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
