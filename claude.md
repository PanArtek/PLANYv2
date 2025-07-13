# PLANY Project - Team Standards & Tech Stack

> **Hierarchy**: Extends `~/.claude/CLAUDE.md` → Overridden by `CLAUDE.local.md`

## Tech Stack & Versions (Team Standard)
• **Framework**: Astro 5.10.1 (static site generation)
• **Styling**: Tailwind CSS 3.4.17 + Custom CSS
• **Animation**: GSAP 3.13.0 + ScrollTrigger
• **UI Library**: React 19.1.0 (for interactive components)
• **Language**: TypeScript 5.8.3 (strict mode enabled)
• **Icons**: Lucide React 0.525.0
• **Typography**: Tailwind Typography 0.5.16

## Team Commands (Shared)
• **Development**: `npm run dev` (starts Astro dev server)
• **Build**: `npm run build` (static production build)
• **Preview**: `npm run preview` (preview production build)
• **Astro CLI**: `npm run astro` (access Astro commands)

## Project-Specific Code Standards
• **Components**: .astro files for static, .tsx for interactive
• **Styling**: Tailwind classes + CSS custom properties
• **Animation**: GSAP with hardware acceleration (`will-change`, `transform3d`)
• **Performance**: Bundle target 187KB (59KB gzipped)
• **Color System**: Amethyst Wisteria Twilight palette (CSS variables)
• **Typography**: Montserrat (headings) + Inter (body text)

## Component Architecture
• **Layout**: `src/layouts/Layout.astro` (base layout with SEO)
• **Sections**: `src/components/sections/` (Hero, About, Services, Portfolio, Contact)
• **UI Components**: `src/components/ui/` (Button, Card, Icon, GeometricIcon)
• **Navigation**: `src/components/layout/` (Navigation, Footer)
• **Utilities**: `src/utils/` (constants, types, GSAP config)

## File Structure Patterns
```
src/
├── components/
│   ├── layout/         # Navigation, Footer
│   ├── sections/       # Page sections with animations  
│   └── ui/             # Reusable components
├── layouts/            # Base layouts
├── pages/              # Astro pages (index, projekty, kontakt)
├── styles/             # Global CSS + design system
└── utils/              # TypeScript utilities
```

## Design System - Geometric Amethyst Wisteria Twilight
• **Primary Colors**: 
  - `--primary-light: #EC9CCC` (CTAs)
  - `--primary-dark: #6F2451` (headings)
  - `--neutral-dark: #683759` (text)
  - `--accent-orange: #D45C1C` (hover states)
• **Geometric Shapes**: Triangle, Circle, Square, Hexagon, Diamond, Pentagon
• **Layout Principle**: 70% white space minimalism
• **Animation**: Geometric transforms, clip-path morphing

## Button System (PRD Compliant)
• **Primary**: `.btn-primary` - Pink with orange corner accent
• **Secondary**: `.btn-secondary` - Outline with corner accent  
• **Tertiary**: `.btn-outline` - Orange with pink dot accent
• **Variants**: `primary-hero`, `secondary-hero` for larger CTAs
• **Sizes**: `sm`, `md`, `lg`, `large` (geometric padding)

## Component Patterns (Astro/React Specific)
• **Props Interface**: Always define TypeScript interface in frontmatter
• **Hydration**: `client:load` for critical, `client:visible` for below fold
• **CSS Classes**: Tailwind utilities + CSS custom properties
• **Geometric Elements**: Use `.geometric-shape` with specific clip-paths

## Animation Standards (GSAP Specific)
• **GSAP Loading**: Progressive (core on load, ScrollTrigger on demand)
• **Timing**: `cubic-bezier(0.22, 1, 0.36, 1)` for smooth easing
• **Transforms**: Prefer `transform` over layout-affecting properties

## Build Configuration
• **Output**: Static files for GitHub Pages
• **Assets**: Hashed filenames for caching
• **Optimization**: Inline stylesheets, optimized bundles
• **Deployment**: GitHub Actions to `panartek.github.io/PLANYv2`
• **Site Config**: Base path `/PLANYv2` for GitHub Pages

