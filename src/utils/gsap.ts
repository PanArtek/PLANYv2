// GSAP configuration and animation utilities
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { AnimationOptions } from './types';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation configuration constants
export const ANIMATION_DEFAULTS = {
  duration: 0.6,
  ease: 'power2.out',
  stagger: 0.1,
} as const;

// Performance-optimized fade in animation
export const createFadeInAnimation = (
  elements: string | Element | Element[],
  options: AnimationOptions = {}
) => {
  const config = { ...ANIMATION_DEFAULTS, ...options };
  
  // Early return for reduced motion
  if (respectsReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return gsap.timeline();
  }
  
  // Enable will-change before animation
  enableWillChange(elements);
  
  const animation = gsap.fromTo(
    elements,
    { 
      autoAlpha: 0, // Use autoAlpha for better performance
      y: 30,
      force3D: true
    },
    { 
      autoAlpha: 1, 
      y: 0, 
      duration: config.duration,
      ease: config.ease,
      stagger: config.stagger,
      onComplete: () => {
        // Clean up will-change after animation
        disableWillChange(elements);
      },
      scrollTrigger: config.trigger ? {
        trigger: config.trigger,
        start: config.start || 'top 80%',
        end: config.end,
        scrub: config.scrub,
        once: true, // Animation runs only once for performance
        fastScrollEnd: true, // Optimize for fast scrolling
      } : undefined
    }
  );
  
  return animation;
};

// Stagger reveal animation for grids/lists
export const createStaggerReveal = (
  elements: string | Element | Element[],
  options: AnimationOptions = {}
) => {
  const config = { ...ANIMATION_DEFAULTS, stagger: 0.15, ...options };
  
  return gsap.fromTo(
    elements,
    { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      force3D: true
    },
    { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      duration: config.duration,
      ease: config.ease,
      stagger: config.stagger,
      scrollTrigger: config.trigger ? {
        trigger: config.trigger,
        start: config.start || 'top 85%',
        once: true
      } : undefined
    }
  );
};

// Building blocks hero animation system
export const createBuildingBlocksAnimation = (container: string | Element) => {
  const timeline = gsap.timeline({ repeat: -1, yoyo: true });
  
  // Create floating geometric shapes
  timeline
    .fromTo(`${container} .block-1`, 
      { x: -100, y: -50, rotation: 0, opacity: 0 },
      { x: 0, y: 0, rotation: 45, opacity: 1, duration: 2, ease: 'power2.out' }
    )
    .fromTo(`${container} .block-2`, 
      { x: 100, y: 50, rotation: 0, opacity: 0 },
      { x: 0, y: 0, rotation: -30, opacity: 1, duration: 2, ease: 'power2.out' },
      '-=1.5'
    )
    .fromTo(`${container} .block-3`, 
      { x: 0, y: 100, rotation: 0, opacity: 0 },
      { x: 0, y: 0, rotation: 15, opacity: 1, duration: 2, ease: 'power2.out' },
      '-=1.5'
    );
    
  // Add continuous floating animation
  gsap.to(`${container} .floating`, {
    y: -10,
    duration: 2,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
    stagger: 0.3
  });
  
  return timeline;
};

// Smooth scroll to element utility
export const scrollToElement = (target: string | Element, offset: number = 0) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: target,
      offsetY: offset
    },
    ease: 'power2.inOut'
  });
};

// Cleanup function for ScrollTrigger instances
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Reduced motion media query handler with caching
let reducedMotionCache: boolean | null = null;
export const respectsReducedMotion = () => {
  if (reducedMotionCache === null) {
    reducedMotionCache = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return reducedMotionCache;
};

// Performance optimization utilities
export const enableWillChange = (elements: string | Element | Element[]) => {
  gsap.set(elements, { willChange: 'transform' });
};

export const disableWillChange = (elements: string | Element | Element[]) => {
  gsap.set(elements, { willChange: 'auto' });
};

// Initialize GSAP with enhanced performance optimizations
export const initGSAP = () => {
  if (typeof window === 'undefined') return;
  
  // Respect user's motion preferences
  if (respectsReducedMotion()) {
    gsap.globalTimeline.timeScale(0.1); // Dramatically slow down all animations
    return;
  }
  
  // Set global GSAP defaults for performance
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.6,
    force3D: true, // Force hardware acceleration globally
    autoAlpha: 1 // Use autoAlpha instead of opacity when possible
  });
  
  // Optimize ScrollTrigger for performance
  ScrollTrigger.config({
    limitCallbacks: true, // Limit callback frequency for better performance
    syncInterval: 150,    // Sync interval for better performance
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' // Reduce refresh events
  });
  
  // Enhanced resize handler with RAF
  let resizeTimeout: number;
  let ticking = false;
  
  const handleResize = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(handleResize, 250);
  });
  
  // Pause animations when tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      gsap.globalTimeline.pause();
    } else {
      gsap.globalTimeline.resume();
    }
  });
};