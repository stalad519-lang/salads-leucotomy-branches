"use client"

import Image from "next/image"
import { useSyncExternalStore, useState } from "react"
import { Menu, Shuffle, Plus, Settings2 } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SearchBox } from "@/components/search-box"
import { Link } from "@/components/wiki-link"
import {
  getLocation,
  getServerLocation,
  navigate,
  subscribeLocation,
} from "@/lib/nav"
import { findAbnormality } from "@/lib/abnormality"
import { categoryLabel, PRIMARY_CATEGORIES } from "@/lib/i18n"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useWiki } from "@/components/wiki-provider"
import { categoryHref, wikiHref } from "@/lib/wiki"

export function WikiShell({ children }: { children: React.ReactNode }) {
  const { settings, pages, updateSettings, resetDemo, t, locale } = useWiki()
  const pathname = useSyncExternalStore(
    subscribeLocation,
    getLocation,
    getServerLocation
  ).pathname
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [name, setName] = useState(settings.name)
  const [tagline, setTagline] = useState(settings.tagline)
  const [menuOpen, setMenuOpen] = useState(false)

  const departments = PRIMARY_CATEGORIES.map((key) => ({
    key,
    href: key === "Abnormalities" ? "/" : categoryHref(key),
    label: categoryLabel(key, locale),
  }))

  function openSettings() {
    setName(settings.name)
    setTagline(settings.tagline)
    setSettingsOpen(true)
  }

  function goRandom() {
    const slugs = Object.keys(pages)
    if (slugs.length === 0) return
    const slug = slugs[Math.floor(Math.random() * slugs.length)]
    navigate(wikiHref(slug))
  }

  function departmentActive(href: string, key: string) {
    if (key === "Abnormalities") {
      if (pathname === "/" || pathname.startsWith("/category/Abnormalities")) {
        return true
      }
      const wiki = pathname.match(/^\/wiki\/(.+)$/)
      return Boolean(wiki && findAbnormality(decodeURIComponent(wiki[1])))
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="wiki-shell min-h-full">
      <header className="wiki-topbar">
        <div className="wiki-topbar-row mx-auto flex max-w-6xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <Button
              variant="ghost"
              size="icon"
              className="topbar-icon shrink-0 text-white hover:bg-white/10"
              aria-label={t("openMenu")}
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </Button>
            <SheetContent side="left" className="border-white bg-black text-white">
              <SheetHeader>
                <SheetTitle className="text-white">{settings.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {departments.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-2 py-2 text-sm hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/special/all"
                  onClick={() => setMenuOpen(false)}
                  className="px-2 py-2 text-sm hover:bg-white/10"
                >
                  {t("navAll")}
                </Link>
                <Link
                  href="/special/recent"
                  onClick={() => setMenuOpen(false)}
                  className="px-2 py-2 text-sm hover:bg-white/10"
                >
                  {t("navRecent")}
                </Link>
                <Link
                  href="/new"
                  onClick={() => setMenuOpen(false)}
                  className="px-2 py-2 text-sm hover:bg-white/10"
                >
                  {t("newPage")}
                </Link>
                <button
                  type="button"
                  className="px-2 py-2 text-left text-sm hover:bg-white/10"
                  onClick={() => {
                    setMenuOpen(false)
                    goRandom()
                  }}
                >
                  {t("random")}
                </button>
                <button
                  type="button"
                  className="px-2 py-2 text-left text-sm hover:bg-white/10"
                  onClick={() => {
                    setMenuOpen(false)
                    openSettings()
                  }}
                >
                  {t("settings")}
                </button>
              </nav>
              <div className="mt-4 border-t border-white/30 px-4 pt-4">
                <p className="mb-2 text-xs tracking-wide text-white/55 uppercase">
                  {t("language")}
                </p>
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>

          <Link
            href="/"
            className="wiki-brand flex min-w-0 shrink-0 items-center gap-2 text-white sm:gap-2.5"
          >
            <span className="wiki-brand-icon" aria-hidden>
              <Image
                src="/game-icon.jpg"
                alt=""
                width={64}
                height={64}
              />
            </span>
            <span className="wiki-brand-name min-w-0">
              <span className="block truncate text-[15px] leading-tight font-semibold">
                {settings.name}
              </span>
            </span>
          </Link>

          <div className="ml-1 min-w-0 flex-1 sm:ml-2">
            <SearchBox compact />
          </div>

          <div className="topbar-actions flex shrink-0 items-center gap-0.5 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="topbar-icon hidden text-white hover:bg-white/10 sm:inline-flex"
              aria-label={t("random")}
              onClick={goRandom}
            >
              <Shuffle />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="topbar-icon hidden text-white hover:bg-white/10 sm:inline-flex"
              aria-label={t("settings")}
              onClick={openSettings}
            >
              <Settings2 />
            </Button>
            <Link
              href="/new"
              className={buttonVariants({
                className:
                  "hidden border border-white bg-[#c8102e] text-white shadow-[0_0_12px_rgba(200,16,46,0.45)] hover:bg-[#e31b3d] sm:inline-flex",
              })}
            >
              <Plus className="size-4" />
              {t("newShort")}
            </Link>
          </div>
        </div>
        <nav className="dept-tabs" aria-label="departments">
          {departments.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={departmentActive(item.href, item.key) ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-5">{children}</main>

      <footer className="mt-auto border-t border-white bg-black px-4 py-6 text-center text-xs text-white/50">
        {t("footer")}
      </footer>

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("settings")}</DialogTitle>
            <DialogDescription>{t("settingsHelp")}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <label className="grid gap-1 text-sm">
              {t("settingsName")}
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="h-8 w-full border border-white bg-black px-2.5 text-sm outline-none"
              />
            </label>
            <label className="grid gap-1 text-sm">
              {t("settingsTagline")}
              <input
                value={tagline}
                onChange={(event) => setTagline(event.target.value)}
                className="h-8 w-full border border-white bg-black px-2.5 text-sm outline-none"
              />
            </label>
            <div className="grid gap-1 text-sm">
              <span>{t("language")}</span>
              <LanguageSwitcher />
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button
              variant="outline"
              onClick={() => {
                resetDemo()
                setSettingsOpen(false)
                navigate("/")
              }}
            >
              {t("restore")}
            </Button>
            <Button
              onClick={() => {
                updateSettings({
                  name: name.trim() || t("gameName"),
                  tagline: tagline.trim(),
                })
                setSettingsOpen(false)
              }}
            >
              {t("save")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
