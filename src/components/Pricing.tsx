"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Building2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Starter",
            icon: Zap,
            desc: "Perfect for trying out Interview Smart",
            priceMonthly: "$0",
            priceAnnual: "$0",
            period: "/month",
            features: [
                "3 interview sessions per month",
                "Real-time transcription",
                "Basic AI answer suggestions",
                "Chrome & Firefox support",
                "Standard response time"
            ],
            buttonText: "Start Free",
            featured: false
        },
        {
            name: "Pro",
            icon: Crown,
            desc: "For serious job seekers in active search",
            priceMonthly: "$29",
            priceAnnual: "$19",
            period: "/month",
            features: [
                "Unlimited interview sessions",
                "Real-time transcription",
                "Advanced AI answer suggestions",
                "Smart keyword tracking",
                "Domain-specific context"
            ],
            buttonText: "Get Pro",
            featured: true
        },
        {
            name: "Team",
            icon: Building2,
            desc: "For career coaches & bootcamps",
            priceMonthly: "$89",
            priceAnnual: "$59",
            period: "/month",
            features: [
                "Everything in Pro",
                "Up to 10 team members",
                "Shared interview templates",
                "Team analytics dashboard",
                "Custom domain context library"
            ],
            buttonText: "Contact Sales",
            featured: false
        }
    ];

    return (
        <section id="pricing" className="w-full bg-transparent py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
                        Start free. Upgrade when you're ready to go all-in on your job search.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center">
                        <div className="bg-neutral-900 border border-white/10 rounded-full p-1.5 flex items-center relative">
                            <button
                                onClick={() => setIsAnnual(false)}
                                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors ${!isAnnual ? 'text-black' : 'text-white'}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsAnnual(true)}
                                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors flex items-center gap-2 ${isAnnual ? 'text-black' : 'text-white'}`}
                            >
                                Annual
                                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${isAnnual ? 'bg-black/20 text-black' : 'bg-[#f97316]/20 text-[#f97316]'}`}>
                                    -35%
                                </span>
                            </button>

                            {/* Toggle Slider Background */}
                            <div
                                className={`absolute top-1.5 bottom-1.5 w-[50%] bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-full transition-all duration-300 ease-in-out ${isAnnual ? 'left-[50%]' : 'left-1.5'}`}
                                style={{ width: isAnnual ? 'calc(50% - 6px)' : 'calc(50% - 6px)' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`p-8 rounded-3xl border transition-all transform-gpu backface-hidden ${plan.featured
                                ? "bg-gradient-to-b from-neutral-900/80 to-black border-[#f97316]/40 shadow-[0_0_40px_rgba(249,115,22,0.1)] relative"
                                : "bg-neutral-900/40 border-white/5 hover:border-white/10"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#f97316] text-black text-xs font-bold uppercase tracking-wider rounded-full">
                                    Most Popular
                                </div>
                            )}

                            {/* Plan Icon */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${plan.featured ? "bg-[#f97316]/10 border-[#f97316]/30 text-[#f97316]" : "bg-white/5 border-white/10 text-white"}`}>
                                <plan.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                            <p className="text-neutral-400 text-sm font-medium mb-8 min-h-[40px] leading-relaxed">{plan.desc}</p>

                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-5xl font-black text-white">
                                    {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                                </span>
                                <span className="text-neutral-500 font-medium text-sm">{plan.period}</span>
                            </div>

                            {plan.name !== "Starter" && (
                                <div className="text-neutral-500 text-sm mb-6 h-5">
                                    {isAnnual ? "billed annually" : "billed monthly"}
                                </div>
                            )}
                            {plan.name === "Starter" && <div className="mb-6 h-5" />}

                            <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group mb-8 ${plan.featured
                                ? "bg-[#f97316] text-black hover:bg-[#ea580c]"
                                : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                                }`}>
                                {plan.buttonText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="space-y-4">
                                {plan.features.map((feat, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.featured ? "text-[#f97316]" : "text-[#10b981]"}`} />
                                        <span className="text-neutral-300 text-sm leading-relaxed">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
