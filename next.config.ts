import type { NextConfig } from 'next'

/** Security headers for every response. The CSP is set per request in proxy.ts, with a nonce. */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value:
      'geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=(), browsing-topics=()',
  },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

/** The private sales CRM is a separate Vercel project (repo aventrio-crm, basePath /crm), served under this domain. */
const crmOrigin = process.env.CRM_ORIGIN ?? 'https://aventrio-crm.vercel.app'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    // Tailwind output is small: inlining it removes a render-blocking request (FCP and LCP)
    inlineCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/crm', destination: `${crmOrigin}/crm` },
        { source: '/crm/:path*', destination: `${crmOrigin}/crm/:path*` },
      ],
    }
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  // The old static site served .html files. Send every old URL to its clean equivalent, permanently.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },
      { source: '/sitemap.xml.html', destination: '/sitemap.xml', permanent: true },
      { source: '/:path(.+)\\.html', destination: '/:path', permanent: true },
    ]
  },
}

export default nextConfig
