// 動的レンダリングを強制します。
export const dynamic = "force-dynamic"

export default async function Index() {
  return (
    // 全体を縦にならべている、幅いっぱいに並べている
    <div className="">
      <h1>(02_user-profiles)\user-profiles</h1>
      <br />

      <footer className="flex items-center justify-center h-16">
        VNS.BLUE 2023
      </footer>
    </div>
  )
}
