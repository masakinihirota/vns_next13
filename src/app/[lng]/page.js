import Link from "next/link"

import LeftMenu from "@/components/nav/LeftMenu"

import { useTranslation } from "../i18n"

export default async function Page({ params: { lng } }) {
  // console.log("lng", lng);

  const { t } = await useTranslation(lng)
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <LeftMenu lng={lng} />
        <main className="flex flex-col w-full max-w-4xl p-3 text-xl text-foreground">
          <Link href="/ja">日本語</Link>
          <br />
          [lng]トップページ
          <br />
          メインコンテンツ メインコンテンツ メインコンテンツ メインコンテンツ
          メインコンテンツ メインコンテンツ
          {/* <h1>Hi there!</h1> */}
          <h1>{t("title")}</h1>
          <Link href={`/${lng}/second-page`}>
            {/* second page */}
            {t("to-second-page")}
          </Link>
          <br />
          <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
          <br />
          <Link href="/">トップページ</Link>
          <br />{" "}
        </main>
      </div>
    </div>
  )
}
