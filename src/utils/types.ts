// TypeScript interfaces for the fit-out company website

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
  challenge?: string; // Optional project challenge highlight
  solution?: string;  // Optional solution highlight
}

export interface QuoteRequest {
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

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
  category: 'medical' | 'education' | 'office' | 'retail' | 'installations' | 'turnkey';
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

// GSAP Animation Options
export interface AnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

// Layout Props
export interface BaseLayoutProps {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
  noindex?: boolean;
}