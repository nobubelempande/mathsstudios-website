# MathsStudios Website

Private tutoring centre website for MathsStudios, Randburg, Johannesburg.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS-in-JS (inline styles) + Tailwind CSS utilities
- **Fonts**: Merriweather (headings) + Nunito (body) via Google Fonts

## Project Structure

```
mathsstudios/
├── app/
│   ├── globals.css          # CSS custom properties (design tokens)
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Home page — imports all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Responsive nav with mobile drawer
│   │   └── Footer.tsx       # Full footer with CTA band + columns
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with dark overlay + CTAs
│   │   ├── CurriculaStrip.tsx  # Green curricula badge strip
│   │   ├── Why.tsx          # Features grid + testimonials
│   │   ├── Subjects.tsx     # Subject cards grid + CTA
│   │   └── Location.tsx     # Contact info + Google Maps embed
│   └── ui/
│       ├── Logo.tsx         # Reusable logo component
│       └── Button.tsx       # Reusable button with variants
├── lib/
│   └── constants.ts         # All site data (content, links, subjects)
└── public/
    └── logo.svg             # MathsStudios SVG logo
```
https://github.com/nobubelempande/mathsstudios-website.git
## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding New Sections

1. Create a new component in `components/sections/MySection.tsx`
2. Add any static data to `lib/constants.ts`
3. Import and render it in `app/page.tsx`

## Adding New Pages

1. Create a folder in `app/` e.g. `app/about/`
2. Add a `page.tsx` inside it
3. Import `Navbar` and `Footer` from `components/layout/`

## Deployment (Cloudflare Pages)

For static export, uncomment `output: "export"` in `next.config.ts`, then:

```bash
npm run build
```

Upload the `out/` folder to Cloudflare Pages, or connect your GitHub repo directly.
