import Link from "next/link"
import React from "react"

import { DarkToggle } from "@/components/DarkToggle"

// import { ThemeSwitcher } from "../ThemeSwitcher"

// Login用
// import LogoutButton from "../LogoutButton"
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
// import { cookies } from "next/headers"

export default async function TopNav() {
  // const supabase = createServerComponentClient({ cookies })

  // const {
  //   data: { user }
  // } = await supabase.auth.getUser()

  return (
    <nav className="flex justify-center w-full h-16 border-b border-current">
      {/* nav部分 Home ,Advertisement, Dark mode,Language, Login */}
      {/* ナビ部分の高さを決めている、ボーダーラインボトムを描いている ボーダー色は現在の文字色
      ナビ部分とメイン部分の分離箇所 */}
      {/* ナビ部分 上下中央に揃えている 横に均等にならべている 幅いっぱいに使っている */}
      <div className="flex items-center justify-between w-full">
        <Link href="/">VNS.BLUE</Link>
        <div />
        <DarkToggle />
        {/* <ThemeSwitcher /> */}
        <div />
        Language
        <div />
        Advertisement
        {/* ログインは各種機能ができるまで非表示 */}
        <div>
          No-Account
          {/* {user ? (
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
          )} */}
        </div>
      </div>
    </nav>
  )
}
