# PLANY - Component Specifications

## 📋 Component Architecture Overview

The PLANY project uses a **component-driven architecture** with Astro's island architecture pattern, combining static generation with selective client-side hydration for optimal performance.

## 🏗️ Component Categories

### Component Organization
```
src/components/
├── layout/     # Site structure components
├── sections/   # Page section components  
├── ui/         # Atomic UI components
```

## 🎯 Layout Components

### Navigation.astro
**Location**: `src/components/layout/Navigation.astro`

**Purpose**: Main site navigation with responsive mobile menu

**Props Interface**:
```typescript
// No props interface - uses constants
```

**Features**:
- **Responsive design** - Desktop horizontal, mobile hamburger menu
- **Smooth scrolling** - Anchor link navigation with offset
- **Logo integration** - PLANY branding with home link
- **Mobile-first** - Collapsible menu for mobile devices
- **Accessibility** - Proper ARIA labels and keyboard navigation

**Usage**:
```astro
<Navigation />
```

**Dependencies**: 
- `NAVIGATION` constant from `utils/constants.ts`
- `Icon` component for hamburger menu

---

### Footer.astro
**Location**: `src/components/layout/Footer.astro`

**Purpose**: 4-column footer with company info, services, contact, projects

**Props Interface**:
```typescript
// No props interface - uses constants
```

**Features**:
- **4-column layout** - Company, Services, Contact, Projects
- **Responsive grid** - Stacks on mobile, 4 columns on desktop
- **Social links** - Facebook, LinkedIn integration
- **Copyright notice** - Current year auto-generation
- **Quick navigation** - Duplicate of main navigation for UX

**Structure**:
1. **Company Column** - PLANY brand, description, contact info
2. **Services Column** - Quick links to service categories
3. **Contact Column** - Phone, email, business hours
4. **Projects Column** - Portfolio categories and links

---

## 🧱 UI Components

### Button.astro (Polymorphic Component)
**Location**: `src/components/ui/Button.astro`

**Props Interface**:
```typescript
export interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'primary-hero' | 'secondary-hero' | 'tertiary';
  size?: 'sm' | 'md' | 'lg' | 'large';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  class?: string;
  'data-category'?: string; // For portfolio filtering
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-pressed'?: boolean;
  role?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  geometric?: boolean; // Enable geometric corner accents
}
```

**Variants**:
- **primary** → `btn-primary` (Pink with orange corner accent)
- **secondary** → `btn-secondary` (Outline with corner accent)
- **outline** → `btn-outline` (Orange with pink dot accent)
- **primary-hero** → `btn-primary-hero` (Larger CTA version)
- **secondary-hero** → `btn-secondary-hero` (Larger secondary version)
- **tertiary** → Maps to `btn-outline` styling

**Sizes**:
- **sm** → `px-4 py-2 text-sm`
- **md** → `px-6 py-3 text-base` (default)
- **lg** → `px-8 py-4 text-lg`
- **large** → `px-8 py-4 text-lg`

**Polymorphic Behavior**:
- **With `href`** → Renders as `<a>` tag
- **Without `href`** → Renders as `<button>` tag
- **External links** → Automatic `rel="noopener noreferrer"`
- **Accessibility** → Screen reader announcements for external links

**Usage Examples**:
```astro
<!-- Primary button -->
<Button variant="primary" size="lg">Poproś o wycenę</Button>

<!-- Link button -->
<Button variant="secondary" href="/#kontakt">Skontaktuj się</Button>

<!-- Hero CTA -->
<Button variant="primary-hero" href="/#kontakt" geometric>
  Darmowa wycena
</Button>

<!-- Portfolio filter -->
<Button 
  variant="outline" 
  data-category="medical" 
  aria-pressed="false"
>
  Medyczne
</Button>
```

---

### GeometricIcon.astro
**Location**: `src/components/ui/GeometricIcon.astro`

**Props Interface**:
```typescript
export interface Props {
  shape: 'triangle' | 'circle' | 'square' | 'hexagon' | 'diamond' | 'pentagon';
  icon: string; // Lucide icon name
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  class?: string;
}
```

**Shape System** (6 geometric shapes):
1. **Triangle** → Medical services (emergency/precision)
2. **Circle** → Education services (community/unity)
3. **Square** → Office services (structure/business)
4. **Hexagon** → Retail services (efficiency/commerce)
5. **Diamond** → Installation services (precision/technical)
6. **Pentagon** → Turnkey services (completeness/stability)

