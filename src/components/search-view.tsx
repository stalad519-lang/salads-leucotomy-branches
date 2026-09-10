"use client"

import { Link } from "@/components/wiki-link"
import { useMemo } from "react"

import { useWiki } from "@/components/wiki-provider"
import { messages } from "@/lib/i18n"
import { searchPages, snippet, wikiHref } from "@/lib/wiki"
import { SearchBox } from "@/components/search-box"

export function SearchView({ query }: { query: string }) {
  const { pages, locale, t } = useWiki()
  const q = query
  const hits = useMemo(() => searchPages(pages, q, locale), [locale, pages, q])

  return (
    <div className="wiki-article">
      <h1 className="wiki-title">{t("searchResults")}</h1>
      <div className="mt-4 max-w-xl">
        <SearchBox initialQuery={q} tone="light" />
      </div>
      {!q.trim() ? (
        <p className="mt-6 text-sm text-muted-foreground">{t("searchHint")}</p>
      ) : hits.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">{messages[locale].searchEmpty(q)}</p>
      ) : (
        <ul className="mt-6 divide-y">
          {hits.map(({ page, resolved }) => (
            <li key={page.slug} className="py-3">
              <Link href={wikiHref(page.slug)} className="font-medium">
                {resolved.title}
              </Link>
              <p className="mt-1 text-sm text-muted-foreground">
                {snippet(resolved.content, q)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
