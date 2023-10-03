import Link from "next/link"

import Footer from "@/components/nav/Footer"
import TopNav from "@/components/nav/TopNav"

// 動的レンダリングを強制します。
export const dynamic = "force-dynamic"

export default async function Index() {
  return (
    // 全体を縦にならべている、幅いっぱいに並べている
    <div className="flex flex-col items-center w-full">
      <TopNav />

      {/* メイン部分 */}
      <div className="flex flex-col items-center w-full max-w-4xl p-3 text-xl text-foreground">
        <h1>Welcome to VNS.BLUE</h1>
        <br />
        {/* <Link href={`/${lng}/login`}></Link> */}
        <Link className="hover:bg-gray-400" href={`/en`}>
          英語
        </Link>
        <Link className="hover:bg-gray-400" href="/de">
          ドイツ語
        </Link>
        <Link className="hover:bg-gray-400" href="/ja">
          日本語
        </Link>
        <Link className="hover:bg-gray-400" href="/auth/signin">
          signin
        </Link>
      </div>

      <Footer />
    </div>
  )
}
