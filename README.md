# The Schäffler — Frankenmuth, MI

Demo website for The Schäffler, a wedding and event venue in Frankenmuth,
Michigan (formerly known as Sullivan's Black Forest).

Built by Pastor Eli — **[elijahdesent.com](https://www.elijahdesent.com)**.

## Run it locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # production build
npm start       # serve the build
```

## Tech stack

- Next.js (App Router), React, TypeScript
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)

## Notes

- Venue details (name, address, phone, Facebook link) live in
  `src/config/site.data.ts`.
- This is a demo build: `robots.ts` and the page metadata keep it out of
  search results, and a tracking snippet in `src/app/layout.tsx` reports
  demo views back to the CRM. Both should be removed if this site goes live
  on its own domain.
- The reservation form on `/reserve` is a front-end demo only; it is not yet
  wired to send email or texts.
- Gallery imagery is a design placeholder until real venue photos are
  supplied and uploaded.
