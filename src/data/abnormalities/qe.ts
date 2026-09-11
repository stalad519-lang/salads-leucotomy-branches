import type { AbnormalityRecord } from "@/lib/abnormality"

/** Synced from NEWRBPJ Locale/Content/en/O01.luau (H-01-0 Qe). */
export const qe: AbnormalityRecord = {
  slug: "Qe",
  aliases: ["H-01-0", "H-01-0 Qe"],
  code: "H-01-0",
  name: { en: "Qe", zh: "Qe" },
  risk: "TETH",
  pe: 3,
  portrait: "/abnormalities/qe.png",
  portraitThumb: "/abnormalities/qe-thumb.png",
  damage: { color: "red", min: 14, max: 14 },
  energy: {
    bad: "0–4",
    normal: "5–9",
    good: "10–14",
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
    ],
    zh: [
      "被击杀的员工身体部分会被 Qe 夺取并按在身上，并恢满情绪值。",
      "情绪为 0 时 Qe 突破收容。",
      "若员工勇气等级低于 II，Qe 将直接击杀该员工。",
      "工作结果为优时情绪 +1；为差时 −1；为良时不变。",
      "若 Qe 情绪为 1 且工作结果为差，Qe 将直接击杀该员工。收容室内被击杀的员工也计为处刑。",
      "每过 120 秒，Qe 会随机掉一点情绪值。",
    ],
  },
  personality: {
    primary: { en: "Curious", zh: "好奇" },
    secondary: {
      en: ["Obsessive", "Selfish"],
      zh: ["执着", "自私"],
    },
  },
  ego: {
    name: { en: "Fusion", zh: "融合" },
    weapon: {
      appearance: {
        en: "A wrist weapon forged with Qe's body as the weapon frame.",
        zh: "由 Qe 作为武器骨架为原型制作的腕类武器。",
      },
      risk: "WAW",
      range: { en: "Very close", zh: "极近" },
      damage: { color: "grey", min: 35, max: 40 },
      mastered: {
        range: { en: "Very close", zh: "极近" },
        damage: { color: "grey", min: 50, max: 60 },
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
