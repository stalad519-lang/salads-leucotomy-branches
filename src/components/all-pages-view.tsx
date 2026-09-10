"use client"

import Link from "next/link"
import { useMemo } from "react"

import { useWiki } from "@/components/wiki-provider"
import { allCategories, categoryHref, wikiHref } from "@/lib/wiki"

export function AllPagesView() {
  const { pages } = useWiki()
  const items = useMemo(
    () => Object.values(pages).sort((a, b) => a.title.localeCompare(b.title, "zh")),
    [pages]
  )
  const cats = useMemo(() => allCategories(pages), [pages])

  return (
    <div className="wiki-article">
      <h1 className="wiki-title">所有页面</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        共 {items.length} 篇。分类：
        {cats.length === 0
          ? " 暂无"
          : cats.map((cat) => (
              <span key={cat.name}>
                {" "}
                <Link href={categoryHref(cat.name)}>
                  {cat.name}（{cat.count}）
                </Link>
              </span>
            ))}
      </p>
      {items.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">还没有条目。可以先新建一页。</p>
      ) : (
        <ul className="mt-6 columns-1 gap-x-8 sm:columns-2">
          {items.map((page) => (
            <li key={page.slug} className="break-inside-avoid py-1">
              <Link href={wikiHref(page.slug)}>{page.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
