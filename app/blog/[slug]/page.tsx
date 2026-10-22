import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { postBySlug, postPath, posts } from '@/content/blog'
import { founder } from '@/content/team'
import { plainText } from '@/components/blog/RichText'
import { PostView } from '@/components/blog/PostView'
import { JsonLd } from '@/components/ui/JsonLd'
import { pageMetadata } from '@/lib/metadata'
import {
  blogPostingLd,
  breadcrumbLd,
  graph,
  organizationLd,
  pageFaqLd,
  webPageLd,
  websiteLd,
} from '@/lib/jsonld'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = postBySlug((await params).slug)
  if (!post) return {}
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: postPath(post),
    absoluteTitle: true,
    rss: true,
    article: {
      publishedTime: post.published,
      modifiedTime: post.updated,
      author: founder.name,
      tags: post.tags,
    },
  })
}

export default async function Page({ params }: Props) {
  const post = postBySlug((await params).slug)
  if (!post) notFound()
  const path = postPath(post)
  const wordCount = post.body
    .flatMap((b) => Object.values(b).flat())
    .map((t) => plainText(String(t)))
    .join(' ')
    .split(/\s+/).length
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd('WebPage', path, post.title, post.description),
          breadcrumbLd([
            { name: 'Blog', path: '/blog' },
            { name: post.h1, path },
          ]),
          blogPostingLd({
            path,
            headline: post.h1,
            description: post.description,
            published: post.published,
            updated: post.updated,
            keywords: [post.keyword, ...post.tags],
            citations: post.sources.map((s) => s.url),
            wordCount,
          }),
          pageFaqLd(path, post.faq),
        )}
      />
      <PostView post={post} />
    </>
  )
}
