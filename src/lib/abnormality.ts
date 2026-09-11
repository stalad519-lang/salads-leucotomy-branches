import type { Locale } from "@/lib/types"
import { abnormalityFiles } from "@/data/abnormalities"

export type DamageColor = "red" | "grey" | "black" | "cyan"
export type RiskLevel = "ZAYIN" | "TETH" | "HE" | "WAW" | "ALEPH"

export type Localized<T = string> = { en: T; zh: T }

export type DamageRange = {
  color: DamageColor
  min: number
  max: number
}

export type EgoWeapon = {
  appearance: Localized
  risk: RiskLevel
  range: Localized
  damage: DamageRange
  mastered: {
    range: Localized
    damage: DamageRange
  }
}

export type EgoSuit = {
  appearance: Localized
  risk: RiskLevel
  resistances: Record<DamageColor, number>
  special: Localized | null
}

export type EgoCorrosion = {
  appearance: Localized
  resistances: Record<DamageColor, number>
  special: Localized
  weaponSkill: Localized
}

export type EgoGift = {
  name: Localized
  appearance: Localized
  bonuses: {
    analysis: number
    instinct: number
    attachment: number
    repression: number
  }
  special: Localized | null
}

export type AbnormalityRecord = {
  slug: string
  aliases: string[]
  code: string
  name: Localized
  risk: RiskLevel
  pe: number
  portrait: string
  portraitThumb?: string
  portraitFocus?: string
  damage: DamageRange
  energy: {
    bad: string
    normal: string
    good: string
  }
  resistances: Record<DamageColor, number>
  story: Localized
  management: Localized<string[]>
  personality: {
    primary: Localized
    secondary: Localized<string[]>
  }
  ego: {
    name: Localized
    weapon: EgoWeapon
    suit: EgoSuit
    corrosion: EgoCorrosion
    gift: EgoGift
  }
}

export const DAMAGE_META: Record<
  DamageColor,
  { en: string; zh: string; workEn: string; workZh: string; css: string }
> = {
  red: { en: "Red", zh: "红", workEn: "Analysis", workZh: "解析", css: "#c45c4a" },
  grey: { en: "Grey", zh: "灰", workEn: "Instinct", workZh: "本能", css: "#9aa3ad" },
  black: { en: "Black", zh: "黑", workEn: "Repression", workZh: "压迫", css: "#8a74b8" },
  cyan: { en: "Cyan", zh: "青", workEn: "Attachment", workZh: "沟通", css: "#6ec4c4" },
}

export const DAMAGE_ORDER: DamageColor[] = ["red", "grey", "black", "cyan"]

export const RISK_CSS: Record<RiskLevel, string> = {
  ZAYIN: "#1DF900",
  TETH: "#13A2FF",
  HE: "#FFE400",
  WAW: "#7B2BF9",
  ALEPH: "#FF0000",
}

export const RISK_ORDER: RiskLevel[] = ["ZAYIN", "TETH", "HE", "WAW", "ALEPH"]

export const RISK_INK: Record<RiskLevel, string> = {
  ZAYIN: "#000",
  TETH: "#fff",
  HE: "#000",
  WAW: "#fff",
  ALEPH: "#fff",
}

export const FILE_UI = {
  en: {
    code: "Code",
    risk: "Risk",
    pe: "PE",
    damage: "Damage",
    energy: "Energy output",
    bad: "Bad",
    normal: "Normal",
    good: "Good",
    resistances: "Resistances",
    story: "Story",
    management: "Managerial Guidelines",
    personality: "Personality",
    primary: "Primary",
    secondary: "Secondary",
    ego: "EGO",
    weapon: "Weapon",
    suit: "Suit",
    corrosion: "Corrosion",
    gift: "Gift",
    appearance: "Look",
    range: "Range",
    mastered: "After high proficiency",
    special: "Special",
    none: "None",
    optional: "Optional — not set",
    weaponSkill: "Weapon skill (same-name EGO)",
    analysis: "Analysis",
    instinct: "Instinct",
    attachment: "Attachment",
    repression: "Repression",
    endured: "Endured",
    normalRes: "Normal",
    weak: "Weak",
    vulnerable: "Vulnerable",
    notes: "Wiki notes",
    file: "Containment file",
    board: "held",
    emptyRank: "None held",
    backArchive: "← List of Abnormalities",
    listCaption: "Abnormalities",
    colCode: "Classification Code",
    colPortrait: "Portrait",
    colName: "Name",
    colRisk: "Risk Level",
    colDamage: "Work Damage",
    colPe: "PE",
    colEgo: "E.G.O",
    guideline: "Managerial Guidelines",
  },
  zh: {
    code: "编号",
    risk: "危险等级",
    pe: "情绪值",
    damage: "伤害",
    energy: "能源产量",
    bad: "坏",
    normal: "良",
    good: "优",
    resistances: "抗性",
    story: "来源故事",
    management: "管理需知",
    personality: "对应性格",
    primary: "主性格",
    secondary: "副性格",
    ego: "EGO",
    weapon: "武器",
    suit: "衣服",
    corrosion: "侵蚀",
    gift: "饰品",
    appearance: "外貌",
    range: "攻击距离",
    mastered: "高熟练度之后",
    special: "特殊效果",
    none: "无",
    optional: "可选 — 暂未填写",
    weaponSkill: "侵蚀给予的同名 EGO 武器技能",
    analysis: "解析",
    instinct: "本能",
    attachment: "沟通",
    repression: "压迫",
    endured: "抵抗",
    normalRes: "普通",
    weak: "脆弱",
    vulnerable: "极脆弱",
    notes: "词条备注",
    file: "收容档案",
    board: "在库",
    emptyRank: "未收容",
    backArchive: "← 异想体一览",
    listCaption: "异想体",
    colCode: "编号",
    colPortrait: "肖像",
    colName: "名称",
    colRisk: "危险等级",
    colDamage: "作业伤害",
    colPe: "情绪值",
    colEgo: "E.G.O",
    guideline: "管理需知",
  },
} as const

export function loc<T>(copy: Localized<T>, locale: Locale): T {
  return copy[locale] ?? copy.en
}

export function fileKey(value: string) {
  return value.trim().replace(/\s+/g, "_")
}

export function groupedAbnormalities() {
  return RISK_ORDER.map((risk) => ({
    risk,
    files: abnormalityFiles.filter((file) => file.risk === risk),
  }))
}

export function findAbnormality(titleOrSlug: string) {
  const raw = titleOrSlug.trim()
  const key = fileKey(raw).toLowerCase()
  return abnormalityFiles.find((file) => {
    const names = [file.slug, file.code, ...file.aliases, file.name.en, file.name.zh]
    return names.some((name) => fileKey(name).toLowerCase() === key)
  })
}

export function abnormalitySearchText(file: AbnormalityRecord) {
  return [
    file.code,
    file.slug,
    ...file.aliases,
    file.name.en,
    file.name.zh,
    file.ego.name.en,
    file.ego.name.zh,
    file.ego.gift.name.en,
    file.ego.gift.name.zh,
    file.story.en,
    file.story.zh,
    ...file.management.en,
    ...file.management.zh,
  ].join("\n")
}

export function formatRange(min: number, max: number) {
  return `${min}–${max}`
}

export function formatSigned(value: number) {
  if (value === 0) return "0"
  return value > 0 ? `+${value}` : String(value)
}

export function resistanceWord(value: number, locale: Locale) {
  const ui = FILE_UI[locale]
  if (value < 1) return ui.endured
  if (value === 1) return ui.normalRes
  if (value < 2) return ui.weak
  return ui.vulnerable
}
