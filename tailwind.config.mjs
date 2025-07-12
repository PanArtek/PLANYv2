/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Professional color palette from claude.md
        primary: '#2a2a2a',      // Professional charcoal
        secondary: '#3b82f6',     // Trust blue  
        accent: '#ffffff',        // Clean white
        neutral: '#f1f5f9',       // Soft gray
        text: '#374151',          // Readable dark gray
      },
      fontFamily: {
        // Inter font for professional appearance
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
        // GSAP-compatible animation classes
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}