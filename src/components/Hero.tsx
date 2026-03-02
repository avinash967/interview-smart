"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AbstractCanvas from "./AbstractCanvas";

export default function Hero() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.from(".hero-line", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                rotationZ: 2,
            })
                .from(textRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                }, "-=0.8")
                .from(btnRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                }, "-=0.8");
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <AbstractCanvas />

            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-[1200px] mx-auto mt-20">
                <h1 ref={headingRef} className="text-5xl md:text-[5.5rem] leading-[1.05] font-normal tracking-tight mb-8 w-full flex flex-col items-center">
                    <div className="overflow-hidden pb-1"><div className="hero-line text-white">Interview Smart</div></div>
                    <div className="overflow-hidden pb-2"><div className="hero-line text-white">With AI-Powered Insights</div></div>
                </h1>

                <p ref={textRef} className="text-neutral-400 text-lg md:text-xl font-medium max-w-3xl mb-12 tracking-wide leading-relaxed">
                    An Interview Copilot to transform your interview process with real-time transcription, AI analysis, and smart insights. Perfect for technical interviews, HR screenings and coding assessments.
                </p>

                <div ref={btnRef} className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto px-4">
                    <button className="w-full sm:w-auto px-10 py-4 bg-[#f97316] text-[#000000] text-sm font-bold uppercase tracking-[0.05em] rounded-sm hover:bg-[#ea580c] transition-colors">
                        Get Started
                    </button>

                </div>
            </div>
        </section>
    );
}
