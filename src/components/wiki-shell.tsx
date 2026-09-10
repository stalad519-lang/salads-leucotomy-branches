"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useWiki } from "@/components/wiki-provider"
import { HOME_SLUG, wikiHref } from "@/lib/wiki"

export function WikiShell({ children }: { children: React.ReactNode }) {
  const { settings, pages, updateSettings, resetDemo, t } = useWiki()
  const pathname = usePathname()
  const router = useRouter()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [name, setName] = useState(settings.name)
  const [tagline, setTagline] = useState(settings.tagline)
  const [menuOpen, setMenuOpen] = useState(false)

  const nav = [
    { href: "/", label: t("navMain") },
    { href: "/special/recent", label: t("navRecent") },
    { href: "/special/all", label: t("navAll") },
  ]

  function openSettings() {
    setName(settings.name)
    setTagline(settings.tagline)
    setSettingsOpen(true)
  }

  function goRandom() {
    const slugs = Object.keys(pages)
    if (slugs.length === 0) return
    const slug = slugs[Math.floor(Math.random() * slugs.length)]
    router.push(wikiHref(slug))
  }

  return (
    <div className="wiki-shell min-h-full">
      <header className="wiki-topbar">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 md:hidden"
              aria-label={t("openMenu")}
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </Button>
            <SheetContent side="left" className="bg-[#111] text-white">
              <SheetHeader>
                <SheetTitle className="text-white">{settings.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-2 py-2 text-sm hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/new"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-2 py-2 text-sm hover:bg-white/10"
                >
                  {t("newPage")}
                </Link>
              </nav>
              <div className="px-4 pt-4">
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex min-w-0 items-center gap-2.5 text-white">
            <Image
              src="/game-icon.jpg"
              alt=""
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-md ring-1 ring-white/20"
            />
            <span className="min-w-0">
              <span className="block truncate font-heading text-[15px] leading-tight font-semibold tracking-wide">
                {settings.name}
              </span>
              <span className="hidden truncate text-[11px] text-white/55 sm:block">
                {settings.tagline || t("defaultTagline")}
              </span>
            </span>
          </Link>

          <div className="ml-auto hidden w-full max-w-sm lg:block">
            <SearchBox compact />
          </div>

          <div className="ml-auto flex items-center gap-2 md:ml-2">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              aria-label={t("random")}
              onClick={goRandom}
            >
              <Shuffle />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              aria-label={t("settings")}
              onClick={openSettings}
            >
              <Settings2 />
            </Button>
            <Link
              href="/new"
              className={buttonVariants({
                className:
                  "hidden bg-[#c81e1e] text-white hover:bg-[#e03131] sm:inline-flex",
              })}
            >
              <Plus className="size-4" />
              {t("newShort")}
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 md:hidden">
          <div className="flex items-center gap-2 px-4 py-2">
            <SearchBox compact />
            <LanguageSwitcher />
          </div>
        </div>
        <div className="hidden border-t border-white/10 md:block">
          <nav className="mx-auto flex max-w-6xl gap-1 px-4">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/" || pathname === wikiHref(HOME_SLUG)
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-2 px-3 py-2 text-sm ${
                    active
                      ? "border-[#c81e1e] text-white"
                      : "border-transparent text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>

      <footer className="mt-auto border-t border-neutral-800 bg-black px-4 py-6 text-center text-xs text-white/45">
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
                className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </label>
            <label className="grid gap-1 text-sm">
              {t("settingsTagline")}
              <input
                value={tagline}
                onChange={(event) => setTagline(event.target.value)}
                className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </label>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button
              variant="outline"
              onClick={() => {
                resetDemo()
                setSettingsOpen(false)
                router.push("/")
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
