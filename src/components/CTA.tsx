"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="w-full bg-[#f97316] py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f97316] via-[#c2410c] to-black z-0 opacity-80"></div>

            <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-black/20 text-white text-sm font-semibold mb-10 shadow-lg backdrop-blur-sm"
                >
                    <Zap className="w-4 h-4 text-white" />
                    Ready to ace your next interview?
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-black tracking-tighter mb-8 w-full leading-[1.1]"
                >
                    <span className="block text-white">Start Your First Session</span>
                    <span className="block text-black">Completely Free</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-white/90 text-lg md:text-2xl font-medium max-w-3xl mb-14 tracking-tight leading-relaxed"
                >
                    No install. No friction. No credit card required. Join thousands of professionals who interview with confidence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center w-full px-4"
                >
                    <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-black text-white text-base md:text-[1.1rem] font-bold rounded-2xl hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] group">
                        Get Started Free
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-white/70 text-sm md:text-base mt-8 font-medium tracking-wide">
                        Works on Chrome, Firefox & Edge · Google Meet, Zoom, Teams & Skype
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
