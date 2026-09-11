"use client"

import { Link } from "@/components/wiki-link"
import { CategoryDeck } from "@/components/category-deck"

import { useWiki } from "@/components/wiki-provider"
import {
  DAMAGE_META,
  findAbnormality,
  formatRange,
  loc,
} from "@/lib/abnormality"
import { categoryKey, categoryLabel, messages } from "@/lib/i18n"
import { pagesInCategory, wikiHref } from "@/lib/wiki"

export function CategoryView({ name }: { name: string }) {
  const { pages, locale, t } = useWiki()
  const key = categoryKey(name)
  const items = pagesInCategory(pages, name, locale)
  const label = categoryLabel(name, locale)

  return (
    <div>
      <CategoryDeck active={key} />
      <article className="wiki-article mt-5">
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
          <div className="wiki-file-list">
            {items.map(({ page, resolved }) => {
              const file = findAbnormality(page.slug)
              if (file && page.slug !== "Abnormalities") {
                const meta = DAMAGE_META[file.damage.color]
                return (
                  <Link
                    key={page.slug}
                    href={wikiHref(page.slug)}
                    className="abn-index-card"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={file.portrait}
                      alt=""
                      style={{ objectPosition: file.portraitFocus ?? "center" }}
                    />
                    <span>
                      <span className="abn-index-code">{file.code}</span>
                      <span className="abn-index-name">{loc(file.name, locale)}</span>
                      <span className="abn-index-meta">
                        {file.risk} · {locale === "zh" ? "情绪值" : "PE"} {file.pe} ·{" "}
                        {formatRange(file.damage.min, file.damage.max)}{" "}
                        {locale === "zh" ? meta.zh : meta.en}
                      </span>
                    </span>
                  </Link>
                )
              }
              return (
                <Link key={page.slug} href={wikiHref(page.slug)} className="wiki-file-row">
                  <span>{resolved.title}</span>
                  <span className="text-xs tracking-widest uppercase text-[#d4b37a]/80">
                    {page.slug.replaceAll("_", " ")}
                  </span>
                </Link>
              )
            })}
          </div>
        )}
      </article>
    </div>
  )
}
