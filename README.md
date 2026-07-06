# Mohammed Husseiny — Online Fitness Coach

Landing page for certified online coach Mohammed Husseiny. Built with React, Vite, Tailwind CSS v4, and shadcn/ui.

## Prerequisites

- Node.js 22+

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

The build output goes to `dist/` (static HTML/CSS/JS — deploy-ready).

## Preview Production Build

```bash
npm run preview
```

## Deploy

### Vercel (Recommended)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repo.
3. Vercel auto-detects the build settings from `vercel.json`.

**Manual CLI deploy:**

```bash
npm install -g vercel
vercel
```

This is a static SPA — all images are served from Cloudinary CDN. No environment variables are required.

## Project Structure

```
src/
├── components/      # shadcn/ui components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions + asset URL map
├── pages/           # Page components
│   └── Landing.tsx  # Landing page (all sections)
├── App.tsx          # App shell with React Router
├── main.tsx         # React entry point
└── styles.css       # Tailwind CSS + design tokens
```

## Tech Stack

- **React 19** + TypeScript
- **Vite** (build tool)
- **React Router v6** (routing)
- **Tailwind CSS v4**
- **shadcn/ui** (Radix primitives)
- **Framer Motion** (animations)
- **Lucide React** (icons)
