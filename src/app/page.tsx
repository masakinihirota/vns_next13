import Link from "next/link"

import { Button } from "@/components/ui/button"

// 動的レンダリングを強制します。
export const dynamic = "force-dynamic"

export default async function Index() {
  return (
    // 全体を縦にならべている、幅いっぱいに並べている
    <div className="flex flex-col items-center w-full">
      {/* メイン部分 */}
      <main className="flex flex-col items-center w-full max-w-4xl p-3 text-xl text-foreground">
        <h1>Welcome to VNS.BLUE</h1>
        {/* <Link href={`/${lng}/login`}></Link> */}
        <Link href={`/en`}>英語</Link>
        <Link href="/de">ドイツ語</Link>
        <Link href="/ja">日本語</Link>
        <Button>Click me</Button>
      </main>

      <footer className="flex items-center justify-center h-16">
        VNS.BLUE 2023
      </footer>
    </div>
  )
}
