"use client"

import Link from "next/link"

import { useWiki } from "@/components/wiki-provider"
import { categoryLabel, messages } from "@/lib/i18n"
import { pagesInCategory, wikiHref } from "@/lib/wiki"

export function CategoryView({ name }: { name: string }) {
  const { pages, locale, t } = useWiki()
  const items = pagesInCategory(pages, name, locale)
  const label = categoryLabel(name, locale)

  return (
    <div className="wiki-article">
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
