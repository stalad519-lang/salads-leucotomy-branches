"use client"

import { Link } from "@/components/wiki-link"
import { SceneRail } from "@/components/category-deck"
import { AbnormalityBoard } from "@/components/abnormality-catalog"

import { useWiki } from "@/components/wiki-provider"
import { categoryKey, categoryLabel, messages } from "@/lib/i18n"
import { pagesInCategory, wikiHref } from "@/lib/wiki"

export function CategoryView({ name }: { name: string }) {
  const { pages, locale, t } = useWiki()
  const key = categoryKey(name)
  const items = pagesInCategory(pages, name, locale)
  const label = categoryLabel(name, locale)

  if (key === "Abnormalities") {
    return (
      <div className="category-scene">
        <SceneRail active={key} />
        <AbnormalityBoard />
      </div>
    )
  }

  return (
    <div className="category-scene">
      <SceneRail active={key} />
      <article className="wiki-article">
        <p className="scene-kicker">
          <Link href="/">{t("backLobby")}</Link>
        </p>
        <h1 className="wiki-title">{label}</h1>
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
            {items.map(({ page, resolved }) => (
              <Link key={page.slug} href={wikiHref(page.slug)} className="wiki-file-row">
                <span>{resolved.title}</span>
                <span className="wiki-file-slug">{page.slug.replaceAll("_", " ")}</span>
              </Link>
            ))}
          </div>
        )}
      </article>
    </div>
  )
}