## Color Usage Guidelines
• **Backgrounds**: 70% white space, minimal color backgrounds
• **Text Hierarchy**: 
  - Primary headings: `var(--primary-dark)`
  - Body text: `var(--neutral-dark)`
  - Supporting text: `var(--neutral-light)`
• **Interactive Elements**: Orange hover states, geometric corner accents
• **Brand Consistency**: Use CSS custom properties, not hex values

## Typography Scale (PRD)
• **Hero**: 72px (`var(--text-7xl)`) - Montserrat 600
• **H1**: 48px (`var(--text-5xl)`) - Montserrat 600  
• **H2**: 36px (`var(--text-4xl)`) - Montserrat 500
• **H3**: 24px (`var(--text-2xl)`) - Montserrat 500
• **Body**: 18px (`var(--text-lg)`) - Inter 400
• **Mobile**: Responsive scaling with `clamp()`

## Performance Targets (Project-Specific)
• **Bundle Size**: <200KB total, <60KB gzipped
• **Build Time**: <15 seconds
• **GSAP Optimization**: Progressive loading, hardware acceleration

## Geometric Shape Assignments (Service Categories)
• **Medical**: Triangle (emergency/medical)
• **Education**: Circle (unity/community)  
• **Office**: Square (structure/business)
• **Retail**: Hexagon (commerce/efficiency)
• **Installations**: Diamond (precision/technical)
• **Turnkey**: Pentagon (completeness/stability)

## Content Strategy
• **Polish Language**: All content in Polish for target market
• **Business Focus**: B2B fit-out contractor positioning
• **CTAs**: "Poproś o wycenę" - primary action throughout site
• **Trust Indicators**: "20+ specjalistów", "17 lat doświadczenia"
• **Value Props**: "Własny zespół eliminuje chaos koordynacji"

## Team Development Workflow
• **Git Strategy**: Direct commits to main (solo developer)
• **Deployment**: Automatic via GitHub Actions on push
• **Testing**: Manual testing, visual verification
• **Personal Setup**: See `CLAUDE.local.md` for personal development preferences

## Ostatnie zmiany:

### 2025-01-13 - GSAP Refactor (COMPLETED)
• **Status**: ✅ UKOŃCZONE
• **Problem**: GSAP console errors `target .geometric-shape not found`
• **Rozwiązanie**: 
  - Fixed GSAP selectors: `.geometric-shape` → `.geometric-icon-container`
  - Added missing CSS classes: `btn-geometric`, `btn-primary-geometric`, `btn-secondary-geometric`
  - Location: `global.css:400-460`
• **Pliki zmodyfikowane**:
  - `src/styles/global.css` - added geometric button variants
  - `src/components/sections/Services.astro:187-213` - updated hover animations
  - `src/components/sections/Services.astro:324-339` - fixed GSAP animation selectors
• **Build Result**: ✅ SUCCESS (14.49s)
• **Console Errors**: ✅ RESOLVED - no GSAP errors
• **Deployment**: ✅ Live na https://panartek.github.io/PLANYv2

### 2025-01-13 - About Section Refactor (COMPLETED)
• **Status**: ✅ UKOŃCZONE
• **Problem**: Monotonny layout "Eliminujemy chaos koordynacji" - słaba hierarchia, brak USPs, brak CTA
• **Rozwiązanie**: 
  - Restructured into 3 clear blocks: company story → USPs showcase → stats + benefits
  - Added prominent USPs: Wizja lokalna, Wycena 24h, Gwarancja 24 miesiące
  - Implemented typography hierarchy: text-3xl/4xl headings, text-2xl USP titles
  - Added dual CTAs with geometric icons and hover animations
  - Enhanced GSAP animations with proper staggered reveals
• **Pliki zmodyfikowane**:
  - `src/components/sections/About.astro` - complete content restructure and animation updates
  - `docs/guidelines-documentation.md` - documented refactor details
• **Build Result**: ✅ SUCCESS (10.09s)
• **Console Errors**: ✅ RESOLVED - no issues
• **Deployment**: 🔄 PENDING - ready for GitHub Pages deploy

---
**Note**: This file contains team standards and project-specific configuration. Personal development preferences can override these settings in `CLAUDE.local.md`. Universal coding standards are defined in `~/.claude/CLAUDE.md`.