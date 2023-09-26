/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
// ESLintのルールを無効にするためのコメントです。import/no-anonymous-default-exportというルールは、デフォルトエクスポートが無名関数である場合に警告を出すルールです。このルールを無効にすることで、このファイルでデフォルトエクスポートが無名関数であっても、警告が出なくなります。

const pad00 = (num) => String(num).padStart(2, "0")

const date = new Date()
const year = date.getFullYear()
const month = pad00(date.getMonth() + 1)
const day = pad00(date.getDate())
const hms = `${pad00(date.getHours())}:00:00`
const datePrefix = `${year}-${month}-${day}`

const categories = ["Other", "Tech", "BlogOps"]

export default function (
  // JSDocコメントを使用して、import('plop').NodePlopAPIという型を指定しています。これは、plopというライブラリが提供するNodePlopAPIという型をインポートしていることを示しています。この型は、plopfile.mjsで使用されるplopオブジェクトの型を定義しています。
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "どこにコンポーネントを置きますか？(例: src/components/)"
      },
      {
        type: "input",
        name: "name",
        message: "コンポーネントの名前を入力してください"
      }
    ],
    actions: [
      // コンポーネントファイル用
      {
        type: "add",
        path: "src/components/{{path}}/{{pascalCase name}}/page.tsx",
        templateFile: "templates/component/component.tsx.hbs"
      },
      // テストファイル用
      {
        type: "add",
        path: "src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/component/component.test.tsx.hbs"
      }
      // Storybook用
      //   {
      //     type: "add",
      //     path: "src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
      //     templateFile: "templates/component/component.stories.tsx.hbs"
      //   }
    ]
  })
}
