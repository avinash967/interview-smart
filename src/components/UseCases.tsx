"use client";

import { motion } from "framer-motion";

const cases = [
    {
        title: "Software Engineers",
        desc: "System design, algorithms, and coding interviews.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Product Managers",
        desc: "Strategy, metrics, and product sense interviews.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Data Scientists",
        desc: "ML concepts, statistics, and case studies.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Business Analysts",
        desc: "Case interviews and analytical frameworks.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    }
];

export default function UseCases() {
    return (
        <section id="use-cases" className="w-full bg-black py-32 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
                {/* Left Side: Header */}
                <div className="w-full lg:w-1/3 pt-4 lg:pt-12 text-center lg:text-left sticky top-32">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-[0.9] text-white">
                        Built for <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#fdba74]">every professional</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0">
                        Whether you're facing technical deep-dives or behavioral rounds, Interview Smart adapts to your domain.
                    </p>
                </div>

                {/* Right Side: Image Grid */}
                <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cases.map((useCase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                                className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden group border border-white/5"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[1.5s] ease-out brightness-50 group-hover:brightness-75"
                                    style={{ backgroundImage: `url(${useCase.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 w-full z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="text-2xl font-black tracking-tight mb-2 text-white">{useCase.title}</h3>
                                    <p className="text-neutral-300 font-medium leading-relaxed">{useCase.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
