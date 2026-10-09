import { privacy } from '@/content/legal'
import { JsonLd } from '@/components/ui/JsonLd'
import { LegalPage } from '@/components/sections/LegalPage'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbLd, graph, webPageLd } from '@/lib/jsonld'

export const metadata = pageMetadata({
  title: privacy.title,
  description: privacy.description,
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageLd('WebPage', '/privacy', privacy.title, privacy.description),
          breadcrumbLd([{ name: privacy.title, path: '/privacy' }]),
        )}
      />
      <LegalPage doc={privacy} />
    </>
  )
}
