"use client"

import type { ComponentProps } from "react"

import { navigate } from "@/lib/nav"

export function WikiLink({
  href,
  onClick,
  target,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      href={href}
      target={target}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        if (target === "_blank") return
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        if (event.button !== 0) return
        const next = href ?? ""
        if (!next || next.startsWith("#") || /^(https?:)?\/\//.test(next) || next.startsWith("mailto:")) {
          return
        }
        event.preventDefault()
        navigate(next)
      }}
      {...props}
    />
  )
}

export { WikiLink as Link }
