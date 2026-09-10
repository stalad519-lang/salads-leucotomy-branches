import Link from "next/link"

export default function NotFound() {
  return (
    <div className="wiki-article">
      <h1 className="wiki-title">没有这个地址</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        这个路径不是百科里的条目。条目在{" "}
        <code className="rounded bg-muted px-1">/wiki/标题</code>。
      </p>
      <p className="mt-4 text-sm">
        <Link href="/">回到首页</Link>
        {" · "}
        <Link href="/special/all">所有页面</Link>
      </p>
    </div>
  )
}
