# Dao Duc Thinh — Full-stack Developer Portfolio

> Personal developer portfolio showcasing 4+ years of expertise in .NET 8, React, TypeScript, scalable cloud architectures, and modern web applications.

![Preview](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop)

---

## ⚡ Tech Stack & Libraries
- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Smooth accordions, tickers, floating dock, modal scale)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive FX**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) (Email copy celebration)
- **Typography**: Google Fonts — *Instrument Serif* (italic editorial titles) + *Rubik* (clean body font)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port indicated by Vite).

### 3. Production Build
```bash
npm run build
```
The optimized static build will be placed into the `dist/` directory ready for deployment on Vercel, Netlify, or GitHub Pages.

---

## 📂 Project Architecture

```
thinh-portfolio/
├── public/
│   └── Dao_Duc_Thinh_CV.pdf     # Downloadable original CV PDF
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Banner, avatar monogram, social pills with confetti copy
│   │   ├── About.tsx            # Full architectural summary & core highlight pills
│   │   ├── Experience.tsx       # Collapsible accordion with company badges, dates & stack
│   │   ├── TechStack.tsx        # Dual-row infinite marquee ticker with gradient fades
│   │   ├── Projects.tsx         # Numbered project showcase with hover animations
│   │   ├── ProjectModal.tsx     # Deep-dive architecture & impact modal dialog
│   │   ├── ActivityCalendar.tsx # 52-week GitHub contribution heatmap with tooltips
│   │   ├── EducationCertificates.tsx # University degree & Google/IBM certifications
│   │   ├── ContactCTA.tsx       # "Let's build something remarkable" CTA section
│   │   ├── Footer.tsx           # Copyright, timezone & back-to-top button
│   │   ├── FloatingNav.tsx      # Fixed bottom dock with quick jump & confetti email copy
│   │   └── SideHatchBands.tsx   # Diagonal hatched side pattern borders
│   ├── data/
│   │   └── cv-data.ts           # Centralized structured data extracted from CV
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for experience, projects, skills
│   ├── App.tsx                  # Main layout container
│   ├── index.css                # Custom Tailwind utilities, fonts, hatched background
│   └── main.tsx                 # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Design Highlights & Features
1. **Editorial Typography & Dark Aesthetics**: Clean layout with Instrument Serif italic headings and Rubik body typography.
2. **Dual-row Infinite Marquee**: Continuously animated ticker highlighting backend (.NET 8, C#, PostgreSQL, Docker, AWS) and frontend (React, TypeScript, Next.js, Vue, Angular).
3. **Interactive Accordion**: Expandable career history covering Hong Thai Technical, FPT Software (Singapore Airlines & Scoot), Vinfire/Nexa, WiseChat, and Freelance.
4. **Modal Deep-Dives**: Clicking any project opens an interactive popup showcasing core architectural features and measurable impact.
5. **Interactive 52-Week Heatmap**: Visualizes code commits and contributions with interactive hover tooltips.
6. **One-Click Confetti Copy**: Clicking email triggers a colorful confetti burst.