**Size Configuration**:
- **sm** → Container: `w-8 h-8`, Icon: `w-4 h-4`
- **md** → Container: `w-12 h-12`, Icon: `w-6 h-6` (default)
- **lg** → Container: `w-16 h-16`, Icon: `w-8 h-8`
- **xl** → Container: `w-20 h-20`, Icon: `w-10 h-10`

**Animation Features**:
- **Hover scale** → `scale(1.1)` for all shapes
- **Shape-specific rotations**:
  - Triangle: `rotate(120deg)`
  - Hexagon: `rotate(60deg)`
  - Diamond: `rotate(45deg)`
  - Pentagon: `rotate(72deg)`
  - Square: `rotate(45deg)`
  - Circle: `scale(1.15)` (no rotation)
- **Hardware acceleration** → `will-change: transform`
- **Reduced motion support** → Respects `prefers-reduced-motion`

**Usage**:
```astro
<!-- Service category icon -->
<GeometricIcon 
  shape="triangle" 
  icon="Heart" 
  size="lg" 
  color="var(--primary-light)" 
/>

<!-- Custom colored icon -->
<GeometricIcon 
  shape="hexagon" 
  icon="ShoppingBag" 
  color="#EC9CCC" 
/>
```

---

### Card.astro
**Location**: `src/components/ui/Card.astro`

**Props Interface**:
```typescript
export interface Props {
  variant?: 'default' | 'project' | 'service' | 'contact';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  clipPath?: 'none' | 'corner-cut' | 'angled-cut' | 'geometric';
  class?: string;
  style?: string;
}
```

**Variants**:
- **default** → Basic card styling
- **project** → Portfolio project cards with image optimization
- **service** → Service category cards with geometric icons
- **contact** → Contact information cards with special styling

**Clip Path Options** (Geometric Design System):
- **none** → Standard rectangular card
- **corner-cut** → Geometric corner cut accent
- **angled-cut** → Diagonal corner design
- **geometric** → Complex geometric clip path

**Usage**:
```astro
<!-- Service card -->
<Card variant="service" padding="lg" clipPath="corner-cut">
  <h3>Service Title</h3>
  <p>Service description...</p>
</Card>

<!-- Project card -->
<Card variant="project" padding="md">
  <img src="/images/project.jpg" alt="Project" />
  <div class="card-content">
    <h4>Project Name</h4>
    <p>Project details...</p>
  </div>
</Card>
```

---

### Icon.astro
**Location**: `src/components/ui/Icon.astro`

**Props Interface**:
```typescript
export interface Props {
  name: string; // Lucide icon name
  size?: number | string;
  class?: string;
  style?: string;
}
```

**Purpose**: Wrapper for Lucide React icons with consistent styling

**Features**:
- **Lucide React integration** - Access to 1000+ icons
- **Size configuration** - Flexible sizing options
- **CSS class support** - Full Tailwind integration
- **Accessibility** - Proper ARIA attributes

**Usage**:
```astro
<!-- Basic icon -->
<Icon name="Heart" />

<!-- Sized icon with classes -->
<Icon name="Phone" size={24} class="text-blue-500" />

<!-- Custom styled icon -->
<Icon name="Mail" class="w-6 h-6 text-gray-600" />
```

---

## 📑 Section Components

### Hero.astro
**Location**: `src/components/sections/Hero.astro`

**Props Interface**:
```typescript
// No props interface - uses constants
```

**Features**:
- **GSAP timeline animations** - Staggered entrance effects
- **Responsive typography** - `clamp()` scaling for mobile
- **Trust indicators** - "20+ specjalistów", "17 lat doświadczenia"
- **Geometric background** - Subtle shape elements
- **Primary CTA** - "Poproś o wycenę" button
- **Smooth scrolling** - Navigation to contact section

**Animation Sequence**:
1. **Title animation** (0.8s delay)
2. **Subtitle animation** (0.6s delay)
3. **CTA buttons** (0.5s delay)
4. **Trust indicators** (0.4s delay)

---

### Services.astro
**Location**: `src/components/sections/Services.astro`

**Props Interface**:
```typescript
// No props interface - uses SERVICES constant
```

