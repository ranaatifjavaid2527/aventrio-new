/** Lead popup copy. Scope is email capture only, by client decision. */
export const lead = {
  /** Master switch. Keep false until a test lead has reached the inbox. */
  enabled: false,
  title: 'Looking for remote SDRs or someone to run your outbound?',
  body: "Leave your work email and we'll reply personally. No list, no drip sequence.",
  placeholder: 'you@company.com',
  label: 'Work email',
  button: 'Send',
  sending: 'Sending',
  success: {
    title: 'Got it.',
    body: "We'll be in touch from atif@aventrio.co. Nothing else will land in your inbox.",
  },
  errors: {
    invalid: 'That email does not look right. Check it and try again.',
    rateLimited: 'Too many attempts from this connection. Try again in a few minutes.',
    generic: "Something went wrong on our side. Email atif@aventrio.co directly and we'll reply.",
  },
  privacyNote: 'See our Privacy Policy.',
}
