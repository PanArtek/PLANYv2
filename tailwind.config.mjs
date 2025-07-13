/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Enhanced Amethyst Wisteria Twilight Palette
        'primary-light': '#EC9CCC',
        'primary-dark': '#6F2451',
        'primary-medium': '#D0AFCD',
        'neutral-light': '#CCD0DC',
        'neutral-dark': '#683759',
        'accent-orange': '#D45C1C',
        'amethyst': '#9966CC',
        'wisteria': '#C9A0DC',
        'white': '#FFFFFF',
        'black': '#1A1A1A',
        
        // Backwards compatibility
        primary: '#6F2451',
        secondary: '#683759',
        accent: '#FFFFFF',
        neutral: '#CCD0DC',
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