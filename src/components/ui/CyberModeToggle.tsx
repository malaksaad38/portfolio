"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function CyberModeToggle({ activeColor }: { activeColor?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-12 h-12 flex items-center justify-center opacity-0">
        <div className="w-8 h-8 rounded-lg bg-slate-200 animate-pulse" />
      </div>
    )
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  const currentGlow = activeColor || (isDark ? "#2761c3" : "#f59e0b");
  const currentShadow = activeColor 
    ? `0 0 20px ${activeColor}66` // 40% opacity in hex
    : (isDark ? "0 0 20px rgba(39, 97, 195, 0.4)" : "0 0 20px rgba(245, 158, 11, 0.4)");

  const moonColor = activeColor || "#60a5fa"
  const sunColor = activeColor || "#f59e0b"
  const moonDropShadow = activeColor ? `drop-shadow(0 0 8px ${activeColor}cc)` : "drop-shadow(0 0 8px rgba(96,165,250,0.8))"
  const sunDropShadow = activeColor ? `drop-shadow(0 0 8px ${activeColor}cc)` : "drop-shadow(0 0 8px rgba(245,158,11,0.8))"

  return (
    <div className="relative group p-1 inline-block">
      {/* Animated Glow / Orbit */}
      <motion.div
        className="absolute inset-0 rounded-xl blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500"
        animate={{
          backgroundColor: currentGlow,
          boxShadow: currentShadow
        }}
      />

      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center w-14 h-14 rounded-xl 
                   bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 
                   shadow-2xl overflow-hidden group/btn transition-all duration-300
                   hover:scale-105 active:scale-95"
        style={{
          clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
        }}
      >
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10 group-hover/btn:opacity-20 transition-opacity">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent scale-[2]" />
        </div>

        {/* Scanline Effect - REFACTORED TO MOTION */}
        <motion.div 
          className="absolute inset-x-0 h-px bg-white/20 top-0"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: 20, rotate: 45, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              exit={{ y: -20, rotate: -45, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Moon className="w-6 h-6" style={{ color: moonColor, filter: moonDropShadow }} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, rotate: 45, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              exit={{ y: -20, rotate: -45, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Sun className="w-6 h-6" style={{ color: sunColor, filter: sunDropShadow }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cyberpunk Decorative Corners */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/30 dark:border-white/30 group-hover/btn:border-white/60 transition-colors" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/30 dark:border-white/30 group-hover/btn:border-white/60 transition-colors" />
      </button>

      {/* Decorative text that appears on hover */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.2em] 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
                      text-black dark:text-white/40 whitespace-nowrap">
        MODE::{isDark ? "DARK" : "LIGHT"}
      </div>
    </div>
  )
}
