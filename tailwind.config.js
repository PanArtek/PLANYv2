/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        // Glass morphism variants
        'glass-light': 'var(--glass-bg-light)',
        'glass-dark': 'var(--glass-bg-dark)',
        'glass-border': 'var(--glass-border)',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'magnetic': 'magnetic 0.3s ease-out',
        'logo-pulse': 'logoPulse 2s ease-in-out infinite',
        'menu-slide': 'menuSlide 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'header-blur': 'headerBlur 0.3s ease-out',
        'scale-hover': 'scaleHover 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px var(--color-accent)' },
          '100%': { boxShadow: '0 0 40px var(--color-accent), 0 0 60px var(--color-accent)' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(var(--magnetic-x, 0), var(--magnetic-y, 0)) scale(1.05)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        logoPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        menuSlide: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        headerBlur: {
          '0%': { backdropFilter: 'blur(0px)', background: 'transparent' },
          '100%': { backdropFilter: 'blur(20px)', background: 'var(--glass-bg)' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transformOrigin: {
        'center-magnetic': 'center center',
      },
    },
  },
  plugins: [],
}