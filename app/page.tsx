"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

        setTheme(initialTheme)
        document.documentElement.classList.toggle("dark", initialTheme === "dark")
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
            {/* 光圈 */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#2d6a5f] rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-3xl opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-20" />

            {/* 主题钮 */}
            <button
                onClick={toggleTheme}
                className="absolute top-6 right-6 p-3 rounded-lg hover:bg-accent transition-colors"
                aria-label="Toggle theme"
            >
                {theme === "light" ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-foreground" />}
            </button>

            {/* 组织 */}
            <a
                href="https://github.com/Me2Geek"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-transform hover:scale-105"
            >
                <div className="text-center">
                    <div className="text-[120px] leading-none font-bold tracking-tight">
                        <span className="text-foreground">Me</span>
                        <span className="text-[#2d6a5f]">2</span>
                    </div>
                    <div className="text-[120px] leading-none font-bold tracking-tight text-foreground">Geek</div>
                </div>
            </a>

            {/* 邮箱 */}
            <a
                href="mailto:forward@me2geek.top"
                className="mt-6 text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
                forward@me2geek.top
            </a>
        </div>
    )
}
