import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
import React from "react"

import LogoutButton from "@/components/auth/LogoutButton"
import { DarkToggle } from "@/components/client/DarkToggle"

export default async function TopNav() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user }
  } = await supabase.auth.getUser()

  return (
    <nav className="flex justify-center w-full h-16 border-b border-current">
      {/* nav部分 Home ,Advertisement, Dark mode,Language, Login */}
      {/* ナビ部分の高さを決めている、ボーダーラインボトムを描いている ボーダー色は現在の文字色
      ナビ部分とメイン部分の分離箇所 */}
      {/* ナビ部分 上下中央に揃えている 横に均等にならべている 幅いっぱいに使っている */}
      <div className="flex items-center justify-between w-full">
        <Link className="hover:bg-gray-400" href="/">
          VNS.BLUE
        </Link>
        <div />
        <DarkToggle />
        <div />
        <Link className="hover:bg-gray-400" href="/">
          Language
        </Link>
        <div />
        <Link className="hover:bg-gray-400" href="/">
          Advertisement
        </Link>

        <div>
          {user ? (
            <div className="flex items-center gap-4">
              Welcome to VNS.BLUE, {user.email}!
              <LogoutButton />
            </div>
          ) : (
            <Link className="hover:bg-gray-400" href="/auth/signin">
              signin
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
