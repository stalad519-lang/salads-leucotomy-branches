"use client"

import { Biohazard, Layers, GitBranch, Users } from "lucide-react"

import { Link } from "@/components/wiki-link"
import { useWiki } from "@/components/wiki-provider"
import {
  categoryBlurbs,
  categoryLabel,
  PRIMARY_CATEGORIES,
  type MessageKey,
} from "@/lib/i18n"
import { allCategories, categoryHref } from "@/lib/wiki"

const icons = {
  Abnormalities: Biohazard,
  Basics: Layers,
  Mechanics: GitBranch,
  Creators: Users,
} as const

export function FacilityHero() {
  const { settings, t } = useWiki()

  return (
    <section className="wiki-hero">
      <p className="wiki-hero-eyebrow">{t("archiveEyebrow")}</p>
      <h1 className="wiki-hero-title">{settings.name}</h1>
      <p className="wiki-hero-tagline">{settings.tagline || t("defaultTagline")}</p>
      <CategoryDeck />
    </section>
  )
}

export function CategoryDeck({ active }: { active?: string }) {
  const { pages, locale, t } = useWiki()
  const counts = Object.fromEntries(
    allCategories(pages, locale).map((item) => [item.name, item.count])
  )

  return (
    <div className="category-deck">
      {PRIMARY_CATEGORIES.map((key) => {
        const Icon = icons[key]
        const href = categoryHref(key)
        const blurb = t(categoryBlurbs[key] as MessageKey)
        const count = counts[key] ?? 0
        return (
          <Link
            key={key}
            href={href}
            className={`category-card category-card-${key.toLowerCase()} ${
              active === key ? "is-active" : ""
            }`}
          >
            <span className="category-card-icon">
              <Icon />
            </span>
            <span className="category-card-name">{categoryLabel(key, locale)}</span>
            <span className="category-card-blurb">{blurb}</span>
            <span className="category-card-count">
              {count} {t("categoryFiles")}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
