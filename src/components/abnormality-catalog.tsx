"use client"

import { Link } from "@/components/wiki-link"
import { useWiki } from "@/components/wiki-provider"
import {
  FILE_UI,
  RISK_CSS,
  RISK_INK,
  groupedAbnormalities,
  loc,
  type AbnormalityRecord,
  type RiskLevel,
} from "@/lib/abnormality"
import { wikiHref } from "@/lib/wiki"

export function AbnormalityBoard() {
  const { locale, t } = useWiki()
  const ui = FILE_UI[locale]
  const ranks = groupedAbnormalities()
  const held = ranks.reduce((sum, rank) => sum + rank.files.length, 0)

  return (
    <div className="abn-board">
      <header className="abn-board-head">
        <p className="scene-kicker">
          <Link href="/">{t("backLobby")}</Link>
        </p>
        <div className="abn-board-title">
          <h1>{locale === "zh" ? "异想体" : "Abnormalities"}</h1>
          <span className="abn-board-held">
            {ui.board} {held}
          </span>
        </div>
        <ol className="abn-legend">
          {ranks.map((rank) => (
            <li key={rank.risk}>
              <a href={`#risk-${rank.risk}`}>
                <RankStamp risk={rank.risk} />
                <span>{rank.files.length}</span>
              </a>
            </li>
          ))}
        </ol>
      </header>

      {ranks.map((rank) => (
        <section
          key={rank.risk}
          id={`risk-${rank.risk}`}
          className={`abn-rank ${rank.files.length ? "has-files" : "is-empty"}`}
          style={{ borderColor: RISK_CSS[rank.risk] }}
        >
          <div
            className="abn-rank-bar"
            style={{
              background: RISK_CSS[rank.risk],
              boxShadow: `0 0 16px ${RISK_CSS[rank.risk]}`,
            }}
          />
          <div className="abn-rank-body">
            <div className="abn-rank-label">
              <RankStamp risk={rank.risk} />
              <span className="abn-rank-count">{rank.files.length}</span>
            </div>
            {rank.files.length === 0 ? (
              <p className="abn-rank-empty">{ui.emptyRank}</p>
            ) : (
              <div className="abn-plates">
                {rank.files.map((file) => (
                  <Plate key={file.slug} file={file} locale={locale} />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

function RankStamp({ risk }: { risk: RiskLevel }) {
  const color = RISK_CSS[risk]
  return (
    <span
      className="abn-rank-stamp"
      style={{
        background: color,
        color: RISK_INK[risk],
        boxShadow: `0 0 12px ${color}aa`,
      }}
    >
      {risk}
    </span>
  )
}

function Plate({
  file,
  locale,
}: {
  file: AbnormalityRecord
  locale: "en" | "zh"
}) {
  const color = RISK_CSS[file.risk]
  return (
    <Link href={wikiHref(file.slug)} className="abn-plate">
      <span className="abn-plate-shot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={file.portrait}
          alt=""
          style={{ objectPosition: file.portraitFocus ?? "center" }}
        />
      </span>
      <span className="abn-plate-id">
        <span className="abn-plate-code">{file.code}</span>
        <RankStamp risk={file.risk} />
      </span>
      <span className="abn-plate-name">{loc(file.name, locale)}</span>
      <span className="abn-plate-pe" style={{ color }}>
        {locale === "zh" ? "情绪值" : "PE"} {file.pe}
      </span>
    </Link>
  )
}
