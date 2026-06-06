# Andrew Attieh — Portfolio

A single-page, dark-themed personal portfolio for **Andrew Attieh**, Software Engineer and freelance web & mobile developer based in Beirut, Lebanon.

Built with **Vite + React + TypeScript + Tailwind CSS** with shadcn-style UI components, `lucide-react` icons, and Framer Motion animations.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Deployment

Deploys to **Vercel** out of the box — import the GitHub repo into Vercel and it picks up `vercel.json` automatically (build command `npm run build`, output directory `dist`, SPA rewrites configured).

## Editing content

All section content lives in typed data arrays in [`src/data/portfolio.ts`](src/data/portfolio.ts) — update services, experience, skills, projects, education, and contact details there without touching component markup.

## Placeholders to replace

Search the project for `PLACEHOLDER` to find values to fill in:

- GitHub profile URL (hero, contact, footer)
- Hosted resume link (hero, contact)
- Project cover images and GitHub/Live links
- Open Graph image (`public/og-image.png`)
- Profile photo (`public/profile.jpg`)
