"use client"

import Link from "next/link"
import { useMemo } from "react"

import { useWiki } from "@/components/wiki-provider"
import { formatTime, historyHref, wikiHref } from "@/lib/wiki"

export function RecentView() {
  const { pages, locale, t, resolve } = useWiki()
  const items = useMemo(
    () =>
      Object.values(pages)
        .map((page) => ({ page, resolved: resolve(page) }))
        .sort((a, b) => b.page.updatedAt.localeCompare(a.page.updatedAt)),
    [pages, resolve]
  )

  return (
    <div className="wiki-article">
      <h1 className="wiki-title">{t("navRecent")}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{t("recentIntro")}</p>
      {items.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">{t("noPages")}</p>
      ) : (
        <ul className="mt-6 divide-y">
          {items.map(({ page, resolved }) => (
            <li
              key={page.slug}
              className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <Link href={wikiHref(page.slug)} className="font-medium">
                  {resolved.title}
                </Link>
                <div className="text-xs text-muted-foreground">
                  {page.revisions[0]?.summary || t("saved")}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {formatTime(page.updatedAt, locale)} ·{" "}
                <Link href={historyHref(page.slug)}>{t("history")}</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
