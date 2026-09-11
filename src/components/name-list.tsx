"use client"

import { Link } from "@/components/wiki-link"

export type NameListItem = {
  href: string
  name: string
  hint?: string
}

export function NameList({ items }: { items: NameListItem[] }) {
  if (items.length === 0) return null
  return (
    <ul className="name-list">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>
            <span className="name-list-name">{item.name}</span>
            {item.hint ? <span className="name-list-hint">{item.hint}</span> : null}
          </Link>
        </li>
      ))}
    </ul>
  )
}
