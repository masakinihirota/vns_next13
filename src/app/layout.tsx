import "@/styles/globals.css"
import { dir } from "i18next"
import { Metadata } from "next"
import React from "react"

import { ThemeProvider } from "@/components/client/theme-provider"

import { languages } from "./i18n/settings"
// import { Providers } from "./providers"

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

// Next.jsではmetadataを使ってメタデータを設定します。
export const metadata: Metadata = {
  title: "VNS.BLUE",
  description: "VNS.BLUE",
  keywords: "VNS.BLUE, オアシス宣言"
}

// 動的レンダリングを強制します。
export const dynamic = "force-dynamic"

export default function RootLayout({
  children,
  params: { lng = "en" }
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body>
        {/* サイト全体にshadcn/cnの影響を与える */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
