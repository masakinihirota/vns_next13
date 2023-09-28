"use client"

// "use client"

// import { MoonIcon } from "@heroicons/react/24/outline"
// import { SunIcon } from "@heroicons/react/24/solid"
// import { Switch } from "@nextui-org/switch"
// import { useTheme } from "next-themes"
// import { useEffect, useState } from "react"

// export function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false)
//   // eslint-disable-next-line no-unused-vars
//   const { theme, setTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <div>
//       <Switch
//         defaultSelected
//         size="md"
//         color="primary"
//         startContent={<SunIcon />}
//         endContent={<MoonIcon />}
//         onValueChange={(isSelected) => setTheme(isSelected ? "light" : "dark")}
//       />
//     </div>
//   )
// }

// import { MoonIcon } from "@heroicons/react/24/outline"
// import { SunIcon } from "@heroicons/react/24/solid"
// // import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
// import { useTheme } from "next-themes"
// import * as React from "react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger
// } from "@/components/ui/dropdown-menu"

// export function ModeToggle() {
//   const { setTheme } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
