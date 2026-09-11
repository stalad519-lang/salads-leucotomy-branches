"use client"

import { Link } from "@/components/wiki-link"
import { AbnormalityBoard } from "@/components/abnormality-catalog"

import { useWiki } from "@/components/wiki-provider"
import { categoryKey, categoryLabel, messages } from "@/lib/i18n"
import { pagesInCategory, wikiHref } from "@/lib/wiki"

const INDEX_SLUGS = new Set(["Abnormalities", "Basics", "Mechanics", "Creators"])

export function CategoryView({ name }: { name: string }) {
  const { pages, locale, t } = useWiki()
  const key = categoryKey(name)
  const items = pagesInCategory(pages, name, locale).filter(
    (item) => !INDEX_SLUGS.has(item.page.slug)
  )
  const label = categoryLabel(name, locale)

  if (key === "Abnormalities") {
    return <AbnormalityBoard />
  }

  return (
    <div className="archive">
      <header className="archive-head">
        <p className="archive-kicker">{t("archiveEyebrow")}</p>
        <h1>{label}</h1>
        <span>{messages[locale].categoryCount(items.length)}</span>
      </header>
      {items.length === 0 ? (
        <p className="archive-empty">{messages[locale].categoryEmpty(label)}</p>
      ) : (
        <ul className="archive-index">
          {items.map(({ page, resolved }) => (
            <li key={page.slug}>
              <Link href={wikiHref(page.slug)}>{resolved.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <p className="archive-foot">
        <Link href="/special/all">{t("backAll")}</Link>
      </p>
    </div>
  )
}
