"use client"

import { useWiki } from "@/components/wiki-provider"
import type { Locale } from "@/lib/types"

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useWiki()

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="lang-switch"
    >
      {(["en", "zh"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={locale === code}
          className={locale === code ? "active" : ""}
          onClick={() => setLocale(code)}
        >
          {code === "en" ? t("english") : t("chinese")}
        </button>
      ))}
    </div>
  )
}
