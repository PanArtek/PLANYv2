# PLANY - Claude Code Instructions (PRD REPOSITIONING COMPLETED)

## 🎯 Project Overview - CURRENT STATUS

✅ **MAJOR SUCCESS**: Successfully repositioned from incorrect "architecture studio" to correct "comprehensive fit-out contractor" according to PRD requirements.

🎨 **NEW MILESTONE**: **GEOMETRIC DESIGN SYSTEM IMPLEMENTED** - Amethyst Wisteria Twilight palette with minimalist geometric design successfully deployed.

**Latest Update**: July 12, 2025 - Geometric Design System with Amethyst Wisteria Twilight palette

**Current Business Positioning:**
- **Company**: PLANY - Kompleksowy wykonawca wykończeń i instalacji
- **Core Message**: "Profesjonalne wykonawstwo na każdym etapie" 
- **Key Value**: Własny zespół 20+ specjalistów eliminuje problemy koordynacji
- **Experience**: 17 lat doświadczenia w wykończeniach komercyjnych
- **Scale**: Realizacje 100-5000m² w całej Polsce

**Target Industries (PRD-Aligned):**
- Zarządcy nieruchomości (modernizacje, remonty)
- Kliniki medyczne (gabinety z wymogami sanitarnymi)
- Szkoły prywatne (bezpieczeństwo, funkcjonalność)
- Firmy otwierające biura (open space, sale konferencyjne)

## 🎨 GEOMETRIC DESIGN SYSTEM - COMPLETED

### ✅ Implementation Status (July 12, 2025)

**AMETHYST WISTERIA TWILIGHT PALETTE DEPLOYED:**
- Complete 6-color palette integration
- 70% white space minimalism achieved
- Geometric shapes library implemented
- Professional contractor positioning maintained

**Key Components Implemented:**
1. **Minimalist Hero Section** - 70% white space with subtle geometric accents
2. **Services Grid** - 6 geometric shapes (triangle, circle, square, hexagon, diamond, pentagon)
3. **Button System** - Geometric clip-paths with corner accents
4. **Card Components** - Angular borders with geometric overlays
5. **Animation System** - Shape-based hover interactions

**Color Palette Applied:**
```css
--primary-light: #EC9CCC;     /* Light pink-purple - CTAs */
--primary-dark: #6F2451;      /* Dark burgundy-purple - headings */
--primary-medium: #D0AFCD;    /* Medium pink-purple - accents */
--neutral-light: #CCD0DC;     /* Light gray-blue - backgrounds */
--neutral-dark: #683759;      /* Medium dark purple - text */
--accent-orange: #D45C1C;     /* Orange - hover states */
```

**Performance Metrics:**
- Build Time: 10.43s ✅
- Bundle Size: 187.44 kB (59.07 kB gzipped) ✅
- Hardware acceleration enabled ✅
- Reduced motion support ✅

**Status Update**: July 12, 2025 - Hero section redesigned and animations fixed

### 🔄 **Hero Section Redesign** (July 12, 2025)
**User Feedback Implemented:**
- ❌ Removed PLANY logo from hero (too weak)
- ✅ Focused on two main CTAs: "Poproś o wycenę" and "Zobacz nasze realizacje"  
- ✅ Updated copy: "realizuje kompleksowo prace budowlane i instalacyjne"
- ✅ Modern centered layout with bold 84px headline
- ✅ Enhanced button hierarchy and interactions
- 🔧 Fixed JavaScript animations with fallbacks

**New Hero Features:**
- Bold typography with geometric accent color
- Dual CTA focus for better conversion
- Enhanced button hover animations
- Fallback display if JavaScript fails
- Reduced motion support

**Next Phase:** Deploy fixed hero, portfolio geometric tiles, responsive optimization

## 📋 IMPORTANT: Documentation Requirements

**ALWAYS MAINTAIN PROJECT CONTEXT IN `doc.md`**

Before starting any implementation, CREATE and MAINTAIN a comprehensive `doc.md` file that includes:

