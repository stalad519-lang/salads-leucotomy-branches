"use client"

import Link from "next/link"

import { useWiki } from "@/components/wiki-provider"

export function NotFoundView() {
  const { t } = useWiki()
  return (
    <div className="wiki-article">
      <h1 className="wiki-title">{t("notFoundTitle")}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {t("notFoundBody")} <code className="rounded bg-muted px-1">/wiki/Title</code>
      </p>
      <p className="mt-4 text-sm">
        <Link href="/">{t("backHome")}</Link>
        {" · "}
        <Link href="/special/all">{t("navAll")}</Link>
      </p>
    </div>
  )
}
