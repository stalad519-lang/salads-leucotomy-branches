"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react"

import type { Infobox, WikiPage, WikiSettings } from "@/lib/types"
import {
  deletePage,
  getPagesSnapshot,
  getServerPagesSnapshot,
  getServerSettingsSnapshot,
  getSettingsSnapshot,
  persistSettings,
  restoreSeedPages,
  savePage,
  subscribeWiki,
} from "@/lib/wiki"

type WikiContextValue = {
  pages: Record<string, WikiPage>
  settings: WikiSettings
  getPage: (slug: string) => WikiPage | undefined
  exists: (titleOrSlug: string) => boolean
  save: (draft: {
    slug?: string
    title: string
    content: string
    categories: string[]
    infobox?: Infobox
    summary?: string
  }) => string
  remove: (slug: string) => void
  updateSettings: (settings: WikiSettings) => void
  resetDemo: () => void
}

const WikiContext = createContext<WikiContextValue | null>(null)

export function WikiProvider({ children }: { children: React.ReactNode }) {
  const pages = useSyncExternalStore(
    subscribeWiki,
    getPagesSnapshot,
    getServerPagesSnapshot
  )
  const settings = useSyncExternalStore(
    subscribeWiki,
    getSettingsSnapshot,
    getServerSettingsSnapshot
  )

  const save = useCallback(
    (draft: {
      slug?: string
      title: string
      content: string
      categories: string[]
      infobox?: Infobox
      summary?: string
    }) => savePage(pages, draft).slug,
    [pages]
  )

  const remove = useCallback(
    (slug: string) => {
      deletePage(pages, slug)
    },
    [pages]
  )

  const updateSettings = useCallback((next: WikiSettings) => {
    persistSettings(next)
  }, [])

  const resetDemo = useCallback(() => {
    restoreSeedPages(pages)
  }, [pages])

  const value = useMemo<WikiContextValue>(
    () => ({
      pages,
      settings,
      getPage: (slug) => pages[slug],
      exists: (titleOrSlug) => {
        const slug = titleOrSlug.trim().replace(/\s+/g, "_")
        return Boolean(pages[slug] || pages[titleOrSlug])
      },
      save,
      remove,
      updateSettings,
      resetDemo,
    }),
    [pages, remove, resetDemo, save, settings, updateSettings]
  )

  return <WikiContext.Provider value={value}>{children}</WikiContext.Provider>
}

export function useWiki() {
  const ctx = useContext(WikiContext)
  if (!ctx) throw new Error("useWiki must be used within WikiProvider")
  return ctx
}
