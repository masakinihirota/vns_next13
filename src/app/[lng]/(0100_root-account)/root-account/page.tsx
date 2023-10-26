import Footer from "@/components/nav/Footer"

// 動的レンダリングを強制します。
export const dynamic = "force-dynamic"

export default async function Index() {
  return (
    <div className="">
      <h1>(01_root-account)\root-account</h1>
      <br />

      <Footer />
    </div>
  )
}
