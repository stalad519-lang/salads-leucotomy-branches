import type { AbnormalityRecord } from "@/lib/abnormality"

/** Synced from NEWRBPJ Locale/Content/en/O03.luau (S-03-0 folagerlak). */
export const folagerlak: AbnormalityRecord = {
  slug: "folagerlak",
  aliases: ["S-03-0", "S-03-0 folagerlak"],
  code: "S-03-0",
  name: { en: "folagerlak", zh: "folagerlak" },
  risk: "WAW",
  pe: 4,
  portrait: "/abnormalities/qe.png",
  portraitThumb: "/abnormalities/qe-thumb.png",
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
