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
}

export const founder: Person = {
  name: 'Atif Javaid',
  role: 'Founder',
  initials: 'AJ',
  photo: '/team/atif-javaid.jpg',
  linkedin: null,
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
    photo: null,
    linkedin: 'https://www.linkedin.com/in/malikmudassir/',
  },
]
