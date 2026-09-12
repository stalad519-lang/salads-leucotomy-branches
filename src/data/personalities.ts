import type { PersonalityRecord } from "@/lib/personality"

/**
 * Synced from NEWRBPJ PersonalityCatalog + Locale/UI en (+ zh-cn names/descs).
 * kind: primary | trait (random pool) | special (conditional unlock).
 */
export const personalities: PersonalityRecord[] = [
  // ── Primary (8) ──────────────────────────────────────────
  {
    id: "Curious",
    slug: "Curious",
    kind: "primary",
    disposition: "good",
    name: { en: "Curious", zh: "好奇" },
    description: {
      en: "Drawn to the unknown; improves PE-Box output while working.",
      zh: "喜欢探索未知。",
    },
    acquire: {
      en: "Assigned at creation. Cannot be changed.",
      zh: "创建时固定分配，不可更改。",
    },
    bonus: { analysis: 0.03 },
    effect: {
      en: "Work PE-BOX output ×1.25.",
      zh: "工作产出的 PE-BOX ×1.25。",
    },
  },
  {
    id: "Compassionate",
    slug: "Compassionate",
    kind: "primary",
    disposition: "good",
    name: { en: "Compassionate", zh: "共情" },
    description: {
      en: "Understands others; restores sanity after suppressing hostiles.",
      zh: "容易理解他人与怪物。",
    },
    acquire: {
      en: "Assigned at creation. Cannot be changed.",
      zh: "创建时固定分配，不可更改。",
    },
    bonus: { instinct: 0.015, attachment: 0.015 },
    effect: {
      en: "On hostile kill: restore 12% of max SP.",
      zh: "击杀敌对单位时回复最大 SP 的 12%。",
    },
  },
  {
    id: "Resolute",
    slug: "Resolute",
    kind: "primary",
    disposition: "good",
    name: { en: "Resolute", zh: "坚定" },
    description: {
      en: "Hard to shake; takes less Fear from shocking events.",
      zh: "面对危险不易动摇。",
    },
    acquire: {
      en: "Assigned at creation. Cannot be changed.",
      zh: "创建时固定分配，不可更改。",
    },
    bonus: { analysis: 0.015, instinct: 0.015 },
    effect: {
      en: "Fear SP damage ×0.65.",
      zh: "恐惧造成的 SP 伤害 ×0.65。",
    },
  },
  {
    id: "Calm",
    slug: "Calm",
    kind: "primary",
    disposition: "good",
    name: { en: "Calm", zh: "冷静" },
    description: {
      en: "Keeps a clear head; nearby panic does not drain sanity.",
      zh: "危机时保持理智。",
    },
    acquire: {
      en: "Assigned at creation. Cannot be changed.",
      zh: "创建时固定分配，不可更改。",
    },
    bonus: { instinct: 0.03 },
    effect: {
      en: "Immune to nearby insane-aura SP drain.",
      zh: "免疫附近发疯光环的精神损耗。",
    },
  },
  {
    id: "Submissive",
    slug: "Submissive",
    kind: "primary",
    disposition: "bad",
    name: { en: "Submissive", zh: "顺从" },
    description: {
      en: "Never refuses orders; won't resist sacrifice; vulnerable to control-type abnormalities.",
      zh: "几乎不会违抗命令；牺牲时不会反抗；容易被控制类怪物共鸣。",
    },
    acquire: {
      en: "Assigned at creation. Cannot be changed.",
      zh: "创建时固定分配，不可更改。",
    },
    bonus: { attachment: 0.03 },
    effect: {
      en: "Never refuses remote orders or work assignment.",
      zh: "永不拒绝远程指令或工作指派。",
    },
  },
  {
    id: "Bloodthirsty",
    slug: "Bloodthirsty",
    kind: "primary",
    disposition: "bad",
    name: { en: "Bloodthirsty", zh: "嗜杀" },
    description: {
      en: "Strong at suppression; deals more damage to hostiles.",
      zh: "镇压能力强；喜欢危险怪物。",
    },
    acquire: {
      en: "Assigned at creation. Cannot be changed.",
      zh: "创建时固定分配，不可更改。",
    },
    bonus: { repression: 0.03 },
    effect: {
      en: "Damage vs hostiles ×1.18. Immune to guilt from killing staff.",
      zh: "对敌对单位伤害 ×1.18。击杀员工不会陷入愧疚。",
    },
  },
  {
    id: "Callous",
    slug: "Callous",
    kind: "primary",
    disposition: "bad",
    name: { en: "Callous", zh: "冷酷" },
    description: {
      en: "Numb to death; nearby deaths do not drain sanity.",
      zh: "对死亡无感；更适合高伤亡工作。",
    },
    acquire: {
      en: "Assigned at creation. Cannot be changed.",
      zh: "创建时固定分配，不可更改。",
    },
    bonus: { analysis: 0.03 },
    effect: {
      en: "Immune to death-fear SP drain. Immune to guilt from killing staff.",
      zh: "免疫死亡恐惧精神损耗。击杀员工不会陷入愧疚。",
    },
  },
  {
    id: "Paranoid",
    slug: "Paranoid",
    kind: "primary",
    disposition: "bad",
    name: { en: "Paranoid", zh: "多疑" },
    description: {
      en: "Quick to spot anomalies; far more likely to refuse remote orders.",
      zh: "容易发现异常；对欺骗类怪物适应能力更高。",
    },
    acquire: {
      en: "Assigned at creation. Cannot be changed.",
      zh: "创建时固定分配，不可更改。",
    },
    bonus: { instinct: 0.015, repression: 0.015 },
    effect: {
      en: "Higher chance to refuse remote MoveTo / work assignment.",
      zh: "更易拒绝远程移动 / 工作指派。",
    },
  },

  // ── Traits / random pool (19) ────────────────────────────
  {
    id: "Patient",
    slug: "Patient",
    kind: "trait",
    disposition: "good",
    name: { en: "Patient", zh: "耐心" },
    description: {
      en: "Willing to wait; not easily rushed.",
      zh: "愿意等待，不急躁。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { instinct: 0.01 },
  },
  {
    id: "Impulsive",
    slug: "Impulsive",
    kind: "trait",
    disposition: "bad",
    name: { en: "Impulsive", zh: "冲动" },
    description: {
      en: "Acts first, thinks later.",
      zh: "容易先行动后思考。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { repression: 0.01 },
  },
  {
    id: "Meticulous",
    slug: "Meticulous",
    kind: "trait",
    disposition: "good",
    name: { en: "Meticulous", zh: "严谨" },
    description: {
      en: "Almost never makes careless mistakes.",
      zh: "几乎不会犯低级错误。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { analysis: 0.01 },
  },
  {
    id: "Loyal",
    slug: "Loyal",
    kind: "trait",
    disposition: "good",
    name: { en: "Loyal", zh: "忠诚" },
    description: {
      en: "Unlikely to betray the company or allies.",
      zh: "不容易背叛公司或同伴。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { attachment: 0.01 },
  },
  {
    id: "Selfless",
    slug: "Selfless",
    kind: "trait",
    disposition: "good",
    name: { en: "Selfless", zh: "无私" },
    description: {
      en: "More willing to take dangerous work.",
      zh: "更愿意承担危险工作。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { attachment: 0.01 },
  },
  {
    id: "Selfish",
    slug: "Selfish",
    kind: "trait",
    disposition: "bad",
    name: { en: "Selfish", zh: "自私" },
    description: {
      en: "Prioritizes self-preservation.",
      zh: "优先保护自己。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { analysis: 0.01 },
  },
  {
    id: "Greedy",
    slug: "Greedy",
    kind: "trait",
    disposition: "bad",
    name: { en: "Greedy", zh: "贪婪" },
    description: {
      en: "Values rewards and personal gain.",
      zh: "更看重奖励与利益。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { repression: 0.01 },
  },
  {
    id: "Ambitious",
    slug: "Ambitious",
    kind: "trait",
    disposition: "good",
    name: { en: "Ambitious", zh: "野心" },
    description: {
      en: "Craves promotion and recognition.",
      zh: "渴望晋升与认可。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { instinct: 0.01 },
  },
  {
    id: "Obsessive",
    slug: "Obsessive",
    kind: "trait",
    disposition: "bad",
    name: { en: "Obsessive", zh: "偏执" },
    description: {
      en: "Easily fixates on one thing or one abnormality.",
      zh: "容易沉迷于一件事或一只怪物。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { analysis: 0.01 },
  },
  {
    id: "Cowardly",
    slug: "Cowardly",
    kind: "trait",
    disposition: "bad",
    name: { en: "Cowardly", zh: "怯懦" },
    description: {
      en: "Quick to flee from danger.",
      zh: "容易逃避危险。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { repression: 0.01 },
  },
  {
    id: "Reckless",
    slug: "Reckless",
    kind: "trait",
    disposition: "bad",
    name: { en: "Reckless", zh: "鲁莽" },
    description: {
      en: "Will try even when the risk is clear.",
      zh: "明知危险仍会尝试。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { repression: 0.01 },
  },
  {
    id: "Honest",
    slug: "Honest",
    kind: "trait",
    disposition: "good",
    name: { en: "Honest", zh: "诚实" },
    description: {
      en: "Won't hide unusual incidents.",
      zh: "不会隐瞒异常情况。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { attachment: 0.01 },
  },
  {
    id: "Deceptive",
    slug: "Deceptive",
    kind: "trait",
    disposition: "bad",
    name: { en: "Deceptive", zh: "善于伪装" },
    description: {
      en: "Can deceive abnormalities — and people.",
      zh: "容易欺骗怪物，也容易欺骗别人。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { instinct: 0.01 },
  },
  {
    id: "Nostalgic",
    slug: "Nostalgic",
    kind: "trait",
    disposition: "neutral",
    name: { en: "Nostalgic", zh: "怀旧" },
    description: {
      en: "Easily affected by memory-type abnormalities.",
      zh: "容易被记忆类怪物影响。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { attachment: 0.01 },
  },
  {
    id: "Humble",
    slug: "Humble",
    kind: "trait",
    disposition: "good",
    name: { en: "Humble", zh: "谦逊" },
    description: {
      en: "Doesn't claim credit; rarely envious.",
      zh: "不争功，不易嫉妒。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { attachment: 0.01 },
  },
  {
    id: "Arrogant",
    slug: "Arrogant",
    kind: "trait",
    disposition: "bad",
    name: { en: "Arrogant", zh: "傲慢" },
    description: {
      en: "Believes they won't make mistakes.",
      zh: "认为自己不会犯错。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { analysis: 0.01 },
  },
  {
    id: "Protective",
    slug: "Protective",
    kind: "trait",
    disposition: "good",
    name: { en: "Protective", zh: "保护欲" },
    description: {
      en: "Prioritizes protecting other employees.",
      zh: "优先保护其他员工。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { attachment: 0.01 },
  },
  {
    id: "Innocent",
    slug: "Innocent",
    kind: "trait",
    disposition: "good",
    name: { en: "Innocent", zh: "天真" },
    description: {
      en: "Quick to trust; may earn favor from some abnormalities.",
      zh: "容易相信别人，也容易获得部分怪物好感。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { attachment: 0.01 },
  },
  {
    id: "Devoted",
    slug: "Devoted",
    kind: "trait",
    disposition: "good",
    name: { en: "Devoted", zh: "奉献" },
    description: {
      en: "Persists until the work is finished.",
      zh: "会坚持完成工作直到最后。",
    },
    acquire: {
      en: "Random at creation, or from abnormality work when your primary matches the unit.",
      zh: "创建时随机；或主性格与异想体相符时由工作授予。",
    },
    bonus: { attachment: 0.01 },
  },

  // ── Special / conditional (16) ────────────────────────────
  {
    id: "Detached",
    slug: "Detached",
    kind: "special",
    disposition: "bad",
    name: { en: "Detached", zh: "疏离" },
    description: {
      en: "Keeps emotional distance; cannot form new friendships, and mental influence struggles to take hold.",
      zh: "与他人保持距离；无法交新朋友，也不容易被精神影响。",
    },
    acquire: {
      en: "Guaranteed after 3+ work days without greeting anyone.",
      zh: "连续 3 个工作日以上未与任何人打招呼后必定获得。",
    },
    bonus: { instinct: 0.01 },
  },
  {
    id: "Zealous",
    slug: "Zealous",
    kind: "special",
    disposition: "bad",
    name: { en: "Zealous", zh: "狂热" },
    description: {
      en: "Abnormally devoted to a chosen goal.",
      zh: "对认定的目标异常执着。",
    },
    acquire: {
      en: "Chance when manager-controlled kill on a monster.",
      zh: "管理人操控击杀怪物时有概率获得。",
    },
    bonus: { repression: 0.01 },
  },
  {
    id: "Vengeful",
    slug: "Vengeful",
    kind: "special",
    disposition: "bad",
    name: { en: "Vengeful", zh: "记仇" },
    description: {
      en: "Fixates on whoever harmed them.",
      zh: "对伤害自己的目标异常执着。",
    },
    acquire: {
      en: "Friend dies in sight, then avenging kill on the killer.",
      zh: "朋友死在眼前后，对凶手完成复仇击杀。",
    },
    bonus: { repression: 0.01 },
  },
  {
    id: "GuiltRidden",
    slug: "GuiltRidden",
    aliases: ["Guilt-ridden", "Guilt ridden"],
    kind: "special",
    disposition: "bad",
    name: { en: "Guilt-ridden", zh: "愧疚" },
    description: {
      en: "Oh god, what have I done???",
      zh: "救命我都做了什么？？？",
    },
    acquire: {
      en: "Often after a friend's death (by bond rank), or always after killing staff — unless Callous / Bloodthirsty.",
      zh: "朋友死后依羁绊等级常获得；击杀员工时必定获得（冷酷 / 嗜杀除外）。",
    },
    bonus: { analysis: -0.05, instinct: -0.05, attachment: -0.05, repression: -0.05 },
  },
  {
    id: "Remorse",
    slug: "Remorse",
    kind: "special",
    disposition: "bad",
    name: { en: "Remorse", zh: "悔恨" },
    description: {
      en: "I can't live with this — the guilt cuts deeper.",
      zh: "内疚更深，掉的也更多。",
    },
    acquire: {
      en: "Losing a Best Friend, or seeing them as a half-dead shell.",
      zh: "挚友真正死亡，或亲眼看见挚友变成半死躯壳。",
    },
    bonus: { analysis: -0.1, instinct: -0.1, attachment: -0.1, repression: -0.1 },
  },
  {
    id: "Broken",
    slug: "Broken",
    kind: "special",
    disposition: "bad",
    name: { en: "Broken", zh: "支离破碎" },
    description: {
      en: "Marked by major trauma.",
      zh: "经历重大创伤后留下的痕迹。",
    },
    acquire: {
      en: "Chance after recovering from insanity.",
      zh: "从发疯中恢复后有概率获得。",
    },
    bonus: { analysis: -0.05, instinct: -0.05, attachment: -0.05, repression: -0.05 },
  },
  {
    id: "PTSD",
    slug: "PTSD",
    kind: "special",
    disposition: "bad",
    name: { en: "PTSD", zh: "PTSD" },
    description: {
      en: "Shaken by repeated overwhelming fear. May lose sanity during quiet moments.",
      zh: "反复遭受崩溃级恐惧后留下阴影；安静时也可能掉精神。",
    },
    acquire: {
      en: "Multiple Overwhelmed fear events, then a chance roll.",
      zh: "多次达到「崩溃」恐惧等级后概率判定。",
    },
    bonus: { analysis: -0.05, instinct: -0.05, attachment: -0.05, repression: -0.05 },
  },
  {
    id: "Inability",
    slug: "Inability",
    kind: "special",
    disposition: "bad",
    name: { en: "Inability", zh: "失能" },
    description: {
      en: "After losing a friend, social bonds collapse. No more greetings or new friends.",
      zh: "失去朋友后社交崩溃；不再打招呼，也无法交新朋友。",
    },
    acquire: {
      en: "Chance when a friend dies in front of this employee.",
      zh: "朋友死在眼前时有概率获得。",
    },
    bonus: { analysis: -0.05, instinct: -0.05, attachment: -0.05, repression: -0.05 },
  },
  {
    id: "Martyr",
    slug: "Martyr",
    kind: "special",
    disposition: "good",
    name: { en: "Martyr", zh: "殉道者" },
    description: {
      en: "Will sacrifice themselves to save other employees.",
      zh: "主动牺牲自己救下其他员工。",
    },
    acquire: {
      en: "Extremely rare: die protecting a dying ally.",
      zh: "极罕见：为保护濒死同伴而牺牲。",
    },
    bonus: { attachment: 0.03 },
  },
  {
    id: "Scarred",
    slug: "Scarred",
    kind: "special",
    disposition: "bad",
    name: { en: "Scarred", zh: "伤痕累累" },
    description: {
      en: "Permanent scars from repeated near-death.",
      zh: "多次濒死后留下永久心理阴影。",
    },
    acquire: {
      en: "Survive near-death many times.",
      zh: "多次濒死幸存。",
    },
    bonus: { analysis: -0.05, instinct: -0.05, attachment: -0.05, repression: -0.05 },
  },
  {
    id: "Witness",
    slug: "Witness",
    kind: "special",
    disposition: "neutral",
    name: { en: "Witness", zh: "见证者" },
    description: {
      en: "Has seen the true form of a top-tier abnormality.",
      zh: "目睹过最高等级怪物的真容。",
    },
    acquire: {
      en: "Extremely rare: witness a top-tier abnormality's true form.",
      zh: "极罕见：目睹顶级异想体真容。",
    },
    bonus: { instinct: 0.03 },
  },
  {
    id: "Forsaken",
    slug: "Forsaken",
    kind: "special",
    disposition: "bad",
    name: { en: "Forsaken", zh: "被遗弃者" },
    description: {
      en: "Abandoned by the company, yet survived.",
      zh: "曾被公司放弃后幸存。",
    },
    acquire: {
      en: "Extremely rare: abandoned during breach, still alive at day end.",
      zh: "极罕见：出逃中被遗弃，日终仍存活。",
    },
    bonus: { analysis: -0.05, instinct: -0.05, attachment: -0.05, repression: -0.05 },
  },
  {
    id: "Unbroken",
    slug: "Unbroken",
    kind: "special",
    disposition: "good",
    name: { en: "Unbroken", zh: "不屈" },
    description: {
      en: "Failed many times without collapsing.",
      zh: "经历多次失败仍未崩溃。",
    },
    acquire: {
      en: "Many failed works without ever going insane.",
      zh: "多次工作失败却从未发疯。",
    },
    bonus: { analysis: 0.015, instinct: 0.015 },
  },
  {
    id: "Hollow",
    slug: "Hollow",
    kind: "special",
    disposition: "bad",
    name: { en: "Hollow", zh: "空洞" },
    description: {
      en: "Long exposure to the abnormal has eroded emotion.",
      zh: "长期接触异常后逐渐失去情感。",
    },
    acquire: {
      en: "Extremely rare: long devotion to one abnormality without reward.",
      zh: "极罕见：长期投入同一异想体却无回报。",
    },
    bonus: { analysis: -0.05, instinct: -0.05, attachment: -0.05, repression: -0.05 },
  },
  {
    id: "Devoured",
    slug: "Devoured",
    kind: "special",
    disposition: "bad",
    name: { en: "Devoured", zh: "吞噬者" },
    description: {
      en: "Survived being eroded by an abnormality.",
      zh: "经历过被怪物侵蚀却幸存。",
    },
    acquire: {
      en: "Extremely rare: survive abnormality erosion at the edge of death.",
      zh: "极罕见：在濒死边缘扛过异想体侵蚀。",
    },
    bonus: { analysis: -0.05, instinct: -0.05, attachment: -0.05, repression: -0.05 },
  },
  {
    id: "LastStand",
    slug: "LastStand",
    aliases: ["Last Stand"],
    kind: "special",
    disposition: "good",
    name: { en: "Last Stand", zh: "背水一战" },
    description: {
      en: "Once suppressed a major breach alone.",
      zh: "曾独自镇压一次重大出逃。",
    },
    acquire: {
      en: "Extremely rare: alone, suppress a major breach.",
      zh: "极罕见：独自镇压一次重大出逃。",
    },
    bonus: { analysis: 0.015, repression: 0.015 },
  },
]
