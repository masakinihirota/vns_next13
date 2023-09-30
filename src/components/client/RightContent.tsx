// RightContent.tsx
import React from "react"

const RightContent = ({ page }: { page: string }) => {
  const getPageContent = () => {
    switch (page) {
      case "category-manga":
        return (
          <div>
            <h1>漫画</h1>
            <p>ここに漫画のコンテンツが表示されます。</p>
          </div>
        )
      default:
        return (
          <div>
            <h1>ページが見つかりません</h1>
            <p>指定されたページは存在しません。</p>
          </div>
        )
    }
  }

  return (
    <main className="flex-grow p-3 text-xl bg-gray-100 text-foreground">
      {getPageContent()}
    </main>
  )
}

export default RightContent
