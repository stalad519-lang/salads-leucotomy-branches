"use client"

import { NameList } from "@/components/name-list"
import { useWiki } from "@/components/wiki-provider"
import {
  FILE_UI,
  RISK_CSS,
  groupedAbnormalities,
  loc,
} from "@/lib/abnormality"
import { wikiHref } from "@/lib/wiki"

export function AbnormalityBoard() {
  const { locale } = useWiki()
  const ui = FILE_UI[locale]
  const ranks = groupedAbnormalities().filter((rank) => rank.files.length > 0)
  const held = ranks.reduce((sum, rank) => sum + rank.files.length, 0)

  return (
    <div className="name-panel">
      <header className="name-panel-head">
        <h1>{locale === "zh" ? "异想体" : "Abnormalities"}</h1>
        <span>
          {ui.board} {held}
        </span>
      </header>
      {ranks.map((rank) => (
        <section key={rank.risk} className="name-group">
          <h2 style={{ color: RISK_CSS[rank.risk], textShadow: `0 0 10px ${RISK_CSS[rank.risk]}` }}>
            {rank.risk}
          </h2>
          <NameList
            items={rank.files.map((file) => ({
              href: wikiHref(file.slug),
              name: loc(file.name, locale),
              hint: file.code,
            }))}
          />
        </section>
      ))}
    </div>
  )
}
