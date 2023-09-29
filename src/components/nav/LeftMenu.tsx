// LeftMenu.tsx
import React from "react"

const LeftMenu = ({ lng }) => {
  // console.log("lng", lng)

  return (
    <aside className="flex flex-col w-64">
      <nav className="flex-grow">
        <div className="p-2 hover:bg-gray-400">
          <a href={`/${lng}/root-account`}>ルートアカウント</a>
        </div>
        <div className="p-2 hover:bg-gray-400">
          <a href={`/${lng}/user-profiles`}>ユーザープロフィール</a>
        </div>
        <div className=" hover:bg-gray-400">
          <a href={`/${lng}/category`}>カテゴリ</a>
        </div>
        <div className="p-2 hover:bg-gray-400">
          <a href={`/${lng}/category`}>全て</a>
        </div>
        <div className="p-2 hover:bg-gray-400">
          <a href={`/${lng}/category/manga`}>漫画</a>
        </div>
        <div className="p-2 hover:bg-gray-400">
          <a href={`/${lng}/list`}>リスト</a>
        </div>
      </nav>
    </aside>
  )
}

export default LeftMenu
