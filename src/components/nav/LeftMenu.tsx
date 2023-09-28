// LeftMenu.tsx
import React from "react"

const LeftMenu = ({ lng }) => {
  // console.log("lng", lng)

  return (
    <aside className="flex flex-col w-64">
      <nav className="flex-grow">
        <ul className="flex flex-col">
          <li className="p-2 hover:bg-gray-400">
            {/* 成功 */}
            <a href={`/${lng}/root-account`}>ルートアカウント</a>
          </li>
          <li className="p-2 hover:bg-gray-400">
            <a href={`/${lng}/user-profiles`}>ユーザープロフィール</a>
          </li>
          <li className="p-2">
            <li className=" hover:bg-gray-400">
              <a href={`/${lng}/category`}>カテゴリ</a>
            </li>
            <ul className="pl-2">
              <li className="p-2 hover:bg-gray-400">
                <a href={`/${lng}/category`}>全て</a>
              </li>
              <li className="p-2 hover:bg-gray-400">
                <a href={`/${lng}/category/manga`}>漫画</a>
              </li>
            </ul>
          </li>
          <li className="p-2 hover:bg-gray-400">
            <a href={`/${lng}/list`}>リスト</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default LeftMenu
