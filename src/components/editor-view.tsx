"use client"

import { useMemo, useState, type FormEvent } from "react"

import { InfoboxCard } from "@/components/infobox"
import { WikiMarkdown } from "@/components/wiki-markdown"
import { Link } from "@/components/wiki-link"
import { useWiki } from "@/components/wiki-provider"
import { navigate } from "@/lib/nav"
import { buttonVariants } from "@/components/ui/button"
import { messages } from "@/lib/i18n"
import type { Infobox, InfoboxRow, WikiPage } from "@/lib/types"
import {
  editHref,
  historyHref,
  HOME_SLUG,
  titleFromSlug,
  wikiHref,
} from "@/lib/wiki"

export function EditorView({ slug }: { slug: string }) {
  const { getPage, locale } = useWiki()
  const page = getPage(slug)
  return <EditorForm key={`${slug}-${locale}`} slug={slug} page={page} />
}

function EditorForm({ slug, page }: { slug: string; page?: WikiPage }) {
  const { save, remove, t, locale } = useWiki()
  const source = locale === "zh" ? page?.locales.zh : page?.locales.en
  const english = page?.locales.en
  const [title, setTitle] = useState(source?.title ?? (locale === "en" ? titleFromSlug(slug) : ""))
  const [content, setContent] = useState(source?.content ?? "")
  const [categories, setCategories] = useState(source?.categories?.join(", ") ?? "")
  const [summary, setSummary] = useState("")
  const [boxHeading, setBoxHeading] = useState(source?.infobox?.heading ?? "")
  const [boxCaption, setBoxHeadingCaption] = useState(source?.infobox?.caption ?? "")
  const [rows, setRows] = useState<InfoboxRow[]>(source?.infobox?.rows ?? [])
  const [error, setError] = useState("")
  const [tab, setTab] = useState<"write" | "preview">("write")

  const infobox = useMemo((): Infobox | undefined => {
    const cleaned = rows.filter((row) => row.label.trim() && row.value.trim())
    if (!boxHeading.trim() && cleaned.length === 0) return undefined
    return {
      heading: boxHeading.trim() || title,
      caption: boxCaption.trim() || undefined,
      rows: cleaned,
    }
  }, [boxCaption, boxHeading, rows, title])

  function onSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fd = new FormData(event.currentTarget)
    const nextTitle = String(fd.get("title") || title).trim()
    const nextContent = String(fd.get("content") ?? content)
    const nextCategories = String(fd.get("categories") ?? categories)
    const nextSummary = String(fd.get("summary") ?? summary)
    const nextHeading = String(fd.get("boxHeading") ?? boxHeading)
    const nextCaption = String(fd.get("boxCaption") ?? boxCaption)
    if (!nextTitle) {
      setError(t("titleNeeded"))
      return
    }
    const cleaned = rows
      .map((row, index) => ({
        label: String(fd.get(`row-label-${index}`) ?? row.label),
        value: String(fd.get(`row-value-${index}`) ?? row.value),
      }))
      .filter((row) => row.label.trim() && row.value.trim())
    const nextInfobox =
      nextHeading.trim() || cleaned.length
        ? {
            heading: nextHeading.trim() || nextTitle,
            caption: nextCaption.trim() || undefined,
            rows: cleaned,
          }
        : undefined
    try {
      const nextSlug = save({
        slug: page?.slug ?? slug,
        title: nextTitle,
        content: nextContent,
        categories: nextCategories.split(/[,，]/),
        infobox: nextInfobox,
        summary: nextSummary,
      })
      navigate(nextSlug === HOME_SLUG ? "/" : wikiHref(nextSlug))
    } catch (err) {
      setError(err instanceof Error ? err.message : t("saveFailed"))
    }
  }

  function onDelete() {
    if (!page || page.slug === HOME_SLUG) return
    const display = page.locales.en.title
    if (!window.confirm(messages[locale].deleteConfirm(display))) return
    remove(page.slug)
    navigate("/")
  }

  return (
    <div className="wiki-article">
      <div className="wiki-tabs">
        <Link href={page || slug === HOME_SLUG ? (slug === HOME_SLUG ? "/" : wikiHref(slug)) : wikiHref(slug)}>
          {t("page")}
        </Link>
        <Link href={editHref(slug)} className="active">
          {page ? t("edit") : t("create")}
        </Link>
        <Link href={historyHref(slug)}>{t("history")}</Link>
      </div>

      <h1 className="wiki-title">
        {page ? `${t("edit")} ${title || titleFromSlug(slug)}` : `${t("create")} ${title || titleFromSlug(slug)}`}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {locale === "zh" ? t("editingZh") : t("editingEn")}
      </p>
      {locale === "zh" && english ? (
        <details className="mt-3 rounded-lg border bg-muted/40 px-3 py-2 text-sm">
          <summary className="cursor-pointer font-medium">{t("englishSource")}</summary>
          <p className="mt-2 text-muted-foreground">{english.title}</p>
        </details>
      ) : null}

      <form className="mt-6 grid gap-4" onSubmit={onSave}>
        <label className="grid gap-1 text-sm font-medium">
          {t("title")}
          <input
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder={english?.title || t("placeholderTitle")}
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          {t("categories")}
          <input
            name="categories"
            value={categories}
            onChange={(event) => setCategories(event.target.value)}
            placeholder="Abnormalities, Basics, Personalities, Creators"
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </label>
        <div>
          <div className="mb-3 flex gap-1">
            <button
              type="button"
              className={buttonVariants({ variant: tab === "write" ? "default" : "outline" })}
              onClick={() => setTab("write")}
            >
              {t("write")}
            </button>
            <button
              type="button"
              className={buttonVariants({ variant: tab === "preview" ? "default" : "outline" })}
              onClick={() => setTab("preview")}
            >
              {t("preview")}
            </button>
          </div>
          {tab === "write" ? (
            <textarea
              name="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="min-h-[320px] w-full rounded-lg border border-input bg-transparent px-2.5 py-2 font-mono text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder={english?.content || "Markdown and [[wiki links]]"}
            />
          ) : (
            <>
              <textarea name="content" value={content} readOnly hidden />
              <div className="flex flex-col gap-4 lg:flex-row">
                <WikiMarkdown content={content || t("noPreview")} className="min-w-0 flex-1" />
                {infobox ? <InfoboxCard infobox={infobox} /> : null}
              </div>
            </>
          )}
        </div>

        <section className="rounded-xl border bg-muted/30 p-4">
          <div className="text-sm font-medium">{t("infobox")}</div>
          <p className="mt-1 text-xs text-muted-foreground">{t("infoboxHelp")}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <input
              name="boxHeading"
              value={boxHeading}
              onChange={(event) => setBoxHeading(event.target.value)}
              placeholder={t("infoboxTitle")}
              className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
            <input
              name="boxCaption"
              value={boxCaption}
              onChange={(event) => setBoxHeadingCaption(event.target.value)}
              placeholder={t("infoboxCaption")}
              className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </div>
          <div className="mt-3 grid gap-2">
            {rows.map((row, index) => (
              <div key={index} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                <input
                  name={`row-label-${index}`}
                  value={row.label}
                  placeholder={t("label")}
                  onChange={(event) =>
                    setRows((current) =>
                      current.map((item, i) =>
                        i === index ? { ...item, label: event.target.value } : item
                      )
                    )
                  }
                  className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
                <input
                  name={`row-value-${index}`}
                  value={row.value}
                  placeholder={t("value")}
                  onChange={(event) =>
                    setRows((current) =>
                      current.map((item, i) =>
                        i === index ? { ...item, value: event.target.value } : item
                      )
                    )
                  }
                  className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
                <button
                  type="button"
                  className={buttonVariants({ variant: "ghost" })}
                  onClick={() => setRows((current) => current.filter((_, i) => i !== index))}
                >
                  {t("removeRow")}
                </button>
              </div>
            ))}
            <button
              type="button"
              className={buttonVariants({ variant: "outline" })}
              onClick={() => setRows((current) => [...current, { label: "", value: "" }])}
            >
              {t("addRow")}
            </button>
          </div>
        </section>

        <label className="grid gap-1 text-sm font-medium">
          {t("summary")}
          <input
            name="summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </label>
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <div className="flex flex-wrap gap-2">
          <button type="submit" className={buttonVariants({ size: "lg" })}>
            {page ? t("save") : t("createPage")}
          </button>
          <Link
            href={page ? (slug === HOME_SLUG ? "/" : wikiHref(slug)) : "/"}
            className={buttonVariants({ variant: "outline" })}
          >
            {t("cancel")}
          </Link>
          {page && page.slug !== HOME_SLUG ? (
            <button
              type="button"
              className={buttonVariants({ variant: "destructive" })}
              onClick={onDelete}
            >
              {t("delete")}
            </button>
          ) : null}
        </div>
      </form>
    </div>
  )
}
