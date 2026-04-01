import React from "react";
import { motion as m, HTMLMotionProps } from "motion/react";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface CyberButtonProps extends HTMLMotionProps<"button"> {
    label?: string;
    size?: "sm" | "md" | "lg";
    primaryColor?: string;
    accentColor?: string;
}

const sizes = {
    sm: "min-w-[120px] h-10 px-6 text-xs",
    md: "min-w-[160px] h-12 px-8 text-sm",
    lg: "min-w-[200px] h-14 px-10 text-base",
};

export const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
    (
        {
            label = "PLAY",
            className,
            size = "md",
            primaryColor = "#00f0ff", // Bright neon cyan by default
            accentColor = "#ff003c",  // Bright neon pink/red
            children,
            onClick,
            ...props
        },
        ref
    ) => {
        return (
            <m.button
                ref={ref}
                onClick={onClick}
                whileHover="hover"
                whileTap="tap"
                initial="initial"
                className={cn(
                    "group relative inline-flex items-center justify-center font-cyber uppercase tracking-[0.2em] outline-none transition-all duration-300",
                    sizes[size],
                    className
                )}
                style={
                    {
                        "--primary": primaryColor,
                        "--accent": accentColor,
                    } as React.CSSProperties
                }
                {...props}
            >
                {/* Base Background with Slanted Edges */}
                <div
                    className="absolute inset-0 bg-[var(--primary)]/10 backdrop-blur-sm z-0 transition-colors duration-300 group-hover:bg-[var(--primary)]/20"
                    style={{
                        clipPath:
                            "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                    }}
                >
                    {/* Hover Scanning Glitch */}
                    <m.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent z-0"
                        variants={{
                            initial: { x: "-100%" },
                            hover: { 
                                x: "200%", 
                                transition: { duration: 1.5, repeat: Infinity, ease: "linear" } 
                            },
                        }}
                    />
                </div>

                {/* Cyber Geometric Border */}
                <div
                    className="absolute inset-0 border border-[var(--primary)]/50 z-10 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:shadow-[0_0_15px_var(--primary)]"
                    style={{
                        clipPath:
                            "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                    }}
                />

                {/* Glitch Overlay on Hover */}
                <m.div
                    className="absolute inset-0 bg-[var(--accent)] z-20 mix-blend-overlay opacity-0 pointer-events-none"
                    variants={{
                        hover: {
                            opacity: [0, 0.8, 0, 0.5, 0],
                            x: [0, -3, 3, -1, 1, 0],
                            transition: { duration: 0.4, ease: "easeInOut" },
                        },
                    }}
                    style={{
                        clipPath:
                            "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                    }}
                />

                {/* Text Content */}
                <span className="relative z-30 text-[var(--primary)] font-semibold group-hover:text-black dark:group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_var(--primary)]">
                    {(children as React.ReactNode) || label}
                </span>

                {/* Micro tech details */}
                <div className="absolute top-0 right-0 w-4 h-[2px] bg-[var(--primary)] shadow-[0_0_5px_var(--primary)] z-20" />
                <div className="absolute bottom-0 left-0 w-4 h-[2px] bg-[var(--primary)] shadow-[0_0_5px_var(--primary)] z-20" />

                {/* Bottom Expansion Bar */}
                <m.div
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--primary)] shadow-[0_0_10px_var(--primary)] z-20 origin-center"
                    variants={{
                        initial: { scaleX: 0, opacity: 0 },
                        hover: { scaleX: 1, opacity: 1, transition: { duration: 0.3 } },
                    }}
                />
            </m.button>
        );
    }
);

CyberButton.displayName = "CyberButton";
export default CyberButton;
