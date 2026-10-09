/**
 * People shown on the About page. Set `photo` to a file in public/team/ once it
 * exists; until then a monogram is shown. Only people who have agreed to be
 * listed go here.
 */
export type Person = {
  name: string
  role: string
  initials: string
  /** Path under public/, for example '/team/atif-javaid.jpg'. Portrait, 4:5. */
  photo: string | null
  linkedin: string | null
  /** Optional short bio shown under the card. */
  bio?: string
}

export const founder: Person = {
  name: 'Atif Javaid',
  role: 'Founder & CEO',
  initials: 'AJ',
  photo: '/team/atif-javaid.jpg',
  linkedin: 'https://www.linkedin.com/in/atif-javaid/',
  bio: 'Atif works with tech startups and technology companies across software, SaaS and IT services, building the outbound and go-to-market motions that put their products in front of the right buyers. He builds relationships with founders, operators and investors across the tech ecosystem, so Aventrio works with the right companies and the right conversations happen.',
}

/** About page: the relationships side of the work. Describes relationships, not fundraising. */
export const network = {
  eyebrow: 'Founders, operators, investors',
  title: 'We build relationships across tech.',
  intro:
    'Good work starts with the right people in the room. Atif spends much of his time with founders, operators and investors in the tech ecosystem, building the relationships that connect Aventrio with the right technology companies and help the work get done.',
  items: [
    {
      title: 'Founders and startups',
      body: 'Founders building in software, SaaS and IT services, at the stage where a repeatable buyer and a working outbound motion decide the next year.',
    },
    {
      title: 'Technology companies',
      body: "Established tech firms opening a new segment or market, who need pipeline from buyers they don't reach today.",
    },
    {
      title: 'Investors',
      body: 'Investors active in tech. Staying close to what they back keeps us close to the companies building now, and to the problems those companies need solved.',
    },
  ],
}

export const advisorsIntro = {
  eyebrow: 'Advisor',
  title: 'Who we take advice from.',
}

export const advisors: Person[] = [
  {
    name: 'Malik Mudassir',
    role: 'Advisor to Aventrio',
    initials: 'MM',
    photo: '/team/malik-mudassir.jpg',
    linkedin: 'https://www.linkedin.com/in/malikmudassir/',
  },
]
