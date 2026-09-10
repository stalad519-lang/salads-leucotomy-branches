"use client"

import Link from "next/link"
import { useMemo } from "react"

import { InfoboxCard } from "@/components/infobox"
import { WikiMarkdown } from "@/components/wiki-markdown"
import { useWiki } from "@/components/wiki-provider"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  categoryHref,
  editHref,
  extractToc,
  formatTime,
  historyHref,
  HOME_SLUG,
  titleFromSlug,
  wikiHref,
} from "@/lib/wiki"

export function ArticleView({ slug }: { slug: string }) {
  const { getPage } = useWiki()
  const page = getPage(slug)
  const title = page?.title ?? titleFromSlug(slug)
  const toc = useMemo(
    () => (page ? extractToc(page.content) : []),
    [page]
  )

  if (!page) {
    return (
      <article className="wiki-article">
        <PageTabs slug={slug} current="view" missing />
        <h1 className="wiki-title">{title}</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          百科里还没有名为「{title}」的页面。创建后就可以用{" "}
          <code className="rounded bg-muted px-1">[[{title}]]</code>{" "}
          从其他条目链过来。
        </p>
        <Link href={editHref(slug)} className={buttonVariants({ className: "mt-4" })}>
          创建此页面
        </Link>
      </article>
    )
  }

  return (
    <article className="wiki-article">
      <PageTabs slug={slug} current="view" />
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="min-w-0 flex-1">
          <h1 className="wiki-title">{page.title}</h1>
          <p className="mt-1 text-xs text-muted-foreground">
            最近修改于 {formatTime(page.updatedAt)}
            {page.slug !== HOME_SLUG ? (
              <>
                {" "}
                ·{" "}
                <Link href={historyHref(slug)} className="wiki-inline">
                  查看历史
                </Link>
              </>
            ) : null}
          </p>
          <div className="mt-5 lg:hidden">
            {page.infobox ? <InfoboxCard infobox={page.infobox} /> : null}
          </div>
          <WikiMarkdown content={page.content} className="mt-5" />
          <div className="wiki-cats">
            <span className="text-xs text-muted-foreground">分类：</span>
            {page.categories.length ? (
              page.categories.map((category) => (
                <Badge key={category} variant="outline" render={<Link href={categoryHref(category)} />}>
                  {category}
                </Badge>
              ))
            ) : (
              <span className="text-xs text-muted-foreground">未分类</span>
            )}
          </div>
        </div>
        <aside className="w-full shrink-0 lg:w-64">
          <div className="hidden lg:block">
            {page.infobox ? <InfoboxCard infobox={page.infobox} /> : null}
          </div>
          {toc.length > 0 ? (
            <nav className="wiki-toc">
              <div className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                目录
              </div>
              <ul>
                {toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </aside>
      </div>
    </article>
  )
}

function PageTabs({
  slug,
  current,
  missing = false,
}: {
  slug: string
  current: "view" | "edit" | "history"
  missing?: boolean
}) {
  const tabs = [
    { href: slug === HOME_SLUG ? "/" : wikiHref(slug), key: "view" as const, label: "页面" },
    { href: editHref(slug), key: "edit" as const, label: missing ? "创建" : "编辑" },
    { href: historyHref(slug), key: "history" as const, label: "历史" },
  ]
  return (
    <div className="wiki-tabs">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          href={tab.href}
          className={tab.key === current ? "active" : ""}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  )
}
