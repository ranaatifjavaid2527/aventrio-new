import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g

/** Renders [label](href) links inside a line of post copy. Everything else is plain text. */
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(LINK)) {
    const [whole, label = '', href = ''] = m
    const i = m.index ?? 0
    if (i > last) out.push(text.slice(last, i))
    out.push(
      href.startsWith('/') ? (
        <Link key={i} href={href} className="text-green-deep underline underline-offset-4">
          {label}
        </Link>
      ) : (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener"
          className="text-green-deep underline underline-offset-4"
        >
          {label}
        </a>
      ),
    )
    last = i + whole.length
  }
  if (last < text.length) out.push(text.slice(last))
  return <Fragment>{out}</Fragment>
}

/** Plain text version for feeds and schema: links become their labels. */
export const plainText = (text: string) => text.replace(LINK, '$1')
