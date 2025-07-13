/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 2025 Modern Color System - Forest Green & Organic
        primary: {
          50: '#F6FAF7',
          100: '#E8F3EA',
          200: '#D1E7D5',
          300: '#A8D2B1',
          400: '#6FB87A',
          500: '#4A9B5E',
          600: '#2D6B3E',
          700: '#1F4A2A',
          800: '#173B21',
          900: '#0F2917',
        },
        neutral: {
          50: '#FDFCFB',
          100: '#F8F6F3',
          200: '#F0EDE7',
          300: '#E3DDD4',
          400: '#CDC4B8',
          500: '#A69B8C',
          600: '#8B7D6B',
          700: '#6B5F4F',
          800: '#4A4037',
          900: '#2D2520',
        },
        coral: {
          50: '#FFF4F2',
          100: '#FFE5E0',
          200: '#FFCFC7',
          300: '#FFB3A1',
          400: '#FF9F7D',
          500: '#FF7B54',
          600: '#E65A3D',
          700: '#CC4A2F',
          800: '#B33B21',
          900: '#9A2C13',
        },
        lavender: {
          50: '#F7F5FF',
          100: '#EEEBFF',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        sage: {
          50: '#F7FEE7',
          100: '#ECFCCB',
          200: '#D9F99D',
          300: '#BEF264',
          400: '#A3E635',
          500: '#84CC16',
          600: '#65A30D',
          700: '#4D7C0F',
          800: '#365314',
          900: '#1A2E05',
        },
        
        // Backwards compatibility - Legacy support
        'primary-light': '#A8D2B1',
        'primary-dark': '#2D6B3E',
        'neutral-light': '#F0EDE7',
        'neutral-dark': '#6B5F4F',
        'accent-orange': '#FF7B54',
        'white': '#FDFCFB',
        'black': '#2D2520',
        
        // Modern semantic colors
        success: '#4A9B5E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        
        // Legacy aliases (maintain compatibility)
        primary: '#4A9B5E',
        secondary: '#FF7B54',
        accent: '#A78BFA',
        text: '#4A4037',
      },
      fontFamily: {
        // Modern 2025 Typography
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Modern responsive typography scale
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.4', 
        'normal': '1.6',
        'relaxed': '1.7',
        'loose': '1.8',
      },
      borderRadius: {
        'organic-sm': '12px',
        'organic': '20px',
        'organic-md': '24px',
        'organic-lg': '32px',
        'organic-xl': '40px',
        'organic-2xl': '48px',
      },
      animation: {
        // Modern 2025 animations
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'organic': 'organicMove 8s ease-in-out infinite',
        'flow': 'flowAnimation 6s ease-in-out infinite',
        'morph': 'morphBlob 8s ease-in-out infinite',
        'gradient-flow': 'gradientFlow 6s ease-in-out infinite',
        'pulse-organic': 'pulseOrganic 3s ease-in-out infinite',
        'glow-soft': 'glowSoft 4s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        organicMove: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '25%': { transform: 'translateY(-12px) rotate(2deg) scale(1.02)' },
          '50%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '75%': { transform: 'translateY(6px) rotate(-1deg) scale(0.98)' },
        },
        flowAnimation: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '33%': { transform: 'translateX(4px) rotate(1deg)' },
          '66%': { transform: 'translateX(-4px) rotate(-1deg)' },
        },
        morphBlob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 70% 40% 60% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '70% 30% 60% 40% / 40% 70% 60% 30%' },
          '75%': { borderRadius: '40% 60% 70% 30% / 70% 40% 50% 60%' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(0deg)' },
          '25%': { backgroundPosition: '100% 50%', filter: 'hue-rotate(5deg)' },
          '50%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(0deg)' },
          '75%': { backgroundPosition: '100% 50%', filter: 'hue-rotate(-5deg)' },
        },
        pulseOrganic: {
          '0%, 100%': { 
            opacity: '0.8', 
            transform: 'scale(1) rotate(0deg)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.05) rotate(2deg)',
            borderRadius: '40% 60% 70% 30% / 50% 70% 30% 50%'
          },
        },
        glowSoft: {
          'from': { boxShadow: '0 0 20px rgba(74, 155, 94, 0.2), 0 0 40px rgba(74, 155, 94, 0.1)' },
          'to': { boxShadow: '0 0 30px rgba(74, 155, 94, 0.4), 0 0 60px rgba(74, 155, 94, 0.2)' },
        },
      },
      backdropBlur: {
        'organic': '16px',
        'premium': '24px',
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'organic': '0 10px 40px rgba(74, 155, 94, 0.15), 0 4px 20px rgba(74, 155, 94, 0.1)',
        'premium': '0 12px 45px rgba(167, 139, 250, 0.2), 0 6px 25px rgba(167, 139, 250, 0.1)',
        'coral': '0 8px 35px rgba(255, 123, 84, 0.18), 0 4px 18px rgba(255, 123, 84, 0.12)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'strong': '0 16px 40px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}