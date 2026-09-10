"use client"

import Link from "next/link"
import { useMemo } from "react"

import { useWiki } from "@/components/wiki-provider"
import { editHref, formatTime, titleFromSlug, wikiHref, HOME_SLUG } from "@/lib/wiki"

export function HistoryView({ slug }: { slug: string }) {
  const { ready, getPage } = useWiki()
  const page = getPage(slug)
  const revisions = useMemo(() => page?.revisions ?? [], [page])

  if (!ready) return <div className="wiki-article h-40 animate-pulse rounded-xl bg-muted" />

  if (!page) {
    return (
      <div className="wiki-article">
        <h1 className="wiki-title">{titleFromSlug(slug)} 的历史</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          此页面还不存在，因此没有历史。
        </p>
        <Link href={editHref(slug)} className="mt-4 inline-block text-sm">
          创建此页面
        </Link>
      </div>
    )
  }

  return (
    <div className="wiki-article">
      <div className="wiki-tabs">
        <Link href={slug === HOME_SLUG ? "/" : wikiHref(slug)}>页面</Link>
        <Link href={editHref(slug)}>编辑</Link>
        <Link href="#" className="active">
          历史
        </Link>
      </div>
      <h1 className="wiki-title">{page.title} 的历史</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        只保存在本机，最多 20 条。这不是多人协作服务器上的版本库。
      </p>
      <ul className="mt-6 divide-y">
        {revisions.map((revision, index) => (
          <li key={`${revision.at}-${index}`} className="py-3">
            <div className="text-sm font-medium">{revision.summary}</div>
            <div className="text-xs text-muted-foreground">{formatTime(revision.at)}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
