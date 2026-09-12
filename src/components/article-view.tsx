"use client"

import { Link } from "@/components/wiki-link"

import { AbnormalityFile } from "@/components/abnormality-file"
import { PersonalityFile } from "@/components/personality-file"
import { InfoboxCard } from "@/components/infobox"
import { WikiMarkdown } from "@/components/wiki-markdown"
import { useWiki } from "@/components/wiki-provider"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { findAbnormality, loc } from "@/lib/abnormality"
import { findPersonality } from "@/lib/personality"
import { categoryLabel } from "@/lib/i18n"
import {
  categoryHref,
  editHref,
  extractToc,
  formatTime,
  historyHref,
  HOME_SLUG,
  titleFromSlug,
  wikiHref,
} from "@/lib/wiki"

export function ArticleView({ slug }: { slug: string }) {
  const { getPage, resolve, t, locale } = useWiki()
  const file = findAbnormality(slug)
  const personality = findPersonality(slug)
  const page = getPage(slug)
  const resolved = page ? resolve(page) : null
  const tabSlug = page?.slug ?? file?.slug ?? personality?.slug ?? slug
  const title = file
    ? loc(file.name, locale)
    : personality
      ? loc(personality.name, locale)
      : (resolved?.title ?? titleFromSlug(slug))

  if (file) {
    return (
      <article className="wiki-article abn-article">
        <AbnormalityFile file={file} notes={resolved?.content} />
      </article>
    )
  }

  if (personality) {
    return (
      <article className="wiki-article pers-article">
        <PersonalityFile file={personality} notes={resolved?.content} />
      </article>
    )
  }

  if (!page || !resolved) {
    return (
      <article className="wiki-article">
        <PageTabs slug={slug} current="view" missing />
        <h1 className="wiki-title">{title}</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {t("missingPage")}{" "}
          <code className="rounded bg-muted px-1">[[{title}]]</code>
        </p>
        <Link href={editHref(slug)} className={buttonVariants({ className: "mt-4" })}>
          {t("createPage")}
        </Link>
      </article>
    )
  }

  const toc = extractToc(resolved.content)

  return (
    <article className="wiki-article">
      <PageTabs slug={tabSlug} current="view" />
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="min-w-0 flex-1">
          <h1 className="wiki-title">{resolved.title}</h1>
          {resolved.usingEnglishFallback && locale === "zh" ? (
            <p className="fallback-note">{t("usingEnglish")}</p>
          ) : null}
          <p className="mt-1 text-xs text-muted-foreground">
            {t("lastEdited")} {formatTime(page.updatedAt, locale)}
            {page.slug !== HOME_SLUG ? (
              <>
                {" "}
                ·{" "}
                <Link href={historyHref(tabSlug)} className="wiki-inline">
                  {t("viewHistory")}
                </Link>
              </>
            ) : null}
          </p>
          <div className="mt-5 lg:hidden">
            {resolved.infobox ? <InfoboxCard infobox={resolved.infobox} /> : null}
          </div>
          <WikiMarkdown content={resolved.content} className="mt-5" />
          <div className="wiki-cats">
            <span className="text-xs text-muted-foreground">{t("categories")}:</span>
            {resolved.categories.length ? (
              resolved.categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  render={<Link href={categoryHref(category)} />}
                >
                  {categoryLabel(category, locale)}
                </Badge>
              ))
            ) : (
              <span className="text-xs text-muted-foreground">{t("uncategorized")}</span>
            )}
          </div>
        </div>
        <aside className="w-full shrink-0 lg:w-64">
          <div className="hidden lg:block">
            {resolved.infobox ? <InfoboxCard infobox={resolved.infobox} /> : null}
          </div>
          {toc.length > 0 ? (
            <nav className="wiki-toc">
              <div className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {t("contents")}
              </div>
              <ul>
                {toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </aside>
      </div>
    </article>
  )
}

function PageTabs({
  slug,
  current,
  missing = false,
}: {
  slug: string
  current: "view" | "edit" | "history"
  missing?: boolean
}) {
  const { t } = useWiki()
  const tabs = [
    {
      href: slug === HOME_SLUG ? "/" : wikiHref(slug),
      key: "view" as const,
      label: t("page"),
    },
    {
      href: editHref(slug),
      key: "edit" as const,
      label: missing ? t("create") : t("edit"),
    },
    { href: historyHref(slug), key: "history" as const, label: t("history") },
  ]
  return (
    <div className="wiki-tabs">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          href={tab.href}
          className={tab.key === current ? "active" : ""}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  )
}
