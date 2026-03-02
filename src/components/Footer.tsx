"use client";

import Link from "next/link";
import { useTextScramble } from "@/hooks/useTextScramble";

function FooterLink({ href, text }: { href: string; text: string }) {
    const { text: displayText, startScramble, stopScramble } = useTextScramble(text);

    return (
        <Link
            href={href}
            className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-[0.15em]"
            onMouseEnter={startScramble}
            onMouseLeave={stopScramble}
        >
            {displayText}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="w-full bg-black pt-32 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
            <div className="max-w-[1600px] mx-auto flex flex-col items-center">
                <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase text-center w-full mb-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-800 select-none">
                    INTERVIEW<br />SMART
                </h2>

                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
                    <div className="flex flex-col gap-5">
                        <FooterLink href="#features" text="Features" />
                        <FooterLink href="#process" text="How It Works" />
                        <FooterLink href="#pricing" text="Pricing" />
                        <FooterLink href="#contact" text="Contact Us" />
                    </div>
                    <div className="text-left md:text-right text-neutral-600 text-xs tracking-wider space-y-2">
                        <p>Designed for the future of hiring.</p>
                        <p>© {new Date().getFullYear()} Interview Smart. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
