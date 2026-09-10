"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { useWiki } from "@/components/wiki-provider"
import { buttonVariants } from "@/components/ui/button"
import { editHref, slugify } from "@/lib/wiki"

export function NewPageView({ preset = "" }: { preset?: string }) {
  const router = useRouter()
  const { exists, t } = useWiki()
  const [title, setTitle] = useState(preset)
  const taken = useMemo(() => Boolean(title.trim() && exists(title)), [exists, title])

  return (
    <div className="wiki-article">
      <h1 className="wiki-title">{t("newPage")}</h1>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        {t("newIntro")}{" "}
        <code className="rounded bg-muted px-1">[[{title.trim() || "Title"}]]</code>
      </p>
      <form
        className="mt-6 grid max-w-lg gap-3"
        onSubmit={(event) => {
          event.preventDefault()
          const nextTitle = String(new FormData(event.currentTarget).get("title") || "")
            .trim()
          if (!nextTitle) return
          router.push(editHref(slugify(nextTitle)))
        }}
      >
        <input
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder={t("placeholderTitle")}
          className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        {taken ? (
          <p className="text-sm text-amber-800">{t("alreadyExists")}</p>
        ) : null}
        <button type="submit" className={buttonVariants()}>
          {t("startWriting")}
        </button>
      </form>
    </div>
  )
}
