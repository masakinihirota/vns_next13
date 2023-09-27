import Basement from "./basement"

import type { Meta, StoryObj } from "@storybook/react"

// 作ったコンポーネントをインポートします。

type T = typeof Basement

const meta = {
  // Storybookのダッシュボードのサイドバーに表示されるタイトルを定義します。
  title: "server/Basement",
  component: Basement,
  parameters: {},
  argTypes: {}
} satisfies Meta<T>

export default meta
type Story = StoryObj<T>

// Storybookのダッシュボードのサイドバーに表示されるコンポーネントの色々なパーターンを定義します。
export const BasementFirst: Story = {}
export const BasementSecond: Story = {}
export const BasementThird: Story = {
  args: {}
}
