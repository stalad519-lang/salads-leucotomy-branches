"use client"

import { Link } from "@/components/wiki-link"
import { useWiki } from "@/components/wiki-provider"
import { personalities } from "@/data/personalities"
import { loc } from "@/lib/abnormality"
import {
  DISPOSITION_LABEL,
  KIND_LABEL,
  formatBonusLine,
  personalitiesByKind,
  type PersonalityKind,
  type PersonalityRecord,
} from "@/lib/personality"
import { categoryLabel, messages } from "@/lib/i18n"
import { wikiHref } from "@/lib/wiki"

const KIND_ORDER: PersonalityKind[] = ["primary", "trait", "special"]

function Section({
  kind,
  items,
}: {
  kind: PersonalityKind
  items: PersonalityRecord[]
}) {
  const { locale } = useWiki()
  if (items.length === 0) return null
  return (
    <section className="pers-board-section">
      <h2 className="pers-board-h">
        {loc(KIND_LABEL[kind], locale)}
        <span className="pers-board-count">{items.length}</span>
      </h2>
      <ul className="pers-board-list">
        {items.map((p) => (
          <li key={p.id}>
            <Link href={wikiHref(p.slug)} className="pers-card">
              <span className={`pers-card-disp pers-disp-${p.disposition}`}>
                {loc(DISPOSITION_LABEL[p.disposition], locale)}
              </span>
              <span className="pers-card-name">{loc(p.name, locale)}</span>
              <span className="pers-card-desc">{loc(p.description, locale)}</span>
              <span className="pers-card-bonus">{formatBonusLine(p.bonus, locale)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function PersonalityBoard() {
  const { locale, t } = useWiki()
  const label = categoryLabel("Personalities", locale)

  return (
    <div className="archive">
      <header className="archive-head">
        <p className="archive-kicker">{t("archiveEyebrow")}</p>
        <h1>{label}</h1>
        <span>{messages[locale].categoryCount(personalities.length)}</span>
      </header>
      <p className="pers-board-intro">
        {locale === "zh"
          ? "性格图鉴：主性格、随机特质与特殊解锁。数据同步自游戏 Personality Codex。"
          : "Personality Codex: primaries, random traits, and special unlocks — synced from the game."}
      </p>
      {KIND_ORDER.map((kind) => (
        <Section key={kind} kind={kind} items={personalitiesByKind(kind)} />
      ))}
      <p className="archive-foot">
        <Link href="/special/all">{t("backAll")}</Link>
      </p>
    </div>
  )
}
