"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 dark:bg-black/20 backdrop-blur-sm border-b border-white/10 dark:border-white/5">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/25">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <span className="text-xl font-bold text-white drop-shadow-lg">AI Tools Hub</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#tools"
            className="text-white/90 hover:text-white transition-colors font-medium drop-shadow-md hover:drop-shadow-lg"
          >
            Tools
          </Link>
          <Link
            href="#testimonials"
            className="text-white/90 hover:text-white transition-colors font-medium drop-shadow-md hover:drop-shadow-lg"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="text-white/90 hover:text-white transition-colors font-medium drop-shadow-md hover:drop-shadow-lg"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-white/10 text-white/90 hover:text-white backdrop-blur-sm"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-white/10 text-white/90 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-md border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#tools" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow-md">
              Tools
            </Link>
            <Link
              href="#testimonials"
              className="text-white/90 hover:text-white transition-colors font-medium drop-shadow-md"
            >
              Testimonials
            </Link>
            <Link href="#faq" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow-md">
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
