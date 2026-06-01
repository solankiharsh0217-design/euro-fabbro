# Eurofabbro — Carpenteria metallica

Static site for Eurofabbro / Ferioli Sergio SRL — Bologna, Modena, Ferrara.

Built with Next.js 15 (App Router) + Tailwind CSS + Lucide icons, exported as fully static HTML.

## Stack

- **Next.js 15** (App Router, static export)
- **React 19**
- **Tailwind CSS 3.4**
- **Lucide React** icons
- **TypeScript 5**
- **Inter** + **Playfair Display** (Google Fonts)

## Pages

- `/` — Home
- `/cancelli` — Cancelli su misura
- `/inferriate` — Inferriate e grate di sicurezza
- `/recinzioni` — Recinzioni
- `/lavorazioni` — Catalogo lavorazioni
- `/carport` — Carport e pensiline
- `/automazione` — Automazioni cancelli
- `/perche-noi` — Perché sceglierci
- `/realizzazioni` — Portfolio
- `/detrazioni` — Detrazioni fiscali + calcolatore
- `/contatti` — Contatti + mappa
- `/landing/cancelli-recinzioni` — Landing page annunci
- `/landing/lavora-con-noi` — Landing page carriere

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build

```bash
npm run build        # outputs static files to ./out
```

The `out/` directory is the deployable artifact — pure HTML/CSS/JS, no server needed.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo in Vercel (https://vercel.com/new)
3. Vercel auto-detects Next.js — no config needed
4. Custom domain: add in Vercel dashboard → Settings → Domains

The included `vercel.json` is pre-configured for static export.

## Configuration

- `next.config.mjs` — `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`
- `tailwind.config.ts` — Custom `ef-*` color palette
- `.nvmrc` — Node 22
- `vercel.json` — Build + output settings

## Project structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (header, footer, fonts, SEO)
│   ├── page.tsx                # Home
│   ├── not-found.tsx           # 404
│   ├── globals.css             # Tailwind + custom component classes
│   ├── cancelli/               # Product pages
│   ├── inferriate/
│   ├── recinzioni/
│   ├── lavorazioni/
│   ├── carport/
│   ├── automazione/
│   ├── perche-noi/
│   ├── realizzazioni/
│   ├── detrazioni/
│   ├── contatti/
│   └── landing/
│       ├── cancelli-recinzioni/
│       └── lavora-con-noi/
├── components/
│   ├── Header.tsx              # Sticky nav with mobile drawer
│   ├── Footer.tsx              # 4-col footer with social/contact
│   ├── ContactForm.tsx         # Form + WhatsApp button
│   ├── FAQ.tsx                 # Accordion
│   ├── Sections.tsx            # Home page sections
│   └── ui.tsx                  # Container/Section/Heading primitives
└── lib/
    └── content.ts              # All site copy (Italian)
public/
└── images/                     # Static images
```

## Editing content

All copy lives in `src/lib/content.ts` — a single TypeScript file with typed exports.
No CMS, no external API. To edit text, change the values in this file and rebuild.
