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
} from "@/lib/abnormality"
import { wikiHref } from "@/lib/wiki"

export function AbnormalityBoard() {
  const { locale } = useWiki()
  const ui = FILE_UI[locale]
  const ranks = groupedAbnormalities()
  const held = ranks.reduce((sum, rank) => sum + rank.files.length, 0)

  return (
    <div className="abn-wall-wrap">
      <header className="abn-wall-head">
        <h1>{locale === "zh" ? "异想体" : "Abnormalities"}</h1>
        <span>
          {ui.board} {held}
        </span>
      </header>

      <div className="abn-wall">
        {ranks.map((rank) => (
          <section
            key={rank.risk}
            className={`abn-col ${rank.files.length ? "has-files" : "is-empty"}`}
          >
            <header
              className="abn-col-head"
              style={{
                background: RISK_CSS[rank.risk],
                color: RISK_INK[rank.risk],
                boxShadow: `0 0 14px ${RISK_CSS[rank.risk]}88`,
              }}
            >
              {rank.risk}
              <em>{rank.files.length}</em>
            </header>
            {rank.files.length === 0 ? (
              <p className="abn-col-empty">{ui.emptyRank}</p>
            ) : (
              rank.files.map((file) => (
                <Plate key={file.slug} file={file} locale={locale} />
              ))
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

function Plate({
  file,
  locale,
}: {
  file: AbnormalityRecord
  locale: "en" | "zh"
}) {
  return (
    <Link href={wikiHref(file.slug)} className="abn-plate">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={file.portrait}
        alt=""
        style={{ objectPosition: file.portraitFocus ?? "center" }}
      />
      <span className="abn-plate-meta">
        <span className="abn-plate-code">{file.code}</span>
        <span className="abn-plate-name">{loc(file.name, locale)}</span>
        <span className="abn-plate-pe">
          {locale === "zh" ? "情绪值" : "PE"} {file.pe}
        </span>
      </span>
    </Link>
  )
}