```markdown
# Project Documentation

## Current Status
- [Update with each major milestone]

## Architecture Decisions
- [Document all technical choices and reasoning]

## Implementation Progress  
- [Track completed features and remaining tasks]

## Known Issues
- [Document any bugs or technical debt]

## Next Steps
- [Always maintain priority queue of next tasks]
```

**Update `doc.md` after every significant change to preserve context for future Claude Code sessions.**

## 🛠️ Technology Stack & Requirements

### Core Technologies
- **Framework**: Astro 4.x (Static Site Generation for performance)
- **Styling**: Tailwind CSS + custom CSS for animations
- **Animations**: GSAP with ScrollTrigger plugin
- **Icons**: Lucide React
- **Forms**: Netlify Forms or custom form handling
- **Images**: Optimized WebP/AVIF with responsive loading

### Performance Targets
- Lighthouse Score: 90+ all categories
- First Contentful Paint: < 1.5s
- Mobile Core Web Vitals: All green
- Bundle size: < 100KB initial load

## 🏗️ Implementation Workflow

**FOLLOW THIS SEQUENCE - RESEARCH FIRST, THEN PLAN, THEN IMPLEMENT:**

### Step 1: Research & Analysis (THINK DEEPLY)
Before any coding, use **extended thinking** to analyze the requirements:

```
Think deeply about the optimal architecture for this Astro + GSAP website. 
Consider performance, SEO, animation implementation, and B2B user experience.
Research modern fit-out company websites and analyze effective design patterns.
```

### Step 2: Create Implementation Plan
Document your research findings and create a detailed plan in `doc.md` including:
- Site architecture and routing
- Component structure  
- Animation strategy
- Content organization
- Development phases

### Step 3: Setup Project Foundation
- Initialize Astro project with TypeScript
- Configure Tailwind CSS
- Set up GSAP with proper plugins
- Create basic project structure
- Document setup decisions in `doc.md`

### Step 4: Implement Core Features (Priority Order)
1. **Hero Section** with creative animation concept
2. **Navigation** with smooth interactions
3. **Portfolio Grid** with filtering
4. **Services/Specializations** section
5. **Contact Form** with validation
6. **Responsive Design** optimization

## 🎨 Design Requirements

### Visual Identity
```css
/* Color Palette */
:root {
  --primary: #2a2a2a;      /* Professional charcoal */
  --secondary: #3b82f6;     /* Trust blue */
  --accent: #ffffff;        /* Clean white */
  --neutral: #f1f5f9;       /* Soft gray */
  --text: #374151;          /* Readable dark gray */
}
```

### Typography
- **Primary**: Inter (clean, professional)
- **Headings**: Inter Bold or elegant serif accent
- **Hierarchy**: Clear 6-level heading system
- **Body**: 16px base, 1.6 line-height

### Animation Principles
- **Duration**: 0.3-0.8s maximum
- **Easing**: ease-out for entrances, ease-in-out for interactions
- **Performance**: 60fps target, hardware acceleration
- **Accessibility**: Respect `prefers-reduced-motion`

## 📱 Component Specifications

### Hero Section - Creative Concept
**Choose ONE animated concept:**

**Option A: "Blueprint to Reality"**
```javascript
// GSAP Timeline Animation
- SVG line drawing animation showing floor plan
- Transforms into 3D isometric room view
- Subtle particle effects for "construction dust"
- Duration: 3-4 seconds, subtle loop
```

**Option B: "Building Blocks Assembly"**
```javascript
// 3D CSS + GSAP Animation  
- Floating geometric shapes (cubes, rectangles)
- Gentle assembly into building silhouette
- Continuous subtle rotation and floating
- Clean, minimal aesthetic
```

**Hero Content Structure:**
```html
<section class="hero">
  <div class="hero-animation">
    <!-- Animated SVG/CSS elements -->
  </div>
  <div class="hero-content">
    <h1>Kompleksowe wykończenia od A do Z</h1>
    <p>Własny zespół, pełen zakres instalacji, elastyczne podejście</p>
    <div class="hero-cta">
      <button class="cta-primary">Poproś o wycenę</button>
      <button class="cta-secondary">Nasze realizacje</button>
    </div>
  </div>
</section>
```

