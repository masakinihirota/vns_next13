import Link from "next/link"

import { useTranslation } from "../i18n"
export default async function Page({ params: { lng } }) {
  // console.log("lng", lng)

  // アラビア語用
  // const lang = dir(lng)
  // console.log("dir", lang)

  const { t } = await useTranslation(lng)
  return (
    <div className="flex flex-row">
      <main className="flex flex-col w-full max-w-4xl p-3 text-xl text-foreground">
        {lng}
        <br />
        [lng]トップページ
        <br />
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2">
            <h1>{t("title")}</h1>
            <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
            <br />
            <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
            <br />
            <Link href="/">トップページ</Link>
            <br />
          </div>
          <div className="flex flex-col w-1/2">
            1メインコンテンツ メインコンテンツ メインコンテンツ メインコンテンツ
            メインコンテンツ メインコンテンツ1
          </div>
        </div>
      </main>
    </div>
  )
}
