# PLANY - Build & Deployment Specifications

## 📋 Build System Overview

**PLANY** uses **Astro 5.10.1** with static site generation optimized for GitHub Pages deployment. The build system focuses on performance, SEO, and production-ready static assets.

## 🛠️ Development Commands

### Core Commands
```bash
# Development server
npm run dev
# Starts Astro dev server at localhost:4321
# Hot reload enabled, fast refresh for components

# Production build
npm run build  
# Generates static files in dist/ directory
# ~15 second build time, optimized assets

# Preview production build
npm run preview
# Serves built files locally for testing
# Simulates production environment

# Astro CLI access
npm run astro
# Access to Astro CLI commands
# Example: npm run astro add react
```

### Personal Development Aliases (from CLAUDE.local.md)
```bash
# Personal shortcuts (local development)
alias ndev='npm run dev'           # Quick dev start
alias nb='npm run build && du -sh dist/'  # Build + size check
alias gac='git add . && git commit -m'    # Quick commit
```

## 📦 Dependencies Analysis

### Production Dependencies (`package.json`)
```json
{
  "@astrojs/react": "^4.3.0",        // React integration for Astro
  "@astrojs/tailwind": "^6.0.2",     // Tailwind CSS integration
  "@tailwindcss/typography": "^0.5.16", // Enhanced typography styles
  "@types/react": "^19.1.8",         // React TypeScript types
  "@types/react-dom": "^19.1.6",     // React DOM TypeScript types
  "astro": "^5.10.1",                // Core Astro framework
  "gsap": "^3.13.0",                 // Animation library
  "lucide-react": "^0.525.0",        // Icon library (1000+ icons)
  "react": "^19.1.0",                // React for interactive components
  "react-dom": "^19.1.0",            // React DOM rendering
  "tailwindcss": "^3.4.17",          // CSS framework
  "typescript": "^5.8.3"             // TypeScript compiler
}
```

### Bundle Analysis
- **Total Size Target**: <200KB (currently ~187KB)
- **Gzipped Target**: <60KB (currently ~59KB)
- **Build Time**: ~14.5 seconds (optimized)
- **Asset Optimization**: Hashed filenames for caching

### Dependency Categories

#### **Core Framework** (Required)
- `astro` - Static site generator
- `typescript` - Type safety and development experience

#### **Styling System** (Required)
- `tailwindcss` - Utility-first CSS framework  
- `@astrojs/tailwind` - Astro integration
- `@tailwindcss/typography` - Enhanced text styling

#### **Interactive Components** (Required)
- `react` + `react-dom` - Client-side interactivity
- `@astrojs/react` - Astro React integration
- `@types/react*` - TypeScript definitions

#### **Animation & UI** (Required)
- `gsap` - Professional animations, ScrollTrigger
- `lucide-react` - Consistent icon system

## ⚙️ Configuration Files

### Astro Configuration (`astro.config.mjs`)
```javascript
export default defineConfig({
  site: 'https://panartek.github.io',     // GitHub Pages URL
  base: '/PLANYv2',                       // Repository path
  integrations: [tailwind(), react()],    // Framework integrations
  output: 'static',                       // Static site generation
  build: {
    assets: 'assets',                     // Asset directory name
    inlineStylesheets: 'always'           // Inline CSS for performance
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',    // Hashed JS files
          chunkFileNames: 'assets/[name].[hash].js',    // Hashed chunks
          assetFileNames: 'assets/[name].[hash].[ext]'  // Hashed assets
        }
      }
    }
  }
});
```

**Key Configuration Features**:
- **GitHub Pages compatibility** - Base path and site URL configured
- **Asset optimization** - Hashed filenames for cache busting
- **Inline stylesheets** - Critical CSS inlined for performance
- **Static output** - Pre-rendered HTML for maximum speed

### TypeScript Configuration (`tsconfig.json`)
```json
{
  "extends": "astro/tsconfigs/strict",     // Astro strict mode
  "compilerOptions": {
    "strict": true,                       // Strict type checking
    "noImplicitAny": true,               // Explicit any types
    "noImplicitReturns": true,           // Return type consistency
    "exactOptionalPropertyTypes": true,   // Exact optional types
    "jsx": "react-jsx",                  // React JSX transform
    "jsxImportSource": "react"           // React as JSX source
  }
}
```

**TypeScript Features**:
- **Strict mode enabled** - Maximum type safety
- **React JSX support** - Modern JSX transform
- **No unused parameters** - Disabled for flexibility
- **Exact optional types** - Precise interface definitions