### Portfolio Grid Component
```typescript
// Portfolio Requirements:
interface Project {
  id: string;
  title: string;
  category: 'medical' | 'education' | 'retail' | 'office' | 'other';
  year: number;
  image: string;
  description: string;
  tags: string[];
}

// Features:
- Responsive grid (1/2/3 columns based on viewport)
- Category filtering with smooth transitions
- Modal/detail view for each project
- Lazy loading with intersection observer
- GSAP stagger animations on scroll
```

### Services Section
```html
<!-- 6 Service Categories -->
<section class="services">
  <h2>Nasze Specjalizacje</h2>
  <div class="services-grid">
    <div class="service-card" data-category="medical">
      <icon>Medical</icon>
      <h3>Placówki Medyczne</h3>
      <p>Wykończenia zgodne z wymogami sanitarnymi...</p>
    </div>
    <!-- Repeat for: Education, Office, Retail, Installations, Turnkey -->
  </div>
</section>
```

### Contact Form Component
```typescript
// B2B Optimized Form Fields:
interface QuoteRequest {
  projectType: 'medical' | 'education' | 'office' | 'retail' | 'other';
  location: string;
  area: number; // square meters
  budget: 'under-200k' | '200k-500k' | '500k-1m' | 'over-1m' | 'flexible';
  timeline: 'asap' | '1-3months' | '3-6months' | '6months+';
  description: string;
  contact: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
}
```

## 🚀 Development Guidelines

### Project Structure
```
src/
├── components/
│   ├── ui/               # Reusable components (Button, Card)
│   ├── sections/         # Page sections (Hero, Portfolio, Services)
│   ├── animations/       # GSAP animation utilities
│   └── forms/           # Contact form components
├── layouts/
│   └── BaseLayout.astro # Main layout with SEO
├── pages/
│   ├── index.astro      # Homepage
│   ├── realizacje.astro # Portfolio page
│   └── kontakt.astro    # Contact page
├── styles/
│   ├── globals.css      # Global styles and CSS variables
│   └── animations.css   # Custom animation utilities
├── utils/
│   ├── gsap.ts         # GSAP configuration and utilities
│   ├── constants.ts    # App constants and configuration
│   └── types.ts        # TypeScript type definitions
└── assets/
    ├── images/         # Optimized project images
    └── icons/          # Custom SVG icons
```

### Code Quality Standards
- **TypeScript**: Strict mode enabled, proper type definitions
- **ESLint + Prettier**: Consistent code formatting
- **Semantic HTML**: Proper accessibility and SEO structure
- **Performance**: Bundle optimization, image optimization
- **Testing**: Basic accessibility and performance testing

### GSAP Implementation Strategy
```javascript
// Animation Performance Best Practices:
1. Use transform3d for hardware acceleration
2. Batch DOM reads/writes to avoid layout thrashing  
3. Use will-change CSS property strategically
4. Implement ScrollTrigger with proper cleanup
5. Provide reduced-motion fallbacks

// Example Animation Utility:
export const createFadeInAnimation = (elements, options = {}) => {
  return gsap.fromTo(elements, 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements,
        start: "top 80%",
        ...options
      }
    }
  );
};
```

## 📊 Content Strategy

### Portfolio Projects (10 Required)
For each project, collect:
- **High-quality images** (before/after preferred)
- **Project details**: location, size, timeline, scope
- **Category classification** for filtering
- **Brief description** highlighting challenges/solutions

### Copy Requirements
```markdown
# Key Messaging Framework:

## Value Propositions:
1. "Własny zespół 20+ pracowników" - reliability
2. "Kompleksowe instalacje" - one-stop solution  
3. "Elastyczne podejście" - budget accommodation
4. "Działamy w całej Polsce" - scale and reach

## Trust Signals:
- Years of experience
- Number of completed projects
- Certifications and compliance
- Regional coverage map
```

