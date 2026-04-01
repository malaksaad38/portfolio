import React from "react";

export default function WhatsAppButton({
                                                    phone = "923015488577",
                                                    message = `📩 New Inquiry

Hello! I visited your website and would like to get in touch regarding your services. Please respond when available.`,
                                                    label = "WhatsApp Contact",
                                                }) {
    const href = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
        relative w-full px-6 py-4 rounded-xl font-bold tracking-widest uppercase text-sm md:text-base
        text-red-700 dark:text-red-300 border border-red-500 bg-background
        shadow-[0_0_15px_rgba(255,0,0,0.25)]
        transition-all duration-300
        flex items-center justify-center gap-3
        hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(255,0,0,0.45)]
        before:absolute before:inset-0 before:rounded-xl
        before:bg-gradient-to-r before:from-red-500/15 before:to-red-400/10
        before:opacity-70 before:transition-all
        hover:before:opacity-100
        overflow-hidden
      "
        >
            {/* Top Cyber Edge */}
            <span className="absolute top-0 left-0 w-full h-[2px] bg-red-400/40"></span>

            {/* Right Neon Edge */}
            <span className="absolute top-0 right-0 h-full w-[2px] bg-red-400/30"></span>

            {/* Inner glow ring */}
            <span className="absolute inset-0 rounded-xl border border-red-500/20 blur-[2px]"></span>

            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path
                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            {label}
        </a>
    );
}
