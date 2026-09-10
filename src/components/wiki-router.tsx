"use client"

import { useEffect, useState, useSyncExternalStore } from "react"

import { AllPagesView } from "@/components/all-pages-view"
import { ArticleView } from "@/components/article-view"
import { CategoryView } from "@/components/category-view"
import { EditorView } from "@/components/editor-view"
import { HistoryView } from "@/components/history-view"
import { NewPageView } from "@/components/new-page-view"
import { NotFoundView } from "@/components/not-found-view"
import { RecentView } from "@/components/recent-view"
import { SearchView } from "@/components/search-view"
import { useWiki } from "@/components/wiki-provider"
import {
  getLocation,
  getServerLocation,
  matchRoute,
  navigate,
  subscribeLocation,
} from "@/lib/nav"
import { HOME_SLUG, wikiHref } from "@/lib/wiki"

export function WikiRouter() {
  const [mounted, setMounted] = useState(false)
  const location = useSyncExternalStore(
    subscribeLocation,
    getLocation,
    getServerLocation
  )
  const route = matchRoute(location.pathname, location.search)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-48 animate-pulse rounded-xl bg-muted/70" />
  }

  if (route.type === "random") {
    return <RandomRedirect />
  }

  switch (route.type) {
    case "home":
      return <ArticleView slug={HOME_SLUG} />
    case "wiki":
      return <ArticleView slug={route.slug} />
    case "edit":
      return <EditorView slug={route.slug} />
    case "history":
      return <HistoryView slug={route.slug} />
    case "category":
      return <CategoryView name={route.name} />
    case "search":
      return <SearchView query={route.q} />
    case "new":
      return <NewPageView preset={route.title} />
    case "recent":
      return <RecentView />
    case "all":
      return <AllPagesView />
    default:
      return <NotFoundView />
  }
}

function RandomRedirect() {
  const { pages } = useWiki()

  useEffect(() => {
    const slugs = Object.keys(pages)
    if (slugs.length === 0) {
      navigate("/", { replace: true })
      return
    }
    const slug = slugs[Math.floor(Math.random() * slugs.length)]
    navigate(wikiHref(slug), { replace: true })
  }, [pages])

  return <p className="text-sm text-muted-foreground">Opening a random page…</p>
}
