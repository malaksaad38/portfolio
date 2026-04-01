import React from "react";
import {motion} from "framer-motion";
import {Folder, Home, Mail, Settings, User} from "lucide-react";

// CyberpunkSideNavbar.tsx
// Usage: place <CyberpunkSideNavbar /> at the root of your app layout.
// Requires: tailwindcss, framer-motion, lucide-react

export default function CyberpunkSideNavbar() {
    const items = [
        {id: "home", label: "Home", icon: <Home size={18}/>},
        {id: "about", label: "About", icon: <User size={18}/>},
        {id: "projects", label: "Projects", icon: <Folder size={18}/>},
        {id: "contact", label: "Contact", icon: <Mail size={18}/>},
        {id: "settings", label: "Settings", icon: <Settings size={18}/>},
    ];

    return (
        <aside className="fixed top-6 left-6 h-[calc(100vh-48px)] w-20 md:w-24 lg:w-28 z-50">
            {/* Decorative neon frame and scanlines */}
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-white via-[#f8f9fa] to-[#f1f5f9] dark:from-[#0f0620] dark:via-[#0b0b12] dark:to-[#00101f] opacity-95"></div>

                {/* Neon border */}


                {/* Inner glass panel */}
                <div
                    className="relative h-full w-full rounded-3xl p-2 md:p-3 lg:p-4 bg-background/60 backdrop-blur-sm border border-black/5 dark:border-white/5">
                    {/* rotating vertical title */}
                    {/* nav items */}
                    <nav className="h-full flex flex-col items-center justify-center gap-4">
                        {items.map((it, idx) => (
                            <motion.button
                                key={it.id}
                                initial={{x: -10, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: idx * 0.06, type: "spring", stiffness: 400, damping: 28}}
                                whileHover={{scale: 1.06}}
                                whileTap={{scale: 0.98}}
                                className="relative group w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl border border-black/10 dark:border-white/6 bg-gradient-to-b from-black/5 dark:from-white/3 to-transparent shadow-inner"
                                aria-label={it.label}
                            >
                                {/* icon with neon glow */}
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div
                                        className="absolute inset-0 rounded-xl blur-xl bg-[radial-gradient(ellipse_at_center,rgba(255,0,200,0.18),transparent 40%),radial-gradient(ellipse_at_center,rgba(0,255,210,0.12),transparent 50%)] mix-blend-screen"></div>
                                </div>

                                <div
                                    className="transform-gpu group-hover:-translate-y-0.5 transition-transform duration-250 rotate-90">{it.label}</div>

                                {/* color indicator on left */}
                                <span
                                    className={`absolute left-0 top-0 h-full w-1 rounded-l-lg bg-gradient-to-b from-[rgba(255,0,200,0.9)] to-[rgba(0,255,210,0.9)] opacity-70 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300`}></span>

                                {/* rotating label that appears on hover */}
                                <motion.span
                                    layout
                                    initial={{opacity: 0, x: -10}}
                                    whileHover={{opacity: 1, x: -20}}
                                    className="pointer-events-none absolute left-14 md:left-16 lg:left-20 top-1/2 -translate-y-1/2 bg-background border border-black/10 dark:border-white/6 px-3 py-1 rounded-lg text-xs font-medium tracking-wide text-foreground opacity-0 group-hover:opacity-100 transform -translate-x-2 transition-all duration-300"
                                >
                                    <span
                                        className="inline-block transform -rotate-6 text-neon-animated">{it.label}</span>
                                </motion.span>
                            </motion.button>
                        ))}
                    </nav>

                    {/* bottom rotated content: colorful running status */}
                    {/* subtle scanlines overlay */}
                    <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-10">
                        <div
                            className="h-full w-full bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02) 1px,transparent 1px,transparent 3px)]"></div>
                    </div>
                </div>
            </div>

            {/* small helper styles injected so this file is drop-in friendly */}
            <style>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-rainbow {
          background: linear-gradient(90deg,#ff00c8,#6a00ff,#00ffd1,#00aaff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: rainbow 4s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee { display: inline-block; animation: marquee 6s linear infinite; }

        /* little neon text flicker for labels */
        .text-neon-animated {
          background: linear-gradient(90deg,#fff,#f0f,#0ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 6px rgba(255,0,200,0.55), 0 0 14px rgba(0,255,210,0.12);
          filter: drop-shadow(0 0 6px rgba(255,0,200,0.25));
        }

        /* tiny responsive tweak */
        @media (max-width: 640px) {
          aside { left: 12px; top: 12px; }
        }
      `}</style>
        </aside>
    );
}
