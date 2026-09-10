"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react"

import {
  getLocaleSnapshot,
  getServerLocaleSnapshot,
  setLocale as writeLocale,
  subscribeLocale,
  t as translate,
  type MessageKey,
} from "@/lib/i18n"
import type { Infobox, Locale, WikiPage, WikiSettings } from "@/lib/types"
import {
  deletePage,
  findPage,
  getPagesSnapshot,
  getServerPagesSnapshot,
  getServerSettingsSnapshot,
  getSettingsSnapshot,
  persistSettings,
  resolveCopy,
  restoreSeedPages,
  savePage,
  subscribeWiki,
} from "@/lib/wiki"

type WikiContextValue = {
  pages: Record<string, WikiPage>
  settings: WikiSettings
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: MessageKey) => string
  getPage: (slug: string) => WikiPage | undefined
  resolve: (page: WikiPage) => ReturnType<typeof resolveCopy>
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
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot
  )

  const save = useCallback(
    (draft: {
      slug?: string
      title: string
      content: string
      categories: string[]
      infobox?: Infobox
      summary?: string
    }) => savePage(pages, { ...draft, locale }).slug,
    [locale, pages]
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
      locale,
      setLocale: writeLocale,
      t: (key) => translate(locale, key),
      getPage: (slug) => findPage(pages, slug),
      resolve: (page) => resolveCopy(page, locale),
      exists: (titleOrSlug) => Boolean(findPage(pages, titleOrSlug)),
      save,
      remove,
      updateSettings,
      resetDemo,
    }),
    [locale, pages, remove, resetDemo, save, settings, updateSettings]
  )

  return <WikiContext.Provider value={value}>{children}</WikiContext.Provider>
}

export function useWiki() {
  const ctx = useContext(WikiContext)
  if (!ctx) throw new Error("useWiki must be used within WikiProvider")
  return ctx
}
