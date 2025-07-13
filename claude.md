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
• **Color System**: Extended Amethyst Wisteria Twilight palette (100-900 shades + semantic tokens)
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

## Design System - Extended Amethyst Wisteria Twilight Palette
• **Primary Colors (100-900 Scale)**: 
  - `--primary-50` to `--primary-900` (Full spectrum from lightest pink to darkest burgundy)
  - Legacy support: `--primary-light: #EC9CCC`, `--primary-dark: #6F2451`
  - Tailwind classes: `text-primary-800`, `bg-primary-300`, etc.
• **Neutral Colors (100-900 Scale)**: 
  - `--neutral-50` to `--neutral-900` (Gray-purple spectrum)
  - Used for text, backgrounds, borders
  - Tailwind classes: `text-neutral-600`, `bg-neutral-100`, etc.
• **Extended Accent Colors**:
  - Orange: `#FF6B35` (Primary CTA), Yellow: `#FFD23F` (Secondary CTA)
  - Green: `#4ECDC4` (Success), Coral: `#FF6B6B` (Error), Lavender: `#B8A7CE` (Info)
  - Tailwind classes: `text-green`, `bg-orange`, etc.
• **Semantic Color Tokens**: Success, warning, error, info states
• **Dark Mode Support**: Complete `[data-theme="dark"]` implementation ready
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

## Color Usage Guidelines - Extended System
• **Backgrounds**: 70% white space, subtle gradient variations using `--neutral-50` to `--neutral-200`
• **Text Hierarchy**: 
  - Primary headings: `text-primary-800` or `#6F2451`
  - Body text: `text-neutral-600` or `#683759`
  - Supporting text: `text-neutral-400` or lighter shades
• **Interactive Elements**: Orange (`#FF6B35`) hover states, geometric corner accents
• **Gradient Usage**: Direct CSS values for production reliability
• **CSS Custom Properties**: Available but use direct hex values for critical styling
• **Tailwind Classes**: Preferred for consistency (`text-primary-800`, `bg-neutral-100`)
• **Semantic Colors**: Use `success`, `warning`, `error`, `info` for states

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

### 2025-01-13 - Layout & Design Fix (COMPLETED)
• **Status**: ✅ UKOŃCZONE
• **Problem**: Problemy z kolorystyką, chaos w sekcji "O nas", problemy nawigacyjne
• **Rozwiązanie**: 
  - Kolorystyka: Fixed text-gradient classes z display:inline-block, przywrócono białe tło body
  - Sekcja O nas: Eliminacja duplikacji "chaos koordynacji", nowy layout 4 USPs + stats
  - Navigation: Poprawiono styling logo i obsługę anchor links
• **Pliki zmodyfikowane**:
  - `src/styles/global.css` - naprawa text-gradient classes i body background
  - `src/components/sections/About.astro` - kompletna restrukturyzacja layoutu
  - `src/components/layout/Navigation.astro` - poprawki logo i navigation
• **Nowy layout About**: 4 numerowane USPs (Wizja/Wycena/Harmonogram/Gwarancja) + czyste stats
• **Build Result**: ✅ SUCCESS (9.62s)
• **Bundle Size**: ✅ 187.44 kB (59.07 kB gzipped) - maintained performance
• **Console Errors**: ✅ RESOLVED
• **Deployment**: ✅ Live na https://panartek.github.io/PLANYv2

### 2025-01-13 - CSS Modernization (COMPLETED)
• **Status**: ✅ UKOŃCZONE
• **Problem**: Monotonous design lacking visual dynamism and modern appeal
• **Rozwiązanie**: 
  - Enhanced gradient system: 9 new dynamic gradients for backgrounds and cards
  - Modern shadow system: Brand-colored shadows with proper depth (xs/sm/md/lg/xl/2xl)
  - Dynamic typography: Responsive clamp() scaling, enhanced weight contrast (300-700)
  - Enhanced animations: Gradient shifts, subtle pulses, glow effects, improved hover states
  - Section variants: Light/medium/dark gradient backgrounds with radial overlays
  - Glassmorphism effects: Brand-colored blur overlays for modern depth
