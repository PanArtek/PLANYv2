# PLANY - API Endpoints & Data Layer

## 📋 Overview

**PLANY** is a **static Astro site** with no server-side API endpoints. All data is managed through TypeScript constants, interfaces, and mock data structures for development and presentation purposes.

## 🗃️ Data Architecture

### Data Layer Structure
```
src/utils/
├── constants.ts    # Static data and configuration
├── types.ts        # TypeScript interfaces
└── gsap.ts         # Animation utilities (not data)
```

## 📊 Data Sources

### 1. Site Configuration (`SITE_CONFIG`)
**Location**: `src/utils/constants.ts:5-11`

```typescript
export const SITE_CONFIG = {
  name: 'PLANY',
  description: 'Własny zespół 20+ specjalistów eliminuje problemy koordynacji...',
  url: 'https://panartek.github.io/PLANYv2',
  author: 'PLANY',
  keywords: 'kompleksowy wykonawca wykończeń, wykończenia pod klucz...'
} as const;
```

**Usage**: SEO meta tags, schema markup, global site information

### 2. Navigation Data (`NAVIGATION`)
**Location**: `src/utils/constants.ts:14-20`

```typescript
export const NAVIGATION: NavigationItem[] = [
  { label: 'Strona główna', href: '/' },
  { label: 'Projekty', href: '/#realizacje' },
  { label: 'Usługi', href: '/#uslugi' },
  { label: 'O nas', href: '/#o-nas' },
  { label: 'Kontakt', href: '/#kontakt' }
] as const;
```

**Interface**: `NavigationItem` (src/utils/types.ts:41-45)
- `label: string` - Display text
- `href: string` - Navigation URL
- `external?: boolean` - Optional external link flag

**Usage**: Main navigation, footer navigation, mobile menu

### 3. Services Data (`SERVICES`)
**Location**: `src/utils/constants.ts:23-102`

**Structure**: Array of 6 service categories
```typescript
export const SERVICES: ServiceCategory[] = [
  {
    id: 'medical',
    title: 'Wykończenia Medyczne',
    description: 'Właśni elektricy i instalatorzy - znamy wymagania sanitarne',
    icon: 'Heart',
    category: 'medical',
    features: [
      'Własni elektricy znający specyfikę medyczną',
      'Instalacje elektryczne zgodne z normami medycznymi',
      // ... more features
    ]
  },
  // ... 5 more services
] as const;
```

**Interface**: `ServiceCategory` (src/utils/types.ts:32-39)
- `id: string` - Unique identifier
- `title: string` - Service name
- `description: string` - Short description
- `icon: string` - Lucide icon name
- `features: string[]` - Feature list
- `category: 'medical' | 'education' | 'office' | 'retail' | 'installations' | 'turnkey'`

**Service Categories**:
1. **Medical** (`medical`) - Healthcare facilities
2. **Education** (`education`) - Schools, universities
3. **Office** (`office`) - Business spaces
4. **Retail** (`retail`) - Commercial stores
5. **Installations** (`installations`) - Technical systems
6. **Turnkey** (`turnkey`) - Complete solutions

### 4. Portfolio Data (`PORTFOLIO_PROJECTS`)
**Location**: `src/utils/constants.ts:105-236`

**Structure**: Array of 10 completed projects
```typescript
export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'klinika-stomatologiczna-warszawa',
    title: 'Klinika Stomatologiczna - Warszawa',
    category: 'medical',
    year: 2024,
    location: 'Warszawa, Mokotów',
    area: 280,
    image: '/images/portfolio/klinika-stomatologiczna.jpg',
    description: 'Nowoczesna klinika stomatologiczna z 6 gabinetami...',
    tags: ['stomatologia', 'gabinety zabiegowe', 'sterylizacja'],
    challenge: 'Adaptacja przestrzeni handlowej na cele medyczne...',
    solution: 'Zastosowanie specjalistycznych materiałów...'
  },
  // ... 9 more projects
] as const;
```

**Interface**: `Project` (src/utils/types.ts:3-15)
- `id: string` - Unique project identifier
- `title: string` - Project name
- `category: 'medical' | 'education' | 'retail' | 'office' | 'other'`
- `year: number` - Completion year
- `location: string` - City and district
- `area: number` - Square meters
- `image: string` - Image path
- `description: string` - Project description
- `tags: string[]` - Category tags
- `challenge?: string` - Optional project challenge
- `solution?: string` - Optional solution description

**Portfolio Distribution**:
- **Medical**: 3 projects (Warszawa, Poznań, Szczecin)
- **Education**: 2 projects (Kraków, Łódź)
- **Office**: 2 projects (Wrocław, Katowice)
- **Retail**: 2 projects (Gdańsk, Lublin)
- **Other**: 1 project (Kielce restaurant)

### 5. Form Configuration Data

