'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { lead } from '@/content/lead'
import { buttonClasses } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { useBannerOpen } from '@/lib/consent'
import { keys, storage } from '@/lib/storage'

const DELAY_MS = 20_000
const SUPPRESS_MS = 30 * 24 * 60 * 60 * 1000

type Status = 'idle' | 'sending' | 'done' | 'error'

function suppressed() {
  const until = Number(storage.get(keys.leadSuppressedUntil) ?? 0)
  return Number.isFinite(until) && until > Date.now()
}

/**
 * Email capture only. Appears after 20 seconds, once per visitor, then stays
 * away for 30 days. Never while the cookie banner is open, never on /book,
 * and never full screen: a small non-modal card that does not steal focus.
 */
export function LeadPopup() {
  const pathname = usePathname()
  const bannerOpen = useBannerOpen()
  const [due, setDue] = useState(false)
  const [closed, setClosed] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const shownAt = useRef(0)
  const marked = useRef(false)
  const titleId = useId()
  const errorId = useId()

  useEffect(() => {
    if (suppressed()) return
    const t = window.setTimeout(() => setDue(true), DELAY_MS)
    return () => window.clearTimeout(t)
  }, [])

  const open = due && !closed && !bannerOpen && pathname !== '/book'

  // The first time it becomes visible counts as "shown": start the 30 day suppression
  useEffect(() => {
    if (!open || marked.current) return
    marked.current = true
    storage.set(keys.leadSuppressedUntil, String(Date.now() + SUPPRESS_MS))
    shownAt.current = Date.now()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setClosed(true)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = String(form.get('email') ?? '').trim()
    setStatus('sending')
    setMessage('')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email,
          company_website: String(form.get('company_website') ?? ''),
          elapsedMs: Date.now() - shownAt.current,
          page: pathname,
        }),
      })
      if (res.ok) {
        storage.set(keys.knownEmail, email)
        setStatus('done')
        return
      }
      setStatus('error')
      setMessage(
        res.status === 400
          ? lead.errors.invalid
          : res.status === 429
            ? lead.errors.rateLimited
            : lead.errors.generic,
      )
    } catch {
      setStatus('error')
      setMessage(lead.errors.generic)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      className="on-ink fixed inset-x-3 bottom-3 z-40 rounded-card border border-line-ink bg-ink p-5 text-on-ink shadow-[0_30px_70px_-30px_var(--ink)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[400px] sm:p-6"
    >
      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="Close"
        className="absolute top-3 right-3 grid size-9 place-items-center rounded-full text-on-ink-soft transition-colors hover:bg-ink-2 hover:text-on-ink"
      >
        <Icon name="close" />
      </button>

      {status === 'done' ? (
        <div role="status">
          <p id={titleId} className="pr-8 text-lg font-semibold tracking-[-0.02em]">
            {lead.success.title}
          </p>
          <p className="mt-2 text-[0.95rem] text-on-ink-soft">{lead.success.body}</p>
        </div>
      ) : (
        <>
          <p id={titleId} className="pr-8 text-lg leading-snug font-semibold tracking-[-0.02em]">
            {lead.title}
          </p>
          <p className="mt-2 text-[0.95rem] text-on-ink-soft">{lead.body}</p>
          <form onSubmit={onSubmit} noValidate className="mt-4">
            <label htmlFor="lead-email" className="sr-only">
              {lead.label}
            </label>
            {/* Honeypot: hidden from people and assistive tech, attractive to bots */}
            <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
              <label htmlFor="lead-company-website">Company website</label>
              <input
                id="lead-company-website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="flex gap-2">
              <input
                id="lead-email"
                name="email"
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                placeholder={lead.placeholder}
                aria-invalid={status === 'error' ? true : undefined}
                aria-describedby={status === 'error' ? errorId : undefined}
                className="h-11 min-w-0 flex-1 rounded-full border border-line-ink bg-ink-2 px-4 text-[0.95rem] text-on-ink placeholder:text-on-ink-faint focus:border-mint focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`${buttonClasses('solid', 'ink', 'sm')} h-11 disabled:opacity-60`}
              >
                {status === 'sending' ? lead.sending : lead.button}
              </button>
            </div>
            {status === 'error' ? (
              <p id={errorId} role="alert" className="mt-3 text-sm text-on-ink">
                {message}
              </p>
            ) : null}
            <p className="mt-3 text-xs text-on-ink-faint">
              <Link href="/privacy" className="underline underline-offset-2 hover:text-on-ink">
                {lead.privacyNote}
              </Link>
            </p>
          </form>
        </>
      )}
    </div>
  )
}
