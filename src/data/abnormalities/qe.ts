import type { AbnormalityRecord } from "@/lib/abnormality"

/** Synced from NEWRBPJ Locale/Content/en/O01.luau (H-01-0 Qe). */
export const qe: AbnormalityRecord = {
  slug: "Qe",
  aliases: ["H-01-0", "H-01-0 Qe"],
  code: "H-01-0",
  name: { en: "Qe", zh: "Qe" },
  risk: "TETH",
  mood: 3,
  portrait: "/abnormalities/qe.png",
  portraitThumb: "/abnormalities/qe-thumb.png",
  damage: { color: "red", min: 14, max: 14 },
  energy: {
    bad: "0–0",
    normal: "1–1",
    good: "1–2",
  },
  resistances: {
    red: 0.5,
    grey: 0.8,
    black: 1,
    cyan: 1.2,
  },
  story: {
    en: "An ordinary person from the suburbs contracted a peculiar illness that steadily turned their body deep yellow. To stay normal they had to keep peeling away the yellow regions until their flesh was torn to shreds.",
    zh: "一位来自郊区的普通人染上了一种特殊的疾病导致身体不断变成深黄色，为了保持正常他只能不断扣下黄色区域最终身体血肉模糊。",
  },
  management: {
    en: [
      "When an Agent is killed, Qe seizes parts of their body, attaches them to itself, and fully restores its mood.",
      "When mood reaches 0, Qe breaches containment.",
      "If an Agent's Fortitude level is below II, Qe will kill that Agent outright.",
      "Good work raises Qe's mood by one. Bad work lowers it by one. Normal work does not change mood.",
      "If Qe's mood is 1 and a work result is Bad, Qe will kill that Agent outright. Any Agent killed inside the unit also counts as an execution.",
      "Every 120 seconds Qe randomly loses one point of mood.",
      "Breach entity (qe) MaxHealth is code-designed at 200 (TETH-tier escape).",
    ],
    zh: [
      "被击杀的员工身体部分会被 Qe 夺取并按在身上，并恢满情绪值。",
      "情绪为 0 时 Qe 突破收容。",
      "若员工勇气等级低于 II，Qe 将直接击杀该员工。",
      "工作结果为优时情绪 +1；为差时 −1；为良时不变。",
      "若 Qe 情绪为 1 且工作结果为差，Qe 将直接击杀该员工。收容室内被击杀的员工也计为处刑。",
      "每过 120 秒，Qe 会随机掉一点情绪值。",
      "出逃体（qe）血量由代码设计为 200（TETH 档出逃）。",
    ],
  },
  background: {
    en: [
      "Why does it keep returning to its original form no matter how much I remove it?! What should I do? Someone, please help me.",
      "Can this human experiment really cure this damned disease? I'm being driven mad.",
      "Primary personality: Curious. Secondary personalities: Obsessive, Selfish.",
    ],
    zh: [
      "为什么，不管怎么去除它都会变回原样？！我应该怎么办？谁能帮帮我",
      "这个人体实验真的能解决这该死的疾病吗？我快要被逼疯了",
      "主性格：好奇，副性格：执着，自私",
    ],
  },
  traits: {
    en: [
      "Analysis — On unit enter: if Fortitude is below II, Qe executes the Agent (o01Kill).",
      "Attachment — Always Very Low at every level.",
    ],
    zh: [
      "解析 — 进入收容室时：勇气低于 II 则处刑该员工（o01Kill）。",
      "沟通 — 全程极低。",
    ],
  },
  workPreference: {
    analysis: {
      rates: ["Low", "Normal", "High", "High", "VeryHigh"],
    },
    instinct: {
      rates: ["Normal", "Normal", "High", "VeryHigh", "VeryHigh"],
    },
    attachment: {
      rates: ["VeryLow", "VeryLow", "VeryLow", "VeryLow", "VeryLow"],
    },
    repression: {
      rates: ["Low", "Normal", "High", "High", "VeryHigh"],
    },
  },
  workNarration: {
    analysis: {
      en: [
        "{1} sketches the pattern of yellow growth crawling across Qe's body.",
        "{1} notes how fast fresh fluid beads form after each peel.",
        "{1} compares today's lesions against yesterday's chart, line by line.",
      ],
      zh: [
        "{1}勾画着爬满Qe身体的黄色增生纹路。",
        "{1}记录每次剥离后新渗出的液体汇聚得有多快。",
        "{1}逐行对照今天与昨天的病灶图表。",
      ],
    },
    instinct: {
      en: [
        "{1} tries to wipe away the yellow fluid seeping around Qe.",
        "{1} scrapes a sticky film of yellow off the floor near Qe's feet.",
        "{1} carefully peels a thin yellow crust from the containment wall.",
      ],
      zh: [
        "{1}试着清理Qe周围渗出的黄色液体。",
        "{1}刮去Qe脚边地上那层黏腻的黄色薄膜。",
        "{1}小心剥离收容壁上结成的一层黄痂。",
      ],
    },
    attachment: {
      en: [
        "{1} sits close to Qe and talks in a low voice, as if to a sick patient.",
        "{1} holds Qe's trembling hand until the shaking slows.",
        "{1} stays within arm's reach, watching Qe the way one watches someone in pain.",
      ],
      zh: [
        "{1}坐在Qe身旁低声说话，像在陪护一名病人。",
        "{1}握住Qe发抖的手，直到颤抖渐渐平息。",
        "{1}始终待在伸手可及处，像看护疼痛中的人那样盯着Qe。",
      ],
    },
    repression: {
      en: [
        "{1} forces Qe's hands away before another strip of skin can be torn free.",
        "{1} tightens the restraints and stops Qe from chasing the yellow down its own arm.",
        "{1} presses Qe back against the wall when it starts to thrash.",
      ],
      zh: [
        "{1}强行掰开Qe的手，不让它再撕下一片皮肤。",
        "{1}勒紧约束，阻止Qe顺着手臂继续抠掉黄色部分。",
        "{1}在Qe开始挣扎时把它按回墙边。",
      ],
    },
  },
  personality: {
    primary: { en: "Curious", zh: "好奇" },
    secondary: {
      en: ["Obsessive", "Selfish"],
      zh: ["执着", "自私"],
    },
  },
  // No named submitter → dossier shows Salad (facility author)
  ego: {
    name: { en: "Fusion", zh: "融合" },
    weapon: {
      appearance: {
        en: "A wrist weapon forged with Qe's body as the weapon frame.",
        zh: "由 Qe 作为武器骨架为原型制作的腕类武器。",
      },
      risk: "WAW",
      range: { en: "Very close", zh: "极近" },
      damage: { color: "grey", min: 4, max: 5 },
      mastered: {
        range: { en: "Very close", zh: "极近" },
        damage: { color: "grey", min: 5, max: 7 },
      },
    },
    suit: {
      appearance: {
        en: "A half-yellow suit modeled on Qe's corroded skin, worn in place of the standard work uniform.",
        zh: "参考 Qe 被侵蚀的皮肤制作而成的通体半黄色西装。",
      },
      risk: "HE",
      resistances: {
        red: 0.85,
        grey: 0.75,
        black: 0.7,
        cyan: 1.05,
      },
      special: {
        en: "Replaces the work uniform and improves the Agent's resistances to a balanced average.",
        zh: "替换工作服，提升员工抗性等平均水平。",
      },
    },
    corrosion: {
      appearance: {
        en: "The fabric now resembles Qe's skin more closely.",
        zh: "原本的布料更接近于 Qe 的皮肤了。",
      },
      resistances: {
        red: 0.75,
        grey: 0.65,
        black: 0.55,
        cyan: 0.95,
      },
      special: {
        en: "EGO erosion lets the Agent blink through space by overcharging the Fusion weapon.",
        zh: "EGO 侵蚀，使得员工能通过激发融合武器实现穿梭的能力。",
      },
      weaponSkill: {
        en: "Unlocks the Fusion weapon skill (R) when suit erosion reaches stage 1.",
        zh: "套装侵蚀达到阶段 1 后解锁同名武器技能（R）。",
      },
    },
    gift: {
      name: { en: "Bone Spike", zh: "骨刺" },
      appearance: {
        en: "A broken bone remains fixed to the head forever.",
        zh: "断掉的骨头永远固定在了头部。",
      },
      bonuses: {
        analysis: 0.02,
        instinct: 0.02,
        attachment: 0.02,
        repression: 0.02,
      },
      special: {
        en: "Slightly improves all four work attributes.",
        zh: "小幅提升全部四种工作属性。",
      },
    },
  },
}
