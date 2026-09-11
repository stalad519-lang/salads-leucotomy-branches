"use client"

import { Link } from "@/components/wiki-link"
import { RiskBadge } from "@/components/risk-badge"
import { useWiki } from "@/components/wiki-provider"
import {
  DAMAGE_META,
  FILE_UI,
  RISK_CSS,
  formatRange,
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
      <header className="archive-head">
        <p className="archive-kicker">{ui.file}</p>
        <h1>{locale === "zh" ? "异想体一览" : "List of Abnormalities"}</h1>
        <span>
          {held} {ui.board}
        </span>
      </header>

      <div className="archive-scroll">
        <table className="archive-table">
          <caption>{ui.listCaption}</caption>
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
                        <img
                          src={file.portrait}
                          alt=""
                          style={{ transformOrigin: file.portraitFocus ?? "center" }}
                        />
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
                    <td>
                      <RiskBadge risk={file.risk} />
                    </td>
                    <td className="archive-dmg">
                      <i style={{ background: meta.css }} />
                      <span>
                        {formatRange(file.damage.min, file.damage.max)}{" "}
                        {locale === "zh" ? meta.zh : meta.en}
                      </span>
                    </td>
                    <td className="archive-pe">{file.pe}</td>
                    <td>{loc(file.ego.name, locale) || "—"}</td>
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
