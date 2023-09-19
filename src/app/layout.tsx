import "@/styles/globals.css"
import { Metadata } from "next"
import React from "react"

import { Providers } from "./providers"

// Next.jsではmetadataを使ってメタデータを設定します。
export const metadata: Metadata = {
  title: "VNS.BLUE",
  description: "VNS.BLUE",
  keywords: "VNS.BLUE, オアシス宣言"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
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
