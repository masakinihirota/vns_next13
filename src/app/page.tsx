import { Button } from "@nextui-org/button"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"

import ClientComponent from "@/__tests__/client/page"
import Counter from "@/__tests__/components/component"
import Page from "@/__tests__/rsc/page"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

import LogoutButton from "../components/LogoutButton"

// 動的レンダリングを強制します。
export const dynamic = "force-dynamic"

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user }
  } = await supabase.auth.getUser()

  // 3番目のテスト用のblogId
  const blogId = "123"

  return (
    // 全体を縦にならべている、幅いっぱいに並べている
    <div className="flex flex-col items-center w-full">
      {/* nav部分 Home ,Advertisement, Dark mode,Language, Login */}
      {/* ナビ部分の高さを決めている、ボーダーラインボトムを描いている ボーダー色は現在の文字色
      ナビ部分とメイン部分の分離箇所 */}
      <nav className="flex justify-center w-full h-16 border-b border-current">
        {/* ナビ部分 上下中央に揃えている 横に均等にならべている 幅いっぱいに使っている */}
        <div className="flex items-center justify-between w-full">
          VNS.BLUE
          <div />
          <ThemeSwitcher />
          <div />
          Language
          <div />
          Advertisement
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Welcome to VNS.BLUE, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* メイン部分 */}
      <main className="flex flex-col w-full max-w-4xl p-3 text-xl text-foreground">
        <h1>Welcome to VNS.BLUE</h1>
        <br />
        <Link href="./examples/client-component">Client Component Example</Link>
        <Link href="./examples/route-handler">Route Handler Example</Link>
        <Link href="./examples/server-action">Server Action Example</Link>
        <Link href="./examples/server-component">Server Component Example</Link>
        <br />
        {/* <Link href={`/${lng}/login`}></Link> */}
        <Link href={`/en`}>英語</Link>
        <Link href="/de">ドイツ語</Link>
        <Link href="/ja">日本語</Link>
      </main>
      <h1 className="text-3xl font-bold underline">VNS.BLUE</h1>
      {/* テストとストーリーファイル 4種類 */}
      <ClientComponent />
      <Counter />
      <Link href={`/blog/${blogId}`}>Blogページ</Link>
      <Page />

      <div>
        {/* 外部製のコンポーネントの導入 */}
        <Button>Click me</Button>
      </div>

      <footer className="flex items-center justify-center h-16">
        VNS.BLUE 2023
      </footer>
    </div>
  )
}
