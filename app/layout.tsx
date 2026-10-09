import type { Metadata, Viewport } from 'next'
import { Google_Sans_Code, Google_Sans_Flex } from 'next/font/google'
import { headers } from 'next/headers'
import type { ReactNode } from 'react'
import { site } from '@/content/site'
import { tokens } from '@/lib/tokens'
import { MotionProvider } from '@/components/ui/MotionProvider'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { DeferredWidgets } from '@/components/sections/DeferredWidgets'
import './globals.css'

// Google Sans Flex: display and body. Google Sans Code: labels and mono.
// Both are SIL OFL fonts, self-hosted by next/font, so there is no request to Google at runtime.
// next/font has no metrics for these families, so the size-adjusted fallbacks
// are declared in globals.css from measured values, keeping the swap shift-free.
const sans = Google_Sans_Flex({
  subsets: ['latin'],
  variable: '--font-sans',
  // optional: no late swap, so the hero text is final at first paint (LCP).
  // The metric-matched fallback keeps a first visit on a slow network close in look and size.
  display: 'optional',
  adjustFontFallback: false,
  fallback: ['Google Sans Flex Fallback', 'Arial', 'sans-serif'],
})
const mono = Google_Sans_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  // Labels only, never the LCP element: off the critical path, and swapped in
  // when it arrives (the metric-matched fallback keeps the swap shift-free)
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  fallback: ['Google Sans Code Fallback', 'Courier New', 'monospace'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: outbound SDR teams for B2B`, template: `%s | ${site.name}` },
  description: site.tagline,
  applicationName: site.name,
  formatDetection: { telephone: false, email: false, address: false },
}

export const viewport: Viewport = {
  themeColor: tokens.paper,
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  // Reading request headers opts every page into dynamic rendering, which is
  // required for the per-request CSP nonce set in proxy.ts.
  await headers()

  // Never show a form that cannot deliver: the popup needs Resend configured (or local dev)
  const leadEnabled =
    process.env.NODE_ENV !== 'production' ||
    Boolean(process.env.RESEND_API_KEY && process.env.LEAD_FROM_EMAIL)

  return (
    <html lang="en-US" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <DeferredWidgets leadEnabled={leadEnabled} />
        </MotionProvider>
      </body>
    </html>
  )
}
