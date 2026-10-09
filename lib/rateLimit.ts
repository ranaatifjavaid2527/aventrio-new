/**
 * Fixed-window rate limiter keyed by IP.
 *
 * Limitation, stated plainly: this lives in the memory of one serverless
 * instance. On Vercel, concurrent instances each keep their own counts, so a
 * determined attacker spread across instances gets more attempts. Combined
 * with the honeypot and timing check it is enough for a lead form. For a hard
 * global limit, swap the Map for Upstash Redis or Vercel KV.
 */
type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now()
  if (buckets.size > 5000) {
    for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k)
  }
  const b = buckets.get(key)
  if (!b || b.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, retryAfter: 0 }
  }
  b.count += 1
  if (b.count > limit) return { ok: false, retryAfter: Math.ceil((b.resetAt - now) / 1000) }
  return { ok: true, retryAfter: 0 }
}
