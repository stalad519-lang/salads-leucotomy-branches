import type { Locale } from "@/lib/types"

export const LOCALES: Locale[] = ["en", "zh"]
export const DEFAULT_LOCALE: Locale = "en"
export const LOCALE_KEY = "slb-wiki.locale"
export const LOCALE_EVENT = "slb-wiki:locale"

export const messages = {
  en: {
    navMain: "Main page",
    navRecent: "Recent changes",
    navAll: "All pages",
    newPage: "New page",
    newShort: "New",
    search: "Search the wiki…",
    searchAria: "Search the wiki",
    allResults: "View all results",
    random: "Random page",
    settings: "Wiki settings",
    openMenu: "Open menu",
    language: "Language",
    english: "English",
    chinese: "中文",
    page: "Page",
    edit: "Edit",
    create: "Create",
    history: "History",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete page",
    write: "Write",
    preview: "Preview",
    title: "Title",
    categories: "Categories",
    summary: "Edit summary",
    infobox: "Infobox (optional)",
    infoboxHelp: "Use for abnormalities, damage types, and work. Values can include [[links]].",
    infoboxTitle: "Infobox heading",
    infoboxCaption: "Caption",
    addRow: "Add a row",
    removeRow: "Remove",
    lastEdited: "Last edited",
    viewHistory: "View history",
    contents: "Contents",
    uncategorized: "Uncategorized",
    missingPage: "This page does not exist yet. Create it, then link it with",
    createPage: "Create this page",
    usingEnglish: "Chinese is missing, so English is shown.",
    editingZh: "You are editing Chinese. Leave a field empty to keep showing the English text.",
    editingEn: "You are editing the English source. Other languages fall back to this text.",
    englishSource: "English source",
    settingsName: "Wiki name",
    settingsTagline: "Tagline",
    restore: "Restore starter pages",
    settingsHelp:
      "Names are stored in this browser. Language follows the device on first visit; change it here to keep a preference. Restore replaces starter articles that share the same slug.",
    footer:
      "Fan wiki for Salad's leucotomy branches, a Roblox Lobotomy Corporation game. Files in this browser stay here until you publish.",
    communityQQ: "QQ Channel",
    communityQQName: "Salad's Lobotomy Branch Community",
    communityQQId: "pd88206495",
    recentIntro: "Sorted by the time this browser last saved the page.",
    noPages: "No pages yet.",
    saved: "Saved",
    allPagesIntro: (n: number) => `${n} pages. Categories:`,
    none: " none",
    emptyWiki: "No articles yet. Create one to start the wiki.",
    searchResults: "Search results",
    searchHint: "Type an abnormality, damage type, or creator.",
    searchEmpty: (q: string) => `No results for “${q}”. Try another word, or create a page with that title.`,
    categoryTitle: (name: string) => `Category: ${name}`,
    categoryCount: (n: number) =>
      n === 1 ? "1 page in this category." : `${n} pages in this category.`,
    backAll: "All pages",
    categoryEmpty: (name: string) =>
      `This category is empty. Add “${name}” in an article’s category field.`,
    historyOf: (title: string) => `History of ${title}`,
    noHistory: "This page does not exist, so it has no history.",
    historyHelp: "Up to 20 local revisions. This is not a shared server history.",
    newIntro: "Start with a precise title. You can later link it with",
    startWriting: "Start writing",
    alreadyExists: "A page with this title already exists. Continue to edit it.",
    titleNeeded: "Please enter a title.",
    saveFailed: "Could not save. Try again.",
    deleteConfirm: (title: string) => `Delete “${title}”? This only affects this browser.`,
    notFoundTitle: "This address is not an article",
    notFoundBody: "Articles live at",
    backHome: "Back to the main page",
    missingLink: "This page has not been created",
    gameName: "Salad's leucotomy branches",
    placeholderTitle: "e.g. Abnormality code, Red damage, Analysis",
    noPreview: "*Nothing to preview yet.*",
    label: "Label",
    value: "Value",
    defaultTagline: "Roblox Lobotomy Corporation fan wiki",
    archiveEyebrow: "File index",
    categoryFiles: "files",
    backLobby: "All categories",
    pickScene: "Open a category",
    catAbnormalitiesDesc: "Held files, sorted by risk. H-01-0 lives here.",
    catBasicsDesc: "Four damage colors, four works, and primary / secondary personalities.",
    catCreatorsDesc: "Salad, Stalad, artists 邮箱 / WATER_ / 萌克 / 云陌商 / 言 / 凉菜 / 小E, mascot 不改, and modeler 男玩.",
    catPersonalitiesDesc:
      "Full Personality Codex: 8 primaries, 19 traits, 16 special unlocks — names, descriptions, bonuses, acquire.",
  },
  zh: {
    navMain: "首页",
    navRecent: "最近更改",
    navAll: "所有页面",
    newPage: "新建页面",
    newShort: "新建",
    search: "搜索百科…",
    searchAria: "搜索百科",
    allResults: "查看全部结果",
    random: "随机条目",
    settings: "百科设置",
    openMenu: "打开菜单",
    language: "语言",
    english: "English",
    chinese: "中文",
    page: "页面",
    edit: "编辑",
    create: "创建",
    history: "历史",
    save: "保存",
    cancel: "取消",
    delete: "删除页面",
    write: "撰写",
    preview: "预览",
    title: "标题",
    categories: "分类",
    summary: "编辑摘要",
    infobox: "信息框（可选）",
    infoboxHelp: "适合异想体、伤害类型和工作。内容里可以写 [[链接]]。",
    infoboxTitle: "信息框标题",
    infoboxCaption: "副标题",
    addRow: "添加一行",
    removeRow: "删除",
    lastEdited: "最近修改于",
    viewHistory: "查看历史",
    contents: "目录",
    uncategorized: "未分类",
    missingPage: "还没有这个条目。创建后可以用下面的语法链过来：",
    createPage: "创建此页面",
    usingEnglish: "中文尚未翻译，已显示英语原文。",
    editingZh: "正在编辑中文。某栏留空时，前台会继续显示英语。",
    editingEn: "正在编辑英语原文。其他语言缺译时会回退到这里。",
    englishSource: "英语原文",
    settingsName: "维基名称",
    settingsTagline: "副标题",
    restore: "恢复起始条目",
    settingsHelp:
      "名称只存在这台浏览器里。首次打开会跟设备语言；在这里改过之后会记住你的选择。恢复会覆盖相同短链的起始条目。",
    footer: "Salad's leucotomy branches 的同人百科（Roblox 脑叶公司）。内容先存在本机，发布后才给所有人看。",
    communityQQ: "QQ 频道",
    communityQQName: "沙拉的脑叶分部社区",
    communityQQId: "pd88206495",
    recentIntro: "按本机最近保存时间排列。",
    noPages: "还没有任何页面。",
    saved: "已保存",
    allPagesIntro: (n: number) => `共 ${n} 篇。分类：`,
    none: " 暂无",
    emptyWiki: "还没有条目。可以先新建一页。",
    searchResults: "搜索结果",
    searchHint: "可搜异想体、伤害类型或创作者。",
    searchEmpty: (q: string) => `没有找到「${q}」。可以换个词，或新建同名页面。`,
    categoryTitle: (name: string) => `分类：${name}`,
    categoryCount: (n: number) => `${n} 篇页面属于此分类。`,
    backAll: "所有页面",
    categoryEmpty: (name: string) => `这个分类还是空的。编辑时在分类栏填入「${name}」即可加入。`,
    historyOf: (title: string) => `${title} 的历史`,
    noHistory: "此页面还不存在，因此没有历史。",
    historyHelp: "只保存在本机，最多 20 条。这不是多人协作的版本库。",
    newIntro: "先起一个准确的标题。之后可以用维基链接引用：",
    startWriting: "开始撰写",
    alreadyExists: "已有同名页面，继续会进入编辑。",
    titleNeeded: "请填写条目标题。",
    saveFailed: "保存失败，请再试一次。",
    deleteConfirm: (title: string) => `确定删除「${title}」？此操作只影响本机浏览器。`,
    notFoundTitle: "没有这个地址",
    notFoundBody: "条目在",
    backHome: "回到首页",
    missingLink: "此页面尚未创建",
    gameName: "Salad's leucotomy branches",
    placeholderTitle: "例如：异想体编号、红伤、解析",
    noPreview: "*还没有正文。*",
    label: "标签",
    value: "内容",
    defaultTagline: "Roblox 脑叶公司同人百科",
    archiveEyebrow: "档案目录",
    categoryFiles: "篇",
    backLobby: "全部分类",
    pickScene: "选择分类",
    catAbnormalitiesDesc: "在库个体，按危险等级排列。H-01-0 在这里。",
    catBasicsDesc: "四色伤害、四种工作、主性格与副性格。",
    catCreatorsDesc: "Salad、Stalad、画师 邮箱 / WATER_ / 萌克 / 云陌商 / 言 / 凉菜 / 小E、吉祥物 不改，以及建模师 男玩。",
    catPersonalitiesDesc:
      "完整性格图鉴：8 主性格、19 特质、16 特殊解锁——名称、描述、加成与获得方式。",
  },
} as const

