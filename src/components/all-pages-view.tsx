"use client"

import { Link } from "@/components/wiki-link"
import { useMemo } from "react"

import { useWiki } from "@/components/wiki-provider"
import { categoryLabel, messages } from "@/lib/i18n"
import { allCategories, categoryHref, wikiHref } from "@/lib/wiki"

export function AllPagesView() {
  const { pages, locale, t, resolve } = useWiki()
  const items = useMemo(
    () =>
      Object.values(pages)
        .map((page) => ({ page, resolved: resolve(page) }))
        .sort((a, b) =>
          a.resolved.title.localeCompare(b.resolved.title, locale === "zh" ? "zh" : "en")
        ),
    [locale, pages, resolve]
  )
  const cats = useMemo(() => allCategories(pages, locale), [locale, pages])

  return (
    <div className="wiki-article">
      <h1 className="wiki-title">{t("navAll")}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {messages[locale].allPagesIntro(items.length)}
        {cats.length === 0
          ? t("none")
          : cats.map((cat) => (
              <span key={cat.name}>
                {" "}
                <Link href={categoryHref(cat.name)}>
                  {categoryLabel(cat.name, locale)} ({cat.count})
                </Link>
              </span>
            ))}
      </p>
      {items.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">{t("emptyWiki")}</p>
      ) : (
        <ul className="mt-6 columns-1 gap-x-8 sm:columns-2">
          {items.map(({ page, resolved }) => (
            <li key={page.slug} className="break-inside-avoid py-1">
              <Link href={wikiHref(page.slug)}>{resolved.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
