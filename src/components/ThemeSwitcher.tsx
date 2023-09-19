"use client"

import { MoonIcon } from "@heroicons/react/24/outline"
import { SunIcon } from "@heroicons/react/24/solid"
import { Switch } from "@nextui-org/switch"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <Switch
        defaultSelected
        size="md"
        color="primary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onValueChange={(isSelected) => setTheme(isSelected ? "light" : "dark")}
      />
    </div>
  )
}
