import type { Metadata } from "next"
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google"

import { WikiProvider } from "@/components/wiki-provider"
import { WikiShell } from "@/components/wiki-shell"

import "./globals.css"

const sans = Noto_Sans_SC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const serif = Noto_Serif_SC({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "星尘百科",
    template: "%s · 星尘百科",
  },
  description: "一份可编辑的个人维基。推荐发布到 Cloudflare 免费域名 pages.dev。",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <WikiProvider>
          <WikiShell>{children}</WikiShell>
        </WikiProvider>
      </body>
    </html>
  )
}
