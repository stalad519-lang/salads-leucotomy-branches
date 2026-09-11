import type { Metadata } from "next"
import { Noto_Sans_SC } from "next/font/google"

import { WikiProvider } from "@/components/wiki-provider"
import { WikiShell } from "@/components/wiki-shell"

import "./globals.css"

const sans = Noto_Sans_SC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Salad's leucotomy branches",
    template: "%s · Salad's leucotomy branches",
  },
  description: "Wiki for Salad's leucotomy branches, a Roblox Lobotomy Corporation fan game. English source, Chinese optional.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/game-icon.jpg", sizes: "1080x1080", type: "image/jpeg" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <WikiProvider>
          <WikiShell>{children}</WikiShell>
        </WikiProvider>
      </body>
    </html>
  )
}
