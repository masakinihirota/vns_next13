// LeftMenu.tsx
import Link from "next/link"
import React from "react"

const LeftMenu = ({ lng }) => {
  console.log("lng", lng)

  return (
    <aside className="flex flex-col w-64">
      <nav className="flex-grow">
        <ul className="flex flex-col">
          <li className="p-2 hover:bg-gray-400">
            <a href="root-account.html">ルートアカウント</a>
          </li>
          <li className="p-2 hover:bg-gray-400">
            <a href="user-profile.html">ユーザープロフィール</a>
          </li>
          <li className="p-2">
            <li className=" hover:bg-gray-400">
              <a href="#">カテゴリ</a>
            </li>
            <ul className="pl-2">
              <li className="p-2 hover:bg-gray-400">
                <a href="category.html">全て</a>
              </li>
              <li className="p-2 hover:bg-gray-400">
                <Link href={`/${lng}/category-manga`}>漫画</Link>
              </li>
            </ul>
          </li>
          <li className="p-2 hover:bg-gray-400">
            <a href="contact-us.html">？？？</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default LeftMenu
