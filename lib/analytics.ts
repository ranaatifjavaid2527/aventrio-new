/** Which analytics tool, if any, is configured. Empty means none: no script and no cookie banner. */
export const analyticsProvider = (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? '').trim()
export const analyticsEnabled = analyticsProvider === 'plausible'
export const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? 'aventrio.co'
