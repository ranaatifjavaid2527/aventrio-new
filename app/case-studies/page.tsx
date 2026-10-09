import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/content/caseStudies'
import { Container } from '@/components/ui/Container'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Case Studies',
  description: 'Outbound engagements Aventrio has run, published with each client’s approval.',
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  if (caseStudies.length === 0) notFound()
  return (
    <Container className="py-[var(--section-y)]">
      <h1 className="t-h2">Case studies</h1>
      <ul className="mt-10 space-y-4">
        {caseStudies.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/case-studies/${c.slug}`}
              className="text-xl font-semibold hover:text-green-deep"
            >
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
