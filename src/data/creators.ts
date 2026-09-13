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
  {
    slug: "邮箱",
    name: "邮箱",
    portrait: "/creators/youxiang.jpg",
    role: { en: "Artist", zh: "画师" },
  },
  {
    slug: "WATER_",
    name: "WATER_",
    portrait: "/creators/water.jpg",
    role: { en: "Artist", zh: "画师" },
  },
  {
    slug: "不改",
    name: "不改",
    portrait: "/creators/bugai.jpg",
    role: { en: "Mascot", zh: "吉祥物" },
  },
  {
    slug: "男玩",
    name: "男玩",
    portrait: "/creators/nanwan.jpg",
    role: { en: "Modeler", zh: "建模师" },
  },
  {
    slug: "萌克",
    name: "萌克",
    portrait: "/creators/mengke.jpg",
    role: { en: "Artist", zh: "画师" },
  },
  {
    slug: "云陌商",
    name: "云陌商",
    portrait: "/creators/yunmoshang.jpg",
    role: { en: "Artist", zh: "画师" },
  },
  {
    slug: "言",
    name: "言",
    portrait: "/creators/yan.jpg",
    role: { en: "Artist", zh: "画师" },
  },
  {
    slug: "凉菜",
    name: "凉菜",
    portrait: "/creators/liangcai.jpg",
    role: { en: "Artist", zh: "画师" },
  },
  {
    slug: "小E",
    name: "小E",
    portrait: "/creators/xiaoe.jpg",
    role: { en: "Artist", zh: "画师" },
  },
]