**Features**:
- **6-service grid** - Responsive layout (1/2/3 columns)
- **Geometric shape mapping** - Each service has unique shape
- **GSAP ScrollTrigger** - Elements animate on scroll
- **Shape-specific animations** - Hover rotations per service type
- **Service categories**:
  1. **Medical** (Triangle, Heart icon)
  2. **Education** (Circle, GraduationCap icon)
  3. **Office** (Square, Building2 icon)
  4. **Retail** (Hexagon, ShoppingBag icon)
  5. **Installations** (Diamond, Zap icon)
  6. **Turnkey** (Pentagon, Key icon)

**Service Data Structure**:
```typescript
{
  id: string,
  title: string,
  description: string,
  icon: string, // Lucide icon name
  features: string[], // 4 features per service
  category: ServiceCategory
}
```

---

### Portfolio.astro
**Location**: `src/components/sections/Portfolio.astro`

**Props Interface**:
```typescript
export interface Props {
  showAll?: boolean;
  limit?: number;
  category?: 'all' | 'medical' | 'education' | 'office' | 'retail' | 'other';
}
```

**Features**:
- **10 project showcase** - Real project data from constants
- **Category filtering** - Filter by service type
- **Responsive grid** - 1/2/3 column layout
- **Project details**:
  - Location and area (m²)
  - Completion year
  - Challenge/solution highlights
  - Project tags
  - High-quality images

**Project Categories**:
- **Medical**: 3 projects (Warszawa, Poznań, Szczecin)
- **Education**: 2 projects (Kraków, Łódź)
- **Office**: 2 projects (Wrocław, Katowice)
- **Retail**: 2 projects (Gdańsk, Lublin)
- **Other**: 1 project (Kielce restaurant)

**Usage**:
```astro
<!-- Show first 6 projects -->
<Portfolio showAll={false} limit={6} />

<!-- Show all medical projects -->
<Portfolio category="medical" showAll={true} />
```

---

### About.astro
**Location**: `src/components/sections/About.astro`

**Props Interface**:
```typescript
// No props interface - static content
```

**Features**:
- **Company story** - 17 years experience narrative
- **Team highlights** - 20+ specialists mention
- **Value proposition** - "Own team eliminates coordination chaos"
- **Trust building** - Experience and reliability focus
- **Visual elements** - Geometric accent shapes

---

### Contact.astro
**Location**: `src/components/sections/Contact.astro`

**Props Interface**:
```typescript
// No props interface - form configuration from constants
```

**Features**:
- **Contact form** - Quote request with validation
- **Company information** - Business details and hours
- **Form fields**:
  - Project type (dropdown from `PROJECT_TYPES`)
  - Budget range (dropdown from `BUDGET_RANGES`)
  - Timeline (dropdown from `TIMELINES`)
  - Project description (textarea)
  - Contact information (name, email, phone, company)
- **Geometric cards** - Contact info in styled containers
- **Form validation** - Client-side validation patterns

**Form Data Interface**:
```typescript
interface QuoteRequest {
  projectType: 'medical' | 'education' | 'office' | 'retail' | 'other';
  location: string;
  area: number;
  budget: string;
  timeline: string;
  description: string;
  contact: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
}
```

---

## 🎨 Animation Integration

### GSAP Animation Patterns

#### Entrance Animations
```javascript
// Fade in with slide up
gsap.fromTo('.element', 
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.6 }
);
```

#### ScrollTrigger Integration
```javascript
// Animate on scroll
gsap.fromTo('.service-card',
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.services-section',
      start: 'top 80%',
      once: true
    }
  }
);
```

#### Geometric Hover Effects
```css
.geometric-icon-container:hover {
  transform: scale(1.1);
}

.geometric-triangle:hover {
  transform: rotate(120deg) scale(1.1);
}
```

## 🎯 Component Patterns

### Props Inheritance
- **TypeScript interfaces** - All components strongly typed
- **Default props** - Sensible defaults for optional props
- **Prop validation** - Runtime validation where needed

### Accessibility Features
- **ARIA labels** - Screen reader support
- **Keyboard navigation** - Tab order and focus management
- **Semantic HTML** - Proper element usage
- **Color contrast** - WCAG AA compliance
- **Reduced motion** - Animation preference respect

### Performance Optimizations
- **Static by default** - Astro islands architecture
- **Selective hydration** - Only interactive components
- **Hardware acceleration** - CSS `will-change` properties
- **Image optimization** - WebP support, lazy loading
- **Bundle splitting** - Optimal chunk sizes

This component architecture provides a scalable, maintainable, and performant foundation for the PLANY website while maintaining the geometric design system and professional aesthetic.