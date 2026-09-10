import { seedPages, defaultSettings } from "@/data/seed-pages"
import type { Infobox, WikiPage, WikiSettings } from "@/lib/types"

export const HOME_SLUG = "首页"
export const PAGES_KEY = "xingchen-wiki.pages.v2"
export const SETTINGS_KEY = "xingchen-wiki.settings.v1"
export const WIKI_EVENT = "xingchen-wiki:changed"

export function slugify(title: string): string {
  return title.trim().replace(/\s+/g, "_")
}

export function titleFromSlug(slug: string): string {
  return slug.replace(/_/g, " ")
}

export function wikiHref(titleOrSlug: string): string {
  return `/wiki/${encodeURIComponent(slugify(titleOrSlug))}`
}

export function editHref(titleOrSlug: string): string {
  return `/edit/${encodeURIComponent(slugify(titleOrSlug))}`
}

export function historyHref(titleOrSlug: string): string {
  return `/history/${encodeURIComponent(slugify(titleOrSlug))}`
}

export function categoryHref(name: string): string {
  return `/category/${encodeURIComponent(name)}`
}

export function expandWikiLinks(
  markdown: string,
  exists: (title: string) => boolean
): string {
  return markdown.replace(
    /(```[\s\S]*?```|`[^`]+`)|\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
    (full, code?: string, target?: string, label?: string) => {
      if (code || !target) return full
      const title = target.trim()
      const text = (label ?? title).trim()
      if (title.startsWith("分类:")) {
        return `[${text}](${categoryHref(title.slice(3))})`
      }
      const missing = exists(title) ? "" : "?missing=1"
      return `[${text}](${wikiHref(title)}${missing})`
    }
  )
}

export function extractToc(markdown: string) {
  const toc: { id: string; text: string; level: number }[] = []
  for (const line of markdown.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line)
    if (!match) continue
    const text = match[2]
      .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t: string, l?: string) =>
        (l ?? t).trim()
      )
      .replace(/[*`]/g, "")
      .trim()
    toc.push({ id: slugify(text), text, level: match[1].length })
  }
  return toc
}

export function headingId(text: string): string {
  return slugify(text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"))
}

function clonePages(pages: WikiPage[]): Record<string, WikiPage> {
  return Object.fromEntries(pages.map((page) => [page.slug, structuredClone(page)]))
}

const serverPages = clonePages(seedPages)
const serverSettings: WikiSettings = { ...defaultSettings }

let pagesCache: Record<string, WikiPage> = serverPages
let settingsCache: WikiSettings = serverSettings
let storageHydrated = false
const listeners = new Set<() => void>()

function readPagesFromStorage(): Record<string, WikiPage> {
  try {
    const raw = window.localStorage.getItem(PAGES_KEY)
    if (!raw) {
      const seeded = clonePages(seedPages)
      window.localStorage.setItem(PAGES_KEY, JSON.stringify(seeded))
      return seeded
    }
    return JSON.parse(raw) as Record<string, WikiPage>
  } catch {
    return clonePages(seedPages)
  }
}

function readSettingsFromStorage(): WikiSettings {
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY)
    if (!raw) return { ...defaultSettings }
    return { ...defaultSettings, ...(JSON.parse(raw) as WikiSettings) }
  } catch {
    return { ...defaultSettings }
  }
}

function emitWikiChange() {
  for (const listener of listeners) listener()
}

function hydrateFromStorage() {
  if (storageHydrated || typeof window === "undefined") return
  storageHydrated = true
  queueMicrotask(() => {
    pagesCache = readPagesFromStorage()
    settingsCache = readSettingsFromStorage()
    emitWikiChange()
  })
}

export function getPagesSnapshot() {
  return pagesCache
}

export function getSettingsSnapshot() {
  return settingsCache
}

export function getServerPagesSnapshot() {
  return serverPages
}

export function getServerSettingsSnapshot() {
  return serverSettings
}

