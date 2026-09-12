import type { Localized } from "@/lib/abnormality"
import type { Locale } from "@/lib/types"
import { personalities } from "@/data/personalities"

export type PersonalityKind = "primary" | "trait" | "special"
export type Disposition = "good" | "neutral" | "bad"

export type AttrBonus = {
  analysis?: number
  instinct?: number
  attachment?: number
  repression?: number
}

export type PersonalityRecord = {
  id: string
  slug: string
  aliases?: string[]
  kind: PersonalityKind
  disposition: Disposition
  name: Localized
  description: Localized
  /** How the trait is obtained (codex acquire line). */
  acquire: Localized
  bonus: AttrBonus
  /** Extra gameplay note (primaries / special rules). */
  effect?: Localized
}

export const KIND_LABEL: Record<PersonalityKind, Localized> = {
  primary: { en: "Primary", zh: "主性格" },
  trait: { en: "Trait", zh: "特质" },
  special: { en: "Special", zh: "特殊" },
}

export const DISPOSITION_LABEL: Record<Disposition, Localized> = {
  good: { en: "Good", zh: "善" },
  neutral: { en: "Neutral", zh: "中立" },
  bad: { en: "Bad", zh: "恶" },
}

export const ATTR_LABEL: Record<keyof AttrBonus, Localized> = {
  analysis: { en: "Analysis", zh: "解析" },
  instinct: { en: "Instinct", zh: "本能" },
  attachment: { en: "Attachment", zh: "沟通" },
  repression: { en: "Repression", zh: "压迫" },
}

export function formatBonusPct(v: number): string {
  const pct = Math.round(v * 1000) / 10
  if (Math.abs(pct - Math.round(pct)) < 1e-6) {
    return `${pct >= 0 ? "+" : ""}${Math.round(pct)}%`
  }
  return `${pct >= 0 ? "+" : ""}${pct.toFixed(1)}%`
}

export function formatBonusLine(bonus: AttrBonus, locale: Locale): string {
  const parts: string[] = []
  for (const key of ["analysis", "instinct", "attachment", "repression"] as const) {
    const v = bonus[key]
    if (typeof v === "number" && v !== 0) {
      parts.push(`${ATTR_LABEL[key][locale]} ${formatBonusPct(v)}`)
    }
  }
  return parts.join(" · ")
}

export function findPersonality(titleOrSlug: string): PersonalityRecord | undefined {
  const raw = titleOrSlug.trim()
  if (!raw) return undefined
  const lower = raw.toLowerCase()
  const compact = lower.replace(/[\s_-]+/g, "")
  return personalities.find((p) => {
    if (p.slug.toLowerCase() === lower || p.id.toLowerCase() === lower) return true
    if (p.name.en.toLowerCase() === lower || p.name.zh === raw) return true
    if (p.aliases?.some((a) => a.toLowerCase() === lower || a === raw)) return true
    if (p.id.toLowerCase().replace(/_/g, "") === compact) return true
    return false
  })
}

export function personalitiesByKind(kind: PersonalityKind) {
  return personalities.filter((p) => p.kind === kind)
}

export function personalitySearchText(p: PersonalityRecord): string {
  return [
    p.id,
    p.slug,
    p.name.en,
    p.name.zh,
    p.description.en,
    p.description.zh,
    p.acquire.en,
    p.acquire.zh,
    p.effect?.en,
    p.effect?.zh,
    ...(p.aliases ?? []),
  ]
    .filter(Boolean)
    .join("\n")
}
