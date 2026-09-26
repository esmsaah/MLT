# Muslim Liberation Theology

Website for *The Wiley Blackwell Companion to Muslim Liberation Theologies*,
edited by Emin Poljarević & Ivan Ejub Kostić.

Built with [Astro](https://astro.build) + Tailwind CSS. Content (essays and podcast
episodes) is edited through the Decap CMS admin panel at `/admin`.

## Develop
```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
```

## Deploy
Connected to Cloudflare Pages — every push to `main` rebuilds and publishes automatically.
Build command: `npm run build` · Output directory: `dist`

## Editing content
- Site-wide text, links, editors, ISBN, podcast/newsletter: `src/config.ts`
- Essays: `src/content/essays/` (or the `/admin` panel)
- Podcast episodes: `src/content/episodes/` (or the `/admin` panel)
- Book cover image: `public/cover.png`
