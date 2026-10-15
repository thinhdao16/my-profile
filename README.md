# Dao Duc Thinh — Full-stack Developer Portfolio

> Modern, high-performance developer portfolio built with **Next.js 15 (App Router)** and **React 19**, showcasing 4+ years of expertise in .NET 8, React, TypeScript, scalable cloud microservices, and modern web applications.

![Preview](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop)

---

## ⚡ Tech Stack & Architecture

- **Core Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components + Client Islands)
- **UI Library**: [React 19](https://react.dev/)
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/) (Smooth accordions, tickers, floating dock, modal scaling)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive FX**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) (Email celebration)
- **Typography**: `next/font/google` self-hosted zero-layout-shift fonts:
  - *Instrument Serif* (italic editorial titles)
  - *Rubik* (modern clean body font)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
thinh-portfolio/
├── app/
│   ├── layout.tsx               # Root layout, Google Fonts (Instrument Serif + Rubik), OpenGraph metadata & SEO
│   ├── page.tsx                 # Main entry page assembling modular sections
│   └── globals.css              # Tailwind layers, smooth scroll, hatched stripes
├── components/
│   ├── sections/
│   │   ├── Header.tsx           # Banner, avatar monogram, social pills with confetti copy
│   │   ├── About.tsx            # Core architectural summary & highlight cards
│   │   ├── Experience.tsx       # Collapsible accordion with company badges, dates & stack
│   │   ├── TechStack.tsx        # Dual-row infinite marquee ticker with gradient fades
│   │   ├── Projects.tsx         # Numbered project showcase with hover animations
│   │   ├── ProjectModal.tsx     # Deep-dive architecture & impact modal dialog
│   │   ├── ActivityCalendar.tsx # 52-week GitHub contribution heatmap with tooltips
│   │   ├── EducationCertificates.tsx # University degree & Google/IBM certifications
│   │   └── ContactCTA.tsx       # "Let's build something remarkable" CTA section
│   ├── navigation/
│   │   └── FloatingNav.tsx      # Fixed bottom glassmorphism dock
│   └── layout/
│       ├── Footer.tsx           # Copyright, timezone & back-to-top button
│       └── SideHatchBands.tsx   # Diagonal hatched side pattern borders
├── data/
│   └── cv-data.ts               # Centralized structured data extracted from CV
├── types/
│   └── index.ts                 # TypeScript interfaces for experience, projects, skills
├── public/
│   └── Dao_Duc_Thinh_CV.pdf     # Downloadable original CV PDF
├── next.config.ts               # Next.js 15 configuration
├── tailwind.config.ts           # Tailwind theme & font tokens
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript path aliases (@/*)
└── package.json
```

---

## 🎨 Key Features & Optimizations

1. **Next.js 15 App Router**: Server-side rendering (SSR) & Static site generation (SSG) for instantaneous First Contentful Paint.
2. **SEO & Social Sharing Ready**: Fully configured OpenGraph, Twitter cards, meta descriptions, and semantic HTML for maximum recruiter visibility.
3. **Zero FOUT Font Optimization**: Automatic self-hosting with `next/font/google` eliminating font flash and external CDN delays.
4. **Dual-row Infinite Marquee**: Continuously animated ticker highlighting backend (.NET 8, C#, PostgreSQL, Docker, AWS) and frontend (React 19, TypeScript, Next.js, Vue, Angular).
5. **Interactive Accordion**: Expandable career history covering Hong Thai Technical, FPT Software (Singapore Airlines & Scoot), Vinfire/Nexa, WiseChat, and Freelance.
6. **Modal Deep-Dives**: Detailed architecture diagrams, problems solved, and measurable business outcomes.
7. **Interactive 52-Week Heatmap**: Real-time interactive contribution calendar with hover tooltips.
8. **One-Click Confetti Copy**: Celebration animation when copying email or contacting.
