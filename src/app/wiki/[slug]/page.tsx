import { ArticleView } from "@/components/article-view"

export default async function WikiPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ArticleView slug={decodeURIComponent(slug)} />
}