export function subscribeWiki(onStoreChange: () => void) {
  listeners.add(onStoreChange)
  hydrateFromStorage()
  const onEvent = () => {
    pagesCache = readPagesFromStorage()
    settingsCache = readSettingsFromStorage()
    emitWikiChange()
  }
  window.addEventListener(WIKI_EVENT, onEvent)
  window.addEventListener("storage", onEvent)
  return () => {
    listeners.delete(onStoreChange)
    window.removeEventListener(WIKI_EVENT, onEvent)
    window.removeEventListener("storage", onEvent)
  }
}

export function loadPages(): Record<string, WikiPage> {
  return getPagesSnapshot()
}

export function loadSettings(): WikiSettings {
  return getSettingsSnapshot()
}

export function persistPages(pages: Record<string, WikiPage>) {
  pagesCache = pages
  window.localStorage.setItem(PAGES_KEY, JSON.stringify(pages))
  emitWikiChange()
}

export function persistSettings(settings: WikiSettings) {
  settingsCache = settings
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
  emitWikiChange()
}

export function savePage(
  pages: Record<string, WikiPage>,
  draft: {
    slug?: string
    title: string
    content: string
    categories: string[]
    infobox?: Infobox
    summary?: string
  }
): { pages: Record<string, WikiPage>; slug: string } {
  const slug = slugify(draft.slug || draft.title)
  const now = new Date().toISOString()
  const previous = pages[slug]
  const next: WikiPage = {
    slug,
    title: draft.title.trim() || titleFromSlug(slug),
    content: draft.content,
    categories: [...new Set(draft.categories.map((item) => item.trim()).filter(Boolean))],
    infobox: draft.infobox,
    createdAt: previous?.createdAt ?? now,
    updatedAt: now,
    revisions: [
      {
        at: now,
        summary: draft.summary?.trim() || (previous ? "编辑页面" : "创建页面"),
        title: draft.title.trim() || titleFromSlug(slug),
        content: draft.content,
        categories: draft.categories,
        infobox: draft.infobox,
      },
      ...(previous?.revisions ?? []),
    ].slice(0, 20),
  }
  const updated = { ...pages, [slug]: next }
  persistPages(updated)
  return { pages: updated, slug }
}

export function deletePage(pages: Record<string, WikiPage>, slug: string) {
  const updated = { ...pages }
  delete updated[slug]
  persistPages(updated)
  return updated
}

export function restoreSeedPages(pages: Record<string, WikiPage>) {
  const updated = { ...pages }
  for (const page of seedPages) {
    updated[page.slug] = structuredClone(page)
  }
  persistPages(updated)
  persistSettings({ ...defaultSettings })
  return { pages: updated, settings: { ...defaultSettings } }
}

export function searchPages(pages: Record<string, WikiPage>, query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return Object.values(pages)
    .map((page) => {
      const haystack = `${page.title}\n${page.content}\n${page.categories.join(" ")}`.toLowerCase()
      const score =
        page.title.toLowerCase().includes(q) ? 3 : haystack.includes(q) ? 1 : 0
      return { page, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title, "zh"))
    .map((item) => item.page)
}

export function pagesInCategory(pages: Record<string, WikiPage>, name: string) {
  return Object.values(pages)
    .filter((page) => page.categories.includes(name))
    .sort((a, b) => a.title.localeCompare(b.title, "zh"))
}

export function allCategories(pages: Record<string, WikiPage>) {
  const counts = new Map<string, number>()
  for (const page of Object.values(pages)) {
    for (const category of page.categories) {
      counts.set(category, (counts.get(category) ?? 0) + 1)
    }
  }
  return [...counts.entries()]
    .sort((a, b) => a[0].localeCompare(b[0], "zh"))
    .map(([name, count]) => ({ name, count }))
}

export function recentPages(pages: Record<string, WikiPage>) {
  return Object.values(pages).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
}

export function formatTime(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date)
}

export function snippet(content: string, query?: string, length = 120) {
  const plain = content
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t: string, l?: string) => (l ?? t).trim())
    .replace(/[#>*`_\-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
  if (!query) return plain.slice(0, length)
  const index = plain.toLowerCase().indexOf(query.toLowerCase())
  if (index < 0) return plain.slice(0, length)
  const start = Math.max(0, index - 24)
  return `${start > 0 ? "…" : ""}${plain.slice(start, start + length)}`
}
