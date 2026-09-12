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

export type WorkKey = "analysis" | "instinct" | "attachment" | "repression"
export type WorkRate = "VeryLow" | "Low" | "Normal" | "High" | "VeryHigh" | "AlwaysBad"

export type WorkPreferenceEntry = {
  /** Success band for Agent level I → V */
  rates: [WorkRate, WorkRate, WorkRate, WorkRate, WorkRate]
  /** Enter / special rule note for this work */
  note?: Localized
}

export type WorkNarrationBundle = Record<WorkKey, Localized<string[]>>

export type AbnormalityRecord = {
  slug: string
  aliases: string[]
  code: string
  name: Localized
  risk: RiskLevel
  /** Mood ceiling (Qliphoth emotion max) — not PE-BOX currency */
  mood: number
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
  /** Background / personality panel freeform lines */
  background?: Localized<string[]>
  workPreference: Record<WorkKey, WorkPreferenceEntry>
  workNarration: WorkNarrationBundle
  /** Remedic (sealed) work float lines — H-02 only */
  sealedWorkNarration?: WorkNarrationBundle
  sealedLabel?: Localized
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
  } | null
}

export const WORK_ORDER: WorkKey[] = ["analysis", "instinct", "attachment", "repression"]

export const WORK_LEVELS = ["I", "II", "III", "IV", "V"] as const

export const WORK_RATE_LABEL: Record<WorkRate, Localized> = {
  VeryLow: { en: "Very Low", zh: "极低" },
  Low: { en: "Low", zh: "低" },
  Normal: { en: "Normal", zh: "普通" },
  High: { en: "High", zh: "高" },
  VeryHigh: { en: "Very High", zh: "极高" },
  AlwaysBad: { en: "Always Bad", zh: "必差" },
}

export const DAMAGE_META: Record<
  DamageColor,
  {
    en: string
    zh: string
    workEn: string
    workZh: string
    workKey: "analysis" | "instinct" | "attachment" | "repression"
    css: string
    /** Damage-type glyph (not the work-type icon) */
    icon: string
  }
> = {
  red: {
    en: "Red",
    zh: "红",
    workEn: "Analysis",
    workZh: "解析",
    workKey: "analysis",
    css: "#c45c4a",
    icon: "/abnormalities/dmg-red.png",
  },
  grey: {
    en: "Grey",
    zh: "灰",
    workEn: "Instinct",
    workZh: "本能",
    workKey: "instinct",
    css: "#9aa3ad",
    icon: "/abnormalities/dmg-grey.png",
  },
  black: {
    en: "Black",
    zh: "黑",
    workEn: "Repression",
    workZh: "压迫",
    workKey: "repression",
    css: "#8a74b8",
    icon: "/abnormalities/dmg-black.png",
  },
  cyan: {
    en: "Cyan",
    zh: "青",
    workEn: "Attachment",
    workZh: "沟通",
    workKey: "attachment",
    css: "#6ec4c4",
    icon: "/abnormalities/dmg-cyan.png",
  },
}

