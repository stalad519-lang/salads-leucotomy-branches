"use client"

import { WikiMarkdown } from "@/components/wiki-markdown"
import type { Infobox } from "@/lib/types"

export function InfoboxCard({ infobox }: { infobox: Infobox }) {
  return (
    <aside className="wiki-infobox">
      <div className="wiki-infobox-head">{infobox.heading}</div>
      {infobox.caption ? (
        <div className="px-3 py-2 text-center text-xs text-muted-foreground">
          {infobox.caption}
        </div>
      ) : null}
      <dl>
        {infobox.rows.map((row) => (
          <div key={`${row.label}-${row.value}`} className="wiki-infobox-row">
            <dt>{row.label}</dt>
            <dd>
              <WikiMarkdown content={row.value} />
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