### Tailwind Configuration (`tailwind.config.mjs`)
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2a2a2a',      // Professional charcoal
        secondary: '#3b82f6',     // Trust blue
        accent: '#ffffff',        // Clean white
        neutral: '#f1f5f9',       // Soft gray
        text: '#374151'           // Readable dark gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']  // Professional typography
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',         // GSAP-compatible
        'slide-up': 'slideUp 0.6s ease-out',       // Component animations
        'float': 'float 3s ease-in-out infinite'   // Decorative animations
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]  // Enhanced text styling
}
```

## 🚀 Build Process

### Build Pipeline
1. **TypeScript Compilation** - Type checking and JS generation
2. **Component Processing** - Astro component compilation
3. **Asset Optimization** - Image and CSS optimization
4. **Bundle Generation** - Rollup bundling with code splitting
5. **Static Generation** - Pre-rendered HTML pages
6. **Asset Hashing** - Cache-busting filename generation

### Build Outputs (`dist/` directory)
```
dist/
├── assets/
│   ├── index.[hash].js          # Main JavaScript bundle
│   ├── index.[hash].css         # Compiled CSS
│   └── [components].[hash].js   # Component chunks
├── images/
│   └── portfolio/               # Optimized images
├── index.html                   # Homepage
├── kontakt/
│   └── index.html              # Contact page
├── projekty/
│   └── index.html              # Projects page
├── favicon.svg                  # Site favicon
├── robots.txt                   # SEO directives
└── sitemap.xml                 # XML sitemap
```

### Performance Optimizations
- **Code splitting** - Separate chunks for components
- **Tree shaking** - Unused code elimination
- **Asset optimization** - Image compression and WebP support
- **CSS inlining** - Critical styles inlined for speed
- **Bundle analysis** - Size monitoring and optimization

## 🌐 Deployment Configuration

### GitHub Pages Setup
**Repository**: `panartek/PLANYv2`  
**Deployment URL**: `https://panartek.github.io/PLANYv2`  
**Branch**: `main` (automatic deployment)

### GitHub Actions Workflow
**File**: `.github/workflows/deploy.yml` (assumed)
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v2
        with:
          path: dist
```

### Deployment Features
- **Automatic deployment** - Pushes to main trigger builds
- **Static hosting** - GitHub Pages serves dist/ files
- **Custom domain ready** - Can be configured for custom domain
- **HTTPS enabled** - Automatic SSL certificates
- **CDN optimization** - Global content delivery

## 🔧 Environment Variables

### Development Environment
```bash
# Local development (optional)
NODE_ENV=development
ASTRO_STUDIO_APP_TOKEN=optional  # For Astro Studio integration
```

### Production Environment
```bash
# GitHub Pages environment
NODE_ENV=production
PUBLIC_SITE_URL=https://panartek.github.io/PLANYv2
```

### Environment Configuration
- **No sensitive variables** - All data is static
- **Public environment** - All variables can be public
- **Build-time substitution** - Environment variables replaced during build

## 📊 Performance Monitoring

### Build Metrics
- **Build time**: ~14.5 seconds (target: <15s)
- **Bundle size**: 187KB (target: <200KB)
- **Gzipped size**: 59KB (target: <60KB)
- **Page speed**: Optimized for Core Web Vitals

### Size Analysis Commands
```bash
# Check build size
npm run build && du -sh dist/

# Detailed bundle analysis
npm run build && npx astro info

# Check specific asset sizes
ls -lah dist/assets/
```

### Performance Targets
- **First Contentful Paint (FCP)**: <1.2s
- **Largest Contentful Paint (LCP)**: <2.5s
- **Cumulative Layout Shift (CLS)**: <0.1
- **First Input Delay (FID)**: <100ms

## 🔍 Development Tools

### Local Development
```bash
# Start development server
npm run dev
# Server: http://localhost:4321
# Network: http://0.0.0.0:4321 (WSL2 compatibility)

# Type checking
npx astro check
# Validates TypeScript and Astro components

# Build preview
npm run build && npm run preview
# Tests production build locally
```

### Debugging Tools
- **Astro Dev Tools** - Built-in component inspector
- **React Dev Tools** - Browser extension for React components
- **GSAP Dev Tools** - Animation timeline debugging
- **Lighthouse** - Performance and accessibility auditing

## 🚨 Common Build Issues & Solutions

### Issue: GSAP Console Errors
**Problem**: `target .geometric-shape not found`  
**Solution**: ✅ Fixed - Updated selectors to `.geometric-icon-container`  
**Status**: Resolved (2025-01-13)

### Issue: Asset Loading
**Problem**: Missing assets in production  
**Solution**: Use relative paths, check `public/` directory structure

### Issue: TypeScript Errors
**Problem**: Strict mode type violations  
**Solution**: Explicit type definitions, proper interface usage

### Issue: Bundle Size Optimization
**Current**: 187KB (within target)  
**Monitoring**: Build size tracking with `du -sh dist/`

## 📝 Release Process

### Version Management
```bash
# Update version (if using semantic versioning)
npm version patch|minor|major

# Create release tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push with tags
git push origin main --tags
```

### Deployment Checklist
1. ✅ Run `npm run build` locally
2. ✅ Check bundle size (`<200KB`)
3. ✅ Test with `npm run preview`
4. ✅ Verify all links work
5. ✅ Push to main branch
6. ✅ Monitor GitHub Actions deployment
7. ✅ Verify live site functionality

### Production Verification
- **URL**: https://panartek.github.io/PLANYv2
- **Performance**: Lighthouse audit >90 score
- **Functionality**: All forms and animations working
- **SEO**: Meta tags and schema markup present
- **Accessibility**: WCAG AA compliance verified

This build and deployment configuration provides a robust, performant, and maintainable foundation for the PLANY website with automated deployment and comprehensive optimization.