"use client"

import { FormEvent, useMemo, useState } from "react"
import { Search } from "lucide-react"

import { categoryLabel } from "@/lib/i18n"
import { searchPages, wikiHref } from "@/lib/wiki"
import { navigate } from "@/lib/nav"
import { useWiki } from "@/components/wiki-provider"
import { Link } from "@/components/wiki-link"

export function SearchBox({
  compact = false,
  initialQuery = "",
  tone = "dark",
}: {
  compact?: boolean
  initialQuery?: string
  tone?: "dark" | "light"
}) {
  const { pages, locale, t } = useWiki()
  const [query, setQuery] = useState(initialQuery)
  const [open, setOpen] = useState(false)

  const hits = useMemo(
    () => (query.trim() ? searchPages(pages, query, locale).slice(0, 6) : []),
    [locale, pages, query]
  )

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const q = String(new FormData(event.currentTarget).get("q") || query).trim()
    if (!q) return
    setOpen(false)
    navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full">
      <Search
        className={`pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 ${
          tone === "dark" ? "text-white/55" : "text-muted-foreground"
        }`}
      />
      <input
        name="q"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        placeholder={t("search")}
        aria-label={t("searchAria")}
        className={
          tone === "dark"
            ? "h-9 w-full rounded-lg border border-white/15 bg-white/10 pl-8 text-sm text-white outline-none placeholder:text-white/45 focus-visible:border-red-400/70 focus-visible:ring-3 focus-visible:ring-red-400/30"
            : "h-9 w-full rounded-lg border border-input bg-transparent pl-8 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        }
      />
      {open && hits.length > 0 && (
        <div className="absolute top-[calc(100%+6px)] right-0 left-0 z-50 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg">
          {hits.map(({ page, resolved }) => (
            <Link
              key={page.slug}
              href={wikiHref(page.slug)}
              className="block px-3 py-2 text-sm hover:bg-muted"
            >
              <div className="font-medium">{resolved.title}</div>
              {!compact && (
                <div className="line-clamp-1 text-xs text-muted-foreground">
                  {resolved.categories.map((c) => categoryLabel(c, locale)).join(" · ") ||
                    t("uncategorized")}
                </div>
              )}
            </Link>
          ))}
          <button
            type="submit"
            className="block w-full border-t px-3 py-2 text-left text-xs text-muted-foreground hover:bg-muted"
          >
            {t("allResults")}
          </button>
        </div>
      )}
    </form>
  )
}
