/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      fontFamily: {
        sans: ['Rubik', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        darkBg: '#1b1b1b',
        darkCard: '#222222',
        borderCol: 'rgba(255, 255, 255, 0.1)',
        primary: {
          DEFAULT: '#ededed',
          foreground: '#1b1b1b',
        },
        muted: {
          DEFAULT: '#262626',
          foreground: '#a3a3a3',
        },
        accent: {
          DEFAULT: '#2e2e2e',
          foreground: '#f5f5f5',
        }
      },
      animation: {
        marquee: 'marquee var(--duration, 55s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 55s) linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      maxWidth: {
        '215': '53.75rem', // 860px exactly like krisht0 max-w-215
      }
    },
  },
  plugins: [],
}
