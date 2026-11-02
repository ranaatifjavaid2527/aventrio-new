import type { BlogFigure } from '@/content/blog'

/**
 * A diagram made of real HTML text, so it is sharp at any size, selectable by
 * screen readers and quotable by AI search. The steps or columns carry the whole
 * explanation; nothing lives only in a picture.
 */
export function Figure({ figure }: { figure: BlogFigure }) {
  return (
    <figure className="my-10 rounded-card border border-line bg-surface p-5 sm:p-7">
      <p className="text-[1.05rem] font-semibold text-ink">{figure.title}</p>
      {figure.kind === 'flow' ? <Flow figure={figure} /> : <Compare figure={figure} />}
      <figcaption className="mt-5 text-[0.9rem] text-subtle">{figure.caption}</figcaption>
    </figure>
  )
}

function Flow({ figure }: { figure: Extract<BlogFigure, { kind: 'flow' }> }) {
  return (
    <>
      <ol className="relative mt-5 space-y-5">
        <span aria-hidden="true" className="absolute top-4 bottom-4 left-4 w-px bg-line-strong" />
        {figure.steps.map((s, i) => (
          <li key={s.label} className="relative flex gap-4">
            <span
              aria-hidden="true"
              className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-ink text-[0.85rem] font-semibold text-on-ink"
            >
              {i + 1}
            </span>
            <p className="pt-1 text-[1rem] leading-snug text-ink">
              <span className="font-semibold">{s.label}</span>
              {s.detail ? (
                <span className="block text-[0.93rem] text-ink-soft">{s.detail}</span>
              ) : null}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <p className="rounded-xl border border-green bg-surface-2 p-4 text-[0.95rem] text-ink">
          <span className="block text-[0.75rem] font-semibold tracking-wider text-green-deep uppercase">
            Every step passes
          </span>
          {figure.outcome.pass}
        </p>
        <p className="rounded-xl border border-line-strong bg-surface-2 p-4 text-[0.95rem] text-ink">
          <span className="block text-[0.75rem] font-semibold tracking-wider text-subtle uppercase">
            Any step fails
          </span>
          {figure.outcome.fail}
        </p>
      </div>
    </>
  )
}

function Compare({ figure }: { figure: Extract<BlogFigure, { kind: 'compare' }> }) {
  const sides = [
    { side: figure.left, tone: 'border-line-strong' },
    { side: figure.right, tone: 'border-green' },
  ]
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {sides.map(({ side, tone }) => (
        <div key={side.heading} className={`rounded-xl border ${tone} bg-surface-2 p-4`}>
          <p className="text-[0.95rem] font-semibold text-ink">{side.heading}</p>
          <ul className="mt-3 space-y-2 text-[0.93rem] text-ink-soft">
            {side.points.map((pt) => (
              <li key={pt} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-green" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
