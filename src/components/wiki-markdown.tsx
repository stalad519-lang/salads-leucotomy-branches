"use client"

import Link from "next/link"
import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { expandWikiLinks, headingId } from "@/lib/wiki"
import { useWiki } from "@/components/wiki-provider"
import { cn } from "@/lib/utils"

export function WikiMarkdown({
  content,
  className,
}: {
  content: string
  className?: string
}) {
  const { exists } = useWiki()
  const prepared = expandWikiLinks(content, exists)

  const components: Components = {
    a: ({ href, children }) => {
      const url = href ?? ""
      const missing = url.includes("missing=1")
      const clean = url.replace(/[?&]missing=1/, "")
      const external = /^https?:\/\//.test(clean)
      if (external) {
        return (
          <a href={clean} target="_blank" rel="noreferrer">
            {children}
          </a>
        )
      }
      return (
        <Link
          href={clean || "/"}
          className={cn(missing && "wiki-missing")}
          title={missing ? "此页面尚未创建" : undefined}
        >
          {children}
        </Link>
      )
    },
    h2: ({ children }) => {
      const text = String(children)
      return <h2 id={headingId(text)}>{children}</h2>
    },
    h3: ({ children }) => {
      const text = String(children)
      return <h3 id={headingId(text)}>{children}</h3>
    },
  }

  return (
    <div className={cn("wiki-prose", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {prepared}
      </ReactMarkdown>
    </div>
  )
}
