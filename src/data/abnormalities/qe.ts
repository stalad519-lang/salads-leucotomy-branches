import type { AbnormalityRecord } from "@/lib/abnormality"

export const qe: AbnormalityRecord = {
  slug: "Qe",
  aliases: ["H-01-0", "H-01-0 Qe"],
  code: "H-01-0",
  name: { en: "Qe", zh: "Qe" },
  risk: "HE",
  pe: 3,
  portrait: "/abnormalities/qe.png",
  portraitFocus: "80% 40%",
  damage: { color: "grey", min: 6, max: 9 },
  energy: {
    bad: "0–1",
    normal: "2–4",
    good: "5–8",
  },
  resistances: {
    red: 0.5,
    grey: 1,
    black: 0.75,
    cyan: 1,
  },
  story: {
    en: "Qe was an ordinary person who caught a disease that keeps turning the body a deeper yellow, worst of all on the flesh itself. To keep the body usable they tried every cure they could find. It only got worse. They started tearing the yellowed parts off with their own hands. It did not help.",
    zh: "这是一位普通人染上了一种疾病，导致身体不断变成深黄色，尤其是身体部分。为了保持身体正常，他只能不断找各种方法尝试治愈，却越来越严重。它开始尝试用手活生生地撕下感染变黄的部分，不过也无济于事。",
  },
  management: {
    en: [
      "Body parts of killed employees are taken by Qe, pressed onto its body, and PE is fully restored.",
      "When PE reaches 0, Qe breaches containment.",
      "If the employee’s Analysis (解构) level is below 2, Qe instantly kills that employee.",
      "If Qe’s PE is 1 and the work result is Bad, Qe instantly kills that employee.",
      "Every 120 seconds, Qe randomly loses 1 PE.",
    ],
    zh: [
      "被击杀的员工身体部分会被 Qe 夺取并按在身上，并恢满情绪值。",
      "情绪为 0 时 Qe 突破收容。",
      "若员工解构等级低于 2 级，Qe 将直接击杀该员工。",
      "若 Qe 情绪为 1 且工作结果为差，Qe 将直接击杀该员工。",
      "每过 120 秒，Qe 会随机掉一点情绪值。",
    ],
  },
  personality: {
    primary: { en: "Curious", zh: "好奇" },
    secondary: {
      en: ["Persistent", "Selfish"],
      zh: ["执着", "自私"],
    },
  },
  ego: {
    name: { en: "Fusion", zh: "融合" },
    weapon: {
      appearance: {
        en: "A wrist weapon built from Qe’s skeleton as the prototype.",
        zh: "由 Qe 的骨架为原型制作的腕类武器。",
      },
      risk: "WAW",
      range: { en: "Very close", zh: "极近" },
      damage: { color: "red", min: 35, max: 50 },
      mastered: {
        range: { en: "Close", zh: "近" },
        damage: { color: "red", min: 40, max: 60 },
      },
    },
    suit: {
      appearance: {
        en: "A full suit in half-yellow, cut after the look of Qe’s eroded skin.",
        zh: "参考 Qe 被侵蚀的皮肤制作而成的通体半黄色西装。",
      },
      risk: "HE",
      resistances: {
        red: 0.68,
        grey: 1.2,
        black: 0.9,
        cyan: 2,
      },
      special: null,
    },
    corrosion: {
      appearance: {
        en: "The cloth sits closer to Qe’s own skin.",
        zh: "原本的布料更接近于 Qe 的皮肤了。",
      },
      resistances: {
        red: 0.5,
        grey: 1,
        black: 0.75,
        cyan: 1.5,
      },
      special: {
        en: "15% chance to ignore incoming Red damage.",
        zh: "受到的红色伤害有 15% 的概率免疫。",
      },
      weaponSkill: {
        en: "Lets the employee trigger Fusion and travel through space.",
        zh: "使得员工能通过激发融合实现穿梭的能力。",
      },
    },
    gift: {
      name: { en: "Bone", zh: "骨头" },
      appearance: {
        en: "Why? No matter how I remove it, it always goes back to how it was! What am I supposed to do? Can anyone help me?",
        zh: "为什么，不管怎么去除它都会变回原样？！我应该怎么办？谁能帮帮我？",
      },
      bonuses: {
        analysis: 0.4,
        instinct: 0.5,
        attachment: 0,
        repression: -0.2,
      },
      special: null,
    },
  },
}
