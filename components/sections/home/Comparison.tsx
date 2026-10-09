import { comparison } from '@/content/home'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Comparison() {
  const last = comparison.columns.length - 1
  return (
    <Section id="compare" labelledBy="compare-title" tone="ink">
      <SectionHeading
        id="compare-title"
        tone="ink"
        eyebrow={comparison.eyebrow}
        title={comparison.title}
        intro={comparison.intro}
      />
      <Reveal>
        <div
          className="overflow-x-auto rounded-card border border-line-ink"
          tabIndex={0}
          role="region"
          aria-label="Comparison table, scrolls sideways"
        >
          <table className="w-full min-w-[720px] border-collapse text-left text-[0.95rem]">
            <caption className="sr-only">{comparison.title}</caption>
            <thead>
              <tr className="border-b border-line-ink">
                <td className="p-5" />
                {comparison.columns.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={`p-5 font-semibold tracking-[-0.01em] ${i === last ? 'bg-ink-2 text-mint' : 'text-on-ink'}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-b border-line-ink last:border-0">
                  <th
                    scope="row"
                    className="p-5 align-top font-mono text-[0.74rem] font-normal tracking-[0.04em] text-on-ink-faint uppercase"
                  >
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`p-5 align-top ${i === last ? 'bg-ink-2 text-on-ink' : 'text-on-ink-soft'}`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-mono text-[0.72rem] text-on-ink-faint md:hidden">
          {comparison.scrollHint}
        </p>
      </Reveal>
    </Section>
  )
}
