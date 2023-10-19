import Footer from "@/components/nav/Footer"

// Tailwind CSS 入門と実践
// https://zenn.dev/yohei_watanabe/books/c0b573713734b9

// Tailwind CSS Cheat Sheet
// https://tailwindcomponents.com/cheatsheet/

// 動的レンダリングを強制します。
export const dynamic = "force-dynamic"

export default async function Index() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-8 animate-pulse ">
        <div className="w-16 h-16 bg-red-500"></div>
        <div className="w-16 h-16 bg-blue-500"></div>
        <div className="w-16 h-16 bg-green-500"></div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white">Left</div>
        <div className="bg-white">Right</div>
      </div>
      <Footer />
    </div>
  )
}
