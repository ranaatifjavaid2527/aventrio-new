import Image from 'next/image'
import type { Person } from '@/content/team'
import { Icon } from './Icon'

/** Portrait with name, role and LinkedIn. Shows a monogram until a photo is supplied. */
export function PersonCard({ person, priority = false }: { person: Person; priority?: boolean }) {
  return (
    <figure className="w-full max-w-[280px]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-line bg-ink">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={`${person.name}, ${person.role}`}
            fill
            sizes="280px"
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div className="on-ink absolute inset-0 grid place-items-center">
            <div aria-hidden="true" className="grid-texture" data-tone="ink" />
            <span aria-hidden="true" className="relative font-mono text-5xl font-medium text-mint">
              {person.initials}
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-4 flex items-start justify-between gap-3">
        <span>
          <span className="block text-[1.05rem] font-semibold tracking-[-0.02em]">
            {person.name}
          </span>
          <span className="block text-[0.92rem] text-ink-soft">{person.role}</span>
        </span>
        {person.linkedin ? (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener"
            aria-label={`${person.name} on LinkedIn`}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-line-strong text-ink-soft transition-colors hover:border-green hover:text-green-deep"
          >
            <Icon name="linkedin" className="size-4" />
          </a>
        ) : null}
      </figcaption>
    </figure>
  )
}
