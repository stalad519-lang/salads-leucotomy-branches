import { seedPages, defaultSettings } from "@/data/seed-pages"
import { categoryKey, DEFAULT_LOCALE } from "@/lib/i18n"
import type {
  Infobox,
  Locale,
  PageCopy,
  ResolvedPage,
  WikiPage,
  WikiSettings,
} from "@/lib/types"

export const HOME_SLUG = "Main_Page"
export const PAGES_KEY = "slb-wiki.pages.v2"
export const SETTINGS_KEY = "slb-wiki.settings.v2"
export const WIKI_EVENT = "slb-wiki:changed"

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
  return `/category/${encodeURIComponent(categoryKey(name))}`
}

function filled(value: string | undefined) {
  return Boolean(value && value.trim())
}

export function resolveCopy(page: WikiPage, locale: Locale): ResolvedPage {
  const en = page.locales.en
  const zh = page.locales.zh
  if (locale === "en") {
    return {
      slug: page.slug,
      title: en.title,
      content: en.content,
      categories: en.categories,
      infobox: en.infobox,
      createdAt: page.createdAt,
      updatedAt: page.updatedAt,
      usingEnglishFallback: false,
      fallbackFields: { title: false, content: false, infobox: false },
    }
  }
  const titleFallback = !filled(zh?.title)
  const contentFallback = !filled(zh?.content)
  const infoboxFallback = !zh?.infobox
  return {
    slug: page.slug,
    title: titleFallback ? en.title : zh!.title!,
    content: contentFallback ? en.content : zh!.content!,
    categories:
      zh?.categories && zh.categories.length > 0 ? zh.categories : en.categories,
    infobox: infoboxFallback ? en.infobox : zh!.infobox,
    createdAt: page.createdAt,
    updatedAt: page.updatedAt,
    usingEnglishFallback: titleFallback || contentFallback,
    fallbackFields: {
      title: titleFallback,
      content: contentFallback,
      infobox: infoboxFallback,
    },
  }
}

export function findPage(
  pages: Record<string, WikiPage>,
  titleOrSlug: string
): WikiPage | undefined {
  const slug = slugify(titleOrSlug)
  if (pages[slug]) return pages[slug]
  return Object.values(pages).find((page) => {
    const titles = [page.locales.en.title, page.locales.zh?.title].filter(Boolean) as string[]
    return titles.some((title) => title === titleOrSlug || slugify(title) === slug)
  })
}

export function displayTitle(
  pages: Record<string, WikiPage>,
  titleOrSlug: string,
  locale: Locale
) {
  const page = findPage(pages, titleOrSlug)
  if (!page) return titleOrSlug
  return resolveCopy(page, locale).title
}

export function expandWikiLinks(
  markdown: string,
  pages: Record<string, WikiPage>,
  locale: Locale
): string {
  return markdown.replace(
    /(```[\s\S]*?```|`[^`]+`)|\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
    (full, code?: string, target?: string, label?: string) => {
      if (code || !target) return full
      const title = target.trim()
      const explicit = label?.trim()
      if (title.startsWith("Category:") || title.startsWith("分类:")) {
        const name = title.replace(/^(Category:|分类:)/, "")
        return `[${explicit || name}](${categoryHref(name)})`
      }
      const page = findPage(pages, title)
      const text = explicit || (page ? resolveCopy(page, locale).title : title)
      const href = page ? wikiHref(page.slug) : wikiHref(title)
      const missing = page ? "" : "?missing=1"
      return `[${text}](${href}${missing})`
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

function normalizeCategories(list: string[]) {
  return [...new Set(list.map((item) => categoryKey(item.trim())).filter(Boolean))]
}

export function savePage(
  pages: Record<string, WikiPage>,
  draft: {
    slug?: string
    locale: Locale
    title: string
    content: string
    categories: string[]
    infobox?: Infobox
    summary?: string
  }
): { pages: Record<string, WikiPage>; slug: string } {
  const previous =
    (draft.slug ? findPage(pages, draft.slug) : undefined) ||
    findPage(pages, draft.title)
  const slug = previous?.slug || slugify(draft.slug || draft.title)
  const now = new Date().toISOString()
  const copy: PageCopy = {
    title: draft.title.trim() || titleFromSlug(slug),
    content: draft.content,
    categories: normalizeCategories(draft.categories),
    infobox: draft.infobox,
  }
  const en = previous?.locales.en ?? copy
  const zh = previous?.locales.zh
  let nextLocales: WikiPage["locales"]
  if (draft.locale === "en") {
    nextLocales = { en: copy, zh }
  } else if (!filled(copy.content) && !filled(copy.title)) {
    nextLocales = { en }
  } else {
    nextLocales = {
      en: previous?.locales.en ?? copy,
      zh: copy,
    }
  }
  const next: WikiPage = {
    slug,
    locales: nextLocales,
    createdAt: previous?.createdAt ?? now,
    updatedAt: now,
    revisions: [
      {
        at: now,
        locale: draft.locale,
        summary:
          draft.summary?.trim() ||
          (previous ? "Edited page" : "Created page"),
        title: copy.title,
        content: copy.content,
        categories: copy.categories,
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

export function searchPages(
  pages: Record<string, WikiPage>,
  query: string,
  locale: Locale = DEFAULT_LOCALE
) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return Object.values(pages)
    .map((page) => {
      const resolved = resolveCopy(page, locale)
      const en = page.locales.en
      const zh = page.locales.zh
      const haystack = [
        resolved.title,
        resolved.content,
        resolved.categories.join(" "),
        en.title,
        en.content,
        zh?.title,
        zh?.content,
      ]
        .filter(Boolean)
        .join("\n")
        .toLowerCase()
      const score = resolved.title.toLowerCase().includes(q)
        ? 3
        : haystack.includes(q)
          ? 1
          : 0
      return { page, resolved, score }
    })
    .filter((item) => item.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.resolved.title.localeCompare(b.resolved.title, locale === "zh" ? "zh" : "en")
    )
}

export function pagesInCategory(
  pages: Record<string, WikiPage>,
  name: string,
  locale: Locale
) {
  const key = categoryKey(name)
  return Object.values(pages)
    .map((page) => ({ page, resolved: resolveCopy(page, locale) }))
    .filter((item) => item.resolved.categories.some((cat) => categoryKey(cat) === key))
    .sort((a, b) => a.resolved.title.localeCompare(b.resolved.title, locale === "zh" ? "zh" : "en"))
}

export function allCategories(pages: Record<string, WikiPage>, locale: Locale) {
  const counts = new Map<string, number>()
  for (const page of Object.values(pages)) {
    const resolved = resolveCopy(page, locale)
    for (const category of resolved.categories) {
      const key = categoryKey(category)
      counts.set(key, (counts.get(key) ?? 0) + 1)
    }
  }
  return [...counts.entries()]
    .sort((a, b) => a[0].localeCompare(b[0], locale === "zh" ? "zh" : "en"))
    .map(([name, count]) => ({ name, count }))
}

export function formatTime(iso: string, locale: Locale) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date)
}

export function snippet(content: string, query?: string, length = 120) {
  const plain = content
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t: string, l?: string) =>
      (l ?? t).trim()
    )
    .replace(/[#>*`_\-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
  if (!query) return plain.slice(0, length)
  const index = plain.toLowerCase().indexOf(query.toLowerCase())
  if (index < 0) return plain.slice(0, length)
  const start = Math.max(0, index - 24)
  return `${start > 0 ? "…" : ""}${plain.slice(start, start + length)}`
}
