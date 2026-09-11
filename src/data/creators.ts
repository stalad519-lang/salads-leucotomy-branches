import type { Localized } from "@/lib/abnormality"

export type CreatorRecord = {
  slug: string
  name: string
  portrait: string
  role: Localized
}

export const creators: CreatorRecord[] = [
  {
    slug: "Salad",
    name: "Salad",
    portrait: "/creators/salad.png",
    role: { en: "Game author", zh: "游戏总作者" },
  },
  {
    slug: "Stalad",
    name: "Stalad",
    portrait: "/creators/stalad.png",
    role: { en: "Composer", zh: "曲师" },
  },
]
