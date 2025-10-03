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
        <div className="min-h-screen flex flex-col items-center justify-center bg-background relative">
            <button
                onClick={toggleTheme}
                className="absolute top-6 right-6 p-3 rounded-lg hover:bg-accent transition-colors"
                aria-label="Toggle theme"
            >
                {theme === "light" ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-foreground" />}
            </button>

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

            <a
                href="mailto:forward@me2geek.top"
                className="mt-6 text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
                forward@me2geek.top
            </a>
        </div>
    )
}