export type MessageKey = {
  [K in keyof typeof messages.en]: (typeof messages.en)[K] extends string ? K : never
}[keyof typeof messages.en]

export function t(locale: Locale, key: MessageKey): string {
  return messages[locale][key] || messages.en[key]
}

export function localeTag(locale: Locale) {
  return locale === "zh" ? "zh-CN" : "en"
}

/** Prefer Chinese when the device language is zh*; otherwise English. */
export function detectDeviceLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE
  const list =
    navigator.languages && navigator.languages.length > 0
      ? [...navigator.languages]
      : [navigator.language]
  for (const raw of list) {
    if (!raw) continue
    if (raw.toLowerCase().startsWith("zh")) return "zh"
  }
  return "en"
}

export const PRIMARY_CATEGORIES = [
  "Abnormalities",
  "Basics",
  "Personalities",
  "Creators",
] as const

export const categoryLabels: Record<string, { en: string; zh: string }> = {
  Abnormalities: { en: "Abnormalities", zh: "异想体" },
  Basics: { en: "Basics", zh: "基本信息" },
  Personalities: { en: "Personalities", zh: "性格" },
  Creators: { en: "Creators", zh: "创作者" },
  Help: { en: "Help", zh: "帮助" },
}

const CATEGORY_ALIASES: Record<string, string> = {
  Game: "Basics",
  Damage: "Basics",
  Characters: "Basics",
  Locations: "Basics",
  Mechanics: "Basics",
  异想体: "Abnormalities",
  基本信息: "Basics",
  伤害: "Basics",
  性格: "Personalities",
  性格图鉴: "Personalities",
  机制: "Basics",
  创作者: "Creators",
  创作者列表: "Creators",
}

