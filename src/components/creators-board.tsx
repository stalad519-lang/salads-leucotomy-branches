"use client"

import { Link } from "@/components/wiki-link"
import { useWiki } from "@/components/wiki-provider"
import { creators } from "@/data/creators"
import { loc } from "@/lib/abnormality"
import { categoryLabel, messages } from "@/lib/i18n"
import { wikiHref } from "@/lib/wiki"

export function CreatorsBoard() {
  const { locale, t } = useWiki()
  const label = categoryLabel("Creators", locale)

  return (
    <div className="archive">
      <header className="archive-head">
        <p className="archive-kicker">{t("archiveEyebrow")}</p>
        <h1>{label}</h1>
        <span>{messages[locale].categoryCount(creators.length)}</span>
      </header>

      <ul className="creator-board">
        {creators.map((creator) => (
          <li key={creator.slug}>
            <Link href={wikiHref(creator.slug)} className="creator-card">
              <span className="creator-card-shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={creator.portrait} alt="" />
              </span>
              <span className="creator-card-copy">
                <span className="creator-card-name">{creator.name}</span>
                <span className="creator-card-role">{loc(creator.role, locale)}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="archive-foot">
        <Link href="/special/all">{t("backAll")}</Link>
      </p>
    </div>
  )
}
