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
  type WikiRoute,
} from "@/lib/nav"
import { categoryKey } from "@/lib/i18n"
import { wikiHref } from "@/lib/wiki"

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
    return <div className="h-48 animate-pulse border border-white bg-black" />
  }

  if (route.type === "random") {
    return <RandomRedirect />
  }

  return (
    <div key={sceneKey(route)} className="wiki-scene">
      {routeView(route)}
    </div>
  )
}

function routeView(route: WikiRoute) {
  switch (route.type) {
    case "home":
      return <CategoryView name="Abnormalities" />
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

function sceneKey(route: WikiRoute) {
  if (route.type === "home") return "category:Abnormalities"
  if (route.type === "category") return `category:${categoryKey(route.name)}`
  if (route.type === "wiki") return `wiki:${route.slug}`
  if (route.type === "edit") return `edit:${route.slug}`
  if (route.type === "history") return `history:${route.slug}`
  if (route.type === "search") return `search:${route.q}`
  if (route.type === "new") return `new:${route.title}`
  return route.type
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
