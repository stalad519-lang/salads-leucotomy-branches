"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { useWiki } from "@/components/wiki-provider"
import { wikiHref } from "@/lib/wiki"

export default function RandomPage() {
  const { pages } = useWiki()
  const router = useRouter()

  useEffect(() => {
    const slugs = Object.keys(pages)
    if (slugs.length === 0) {
      router.replace("/")
      return
    }
    const slug = slugs[Math.floor(Math.random() * slugs.length)]
    router.replace(wikiHref(slug))
  }, [pages, router])

  return <p className="text-sm text-muted-foreground">正在前往随机条目…</p>
}
