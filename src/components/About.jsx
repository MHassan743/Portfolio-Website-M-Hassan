"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Calendar, Cpu, Layers } from "lucide-react";

export default function About() {
    const stats = [
        {
            value: "6+",
            label: "Live Projects",
            icon: <Layers className="text-brandIndigo" size={24} />,
            desc: "Deployed & functional on Vercel"
        },
        {
            value: "1 Year",
            label: "Experience",
            icon: <Calendar className="text-brandPink" size={24} />,
            desc: "Active professional coding"
        },
        {
            value: "10+",
            label: "Technologies",
            icon: <Cpu className="text-brandIndigo" size={24} />,
            desc: "Across MERN & Frontend Stack"
        },
        {
            value: "BSCS",
            label: "Degree Candidate",
            icon: <BadgeCheck className="text-brandPink" size={24} />,
            desc: "Graduating class of 2026 (UOL)"
        }
    ];

    return (
        <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-brandDark">
            {/* Background blobs for dark theme */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-brandIndigo/10 blur-[130px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brandPink/10 blur-[140px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <div className="text-center space-y-3 mb-16">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-brandPink">About Me</h2>
                    <p className="text-3xl sm:text-4xl font-display font-bold">The Developer Behind the Code</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-brandIndigo to-brandPink mx-auto rounded-full" />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        <h3 className="text-2xl font-display font-semibold text-gray-800 dark:text-white leading-snug">
                            Engineering performance-driven, beautifully crafted web applications.
                        </h3>
                        <p className="text-gray-600 dark:text-slate-200 leading-relaxed text-base">
                            I am a results-driven Full Stack Developer with hands-on professional experience building robust digital ecosystems. My primary stack revolves around <span className="font-bold text-white">React.js, Next.js, Node.js, Express.js, and MongoDB.</span> I am currently completing my BSCS degree while actively delivering resilient systems.
                        </p>
                        <p className="text-gray-600 dark:text-slate-200 leading-relaxed text-base">
                            From seamless frontend animations to secure, scalable backend architectures, I bridge the gap between design and deep technical logic with over 5+ live portfolio projects showcasing real-world performance metrics.
                        </p>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brandPink hover:text-brandIndigo transition-colors duration-300"
                            >
                                Let&apos;s build something transformational
                                <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-glowIndigo transition-all duration-300 group border border-gray-800/60 bg-[#0c111c]/50 relative overflow-hidden"
                            >
                                {/* Glow reflection trick */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brandIndigo/5 rounded-full blur-[40px] group-hover:bg-brandPink/10 transition-colors" />

                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brandIndigo/10 group-hover:border-brandIndigo/30 transition-colors">
                                        {stat.icon}
                                    </div>
                                    <span className="text-3xl font-display font-black bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                </div>
                                <div className="relative z-10">
                                    <h4 className="font-display font-semibold text-base mb-1 text-gray-800 dark:text-gray-100 group-hover:text-white transition-colors">
                                        {stat.label}
                                    </h4>
                                    <p className="text-xs text-gray-400 dark:text-slate-300">
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
