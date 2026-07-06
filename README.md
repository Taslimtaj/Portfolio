# Taslim — Portfolio

Personal portfolio website showcasing my work as a **Backend Engineer, DevOps & AI** professional.

**Repository:** [https://github.com/Taslimtaj/Portfolio](https://github.com/Taslimtaj/Portfolio)

---

## About

I'm Taslim, a Backend Engineer and DevOps professional at **Ola** (Feb 2022 – Present), with prior experience as an **SDET** at **Test Yantra** (2019 – 2022). I hold a **Master's in Computer Science** (2022).

I build scalable backend systems, automate deployments, and integrate **Agentic AI** and **LLM-powered** workflows into production platforms — using Java, Spring Boot, Kubernetes, Marathon, Grafana, Prometheus, RAG pipelines, and cloud-native tooling.

---

## Live Demo

After deploying to Netlify or Vercel, add your live URL here.

---

## Features

| Section | Description |
|--------|-------------|
| **Hero** | Intro, title, tagline, and social links |
| **Overview** | About me with Backend, DevOps, Agentic AI, and LLM/RAG highlights |
| **Experience** | Timeline — Ola, Test Yantra, and education |
| **Skills** | Backend, DevOps, Testing, and AI / Agentic categories |
| **Projects** | Featured work with GitHub links |
| **Testimonials** | Recommendations |
| **Contact** | Form that opens email to `tashuguddadamane@gmail.com` |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React + custom SVG social icons

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
git clone https://github.com/Taslimtaj/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## Customize Content

All portfolio content lives in a single config file:

```
src/data/index.ts
```

Update your name, experience, skills, projects, email, and social links there — no need to edit individual components.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout & metadata
│   ├── page.tsx        # Home page (all sections)
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx
│   ├── Overview.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── FloatingNav.tsx
│   └── ScrollProgress.tsx
├── data/
│   └── index.ts        # All portfolio content
└── lib/
    └── utils.ts
```

---

## Deploy

### Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select `Taslimtaj/Portfolio`
4. Netlify auto-detects Next.js — deploy

### Vercel

1. Go to [vercel.com](https://vercel.com) → **Import Project**
2. Connect `Taslimtaj/Portfolio`
3. Deploy

---

## Contact

- **Email:** [tashuguddadamane@gmail.com](mailto:tashuguddadamane@gmail.com)
- **LinkedIn:** [taslim-guddadamane-618362b5](https://www.linkedin.com/in/taslim-guddadamane-618362b5)
- **GitHub:** [Taslimtaj](https://github.com/Taslimtaj)

---

## License

This project is open source and available for personal portfolio use.
