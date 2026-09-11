"use client"

import { Link } from "@/components/wiki-link"
import { WikiMarkdown } from "@/components/wiki-markdown"
import { useWiki } from "@/components/wiki-provider"
import {
  DAMAGE_META,
  DAMAGE_ORDER,
  FILE_UI,
  RISK_CSS,
  formatRange,
  formatSigned,
  loc,
  resistanceWord,
  type AbnormalityRecord,
  type DamageColor,
  type DamageRange,
  type RiskLevel,
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
  const { locale } = useWiki()
  const ui = FILE_UI[locale]
  const name = loc(file.name, locale)
  const egoName = loc(file.ego.name, locale)

  return (
    <div className="abn-file">
      <header className="abn-hero">
        <p className="abn-kicker">{ui.file}</p>
        <div className="abn-hero-row">
          <h1 className="abn-name">{name}</h1>
          <RiskBadge risk={file.risk} />
        </div>
        <p className="abn-code">{file.code}</p>
        <PeMeter value={file.pe} label={ui.pe} />
        <nav className="abn-jump" aria-label={ui.file}>
          <a href="#Damage">{ui.damage}</a>
          <a href="#Energy">{ui.energy}</a>
          <a href="#Resistances">{ui.resistances}</a>
          <a href="#Story">{ui.story}</a>
          <a href="#Management">{ui.management}</a>
          <a href="#Personality">{ui.personality}</a>
          <a href="#EGO">{ui.ego}</a>
        </nav>
      </header>

      <div className="abn-top">
        <figure className="abn-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={file.portrait}
            alt={name}
            style={{ objectPosition: file.portraitFocus ?? "center" }}
          />
          <figcaption>
            {file.code} · {name}
          </figcaption>
        </figure>

        <div className="abn-stats">
          <section className="abn-panel" id="Damage">
            <h2>{ui.damage}</h2>
            <DamageChip damage={file.damage} locale={locale} />
          </section>

          <section className="abn-panel" id="Energy">
            <h2>{ui.energy}</h2>
            <div className="abn-energy">
              <EnergyCell tone="bad" label={ui.bad} value={file.energy.bad} />
              <EnergyCell tone="normal" label={ui.normal} value={file.energy.normal} />
              <EnergyCell tone="good" label={ui.good} value={file.energy.good} />
            </div>
          </section>

          <section className="abn-panel" id="Resistances">
            <h2>{ui.resistances}</h2>
            <ResistanceList values={file.resistances} locale={locale} />
          </section>
        </div>
      </div>

      <section className="abn-panel" id="Story">
        <h2>{ui.story}</h2>
        <p className="abn-story">{loc(file.story, locale)}</p>
      </section>

      <section className="abn-panel" id="Management">
        <h2>{ui.management}</h2>
        <ol className="abn-rules">
          {loc(file.management, locale).map((rule, index) => (
            <li key={rule}>
              <span className="abn-rule-n">{index + 1}</span>
              <span>{rule}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="abn-panel" id="Personality">
        <h2>{ui.personality}</h2>
        <div className="abn-traits">
          <div>
            <p className="abn-label">{ui.primary}</p>
            <span className="abn-chip abn-chip-main">{loc(file.personality.primary, locale)}</span>
          </div>
          <div>
            <p className="abn-label">{ui.secondary}</p>
            <div className="abn-chip-row">
              {loc(file.personality.secondary, locale).map((trait) => (
                <span key={trait} className="abn-chip">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="abn-panel" id="EGO">
        <h2>
          {ui.ego} · {egoName}
        </h2>

        <div className="abn-ego-grid">
          <article className="abn-ego-card">
            <header>
              <h3>{ui.weapon}</h3>
              <RiskBadge risk={file.ego.weapon.risk} />
            </header>
            <p className="abn-look">{loc(file.ego.weapon.appearance, locale)}</p>
            <dl className="abn-kv">
              <div>
                <dt>{ui.range}</dt>
                <dd>{loc(file.ego.weapon.range, locale)}</dd>
              </div>
              <div>
                <dt>{ui.damage}</dt>
                <dd>
                  <DamageChip damage={file.ego.weapon.damage} locale={locale} />
                </dd>
              </div>
            </dl>
            <div className="abn-mastered">
              <p className="abn-label">{ui.mastered}</p>
              <dl className="abn-kv">
                <div>
                  <dt>{ui.range}</dt>
                  <dd>{loc(file.ego.weapon.mastered.range, locale)}</dd>
                </div>
                <div>
                  <dt>{ui.damage}</dt>
                  <dd>
                    <DamageChip damage={file.ego.weapon.mastered.damage} locale={locale} />
                  </dd>
                </div>
              </dl>
            </div>
          </article>

          <article className="abn-ego-card">
            <header>
              <h3>{ui.suit}</h3>
              <RiskBadge risk={file.ego.suit.risk} />
            </header>
            <p className="abn-look">{loc(file.ego.suit.appearance, locale)}</p>
            <ResistanceList values={file.ego.suit.resistances} locale={locale} />
            <p className="abn-special">
              <span className="abn-label">{ui.special}</span>
              {file.ego.suit.special ? loc(file.ego.suit.special, locale) : ui.optional}
            </p>
          </article>

          <article className="abn-ego-card">
            <header>
              <h3>{ui.corrosion}</h3>
            </header>
            <p className="abn-look">{loc(file.ego.corrosion.appearance, locale)}</p>
            <ResistanceList values={file.ego.corrosion.resistances} locale={locale} />
            <p className="abn-special">
              <span className="abn-label">{ui.special}</span>
              {loc(file.ego.corrosion.special, locale)}
            </p>
            <p className="abn-special">
              <span className="abn-label">{ui.weaponSkill}</span>
              {loc(file.ego.corrosion.weaponSkill, locale)}
            </p>
          </article>

          <article className="abn-ego-card">
            <header>
              <h3>
                {ui.gift} · {loc(file.ego.gift.name, locale)}
              </h3>
            </header>
            <blockquote className="abn-quote">
              {loc(file.ego.gift.appearance, locale)}
            </blockquote>
            <dl className="abn-bonus">
              <BonusRow
                href={WORK_HREF.analysis}
                label={ui.analysis}
                value={file.ego.gift.bonuses.analysis}
              />
              <BonusRow
                href={WORK_HREF.instinct}
                label={ui.instinct}
                value={file.ego.gift.bonuses.instinct}
              />
              <BonusRow
                href={WORK_HREF.attachment}
                label={ui.attachment}
                value={file.ego.gift.bonuses.attachment}
              />
              <BonusRow
                href={WORK_HREF.repression}
                label={ui.repression}
                value={file.ego.gift.bonuses.repression}
              />
            </dl>
            <p className="abn-special">
              <span className="abn-label">{ui.special}</span>
              {file.ego.gift.special ? loc(file.ego.gift.special, locale) : ui.none}
            </p>
          </article>
        </div>
      </section>

      {notes?.trim() ? (
        <section className="abn-panel" id="Notes">
          <h2>{ui.notes}</h2>
          <WikiMarkdown content={notes} />
        </section>
      ) : null}
    </div>
  )
}

function RiskBadge({ risk }: { risk: RiskLevel }) {
  return (
    <span className="abn-risk" style={{ color: RISK_CSS[risk], borderColor: RISK_CSS[risk] }}>
      {risk}
    </span>
  )
}

function DamageChip({ damage, locale }: { damage: DamageRange; locale: Locale }) {
  const meta = DAMAGE_META[damage.color]
  return (
    <span className="abn-dmg" style={{ borderColor: meta.css, color: meta.css }}>
      <span className="abn-dmg-swatch" style={{ background: meta.css }} />
      {formatRange(damage.min, damage.max)} {locale === "zh" ? meta.zh : meta.en}
    </span>
  )
}

function EnergyCell({
  tone,
  label,
  value,
}: {
  tone: "bad" | "normal" | "good"
  label: string
  value: string
}) {
  return (
    <div className={`abn-energy-cell is-${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
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
            <span className="abn-res-bar">
              <span
                className="abn-res-fill"
                style={{
                  width: `${Math.min(value / 2, 1) * 100}%`,
                  background: meta.css,
                }}
              />
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

function PeMeter({ value, label }: { value: number; label: string }) {
  return (
    <div className="abn-pe" aria-label={`${label} ${value}`}>
      <span className="abn-label">{label}</span>
      <span className="abn-pe-boxes">
        {Array.from({ length: value }, (_, i) => (
          <span key={i} className="abn-pe-box" />
        ))}
      </span>
      <span className="abn-pe-n">{value}</span>
    </div>
  )
}
