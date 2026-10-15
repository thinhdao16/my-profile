import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '215': '53.75rem', // 860px centered frame
      },
      fontFamily: {
        instrument: ['var(--font-instrument)', 'Georgia', 'serif'],
        sans: ['var(--font-rubik)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        neutral: {
          950: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
};

export default config;
