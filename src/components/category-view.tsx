"use client"

import { Link } from "@/components/wiki-link"

import { useWiki } from "@/components/wiki-provider"
import {
  categoryKey,
  categoryLabel,
  messages,
  PRIMARY_CATEGORIES,
} from "@/lib/i18n"
import { categoryHref, pagesInCategory, wikiHref } from "@/lib/wiki"

export function CategoryView({ name }: { name: string }) {
  const { pages, locale, t } = useWiki()
  const key = categoryKey(name)
  const items = pagesInCategory(pages, name, locale)
  const label = categoryLabel(name, locale)

  return (
    <div className="wiki-article">
      <div className="wiki-tabs">
        {PRIMARY_CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={categoryHref(cat)}
            className={cat === key ? "active" : ""}
          >
            {categoryLabel(cat, locale)}
          </Link>
        ))}
      </div>
      <h1 className="wiki-title">{messages[locale].categoryTitle(label)}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {messages[locale].categoryCount(items.length)}{" "}
        <Link href="/special/all">{t("backAll")}</Link>
      </p>
      {items.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">
          {messages[locale].categoryEmpty(label)}
        </p>
      ) : (
        <ul className="mt-6 list-disc pl-5">
          {items.map(({ page, resolved }) => (
            <li key={page.slug} className="py-1">
              <Link href={wikiHref(page.slug)}>{resolved.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
