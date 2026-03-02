"use client";

import Link from "next/link";
import { useTextScramble } from "@/hooks/useTextScramble";
import { motion, useScroll, useTransform } from "framer-motion";

function ScrambleLink({ href, text }: { href: string; text: string }) {
    const { text: displayText, startScramble, stopScramble } = useTextScramble(text);

    return (
        <a
            href={href}
            className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] cursor-pointer"
            onMouseEnter={startScramble}
            onMouseLeave={stopScramble}
        >
            {displayText}
        </a>
    );
}

export default function Navbar() {
    const { scrollY } = useScroll();
    const background = useTransform(
        scrollY,
        [0, 50],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]
    );
    const backdropFilter = useTransform(
        scrollY,
        [0, 50],
        ["blur(0px)", "blur(16px)"]
    );
    const borderBottom = useTransform(
        scrollY,
        [0, 50],
        ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.05)"]
    );

    return (
        <motion.nav
            style={{ background, backdropFilter, borderBottom }}
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        >
            <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6 max-w-[1600px] mx-auto">
                <Link href="/" className="text-xl font-bold tracking-tighter uppercase text-white flex gap-3 items-center group">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden">
                        <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span>Interview<span className="text-neutral-500">Smart</span></span>
                </Link>
                <div className="hidden md:flex gap-12 items-center">
                    <ScrambleLink href="#features" text="Features" />
                    <ScrambleLink href="#process" text="Process" />
                    <ScrambleLink href="#pricing" text="Pricing" />

                </div>
            </div>
        </motion.nav>
    );
}
