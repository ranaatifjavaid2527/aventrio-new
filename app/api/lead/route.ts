import { NextResponse, type NextRequest } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { site } from '@/content/site'
import { rateLimit } from '@/lib/rateLimit'

export const runtime = 'nodejs'

const MIN_FILL_MS = 2500
const MAX_BODY_BYTES = 2048

const LeadSchema = z.object({
  email: z.email().max(254),
  company_website: z.string().max(200).optional().default(''),
  elapsedMs: z
    .number()
    .int()
    .nonnegative()
    .max(1000 * 60 * 60 * 24),
  page: z.string().max(200).optional().default('/'),
})

function clientIp(req: NextRequest) {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

function sameOrigin(req: NextRequest) {
  const origin = req.headers.get('origin')
  if (!origin) return false
  try {
    return new URL(origin).host === req.headers.get('host')
  } catch {
    return false
  }
}

const json = (status: number, body: Record<string, unknown>, headers?: HeadersInit) =>
  NextResponse.json(body, { status, headers: { 'cache-control': 'no-store', ...headers } })

export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return json(403, { error: 'forbidden' })
  if (!req.headers.get('content-type')?.includes('application/json'))
    return json(415, { error: 'unsupported' })
  if (Number(req.headers.get('content-length') ?? 0) > MAX_BODY_BYTES)
    return json(413, { error: 'too_large' })

  const limit = rateLimit(`lead:${clientIp(req)}`, 5, 10 * 60 * 1000)
  if (!limit.ok)
    return json(429, { error: 'rate_limited' }, { 'retry-after': String(limit.retryAfter) })

  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return json(400, { error: 'invalid' })
  }

  const parsed = LeadSchema.safeParse(raw)
  if (!parsed.success) return json(400, { error: 'invalid' })
  const { email, company_website, elapsedMs, page } = parsed.data

  // Honeypot or impossibly fast submission: answer as if it worked, send nothing
  if (company_website.trim() !== '' || elapsedMs < MIN_FILL_MS) return json(200, { ok: true })

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEAD_TO_EMAIL || site.email
  const from = process.env.LEAD_FROM_EMAIL || 'Aventrio website <leads@aventrio.co>'

  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[lead] email delivery not configured; would have sent:', { email, page })
      return json(200, { ok: true })
    }
    console.error('[lead] RESEND_API_KEY is not set')
    return json(503, { error: 'unavailable' })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New website lead: ${email}`,
    text: [
      'Someone left their email in the website popup.',
      '',
      `Email: ${email}`,
      `Page: ${page}`,
      `Time: ${new Date().toISOString()}`,
      '',
      'Reply to this message to answer them directly.',
    ].join('\n'),
  })

  if (error) {
    console.error('[lead] Resend error', error.name)
    return json(502, { error: 'send_failed' })
  }
  return json(200, { ok: true })
}

export function GET() {
  return json(405, { error: 'method_not_allowed' }, { allow: 'POST' })
}
