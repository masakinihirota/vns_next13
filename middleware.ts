import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import acceptLanguage from "accept-language"
import { NextResponse } from "next/server"

import { fallbackLng, languages, cookieName } from "@/app/i18n/settings"

import type { NextRequest } from "next/server"

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"]
}

export async function middleware(req: NextRequest) {
  // 認証 cookie
  // 有効期限が切れたセッションを更新するために必要です。
  const res = NextResponse.next()

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  // 有効期限が切れたセッションを更新します。
  await supabase.auth.getSession()

  // i18n
  // リクエストに含まれる言語情報を取得し、サポートされていない言語の場合はリダイレクトを行います。
  let lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"))
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    )
  }

  const refererHeaderValue = req.headers.get("referer")

  if (refererHeaderValue !== null) {
    const refererUrl = new URL(refererHeaderValue)
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )
    const res = NextResponse.next()
    if (lngInReferer) res.cookies.set(cookieName, lngInReferer)
    return res
  }

  return res
}
