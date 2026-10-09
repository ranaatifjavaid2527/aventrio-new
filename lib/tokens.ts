/**
 * Design tokens. The single source of truth for colour values.
 *
 * app/globals.css declares the same values as CSS variables, and
 * scripts/validate-site.mjs fails the build if the two drift apart.
 * Components never use hex values directly: they use Tailwind classes
 * mapped to these variables. The only direct consumers of this file are
 * the OG image routes, because next/og cannot read CSS variables.
 */
export const tokens = {
  paper: '#FFFCF4',
  ink: '#0E251D',
  inkSoft: '#505050',
  muted: '#8A8A8A',
  surface: '#F5F5F5',
  surface2: '#EFEFEF',
  green: '#1A9C77',
  mint: '#1FDBA5',
  coral: '#D8434B',
  onInk: '#FFFCF4',
  onInkSoft: 'rgba(255,252,244,0.74)',
} as const

export type TokenName = keyof typeof tokens
