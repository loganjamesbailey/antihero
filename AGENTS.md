# AGENTS.md

KEEL is a clothing-brand storefront built with Next.js (App Router), React 19,
TypeScript and Tailwind CSS v4.

## Project shape

- App Router pages live in `src/app` (`/`, `/about`, `/collection`,
  `/product/[slug]`).
- The product catalogue is a static array in `src/lib/products.ts`. Product
  pages are statically generated from it via `generateStaticParams`.
- Brand design tokens (colours, fonts) are defined with Tailwind v4
  `@theme` in `src/app/globals.css` — there is no `tailwind.config` file.
  Fonts are wired through `next/font` in `src/app/layout.tsx`, exposed as the
  `--font-display` and `--font-sans` CSS variables.
- Garment imagery is intentionally a placeholder component
  (`src/components/GarmentVisual.tsx`); there are no binary image assets yet.

## Commands

See `README.md` for the canonical script list. In short: `npm run dev`
(port 3000), `npm run build`, `npm run start`, `npm run lint`.

## Cursor Cloud specific instructions

- Dependencies are installed by the startup update script (`npm install`); you
  do not need to install them again.
- Start the dev server with `npm run dev` (binds `http://localhost:3000`). Run
  it in a persistent tmux session, not a one-shot foreground command, so it
  survives the tool call.
- Brand voice for any copy you add: quiet, understated, "one idea said once" —
  no loud marketing language, no emoji, no exclamation. Match the existing tone
  in `src/lib/products.ts` and `src/app/about/page.tsx`.
- Tailwind is v4: utility classes are generated from the `@theme` tokens in
  `globals.css` (e.g. `bg-ink`, `text-bone`, `font-display`). Add new colours
  there rather than creating a `tailwind.config.*` file.
