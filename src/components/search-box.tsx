"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useMemo, useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { searchPages } from "@/lib/wiki"
import { useWiki } from "@/components/wiki-provider"
import { wikiHref } from "@/lib/wiki"

export function SearchBox({
  compact = false,
  initialQuery = "",
  tone = "dark",
}: {
  compact?: boolean
  initialQuery?: string
  tone?: "dark" | "light"
}) {
  const router = useRouter()
  const { pages } = useWiki()
  const [query, setQuery] = useState(initialQuery)
  const [open, setOpen] = useState(false)

  const hits = useMemo(
    () => (query.trim() ? searchPages(pages, query).slice(0, 6) : []),
    [pages, query]
  )

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const q = query.trim()
    if (!q) return
    setOpen(false)
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full">
      <Search
        className={`pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 ${
          tone === "dark" ? "text-white/55" : "text-muted-foreground"
        }`}
      />
      <Input
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        placeholder="搜索百科…"
        aria-label="搜索百科"
        className={
          tone === "dark"
            ? "h-9 border-white/15 bg-white/10 pl-8 text-white placeholder:text-white/45 focus-visible:border-amber-200/70 focus-visible:ring-amber-200/30"
            : "h-9 pl-8"
        }
      />
      {open && hits.length > 0 && (
        <div className="absolute top-[calc(100%+6px)] right-0 left-0 z-50 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg">
          {hits.map((page) => (
            <Link
              key={page.slug}
              href={wikiHref(page.slug)}
              className="block px-3 py-2 text-sm hover:bg-muted"
            >
              <div className="font-medium">{page.title}</div>
              {!compact && (
                <div className="line-clamp-1 text-xs text-muted-foreground">
                  {page.categories.join(" · ") || "未分类"}
                </div>
              )}
            </Link>
          ))}
          <button
            type="submit"
            className="block w-full border-t px-3 py-2 text-left text-xs text-muted-foreground hover:bg-muted"
          >
            查看全部结果
          </button>
        </div>
      )}
    </form>
  )
}
