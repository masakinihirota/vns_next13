import { chain } from "@/middlewares/chain"
import { withMiddleware1 } from "@/middlewares/middleware1"
import { withMiddleware2 } from "@/middlewares/middleware2"
import { withMiddleware3 } from "@/middlewares/middleware3"

export default chain([withMiddleware1, withMiddleware2, withMiddleware3])

export const config = {
  matcher: [
    // "/:lng*",
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"
  ]
}
