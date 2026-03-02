"use client";

import { motion } from "framer-motion";
import { AlertCircle, Brain, Clock, TrendingDown } from "lucide-react";

export default function Problem() {
    return (
        <section className="w-full bg-black py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-sm font-semibold mb-8 backdrop-blur-sm"
                    >
                        <AlertCircle className="w-4 h-4" />
                        The Problem
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1] uppercase"
                    >
                        Interviews Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">Broken</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-neutral-400 text-lg md:text-xl font-medium max-w-3xl mb-16 tracking-tight leading-relaxed"
                    >
                        Job seekers face intense pressure in live interviews. One moment of anxiety or a blank mind can cost them the role — even when they're qualified.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all flex flex-col items-start"
                    >
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-6">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Blank Mind Under Pressure</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Even well-prepared candidates freeze when the spotlight hits. Anxiety erases hours of prep in seconds.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all flex flex-col items-start"
                    >
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Split-Second Decisions</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Interviewers expect articulate, structured answers instantly. There's no time to think, Google, or rehearse.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all flex flex-col items-start"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                            <TrendingDown className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Missed Opportunities</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            One stumbled answer can cost you the role — even when you have the skills and experience to excel.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
