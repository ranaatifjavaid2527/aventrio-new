import { LinkButton } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export const metadata = { title: 'Page not found', robots: { index: false, follow: true } }

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-paper py-[var(--section-y)]">
      <div aria-hidden="true" className="grid-texture" />
      <Container className="relative max-w-2xl text-center">
        <p className="t-eyebrow text-green-deep">404</p>
        <h1 className="t-h2 mt-4">That page isn&apos;t here.</h1>
        <p className="mt-5 text-lg text-ink-soft">
          It may have moved when the site was rebuilt. The homepage has everything.
        </p>
        <div className="mt-8 flex justify-center">
          <LinkButton href="/" arrow>
            Go to the homepage
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
