import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Original site palette (Digital Atelier)
        'color-bg': 'var(--color-bg)',
        'color-bg-secondary': 'var(--color-bg-secondary)',
        'color-surface': 'var(--color-surface)',
        'color-surface-dark': 'var(--color-surface-dark)',
        'color-text-primary': 'var(--color-text-primary)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-text-muted': 'var(--color-text-muted)',
        'color-text-on-dark': 'var(--color-text-on-dark)',
        'color-accent': 'var(--color-accent)',
        'color-accent-hover': 'var(--color-accent-hover)',
        'color-accent-subtle': 'var(--color-accent-subtle)',
        'color-border': 'var(--color-border)',
        'color-border-subtle': 'var(--color-border-subtle)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['var(--text-hero)', { lineHeight: 'var(--leading-hero)', letterSpacing: 'var(--tracking-hero)' }],
        h1: ['var(--text-h1)', { lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-heading)' }],
        h2: ['var(--text-h2)', { lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-heading)' }],
        h3: ['var(--text-h3)', { lineHeight: 'var(--leading-heading)' }],
        h4: ['var(--text-h4)', { lineHeight: 'var(--leading-heading)' }],
        'body-lg': ['var(--text-body-lg)', { lineHeight: 'var(--leading-body)' }],
        body: ['var(--text-body)', { lineHeight: 'var(--leading-body)' }],
        'body-sm': ['var(--text-body-sm)', { lineHeight: 'var(--leading-body)' }],
        label: ['var(--text-label)', { letterSpacing: 'var(--tracking-label)' }],
      },
      fontWeight: {
        display: 'var(--weight-display)',
        heading: 'var(--weight-heading)',
        body: 'var(--weight-body)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionTimingFunction: {
        'ease-out': 'var(--ease-out)',
        'ease-enter': 'var(--ease-enter)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
      },
      maxWidth: {
        content: 'var(--content-max-width)',
        narrow: 'var(--content-narrow)',
      },
      spacing: {
        section: 'var(--section-padding-y)',
        'section-x': 'var(--section-padding-x)',
      },
    },
  },
  plugins: [],
};

export default config;
