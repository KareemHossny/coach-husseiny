# Mohammed Husseiny — Online Fitness Coach

A production-ready landing page for certified online coach Mohammed Husseiny. Fully responsive, Arabic-first (RTL), and deployable as a static SPA.

<p align="start">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

## Features

- **Arabic-first design** — full RTL layout with Tajawal + Cairo typography
- **Interactive animations** — scroll-triggered reveals, animated counters, parallax hero, infinite marquee swipers
- **Mobile-optimized** — touch-friendly navigation with hamburger menu, fluid typography, responsive grids across all breakpoints
- **Performance** — static Vite build, lazy-loaded images, no runtime data fetching
- **Zero server dependencies** — no SSR, no API routes, no database

## Tech Stack

| Layer         | Choice                       |
| ------------- | ---------------------------- |
| Framework     | React 19 + TypeScript        |
| Bundler       | Vite 8                       |
| Routing       | React Router v6              |
| Styling       | Tailwind CSS v4              |
| UI Components | shadcn/ui (Radix primitives) |
| Animation     | Framer Motion                |
| Icons         | Lucide React                 |
| Image CDN     | Cloudinary                   |

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Commands

| Command           | Purpose                          |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Production build to `dist/`      |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                       |
| `npm run format`  | Format with Prettier             |

## Deploy

### Vercel (recommended)

1. Push the repository to GitHub / GitLab / Bitbucket.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel reads `vercel.json` and applies the correct build settings automatically.

No environment variables are required. All images are served from Cloudinary CDN with absolute URLs defined in `src/lib/assets.ts`.

### Any static host

The `dist/` directory produced by `npm run build` is a fully self-contained static site. Serve it with any HTTP server (NGINX, Cloudflare Pages, Netlify, etc.). Ensure all routes rewrite to `index.html` for client-side routing.

## Project Structure

```
src/
├── components/     # shadcn/ui component library
├── hooks/          # Custom React hooks
├── lib/            # Utilities, helper functions, asset URL map
│   └── assets.ts   # CDN image URL constants
├── pages/
│   └── Landing.tsx # Landing page (all sections)
├── App.tsx         # React Router shell
├── main.tsx        # Application entry point
└── styles.css      # Tailwind directives, design tokens, custom utilities
```

## Customization

### Images

All image URLs are defined in `src/lib/assets.ts`. Replace the Cloudinary URLs with your own CDN paths before building.

### Content

Each section of the landing page is a self-contained function component within `src/pages/Landing.tsx`:

- `Nav` — sticky header with transparent-to-solid scroll transition
- `Hero` — headline, CTAs, coach photo with parallax
- `Marquee` — scrolling word strip
- `Stats` — achievement counter cards
- `About` — coach profile with photo collage
- `Services` — feature grid
- `Transforms` — infinite carousel of client transformations
- `Testimonials` — infinite carousel of WhatsApp chat screenshots
- `Pricing` — three-tier pricing cards
- `FAQ` — accordion
- `FinalCTA` — closing call-to-action
- `Footer` — brand, links, contact, socials

### Styling

The design system lives in `src/styles.css`:

- All colors use `oklch()` format.
- The `@theme inline` block maps CSS variables to Tailwind utility classes.
- Custom utilities (`text-gradient`, `shadow-glow`, `noise-bg`) and keyframe animations (`marquee`, `marquee-rev`) are defined at the bottom of the file.

## License

All rights reserved. This project is proprietary and not licensed for redistribution.
