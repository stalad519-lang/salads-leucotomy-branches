"use client"

import Link from "next/link"

import { useWiki } from "@/components/wiki-provider"
import { messages } from "@/lib/i18n"
import { editHref, formatTime, titleFromSlug, wikiHref, HOME_SLUG } from "@/lib/wiki"

export function HistoryView({ slug }: { slug: string }) {
  const { getPage, resolve, t, locale } = useWiki()
  const page = getPage(slug)
  const resolved = page ? resolve(page) : null
  const revisions = page?.revisions ?? []

  if (!page || !resolved) {
    return (
      <div className="wiki-article">
        <h1 className="wiki-title">{messages[locale].historyOf(titleFromSlug(slug))}</h1>
        <p className="mt-4 text-sm text-muted-foreground">{t("noHistory")}</p>
        <Link href={editHref(slug)} className="mt-4 inline-block text-sm">
          {t("createPage")}
        </Link>
      </div>
    )
  }

  return (
    <div className="wiki-article">
      <div className="wiki-tabs">
        <Link href={slug === HOME_SLUG ? "/" : wikiHref(slug)}>{t("page")}</Link>
        <Link href={editHref(slug)}>{t("edit")}</Link>
        <Link href="#" className="active">
          {t("history")}
        </Link>
      </div>
      <h1 className="wiki-title">{messages[locale].historyOf(resolved.title)}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{t("historyHelp")}</p>
      <ul className="mt-6 divide-y">
        {revisions.map((revision, index) => (
          <li key={`${revision.at}-${index}`} className="py-3">
            <div className="text-sm font-medium">
              [{revision.locale}] {revision.summary}
            </div>
            <div className="text-xs text-muted-foreground">
              {formatTime(revision.at, locale)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
