"use client"

import { Link } from "@/components/wiki-link"
import { useWiki } from "@/components/wiki-provider"
import { loc } from "@/lib/abnormality"
import {
  DISPOSITION_LABEL,
  KIND_LABEL,
  formatBonusLine,
  type PersonalityRecord,
} from "@/lib/personality"
import { categoryHref, wikiHref } from "@/lib/wiki"

export function PersonalityFile({
  file,
  notes,
}: {
  file: PersonalityRecord
  notes?: string
}) {
  const { locale } = useWiki()
  const bonus = formatBonusLine(file.bonus, locale)

  return (
    <div className="pers-file">
      <header className="pers-file-head">
        <p className="pers-file-kicker">
          {loc(KIND_LABEL[file.kind], locale)} ·{" "}
          <span className={`pers-disp-${file.disposition}`}>
            {loc(DISPOSITION_LABEL[file.disposition], locale)}
          </span>
        </p>
        <h1 className="wiki-title">{loc(file.name, locale)}</h1>
        <p className="pers-file-id">{file.id}</p>
      </header>

      <section className="pers-file-block">
        <h2>{locale === "zh" ? "描述" : "Description"}</h2>
        <p>{loc(file.description, locale)}</p>
      </section>

      {bonus ? (
        <section className="pers-file-block">
          <h2>{locale === "zh" ? "属性加成" : "Attribute bonus"}</h2>
          <p>{bonus}</p>
        </section>
      ) : null}

      {file.effect ? (
        <section className="pers-file-block">
          <h2>{locale === "zh" ? "特殊效果" : "Special effect"}</h2>
          <p>{loc(file.effect, locale)}</p>
        </section>
      ) : null}

      <section className="pers-file-block">
        <h2>{locale === "zh" ? "获得方式" : "How to obtain"}</h2>
        <p>{loc(file.acquire, locale)}</p>
      </section>

      {notes ? (
        <section className="pers-file-block pers-file-notes">
          <h2>{locale === "zh" ? "备注" : "Notes"}</h2>
          <div className="pers-file-notes-body">{notes}</div>
        </section>
      ) : null}

      <p className="pers-file-foot">
        <Link href={categoryHref("Personalities")}>
          {locale === "zh" ? "← 性格图鉴" : "← Personality Codex"}
        </Link>
        {" · "}
        <Link href={wikiHref(file.kind === "primary" ? "Primary_personality" : "Secondary_personality")}>
          {file.kind === "primary"
            ? locale === "zh"
              ? "主性格"
              : "Primary"
            : locale === "zh"
              ? "副性格 / 特殊"
              : "Traits / Special"}
        </Link>
      </p>
    </div>
  )
}
