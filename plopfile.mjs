/* eslint-disable import/no-anonymous-default-export */
// ESLintのルールを無効にするためのコメントです。import/no-anonymous-default-exportというルールは、デフォルトエクスポートが無名関数である場合に警告を出すルールです。このルールを無効にすることで、このファイルでデフォルトエクスポートが無名関数であっても、警告が出なくなります。
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
        message: "どこにコンポーネントを置きますか？"
      },
      {
        type: "input",
        name: "name",
        message: "コンポーネントの名前を入力してください"
      },
      {
        type: "list",
        name: "componentType",
        message: "Component type",
        // サーバーコンポーネント、クライアントコンポーネント
        choices: ["server", "client"]
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{componentType}}/{{path}}/{{pascalCase name}}/{{name}}.tsx",
        templateFile: "templates/component/component.tsx.hbs"
      },
      {
        type: "add",
        path: "src/components/{{componentType}}/{{path}}/{{pascalCase name}}/{{name}}.test.tsx",
        templateFile: "templates/component/component.test.tsx.hbs"
      },
      {
        type: "add",
        path: "src/components/{{componentType}}/{{path}}/{{pascalCase name}}/{{name}}.stories.tsx",
        templateFile: "templates/component/component.stories.tsx.hbs"
      }
    ]
  })
}
