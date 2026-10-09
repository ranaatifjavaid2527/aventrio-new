import type { Config } from 'tailwindcss'

/**
 * Every colour maps to a CSS variable defined in app/globals.css.
 * Do not add hex values here or in components.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.ts'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-soft': 'var(--ink-soft)',
        muted: 'var(--muted)',
        subtle: 'var(--subtle)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        green: 'var(--green)',
        'green-deep': 'var(--green-deep)',
        mint: 'var(--mint)',
        coral: 'var(--coral)',
        'on-ink': 'var(--on-ink)',
        'on-ink-soft': 'var(--on-ink-soft)',
        'on-ink-faint': 'var(--on-ink-faint)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        'line-ink': 'var(--line-ink)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        site: '1200px',
      },
      borderRadius: {
        card: '18px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
}

export default config
