import { finalCta } from '@/content/home'
import { RindBand } from '@/components/ui/RindBand'
import { JsonLd } from '@/components/ui/JsonLd'
import { Hero } from '@/components/sections/home/Hero'
import { StatStrip } from '@/components/sections/home/StatStrip'
import { Process } from '@/components/sections/home/Process'
import { Services } from '@/components/sections/home/Services'
import { Included } from '@/components/sections/home/Included'
import { WhySwitch } from '@/components/sections/home/WhySwitch'
import { Comparison } from '@/components/sections/home/Comparison'
import { Industries } from '@/components/sections/home/Industries'
import { Situations } from '@/components/sections/home/Situations'
import { Commitments } from '@/components/sections/home/Commitments'
import { Faq } from '@/components/sections/Faq'
import { FinalCta } from '@/components/sections/FinalCta'
import { pageMetadata } from '@/lib/metadata'
import { faqLd, graph, organizationLd, serviceLd, webPageLd, websiteLd } from '@/lib/jsonld'

const title = 'Outbound Sales Agency: Trained SDR Teams for B2B | Aventrio'
const description =
  'Aventrio is an outbound sales agency for B2B companies. Named SDRs managed by US sales leaders, verified data, and sending domains we monitor daily.'

export const metadata = pageMetadata({ title, description, path: '/', absoluteTitle: true })

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd('WebPage', '/', title, description),
          serviceLd(),
          faqLd(),
        )}
      />
      <Hero />
      <StatStrip />
      <Process />
      <Services />
      <Included />
      {/* The one light-to-dark switch on the page */}
      <RindBand />
      <WhySwitch />
      <Comparison />
      <Industries />
      <Situations />
      <Commitments />
      <Faq />
      <FinalCta {...finalCta} />
    </>
  )
}
