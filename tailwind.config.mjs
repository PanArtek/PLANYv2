/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Extended Amethyst Wisteria Twilight Palette with Full Shade System
        primary: {
          50: '#FDF7FB',
          100: '#FAE8F3',
          200: '#F5D1E6',
          300: '#EC9CCC',
          400: '#E06BA8',
          500: '#D0AFCD',
          600: '#A94F8A',
          700: '#833D6B',
          800: '#6F2451',
          900: '#4A1836',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#E9ECF1',
          200: '#D9DEE6',
          300: '#CCD0DC',
          400: '#A8B0C1',
          500: '#8691A7',
          600: '#683759',
          700: '#4D2A42',
          800: '#341D2C',
          900: '#1A0E16',
        },
        orange: {
          light: '#FF8C5C',
          DEFAULT: '#FF6B35',
          dark: '#D45C1C',
        },
        yellow: {
          light: '#FFE066',
          DEFAULT: '#FFD23F',
          dark: '#E6B800',
        },
        green: {
          light: '#7FE5DF',
          DEFAULT: '#4ECDC4',
          dark: '#2BA39C',
        },
        coral: {
          light: '#FF9999',
          DEFAULT: '#FF6B6B',
          dark: '#E64545',
        },
        lavender: {
          light: '#D0C4DF',
          DEFAULT: '#B8A7CE',
          dark: '#9B88B5',
        },
        
        // Backwards compatibility - Legacy color names
        'primary-light': '#EC9CCC',
        'primary-dark': '#6F2451',
        'primary-medium': '#D0AFCD',
        'neutral-light': '#CCD0DC',
        'neutral-dark': '#683759',
        'accent-orange': '#FF6B35',
        'amethyst': '#9966CC',
        'wisteria': '#C9A0DC',
        'white': '#FFFFFF',
        'black': '#1A1A1A',
        
        // Semantic color mappings
        success: '#4ECDC4',
        warning: '#FFD23F',
        error: '#FF6B6B',
        info: '#B8A7CE',
        
        // Legacy aliases for existing components
        primary: '#6F2451',
        secondary: '#683759',
        accent: '#FFFFFF',
        text: '#683759',
      },
      fontFamily: {
        // Enhanced typography system
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Typography scale from claude.md specifications
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px  
        'base': '1rem',      // 16px (body default)
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '6xl': '3.75rem',    // 60px
      },
      lineHeight: {
        relaxed: '1.6',      // Body text default from specs
      },
      animation: {
        // Enhanced animation system
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        glow: {
          'from': { boxShadow: '0 0 5px rgba(236, 156, 204, 0.5), 0 0 10px rgba(236, 156, 204, 0.3)' },
          'to': { boxShadow: '0 0 10px rgba(236, 156, 204, 0.8), 0 0 20px rgba(236, 156, 204, 0.5), 0 0 30px rgba(236, 156, 204, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}