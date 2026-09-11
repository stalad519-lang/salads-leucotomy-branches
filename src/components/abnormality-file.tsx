"use client"

import { Link } from "@/components/wiki-link"
import { RiskBadge } from "@/components/risk-badge"
import { WikiMarkdown } from "@/components/wiki-markdown"
import { useWiki } from "@/components/wiki-provider"
import {
  DAMAGE_META,
  DAMAGE_ORDER,
  FILE_UI,
  formatRange,
  formatSigned,
  loc,
  resistanceWord,
  type AbnormalityRecord,
  type DamageColor,
  type DamageRange,
} from "@/lib/abnormality"
import { wikiHref } from "@/lib/wiki"
import type { Locale } from "@/lib/types"

const WORK_HREF = {
  analysis: "Analysis",
  instinct: "Instinct",
  attachment: "Attachment",
  repression: "Repression",
} as const

export function AbnormalityFile({
  file,
  notes,
}: {
  file: AbnormalityRecord
  notes?: string
}) {
  const { locale, t } = useWiki()
  const ui = FILE_UI[locale]
  const name = loc(file.name, locale)
  const egoName = loc(file.ego.name, locale)
  const dmg = DAMAGE_META[file.damage.color]
  const sections = [
    { id: "Story", label: ui.story },
    { id: "Management", label: ui.management },
    { id: "Personality", label: ui.personality },
    { id: "EGO", label: `${ui.ego} · ${egoName}` },
    ...(notes?.trim() ? [{ id: "Notes", label: ui.notes }] : []),
  ]

  return (
    <div className="dossier">
      <p className="dossier-back">
        <Link href="/">{ui.backArchive}</Link>
      </p>

      <div className="dossier-grid">
        <aside className="dossier-box">
          <div className="dossier-box-name">{name}</div>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={file.portrait}
              alt={name}
              style={{ transformOrigin: file.portraitFocus ?? "center" }}
            />
            <figcaption>{file.code}</figcaption>
          </figure>
          <dl>
            <BoxRow label={ui.code} value={file.code} />
            <div className="dossier-box-row">
              <dt>{ui.risk}</dt>
              <dd>
                <RiskBadge risk={file.risk} />
              </dd>
            </div>
            <div className="dossier-box-row">
              <dt>{ui.colDamage}</dt>
              <dd>
                <span className="archive-dmg">
                  <i style={{ background: dmg.css }} />
                  <span>
                    {formatRange(file.damage.min, file.damage.max)}{" "}
                    {locale === "zh" ? dmg.zh : dmg.en}
                  </span>
                </span>
              </dd>
            </div>
            <BoxRow label={ui.pe} value={String(file.pe)} />
            <BoxRow label={ui.ego} value={egoName} />
          </dl>
          <div className="dossier-box-energy">
            <p>{ui.energy}</p>
            <table>
              <thead>
                <tr>
                  <th>{ui.bad}</th>
                  <th>{ui.normal}</th>
                  <th>{ui.good}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{file.energy.bad}</td>
                  <td>{file.energy.normal}</td>
                  <td>{file.energy.good}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dossier-box-res">
            <p>{ui.resistances}</p>
            <ResistanceList values={file.resistances} locale={locale} />
          </div>
        </aside>

        <div className="dossier-body">
          <p className="dossier-stamp">{ui.file}</p>
          <h1>{name}</h1>
          <p className="dossier-class">
            <span className="dossier-code">{file.code}</span>
            <RiskBadge risk={file.risk} />
          </p>

          <nav className="dossier-toc" aria-label={t("contents")}>
            <p>{t("contents")}</p>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="Story">
            <h2>{ui.story}</h2>
            <p className="abn-story">{loc(file.story, locale)}</p>
          </section>

          <section id="Management">
            <h2>{ui.management}</h2>
            <ol className="dossier-guides">
              {loc(file.management, locale).map((rule, index) => (
                <li key={rule}>
                  <h3>
                    {ui.guideline} {index + 1}
                  </h3>
                  <p>{rule}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="Personality">
            <h2>{ui.personality}</h2>
            <p>
              <span className="abn-label">{ui.primary}</span>{" "}
              {loc(file.personality.primary, locale)}
              <br />
              <span className="abn-label">{ui.secondary}</span>{" "}
              {loc(file.personality.secondary, locale).join(" / ")}
            </p>
          </section>

          <section id="EGO">
            <h2>
              {ui.ego} · {egoName}
            </h2>

            <h3>
              {ui.weapon} <RiskBadge risk={file.ego.weapon.risk} />
            </h3>
            <p className="abn-look">{loc(file.ego.weapon.appearance, locale)}</p>
            <p>
              {ui.range}: {loc(file.ego.weapon.range, locale)} · {ui.damage}:{" "}
              <DamageChip damage={file.ego.weapon.damage} locale={locale} />
            </p>
            <p>
              {ui.mastered}: {loc(file.ego.weapon.mastered.range, locale)} ·{" "}
              <DamageChip damage={file.ego.weapon.mastered.damage} locale={locale} />
            </p>

            <h3>
              {ui.suit} <RiskBadge risk={file.ego.suit.risk} />
            </h3>
            <p className="abn-look">{loc(file.ego.suit.appearance, locale)}</p>
            <ResistanceList values={file.ego.suit.resistances} locale={locale} />
            <p className="abn-special">
              {ui.special}: {file.ego.suit.special ? loc(file.ego.suit.special, locale) : ui.optional}
            </p>

            <h3>{ui.corrosion}</h3>
            <p className="abn-look">{loc(file.ego.corrosion.appearance, locale)}</p>
            <ResistanceList values={file.ego.corrosion.resistances} locale={locale} />
            <p className="abn-special">
              {ui.special}: {loc(file.ego.corrosion.special, locale)}
            </p>
            <p className="abn-special">
              {ui.weaponSkill}: {loc(file.ego.corrosion.weaponSkill, locale)}
            </p>

            <h3>
              {ui.gift} · {loc(file.ego.gift.name, locale)}
            </h3>
            <blockquote className="abn-quote">{loc(file.ego.gift.appearance, locale)}</blockquote>
            <dl className="abn-bonus">
              <BonusRow href={WORK_HREF.analysis} label={ui.analysis} value={file.ego.gift.bonuses.analysis} />
              <BonusRow href={WORK_HREF.instinct} label={ui.instinct} value={file.ego.gift.bonuses.instinct} />
              <BonusRow href={WORK_HREF.attachment} label={ui.attachment} value={file.ego.gift.bonuses.attachment} />
              <BonusRow href={WORK_HREF.repression} label={ui.repression} value={file.ego.gift.bonuses.repression} />
            </dl>
            <p className="abn-special">
              {ui.special}: {file.ego.gift.special ? loc(file.ego.gift.special, locale) : ui.none}
            </p>
          </section>

          {notes?.trim() ? (
            <section id="Notes">
              <h2>{ui.notes}</h2>
              <WikiMarkdown content={notes} />
            </section>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function BoxRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="dossier-box-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  )
}

function DamageChip({ damage, locale }: { damage: DamageRange; locale: Locale }) {
  const meta = DAMAGE_META[damage.color]
  return (
    <span className="abn-dmg" style={{ borderColor: meta.css, color: meta.css }}>
      {formatRange(damage.min, damage.max)} {locale === "zh" ? meta.zh : meta.en}
    </span>
  )
}

function ResistanceList({
  values,
  locale,
}: {
  values: Record<DamageColor, number>
  locale: Locale
}) {
  return (
    <ul className="abn-res">
      {DAMAGE_ORDER.map((color) => {
        const meta = DAMAGE_META[color]
        const value = values[color]
        return (
          <li key={color}>
            <span className="abn-res-name" style={{ color: meta.css }}>
              {locale === "zh" ? meta.zh : meta.en}
            </span>
            <span className="abn-res-n">{value}</span>
            <span className="abn-res-w">{resistanceWord(value, locale)}</span>
          </li>
        )
      })}
    </ul>
  )
}

function BonusRow({ href, label, value }: { href: string; label: string; value: number }) {
  return (
    <div>
      <dt>
        <Link href={wikiHref(href)}>{label}</Link>
      </dt>
      <dd className={value < 0 ? "is-neg" : value > 0 ? "is-pos" : ""}>
        {formatSigned(value)}
      </dd>
    </div>
  )
}
