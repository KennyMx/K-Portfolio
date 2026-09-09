# Kenny Mustapha — Portfolio

A responsive, illustrated portfolio built with React, TypeScript, and Vinext. Features selected projects, experience, an accessible mobile menu, reduced-motion support, and a downloadable résumé.

## Develop

Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
npx vercel --prod
```

Vercel is configured to publish the static `out` directory. Content is in `app/page.tsx`, styles are in `app/globals.css`, and the provided artwork and résumé are in `public/`.
