# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Firma Fit-Out - Nowoczesna Strona Internetowa

## 🎯 Cel Projektu
Tworzenie nowoczesnej, responsywnej strony internetowej dla firmy fit-out z wykorzystaniem najnowszych trendów webdesignu, fokusem na performance i konwersję.

## 🛠️ Stack Technologiczny
- **Framework**: Astro 4.x (statyczne generowanie stron)
- **Styling**: Tailwind CSS 3.x (utility-first)
- **Animacje**: GSAP 3.x (professional animations)
- **Hosting**: GitHub Pages (darmowy hosting statyczny)
- **Zarządzanie treści**: Astro Content Collections (markdown + frontmatter)
- **Repository**: https://github.com/PanArtek/PLANYv2
- **Live Site**: GitHub Pages deployment

## 📋 Kluczowe Zasady Development

### Code Style & Konwencje
- **Nazewnictwo**: camelCase dla JS/TS, kebab-case dla plików i komponentów
- **Komponenty Astro**: Używaj `.astro` dla layout/static, `.jsx/.tsx` dla interaktywnych
- **CSS**: Tailwind utility classes, custom CSS tylko gdy konieczne
- **Performance First**: Lazy loading, image optimization, minimal JavaScript
- **Mobile First**: Responsywność od najmniejszych ekranów

### Struktura Folderów
```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── ui/              # Button, Card, Modal
│   ├── sections/        # Hero, About, Portfolio
│   └── animations/      # GSAP components
├── content/
│   ├── projects/        # Realizacje (markdown files)
│   └── config.ts        # Content collections schema
├── layouts/
│   └── Layout.astro     # Główny layout
├── pages/
│   ├── index.astro      # Homepage
│   ├── realizacje/      # Portfolio pages
│   └── kontakt.astro    # Contact page
├── styles/
│   └── global.css       # Global styles + Tailwind
└── scripts/
    └── gsap/            # GSAP animations
```

### Standardy Komponentów

#### Astro Component Template
```astro
---
// TypeScript interface dla props
interface Props {
  title: string;
  description?: string;
  className?: string;
}

const { title, description, className = '' } = Astro.props;
---

<div class={`component-name ${className}`}>
  <h2 class="text-2xl font-bold">{title}</h2>
  {description && <p class="text-gray-600">{description}</p>}
  <slot />
</div>

<style>
  /* Tylko gdy Tailwind nie wystarcza */
</style>
```

#### React Component Template (dla interaktywności)
```tsx
import { useState } from 'react';

interface Props {
  initialValue?: string;
  className?: string;
}

export default function InteractiveComponent({ 
  initialValue = '', 
  className = '' 
}: Props) {
  const [value, setValue] = useState(initialValue);
  
  return (
    <div className={`interactive-component ${className}`}>
      {/* Component JSX */}
    </div>
  );
}
```

## 🎨 Design System

### Kolory (CSS Custom Properties)
```css
:root {
  /* Light mode */
  --color-primary: #2563eb;
  --color-secondary: #f8f9fa;
  --color-accent: #00ff88;
  --color-text: #1f2937;
  --color-bg: #ffffff;
}

[data-theme="dark"] {
  /* Dark mode */
  --color-primary: #3b82f6;
  --color-secondary: #1a1a1a;
  --color-accent: #00ff88;
  --color-text: #ffffff;
  --color-bg: #0a0a0a;
}
```

### Typography Scale
- **Headings**: font-inter, font-bold
- **Body**: font-inter, font-normal
- **Scale**: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl

### Spacing System
- **Margins/Padding**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
- **Grid Gaps**: gap-4, gap-6, gap-8, gap-12

## 🎭 Trendy Designu do Implementacji

### 1. Glassmorphism
```css
.glass-card {
  @apply bg-white/10 backdrop-blur-md border border-white/20 rounded-xl;
}
```

### 2. Dark Mode Toggle
- Przechowywanie preferencji w localStorage
- Smooth transitions między motywami
- Ikony sun/moon z animacją

### 3. GSAP Animations
- **ScrollTrigger**: reveal na scroll
- **Timeline**: sequence animations  
- **Hover effects**: 3D transforms
- **Page transitions**: smooth page changes

### 4. Asymmetric Layouts
- CSS Grid z nieregularnymi kolumnami
- Overlapping elements z z-index
- Breakout sections

## 📱 Responsywność

