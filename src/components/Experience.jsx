"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
    const achievements = [
        {
            title: "Multi-Vendor Marketplace (BazarioX)",
            desc: "Engineered a flagship multi-vendor store incorporating AI-driven logistics and secure escrow digital payments.",
        },
        {
            title: "Gynecology Web Portal (ClinicMaster)",
            desc: "Designed and deployed a highly interactive site for Dr. Fadia Ishtiaq featuring dynamic appointment management.",
        },
        {
            title: "Enterprise HMS Architecture",
            desc: "Architected a role-based dashboard for administration and customers, managing live reservations and analytics.",
        },
        {
            title: "Lightspeed Deployments",
            desc: "Developed, tested and deployed 5+ scalable client portals on Vercel ensuring 95+ performance metrics.",
        },
        {
            title: "Modern Core Fundamentals",
            desc: "Vast experience in agile workflows, peer code documentation, comprehensive Git version tracking, and REST integrations.",
        }
    ];

    return (
        <section id="experience" className="py-20 md:py-28 relative overflow-hidden bg-brandDark transition-colors duration-300">
            {/* Glow Blobs */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brandIndigo/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brandPink/5 blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <div className="text-center space-y-3 mb-16">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-brandIndigo">My Path</h2>
                    <p className="text-3xl sm:text-4xl font-display font-bold text-white">Work Experience</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-brandIndigo to-brandPink mx-auto rounded-full" />
                </div>

                {/* Timeline Container */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative border-l-2 border-dashed border-gray-700 md:pl-12 ml-4 md:ml-6 pl-8"
                    >
                        {/* Timeline Node pulse */}
                        <div className="absolute -left-[17px] top-0 p-2 rounded-full bg-gradient-to-br from-brandIndigo to-brandPink text-white shadow-glowPink">
                            <Briefcase size={16} />
                            <div className="absolute inset-0 rounded-full border border-brandPink animate-ping" />
                        </div>

                        {/* Experience Card */}
                        <div className="glass-panel p-8 md:p-10 rounded-[2rem] space-y-7 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandIndigo/10 transition-all duration-500 border border-gray-800/80 bg-[#0c111c]/60 group">
                            {/* Inner structural glow */}
                            <div className="absolute top-0 right-0 w-44 h-44 bg-brandIndigo/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-brandPink/10 transition-colors duration-500" />

                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
                                <div>
                                    <h3 className="text-2xl font-display font-black text-white tracking-wide">
                                        Full Stack Developer
                                    </h3>
                                    <p className="text-lg font-bold bg-gradient-to-r from-brandIndigo to-brandPink bg-clip-text text-transparent mt-1">
                                        IR Media
                                    </p>
                                </div>
                                {/* Meta details */}
                                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-gray-400">
                                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                        <Calendar size={14} className="text-brandIndigo" />
                                        July 2025 – April 2026
                                    </span>
                                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                        <MapPin size={14} className="text-brandPink" />
                                        Sargodha, Pakistan
                                    </span>
                                </div>
                            </div>

                            {/* General details */}
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base border-t border-gray-800/70 pt-5 font-light relative z-10">
                                Led the engineering lifecycle of React-based frontends and Node.js REST APIs connected to MongoDB databases for highly interactive client solutions. Architected state-management lifecycles while constantly pushing code through CI/CD Vercel paradigms.
                            </p>

                            {/* Achievements visual bullets */}
                            <div className="space-y-5 pt-3 relative z-10">
                                <h4 className="text-xs uppercase font-black tracking-widest text-gray-300 flex items-center gap-3">
                                    <span className="w-6 h-[1px] bg-brandIndigo"></span>
                                    Key Accomplishments
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {achievements.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex gap-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-brandIndigo/20 transition-all duration-300"
                                        >
                                            <CheckCircle2 className="text-brandIndigo flex-shrink-0 mt-0.5 group-hover:text-brandPink transition-colors" size={16} />
                                            <div className="space-y-1">
                                                <p className="text-sm font-bold text-gray-200 leading-snug">
                                                    {item.title}
                                                </p>
                                                <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
