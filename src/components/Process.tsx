"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Set Your Interview Background",
        description: "Tell us your domain, role, and key skills. The AI tailors its suggestions to your specific interview context.",
    },
    {
        number: "02",
        title: "Start Your Meeting",
        description: "Join your interview on any platform — Google Meet, Zoom, Teams, or Skype. Interview Smart activates automatically.",
    },
    {
        number: "03",
        title: "Get Real-Time AI Insights",
        description: "As the conversation unfolds, receive instant transcription, smart answer suggestions, and keyword highlights.",
    },
];

export default function Process() {
    return (
        <section id="process" className="w-full bg-black py-40 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                    <div className="md:w-1/3">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 md:sticky top-32 leading-[0.9] text-white">
                            The Engine<br />
                            <span className="text-neutral-600">Behind</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#fdba74]">The Magic</span>
                        </h2>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-12 md:gap-24 relative">
                        <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-white/10 hidden md:block"></div>

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative flex gap-8 md:gap-16 group"
                            >
                                <div className="hidden md:flex flex-col items-center relative z-10 shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-black border border-white/20 group-hover:border-white transition-colors flex items-center justify-center text-3xl font-black tracking-tighter text-neutral-500 group-hover:text-white">
                                        {step.number}
                                    </div>
                                </div>

                                <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-10 md:p-14 rounded-[2rem] group-hover:bg-neutral-900/80 group-hover:border-white/10 transition-all duration-500 w-full">
                                    <div className="md:hidden text-orange-500 font-black text-2xl mb-4">{step.number}</div>
                                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{step.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed text-lg md:text-xl font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
