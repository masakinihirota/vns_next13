import acceptLanguage from "accept-language"

import { languages } from "@/app/i18n/settings"

acceptLanguage.languages(languages)
export function withMiddleware3(middleware) {
  return async (req, event) => {
    // const url = req.url
    // console.log("middleware3 =>", { url })

    return middleware(req, event)
  }
}
