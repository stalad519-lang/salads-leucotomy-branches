"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMemo, useState, type FormEvent } from "react"

import { InfoboxCard } from "@/components/infobox"
import { WikiMarkdown } from "@/components/wiki-markdown"
import { useWiki } from "@/components/wiki-provider"
import { buttonVariants } from "@/components/ui/button"
import type { Infobox, InfoboxRow, WikiPage } from "@/lib/types"
import {
  editHref,
  historyHref,
  HOME_SLUG,
  titleFromSlug,
  wikiHref,
} from "@/lib/wiki"

export function EditorView({ slug }: { slug: string }) {
  const { getPage } = useWiki()
  const page = getPage(slug)
  return <EditorForm key={slug} slug={slug} page={page} />
}

function EditorForm({ slug, page }: { slug: string; page?: WikiPage }) {
  const router = useRouter()
  const { save, remove } = useWiki()
  const [title, setTitle] = useState(page?.title ?? titleFromSlug(slug))
  const [content, setContent] = useState(page?.content ?? "")
  const [categories, setCategories] = useState(page?.categories.join(", ") ?? "")
  const [summary, setSummary] = useState("")
  const [boxHeading, setBoxHeading] = useState(page?.infobox?.heading ?? "")
  const [boxCaption, setBoxHeadingCaption] = useState(page?.infobox?.caption ?? "")
  const [rows, setRows] = useState<InfoboxRow[]>(page?.infobox?.rows ?? [])
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
      setError("请填写条目标题。")
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
      router.push(nextSlug === HOME_SLUG ? "/" : wikiHref(nextSlug))
    } catch (err) {
      setError(err instanceof Error ? err.message : "保存失败，请再试一次。")
    }
  }

  function onDelete() {
    if (!page || page.slug === HOME_SLUG) return
    if (!window.confirm(`确定删除「${page.title}」？此操作只影响本机浏览器。`)) return
    remove(page.slug)
    router.push("/")
  }

  return (
    <div className="wiki-article">
      <div className="wiki-tabs">
        <Link href={page || slug === HOME_SLUG ? (slug === HOME_SLUG ? "/" : wikiHref(slug)) : wikiHref(slug)}>
          页面
        </Link>
        <Link href={editHref(slug)} className="active">
          {page ? "编辑" : "创建"}
        </Link>
        <Link href={historyHref(slug)}>历史</Link>
      </div>

      <h1 className="wiki-title">{page ? `编辑 ${title}` : `创建 ${title}`}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        保存后立刻可在搜索和分类里看到。内容只写在你的浏览器里。
      </p>

      <form className="mt-6 grid gap-4" onSubmit={onSave}>
        <label className="grid gap-1 text-sm font-medium">
          标题
          <input
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          分类
          <input
            name="categories"
            value={categories}
            onChange={(event) => setCategories(event.target.value)}
            placeholder="例如：帮助, 设定"
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
              撰写
            </button>
            <button
              type="button"
              className={buttonVariants({ variant: tab === "preview" ? "default" : "outline" })}
              onClick={() => setTab("preview")}
            >
              预览
            </button>
          </div>
          {tab === "write" ? (
            <textarea
              name="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="min-h-[320px] w-full rounded-lg border border-input bg-transparent px-2.5 py-2 font-mono text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="支持 Markdown 和 [[维基链接]]"
            />
          ) : (
            <>
              <textarea name="content" value={content} readOnly hidden />
              <div className="flex flex-col gap-4 lg:flex-row">
                <WikiMarkdown content={content || "*还没有正文。*"} className="min-w-0 flex-1" />
                {infobox ? <InfoboxCard infobox={infobox} /> : null}
              </div>
            </>
          )}
        </div>

        <section className="rounded-xl border bg-[#fbfaf6] p-4">
          <div className="text-sm font-medium">信息框（可选）</div>
          <p className="mt-1 text-xs text-muted-foreground">
            适合人物、地点、舰船。值里也可以写 [[链接]]。
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <input
              name="boxHeading"
              value={boxHeading}
              onChange={(event) => setBoxHeading(event.target.value)}
              placeholder="信息框标题"
              className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
            <input
              name="boxCaption"
              value={boxCaption}
              onChange={(event) => setBoxHeadingCaption(event.target.value)}
              placeholder="副标题"
              className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </div>
          <div className="mt-3 grid gap-2">
            {rows.map((row, index) => (
              <div key={index} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                <input
                  name={`row-label-${index}`}
                  value={row.label}
                  placeholder="标签"
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
                  placeholder="内容"
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
                  删除
                </button>
              </div>
            ))}
            <button
              type="button"
              className={buttonVariants({ variant: "outline" })}
              onClick={() => setRows((current) => [...current, { label: "", value: "" }])}
            >
              添加一行
            </button>
          </div>
        </section>

        <label className="grid gap-1 text-sm font-medium">
          编辑摘要
          <input
            name="summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            placeholder="这一版改了什么（会写进历史）"
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </label>
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <div className="flex flex-wrap gap-2">
          <button type="submit" className={buttonVariants({ size: "lg" })}>
            {page ? "保存" : "创建页面"}
          </button>
          <Link
            href={page ? (slug === HOME_SLUG ? "/" : wikiHref(slug)) : "/"}
            className={buttonVariants({ variant: "outline" })}
          >
            取消
          </Link>
          {page && page.slug !== HOME_SLUG ? (
            <button
              type="button"
              className={buttonVariants({ variant: "destructive" })}
              onClick={onDelete}
            >
              删除页面
            </button>
          ) : null}
        </div>
      </form>
    </div>
  )
}
