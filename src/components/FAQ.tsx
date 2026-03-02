"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Which platforms does it work with?",
        a: "Interview Smart integrates seamlessly with all major video conferencing platforms, including Zoom, Google Meet, Microsoft Teams, and Webex."
    },
    {
        q: "How accurate is the real-time transcription?",
        a: "Our transcription engine utilizes state-of-the-art speech-to-text AI, achieving over 95% accuracy even with technical jargon, fast speakers, and varying accents."
    },
    {
        q: "Is my interview data private and secure?",
        a: "Absolutely. We employ end-to-end encryption. Your transcripts and AI interactions are never shared, sold, or used to train public models."
    },
    {
        q: "Do I need to install anything?",
        a: "No installation is required. Interview Smart can run entirely within your web browser. A dedicated desktop application is also available for those who prefer native integrations."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="w-full bg-black py-40 px-6 md:px-12 relative z-10">
            <div className="max-w-[800px] mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-xs font-semibold uppercase tracking-widest mb-6">
                        <HelpCircle className="w-4 h-4" />
                        FAQ
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white text-center">
                        Common Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl overflow-hidden transition-colors duration-300 border transform-gpu backface-hidden ${openIndex === i ? "bg-neutral-900 border-white/20" : "bg-neutral-900/40 border-white/5 hover:border-white/10"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-6 md:px-8 md:py-8 flex justify-between items-center text-left"
                            >
                                <span className="text-base md:text-lg font-bold tracking-tight text-white pr-8">{faq.q}</span>
                                <div className={`shrink-0 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? "rotate-180 text-white" : "text-neutral-500"}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0 text-neutral-400 leading-relaxed font-medium text-sm md:text-base">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
