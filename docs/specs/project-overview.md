# PLANY - Project Overview & Architecture

## 📋 Project Summary

**PLANY** is a production-ready B2B website for a Polish fit-out contractor specializing in commercial space finishing. The project showcases 17 years of experience in medical, educational, office, and retail space completions with a team of 20+ specialists.

## 🏗️ Architecture

### Core Framework
- **Astro 5.10.1** - Static site generation with islands architecture
- **React 19.1.0** - Interactive components with selective hydration
- **TypeScript 5.8.3** - Strict type checking enabled
- **Output**: Static files optimized for GitHub Pages deployment

### Design Philosophy
- **70% white space minimalism** - Clean, professional layout
- **Geometric Amethyst Wisteria Twilight** - Branded color palette
- **Mobile-first responsive design** - Progressive enhancement
- **Accessibility-first** - WCAG AA compliance built-in

## 🎨 Tech Stack Details

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Tailwind Typography 0.5.16** - Enhanced text styling
- **Custom CSS Properties** - Design system variables
- **Google Fonts** - Montserrat (headings) + Inter (body)

### Animation & Interactions
- **GSAP 3.13.0** - Professional animation library
- **ScrollTrigger** - Scroll-based animations
- **Hardware acceleration** - `transform3d`, `will-change` optimizations
- **Reduced motion support** - Accessibility compliance

### Icons & Assets
- **Lucide React 0.525.0** - Consistent icon system
- **Geometric Icons** - Custom clip-path shapes (6 variants)
- **Optimized Images** - WebP support, lazy loading
- **Static Assets** - Served from `/public` directory

## 📁 Project Structure

```
PLANYv2/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Site structure components
│   │   │   ├── Navigation.astro    # Main navigation with mobile menu
│   │   │   └── Footer.astro        # 4-column footer with links
│   │   ├── sections/       # Page section components
│   │   │   ├── Hero.astro          # Landing hero with CTA
│   │   │   ├── Services.astro      # 6 service categories with animations
│   │   │   ├── Portfolio.astro     # Project showcase (10 projects)
│   │   │   ├── About.astro         # Company information
│   │   │   └── Contact.astro       # Contact form with validation
│   │   └── ui/             # Atomic UI components
│   │       ├── Button.astro        # Polymorphic button (6 variants)
│   │       ├── Card.astro          # Flexible content card
│   │       ├── GeometricIcon.astro # Custom geometric shapes
│   │       └── Icon.astro          # Lucide icon wrapper
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with SEO, analytics, GSAP
│   ├── pages/              # Astro file-based routing
│   │   ├── index.astro     # Homepage (single-page design)
│   │   ├── projekty.astro  # Portfolio page (future expansion)
│   │   └── kontakt.astro   # Contact page (future expansion)
│   ├── styles/
│   │   └── global.css      # Design system, utilities, animations
│   └── utils/              # TypeScript utilities
│       ├── constants.ts    # Site config, navigation, services, portfolio
│       ├── types.ts        # TypeScript interfaces
│       └── gsap.ts         # GSAP animation utilities
├── public/
│   ├── images/portfolio/   # Project images (10 projects)
│   ├── favicon.svg         # Site favicon
│   ├── robots.txt          # SEO directives
│   └── sitemap.xml         # XML sitemap
├── docs/                   # Project documentation
├── dist/                   # Built static files (GitHub Pages)
└── Configuration files...
```

## 🎯 Design System

### Color Palette (Amethyst Wisteria Twilight)
```css
--primary-light: #EC9CCC    /* CTAs, accent elements */
--primary-dark: #6F2451     /* Headings, important text */
--neutral-dark: #683759     /* Body text */
--accent-orange: #D45C1C    /* Hover states, highlights */
--neutral-light: #F8F9FA    /* Backgrounds, subtle elements */
```

