# My Portfolio

A modern personal portfolio inspired by [sakshamdev.netlify.app](https://sakshamdev.netlify.app/), built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Sections

- Hero with animated intro
- Overview (about + highlight cards)
- Work Experience timeline
- Skills grid
- Projects showcase
- Testimonials
- Contact form

## Customize Your Content

Edit **`src/data/index.ts`** to update:

- Name, title, tagline, email, social links
- Work experience and education
- Skills list
- Projects (including your Employee Database repo)
- Testimonials

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Netlify

1. Push this folder to a GitHub repository
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Build command: `npm run build`
4. Publish directory: `.next` (Netlify auto-detects Next.js)

Your site will be live at `yourname.netlify.app`.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React icons
