"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import { useWiki } from "@/components/wiki-provider"
import { searchPages, snippet, wikiHref } from "@/lib/wiki"
import { SearchBox } from "@/components/search-box"

export function SearchView({ query }: { query: string }) {
  const { ready, pages } = useWiki()
  const [q] = useState(query)
  const hits = useMemo(() => searchPages(pages, q), [pages, q])

  if (!ready) return <div className="wiki-article h-40 animate-pulse rounded-xl bg-muted" />

  return (
    <div className="wiki-article">
      <h1 className="wiki-title">搜索结果</h1>
      <div className="mt-4 max-w-xl">
        <SearchBox initialQuery={q} tone="light" />
      </div>
      {!q.trim() ? (
        <p className="mt-6 text-sm text-muted-foreground">输入关键词查找标题或正文。</p>
      ) : hits.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">
          没有找到「{q}」。可以改词试试，或新建一篇同名页面。
        </p>
      ) : (
        <ul className="mt-6 divide-y">
          {hits.map((page) => (
            <li key={page.slug} className="py-3">
              <Link href={wikiHref(page.slug)} className="font-medium">
                {page.title}
              </Link>
              <p className="mt-1 text-sm text-muted-foreground">
                {snippet(page.content, q)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
