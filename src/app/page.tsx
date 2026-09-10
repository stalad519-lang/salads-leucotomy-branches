import { ArticleView } from "@/components/article-view"
import { HOME_SLUG } from "@/lib/wiki"

export default function HomePage() {
  return <ArticleView slug={HOME_SLUG} />
}
