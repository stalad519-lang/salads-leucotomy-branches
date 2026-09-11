"use client"

import { useMemo } from "react"

import { Link } from "@/components/wiki-link"
import { useWiki } from "@/components/wiki-provider"
import { categoryLabel, messages, PRIMARY_CATEGORIES } from "@/lib/i18n"
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
  const extra = cats.filter(
    (cat) => !(PRIMARY_CATEGORIES as readonly string[]).includes(cat.name)
  )

  return (
    <article className="wiki-article">
        <h1 className="wiki-title">{t("navAll")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {messages[locale].allPagesIntro(items.length)}
          {extra.map((cat) => (
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
          <div className="wiki-file-list">
            {items.map(({ page, resolved }) => (
              <Link key={page.slug} href={wikiHref(page.slug)} className="wiki-file-row">
                <span>{resolved.title}</span>
                <span className="wiki-file-slug">
                  {page.slug.replaceAll("_", " ")}
                </span>
              </Link>
            ))}
          </div>
        )}
      </article>
  )
}
