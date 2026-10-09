import { terms } from '@/content/legal'
import { JsonLd } from '@/components/ui/JsonLd'
import { LegalPage } from '@/components/sections/LegalPage'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbLd, graph, webPageLd } from '@/lib/jsonld'

export const metadata = pageMetadata({
  title: terms.title,
  description: terms.description,
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageLd('WebPage', '/terms', terms.title, terms.description),
          breadcrumbLd([{ name: terms.title, path: '/terms' }]),
        )}
      />
      <LegalPage doc={terms} />
    </>
  )
}
