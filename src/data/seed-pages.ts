import type { PageCopy, WikiPage } from "@/lib/types"

const createdAt = "2026-09-10T12:00:00.000Z"

export const defaultSettings = {
  name: "Salad's leucotomy branches",
  tagline: "",
}

function page(
  slug: string,
  en: PageCopy,
  zh?: Partial<PageCopy>
): WikiPage {
  return {
    slug,
    locales: zh ? { en, zh } : { en },
    createdAt,
    updatedAt: createdAt,
    revisions: [
      {
        at: createdAt,
        locale: "en",
        summary: "Initial version",
        title: en.title,
        content: en.content,
        categories: en.categories,
        infobox: en.infobox,
      },
    ],
  }
}

export const seedPages: WikiPage[] = [
  page(
    "Main_Page",
    {
      title: "Main Page",
      categories: ["Help"],
      content: `Welcome to the wiki for **Salad's leucotomy branches**.

This is a game encyclopedia: characters, procedures, locations, and the branching routes. English is the source language. Switch to 中文 in the header; any article without a Chinese translation keeps the English text.

## Start here

* [[Salad's leucotomy branches|The game]] — overview, platform, and tone
* [[Salad]] — the person the title names
* [[Leucotomy]] — the procedure at the center of play
* [[Branches]] — how routes split and close
* [[The Q]] — the emblem (English only, to show fallback)

## How to write

See [[Help:Editing]] for wiki links, categories, and infoboxes. Create a page, then point to it with \`[[Page name]]\`.`,
    },
    {
      title: "首页",
      categories: ["Help"],
      content: `欢迎来到 **Salad's leucotomy branches** 的游戏百科。

这里收录人物、术式、地点和分支路线。网站以英语为原文。顶栏可切到中文；还没有中文的条目会继续显示英语。

## 从这里开始

* [[Salad's leucotomy branches|游戏]] — 概述、平台与气质
* [[Salad]] — 标题里的那个人
* [[Leucotomy]] — 玩法核心的术式
* [[Branches]] — 路线如何分叉与闭合
* [[The Q]] — 徽章（本条暂无中文，用来演示回退）

## 怎么写

编辑方法见 [[Help:Editing]]。新建页面后，用 \`[[条目名]]\` 链过去。`,
    }
  ),
  page(
    "Salad's_leucotomy_branches",
    {
      title: "Salad's leucotomy branches",
      categories: ["Game"],
      infobox: {
        heading: "Salad's leucotomy branches",
        caption: "Game",
        rows: [
          { label: "Type", value: "Narrative / route game" },
          { label: "Setting", value: "A clinic of branching wards" },
          { label: "Focus", value: "[[Leucotomy]], [[Branches]], [[Salad]]" },
          { label: "Emblem", value: "[[The Q]]" },
        ],
      },
      content: `**Salad's leucotomy branches** is a game about a mind that is opened, mapped, and split. Players follow [[Salad]] through wards where a [[Leucotomy|leucotomy]] is not only medical history but a playable choice: cut, spare, or follow a nerve into another [[Branches|branch]].

## Tone

The emblem is a brain inside a Q-shaped mark. Routes are clinical on the surface and personal underneath. Articles on this wiki should stay encyclopedic: what a thing is, where it appears, and how it connects, not walkthrough spoilers unless a page is clearly marked.

## On this wiki

Use infoboxes for games, people, and procedures. Keep titles in English so links stay stable; Chinese is an overlay, not a second set of page names.

If you are filling lore, start with [[Salad]], [[Leucotomy]], and [[Branches]].`,
    },
    {
      title: "Salad's leucotomy branches",
      categories: ["Game"],
      infobox: {
        heading: "Salad's leucotomy branches",
        caption: "游戏",
        rows: [
          { label: "类型", value: "叙事 / 路线游戏" },
          { label: "舞台", value: "不断分叉的病房" },
          { label: "核心", value: "[[Leucotomy]]、[[Branches]]、[[Salad]]" },
          { label: "徽章", value: "[[The Q]]" },
        ],
      },
      content: `**Salad's leucotomy branches** 讲的是一个被打开、测绘、再切开的意识。玩家跟着 [[Salad]] 走过一间间病房：[[Leucotomy|白质切开]] 不只是医学史，也是可玩的选择——切断、留下，或顺着一条神经走进另一条 [[Branches|分支]]。

## 气质

徽章是 Q 形框里的脑。路线表面像病历，底下是私人的。本百科的写法应像词条：它是什么、在哪出现、和谁相连。除非页面标明是攻略，否则少写剧透逐步操作。

## 在本站

游戏、人物、术式用信息框。条目标题尽量保持英语，这样链接稳定；中文是覆盖层，不是第二套页面名。

补设定时，从 [[Salad]]、[[Leucotomy]]、[[Branches]] 开始即可。`,
    }
  ),
  page(
    "Salad",
    {
      title: "Salad",
      categories: ["Characters"],
      infobox: {
        heading: "Salad",
        caption: "Character",
        rows: [
          { label: "Role", value: "Title character / viewpoint" },
          { label: "Appears in", value: "[[Salad's leucotomy branches]]" },
          { label: "Tied to", value: "[[Leucotomy]], [[Branches]]" },
        ],
      },
      content: `**Salad** is the name the game carries in its title. On this wiki, Salad is treated as the viewpoint the [[Branches]] are drawn around: the person who enters the wards, receives or refuses a [[Leucotomy]], and whose memories may not stay in one piece.

## Notes for editors

Replace this stub with confirmed names, pronouns, and appearances as the game is documented. Until then, keep links pointing here so later facts have a home.`,
    },
    {
      title: "Salad",
      categories: ["Characters"],
      infobox: {
        heading: "Salad",
        caption: "人物",
        rows: [
          { label: "身份", value: "标题人物 / 视角" },
          { label: "出现于", value: "[[Salad's leucotomy branches]]" },
          { label: "相关", value: "[[Leucotomy]]、[[Branches]]" },
        ],
      },
      content: `**Salad** 是游戏标题里的那个名字。在本百科里，Salad 是 [[Branches]] 围绕的视角：走进病房、接受或拒绝 [[Leucotomy]] 的人，记忆不一定仍是一整块。

## 给编辑

有确切姓名、代词和出场后，请改掉这篇草稿。现在先把链接指到这里，方便以后补事实。`,
    }
  ),
  page(
    "Leucotomy",
    {
      title: "Leucotomy",
      categories: ["Mechanics"],
      infobox: {
        heading: "Leucotomy",
        caption: "Procedure / mechanic",
        rows: [
          { label: "Also called", value: "White-matter cut" },
          { label: "Used by", value: "[[Salad]]" },
          { label: "Produces", value: "[[Branches]]" },
        ],
      },
      content: `A **leucotomy** (historically a cut through white matter of the brain) is the central operation in [[Salad's leucotomy branches]]. In play it is both a story beat and a routing tool: each cut can close a symptom, a memory, or a whole corridor of the clinic.

## On the wiki

Describe what the player is asked to do, not a full medical lecture. Link outcomes to [[Branches]] and the people who live with the result, starting with [[Salad]].`,
    },
    {
      title: "白质切开",
      categories: ["Mechanics"],
      infobox: {
        heading: "Leucotomy",
        caption: "术式 / 机制",
        rows: [
          { label: "也称为", value: "白质切开" },
          { label: "相关人物", value: "[[Salad]]" },
          { label: "结果", value: "[[Branches]]" },
        ],
      },
      content: `**Leucotomy**（历史上指切开脑白质）是 [[Salad's leucotomy branches]] 的核心操作。在游戏里它既是剧情节点，也是路线工具：每一刀都可能关掉一种症状、一段记忆，或整条病房走廊。

## 在本百科

写清玩家被要求做什么，而不是医学讲义。把结果链到 [[Branches]]，以及承受结果的人，首先是 [[Salad]]。`,
    }
  ),
  page(
    "Branches",
    {
      title: "Branches",
      categories: ["Mechanics"],
      infobox: {
        heading: "Branches",
        caption: "Route structure",
        rows: [
          { label: "Opened by", value: "[[Leucotomy]]" },
          { label: "Followed by", value: "[[Salad]]" },
        ],
      },
      content: `**Branches** are the split routes of [[Salad's leucotomy branches]]. A branch is a corridor the story can take after a choice — often after a [[Leucotomy]] — and may not reconnect with the path you left.

Document branches by what they change (who is present, which ward is open, which memory remains), not by a numbered ending list unless the game names endings that way.`,
    },
    {
      title: "分支",
      categories: ["Mechanics"],
      infobox: {
        heading: "Branches",
        caption: "路线结构",
        rows: [
          { label: "由何打开", value: "[[Leucotomy]]" },
          { label: "由谁走完", value: "[[Salad]]" },
        ],
      },
      content: `**Branches** 是 [[Salad's leucotomy branches]] 的分叉路线。一条分支是选择之后故事能走进的走廊——常常发生在一次 [[Leucotomy]] 之后——而且未必会和你离开的那条路再会合。

记录分支时写它改变了什么（谁在场、哪间病房开着、哪段记忆还在），不要急着做成编号结局表，除非游戏自己那样命名。`,
    }
  ),
  page("The_Q", {
    title: "The Q",
    categories: ["Game"],
    infobox: {
      heading: "The Q",
      caption: "Emblem",
      rows: [
        { label: "Form", value: "Brain inside a Q-shaped mark" },
        { label: "Used in", value: "[[Salad's leucotomy branches]]" },
        { label: "Chinese", value: "Not translated yet — this page tests fallback" },
      ],
    },
    content: `**The Q** is the mark of [[Salad's leucotomy branches]]: a red brain seated in a white Q. It is the icon of the wiki and the game.

This article has **no Chinese translation** on purpose. Switch the header to 中文 and you should still see this English text, with a notice that English is being used as fallback.

Add a Chinese version later from the Edit tab while 中文 is selected.`,
  }),
  page(
    "Help:Editing",
    {
      title: "Help:Editing",
      categories: ["Help"],
      content: `English is the source. Chinese is optional. If a Chinese field is empty, readers see English.

## Language

Use the **English / 中文** control in the header. It changes chrome, article text, and which language you are editing.

## Links

* \`[[Salad]]\`
* \`[[Leucotomy|the procedure]]\` for custom label
* Missing pages render as red links

Titles should stay stable in English even when the displayed Chinese title is different.

## Categories

Use English keys such as \`Game, Characters, Mechanics, Locations, Help\`. The wiki shows them in the current language.`,
    },
    {
      title: "帮助:编辑",
      categories: ["Help"],
      content: `英语是原文，中文可选。中文某栏为空时，读者看到的是英语。

## 语言

用顶栏的 **English / 中文** 切换。它会改界面、正文，以及你正在编辑的语言。

## 链接

* \`[[Salad]]\`
* \`[[Leucotomy|术式]]\` 可自定义显示文字
* 还不存在的页面是红链

条目标题尽量保持英语稳定，即使中文显示名不同。

## 分类

填写英语键名，例如 \`Game, Characters, Mechanics, Locations, Help\`。前台会按当前语言显示。`,
    }
  ),
]
