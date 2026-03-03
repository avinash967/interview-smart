"use client";

import { useEffect, useState } from "react";
import AbstractCanvas from "./AbstractCanvas";

export default function Hero() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Wait for fonts to be ready and avoid hydration layout shifts
        document.fonts.ready.then(() => {
            setIsReady(true);
        });
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <AbstractCanvas />

            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-[1200px] mx-auto mt-20 w-full min-h-[400px]">

                {/* Skeleton / Placeholder */}
                <div
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    aria-hidden="true"
                >
                    <div className="w-[80%] max-w-[500px] h-[60px] md:h-[80px] bg-white/5 rounded-2xl animate-pulse mb-8" />
                    <div className="w-[90%] max-w-[700px] h-[80px] md:h-[100px] bg-white/5 rounded-2xl animate-pulse mb-12" />
                    <div className="w-[180px] h-[50px] bg-white/5 rounded-full animate-pulse" />
                </div>

                {/* Real Content */}
                <div className={`flex flex-col items-center w-full transition-opacity duration-1000 ease-out delay-100 ${isReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <h1 className="text-5xl md:text-[5.5rem] leading-[1.05] font-normal tracking-tight mb-8 w-full flex flex-col items-center text-white">
                        <span className="block pb-1">Interview Smart</span>
                        <span className="block pb-2">With AI-Powered Insights</span>
                    </h1>

                    <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-3xl mb-12 tracking-wide leading-relaxed">
                        An Interview Copilot to transform your interview process with real-time transcription, AI analysis, and smart insights. Perfect for technical interviews, HR screenings and coding assessments.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto px-4">
                        <button className="w-full sm:w-auto px-10 py-4 bg-[#f97316] text-[#000000] text-sm font-bold uppercase tracking-[0.05em] rounded-sm hover:bg-[#ea580c] transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