### Typography Scale
- **Hero Text**: 72px (mobile: clamp) - Montserrat 600
- **H1**: 48px - Montserrat 600
- **H2**: 36px - Montserrat 500  
- **H3**: 24px - Montserrat 500
- **Body**: 18px - Inter 400
- **Supporting**: 16px - Inter 400

### Geometric Shape System
Six geometric shapes mapped to service categories:
- **Triangle** → Medical (emergency/precision)
- **Circle** → Education (community/unity)
- **Square** → Office (structure/business)
- **Hexagon** → Retail (efficiency/commerce)
- **Diamond** → Installations (precision/technical)
- **Pentagon** → Turnkey (completeness/stability)

## 🔧 Component Architecture

### Astro Islands Pattern
- **Static by default** - Maximum performance
- **Selective hydration** - `client:load`, `client:visible` directives
- **Progressive enhancement** - Works without JavaScript
- **TypeScript interfaces** - All props strongly typed

### Component Categories

#### Layout Components
- **Navigation.astro** - Responsive nav with mobile hamburger menu
- **Footer.astro** - 4-column layout with company info, services, contact, projects

#### Section Components  
- **Hero.astro** - Landing section with GSAP timeline animations
- **Services.astro** - 6 service cards with geometric icons and hover effects
- **Portfolio.astro** - Project showcase with filtering capabilities
- **About.astro** - Company story with trust indicators
- **Contact.astro** - Contact form with TypeScript validation

#### UI Components
- **Button.astro** - Polymorphic (renders as `<a>` or `<button>`)
- **Card.astro** - Flexible content container
- **GeometricIcon.astro** - Custom SVG shapes with animations
- **Icon.astro** - Lucide React icon wrapper

### Animation Patterns
- **Entrance animations** - Fade in with slide up (y: 30 → 0)
- **Scroll triggers** - Elements animate when 80% visible
- **Hover effects** - Scale (1.05-1.15x) with geometric rotations
- **Stagger animations** - 0.1s delays for multiple elements
- **Hardware acceleration** - `force3D: true`, `will-change` optimization

## 🌐 Business Context

### Target Market
- **B2B clients** in Poland
- **Commercial space owners** - offices, medical facilities, retail
- **Decision makers** - facility managers, business owners
- **Project types** - 200k-1M+ PLN renovations

### Content Strategy
- **Polish language** - All content localized
- **Trust indicators** - "20+ specjalistów", "17 lat doświadczenia"
- **Value proposition** - "Własny zespół eliminuje chaos koordynacji"
- **Primary CTA** - "Poproś o wycenę" (Request quote)

### SEO Optimization
- **Schema.org LocalBusiness** markup
- **Polish language targeting** (`lang="pl"`, `locale="pl_PL"`)
- **Industry keywords** - wykończenia, fit-out, remonty, placówki medyczne
- **Geographic targeting** - Poland, major cities mentioned

## 🚀 Performance Features

### Build Optimizations
- **Static generation** - Pre-built HTML for fast loading
- **Asset optimization** - Hashed filenames for caching
- **Inline stylesheets** - Critical CSS inlined
- **Bundle splitting** - Optimal chunk sizes
- **Image optimization** - WebP support, lazy loading

### Runtime Performance
- **GSAP hardware acceleration** - GPU-optimized animations
- **ScrollTrigger optimization** - Limited callbacks, efficient triggers
- **Reduced motion support** - Accessibility-compliant animations
- **Progressive enhancement** - Works without JavaScript

## 📊 Project Metrics

### Bundle Analysis
- **Target size**: <200KB total, <60KB gzipped
- **Build time**: ~15 seconds
- **Performance score**: Optimized for Core Web Vitals
- **Accessibility**: WCAG AA compliant

### Browser Support
- **Modern browsers** - ES6+ support required
- **Mobile-first** - Responsive design 320px+
- **Progressive enhancement** - Graceful degradation
- **Accessibility** - Screen reader compatible

This architecture delivers a production-ready, performant website that effectively showcases PLANY's expertise in commercial fit-out projects while maintaining excellent developer experience and user performance.