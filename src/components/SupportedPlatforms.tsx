"use client";

import { motion } from "framer-motion";

const platforms = [
    { name: "Google Meet", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/google-meet.svg" },
    { name: "Zoom", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/zoom-icon.svg" },
    { name: "Microsoft Teams", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/microsoft-teams.svg" },
    { name: "Skype", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/skype.svg" },
    { name: "Google Chrome", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/chrome.svg" },
    { name: "Firefox", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/firefox.svg" },
    { name: "Microsoft Edge", url: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/microsoft-edge.svg" },
];

export default function SupportedPlatforms() {
    return (
        <section className="w-full bg-black py-32 px-6 md:px-12 flex flex-col items-center justify-center border-y border-white/5 relative overflow-hidden">
            <div className="max-w-[1000px] w-full flex flex-col items-center text-center relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-orange-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4"
                >
                    Supported Platforms
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-[2.75rem] font-black text-white tracking-tighter uppercase mb-6"
                >
                    Works where you do
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto mb-24 leading-relaxed font-medium"
                >
                    Interview Smart runs on any modern browser and integrates with your favorite meeting platforms.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-[4.5rem] items-start w-full">
                    {platforms.map((platform, i) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            className="flex flex-col items-center gap-4 w-[72px] md:w-20 group"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 relative flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 p-3 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                <img
                                    src={platform.url}
                                    alt={platform.name}
                                    className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                                />
                            </div>
                            <span className="text-neutral-500 group-hover:text-orange-500 transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest text-center leading-tight">
                                {platform.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
