import type { AbnormalityRecord } from "@/lib/abnormality"

/**
 * Fan submission — O-04-0 Unyielding Pale Flower (不屈苍花).
 * Submitter: 日照野田
 */
export const unyieldingPaleFlower: AbnormalityRecord = {
  slug: "Unyielding_Pale_Flower",
  aliases: [
    "O-04-0",
    "Unyielding Pale Flower",
    "不屈苍花",
    "不屈之花",
    "O-08-93",
  ],
  code: "O-04-0",
  name: { en: "Unyielding Pale Flower", zh: "不屈苍花" },
  risk: "WAW",
  mood: 4,
  portrait: "/abnormalities/unyielding-pale-flower.png",
  portraitThumb: "/abnormalities/unyielding-pale-flower.png",
  damage: { color: "red", min: 6, max: 8 },
  energy: {
    bad: "0–9",
    normal: "10–15",
    good: "16–21",
  },
  resistances: {
    red: 1,
    grey: 1,
    black: 1,
    cyan: 1,
  },
  story: {
    en: "This flower can break soil anywhere. It does not grow — it only glows a pale blue in the dim containment unit. Its vines fill the whole room. You feel warmth from the flower… and then forget yourself.",
    zh: "这朵花可以从任何地方破土而出，它不会长大，只是在昏暗的收容单元中闪着淡蓝色的光，它的藤蔓遍布着整个收容间，你会从这朵花上感到温暖……随后遗忘自我。",
  },
  management: {
    en: [
      "This abnormality cannot restore mood through work.",
      'When the work result is Bad or Normal, the Unyielding Pale Flower’s mood drops by 1 immediately.',
      "If an Agent performs the same work twice in a row on it, that Agent randomly loses one personality. Sending them again causes them to become a Hollow shell (counts as death). The flower then fully restores its mood.",
      "While a Hollow Agent exists, and another Agent dies that day, Instinct is replaced by “Resurrection”. You cannot choose the revive target; if several died, one is chosen at random. The revived Agent’s level must be equal to or higher than the Hollow’s.",
      "Resurrection costs 3 mood. The Hollow becomes a vessel so the dead Agent can return. The returned Agent keeps stats, name, and personalities, but keeps the Hollow’s appearance.",
      "All attributes of a revived Agent drop by one grade.",
      "If the Hollow’s level is lower than the returning Agent’s, the vessel bursts and resurrection fails. The flower breaches immediately.",
      "When mood hits 0, the flower breaches: it roots in a random department and attacks nearby employees. Each kill grants one mood; when mood is full it returns on its own. (Each kill restores 1 mood.)",
    ],
    zh: [
      "该异想体无法通过工作恢复情绪值。",
      "当工作结果为差和良时，「不屈之花」的情绪值会立刻下降 1 点。",
      "当一名员工对该异想体执行 2 次重复的工作时，员工将会随机失去一个性格；如果此刻再次派遣该员工，则会迷失变成空壳，判定为死亡。「不屈之花」则恢满情绪值。",
      "当存在空壳员工，且当天有其他员工死亡时，本能工作将会替换为「复活」（不能选择复活对象；如果多名员工死亡则是随机复活；复活的员工等级必须比空壳员工高或者相同）。",
      "「复活」时会消耗 3 点情绪值；空壳员工会被作为容器让本该死去的员工还魂；还魂的员工会继承属性值、名称以及性格，不过外观还是空壳员工。",
      "被复活的员工所有属性都会下降 1 级。",
      "如果空壳员工的等级没还魂员工高时，将直接撑爆容器导致复活失败，「不屈之花」则立刻出逃。",
      "「不屈之花」情绪归零时出逃，期间会随机选择一个部门生根发芽并开始攻击附近的职员。每次击杀获得一层情绪值，回满则自动取消出逃（击杀恢复 1 点情绪值）。",
    ],
  },
  background: {
    en: [
      "Submitted by 日照野田.",
      "Primary personality: Compassionate (仁慈). Secondary personalities: Greedy, Arrogant.",
    ],
    zh: [
      "投稿者：日照野田。",
      "主性格：仁慈。副性格：贪婪、傲慢。",
    ],
  },
  workPreference: {
    instinct: {
      rates: ["Low", "Low", "Low", "Normal", "High"],
      note: {
        en: "Success I–V: 30% / 35% / 40% / 50% / 70%. With a Hollow present and a death that day, Instinct becomes “Resurrection”.",
        zh: "成功率 I–V：30% / 35% / 40% / 50% / 70%。存在空壳且当天有员工死亡时，本能替换为「复活」。",
      },
    },
    analysis: {
      rates: ["Low", "Normal", "High", "High", "VeryHigh"],
      note: {
        en: "Success I–V: 40% / 50% / 60% / 70% / 80%.",
        zh: "成功率 I–V：40% / 50% / 60% / 70% / 80%。",
      },
    },
    attachment: {
      rates: ["Low", "Low", "Low", "High", "High"],
      note: {
        en: "Success I–V: 40% / 40% / 40% / 60% / 60%.",
        zh: "成功率 I–V：40% / 40% / 40% / 60% / 60%。",
      },
    },
    repression: {
      rates: ["AlwaysBad", "AlwaysBad", "VeryLow", "VeryLow", "Low"],
      note: {
        en: "Success I–V: 0% / 0% / 10% / 12% / 25%.",
        zh: "成功率 I–V：0% / 0% / 10% / 12% / 25%。",
      },
    },
  },
  workNarration: {
    analysis: {
      en: [
        'We cannot know what lies buried under the Unyielding Pale Flower — and it is better not to know.',
        'According to one Agent, the warmth from the Unyielding Pale Flower moves from the outside in.',
        'The Unyielding Pale Flower seems able to turn the containment floor into soil.',
        'Soil inside the unit is very hard to dig.',
      ],
      zh: [
        "我们无从得知「不屈苍花」底下深埋着什么，但也最好不要知道。",
        "根据一名员工所说，「不屈苍花」所发出来的温暖是从外到内的。",
        "「不屈苍花」似乎能将收容单元的地板转化为土壤。",
        "收容单元内的土壤很难被挖掘。",
      ],
    },
    instinct: {
      en: [
        'When someone enters the unit, the Unyielding Pale Flower gives off a pale blue light.',
        'Rumor says people who work the Unyielding Pale Flower for too long do not rot after death.',
        'During Instinct work, lemon-flavored soda can be poured into the flower’s soil.',
        'Only a dead person’s claws can dig through the Unyielding Pale Flower’s soil.',
      ],
      zh: [
        "当有人到收容单元内时，「不屈苍花」发出了淡蓝色的光。",
        "有传闻说，长时间对「不屈苍花」工作的人在死后不会腐烂。",
        "在进行本能工作时，可以往「不屈苍花」的土壤中倒入柠檬味汽水。",
        "只有死者的利爪才能刨开「不屈苍花」的土壤。",
      ],
    },
    attachment: {
      en: [
        'Best not to lose yourself working the Unyielding Pale Flower, no matter how warm it feels.',
        'The Unyielding Pale Flower has no mouth, yet Agents can hear its whisper.',
        'If an Agent works the Unyielding Pale Flower too often, they begin to forget things.',
        'Vines of the Unyielding Pale Flower fill the containment unit.',
      ],
      zh: [
        "最好不要沉迷于和「不屈苍花」工作，无论它多么的温暖。",
        "「不屈苍花」并没有嘴，但员工可以听到它的低语。",
        "如果员工过多的对「不屈苍花」工作，那么他会开始遗忘一些事。",
        "「不屈苍花」的收容单元内布满了藤蔓。",
      ],
    },
    repression: {
      en: [
        'The Unyielding Pale Flower’s vines keep writhing — unsettling.',
        'No Agent may take any part of the Unyielding Pale Flower from the unit.',
        'The Unyielding Pale Flower seems able to turn the containment floor into soil.',
        'Soil inside the unit is very hard to dig.',
      ],
      zh: [
        "「不屈苍花」的藤蔓在不停的蠕动，令人感到不安。",
        "任何员工不得拿走收容单元内属于「不屈苍花」的任何一部分。",
        "「不屈苍花」似乎能将收容单元的地板转化为土壤。",
        "收容单元内的土壤很难被挖掘。",
      ],
    },
  },
  personality: {
    primary: { en: "Compassionate", zh: "仁慈" },
    secondary: {
      en: ["Greedy", "Arrogant"],
      zh: ["贪婪", "傲慢"],
    },
  },
  ego: {
    name: { en: "Cherished Love", zh: "怀爱" },
    weapon: {
      appearance: {
        en: "A blue-toned spear lightly wound with flowers. Holding it fills you with “compassion” — regardless of reaction or strength, you can always swing it quickly. Attack speed: Fast.",
        zh: "以蓝色调为主的长矛，上面有些许花缠绕着。当你握持着这把长矛时，你会感到充满了「慈悲」——无关反应力与力量，你总是可以快速摆动这把长矛。攻击速度：快。",
      },
      risk: "WAW",
      range: { en: "Normal", zh: "一般" },
      damage: { color: "red", min: 18, max: 23 },
      mastered: {
        range: {
          en: "Normal · Extremely fast · Multi-thrust; last hit deals Cyan",
          zh: "一般 · 极快 · 多段突刺，末段带青伤",
        },
        damage: { color: "red", min: 18, max: 23 },
      },
    },
    suit: {
      appearance: {
        en: "Looks like an ordinary suit, but the cuffs and trousers carry pale-blue gradient patterns that writhe. Due to special reasons, like ALEPH gear, it can only be crafted once.",
        zh: "看上去只是普通的西装，但是袖口及裤子上有许多淡蓝色渐变花纹，那花纹在蠕动。由于特殊原因，这件衣服和 ALEPH 一样只能制作一次。",
      },
      risk: "WAW",
      resistances: {
        red: 0.47,
        grey: 0.85,
        black: 0.69,
        cyan: 0.4,
      },
      special: null,
    },
    corrosion: {
      appearance: {
        en: "Where the patterns were, real flowers grow — their “nutrient” is human life. Corrosion risk: ALEPH.",
        zh: "原本是花纹的地方真的长出了花，那花的「养分」是人类的生命力。侵蚀危险等级：ALEPH。",
      },
      resistances: {
        red: 0.4,
        grey: 0.7,
        black: 0.6,
        cyan: 0.28,
      },
      special: {
        en: "Immune to the Unyielding Pale Flower’s forgetting effect.",
        zh: "免疫「不屈之花」的遗忘效果。",
      },
      weaponSkill: {
        en: "Unlocks a throw for the Cherished Love spear: Extreme range, 90 Cyan damage (can friendly-fire Cyan on allies). Cooldown 15s.",
        zh: "怀爱武器解锁投掷：距离极远，造成 90 青伤，可对队员造成青伤，冷却 15 秒。",
      },
    },
    gift: {
      name: { en: "Pale Eye", zh: "苍瞳" },
      appearance: {
        en: "The flower grows on your eye. It does not blind you — it lets you see farther.",
        zh: "这朵花长在了你的眼睛上，但他并没有蒙蔽你，而是让你能够看得更「远」。",
      },
      bonuses: {
        analysis: 1.0,
        instinct: -0.2,
        attachment: 2.0,
        repression: 1.0,
      },
      special: {
        en: "When a HE+ abnormality breaches, Agents wearing this gift are outlined with a white highlight in the wearer’s view.",
        zh: "当 He 级及以上的异想体出逃时，饰品员工视角会被白框高亮标记。",
      },
    },
  },
}