## 🎯 SEO & Performance Optimization

### Meta Tags Template
```html
<!-- Homepage SEO -->
<title>Kompleksowe Wykończenia - Fit Out od A do Z | [Company Name]</title>
<meta name="description" content="Profesjonalne wykończenia placówek medycznych, biur i lokali komercyjnych. Własny zespół, pełen zakres instalacji, działamy w całej Polsce.">

<!-- Schema.org Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Company Name]",
  "description": "Kompleksowe wykończenia lokali komercyjnych i użyteczności publicznej",
  "serviceArea": "Poland"
}
</script>
```

### Performance Checklist
- [ ] Image optimization (WebP/AVIF with fallbacks)
- [ ] Lazy loading implementation  
- [ ] Critical CSS inlining
- [ ] GSAP code splitting
- [ ] Proper caching headers
- [ ] Lighthouse audit passing

## ✅ Definition of Done Checklist

### Functional Requirements
- [ ] Hero section with chosen animation concept
- [ ] Portfolio grid with 10 projects and filtering
- [ ] Services section with 6 categories
- [ ] Contact form with B2B fields and validation
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] GSAP animations implemented and performant

### Technical Requirements  
- [ ] Lighthouse score 90+ (all categories)
- [ ] Cross-browser compatibility tested
- [ ] Form functionality working
- [ ] SEO meta tags and schema markup
- [ ] Analytics integration ready
- [ ] `doc.md` fully updated with implementation details

### Business Requirements
- [ ] Clear value proposition communicated
- [ ] Easy path to quote request
- [ ] Professional brand representation
- [ ] Portfolio showcases quality and diversity
- [ ] Contact information prominently displayed

## 🚦 Implementation Phases

### Phase 1: Foundation (Week 1-2)
1. **Research Phase**: Think deeply about architecture and approach
2. **Project Setup**: Astro + TypeScript + Tailwind + GSAP
3. **Base Layout**: Navigation, footer, routing structure
4. **Documentation**: Initialize comprehensive `doc.md`

### Phase 2: Core Features (Week 3-4)  
1. **Hero Section**: Implement chosen animation concept
2. **Portfolio Component**: Grid, filtering, modal system
3. **Services Section**: 6 categories with animations
4. **Contact Form**: B2B-optimized with validation

### Phase 3: Polish & Optimization (Week 5-6)
1. **Animation Refinement**: Performance optimization
2. **Responsive Design**: Mobile/tablet fine-tuning  
3. **SEO Implementation**: Meta tags, schema, sitemap
4. **Performance Audit**: Lighthouse optimization

### Phase 4: Launch Preparation (Week 7-8)
1. **Content Integration**: Real project images and copy
2. **Final Testing**: Cross-browser, accessibility, performance
3. **Analytics Setup**: Google Analytics, form tracking
4. **Documentation**: Final `doc.md` update for handoff

## 🎮 Extended Thinking Prompts

When facing complex decisions, use these thinking triggers:

- **"Think deeply about the optimal animation strategy"** - for GSAP implementation
- **"Think carefully about the B2B user journey"** - for UX decisions  
- **"Megathink the performance implications"** - for optimization choices
- **"Think thoroughly about accessibility requirements"** - for inclusive design

## 📞 Support & Troubleshooting

### Common Issues & Solutions
1. **GSAP Animation Performance**: Use `transform3d`, proper cleanup
2. **Astro Build Issues**: Check for client-side code in wrong components
3. **Form Submission**: Ensure proper action endpoints configured
4. **Image Optimization**: Use Astro's built-in image optimization

### Debug Mode Instructions
```bash
# Enable verbose debugging
DEBUG=claude-code:* claude

# Performance profiling
npm run build -- --verbose
npm run preview -- --debug
```

---

**Remember**: Always update `doc.md` with implementation decisions, challenges encountered, and solutions implemented. This ensures context preservation for future Claude Code sessions and team handoffs.

**Start with deep thinking about the architecture, document your research in `doc.md`, then proceed with implementation following the defined phases.**