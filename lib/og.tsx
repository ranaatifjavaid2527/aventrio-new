import { ImageResponse } from 'next/og'
import { tokens } from './tokens'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

/** Shared Open Graph card. Colours come from lib/tokens.ts because next/og cannot read CSS variables. */
export function ogImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const grid = `linear-gradient(to right, rgba(255,252,244,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,252,244,0.06) 1px, transparent 1px)`
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        background: tokens.ink,
        backgroundImage: grid,
        backgroundSize: '56px 56px',
        color: tokens.onInk,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 14, height: 14, borderRadius: 999, background: tokens.mint }} />
        <div style={{ fontSize: 30, letterSpacing: '-0.02em' }}>aventrio</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: tokens.mint,
          }}
        >
          {eyebrow}
        </div>
        <div style={{ fontSize: 68, lineHeight: 1.04, letterSpacing: '-0.035em', maxWidth: 980 }}>
          {title}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 7, height: 14, width: '100%', overflow: 'hidden' }}>
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 14,
              flexShrink: 0,
              background: tokens.green,
              transform: 'skewX(-10deg)',
            }}
          />
        ))}
      </div>
    </div>,
    ogSize,
  )
}
