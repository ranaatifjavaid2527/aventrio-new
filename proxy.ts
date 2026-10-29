import { NextResponse, type NextRequest } from 'next/server'

/**
 * Per-request CSP nonce. Next.js reads the nonce from the request CSP header
 * and applies it to its own scripts. 'strict-dynamic' lets scripts loaded by
 * those trusted scripts run (Cal.com embed, Clutch widget, consented
 * analytics) without allowlisting hosts for script execution.
 *
 * style-src allows 'unsafe-inline' deliberately: server-rendered style
 * attributes (next/image, Framer Motion initial states) and the Cal.com embed
 * inject inline styles, and a nonce cannot cover style attributes. Inline
 * styles cannot execute code; script-src is the XSS boundary and stays strict.
 *
 * /crm is excluded in the matcher below: it is a separate app (rewritten in next.config.ts)
 * with its own CSP, and a second nonce policy on top would block its scripts.
 */
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const isDev = process.env.NODE_ENV === 'development'

  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:${isDev ? ` 'unsafe-eval'` : ''}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob: https://*.cal.com https://widget.clutch.co https://*.clutch.co`,
    `font-src 'self'`,
    `connect-src 'self' https://*.cal.com https://plausible.io${isDev ? ' ws:' : ''}`,
    `frame-src https://app.cal.com https://cal.com https://widget.clutch.co`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ].join('; ')

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', csp)

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  response.headers.set('Content-Security-Policy', csp)
  return response
}

export const config = {
  matcher: [
    {
      source: '/((?!api|crm(?:/|$)|_next/static|_next/image|favicon.ico|icon.png|llms.txt|.*\\.png$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
