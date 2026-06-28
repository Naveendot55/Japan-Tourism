# 🌸 Japan Tourism — Cinematic Travel Landing Page

A scroll-driven, cinematic landing page for a curated Japan tour experience — built to feel like flipping through a travel scrapbook, with smooth parallax storytelling, a custom cursor, and polaroid-style photo/video moments.

**🔗 Live Demo:** [naveendot55.github.io/Japan-Tourism](https://naveendot55.github.io/Japan-Tourism/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008C?logo=framer&logoColor=white)
![Deployed](https://img.shields.io/badge/Deployed-GitHub_Pages-222?logo=github)

---

## ✨ Features

- **Scroll-driven storytelling** — Hero → About → What's Included → Contact, each section revealing with motion as you scroll
- **Buttery smooth scrolling** powered by [Lenis](https://github.com/darkroomengineering/lenis)
- **Custom animated cursor** for an immersive, app-like desktop feel
- **Polaroid-style photo & video clusters** — a vintage travel-scrapbook aesthetic for showcasing destinations
- **Glassmorphism cards** on a moody dark theme with a custom Tailwind color palette
- **Accessible, production-grade UI primitives** (accordion, dialog, dropdown, tooltip, etc.) via Radix UI
- **Validated contact form** using React Hook Form + Zod
- **Fully responsive** and respects `prefers-reduced-motion` for accessibility
- **Zero-touch deployment** — every push to `main` auto-builds and deploys via GitHub Actions

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Core** | React 19, TypeScript, Vite 7 |
| **Styling** | Tailwind CSS, `tailwindcss-animate`, custom design tokens |
| **UI Components** | Radix UI primitives + shadcn-style component library |
| **Animation** | Framer Motion, Lenis (smooth scroll) |
| **Forms & Validation** | React Hook Form, Zod |
| **Routing** | React Router v7 |
| **Icons / Carousel** | Lucide React, Embla Carousel |
| **Tooling** | ESLint, TypeScript (strict mode) |
| **CI/CD** | GitHub Actions → GitHub Pages |

## 📂 Project Structure

```
src/
├── components/        # Reusable building blocks
│   ├── ui/             # shadcn-style primitives (button, dialog, tabs, etc.)
│   ├── CustomCursor.tsx, CursorProvider.tsx
│   ├── ParallaxLayer.tsx, SectionReveal.tsx
│   ├── PolaroidCard.tsx, PolaroidStrip.tsx, PhotoCluster.tsx
│   └── Timeline.tsx, GlassCard.tsx, Navigation.tsx
├── sections/           # Page sections composed into the landing page
│   ├── HeroSection.tsx, AboutSection.tsx
│   ├── IncludedSection.tsx, ContactSection.tsx, Footer.tsx
├── pages/
│   └── Home.tsx
├── hooks/              # useCursor, useReducedMotion, use-mobile
└── lib/                # Shared utilities
```

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/naveendot55/Japan-Tourism.git
cd Japan-Tourism

# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment

This project auto-deploys to **GitHub Pages** on every push to `main` via the workflow in `.github/workflows/`. The build artifact (`dist/`) is generated with `vite build` and published using `actions/deploy-pages`.

## 🙋 About This Project

This was built as a hands-on exploration of modern frontend tooling — combining scroll-based animation, accessible component design, and a strong visual identity into a single cohesive experience. It's a great reference for anyone exploring React + Tailwind + Framer Motion landing pages.

## 📄 License

This project is open for learning and demonstration purposes.
