import { WikiRouter } from "@/components/wiki-router"
import { seedPages } from "@/data/seed-pages"
import { allCategories } from "@/lib/wiki"

export function generateStaticParams() {
  const paths: { path: string[] }[] = [
    { path: [] },
    { path: ["new"] },
    { path: ["search"] },
    { path: ["special", "recent"] },
    { path: ["special", "all"] },
    { path: ["special", "random"] },
  ]

  for (const page of seedPages) {
    paths.push({ path: ["wiki", page.slug] })
    paths.push({ path: ["edit", page.slug] })
    paths.push({ path: ["history", page.slug] })
  }

  for (const category of allCategories(
    Object.fromEntries(seedPages.map((page) => [page.slug, page])),
    "en"
  )) {
    paths.push({ path: ["category", category.name] })
  }

  return paths
}

export default function CatchAllPage() {
  return <WikiRouter />
}
