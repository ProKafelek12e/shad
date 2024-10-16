"use client"

import { useState } from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Component() {
  const [isChecked, setIsChecked] = useState(true)
  const { setTheme } = useTheme()

  const toggleSwitch = () => {
    setIsChecked(!isChecked)
    setTheme(isChecked ? 'dark' : 'light')
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        role="switch"
        aria-checked={isChecked}
        onClick={toggleSwitch}
        className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isChecked ? "bg-gray-200 focus:ring-gray-500" : "bg-gray-800 focus:ring-gray-500"
        }`}
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`${
            isChecked ? "translate-x-1" : "translate-x-8"
          } inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white transition-transform duration-200 ease-in-out`}
        >
          {isChecked ? (
            <Sun className="h-4 w-4 text-yellow-500" />
          ) : (
            <Moon className="h-4 w-4 text-gray-800" />
          )}
        </span>
      </button>
    </div>
  )
}