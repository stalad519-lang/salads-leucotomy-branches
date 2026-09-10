export type InfoboxRow = {
  label: string
  value: string
}

export type Infobox = {
  heading: string
  caption?: string
  rows: InfoboxRow[]
}

export type WikiRevision = {
  at: string
  summary: string
  title: string
  content: string
  categories: string[]
  infobox?: Infobox
}

export type WikiPage = {
  slug: string
  title: string
  content: string
  categories: string[]
  infobox?: Infobox
  createdAt: string
  updatedAt: string
  revisions: WikiRevision[]
}

export type WikiSettings = {
  name: string
  tagline: string
}
