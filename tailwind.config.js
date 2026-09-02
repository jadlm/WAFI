/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F3',
          100: '#F5F0E8',
          200: '#EDE6D8',
          300: '#E0D5C3',
          400: '#D1C4AA',
          500: '#BFB092',
        },
        terracotta: {
          50: '#FDF3EE',
          100: '#F9E2D5',
          200: '#F2C4AB',
          300: '#E99E77',
          400: '#D9794D',
          500: '#C4653A',
          600: '#A8502D',
          700: '#8B3E24',
          800: '#6F311D',
          900: '#5A2818',
        },
        sage: {
          50: '#F3F6F1',
          100: '#E4EAE0',
          200: '#C9D5C1',
          300: '#A8BB9C',
          400: '#8B9E7E',
          500: '#6F8262',
          600: '#58684E',
          700: '#445040',
          800: '#374034',
          900: '#2D342B',
        },
        charcoal: {
          DEFAULT: '#2D2926',
          light: '#6B5E54',
          lighter: '#8A7D73',
        },
      },
      fontFamily: {
        logo: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'card-title': ['1.125rem', { lineHeight: '1.3' }],
      },
      borderRadius: {
        'organic': '2rem 0.5rem 2rem 0.5rem',
        'organic-alt': '0.5rem 2rem 0.5rem 2rem',
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'bounce-soft': 'bounceSoft 0.5s ease-out',
        'paw-print': 'pawPrint 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pawPrint: {
          '0%, 100%': { opacity: '0.05' },
          '50%': { opacity: '0.1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
