import type { Infobox, PageCopy, WikiPage } from "@/lib/types"
import { personalities as personalityCatalog } from "@/data/personalities"

const createdAt = "2026-09-11T01:00:00.000Z"

export const defaultSettings = {
  name: "Salad's leucotomy branches",
  tagline: "Roblox · Lobotomy Corporation fan game",
}

function page(slug: string, en: PageCopy, zh?: Partial<PageCopy>): WikiPage {
  return {
    slug,
    locales: zh ? { en, zh } : { en },
    createdAt,
    updatedAt: createdAt,
    revisions: [
      {
        at: createdAt,
        locale: "en",
        summary: "Facility file",
        title: en.title,
        content: en.content,
        categories: en.categories,
        infobox: en.infobox,
      },
    ],
  }
}

function box(
  heading: string,
  caption: string,
  rows: Infobox["rows"]
): Infobox {
  return { heading, caption, rows }
}

export const seedPages: WikiPage[] = [
  page(
    "Main_Page",
    {
      title: "Main Page",
      categories: ["Help"],
      content: `This is the encyclopedia for **[[Salad's leucotomy branches]]**, a [Roblox](https://www.roblox.com/) fan game of **Lobotomy Corporation**. It is not an official Project Moon wiki.

The files that belong here are **[[Abnormalities|abnormality]]** records: what an abnormality is, which [[Damage|damage]] it deals or takes, and which [[Work|work]] it answers.

## Four categories

* [[Category:Abnormalities|Abnormalities]] — one page per 异想体 file
* [[Category:Basics|Basics]] — four damage colors, four works, personality overviews
* [[Category:Personalities|Personalities]] — full Codex (43 traits with descriptions)
* [[Category:Creators|Creators]] — [[Salad]], [[Stalad]], artists [[邮箱]] / [[WATER_]] / [[花生酱]] / [[云陌商]] / [[言]] / [[凉菜]] / [[小E]], mascot [[不改]], modeler [[男玩]], animator [[Flow]]

## Damage and work

Every hit in this game is one of four colors. Each color is also a work:

* [[Red damage]] — mental — [[Analysis]]
* [[Grey damage]] — physical — [[Instinct]]
* [[Cyan damage]] — healing — [[Attachment]]
* [[Black damage]] — lasting — [[Repression]]

## Start here

* [[Category:Abnormalities|Abnormalities]]
* [[Basics]] — [[Damage]], [[Work]], [[Primary personality]], [[Secondary personality]]
* [[Category:Personalities|Personalities]] — Curious, Remorse, Last Stand, …
* [[Creators]] — [[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[不改]], [[男玩]], [[花生酱]], [[云陌商]], [[言]], [[凉菜]], [[小E]], [[Flow]]
* [[Qe]] — first abnormality file (H-01-0)
* [[Imaginary Friend]] — H-02-0 (sealed: Remedic)
* [[folagerlak]] — S-03-0
* [[Unyielding Pale Flower]] — O-04-0 (submitter: 日照野田)
* [[Help:Editing]] — how to write an abnormality file

English is the source language. Switch to 中文 in the header; missing Chinese falls back to English.`,
    },
    {
      title: "首页",
      categories: ["Help"],
      content: `这是 **[[Salad's leucotomy branches]]** 的百科：一款运行在 [Roblox](https://www.roblox.com/) 上的 **脑叶公司** 同人游戏。这里不是 Project Moon 的官方维基。

本站主要收 **[[Abnormalities|异想体]]** 档案：它是什么、打出或吃到哪种 [[Damage|伤害]]、对应哪一种 [[Work|工作]]。

## 四个分类

* [[Category:Abnormalities|异想体]] — 每个异想体一页档案
* [[Category:Basics|基本信息]] — 四色伤害、四种工作、性格概览
* [[Category:Personalities|性格]] — 完整图鉴（43 条含描述）
* [[Category:Creators|创作者]] — [[Salad]]、[[Stalad]]、画师 [[邮箱]] / [[WATER_]] / [[花生酱]] / [[云陌商]] / [[言]] / [[凉菜]] / [[小E]]、吉祥物 [[不改]]、建模师 [[男玩]]、动画师 [[Flow]]

## 伤害与工作

游戏里的伤害只有四种颜色。每种颜色同时对应一种工作：

* [[Red damage|红伤]] — 精神伤害 — [[Analysis|解析]]
* [[Grey damage|灰伤]] — 物理伤害 — [[Instinct|本能]]
* [[Cyan damage|青伤]] — 治疗伤害 — [[Attachment|沟通]]
* [[Black damage|黑伤]] — 持续伤害 — [[Repression|压迫]]

## 从这里开始

* [[Category:Abnormalities|异想体]]
* [[Basics|基本信息]] — [[Damage|伤害]]、[[Work|工作]]、[[Primary personality|主性格]]、[[Secondary personality|副性格]]
* [[Category:Personalities|性格]] — 好奇、悔恨、背水一战…
* [[Creators|创作者]] — [[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[不改]]、[[男玩]]、[[花生酱]]、[[云陌商]]、[[言]]、[[凉菜]]、[[小E]]、[[Flow]]
* [[Qe]] — 第一份异想体档案（H-01-0）
* [[Imaginary Friend|幻想朋友]] — H-02-0（密封：医骸）
* [[folagerlak]] — S-03-0
* [[Unyielding Pale Flower|不屈苍花]] — O-04-0（投稿：日照野田）
* [[Help:Editing]] — 怎么写一篇异想体档案

网站以英语为原文。顶栏可切到中文；缺译的字段会显示英语。`,
    }
  ),
  page(
    "Salad's_leucotomy_branches",
    {
      title: "Salad's leucotomy branches",
      categories: ["Help"],
      infobox: box("Salad's leucotomy branches", "Roblox fan game", [
        { label: "Platform", value: "Roblox" },
        { label: "Kind", value: "Lobotomy Corporation fan game" },
        { label: "Focus", value: "[[Abnormalities]], [[Damage]], [[Work]]" },
        { label: "Emblem", value: "[[The Q]]" },
        { label: "Author", value: "[[Salad]]" },
        { label: "Composer", value: "[[Stalad]]" },
      ]),
      content: `**Salad's leucotomy branches** is a fan game on Roblox that restages a Lobotomy Corporation facility: employees manage **[[Abnormalities]]**, take and deal [[Damage]], and pick a [[Work]] type.

It is a community project. Official names from Project Moon should be treated as reference, not as this wiki's voice. Write what *this* Roblox game does.

## What to document

* Each abnormality as its own article, filed under [[Abnormalities]]
* The four damage colors on [[Damage]]
* The four works on [[Work]]: [[Analysis]], [[Instinct]], [[Attachment]], [[Repression]]
* Primary and secondary personalities on [[Primary personality]] and [[Secondary personality]]

## Tone

Keep files encyclopedic: identity, damage, work, and what happens if work fails. Mark spoilers if a page walks through a full suppression.`,
    },
    {
      title: "Salad's leucotomy branches",
      categories: ["Help"],
      infobox: box("Salad's leucotomy branches", "Roblox 同人游戏", [
        { label: "平台", value: "Roblox" },
        { label: "类型", value: "脑叶公司同人" },
        { label: "核心", value: "[[Abnormalities]]、[[Damage]]、[[Work]]" },
        { label: "徽章", value: "[[The Q]]" },
        { label: "总作者", value: "[[Salad]]" },
        { label: "曲师", value: "[[Stalad]]" },
      ]),
      content: `**Salad's leucotomy branches** 是运行在 Roblox 上的脑叶公司同人游戏：员工管理 **[[Abnormalities|异想体]]**，承受和打出 [[Damage|伤害]]，并选择一种 [[Work|工作]]。

这是同人项目。Project Moon 的正式设定只作对照，不代替本游戏自己的规则。本百科写的是 *这款 Roblox 游戏* 里实际发生的事。

## 该写什么

* 每个异想体单独成篇，归入 [[Abnormalities]]
* 四种伤害颜色见 [[Damage]]
* 四种工作见 [[Work]]：[[Analysis|解析]]、[[Instinct|本能]]、[[Attachment|沟通]]、[[Repression|压迫]]
* 主性格与副性格见 [[Primary personality|主性格]]、[[Secondary personality|副性格]]

## 文风

档案写成词条：它是谁、什么伤害、哪种工作、工作失败会怎样。如果一篇是完整镇压力流程，请标明剧透。`,
    }
  ),
  page(
    "Abnormalities",
    {
      title: "Abnormalities",
      categories: ["Abnormalities"],
      infobox: box("Abnormalities", "File index", [
        { label: "Also called", value: "异想体" },
        { label: "Managed with", value: "[[Work]]" },
        { label: "Harm", value: "[[Damage]]" },
      ]),
      content: `**Abnormalities** (异想体) are the contained beings of [[Salad's leucotomy branches]]. Each one should have its own wiki article. This page is the index, not a dump of every file.

When you add a file:

1. Create a page with a stable **English** title (code name or English name).
2. Put \`Abnormalities\` in categories.
3. Fill the infobox: damage type, work, and any code the game shows.
4. Write Chinese from the Edit tab while 中文 is selected. Empty Chinese fields fall back to English.

## File template

See [[Help:Editing]] for the full abnormality template. Structured files (portrait, Mood, resistances, EGO) render as a sheet; wiki text on those pages is extra notes only.

## Files

* [[Qe]] — H-01-0, TETH. Red. EGO: Fusion.
* [[Imaginary Friend]] — H-02-0, ALEPH (sealed Remedic / WAW). Red. EGO: Mimesis.
* [[folagerlak]] — S-03-0, WAW. Black. No EGO yet.
* [[Unyielding Pale Flower]] — O-04-0, WAW. Red. EGO: Cherished Love. Submitted by 日照野田.

## Related

* [[Damage]]
* [[Work]]
* [[Help:Editing]]`,
    },
    {
      title: "异想体",
      categories: ["Abnormalities"],
      infobox: box("异想体", "档案目录", [
        { label: "也称", value: "Abnormalities" },
        { label: "管理", value: "[[Work]]" },
        { label: "伤害", value: "[[Damage]]" },
      ]),
      content: `**异想体**（Abnormalities）是 [[Salad's leucotomy branches]] 里被收容的存在。每一个都应有独立条目。本页是目录，不是把所有档案堆在一篇里。

你要归档时：

1. 用稳定的 **英语** 标题建页（编号或英文名）。
2. 分类填 \`Abnormalities\`（异想体）。
3. 信息框写伤害类型、工作、游戏里显示的编号。
4. 顶栏切到 中文 再写中文。中文留空会回退到英语。

## 档案模板

完整模板见 [[Help:Editing]]。结构化档案（立绘、情绪、抗性、EGO）会按分栏显示，词条正文只作备注。

## 档案

* [[Qe]] — H-01-0，TETH。红伤。EGO：融合。
* [[Imaginary Friend|幻想朋友]] — H-02-0，ALEPH（密封医骸 / WAW）。红伤。EGO：拟生。
* [[folagerlak]] — S-03-0，WAW。黑伤。暂无 EGO。
* [[Unyielding Pale Flower|不屈苍花]] — O-04-0，WAW。红伤。EGO：怀爱。投稿：日照野田。

## 相关

* [[Damage]]
* [[Work]]
* [[Help:Editing]]`,
    }
  ),
  page(
    "Qe",
    {
      title: "Qe",
      categories: ["Abnormalities"],
      infobox: box("Qe", "H-01-0", [
        { label: "Code", value: "H-01-0" },
        { label: "Risk", value: "TETH" },
        { label: "Mood", value: "3" },
        { label: "Damage", value: "[[Red damage]]" },
        { label: "EGO", value: "Fusion / 融合" },
        { label: "Submitter", value: "[[Salad]]" },
      ]),
      content: `H-01-0 **Qe** is a TETH abnormality.

Containment sheet (portrait, Mood, work, E.G.O) is on this page. See [[Abnormalities]], [[Red damage]], [[Work]].`,
    },
    {
      title: "Qe",
      categories: ["Abnormalities"],
      infobox: box("Qe", "H-01-0", [
        { label: "编号", value: "H-01-0" },
        { label: "危险等级", value: "TETH" },
        { label: "情绪", value: "3" },
        { label: "伤害", value: "[[Red damage|红伤]]" },
        { label: "EGO", value: "融合" },
        { label: "投稿者", value: "[[Salad]]" },
      ]),
      content: `H-01-0 **Qe** 为 TETH 异想体。

收容档案（立绘、情绪、工作、E.G.O）见本页分栏。见 [[Abnormalities|异想体]]、[[Red damage|红伤]]、[[Work|工作]]。`,
    }
  ),
  page(
    "Imaginary_Friend",
    {
      title: "Imaginary Friend",
      categories: ["Abnormalities"],
      infobox: box("Imaginary Friend", "H-02-0", [
        { label: "Code", value: "H-02-0" },
        { label: "Risk", value: "ALEPH (sealed: Remedic / WAW)" },
        { label: "Mood", value: "2" },
        { label: "Damage", value: "[[Red damage]]" },
        { label: "EGO", value: "Mimesis / Pseudo-Life / You found me" },
        { label: "Submitter", value: "[[Salad]]" },
      ]),
      content: `H-02-0 **Imaginary Friend** (幻想朋友). Before an Agent claims the gift **You found me**, Introduce shows **Remedic** (医骸) at WAW.

Containment sheet is on this page. See [[Abnormalities]], [[Red damage]], [[Work]].`,
    },
    {
      title: "幻想朋友",
      categories: ["Abnormalities"],
      infobox: box("幻想朋友", "H-02-0", [
        { label: "编号", value: "H-02-0" },
        { label: "危险等级", value: "ALEPH（密封：医骸 / WAW）" },
        { label: "情绪", value: "2" },
        { label: "伤害", value: "[[Red damage|红伤]]" },
        { label: "EGO", value: "拟生 / You found me" },
        { label: "投稿者", value: "[[Salad]]" },
      ]),
      content: `H-02-0 **幻想朋友**。在员工获得饰品 **You found me** 之前，图鉴显示 **医骸**（WAW）。

收容档案见本页分栏。见 [[Abnormalities|异想体]]、[[Red damage|红伤]]、[[Work|工作]]。`,
    }
  ),
  page(
    "folagerlak",
    {
      title: "folagerlak",
      categories: ["Abnormalities"],
      infobox: box("folagerlak", "S-03-0", [
        { label: "Code", value: "S-03-0" },
        { label: "Risk", value: "WAW" },
        { label: "Mood", value: "4" },
        { label: "Damage", value: "[[Black damage]]" },
        { label: "EGO", value: "—" },
        { label: "Submitter", value: "[[Salad]]" },
      ]),
      content: `S-03-0 **folagerlak** is a WAW abnormality. No E.G.O has been extracted in the current build.

Containment sheet is on this page. See [[Abnormalities]], [[Black damage]], [[Work]].`,
    },
    {
      title: "folagerlak",
      categories: ["Abnormalities"],
      infobox: box("folagerlak", "S-03-0", [
        { label: "编号", value: "S-03-0" },
        { label: "危险等级", value: "WAW" },
        { label: "情绪", value: "4" },
        { label: "伤害", value: "[[Black damage|黑伤]]" },
        { label: "EGO", value: "—" },
        { label: "投稿者", value: "[[Salad]]" },
      ]),
      content: `S-03-0 **folagerlak** 为 WAW 异想体。当前版本尚未提取 E.G.O。

收容档案见本页分栏。见 [[Abnormalities|异想体]]、[[Black damage|黑伤]]、[[Work|工作]]。`,
    }
  ),
  page(
    "Unyielding_Pale_Flower",
    {
      title: "Unyielding Pale Flower",
      categories: ["Abnormalities"],
      infobox: box("Unyielding Pale Flower", "O-04-0", [
        { label: "Code", value: "O-04-0" },
        { label: "Risk", value: "WAW" },
        { label: "Mood", value: "4" },
        { label: "Damage", value: "[[Red damage]]" },
        { label: "EGO", value: "Cherished Love / 怀爱" },
        { label: "Submitter", value: "日照野田" },
      ]),
      content: `O-04-0 **Unyielding Pale Flower** (不屈苍花) is a WAW abnormality. Fan submission by **日照野田**.

Containment sheet (guidelines, traits, E.G.O) is on this page. See [[Abnormalities]], [[Red damage]], [[Work]], [[Compassionate]].`,
    },
    {
      title: "不屈苍花",
      categories: ["Abnormalities"],
      infobox: box("不屈苍花", "O-04-0", [
        { label: "编号", value: "O-04-0" },
        { label: "危险等级", value: "WAW" },
        { label: "情绪", value: "4" },
        { label: "伤害", value: "[[Red damage|红伤]]" },
        { label: "EGO", value: "怀爱" },
        { label: "投稿者", value: "日照野田" },
      ]),
      content: `O-04-0 **不屈苍花**（Unyielding Pale Flower）为 WAW 异想体。投稿者：**日照野田**。

收容档案（管理需知、特性、E.G.O）见本页分栏。见 [[Abnormalities|异想体]]、[[Red damage|红伤]]、[[Work|工作]]、[[Compassionate|仁慈]]。`,
    }
  ),
  page(
    "Basics",
    {
      title: "Basics",
      categories: ["Basics"],
      infobox: box("Basics", "基本信息", [
        { label: "Holds", value: "[[Damage]], [[Work]], personalities" },
        { label: "Category", value: "[[Category:Basics]]" },
      ]),
      content: `**Basics** (基本信息) covers only the standing rules every Agent needs: four damage colors, four works, and personalities.

## Damage

![Red damage](/abnormalities/dmg-red.png)

**[[Damage]]** (四色伤害) — [[Red damage]], [[Grey damage]], [[Cyan damage]], [[Black damage]]

## Work

![Analysis · Red](/abnormalities/work-red.png)

**[[Work]]** (四种工作) — [[Analysis]], [[Instinct]], [[Attachment]], [[Repression]]

## Personalities

* [[Category:Personalities]] — full Codex (43)
* [[Primary personality]] — one of eight primaries
* [[Secondary personality]] — work / social traits (several at once)

See [[Category:Basics]].`,
    },
    {
      title: "基本信息",
      categories: ["Basics"],
      infobox: box("基本信息", "Basics", [
        { label: "收录", value: "[[Damage]]、[[Work]]、性格" },
        { label: "分类", value: "[[Category:Basics|基本信息]]" },
      ]),
      content: `**基本信息**（Basics）只收员工都要懂的固定规则：四色伤害、四种工作、主性格与副性格。

## 伤害

![红伤](/abnormalities/dmg-red.png)

**[[Damage|伤害]]**（四色伤害）— [[Red damage|红伤]]、[[Grey damage|灰伤]]、[[Cyan damage|青伤]]、[[Black damage|黑伤]]

## 工作

![解析 · 红](/abnormalities/work-red.png)

**[[Work|工作]]**（四种工作）— [[Analysis|解析]]、[[Instinct|本能]]、[[Attachment|沟通]]、[[Repression|压迫]]

## 性格

* [[Category:Personalities|性格]] — 完整图鉴（43）
* [[Primary personality|主性格]] — 八种主性格之一
* [[Secondary personality|副性格]] — 工作 / 社交特质（可多个）

见 [[Category:Basics|基本信息]]。`,
    }
  ),
  page(
    "PE-BOX",
    {
      title: "PE-BOX",
      categories: ["Help"],
      infobox: box("PE-BOX", "Facility currency", [
        { label: "Also called", value: "PEBOX · PE-Box" },
        { label: "Used for", value: "Introduce unlocks, E.G.O extract" },
        { label: "Earned from", value: "Work completion (Good / Normal / Bad)" },
      ]),
      content: `**PE-BOX** is spendable observation currency in [[Salad's leucotomy branches]]. Agents earn PE-BOX when work finishes; the Manager spends it to unlock Introduce panels and extract E.G.O.

![PE-BOX texture](/abnormalities/pebox.png)

PE-BOX is **not** abnormality Mood. Mood (情绪) is the Qliphoth emotion ceiling on containment files — a separate meter.

## Related

* [[Abnormalities]]
* [[Work]]
* [[Basics]]`,
    },
    {
      title: "PE-BOX",
      categories: ["Help"],
      infobox: box("PE-BOX", "设施货币", [
        { label: "也称", value: "PEBOX" },
        { label: "用途", value: "图鉴解锁、E.G.O 提取" },
        { label: "来源", value: "工作完成（优 / 良 / 差）" },
      ]),
      content: `**PE-BOX** 是 [[Salad's leucotomy branches]] 里可花费的观察点数。员工工作结束产出 PE-BOX，管理人用它解锁图鉴面板、提取 E.G.O。

![PE-BOX 贴图](/abnormalities/pebox.png)

PE-BOX **不是** 异想体的情绪。档案上的 **情绪 / Mood** 是收容情绪上限，与 PE-BOX 无关。

## 相关

* [[Abnormalities|异想体]]
* [[Work|工作]]
* [[Basics|基本信息]]`,
    }
  ),
  page(
    "Damage",
    {
      title: "Damage",
      categories: ["Basics"],
      infobox: box("Damage", "Four colors", [
        { label: "Count", value: "4" },
        { label: "Used by", value: "[[Abnormalities]], employees" },
        { label: "Paired with", value: "[[Work]]" },
      ]),
      content: `**Damage** in [[Salad's leucotomy branches]] is always one of four colors. The color tells you both what the hit *does* and which [[Work]] it belongs to.

![Red damage](/abnormalities/dmg-red.png)

**[[Red damage]]** (红伤) — mental — [[Analysis]] (解析)

![Grey damage](/abnormalities/dmg-grey.png)

**[[Grey damage]]** (灰伤) — physical — [[Instinct]] (本能)

![Cyan damage](/abnormalities/dmg-cyan.png)

**[[Cyan damage]]** (青伤) — healing — [[Attachment]] (沟通)

![Black damage](/abnormalities/dmg-black.png)

**[[Black damage]]** (黑伤) — lasting — [[Repression]] (压迫)

These names are this Roblox game's rules. Do not assume official Lobotomy Corporation color meanings if they disagree.

When you file an abnormality, name the color it deals and the color it is weak to, if the game shows that.`,
    },
    {
      title: "伤害",
      categories: ["Basics"],
      infobox: box("伤害", "四种颜色", [
        { label: "数量", value: "4" },
        { label: "对象", value: "[[Abnormalities]]、员工" },
        { label: "对应", value: "[[Work]]" },
      ]),
      content: `[[Salad's leucotomy branches]] 里的 **伤害** 只有四种颜色。颜色既说明这一下 *做什么*，也对应哪一种 [[Work|工作]]。

![红伤](/abnormalities/dmg-red.png)

**[[Red damage|红伤]]** — 精神伤害 — [[Analysis|解析]]

![灰伤](/abnormalities/dmg-grey.png)

**[[Grey damage|灰伤]]** — 物理伤害 — [[Instinct|本能]]

![青伤](/abnormalities/dmg-cyan.png)

**[[Cyan damage|青伤]]** — 治疗伤害 — [[Attachment|沟通]]

![黑伤](/abnormalities/dmg-black.png)

**[[Black damage|黑伤]]** — 持续伤害 — [[Repression|压迫]]

以上是这款 Roblox 游戏自己的规则。如果和官方脑叶公司的颜色含义冲突，以本游戏为准。

写异想体档案时，尽量写清它打出的颜色，以及（若游戏有显示）它怕的颜色。`,
    }
  ),
  page(
    "Red_damage",
    {
      title: "Red damage",
      categories: ["Basics"],
      infobox: box("Red damage", "红伤", [
        { label: "Color", value: "Red" },
        { label: "Does", value: "Mental damage" },
        { label: "Work", value: "[[Analysis]] (解析)" },
      ]),
      content: `**Red damage** (红伤) is **mental damage**. In this game it is the color of [[Analysis]] (解析).

![Red damage](/abnormalities/dmg-red.png)

Use this page for the rule. Use an abnormality article for a specific red-damage file.

## See also

* [[Damage]]
* [[Analysis]]
* [[Abnormalities]]`,
    },
    {
      title: "红伤",
      categories: ["Basics"],
      infobox: box("红伤", "Red damage", [
        { label: "颜色", value: "红" },
        { label: "效果", value: "精神伤害" },
        { label: "工作", value: "[[Analysis|解析]]" },
      ]),
      content: `**红伤**（Red damage）是 **精神伤害**。在本游戏里，它对应 [[Analysis|解析]]。

![红伤](/abnormalities/dmg-red.png)

本页只写规则。具体某个打红伤的异想体，写在它自己的档案里。

## 参见

* [[Damage]]
* [[Analysis]]
* [[Abnormalities]]`,
    }
  ),
  page(
    "Grey_damage",
    {
      title: "Grey damage",
      categories: ["Basics"],
      infobox: box("Grey damage", "灰伤", [
        { label: "Color", value: "Grey" },
        { label: "Does", value: "Physical damage" },
        { label: "Work", value: "[[Instinct]] (本能)" },
      ]),
      content: `**Grey damage** (灰伤) is **physical damage**. In this game it is the color of [[Instinct]] (本能).

![Grey damage](/abnormalities/dmg-grey.png)

## See also

* [[Damage]]
* [[Instinct]]
* [[Abnormalities]]`,
    },
    {
      title: "灰伤",
      categories: ["Basics"],
      infobox: box("灰伤", "Grey damage", [
        { label: "颜色", value: "灰" },
        { label: "效果", value: "物理伤害" },
        { label: "工作", value: "[[Instinct|本能]]" },
      ]),
      content: `**灰伤**（Grey damage）是 **物理伤害**。在本游戏里，它对应 [[Instinct|本能]]。

![灰伤](/abnormalities/dmg-grey.png)

## 参见

* [[Damage]]
* [[Instinct]]
* [[Abnormalities]]`,
    }
  ),
  page(
    "Cyan_damage",
    {
      title: "Cyan damage",
      categories: ["Basics"],
      infobox: box("Cyan damage", "青伤", [
        { label: "Color", value: "Cyan" },
        { label: "Does", value: "Healing" },
        { label: "Work", value: "[[Attachment]] (沟通)" },
      ]),
      content: `**Cyan damage** (青伤) is **healing**. In this game it is the color of [[Attachment]] (沟通).

![Cyan damage](/abnormalities/dmg-cyan.png)

It still occupies a damage-color slot: work logs, resistances, and abnormality files should name it as cyan / 青伤 even when the number goes up instead of down.

## See also

* [[Damage]]
* [[Attachment]]
* [[Abnormalities]]`,
    },
    {
      title: "青伤",
      categories: ["Basics"],
      infobox: box("青伤", "Cyan damage", [
        { label: "颜色", value: "青" },
        { label: "效果", value: "治疗伤害" },
        { label: "工作", value: "[[Attachment|沟通]]" },
      ]),
      content: `**青伤**（Cyan damage）是 **治疗伤害**。在本游戏里，它对应 [[Attachment|沟通]]。

![青伤](/abnormalities/dmg-cyan.png)

它仍然占一个伤害颜色格：工作记录、抗性和异想体档案都要写成青伤，即使数字是在加而不是减。

## 参见

* [[Damage]]
* [[Attachment]]
* [[Abnormalities]]`,
    }
  ),
  page(
    "Black_damage",
    {
      title: "Black damage",
      categories: ["Basics"],
      infobox: box("Black damage", "黑伤", [
        { label: "Color", value: "Black" },
        { label: "Does", value: "Lasting damage" },
        { label: "Work", value: "[[Repression]] (压迫)" },
      ]),
      content: `**Black damage** (黑伤) is **lasting damage**: it continues after the hit. In this game it is the color of [[Repression]] (压迫).

![Black damage](/abnormalities/dmg-black.png)

Write tick rate, duration, or stack rules on the abnormality that inflicts it, not as guesses on this page.

## See also

* [[Damage]]
* [[Repression]]
* [[Abnormalities]]`,
    },
    {
      title: "黑伤",
      categories: ["Basics"],
      infobox: box("黑伤", "Black damage", [
        { label: "颜色", value: "黑" },
        { label: "效果", value: "持续伤害" },
        { label: "工作", value: "[[Repression|压迫]]" },
      ]),
      content: `**黑伤**（Black damage）是 **持续伤害**：打中之后还会继续掉。在本游戏里，它对应 [[Repression|压迫]]。

![黑伤](/abnormalities/dmg-black.png)

跳数、持续、叠层写在施加它的异想体档案里，不要在本页臆测。

## 参见

* [[Damage]]
* [[Repression]]
* [[Abnormalities]]`,
    }
  ),
  page(
    "Work",
    {
      title: "Work",
      categories: ["Basics"],
      infobox: box("Work", "Four works", [
        { label: "Count", value: "4" },
        { label: "Used on", value: "[[Abnormalities]]" },
        { label: "Each maps to", value: "[[Damage]]" },
      ]),
      content: `**Work** is how employees manage an [[Abnormalities|abnormality]]. There are four works. Each one is tied to a damage color.

![Analysis · Red](/abnormalities/work-red.png)

**[[Analysis]]** (解析) — [[Red damage]] (mental)

![Instinct · Grey](/abnormalities/work-grey.png)

**[[Instinct]]** (本能) — [[Grey damage]] (physical)

![Attachment · Cyan](/abnormalities/work-cyan.png)

**[[Attachment]]** (沟通) — [[Cyan damage]] (healing)

![Repression · Black](/abnormalities/work-black.png)

**[[Repression]]** (压迫) — [[Black damage]] (lasting)

| Work | Chinese | Damage | Icon |
| --- | --- | --- | --- |
| [[Analysis]] | 解析 | [[Red damage]] | red |
| [[Instinct]] | 本能 | [[Grey damage]] | grey |
| [[Attachment]] | 沟通 | [[Cyan damage]] | cyan |
| [[Repression]] | 压迫 | [[Black damage]] | black |

Pick the work the game names. If an abnormality prefers one work, say so on *its* file.

## Work results

Each work session grades **Good / Normal / Poor** (优 / 良 / 差). These faces are the in-game result icons:

![Good · 优](/abnormalities/work-good.png)

**Good (优)** — green smile. Highest energy band on the sheet.

![Normal · 良](/abnormalities/work-normal.png)

**Normal (良)** — yellow flat face. Middle energy band.

![Poor · 差](/abnormalities/work-bad.png)

**Poor (差)** — red frown. Lowest energy band; often worsens mood.

See [[Work result]]. Energy ranges on abnormality sheets are listed under these three grades.

## See also

* [[Work result]]
* [[Damage]]
* [[Abnormalities]]`,
    },
    {
      title: "工作",
      categories: ["Basics"],
      infobox: box("工作", "四种工作", [
        { label: "数量", value: "4" },
        { label: "对象", value: "[[Abnormalities]]" },
        { label: "各对应", value: "[[Damage]]" },
      ]),
      content: `**工作** 是员工管理 [[Abnormalities|异想体]] 的方式。一共四种，每种绑一种伤害颜色。

![解析 · 红](/abnormalities/work-red.png)

**[[Analysis|解析]]** — [[Red damage|红伤]]（精神）

![本能 · 灰](/abnormalities/work-grey.png)

**[[Instinct|本能]]** — [[Grey damage|灰伤]]（物理）

![沟通 · 青](/abnormalities/work-cyan.png)

**[[Attachment|沟通]]** — [[Cyan damage|青伤]]（治疗）

![压迫 · 黑](/abnormalities/work-black.png)

**[[Repression|压迫]]** — [[Black damage|黑伤]]（持续）

以游戏里出现的名称为准。某异想体偏爱哪种工作，写在 *它自己的* 档案里。

## 工作结果

每次工作会评出 **优 / 良 / 差**。游戏内图标如下：

![优](/abnormalities/work-good.png)

**优** — 绿色笑脸。能源区间最高。

![良](/abnormalities/work-normal.png)

**良** — 黄色平脸。中间档。

![差](/abnormalities/work-bad.png)

**差** — 红色哭脸。最低档，常会扣情绪。

详见 [[Work result|工作结果]]。异想体档案侧栏的能源产量按这三档列出区间。

## 参见

* [[Work result|工作结果]]
* [[Damage]]
* [[Abnormalities]]`,
    }
  ),
  page(
    "Work_result",
    {
      title: "Work result",
      categories: ["Basics"],
      infobox: box("Work result", "Session grade", [
        { label: "Grades", value: "Good · Normal · Poor" },
        { label: "Chinese", value: "优 · 良 · 差" },
        { label: "Used by", value: "[[Work]], energy tables" },
      ]),
      content: `A **work result** is the grade for one containment work session (or the energy band on an abnormality file).

![Good · 优](/abnormalities/work-good.png)

**Good (优)** — green smile. Highest energy band on the sheet.

![Normal · 良](/abnormalities/work-normal.png)

**Normal (良)** — yellow flat face. Middle energy band.

![Poor · 差](/abnormalities/work-bad.png)

**Poor (差)** — red frown. Lowest energy band; often worsens mood.

These icons appear on abnormality energy tables next to the energy ranges.

## See also

* [[Work]]
* [[PE-BOX]]`,
    },
    {
      title: "工作结果",
      categories: ["Basics"],
      infobox: box("工作结果", "当次评级", [
        { label: "档位", value: "优 · 良 · 差" },
        { label: "英语", value: "Good · Normal · Poor" },
        { label: "用于", value: "[[Work|工作]]、能源表" },
      ]),
      content: `**工作结果** 是一次收容工作的评级（也对应异想体档案上的能源区间）。

![优](/abnormalities/work-good.png)

**优** — 绿色笑脸。能源区间最高。

![良](/abnormalities/work-normal.png)

**良** — 黄色平脸。中间档。

![差](/abnormalities/work-bad.png)

**差** — 红色哭脸。最低档，常会扣情绪。

异想体侧栏能源表会用这三张图标标出对应区间。

## 参见

* [[Work|工作]]
* [[PE-BOX]]`,
    }
  ),
  page(
    "Analysis",
    {
      title: "Analysis",
      categories: ["Basics"],
      infobox: box("Analysis", "解析", [
        { label: "Work", value: "Analysis" },
        { label: "Damage", value: "[[Red damage]] (mental)" },
      ]),
      content: `**Analysis** (解析) is the work paired with [[Red damage]]: mental harm.

![Analysis](/abnormalities/work-red.png)

Record on each abnormality how Analysis succeeds or fails. This page is only the mapping.

## See also

* [[Work]]
* [[Red damage]]`,
    },
    {
      title: "解析",
      categories: ["Basics"],
      infobox: box("解析", "Analysis", [
        { label: "工作", value: "解析" },
        { label: "伤害", value: "[[Red damage|红伤]]（精神）" },
      ]),
      content: `**解析**（Analysis）是与 [[Red damage|红伤]] 绑定的工作：精神伤害。

![解析](/abnormalities/work-red.png)

某种异想体上解析如何成功或失败，写在它的档案里。本页只写对应关系。

## 参见

* [[Work]]
* [[Red damage]]`,
    }
  ),
  page(
    "Instinct",
    {
      title: "Instinct",
      categories: ["Basics"],
      infobox: box("Instinct", "本能", [
        { label: "Work", value: "Instinct" },
        { label: "Damage", value: "[[Grey damage]] (physical)" },
      ]),
      content: `**Instinct** (本能) is the work paired with [[Grey damage]]: physical harm.

![Instinct](/abnormalities/work-grey.png)

## See also

* [[Work]]
* [[Grey damage]]`,
    },
    {
      title: "本能",
      categories: ["Basics"],
      infobox: box("本能", "Instinct", [
        { label: "工作", value: "本能" },
        { label: "伤害", value: "[[Grey damage|灰伤]]（物理）" },
      ]),
      content: `**本能**（Instinct）是与 [[Grey damage|灰伤]] 绑定的工作：物理伤害。

![本能](/abnormalities/work-grey.png)

## 参见

* [[Work]]
* [[Grey damage]]`,
    }
  ),
  page(
    "Attachment",
    {
      title: "Attachment",
      categories: ["Basics"],
      infobox: box("Attachment", "沟通", [
        { label: "Work", value: "Attachment" },
        { label: "Damage", value: "[[Cyan damage]] (healing)" },
      ]),
      content: `**Attachment** (沟通) is the work paired with [[Cyan damage]]: healing.

![Attachment](/abnormalities/work-cyan.png)

The English page title stays **Attachment** so links stay stable. In this game the work is spoken of as 沟通.

## See also

* [[Work]]
* [[Cyan damage]]`,
    },
    {
      title: "沟通",
      categories: ["Basics"],
      infobox: box("沟通", "Attachment", [
        { label: "工作", value: "沟通" },
        { label: "伤害", value: "[[Cyan damage|青伤]]（治疗）" },
      ]),
      content: `**沟通**（Attachment）是与 [[Cyan damage|青伤]] 绑定的工作：治疗。

![沟通](/abnormalities/work-cyan.png)

英语条目标题固定为 **Attachment**，方便链接。本游戏里这种工作叫沟通。

## 参见

* [[Work]]
* [[Cyan damage]]`,
    }
  ),
  page(
    "Repression",
    {
      title: "Repression",
      categories: ["Basics"],
      infobox: box("Repression", "压迫", [
        { label: "Work", value: "Repression" },
        { label: "Damage", value: "[[Black damage]] (lasting)" },
      ]),
      content: `**Repression** (压迫) is the work paired with [[Black damage]]: lasting harm.

![Repression](/abnormalities/work-black.png)

## See also

* [[Work]]
* [[Black damage]]`,
    },
    {
      title: "压迫",
      categories: ["Basics"],
      infobox: box("压迫", "Repression", [
        { label: "工作", value: "压迫" },
        { label: "伤害", value: "[[Black damage|黑伤]]（持续）" },
      ]),
      content: `**压迫**（Repression）是与 [[Black damage|黑伤]] 绑定的工作：持续伤害。

![压迫](/abnormalities/work-black.png)

## 参见

* [[Work]]
* [[Black damage]]`,
    }
  ),
  page(
    "Salad",
    {
      title: "Salad",
      categories: ["Creators"],
      infobox: box("Salad", "Game author", [
        { label: "Role", value: "Game author / 游戏总作者" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Stalad]], [[Creators]]" },
      ]),
      content: `**Salad** is the **game author** (游戏总作者) of [[Salad's leucotomy branches]].

![Salad](/creators/salad.png)

Salad owns the design and direction of the Roblox facility.

## See also

* [[Creators]]
* [[Stalad]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "Salad",
      categories: ["Creators"],
      infobox: box("Salad", "游戏总作者", [
        { label: "职务", value: "游戏总作者 / Game author" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Stalad]]、[[Creators]]" },
      ]),
      content: `**Salad** 是 [[Salad's leucotomy branches]] 的 **游戏总作者**（Game author）。

![Salad](/creators/salad.png)

Salad 负责这款 Roblox 设施的设计与统筹。

## 参见

* [[Creators|创作者]]
* [[Stalad]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "Stalad",
    {
      title: "Stalad",
      categories: ["Creators"],
      infobox: box("Stalad", "Composer", [
        { label: "Role", value: "Composer / 曲师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Creators]]" },
      ]),
      content: `**Stalad** is the **composer** (曲师) for [[Salad's leucotomy branches]].

![Stalad](/creators/stalad.png)

Stalad writes the facility's music. For the game author, see [[Salad]].

## See also

* [[Creators]]
* [[Salad]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "Stalad",
      categories: ["Creators"],
      infobox: box("Stalad", "曲师", [
        { label: "职务", value: "曲师 / Composer" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Creators]]" },
      ]),
      content: `**Stalad** 是 [[Salad's leucotomy branches]] 的 **曲师**（Composer）。

![Stalad](/creators/stalad.png)

Stalad 负责设施音乐。游戏总作者见 [[Salad]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "邮箱",
    {
      title: "邮箱",
      categories: ["Creators"],
      infobox: box("邮箱", "Artist", [
        { label: "Role", value: "Artist / 画师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[WATER_]], [[Creators]]" },
      ]),
      content: `**邮箱** is an **artist** (画师) for [[Salad's leucotomy branches]].

![邮箱](/creators/youxiang.jpg)

邮箱 draws for the facility. For the game author, see [[Salad]]; for music, see [[Stalad]]; for another artist, see [[WATER_]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[WATER_]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "邮箱",
      categories: ["Creators"],
      infobox: box("邮箱", "画师", [
        { label: "职务", value: "画师 / Artist" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[WATER_]]、[[Creators]]" },
      ]),
      content: `**邮箱** 是 [[Salad's leucotomy branches]] 的 **画师**（Artist）。

![邮箱](/creators/youxiang.jpg)

邮箱负责设施相关的绘制。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]。其他画师见 [[WATER_]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[WATER_]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "WATER_",
    {
      title: "WATER_",
      categories: ["Creators"],
      infobox: box("WATER_", "Artist", [
        { label: "Role", value: "Artist / 画师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[邮箱]], [[Creators]]" },
      ]),
      content: `**WATER_** is an **artist** (画师) for [[Salad's leucotomy branches]].

![WATER_](/creators/water.jpg)

WATER_ draws for the facility. For the game author, see [[Salad]]; for music, see [[Stalad]]; for another artist, see [[邮箱]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "WATER_",
      categories: ["Creators"],
      infobox: box("WATER_", "画师", [
        { label: "职务", value: "画师 / Artist" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[邮箱]]、[[Creators]]" },
      ]),
      content: `**WATER_** 是 [[Salad's leucotomy branches]] 的 **画师**（Artist）。

![WATER_](/creators/water.jpg)

WATER_ 负责设施相关的绘制。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]；另一位画师见 [[邮箱]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "不改",
    {
      title: "不改",
      categories: ["Creators"],
      infobox: box("不改", "Mascot", [
        { label: "Role", value: "Mascot / 吉祥物" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[Creators]]" },
      ]),
      content: `**不改** is the **mascot** (吉祥物) of [[Salad's leucotomy branches]].

![不改](/creators/bugai.jpg)

不改 is the facility's face character. For the game author, see [[Salad]]; for music, see [[Stalad]]; for artists, see [[邮箱]] and [[WATER_]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "不改",
      categories: ["Creators"],
      infobox: box("不改", "吉祥物", [
        { label: "职务", value: "吉祥物 / Mascot" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[Creators]]" },
      ]),
      content: `**不改** 是 [[Salad's leucotomy branches]] 的 **吉祥物**（Mascot）。

![不改](/creators/bugai.jpg)

不改是设施的形象角色。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]；画师见 [[邮箱]] 与 [[WATER_]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "男玩",
    {
      title: "男玩",
      categories: ["Creators"],
      infobox: box("男玩", "Modeler", [
        { label: "Role", value: "Modeler / 建模师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[不改]], [[Creators]]" },
      ]),
      content: `**男玩** is a **modeler** (建模师) for [[Salad's leucotomy branches]].

![男玩](/creators/nanwan.jpg)

男玩 builds 3D models for the facility. For the game author, see [[Salad]]; for music, see [[Stalad]]; for artists, see [[邮箱]] and [[WATER_]]; for the mascot, see [[不改]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[不改]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "男玩",
      categories: ["Creators"],
      infobox: box("男玩", "建模师", [
        { label: "职务", value: "建模师 / Modeler" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[不改]]、[[Creators]]" },
      ]),
      content: `**男玩** 是 [[Salad's leucotomy branches]] 的 **建模师**（Modeler）。

![男玩](/creators/nanwan.jpg)

男玩负责设施的三维建模。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]；画师见 [[邮箱]] 与 [[WATER_]]；吉祥物见 [[不改]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[不改]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "花生酱",
    {
      title: "花生酱",
      categories: ["Creators"],
      infobox: box("花生酱", "Artist", [
        { label: "Role", value: "Artist / 画师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[不改]], [[男玩]], [[Creators]]" },
      ]),
      content: `**花生酱** is an **artist** (画师) for [[Salad's leucotomy branches]].

![花生酱](/creators/huashengjiang.jpg)

花生酱 draws for the facility. For the game author, see [[Salad]]; for music, see [[Stalad]]; for other artists, see [[邮箱]] and [[WATER_]]; for the mascot, see [[不改]]; for modeling, see [[男玩]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "花生酱",
      categories: ["Creators"],
      infobox: box("花生酱", "画师", [
        { label: "职务", value: "画师 / Artist" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[不改]]、[[男玩]]、[[Creators]]" },
      ]),
      content: `**花生酱** 是 [[Salad's leucotomy branches]] 的 **画师**（Artist）。

![花生酱](/creators/huashengjiang.jpg)

花生酱负责设施相关的绘制。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]；其他画师见 [[邮箱]] 与 [[WATER_]]；吉祥物见 [[不改]]；建模师见 [[男玩]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "云陌商",
    {
      title: "云陌商",
      categories: ["Creators"],
      infobox: box("云陌商", "Artist", [
        { label: "Role", value: "Artist / 画师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[花生酱]], [[不改]], [[男玩]], [[Creators]]" },
      ]),
      content: `**云陌商** is an **artist** (画师) for [[Salad's leucotomy branches]].

![云陌商](/creators/yunmoshang.jpg)

云陌商 draws for the facility. For the game author, see [[Salad]]; for music, see [[Stalad]]; for other artists, see [[邮箱]], [[WATER_]], and [[花生酱]]; for the mascot, see [[不改]]; for modeling, see [[男玩]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "云陌商",
      categories: ["Creators"],
      infobox: box("云陌商", "画师", [
        { label: "职务", value: "画师 / Artist" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[花生酱]]、[[不改]]、[[男玩]]、[[Creators]]" },
      ]),
      content: `**云陌商** 是 [[Salad's leucotomy branches]] 的 **画师**（Artist）。

![云陌商](/creators/yunmoshang.jpg)

云陌商负责设施相关的绘制。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]；其他画师见 [[邮箱]]、[[WATER_]] 与 [[花生酱]]；吉祥物见 [[不改]]；建模师见 [[男玩]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "言",
    {
      title: "言",
      categories: ["Creators"],
      infobox: box("言", "Artist", [
        { label: "Role", value: "Artist / 画师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[花生酱]], [[云陌商]], [[不改]], [[男玩]], [[Creators]]" },
      ]),
      content: `**言** is an **artist** (画师) for [[Salad's leucotomy branches]].

![言](/creators/yan.jpg)

言 draws for the facility. For the game author, see [[Salad]]; for music, see [[Stalad]]; for other artists, see [[邮箱]], [[WATER_]], [[花生酱]], and [[云陌商]]; for the mascot, see [[不改]]; for modeling, see [[男玩]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[云陌商]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "言",
      categories: ["Creators"],
      infobox: box("言", "画师", [
        { label: "职务", value: "画师 / Artist" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[花生酱]]、[[云陌商]]、[[不改]]、[[男玩]]、[[Creators]]" },
      ]),
      content: `**言** 是 [[Salad's leucotomy branches]] 的 **画师**（Artist）。

![言](/creators/yan.jpg)

言负责设施相关的绘制。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]；其他画师见 [[邮箱]]、[[WATER_]]、[[花生酱]] 与 [[云陌商]]；吉祥物见 [[不改]]；建模师见 [[男玩]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[云陌商]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "凉菜",
    {
      title: "凉菜",
      categories: ["Creators"],
      infobox: box("凉菜", "Artist", [
        { label: "Role", value: "Artist / 画师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[花生酱]], [[云陌商]], [[言]], [[不改]], [[男玩]], [[Creators]]" },
      ]),
      content: `**凉菜** is an **artist** (画师) for [[Salad's leucotomy branches]].

![凉菜](/creators/liangcai.jpg)

凉菜 draws for the facility. For the game author, see [[Salad]]; for music, see [[Stalad]]; for other artists, see [[邮箱]], [[WATER_]], [[花生酱]], [[云陌商]], and [[言]]; for the mascot, see [[不改]]; for modeling, see [[男玩]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[云陌商]]
* [[言]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "凉菜",
      categories: ["Creators"],
      infobox: box("凉菜", "画师", [
        { label: "职务", value: "画师 / Artist" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[花生酱]]、[[云陌商]]、[[言]]、[[不改]]、[[男玩]]、[[Creators]]" },
      ]),
      content: `**凉菜** 是 [[Salad's leucotomy branches]] 的 **画师**（Artist）。

![凉菜](/creators/liangcai.jpg)

凉菜负责设施相关的绘制。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]；其他画师见 [[邮箱]]、[[WATER_]]、[[花生酱]]、[[云陌商]] 与 [[言]]；吉祥物见 [[不改]]；建模师见 [[男玩]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[云陌商]]
* [[言]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "小E",
    {
      title: "小E",
      categories: ["Creators"],
      infobox: box("小E", "Artist", [
        { label: "Role", value: "Artist / 画师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[花生酱]], [[云陌商]], [[言]], [[凉菜]], [[不改]], [[男玩]], [[Creators]]" },
      ]),
      content: `**小E** is an **artist** (画师) for [[Salad's leucotomy branches]].

![小E](/creators/xiaoe.jpg)

小E draws for the facility. For the game author, see [[Salad]]; for music, see [[Stalad]]; for other artists, see [[邮箱]], [[WATER_]], [[花生酱]], [[云陌商]], [[言]], and [[凉菜]]; for the mascot, see [[不改]]; for modeling, see [[男玩]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[云陌商]]
* [[言]]
* [[凉菜]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "小E",
      categories: ["Creators"],
      infobox: box("小E", "画师", [
        { label: "职务", value: "画师 / Artist" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[花生酱]]、[[云陌商]]、[[言]]、[[凉菜]]、[[不改]]、[[男玩]]、[[Creators]]" },
      ]),
      content: `**小E** 是 [[Salad's leucotomy branches]] 的 **画师**（Artist）。

![小E](/creators/xiaoe.jpg)

小E负责设施相关的绘制。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]；其他画师见 [[邮箱]]、[[WATER_]]、[[花生酱]]、[[云陌商]]、[[言]] 与 [[凉菜]]；吉祥物见 [[不改]]；建模师见 [[男玩]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[云陌商]]
* [[言]]
* [[凉菜]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "Flow",
    {
      title: "Flow",
      categories: ["Creators"],
      infobox: box("Flow", "Animator", [
        { label: "Role", value: "Animator / 动画师" },
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Also see", value: "[[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[花生酱]], [[云陌商]], [[言]], [[凉菜]], [[小E]], [[不改]], [[男玩]], [[Creators]]" },
      ]),
      content: `**Flow** is an **animator** (动画师) for [[Salad's leucotomy branches]].

![Flow](/creators/flow.jpg)

Flow handles animation for the facility. For the game author, see [[Salad]]; for music, see [[Stalad]]; for artists, see [[邮箱]], [[WATER_]], [[花生酱]], [[云陌商]], [[言]], [[凉菜]], and [[小E]]; for the mascot, see [[不改]]; for modeling, see [[男玩]].

## See also

* [[Creators]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[云陌商]]
* [[言]]
* [[凉菜]]
* [[小E]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "Flow",
      categories: ["Creators"],
      infobox: box("Flow", "动画师", [
        { label: "职务", value: "动画师 / Animator" },
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "参见", value: "[[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[花生酱]]、[[云陌商]]、[[言]]、[[凉菜]]、[[小E]]、[[不改]]、[[男玩]]、[[Creators]]" },
      ]),
      content: `**Flow** 是 [[Salad's leucotomy branches]] 的 **动画师**（Animator）。

![Flow](/creators/flow.jpg)

Flow 负责设施相关的动画。游戏总作者见 [[Salad]]；曲师见 [[Stalad]]；画师见 [[邮箱]]、[[WATER_]]、[[花生酱]]、[[云陌商]]、[[言]]、[[凉菜]] 与 [[小E]]；吉祥物见 [[不改]]；建模师见 [[男玩]]。

## 参见

* [[Creators|创作者]]
* [[Salad]]
* [[Stalad]]
* [[邮箱]]
* [[WATER_]]
* [[花生酱]]
* [[云陌商]]
* [[言]]
* [[凉菜]]
* [[小E]]
* [[不改]]
* [[男玩]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "Branches",
    {
      title: "Branches",
      categories: ["Basics"],
      infobox: box("Branches", "Facility wings", [
        { label: "Part of", value: "[[Salad's leucotomy branches]]" },
        { label: "Holds", value: "[[Abnormalities]]" },
      ]),
      content: `**Branches** are the wings and corridors of the facility in [[Salad's leucotomy branches]]. Departments and containment halls that the game names belong here.

## See also

* [[Abnormalities]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "分支",
      categories: ["Basics"],
      infobox: box("分支", "设施侧翼", [
        { label: "属于", value: "[[Salad's leucotomy branches]]" },
        { label: "收容", value: "[[Abnormalities]]" },
      ]),
      content: `**Branches（分支）** 是 [[Salad's leucotomy branches]] 设施里的侧翼与走廊。游戏有名字的部门、收容厅归入此类。

## 参见

* [[Abnormalities|异想体]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page(
    "Primary_personality",
    {
      title: "Primary personality",
      categories: ["Basics", "Personalities"],
      infobox: box("Primary personality", "主性格", [
        { label: "Count", value: "8" },
        { label: "Also see", value: "[[Secondary personality]] · [[Category:Personalities]]" },
        { label: "Category", value: "[[Category:Basics]]" },
      ]),
      content: `Each Agent has one **primary personality** (主性格). It is assigned at creation and cannot be changed. It shapes work preference, fear, obedience, and special combat effects.

Full cards (description, bonus, obtain): [[Category:Personalities]].

The eight primaries:

* [[Curious]] — PE-BOX ×1.25
* [[Compassionate]] — SP restore on hostile kill
* [[Resolute]] — less Fear damage
* [[Calm]] — insane-aura immune
* [[Submissive]] — never refuses orders
* [[Bloodthirsty]] — more damage vs hostiles
* [[Callous]] — death-fear / guilt immune
* [[Paranoid]] — more likely to refuse remote orders

For random traits and special unlocks, see [[Secondary personality]] and [[Category:Personalities]].

## See also

* [[Basics]]
* [[Secondary personality]]
* [[Category:Personalities]]
* [[Work]]`,
    },
    {
      title: "主性格",
      categories: ["Basics", "Personalities"],
      infobox: box("主性格", "Primary personality", [
        { label: "数量", value: "8" },
        { label: "参见", value: "[[Secondary personality|副性格]] · [[Category:Personalities|性格]]" },
        { label: "分类", value: "[[Category:Basics|基本信息]]" },
      ]),
      content: `每位员工有一个 **主性格**（primary personality）。创建时固定，不可更改。影响工作偏好、恐惧、服从与战斗特效。

完整卡片（描述、加成、获得）：[[Category:Personalities|性格]]。

八种主性格：

* [[Curious|好奇]] — PE-BOX ×1.25
* [[Compassionate|共情]] — 击杀敌对回复 SP
* [[Resolute|坚定]] — 恐惧伤害降低
* [[Calm|冷静]] — 免疫发疯光环
* [[Submissive|顺从]] — 永不抗命
* [[Bloodthirsty|嗜杀]] — 对敌对伤害提高
* [[Callous|冷酷]] — 免疫死亡恐惧 / 愧疚
* [[Paranoid|多疑]] — 更易拒绝远程指令

随机特质与特殊解锁见 [[Secondary personality|副性格]] 与 [[Category:Personalities|性格]]。

## 参见

* [[Basics|基本信息]]
* [[Secondary personality|副性格]]
* [[Category:Personalities|性格]]
* [[Work|工作]]`,
    }
  ),
  page(
    "Secondary_personality",
    {
      title: "Secondary personality",
      categories: ["Basics", "Personalities"],
      infobox: box("Secondary personality", "副性格", [
        { label: "Traits", value: "19 random" },
        { label: "Special", value: "16 unlock" },
        { label: "Also see", value: "[[Primary personality]] · [[Category:Personalities]]" },
        { label: "Category", value: "[[Category:Basics]]" },
      ]),
      content: `**Secondary personalities** come in two pools (game Personality Codex):

### Traits (19)
Random at creation, or granted by abnormality work when the Agent's **primary matches** the unit. Never from the special pool.

[[Patient]] · [[Impulsive]] · [[Meticulous]] · [[Loyal]] · [[Selfless]] · [[Selfish]] · [[Greedy]] · [[Ambitious]] · [[Obsessive]] · [[Cowardly]] · [[Reckless]] · [[Honest]] · [[Deceptive]] · [[Nostalgic]] · [[Humble]] · [[Arrogant]] · [[Protective]] · [[Innocent]] · [[Devoted]]

### Special (16)
Experience unlocks only. Never from abnormality work grants.

[[Detached]] · [[Zealous]] · [[Vengeful]] · [[GuiltRidden|Guilt-ridden]] · [[Remorse]] · [[Broken]] · [[PTSD]] · [[Inability]] · [[Martyr]] · [[Scarred]] · [[Witness]] · [[Forsaken]] · [[Unbroken]] · [[Hollow]] · [[Devoured]] · [[LastStand|Last Stand]]

Open any name for the full English / Chinese description, attribute bonus, and acquire line — or browse [[Category:Personalities]].

## See also

* [[Basics]]
* [[Primary personality]]
* [[Category:Personalities]]
* [[Work]]`,
    },
    {
      title: "副性格",
      categories: ["Basics", "Personalities"],
      infobox: box("副性格", "Secondary personality", [
        { label: "特质", value: "随机 19" },
        { label: "特殊", value: "解锁 16" },
        { label: "参见", value: "[[Primary personality|主性格]] · [[Category:Personalities|性格]]" },
        { label: "分类", value: "[[Category:Basics|基本信息]]" },
      ]),
      content: `**副性格**在游戏性格图鉴里分两池：

### 特质（19）
创建时随机；或主性格与异想体相符时由工作授予。不会从特殊池掉落。

[[Patient|耐心]] · [[Impulsive|冲动]] · [[Meticulous|严谨]] · [[Loyal|忠诚]] · [[Selfless|无私]] · [[Selfish|自私]] · [[Greedy|贪婪]] · [[Ambitious|野心]] · [[Obsessive|偏执]] · [[Cowardly|怯懦]] · [[Reckless|鲁莽]] · [[Honest|诚实]] · [[Deceptive|善于伪装]] · [[Nostalgic|怀旧]] · [[Humble|谦逊]] · [[Arrogant|傲慢]] · [[Protective|保护欲]] · [[Innocent|天真]] · [[Devoted|奉献]]

### 特殊（16）
仅由经历解锁，永不由异想体工作授予。

[[Detached|疏离]] · [[Zealous|狂热]] · [[Vengeful|记仇]] · [[GuiltRidden|愧疚]] · [[Remorse|悔恨]] · [[Broken|支离破碎]] · [[PTSD]] · [[Inability|失能]] · [[Martyr|殉道者]] · [[Scarred|伤痕累累]] · [[Witness|见证者]] · [[Forsaken|被遗弃者]] · [[Unbroken|不屈]] · [[Hollow|空洞]] · [[Devoured|吞噬者]] · [[LastStand|背水一战]]

点开任意名称可读完整中英描述、属性加成与获得方式；或浏览 [[Category:Personalities|性格]]。

## 参见

* [[Basics|基本信息]]
* [[Primary personality|主性格]]
* [[Category:Personalities|性格]]
* [[Work|工作]]`,
    }
  ),
  page(
    "Personalities",
    {
      title: "Personalities",
      categories: ["Personalities"],
      infobox: box("Personalities", "性格图鉴", [
        { label: "Count", value: "43" },
        { label: "Source", value: "Game Personality Codex" },
        { label: "Category", value: "[[Category:Personalities]]" },
      ]),
      content: `**Personalities** is the full Agent trait catalog for [[Salad's leucotomy branches]].

* [[Primary personality]] — 8 fixed at hire
* [[Secondary personality]] — 19 traits + 16 special unlocks

Browse the board: [[Category:Personalities]].`,
    },
    {
      title: "性格",
      categories: ["Personalities"],
      infobox: box("性格", "Personalities", [
        { label: "数量", value: "43" },
        { label: "来源", value: "游戏性格图鉴" },
        { label: "分类", value: "[[Category:Personalities|性格]]" },
      ]),
      content: `**性格**是 [[Salad's leucotomy branches|Salad's leucotomy branches]] 的员工特质完整目录。

* [[Primary personality|主性格]] — 创建时固定 8 种
* [[Secondary personality|副性格]] — 19 特质 + 16 特殊解锁

图鉴板：[[Category:Personalities|性格]]。`,
    }
  ),
  page(
    "Creators",
    {
      title: "Creators",
      categories: ["Creators"],
      infobox: box("Creators", "Credits", [
        { label: "Game", value: "[[Salad's leucotomy branches]]" },
        { label: "Platform", value: "Roblox" },
      ]),
      content: `**Creators** is the credit list for [[Salad's leucotomy branches]].

![Salad](/creators/salad.png)

**[[Salad]]** — Game author (游戏总作者)

![Stalad](/creators/stalad.png)

**[[Stalad]]** — Composer (曲师)

![邮箱](/creators/youxiang.jpg)

**[[邮箱]]** — Artist (画师)

![WATER_](/creators/water.jpg)

**[[WATER_]]** — Artist (画师)

![不改](/creators/bugai.jpg)

**[[不改]]** — Mascot (吉祥物)

![男玩](/creators/nanwan.jpg)

**[[男玩]]** — Modeler (建模师)

![花生酱](/creators/huashengjiang.jpg)

**[[花生酱]]** — Artist (画师)

![云陌商](/creators/yunmoshang.jpg)

**[[云陌商]]** — Artist (画师)

![言](/creators/yan.jpg)

**[[言]]** — Artist (画师)

![凉菜](/creators/liangcai.jpg)

**[[凉菜]]** — Artist (画师)

![小E](/creators/xiaoe.jpg)

**[[小E]]** — Artist (画师)

![Flow](/creators/flow.jpg)

**[[Flow]]** — Animator (动画师)

## See also

* [[Category:Creators]]
* [[Salad's leucotomy branches]]`,
    },
    {
      title: "创作者",
      categories: ["Creators"],
      infobox: box("创作者", "名单", [
        { label: "游戏", value: "[[Salad's leucotomy branches]]" },
        { label: "平台", value: "Roblox" },
      ]),
      content: `**创作者** 是 [[Salad's leucotomy branches]] 的制作名单。

![Salad](/creators/salad.png)

**[[Salad]]** — 游戏总作者（Game author）

![Stalad](/creators/stalad.png)

**[[Stalad]]** — 曲师（Composer）

![邮箱](/creators/youxiang.jpg)

**[[邮箱]]** — 画师（Artist）

![WATER_](/creators/water.jpg)

**[[WATER_]]** — 画师（Artist）

![不改](/creators/bugai.jpg)

**[[不改]]** — 吉祥物（Mascot）

![男玩](/creators/nanwan.jpg)

**[[男玩]]** — 建模师（Modeler）

![花生酱](/creators/huashengjiang.jpg)

**[[花生酱]]** — 画师（Artist）

![云陌商](/creators/yunmoshang.jpg)

**[[云陌商]]** — 画师（Artist）

![言](/creators/yan.jpg)

**[[言]]** — 画师（Artist）

![凉菜](/creators/liangcai.jpg)

**[[凉菜]]** — 画师（Artist）

![小E](/creators/xiaoe.jpg)

**[[小E]]** — 画师（Artist）

![Flow](/creators/flow.jpg)

**[[Flow]]** — 动画师（Animator）

## 参见

* [[Category:Creators|创作者]]
* [[Salad's leucotomy branches]]`,
    }
  ),
  page("The_Q", {
    title: "The Q",
    categories: ["Basics"],
    infobox: box("The Q", "Emblem", [
      { label: "Form", value: "Brain inside a Q-shaped mark" },
      { label: "Used in", value: "[[Salad's leucotomy branches]]" },
    ]),
    content: `**The Q** is the emblem of [[Salad's leucotomy branches]]: a red brain seated in a white Q. It appears as the facility mark on this wiki and in the game.

## See also

* [[Salad's leucotomy branches]]
* [[Creators]]`,
  }, {
    title: "The Q",
    categories: ["Basics"],
    infobox: box("The Q", "徽章", [
      { label: "形态", value: "白 Q 里的红色脑" },
      { label: "用于", value: "[[Salad's leucotomy branches]]" },
    ]),
    content: `**The Q** 是 [[Salad's leucotomy branches]] 的徽章：白色 Q 形标记中嵌着红色大脑。本站与游戏设施标识都会用到它。

## 参见

* [[Salad's leucotomy branches]]
* [[Creators|创作者]]`,
  }),
  page(
    "Help:Editing",
    {
      title: "Help:Editing",
      categories: ["Help"],
      content: `English is the source. Chinese is optional. Empty Chinese fields show English.

## Language

The **English / 中文** control changes chrome, article text, and which language you are editing.

## Abnormality file

Create one page per abnormality. Keep the **English title** stable (code or English name). Structured files currently include [[Qe]] (H-01-0), [[Imaginary Friend]] (H-02-0), [[folagerlak]] (S-03-0), and [[Unyielding Pale Flower]] (O-04-0).

Infobox rows (example):

* Code —
* Damage — \`[[Red damage]]\` / \`[[Grey damage]]\` / \`[[Cyan damage]]\` / \`[[Black damage]]\`
* Work — \`[[Analysis]]\` / \`[[Instinct]]\` / \`[[Attachment]]\` / \`[[Repression]]\`
* Location — a [[Branches|branch]] if known

The four categories:

* \`Abnormalities\` — 异想体 files
* \`Basics\` — 基本信息 (damage, work, primary / secondary personalities)
* \`Personalities\` — 性格 Codex
* \`Creators\` — 创作者 ([[Salad]], [[Stalad]], [[邮箱]], [[WATER_]], [[不改]], [[男玩]], [[花生酱]], [[云陌商]], [[言]], [[凉菜]], [[小E]], [[Flow]])

An abnormality page should use:

\`Abnormalities\`

Body sections that work well:

## Observation

What it looks like and how it behaves.

## Work

Which work it accepts. What [[Red damage|red]], [[Grey damage|grey]], [[Cyan damage|cyan]], and [[Black damage|black]] do here.

## Notes

Escape conditions, gifts, or other facts from the Roblox game — not copied official manuals.

## Links

* \`[[Abnormalities]]\`
* \`[[Red damage|red damage]]\` for a custom label
* Missing pages are red links

## Damage names in this game

| Color | Damage | Work |
| --- | --- | --- |
| Red / 红伤 | Mental | Analysis / 解析 |
| Grey / 灰伤 | Physical | Instinct / 本能 |
| Cyan / 青伤 | Healing | Attachment / 沟通 |
| Black / 黑伤 | Lasting | Repression / 压迫 |`,
    },
    {
      title: "帮助:编辑",
      categories: ["Help"],
      content: `英语是原文，中文可选。中文留空则显示英语。

## 语言

顶栏 **English / 中文** 会改界面、正文，以及你正在编辑的语言。

## 异想体档案

一个异想体一页。**英语标题**保持稳定（编号或英文名）。当前结构化档案包括 [[Qe]]（H-01-0）、[[Imaginary Friend|幻想朋友]]（H-02-0）、[[folagerlak]]（S-03-0）、[[Unyielding Pale Flower|不屈苍花]]（O-04-0）。

信息框示例：

* 编号 —
* 伤害 — \`[[Red damage]]\` / \`[[Grey damage]]\` / \`[[Cyan damage]]\` / \`[[Black damage]]\`
* 工作 — \`[[Analysis]]\` / \`[[Instinct]]\` / \`[[Attachment]]\` / \`[[Repression]]\`
* 位置 — 若知道，写某个 [[Branches]]

四个分类：

* \`Abnormalities\` — 异想体
* \`Basics\` — 基本信息（伤害、工作、主性格与副性格）
* \`Personalities\` — 性格图鉴
* \`Creators\` — 创作者（[[Salad]]、[[Stalad]]、[[邮箱]]、[[WATER_]]、[[不改]]、[[男玩]]、[[花生酱]]、[[云陌商]]、[[言]]、[[凉菜]]、[[小E]]、[[Flow]]）

异想体档案分类填：

\`Abnormalities\`

正文建议分段：

## 观察

外形与行为。

## 工作

它接受哪种工作。这里的 [[Red damage|红伤]]、[[Grey damage|灰伤]]、[[Cyan damage|青伤]]、[[Black damage|黑伤]] 各做什么。

## 备注

逃脱、礼物、以及这款 Roblox 游戏里的事实。不要整段粘贴官方手册。

## 链接

* \`[[Abnormalities]]\`
* \`[[Red damage|红伤]]\` 可自定义显示文字
* 还不存在的页面是红链

## 本游戏的伤害名

| 颜色 | 伤害 | 工作 |
| --- | --- | --- |
| 红伤 / Red | 精神 | 解析 / Analysis |
| 灰伤 / Grey | 物理 | 本能 / Instinct |
| 青伤 / Cyan | 治疗 | 沟通 / Attachment |
| 黑伤 / Black | 持续 | 压迫 / Repression |`,
    }
  ),
]

for (const p of personalityCatalog) {
  seedPages.push(
    page(
      p.slug,
      {
        title: p.name.en,
        categories: ["Personalities"],
        infobox: box(p.name.en, p.name.zh, [
          { label: "Id", value: p.id },
          { label: "Kind", value: p.kind },
          { label: "Category", value: "[[Category:Personalities]]" },
        ]),
        content: `Structured file for **${p.name.en}**. See the Personality Codex card on this page.`,
      },
      {
        title: p.name.zh,
        categories: ["Personalities"],
        infobox: box(p.name.zh, p.name.en, [
          { label: "Id", value: p.id },
          { label: "类型", value: p.kind },
          { label: "分类", value: "[[Category:Personalities|性格]]" },
        ]),
        content: `**${p.name.zh}** 的结构化档案见本页性格卡片。`,
      }
    )
  )
}
