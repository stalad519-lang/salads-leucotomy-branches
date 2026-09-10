"use client"

import Link from "next/link"

import { useWiki } from "@/components/wiki-provider"
import { categoryHref, pagesInCategory, wikiHref } from "@/lib/wiki"

export function CategoryView({ name }: { name: string }) {
  const { pages } = useWiki()
  const items = pagesInCategory(pages, name)

  return (
    <div className="wiki-article">
      <h1 className="wiki-title">分类：{name}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {items.length} 篇页面属于此分类。回到{" "}
        <Link href="/special/all">所有页面</Link>
        {name !== "帮助" ? (
          <>
            {" "}
            · <Link href={categoryHref("帮助")}>帮助</Link>
          </>
        ) : null}
      </p>
      {items.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">
          这个分类还是空的。编辑页面时在「分类」里填入「{name}」即可加入。
        </p>
      ) : (
        <ul className="mt-6 list-disc pl-5">
          {items.map((page) => (
            <li key={page.slug} className="py-1">
              <Link href={wikiHref(page.slug)}>{page.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
