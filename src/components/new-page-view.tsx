"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { useWiki } from "@/components/wiki-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { editHref, slugify } from "@/lib/wiki"

export function NewPageView({ preset = "" }: { preset?: string }) {
  const router = useRouter()
  const { ready, exists } = useWiki()
  const [title, setTitle] = useState(preset)
  const taken = useMemo(() => Boolean(title.trim() && exists(title)), [exists, title])

  if (!ready) return <div className="wiki-article h-40 animate-pulse rounded-xl bg-muted" />

  return (
    <div className="wiki-article">
      <h1 className="wiki-title">新建页面</h1>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        先起一个准确的标题。创建后可以用 <code className="rounded bg-muted px-1">[[{title.trim() || "标题"}]]</code>{" "}
        从其他条目链接过来。
      </p>
      <form
        className="mt-6 grid max-w-lg gap-3"
        onSubmit={(event) => {
          event.preventDefault()
          if (!title.trim()) return
          router.push(editHref(slugify(title)))
        }}
      >
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="例如：林朔、第三季、公司手册"
        />
        {taken ? (
          <p className="text-sm text-amber-800">
            已有同名页面，继续会进入编辑。
          </p>
        ) : null}
        <Button type="submit">开始撰写</Button>
      </form>
    </div>
  )
}
