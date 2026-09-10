export type Locale = "en" | "zh"

export type InfoboxRow = {
  label: string
  value: string
}

export type Infobox = {
  heading: string
  caption?: string
  rows: InfoboxRow[]
}

export type PageCopy = {
  title: string
  content: string
  categories: string[]
  infobox?: Infobox
}

export type WikiRevision = {
  at: string
  locale: Locale
  summary: string
  title: string
  content: string
  categories: string[]
  infobox?: Infobox
}

export type WikiPage = {
  slug: string
  locales: {
    en: PageCopy
    zh?: Partial<PageCopy>
  }
  createdAt: string
  updatedAt: string
  revisions: WikiRevision[]
}

export type ResolvedPage = {
  slug: string
  title: string
  content: string
  categories: string[]
  infobox?: Infobox
  createdAt: string
  updatedAt: string
  usingEnglishFallback: boolean
  fallbackFields: {
    title: boolean
    content: boolean
    infobox: boolean
  }
}

export type WikiSettings = {
  name: string
  tagline: string
}
