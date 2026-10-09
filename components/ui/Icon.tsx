/**
 * Inline SVG icons. Symbol glyphs (arrows, ticks, crosses) live in extra
 * font subsets, so using characters would download whole font files just
 * to draw one shape.
 */
const paths = {
  arrowRight: 'M3 8h10M9 4l4 4-4 4',
  arrowUpRight: 'M5 11L11 5M6 5h5v5',
  check: 'M3.5 8.5l3 3 6-7',
  close: 'M4 4l8 8M12 4l-8 8',
  play: 'M5 3.5v9l7-4.5z',
  pause: 'M5.5 3.5v9M10.5 3.5v9',
  linkedin:
    'M4.5 6.5v5M4.5 4.25v.01M7.5 11.5v-5M7.5 8.75c0-1.4 1-2.25 2.1-2.25 1.15 0 1.9.8 1.9 2.2v2.8',
} as const

export type IconName = keyof typeof paths

export function Icon({ name, className = 'size-4' }: { name: IconName; className?: string }) {
  const filled = name === 'play'
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name]} />
    </svg>
  )
}
