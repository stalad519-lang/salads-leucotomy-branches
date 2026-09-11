"use client"

import { Link } from "@/components/wiki-link"
import { useWiki } from "@/components/wiki-provider"
import {
  categoryBlurbs,
  categoryLabel,
  PRIMARY_CATEGORIES,
  type MessageKey,
} from "@/lib/i18n"
import { allCategories, categoryHref } from "@/lib/wiki"

const SCENE_INDEX = {
  Abnormalities: "01",
  Basics: "02",
  Mechanics: "03",
  Creators: "04",
} as const

export function FacilityHero() {
  const { settings, t } = useWiki()

  return (
    <section className="wiki-hero">
      <p className="wiki-hero-eyebrow">{t("archiveEyebrow")}</p>
      <h1 className="wiki-hero-title">{settings.name}</h1>
      <p className="wiki-hero-tagline">{settings.tagline || t("defaultTagline")}</p>
      <p className="wiki-hero-pick">{t("pickScene")}</p>
      <SceneDoors />
    </section>
  )
}

export function SceneDoors({ active }: { active?: string }) {
  const { pages, locale, t } = useWiki()
  const counts = Object.fromEntries(
    allCategories(pages, locale).map((item) => [item.name, item.count])
  )

  return (
    <div className="scene-doors">
      {PRIMARY_CATEGORIES.map((key) => {
        const href = categoryHref(key)
        const blurb = t(categoryBlurbs[key] as MessageKey)
        const count = counts[key] ?? 0
        return (
          <Link
            key={key}
            href={href}
            className={`scene-door ${active === key ? "is-active" : ""}`}
          >
            <span className="scene-door-index">{SCENE_INDEX[key]}</span>
            <span className="scene-door-name">{categoryLabel(key, locale)}</span>
            <span className="scene-door-blurb">{blurb}</span>
            <span className="scene-door-count">
              {count} {t("categoryFiles")}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export function SceneRail({ active }: { active?: string }) {
  const { locale } = useWiki()

  return (
    <nav className="scene-rail" aria-label="categories">
      {PRIMARY_CATEGORIES.map((key) => (
        <Link
          key={key}
          href={categoryHref(key)}
          className={`scene-rail-item ${active === key ? "is-active" : ""}`}
        >
          <span className="scene-rail-index">{SCENE_INDEX[key]}</span>
          {categoryLabel(key, locale)}
        </Link>
      ))}
    </nav>
  )
}
