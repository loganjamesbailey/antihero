# KEEL

> Steady, and pointed somewhere — same as the name.

A keel is the part of a boat you never see — the spine that runs below the
waterline. It does one quiet job: keep the whole thing upright and pointed where
it's going. KEEL is a clothing brand built on the same idea — quiet pieces, each
carrying one idea, said once. Worn for yourself, not for the room.

This repository contains the KEEL brand storefront, a [Next.js](https://nextjs.org)
(App Router) site styled with Tailwind CSS v4 and TypeScript.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **ESLint** (`next/core-web-vitals`, `next/typescript`)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the development server (port 3000) |
| `npm run build` | Create a production build                |
| `npm run start` | Serve the production build               |
| `npm run lint`  | Run ESLint                               |

## Structure

```
src/
  app/                 # App Router pages
    page.tsx           # Home — hero, manifesto, first pieces
    about/             # The story
    collection/        # Full lookbook grid
    product/[slug]/    # Individual product pages (SSG)
    globals.css        # Brand theme tokens (Tailwind v4 @theme)
  components/          # Header, footer, product card, garment visual
  lib/products.ts      # The product catalogue
```

## Notes

Product imagery is currently rendered as quiet tonal placeholders
(`GarmentVisual`) — swap these for real lookbook photography when shot.
