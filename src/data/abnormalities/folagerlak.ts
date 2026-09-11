import type { AbnormalityRecord } from "@/lib/abnormality"

/** Synced from NEWRBPJ Locale/Content/en/O03.luau (S-03-0 folagerlak). */
export const folagerlak: AbnormalityRecord = {
  slug: "folagerlak",
  aliases: ["S-03-0", "S-03-0 folagerlak"],
  code: "S-03-0",
  name: { en: "folagerlak", zh: "folagerlak" },
  risk: "WAW",
  mood: 4,
  portrait: "/abnormalities/folagerlak.jpg",
  portraitThumb: "/abnormalities/folagerlak.jpg",
  damage: { color: "black", min: 32, max: 32 },
  energy: {
    bad: "0–2",
    normal: "5–8",
    good: "10–15",
  },
  resistances: {
    red: 1,
    grey: 1,
    black: 1,
    cyan: 1,
  },
  story: {
    en: "Unknown",
    zh: "未知",
  },
  management: {
    en: [
      "Good work raises folagerlak's mood by one. Bad work lowers it by one. Normal work does not change mood.",
    ],
    zh: [
      "工作结果为优时情绪 +1；为差时 −1；为良时不变。",
    ],
  },
  background: {
    en: ["Primary personality: Calm. Secondary personalities: Patient, Loyal."],
    zh: ["主性格：冷静。副性格：耐心、忠诚。"],
  },
  workPreference: {
    analysis: {
      rates: ["Low", "Normal", "Normal", "High", "High"],
    },
    instinct: {
      rates: ["Normal", "Normal", "High", "High", "VeryHigh"],
    },
    attachment: {
      rates: ["Low", "Normal", "High", "High", "VeryHigh"],
    },
    repression: {
      rates: ["VeryLow", "Low", "Normal", "Normal", "High"],
    },
  },
  workNarration: {
    analysis: {
      en: [
        "{1} records folagerlak's posture and stillness.",
        "{1} notes how little folagerlak seems to move.",
      ],
      zh: [
        "{1}记录着 folagerlak 的姿态与静止。",
        "{1}记下 folagerlak 几乎不怎么移动。",
      ],
    },
    instinct: {
      en: [
        "{1} approaches folagerlak cautiously.",
        "{1} observes folagerlak from a safe distance.",
      ],
      zh: [
        "{1}小心靠近 folagerlak。",
        "{1}保持安全距离观察 folagerlak。",
      ],
    },
    attachment: {
      en: [
        "{1} speaks softly toward folagerlak.",
        "{1} waits for any response from folagerlak.",
      ],
      zh: [
        "{1}轻声对 folagerlak 说话。",
        "{1}等待 folagerlak 的任何回应。",
      ],
    },
    repression: {
      en: [
        "{1} keeps a firm stance while facing folagerlak.",
        "{1} maintains pressure so folagerlak does not advance.",
      ],
      zh: [
        "{1}面对 folagerlak 时保持稳固站姿。",
        "{1}施压，不让 folagerlak 前进。",
      ],
    },
  },
  personality: {
    primary: { en: "Calm", zh: "冷静" },
    secondary: {
      en: ["Patient", "Loyal"],
      zh: ["耐心", "忠诚"],
    },
  },
  // No E.G.O extracted yet in-game
  ego: null,
}
