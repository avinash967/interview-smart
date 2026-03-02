"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Interview Smart was a game-changer. I went from freezing up in interviews to articulating my thoughts clearly and confidently. Landed my dream role at a FAANG company.",
        author: "Sarah Chen",
        role: "SENIOR SOFTWARE ENGINEER · META",
        initials: "SC"
    },
    {
        quote: "Like having an expert in my corner. The real-time suggestions helped me structure my answers on the fly. I felt prepared even for questions I hadn't anticipated.",
        author: "Marcus Johnson",
        role: "PRODUCT MANAGER · STRIPE",
        initials: "MJ"
    },
    {
        quote: "The domain-specific context feature is brilliant. I set it for data science and every suggestion was relevant to my field. It's not cheating — it's having the support to show your real potential.",
        author: "Priya Sharma",
        role: "DATA SCIENTIST · SPOTIFY",
        initials: "PS"
    },
    {
        quote: "I was skeptical at first, but the keyword tracking alone saved me. I could see exactly which skills the interviewer was probing for and adjust my responses accordingly.",
        author: "David Lee",
        role: "BACKEND DEVELOPER · AMAZON",
        initials: "DL"
    },
    {
        quote: "Used it across 5 different interviews on Zoom and Meet. Worked flawlessly every time. The transcription quality is remarkable — it caught technical terms perfectly.",
        author: "Emma Watson",
        role: "FRONTEND ENGINEER · NETFLIX",
        initials: "EW"
    },
    {
        quote: "As someone with interview anxiety, this tool gave me the confidence I needed. Knowing I had AI backup let me relax and actually be myself. Got three offers in one month.",
        author: "James Wilson",
        role: "FULL STACK DEVELOPER · GOOGLE",
        initials: "JW"
    }
];

export default function Testimonials() {
    return (
        <section className="w-full bg-black py-40 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-white/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
                <div className="text-center mb-20 md:mb-32">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                        Trusted by <br /><span className="text-[#f97316]">Ambitious Professionals</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Join thousands of job seekers who've transformed their interview performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="p-8 md:p-10 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between transform-gpu backface-hidden"
                        >
                            <p className="text-lg md:text-xl font-medium tracking-tight leading-relaxed mb-12 text-neutral-300">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center text-[#f97316] font-bold uppercase tracking-wider text-lg">
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-white tracking-wide text-base">{t.author}</div>
                                    <div className="text-neutral-500 text-xs font-bold uppercase tracking-widest mt-1">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
