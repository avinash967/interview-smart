"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Cpu, Rocket } from "lucide-react";

export default function Stats() {
    return (
        <section className="w-full bg-black py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1] uppercase"
                    >
                        The Interview Game <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">Has Changed</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-neutral-400 text-lg md:text-xl font-medium max-w-3xl mx-auto tracking-tight leading-relaxed"
                    >
                        The interview process is more competitive than ever. AI-native tools are reshaping how candidates prepare — Interview Smart brings that advantage to the interview itself.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stat 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center transform-gpu backface-hidden"
                    >
                        <TrendingUp className="w-6 h-6 text-[#f97316] mb-6" />
                        <div className="text-6xl font-black text-white tracking-tighter mb-4">
                            73<span className="text-5xl text-[#f97316]">%</span>
                        </div>
                        <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                            of candidates report high<br />interview anxiety
                        </p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center transform-gpu backface-hidden"
                    >
                        <Users className="w-6 h-6 text-[#f97316] mb-6" />
                        <div className="text-6xl font-black text-white tracking-tighter mb-4">
                            250<span className="text-5xl text-[#f97316]">+</span>
                        </div>
                        <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                            average applicants per tech role<br />in 2024
                        </p>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center transform-gpu backface-hidden"
                    >
                        <Cpu className="w-6 h-6 text-[#f97316] mb-6" />
                        <div className="text-6xl font-black text-white tracking-tighter mb-4">
                            4.2<span className="text-5xl text-[#f97316]">x</span>
                        </div>
                        <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                            more likely to advance with<br />structured answers
                        </p>
                    </motion.div>

                    {/* Stat 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center transform-gpu backface-hidden"
                    >
                        <Rocket className="w-6 h-6 text-[#f97316] mb-6" />
                        <div className="text-6xl font-black text-white tracking-tighter mb-4">
                            89<span className="text-5xl text-[#f97316]">%</span>
                        </div>
                        <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                            of users report improved<br />confidence
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