### Breakpoints (Tailwind)
- **sm**: 640px (telefon w poziomie)
- **md**: 768px (tablet pionowo)
- **lg**: 1024px (tablet poziomo)
- **xl**: 1280px (desktop)
- **2xl**: 1536px (large desktop)

### Mobile-First Approach
```css
/* Default: mobile */
.component { @apply text-sm; }

/* Tablet i większe */
@screen md { .component { @apply text-base; } }

/* Desktop i większe */
@screen lg { .component { @apply text-lg; } }
```

## 🖼️ Zarządzanie Treści

### Struktura Projektu (Content Collection)
```markdown
---
title: "Nowoczesne biuro IT"
slug: "biuro-nowoczesne-it"
category: "biuro"
client: "TechCorp Sp. z o.o."
location: "Warszawa, Mokotów"
area: 350
completionDate: 2024-03-15
featured: true
mainImage: "/images/projects/biuro-nowoczesne/main.jpg"
gallery:
  - "/images/projects/biuro-nowoczesne/gallery-1.jpg"
  - "/images/projects/biuro-nowoczesne/gallery-2.jpg"
description: "Krótki opis projektu (1-2 zdania)"
tags: ["nowoczesne", "open-space", "eco-friendly"]
---

## Opis projektu

Szczegółowy opis realizacji...

## Wyzwania

Jakie problemy rozwiązaliśmy...

## Rezultat

Efekt końcowy i zadowolenie klienta...
```

### Kategorie Projektów
- `biuro` - Przestrzenie biurowe
- `sklep` - Powierzchnie handlowe  
- `restauracja` - Gastronomia
- `hotel` - Hotelarstwo
- `medyczne` - Przychodnie, kliniki
- `edukacja` - Szkoły, przedszkola

## ⚡ Performance Requirements

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Lighthouse Score**: > 90 (wszystkie kategorie)

### Optymalizacja Obrazów
```astro
---
// Użyj Astro Image optimization
import { Picture } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<Picture
  src={heroImage}
  alt="Hero image"
  widths={[320, 640, 768, 1024, 1280]}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  formats={['avif', 'webp', 'jpg']}
  loading="eager"
  class="w-full h-auto"
/>
```

## 🧪 Testing & Quality

### ESLint Configuration
```json
{
  "extends": ["@astrojs/eslint-config", "@typescript-eslint/recommended"],
  "rules": {
    "no-console": "warn",
    "prefer-const": "error",
    "no-unused-vars": "error"
  }
}
```

### Pre-commit Hooks
- Prettier formatting
- ESLint checks
- TypeScript compilation
- Image optimization check

## 🚀 Deployment

### GitHub Actions Workflow
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
```

### Environment Variables
```bash
# Astro config
PUBLIC_SITE_URL=https://panartek.github.io/PLANYv2
PUBLIC_GA_ID=G-XXXXXXXXXX # Google Analytics (opcjonalne)
```

## 📞 Development Environment

### Authentication
- GitHub CLI is configured and authenticated as PanArtek
- Full repository permissions available via GitHub token
- Repository: https://github.com/PanArtek/PLANYv2

### Environment
- Running on WSL2 (Linux 6.6.87.2-microsoft-standard-WSL2)
- Working directory: /mnt/c/Users/jablo/Desktop/Projects/PLANYv2

## 📋 Helpful Commands
```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Quality checks
npm run lint            # ESLint check
npm run format          # Prettier format
npm run type-check      # TypeScript check

# Content management
npm run add-project     # Helper script for new projects
npm run optimize-images # Image optimization

# Git workflow
git add .
git commit -m "feat: description"
git push origin main     # Auto-deploy to GitHub Pages
```

## 🎯 Uwagi dla Claude

- **Zawsze pytaj o wymagania** przed rozpoczęciem implementacji
- **Planuj strukturę** przed pisaniem kodu
- **Używaj TypeScript** dla lepszego type safety
- **Testuj responsywność** na różnych rozmiarach ekranu
- **Optymalizuj performance** - lazy loading, image optimization
- **Dokumentuj zmiany** w commit messages
- **Sprawdzaj accessibility** - alt texts, semantic HTML
- **Używaj konwencji** z tego pliku
- **Repository jest połączone z GitHub Pages** - każdy push do main automatycznie deployuje

---

*Ostatnia aktualizacja: 2025-06-30*