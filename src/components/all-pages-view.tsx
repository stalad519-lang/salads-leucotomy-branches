"use client"

import { useMemo } from "react"

import { Link } from "@/components/wiki-link"
import { useWiki } from "@/components/wiki-provider"
import { categoryLabel, messages, PRIMARY_CATEGORIES } from "@/lib/i18n"
import { allCategories, categoryHref, wikiHref } from "@/lib/wiki"

const INDEX_SLUGS = new Set(["Abnormalities", "Basics", "Creators", "Personalities", "Main_Page"])

export function AllPagesView() {
  const { pages, locale, t, resolve } = useWiki()
  const items = useMemo(
    () =>
      Object.values(pages)
        .filter((page) => !INDEX_SLUGS.has(page.slug))
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
    <div className="archive">
      <header className="archive-head">
        <h1>{t("navAll")}</h1>
        <p>{messages[locale].allPagesIntro(items.length)}</p>
      </header>
      {extra.length ? (
        <p className="archive-empty">
          {extra.map((cat) => (
            <span key={cat.name}>
              {" "}
              <Link href={categoryHref(cat.name)}>
                {categoryLabel(cat.name, locale)} ({cat.count})
              </Link>
            </span>
          ))}
        </p>
      ) : null}
      {items.length === 0 ? (
        <p className="archive-empty">{t("emptyWiki")}</p>
      ) : (
        <ul className="archive-index">
          {items.map(({ page, resolved }) => (
            <li key={page.slug}>
              <Link href={wikiHref(page.slug)}>{resolved.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
