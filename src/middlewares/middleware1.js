import acceptLanguage from "accept-language"
import { NextResponse } from "next/server"

import { fallbackLng, languages, cookieName } from "@/app/i18n/settings"

acceptLanguage.languages(languages)

export function withMiddleware1(middleware) {
  return async (req, event) => {
    // const url = req.url
    // console.log("middleware1 =>", { url })
    const pathname = req.nextUrl.pathname
    console.log("middleware1 =>", { pathname })

    const supportedLanguages = ["en", "de", "ja"]

    // Root path の場合言語判定をしない
    // if (req.nextUrl.pathname === "/") {
    // if (!["en", "de", "ja"].includes(req.cookies.get("lang"))) {
    if (!supportedLanguages.includes(req.cookies.get("lang"))) {
      return middleware(req, event)
    }

    let lng
    if (req.cookies.has(cookieName))
      lng = acceptLanguage.get(req.cookies.get(cookieName).value)
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

    if (req.headers.has("referer")) {
      const refererUrl = new URL(req.headers.get("referer"))
      const lngInReferer = languages.find((l) =>
        refererUrl.pathname.startsWith(`/${l}`)
      )
      const response = NextResponse.next()
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
      return response
    }

    return middleware(req, event)
  }
}