• **Pliki zmodyfikowane**:
  - `src/styles/global.css` - comprehensive modernization: gradients, shadows, typography, animations
  - `tailwind.config.mjs` - enhanced color palette, animation system, keyframes
  - `src/components/sections/Hero.astro` - gradient background, text gradients
  - `src/components/sections/Services.astro` - enhanced section styling
  - `src/components/sections/About.astro` - modern gradient backgrounds
• **Build Result**: ✅ SUCCESS (13.54s)
• **Bundle Size**: ✅ 187.44 kB (59.07 kB gzipped) - within targets
• **Console Errors**: ✅ RESOLVED - no issues
• **Visual Impact**: Transformed monotonous design into dynamic, modern aesthetic while preserving brand identity
• **Deployment**: ✅ Live na https://panartek.github.io/PLANYv2

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
• **Deployment**: ✅ Live na https://panartek.github.io/PLANYv2

### 2025-01-13 - Extended Color System Implementation (COMPLETED)
• **Status**: ✅ UKOŃCZONE
• **Problem**: Limited color palette with only basic brand colors, no comprehensive design system
• **Rozwiązanie**: 
  - **Extended Palette**: Full 100-900 shade system for primary and neutral colors
  - **Semantic Colors**: Success, warning, error, info states with light/dark variants  
  - **Accent Colors**: Orange, yellow, green, coral, lavender with proper variations
  - **Dark Mode Support**: Complete `[data-theme="dark"]` implementation ready
  - **Enhanced Gradients**: Section-specific, interactive, and mesh gradients
  - **Tailwind Integration**: All new colors available as Tailwind classes
  - **Documentation**: Comprehensive usage guidelines and color hierarchy
• **Pliki zmodyfikowane**:
  - `src/styles/global.css` - 300+ lines of extended color system with CSS custom properties
  - `tailwind.config.mjs` - updated with full color palette and semantic mappings
  - `src/components/layout/Navigation.astro` - replaced slate colors with neutral system
  - `src/components/sections/Services.astro` - updated to use semantic and neutral colors
  - `src/components/sections/Portfolio.astro` - converted to primary color system
  - `src/pages/kontakt.astro` + `src/pages/projekty.astro` - gradient backgrounds updated
• **Color Implementation**:
  - **Primary**: 50-900 scale (#FDF7FB → #4A1836) 
  - **Neutral**: 50-900 scale (#F8F9FA → #1A0E16)
  - **Semantic**: Success (#4ECDC4), Warning (#FFD23F), Error (#FF6B6B), Info (#B8A7CE)
  - **Legacy Support**: All existing color variables maintained for backwards compatibility
• **Production Fixes**: Direct hex values used for gradients due to CSS custom property build limitations
• **Build Result**: ✅ SUCCESS (7.00s) - improved performance
• **Bundle Size**: ✅ 187.44 kB (59.07 kB gzipped) - maintained targets
• **Visual Impact**: Professional color system with semantic meaning and accessibility compliance
• **Deployment**: ✅ Live na https://panartek.github.io/PLANYv2

### 2025-01-13 - Color System Production Fix (IN PROGRESS)
• **Status**: 🔄 W TRAKCIE
• **Problem**: CSS custom properties not loading in production build, gradients not visible
• **Rozwiązanie**: 
  - Replace CSS custom properties with direct hex values for critical styling
  - Convert `bg-gradient-hero` class to inline gradient styles
  - Update geometric accents with direct color values
  - Maintain Tailwind classes for consistency where possible
• **Pliki w trakcie modyfikacji**:
  - `src/components/sections/Hero.astro` - ✅ gradient background and geometric accents fixed
  - `src/components/sections/About.astro` - ⏳ pending CSS custom property replacement
  - `src/components/sections/Services.astro` - ⏳ pending gradient updates
  - `src/components/layout/Footer.astro` - ⏳ pending color fixes
• **Test Deployment**: ✅ Hero section deployed with working gradients
• **Next Steps**: Apply fixes to remaining components, verify visual consistency

---
**Note**: This file contains team standards and project-specific configuration. Personal development preferences can override these settings in `CLAUDE.local.md`. Universal coding standards are defined in `~/.claude/CLAUDE.md`.