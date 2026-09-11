"use client"

import { Link } from "@/components/wiki-link"
import { RiskBadge } from "@/components/risk-badge"
import { WikiMarkdown } from "@/components/wiki-markdown"
import { useWiki } from "@/components/wiki-provider"
import {
  DAMAGE_META,
  DAMAGE_ORDER,
  FILE_UI,
  WORK_ICON,
  WORK_LEVELS,
  WORK_ORDER,
  WORK_RATE_LABEL,
  formatRange,
  formatResistance,
  formatSigned,
  loc,
  resistanceWord,
  type AbnormalityRecord,
  type DamageColor,
  type DamageRange,
  type WorkKey,
  type WorkNarrationBundle,
} from "@/lib/abnormality"
import { wikiHref } from "@/lib/wiki"
import type { Locale } from "@/lib/types"

const WORK_LABEL: Record<WorkKey, { en: string; zh: string; href: string }> = {
  analysis: { en: "Analysis", zh: "解析", href: "Analysis" },
  instinct: { en: "Instinct", zh: "本能", href: "Instinct" },
  attachment: { en: "Attachment", zh: "沟通", href: "Attachment" },
  repression: { en: "Repression", zh: "压迫", href: "Repression" },
}

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
  const egoName = file.ego ? loc(file.ego.name, locale) : null
  const dmg = DAMAGE_META[file.damage.color]
  const bg = file.background ? loc(file.background, locale) : []
  const sections = [
    { id: "Story", label: ui.story },
    ...(bg.length ? [{ id: "Background", label: ui.background }] : []),
    { id: "Management", label: ui.management },
    { id: "Personality", label: ui.personality },
    { id: "WorkPreference", label: ui.workPreference },
    { id: "WorkNarration", label: ui.workNarration },
    ...(file.sealedWorkNarration
      ? [{ id: "SealedNarration", label: ui.sealedNarration }]
      : []),
    ...(egoName ? [{ id: "EGO", label: `${ui.ego} · ${egoName}` }] : []),
    ...(notes?.trim() ? [{ id: "Notes", label: ui.notes }] : []),
  ]

  return (
    <div className="dossier">
      <p className="dossier-back">
        <Link href="/">{ui.backArchive}</Link>
      </p>

      <div className="dossier-grid">
        <aside className="dossier-box hand-panel">
          <div className="dossier-box-name hand-namebar">{name}</div>
          <figure>
            <div className="dossier-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={file.portraitThumb ?? file.portrait} alt={name} />
            </div>
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dmg.icon} alt="" className="dmg-type-icon" />
                  <span>
                    {formatRange(file.damage.min, file.damage.max)}{" "}
                    {locale === "zh" ? dmg.zh : dmg.en}
                  </span>
                </span>
              </dd>
            </div>
            <BoxRow label={ui.ego} value={egoName ?? "—"} />
          </dl>
          <div className="dossier-box-energy hand-energy">
            <p>{ui.energy}</p>
            <table>
              <thead>
                <tr>
                  <th>
                    <ResultIcon kind="bad" label={ui.bad} />
                  </th>
                  <th>
                    <ResultIcon kind="normal" label={ui.normal} />
                  </th>
                  <th>
                    <ResultIcon kind="good" label={ui.good} />
                  </th>
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
          <SensitivePanel mood={file.mood} resistances={file.resistances} locale={locale} />
        </aside>

        <div className="dossier-body hand-frame">
          <p className="dossier-stamp">{ui.file}</p>
          <h1 className="hand-titlebar">{name}</h1>
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

          {bg.length > 0 ? (
            <section id="Background">
              <h2>{ui.background}</h2>
              <ol className="dossier-guides">
                {bg.map((line, index) => (
                  <li key={`${index}-${line.slice(0, 24)}`}>
                    <p>{line}</p>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

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

          <section id="WorkPreference">
            <h2>{ui.workPreference}</h2>
            <div className="dossier-work-scroll">
              <table className="dossier-work-table">
                <thead>
                  <tr>
                    <th>{ui.workLevel}</th>
                    {WORK_LEVELS.map((level) => (
                      <th key={level}>{level}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {WORK_ORDER.map((key) => {
                    const entry = file.workPreference[key]
                    const label = WORK_LABEL[key]
                    return (
                      <tr key={key}>
                        <th scope="row">
                          <Link href={wikiHref(label.href)} className="work-type-link">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={WORK_ICON[key]} alt="" className="work-type-icon" />
                            <span>{locale === "zh" ? label.zh : label.en}</span>
                          </Link>
                        </th>
                        {entry.rates.map((rate, index) => (
                          <td key={`${key}-${index}`} data-rate={rate}>
                            {loc(WORK_RATE_LABEL[rate], locale)}
                          </td>
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <ul className="dossier-work-notes">
              {WORK_ORDER.map((key) => {
                const note = file.workPreference[key].note
                if (!note) return null
                const label = WORK_LABEL[key]
                return (
                  <li key={`${key}-note`}>
                    <strong>{locale === "zh" ? label.zh : label.en}</strong>
                    {" — "}
                    {loc(note, locale)}
                  </li>
                )
              })}
            </ul>
          </section>

          <section id="WorkNarration">
            <h2>{ui.workNarration}</h2>
            <p className="dossier-work-hint">{ui.agentPlaceholder}</p>
            <NarrationBlocks bundle={file.workNarration} locale={locale} />
          </section>

          {file.sealedWorkNarration ? (
            <section id="SealedNarration">
              <h2>
                {ui.sealedNarration}
                {file.sealedLabel ? ` · ${loc(file.sealedLabel, locale)}` : ""}
              </h2>
              <p className="dossier-work-hint">{ui.agentPlaceholder}</p>
              <NarrationBlocks bundle={file.sealedWorkNarration} locale={locale} />
            </section>
          ) : null}

          {file.ego && egoName ? (
            <section id="EGO">
              <h2>
                {ui.ego} · {egoName}
              </h2>

              <h3>
                {ui.weapon} <RiskBadge risk={file.ego.weapon.risk} />
              </h3>
              <p className="abn-look">{loc(file.ego.weapon.appearance, locale)}</p>
              <div className="ego-stage-grid">
                <div className="ego-stage">
                  <h4>{ui.weaponBase}</h4>
                  <dl className="ego-stage-stats">
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
                </div>
                <div className="ego-stage ego-stage--alt">
                  <h4>{ui.mastered}</h4>
                  <dl className="ego-stage-stats">
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
              </div>

              <h3>
                {ui.suit} <RiskBadge risk={file.ego.suit.risk} />
              </h3>
              <p className="abn-look">{loc(file.ego.suit.appearance, locale)}</p>
              <div className="ego-stage-grid">
                <div className="ego-stage">
                  <h4>{ui.suitBase}</h4>
                  <ResistanceList values={file.ego.suit.resistances} locale={locale} />
                  <p className="abn-special">
                    {ui.special}:{" "}
                    {file.ego.suit.special ? loc(file.ego.suit.special, locale) : ui.optional}
                  </p>
                </div>
                <div className="ego-stage ego-stage--alt">
                  <h4>{ui.suitEroded}</h4>
                  <p className="abn-look">{loc(file.ego.corrosion.appearance, locale)}</p>
                  <ResistanceList values={file.ego.corrosion.resistances} locale={locale} />
                  <p className="abn-special">
                    {ui.special}: {loc(file.ego.corrosion.special, locale)}
                  </p>
                  <p className="abn-special">
                    {ui.weaponSkill}: {loc(file.ego.corrosion.weaponSkill, locale)}
                  </p>
                </div>
              </div>

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
          ) : null}

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

function SensitivePanel({
  mood,
  resistances,
  locale,
}: {
  mood: number
  resistances: Record<DamageColor, number>
  locale: Locale
}) {
  const ui = FILE_UI[locale]
  return (
    <section className="sensitive-panel" aria-label={ui.sensitive}>
      <h3 className="sensitive-panel-title">{ui.sensitive}</h3>
      <div className="sensitive-panel-body">
        <div className="sensitive-mood">
          <p className="sensitive-mood-legend">{ui.moodCeiling}</p>
          <p className="sensitive-mood-n">{mood}</p>
        </div>
        <div className="sensitive-res">
          <p className="sensitive-res-legend">{ui.resistances}</p>
          <ul className="sensitive-res-grid">
            {DAMAGE_ORDER.map((color) => {
              const meta = DAMAGE_META[color]
              const value = resistances[color]
              return (
                <li key={color} style={{ color: meta.css }}>
                  <span className="sensitive-res-n">({formatResistance(value)})</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={meta.icon} alt="" className="dmg-type-icon dmg-type-icon--sm" />
                  <span className="sensitive-res-w">{resistanceWord(value, locale)}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

const RESULT_ICON = {
  bad: "/abnormalities/work-bad.png",
  normal: "/abnormalities/work-normal.png",
  good: "/abnormalities/work-good.png",
} as const

function ResultIcon({
  kind,
  label,
}: {
  kind: keyof typeof RESULT_ICON
  label: string
}) {
  return (
    <span className="work-result">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={RESULT_ICON[kind]} alt="" className="work-result-icon" />
      <span>{label}</span>
    </span>
  )
}

function NarrationBlocks({
  bundle,
  locale,
}: {
  bundle: WorkNarrationBundle
  locale: Locale
}) {
  return (
    <div className="dossier-narration">
      {WORK_ORDER.map((key) => {
        const label = WORK_LABEL[key]
        const lines = loc(bundle[key], locale)
        return (
          <div key={key} className="dossier-narration-block">
            <h3>
              <Link href={wikiHref(label.href)} className="work-type-link">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={WORK_ICON[key]} alt="" className="work-type-icon" />
                <span>{locale === "zh" ? label.zh : label.en}</span>
              </Link>
            </h3>
            <ul>
              {lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        )
      })}
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={meta.icon} alt="" className="dmg-type-icon" />
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={meta.icon} alt="" className="dmg-type-icon dmg-type-icon--sm" />
              <span className="abn-res-label">{locale === "zh" ? meta.zh : meta.en}</span>
            </span>
            <span className="abn-res-meta">
              <span className="abn-res-n">{value}</span>
              <span className="abn-res-w">{resistanceWord(value, locale)}</span>
            </span>
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