#### Project Types (`PROJECT_TYPES`)
**Location**: `src/utils/constants.ts:239-245`
```typescript
export const PROJECT_TYPES = [
  { value: 'medical', label: 'Placówka medyczna' },
  { value: 'education', label: 'Instytucja edukacyjna' },
  { value: 'office', label: 'Przestrzeń biurowa' },
  { value: 'retail', label: 'Lokal handlowy' },
  { value: 'other', label: 'Inne' }
] as const;
```

#### Budget Ranges (`BUDGET_RANGES`)
**Location**: `src/utils/constants.ts:247-253`
```typescript
export const BUDGET_RANGES = [
  { value: 'under-200k', label: 'Do 200 tys. zł' },
  { value: '200k-500k', label: '200-500 tys. zł' },
  { value: '500k-1m', label: '500 tys. - 1 mln zł' },
  { value: 'over-1m', label: 'Powyżej 1 mln zł' },
  { value: 'flexible', label: 'Do ustalenia' }
] as const;
```

#### Timeline Options (`TIMELINES`)
**Location**: `src/utils/constants.ts:255-260`
```typescript
export const TIMELINES = [
  { value: 'asap', label: 'Jak najszybciej' },
  { value: '1-3months', label: '1-3 miesiące' },
  { value: '3-6months', label: '3-6 miesięcy' },
  { value: '6months+', label: 'Powyżej 6 miesięcy' }
] as const;
```

## 🔒 TypeScript Interfaces

### Core Data Types

#### `Project` Interface
```typescript
export interface Project {
  id: string;
  title: string;
  category: 'medical' | 'education' | 'retail' | 'office' | 'other';
  year: number;
  location: string;
  area: number; // square meters
  image: string;
  description: string;
  tags: string[];
  challenge?: string;
  solution?: string;
}
```

#### `ServiceCategory` Interface
```typescript
export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
  category: 'medical' | 'education' | 'office' | 'retail' | 'installations' | 'turnkey';
}
```

#### `QuoteRequest` Interface
```typescript
export interface QuoteRequest {
  projectType: 'medical' | 'education' | 'office' | 'retail' | 'other';
  location: string;
  area: number;
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

## 📡 Data Flow Patterns

### 1. Import Pattern
```typescript
// In Astro components
---
import { SERVICES, PORTFOLIO_PROJECTS } from '../utils/constants';
import type { Project, ServiceCategory } from '../utils/types';
---
```

### 2. Data Filtering
```typescript
// Portfolio component with category filtering
const filteredProjects = PORTFOLIO_PROJECTS.filter(project => 
  category === 'all' || project.category === category
);
```

### 3. Props Interface Pattern
```typescript
// Component with typed props
---
export interface Props {
  projects: Project[];
  showAll?: boolean;
  limit?: number;
}

const { projects, showAll = false, limit = 6 } = Astro.props;
---
```

## 🎯 Data Usage Examples

### Services Section
```astro
---
import { SERVICES } from '../utils/constants';
---

{SERVICES.map((service) => (
  <div class="service-card">
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    <ul>
      {service.features.map(feature => <li>{feature}</li>)}
    </ul>
  </div>
))}
```

### Portfolio Filtering
```astro
---
const { category = 'all', limit = 6 } = Astro.props;
const filteredProjects = PORTFOLIO_PROJECTS
  .filter(project => category === 'all' || project.category === category)
  .slice(0, limit);
---
```

### SEO Meta Tags
```astro
---
import { SITE_CONFIG } from '../utils/constants';
const fullTitle = `${title} | ${SITE_CONFIG.name}`;
---

<title>{fullTitle}</title>
<meta name="description" content={SITE_CONFIG.description} />
```

## 🔄 Future API Considerations

### Potential Dynamic Data Sources
If the site evolves to include server-side functionality:

1. **Contact Form Submission** - Would need backend endpoint
2. **Portfolio Management** - CMS integration possible
3. **Quote Request Processing** - Email service integration
4. **Analytics Data** - Google Analytics API
5. **Content Management** - Headless CMS (Contentful, Strapi)

### Static Site Benefits
Current static approach provides:
- **Maximum performance** - No API calls during runtime
- **Reliability** - No server dependencies
- **Security** - No attack surface
- **Cost efficiency** - Static hosting
- **SEO benefits** - Pre-rendered content

## 📊 Data Summary

| Data Type | Count | Location | Usage |
|-----------|--------|----------|--------|
| Services | 6 categories | constants.ts | Services section, forms |
| Portfolio | 10 projects | constants.ts | Portfolio section, case studies |
| Navigation | 5 items | constants.ts | Header, footer navigation |
| Form Options | 3 sets | constants.ts | Contact form dropdowns |
| TypeScript Interfaces | 6 types | types.ts | Type safety, component props |

This data architecture provides a solid foundation for the static site while maintaining flexibility for future enhancements and integrations.