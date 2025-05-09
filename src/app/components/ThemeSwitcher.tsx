"use client"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Dark mode</span>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(v) => setTheme(v ? "dark" : "light")}
      />
    </div>
  )
}