export const WORK_ICON: Record<"analysis" | "instinct" | "attachment" | "repression", string> = {
  analysis: "/abnormalities/work-red.png",
  instinct: "/abnormalities/work-grey.png",
  attachment: "/abnormalities/work-cyan.png",
  repression: "/abnormalities/work-black.png",
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
    pe: "Mood",
    damage: "Damage",
    energy: "Energy output",
    bad: "Bad",
    normal: "Normal",
    good: "Good",
    workResult: "Work result",
    workResultBad: "Poor",
    workResultNormal: "Normal",
    workResultGood: "Good",
    resistances: "Damage resistance",
    sensitive: "Sensitive Information",
    moodCeiling: "Mood ceiling",
    story: "Story",
    management: "Managerial Guidelines",
    personality: "Personality",
    primary: "Primary",
    secondary: "Secondary",
    ego: "EGO",
    weapon: "Weapon",
    suit: "Suit",
    corrosion: "Erosion",
    gift: "Gift",
    appearance: "Look",
    range: "Range",
    mastered: "High proficiency",
    weaponBase: "Base proficiency",
    suitBase: "Without erosion",
    suitEroded: "With erosion",
    special: "Special",
    none: "None",
    optional: "Optional — not set",
    weaponSkill: "Weapon skill (same-name EGO)",
    analysis: "Analysis",
    instinct: "Instinct",
    attachment: "Attachment",
    repression: "Repression",
    immune: "Immune",
    endured: "High resistance",
    normalRes: "Normal resistance",
    weak: "Low resistance",
    vulnerable: "Very low resistance",
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
    colPe: "Mood",
    colEgo: "E.G.O",
    guideline: "Managerial Guidelines",
    background: "Background",
    workPreference: "Work Preference",
    workNarration: "Work Narration",
    sealedNarration: "Sealed work narration",
    workLevel: "Level",
    agentPlaceholder: "{1} = Agent name",
    grade: "Grade",
    workSpeed: "Work Speed",
    successRate: "Success Rate",
  },
  zh: {
    code: "编号",
    risk: "危险等级",
    pe: "情绪",
    damage: "伤害",
    energy: "能源产量",
    bad: "差",
    normal: "良",
    good: "优",
    workResult: "工作结果",
    workResultBad: "差",
    workResultNormal: "良",
    workResultGood: "优",
    resistances: "伤害抗性",
    sensitive: "敏感信息",
    moodCeiling: "情绪上限",
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
    mastered: "高熟练度",
    weaponBase: "非熟练",
    suitBase: "非侵蚀",
    suitEroded: "侵蚀",
    special: "特殊效果",
    none: "无",
    optional: "可选 — 暂未填写",
    weaponSkill: "侵蚀给予的同名 EGO 武器技能",
    analysis: "解析",
    instinct: "本能",
    attachment: "沟通",
    repression: "压迫",
    immune: "免疫",
    endured: "抗性较高",
    normalRes: "抗性一般",
    weak: "抗性较低",
    vulnerable: "抗性极低",
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
    colPe: "情绪",
    colEgo: "E.G.O",
    guideline: "管理需知",
    background: "背景",
    workPreference: "工作偏好",
    workNarration: "工作旁白",
    sealedNarration: "密封形态工作旁白",
    workLevel: "等级",
    agentPlaceholder: "{1} = 员工名字",
    grade: "Grade",
    workSpeed: "工作速度",
    successRate: "成功率",
  },
} as const

/** Introduce → Grade unlock ladder (shared across files). */
export const OBSERVATION_GRADE_STEPS = [
  { roman: "Ⅰ", bonus: "workSpeed" },
  { roman: "Ⅱ", bonus: "successRate" },
  { roman: "Ⅲ", bonus: "workSpeed" },
  { roman: "Ⅳ", bonus: "successRate" },
] as const

export const OBSERVATION_GRADE_MAX = 4

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
  const egoBits = file.ego
    ? [
        file.ego.name.en,
        file.ego.name.zh,
        file.ego.gift.name.en,
        file.ego.gift.name.zh,
      ]
    : []
  const narrBits: string[] = []
  for (const key of WORK_ORDER) {
    narrBits.push(...file.workNarration[key].en, ...file.workNarration[key].zh)
    const sealed = file.sealedWorkNarration?.[key]
    if (sealed) narrBits.push(...sealed.en, ...sealed.zh)
    const note = file.workPreference[key].note
    if (note) narrBits.push(note.en, note.zh)
  }
  return [
    file.code,
    file.slug,
    ...file.aliases,
    file.name.en,
    file.name.zh,
    ...egoBits,
    file.story.en,
    file.story.zh,
    ...(file.background?.en ?? []),
    ...(file.background?.zh ?? []),
    ...file.management.en,
    ...file.management.zh,
    ...narrBits,
  ].join("\n")
}

export function formatRange(min: number, max: number) {
  return `${min}–${max}`
}

export function formatSigned(value: number) {
  if (value === 0) return "0"
  return value > 0 ? `+${value}` : String(value)
}

export function formatResistance(value: number) {
  if (Number.isInteger(value)) return value.toFixed(1)
  return String(value)
}

export function resistanceWord(value: number, locale: Locale) {
  const ui = FILE_UI[locale]
  if (value <= 0) return ui.immune
  if (value < 1) return ui.endured
  if (value === 1) return ui.normalRes
  if (value < 2) return ui.weak
  return ui.vulnerable
}
