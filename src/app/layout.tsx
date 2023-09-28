import "@/styles/globals.css"
import { dir } from "i18next"
import { Metadata } from "next"
import React from "react"

import TopNav from "@/components/nav/TopNav"

import { languages } from "./i18n/settings"
import { Providers } from "./providers"

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

// Next.jsではmetadataを使ってメタデータを設定します。
export const metadata: Metadata = {
  title: "VNS.BLUE",
  description: "VNS.BLUE",
  keywords: "VNS.BLUE, オアシス宣言"
}

export default function RootLayout({
  children,
  params: { lng = "en" }
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body suppressHydrationWarning={true}>
        <TopNav />
        <Providers>
          {/* ↓ログイン画面に影響を与えている */}
          <main className="flex flex-col items-center min-h-screen bg-background">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
