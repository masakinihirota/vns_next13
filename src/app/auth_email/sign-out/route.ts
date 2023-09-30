import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const supabase = createRouteHandlerClient({ cookies })

  await supabase.auth.signOut()

  // ログアウト後のリダイレクトページを指定
  return NextResponse.redirect(`${requestUrl.origin}/`, {
    // a 301 status is required to redirect from a POST to a GET route
    // HTTPステータスコード301は、「Moved Permanently（恒久的に移動した）」を意味し、リクエストされたリソースが恒久的に移動したことを示します。
    status: 301
  })
}
