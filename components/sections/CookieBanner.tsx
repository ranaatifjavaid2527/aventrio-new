'use client'

import Link from 'next/link'
import { reopenConsent, setConsent, useBannerOpen } from '@/lib/consent'
import { buttonClasses } from '@/components/ui/Button'

/** Shown only when an analytics tool is configured. Declining is as easy as accepting. */
export function CookieBanner() {
  const open = useBannerOpen()
  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-card border border-line bg-paper p-5 text-ink shadow-[0_24px_60px_-30px_var(--ink)] sm:p-6"
    >
      <h2 id="cookie-title" className="text-base font-semibold tracking-[-0.01em]">
        A note on cookies
      </h2>
      <p className="mt-2 text-[0.95rem] text-ink-soft">
        We use strictly necessary storage to run this site. Analytics is optional and only loads if
        you accept. We never use advertising or cross-site tracking. See our{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-green-deep">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setConsent('accepted')}
          className={buttonClasses('solid', 'paper', 'sm')}
        >
          Accept analytics
        </button>
        <button
          type="button"
          onClick={() => setConsent('declined')}
          className={buttonClasses('ghost', 'paper', 'sm')}
        >
          Necessary only
        </button>
      </div>
    </div>
  )
}

export function CookiePreferencesLink({ className = '' }: { className?: string }) {
  return (
    <button type="button" onClick={reopenConsent} className={className}>
      Cookie preferences
    </button>
  )
}
