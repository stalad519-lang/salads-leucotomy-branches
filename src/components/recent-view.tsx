"use client"

import Link from "next/link"
import { useMemo } from "react"

import { useWiki } from "@/components/wiki-provider"
import { formatTime, historyHref, wikiHref } from "@/lib/wiki"

export function RecentView() {
  const { pages } = useWiki()
  const items = useMemo(
    () =>
      Object.values(pages).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    [pages]
  )

  return (
    <div className="wiki-article">
      <h1 className="wiki-title">最近更改</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        按本机保存时间排列。清空浏览器数据后，这里会回到示例条目。
      </p>
      {items.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">还没有任何页面。</p>
      ) : (
        <ul className="mt-6 divide-y">
          {items.map((page) => (
            <li key={page.slug} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <Link href={wikiHref(page.slug)} className="font-medium">
                  {page.title}
                </Link>
                <div className="text-xs text-muted-foreground">
                  {page.revisions[0]?.summary || "已保存"}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {formatTime(page.updatedAt)} ·{" "}
                <Link href={historyHref(page.slug)}>历史</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
