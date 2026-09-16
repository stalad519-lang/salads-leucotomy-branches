"use client"

import { Link } from "@/components/wiki-link"
import { RiskBadge } from "@/components/risk-badge"
import { useWiki } from "@/components/wiki-provider"
import {
  DAMAGE_META,
  FILE_UI,
  RISK_CSS,
  groupedAbnormalities,
  loc,
} from "@/lib/abnormality"
import { navigate } from "@/lib/nav"
import { wikiHref } from "@/lib/wiki"

export function AbnormalityBoard() {
  const { locale } = useWiki()
  const ui = FILE_UI[locale]
  const ranks = groupedAbnormalities().filter((rank) => rank.files.length > 0)
  const held = ranks.reduce((sum, rank) => sum + rank.files.length, 0)

  return (
    <div className="archive">
      <header className="archive-head archive-head--banner">
        <div className="brand-hero" aria-label="Salad's leucotomy branches">
          <div className="brand-hero-stage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand-hero-marks"
              src="/brand/facility-marks.png"
              alt=""
              width={825}
              height={331}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand-hero-wordmark"
              src="/brand/salad-wordmark.png"
              alt="Salad's Leucotomy Branches"
              width={440}
              height={100}
            />
          </div>
        </div>
        <div className="archive-list-bar">
          <p className="archive-kicker">{ui.file}</p>
          <div className="archive-list-bar-row">
            <h1>{locale === "zh" ? "异想体一览" : "List of Abnormalities"}</h1>
            <span className="archive-list-bar-count">
              {held} {ui.board}
            </span>
          </div>
        </div>
      </header>

      <div className="archive-scroll">
        <table className="archive-table">
          <thead>
            <tr>
              <th>{ui.colCode}</th>
              <th className="archive-shot-h">{ui.colPortrait}</th>
              <th>{ui.colName}</th>
              <th>{ui.colRisk}</th>
              <th>{ui.colDamage}</th>
              <th>{ui.colPe}</th>
              <th>{ui.colEgo}</th>
            </tr>
          </thead>
          {ranks.map((rank) => (
            <tbody key={rank.risk}>
              <tr className="archive-rank">
                <td colSpan={7}>
                  <span style={{ color: RISK_CSS[rank.risk] }}>{rank.risk}</span>
                  <i style={{ background: RISK_CSS[rank.risk] }} />
                </td>
              </tr>
              {rank.files.map((file) => {
                const href = wikiHref(file.slug)
                const meta = DAMAGE_META[file.damage.color]
                return (
                  <tr
                    key={file.slug}
                    className="archive-row"
                    tabIndex={0}
                    onClick={() => navigate(href)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        navigate(href)
                      }
                    }}
                  >
                    <td className="archive-code">{file.code}</td>
                    <td>
                      <div className="archive-shot">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={file.portraitThumb ?? file.portrait} alt="" />
                      </div>
                    </td>
                    <td>
                      <Link
                        href={href}
                        className="archive-name"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {loc(file.name, locale)}
                      </Link>
                    </td>
                    <td className="archive-cell-meta">
                      <RiskBadge risk={file.risk} />
                    </td>
                    <td className="archive-cell-meta">
                      <span className="archive-dmg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={meta.icon} alt="" className="dmg-type-icon" />
                        <span>{locale === "zh" ? meta.zh : meta.en}</span>
                      </span>
                    </td>
                    <td className="archive-cell-meta archive-pe">
                      <span
                        className="mood-meter mood-meter--compact"
                        title={`${ui.pe} ${file.mood}`}
                      >
                        <span className="mood-meter-pip" aria-hidden />
                        <span className="mood-meter-n">{file.mood}</span>
                      </span>
                    </td>
                    <td className="archive-cell-meta">
                      {file.ego ? loc(file.ego.name, locale) : "—"}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}
