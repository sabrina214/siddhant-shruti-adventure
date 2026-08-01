# Siddhant & Shruti — Our Little Adventure

An interactive romantic journey built with React, TypeScript and CSS.

## The three files you will edit most

- `app/content.ts` — dates, stories, photo/video paths and song paths.
- `public/media/` — put your actual photos, videos and MP3 files here.
- `app/globals.css` — colours, animation timing, layouts and cursor styling.

The page structure and interaction logic live in `app/page.tsx`.

## Add a photo or video

See `public/media/README.md` for copy-paste examples. In short: add the file to
`public/media`, then replace the matching `null` inside `app/content.ts`.

## Change the cute cursor

Each section in `app/page.tsx` has `data-cursor` and `data-cursor-label`:

```tsx
<section data-cursor="🌻" data-cursor-label="pluck me">
```

Change the emoji or label there. Change the bubble design under
`.cute-cursor` in `app/globals.css`.

## Run locally

Install Node.js 22+, then:

```bash
npm install
npm run dev
```

Open the local address printed in the terminal. Use `npm run build` before
publishing to verify that the site compiles.

## Publish from GitHub

Push this folder to a GitHub repository. For the simplest public deployment,
import that repository into Vercel and keep its default build settings. Each
later push to the main branch will update the public website automatically.

Do not upload copyrighted song files to a public repository unless you have
permission. A private repository can still be connected to Vercel.
