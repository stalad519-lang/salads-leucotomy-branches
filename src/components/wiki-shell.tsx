"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { BookOpen, Menu, Shuffle, Plus, Settings2 } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { SearchBox } from "@/components/search-box"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useWiki } from "@/components/wiki-provider"
import { HOME_SLUG, wikiHref } from "@/lib/wiki"

const nav = [
  { href: "/", label: "首页" },
  { href: "/special/recent", label: "最近更改" },
  { href: "/special/all", label: "所有页面" },
]

export function WikiShell({ children }: { children: React.ReactNode }) {
  const { settings, pages, updateSettings, resetDemo } = useWiki()
  const pathname = usePathname()
  const router = useRouter()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [name, setName] = useState(settings.name)
  const [tagline, setTagline] = useState(settings.tagline)
  const [menuOpen, setMenuOpen] = useState(false)

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
              aria-label="打开菜单"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </Button>
            <SheetContent side="left" className="bg-[#10243c] text-white">
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
                  新建页面
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex min-w-0 items-center gap-2 text-white">
            <span className="flex size-9 items-center justify-center rounded-md bg-amber-200/15 ring-1 ring-amber-200/30">
              <BookOpen className="size-4 text-amber-200" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-heading text-base leading-tight font-semibold tracking-wide">
                {settings.name}
              </span>
              <span className="hidden truncate text-[11px] text-white/60 sm:block">
                {settings.tagline}
              </span>
            </span>
          </Link>

          <div className="ml-auto hidden w-full max-w-md md:block">
            <SearchBox compact />
          </div>

          <div className="ml-auto flex items-center gap-1 md:ml-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              aria-label="随机条目"
              onClick={goRandom}
            >
              <Shuffle />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              aria-label="百科设置"
              onClick={openSettings}
            >
              <Settings2 />
            </Button>
            <Link
              href="/new"
              className={buttonVariants({
                className:
                  "hidden bg-amber-200 text-[#152536] hover:bg-amber-100 sm:inline-flex",
              })}
            >
              <Plus className="size-4" />
              新建
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 md:hidden">
          <div className="px-4 py-2">
            <SearchBox compact />
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
                      ? "border-amber-200 text-white"
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

      <footer className="mt-auto border-t border-[#d9cfc0] bg-[#f3eee4] px-4 py-6 text-center text-xs text-muted-foreground">
        内容保存在本机浏览器。推荐发布到 Cloudflare 免费域名{" "}
        <span className="font-mono">pages.dev</span>，方便国内和国际访问。
      </footer>

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>百科设置</DialogTitle>
            <DialogDescription>
              名字只存在你的浏览器里。重置会恢复示例条目，并覆盖同名页面。
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <label className="grid gap-1 text-sm">
              维基名称
              <Input value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label className="grid gap-1 text-sm">
              副标题
              <Input
                value={tagline}
                onChange={(event) => setTagline(event.target.value)}
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
              恢复示例
            </Button>
            <Button
              onClick={() => {
                updateSettings({
                  name: name.trim() || "星尘百科",
                  tagline: tagline.trim(),
                })
                setSettingsOpen(false)
              }}
            >
              保存
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
