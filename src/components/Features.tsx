"use client";

import { motion } from "framer-motion";
import { Brain, Mic, Target, Layers } from "lucide-react";

const features = [
    {
        title: "Real-Time Transcription",
        description: "Every word captured live as the conversation unfolds. Never miss a question or key detail.",
        icon: <Mic className="w-6 h-6 text-orange-500" />,
        iconBg: "bg-orange-500/10",
        shadow: "shadow-[0_0_20px_rgba(249,115,22,0.2)]",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "AI Answer Suggestions",
        description: "Intelligent, context-aware answer recommendations surface instantly as questions are asked.",
        icon: <Brain className="w-6 h-6 text-orange-500" />,
        iconBg: "bg-orange-500/10",
        shadow: "shadow-[0_0_20px_rgba(249,115,22,0.2)]",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Smart Keyword Tracking",
        description: "Automatically identifies and highlights critical skills, technologies, and topics mentioned.",
        icon: <Target className="w-6 h-6 text-orange-500" />,
        iconBg: "bg-orange-500/10",
        shadow: "shadow-[0_0_20px_rgba(249,115,22,0.2)]",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Domain-Specific Context",
        description: "Set your interview background — get tailored responses for engineering, product, data science, and more.",
        icon: <Layers className="w-6 h-6 text-orange-500" />,
        iconBg: "bg-orange-500/10",
        shadow: "shadow-[0_0_20px_rgba(249,115,22,0.2)]",
        className: "md:col-span-1 md:row-span-1",
    },
];

export default function Features() {
    return (
        <section id="features" className="w-full bg-transparent py-40 px-6 md:px-12 relative flex flex-col items-center">
            <div className="max-w-[1200px] w-full mx-auto">
                <div className="flex flex-col items-center text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-8 max-w-4xl leading-[1.05] flex flex-col items-center justify-center text-white">
                        Everything you need <br /> for better interviews
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-6 md:gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                            className={`opacity-0 group relative p-8 md:p-10 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 hover:bg-neutral-900/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl transform-gpu backface-hidden ${feature.className}`}
                        >
                            <div className={`p-4 rounded-xl w-fit mb-6 transition-all duration-300 ${feature.iconBg} ${feature.shadow}`}>
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{feature.title}</h3>
                                <p className="text-neutral-400 leading-relaxed font-medium text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
