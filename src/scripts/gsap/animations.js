// GSAP Animation Utilities
// Advanced animation system for consistent motion design

// Animation configurations
const ANIMATION_CONFIG = {
  durations: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    hero: 1.5
  },
  easings: {
    smooth: 'power2.out',
    elastic: 'elastic.out(1, 0.3)',
    bounce: 'back.out(1.7)',
    magnetic: 'power3.out'
  },
  delays: {
    stagger: 0.1,
    sequence: 0.2,
    hero: 0.3
  }
};

// Magnetic interaction system
export function initMagneticElements() {
  const magneticElements = document.querySelectorAll('.magnetic-element');
  
  magneticElements.forEach((element) => {
    let magneticTimeline;
    
    element.addEventListener('mouseenter', () => {
      gsap.to(element, {
        scale: 1.05,
        duration: ANIMATION_CONFIG.durations.fast,
        ease: ANIMATION_CONFIG.easings.magnetic
      });
    });
    
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const intensity = element.dataset.magneticIntensity || 0.3;
      const magneticX = x * intensity;
      const magneticY = y * intensity;
      
      gsap.to(element, {
        x: magneticX,
        y: magneticY,
        duration: ANIMATION_CONFIG.durations.fast,
        ease: ANIMATION_CONFIG.easings.magnetic
      });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        scale: 1,
        duration: ANIMATION_CONFIG.durations.normal,
        ease: ANIMATION_CONFIG.easings.elastic
      });
    });
  });
}

// Scroll reveal animations
export function initScrollReveal() {
  // Batch animations for performance
  ScrollTrigger.batch('.reveal-up', {
    onEnter: (elements) => {
      gsap.from(elements, {
        y: 100,
        opacity: 0,
        duration: ANIMATION_CONFIG.durations.normal,
        stagger: ANIMATION_CONFIG.delays.stagger,
        ease: ANIMATION_CONFIG.easings.smooth
      });
    },
    once: true
  });

  ScrollTrigger.batch('.reveal-left', {
    onEnter: (elements) => {
      gsap.from(elements, {
        x: -100,
        opacity: 0,
        duration: ANIMATION_CONFIG.durations.normal,
        stagger: ANIMATION_CONFIG.delays.stagger,
        ease: ANIMATION_CONFIG.easings.smooth
      });
    },
    once: true
  });

  ScrollTrigger.batch('.reveal-right', {
    onEnter: (elements) => {
      gsap.from(elements, {
        x: 100,
        opacity: 0,
        duration: ANIMATION_CONFIG.durations.normal,
        stagger: ANIMATION_CONFIG.delays.stagger,
        ease: ANIMATION_CONFIG.easings.smooth
      });
    },
    once: true
  });

  // Scale animations
  ScrollTrigger.batch('.reveal-scale', {
    onEnter: (elements) => {
      gsap.from(elements, {
        scale: 0.8,
        opacity: 0,
        duration: ANIMATION_CONFIG.durations.normal,
        stagger: ANIMATION_CONFIG.delays.stagger,
        ease: ANIMATION_CONFIG.easings.bounce
      });
    },
    once: true
  });
}

// Advanced text animations
export function animateText(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    const text = element.textContent;
    const words = text.split(' ');
    
    // Split text into words for animation
    element.innerHTML = words.map(word => 
      `<span class="word">${word}</span>`
    ).join(' ');
    
    const wordElements = element.querySelectorAll('.word');
    
    gsap.from(wordElements, {
      y: options.y || 50,
      opacity: 0,
      duration: options.duration || ANIMATION_CONFIG.durations.normal,
      stagger: options.stagger || ANIMATION_CONFIG.delays.stagger,
      ease: options.ease || ANIMATION_CONFIG.easings.smooth,
      ...options
    });
  });
}

// Floating animations for background elements
export function initFloatingElements() {
  const floatingElements = document.querySelectorAll('.floating-shape');
  
  floatingElements.forEach((element, index) => {
    // Random initial position and animation
    const randomDuration = gsap.utils.random(3, 8);
    const randomX = gsap.utils.random(-30, 30);
    const randomY = gsap.utils.random(-20, 20);
    const randomRotation = gsap.utils.random(-180, 180);
    
    gsap.to(element, {
      x: randomX,
      y: randomY,
      rotation: randomRotation,
      duration: randomDuration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: index * 0.5
    });
    
    // Subtle scale animation
    gsap.to(element, {
      scale: gsap.utils.random(0.8, 1.2),
      duration: gsap.utils.random(2, 4),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: index * 0.3
    });
  });
}

// Page transition animations
export function pageTransition() {
  const tl = gsap.timeline();
  
  tl.to('.page-transition', {
    scaleX: 1,
    duration: ANIMATION_CONFIG.durations.normal,
    ease: ANIMATION_CONFIG.easings.smooth,
    transformOrigin: 'left center'
  })
  .to('.page-transition', {
    scaleX: 0,
    duration: ANIMATION_CONFIG.durations.normal,
    ease: ANIMATION_CONFIG.easings.smooth,
    transformOrigin: 'right center',
    delay: 0.1
  });
  
  return tl;
}

// Counter animation utility
export function animateCounter(element, target, options = {}) {
  const counter = { value: 0 };
  const suffix = options.suffix || '';
  const prefix = options.prefix || '';
  
  return gsap.to(counter, {
    value: target,
    duration: options.duration || ANIMATION_CONFIG.durations.slow,
    ease: options.ease || ANIMATION_CONFIG.easings.smooth,
    onUpdate: () => {
      const value = Math.floor(counter.value);
      element.textContent = prefix + value + suffix;
    },
    scrollTrigger: options.trigger ? {
      trigger: options.trigger,
      start: 'top 80%',
      once: true
    } : undefined,
    ...options
  });
}

// Initialize all animations
export function initAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    return;
  }
  
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Initialize animation systems
  initMagneticElements();
  initScrollReveal();
  initFloatingElements();
  
  // Refresh ScrollTrigger after initialization
  ScrollTrigger.refresh();
}

// Export configuration for external use
export { ANIMATION_CONFIG };