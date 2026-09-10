"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"

import { InfoboxCard } from "@/components/infobox"
import { WikiMarkdown } from "@/components/wiki-markdown"
import { useWiki } from "@/components/wiki-provider"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

  const infobox = useMemo((): Infobox | undefined => {
    const cleaned = rows.filter((row) => row.label.trim() && row.value.trim())
    if (!boxHeading.trim() && cleaned.length === 0) return undefined
    return {
      heading: boxHeading.trim() || title,
      caption: boxCaption.trim() || undefined,
      rows: cleaned,
    }
  }, [boxCaption, boxHeading, rows, title])

  function onSave() {
    if (!title.trim()) {
      setError("请填写条目标题。")
      return
    }
    const nextSlug = save({
      slug: page?.slug ?? slug,
      title,
      content,
      categories: categories.split(/[,，]/),
      infobox,
      summary,
    })
    router.push(nextSlug === HOME_SLUG ? "/" : wikiHref(nextSlug))
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

      <div className="mt-6 grid gap-4">
        <label className="grid gap-1 text-sm font-medium">
          标题
          <Input value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          分类
          <Input
            value={categories}
            onChange={(event) => setCategories(event.target.value)}
            placeholder="例如：帮助, 设定"
          />
        </label>
        <Tabs defaultValue="write">
          <TabsList>
            <TabsTrigger value="write">撰写</TabsTrigger>
            <TabsTrigger value="preview">预览</TabsTrigger>
          </TabsList>
          <TabsContent value="write" className="mt-3">
            <Textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="min-h-[320px] font-mono text-sm"
              placeholder="支持 Markdown 和 [[维基链接]]"
            />
          </TabsContent>
          <TabsContent value="preview" className="mt-3">
            <div className="flex flex-col gap-4 lg:flex-row">
              <WikiMarkdown content={content || "*还没有正文。*"} className="min-w-0 flex-1" />
              {infobox ? <InfoboxCard infobox={infobox} /> : null}
            </div>
          </TabsContent>
        </Tabs>

        <section className="rounded-xl border bg-[#fbfaf6] p-4">
          <div className="text-sm font-medium">信息框（可选）</div>
          <p className="mt-1 text-xs text-muted-foreground">
            适合人物、地点、舰船。值里也可以写 [[链接]]。
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <Input
              value={boxHeading}
              onChange={(event) => setBoxHeading(event.target.value)}
              placeholder="信息框标题"
            />
            <Input
              value={boxCaption}
              onChange={(event) => setBoxHeadingCaption(event.target.value)}
              placeholder="副标题"
            />
          </div>
          <div className="mt-3 grid gap-2">
            {rows.map((row, index) => (
              <div key={index} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                <Input
                  value={row.label}
                  placeholder="标签"
                  onChange={(event) =>
                    setRows((current) =>
                      current.map((item, i) =>
                        i === index ? { ...item, label: event.target.value } : item
                      )
                    )
                  }
                />
                <Input
                  value={row.value}
                  placeholder="内容"
                  onChange={(event) =>
                    setRows((current) =>
                      current.map((item, i) =>
                        i === index ? { ...item, value: event.target.value } : item
                      )
                    )
                  }
                />
                <Button
                  variant="ghost"
                  onClick={() => setRows((current) => current.filter((_, i) => i !== index))}
                >
                  删除
                </Button>
              </div>
            ))}
            <Button variant="outline" onClick={() => setRows((current) => [...current, { label: "", value: "" }])}>
              添加一行
            </Button>
          </div>
        </section>

        <label className="grid gap-1 text-sm font-medium">
          编辑摘要
          <Input
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            placeholder="这一版改了什么（会写进历史）"
          />
        </label>
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <div className="flex flex-wrap gap-2">
          <Button onClick={onSave}>{page ? "保存" : "创建页面"}</Button>
          <Link
            href={page ? (slug === HOME_SLUG ? "/" : wikiHref(slug)) : "/"}
            className={buttonVariants({ variant: "outline" })}
          >
            取消
          </Link>
          {page && page.slug !== HOME_SLUG ? (
            <Button variant="destructive" onClick={onDelete}>
              删除页面
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
