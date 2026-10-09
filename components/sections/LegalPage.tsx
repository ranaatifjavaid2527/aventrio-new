import Link from 'next/link'
import type { LegalDoc } from '@/content/legal'
import { site } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

/** Turns the site email address inside legal text into a mailto link. */
function withLinks(text: string) {
  const parts = text.split(site.email)
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <a
            key={i}
            href={`mailto:${site.email}`}
            className="underline underline-offset-2 hover:text-green-deep"
          >
            {site.email}
          </a>,
        ]
      : [part],
  )
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <article className="relative bg-paper pt-14 pb-[var(--section-y)] sm:pt-20">
      <div aria-hidden="true" className="grid-texture" />
      <Container className="relative max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="t-h2">{doc.title}</h1>
        <p className="mt-4 font-mono text-[0.78rem] text-subtle">Last updated {doc.updated}</p>
        <div className="mt-10 space-y-4 text-lg text-ink-soft">
          {doc.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="mt-14 space-y-12">
          {doc.sections.map((s) => (
            <section key={s.title} aria-labelledby={`s-${s.title}`}>
              <h2 id={`s-${s.title}`} className="text-[1.5rem]">
                {s.title}
              </h2>
              <div className="mt-4 space-y-4 text-[1rem] text-ink-soft">
                {s.blocks.map((b, i) => {
                  if (b.type === 'p') return <p key={i}>{withLinks(b.text)}</p>
                  if (b.type === 'h3')
                    return (
                      <h3 key={i} className="pt-2 text-[1.08rem] text-ink">
                        {b.text}
                      </h3>
                    )
                  if (b.type === 'ul')
                    return (
                      <ul key={i} className="list-disc space-y-2 pl-5 marker:text-green">
                        {b.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    )
                  return (
                    <div
                      key={i}
                      className="overflow-x-auto rounded-card border border-line"
                      tabIndex={0}
                      role="region"
                      aria-label={`${s.title} table`}
                    >
                      <table className="w-full min-w-[560px] border-collapse text-left text-[0.95rem]">
                        <thead>
                          <tr className="border-b border-line bg-surface">
                            {b.head.map((h) => (
                              <th key={h} scope="col" className="p-4 font-semibold text-ink">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {b.rows.map((r) => (
                            <tr key={r[0]} className="border-b border-line last:border-0">
                              {r.map((c, j) =>
                                j === 0 ? (
                                  <th
                                    key={j}
                                    scope="row"
                                    className="p-4 align-top font-medium text-ink"
                                  >
                                    {c}
                                  </th>
                                ) : (
                                  <td key={j} className="p-4 align-top">
                                    {c}
                                  </td>
                                ),
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-line pt-6 text-[0.95rem] text-ink-soft">
          See also:{' '}
          <Link
            href={doc.title === 'Privacy Policy' ? '/terms' : '/privacy'}
            className="underline underline-offset-2 hover:text-green-deep"
          >
            {doc.title === 'Privacy Policy' ? 'Terms of Service' : 'Privacy Policy'}
          </Link>
        </p>
      </Container>
    </article>
  )
}
