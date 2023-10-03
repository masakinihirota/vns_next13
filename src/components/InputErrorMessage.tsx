import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function InputErrorMessage({ children }: Props) {
  return (
    <span className="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">
      {children}
    </span>
  )
}