export function categoryKey(name: string) {
  const n = name.trim()
  if (CATEGORY_ALIASES[n]) return CATEGORY_ALIASES[n]
  for (const [key, labels] of Object.entries(categoryLabels)) {
    if (n === key || n === labels.en || n === labels.zh) return key
  }
  return n
}

export function categoryLabel(name: string, locale: Locale) {
  const key = categoryKey(name)
  return categoryLabels[key]?.[locale] || name
}

export const categoryBlurbs: Record<
  (typeof PRIMARY_CATEGORIES)[number],
  MessageKey
> = {
  Abnormalities: "catAbnormalitiesDesc",
  Basics: "catBasicsDesc",
  Personalities: "catPersonalitiesDesc",
  Creators: "catCreatorsDesc",
}

let localeCache: Locale = DEFAULT_LOCALE
let localeHydrated = false
const localeListeners = new Set<() => void>()

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "zh"
}

export function getLocaleSnapshot(): Locale {
  return localeCache
}

export function getServerLocaleSnapshot(): Locale {
  return DEFAULT_LOCALE
}

export function setLocale(next: Locale) {
  localeCache = next
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCALE_KEY, next)
    document.documentElement.lang = localeTag(next)
  }
  for (const listener of localeListeners) listener()
}

export function subscribeLocale(onStoreChange: () => void) {
  localeListeners.add(onStoreChange)
  if (!localeHydrated && typeof window !== "undefined") {
    localeHydrated = true
    const stored = window.localStorage.getItem(LOCALE_KEY)
    const next =
      stored && isLocale(stored) ? stored : detectDeviceLocale()
    queueMicrotask(() => {
      if (next !== localeCache) {
        setLocale(next)
      } else {
        document.documentElement.lang = localeTag(localeCache)
        // Persist device pick so later visits stay stable until user changes it in Settings
        if (!stored) {
          window.localStorage.setItem(LOCALE_KEY, next)
        }
      }
    })
  }
  return () => {
    localeListeners.delete(onStoreChange)
  }
}
