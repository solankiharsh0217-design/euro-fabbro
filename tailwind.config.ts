import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ef: {
          bg: '#F7F5F0',
          'bg-secondary': '#EFECE4',
          surface: '#FFFFFF',
          'surface-dark': '#1A1614',
          accent: '#B8632F',
          'accent-hover': '#9F5326',
          'accent-subtle': '#F4E6DA',
          'text-primary': '#1A1614',
          'text-secondary': '#5B5048',
          'text-muted': '#8C7F75',
          'text-on-dark': '#F7F5F0',
          border: '#D4CCBF',
          'border-subtle': '#E5DFD5',
          'border-strong': '#B8AB99',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
