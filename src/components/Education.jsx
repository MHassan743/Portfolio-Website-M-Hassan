"use client";

import { motion } from "framer-motion";
import { GraduationCap, Landmark, Languages, CheckCircle2 } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 md:py-28 relative overflow-hidden bg-brandDark transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brandIndigo/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Education Side */}
                    <div className="space-y-12">
                        {/* Title section */}
                        <div className="flex items-center gap-4">
                            <div className="space-y-1.5">
                                <h2 className="text-xs uppercase font-bold tracking-widest text-brandIndigo">My Foundation</h2>
                                <h3 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                                    <GraduationCap className="text-brandIndigo hidden sm:block" size={32} />
                                    Education
                                </h3>
                            </div>
                            <div className="w-12 h-1 bg-gradient-to-r from-brandIndigo to-brandPink rounded-full mt-6" />
                        </div>

                        {/* Timeline */}
                        <div className="relative border-l-2 border-dashed border-gray-700 md:pl-10 ml-4 pb-4">
                            {/* University */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-12 relative"
                            >
                                {/* Timeline Node */}
                                <div className="absolute -left-[49px] md:-left-[57px] top-1.5 p-2 rounded-full bg-brandDark border-2 border-brandPink z-10">
                                    <Landmark size={14} className="text-brandPink" />
                                </div>

                                <div className="glass-panel p-6 rounded-2xl border border-gray-800/80 bg-[#0c111c]/60 hover:border-brandPink/30 transition-colors">
                                    <span className="inline-block text-[10px] font-bold tracking-wider text-brandPink bg-brandPink/10 border border-brandPink/20 px-2.5 py-1 rounded-full mb-3">
                                        CURRENTLY ENROLLED
                                    </span>
                                    <h4 className="text-xl font-display font-bold text-white">Bachlor of Computer Science (BSCS)</h4>
                                    <p className="text-gray-400 font-semibold mt-1">University of Lahore (UOL)</p>
                                    <p className="text-sm font-bold text-gray-500 mt-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brandPink/50" />
                                        Batch 2022-2026 
                                    </p>
                                </div>
                            </motion.div>

                            {/* College */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute -left-[49px] md:-left-[57px] top-1.5 p-2 rounded-full bg-brandDark border-2 border-brandIndigo z-10">
                                    <Landmark size={14} className="text-brandIndigo" />
                                </div>

                                <div className="glass-panel p-6 rounded-2xl border border-gray-800/80 bg-[#0c111c]/60 hover:border-brandIndigo/30 transition-colors">
                                    <span className="inline-block text-[10px] font-bold tracking-wider text-brandIndigo bg-brandIndigo/10 border border-brandIndigo/20 px-2.5 py-1 rounded-full mb-3">
                                        COMPLETED
                                    </span>
                                    <h4 className="text-lg font-display font-bold text-white">ICS (Computer Science)</h4>
                                    <p className="text-gray-400 font-semibold mt-1">Punjab Group of Colleges (PGC)</p>
                                    <p className="text-sm font-bold text-gray-500 mt-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brandIndigo/50" />
                                        2020 - 2022
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Language & Extra Skills Side */}
                    <div className="space-y-12">
                        {/* Title section */}
                        <div className="flex items-center gap-4">
                            <div className="space-y-1.5">
                                <h2 className="text-xs uppercase font-bold tracking-widest text-brandPink">Communication</h2>
                                <h3 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                                    <Languages className="text-brandPink hidden sm:block" size={30} />
                                    Languages
                                </h3>
                            </div>
                            <div className="w-12 h-1 bg-gradient-to-r from-brandIndigo to-brandPink rounded-full mt-6" />
                        </div>

                        <div className="space-y-6 lg:pl-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-panel p-6 rounded-2xl space-y-4 border border-gray-800/80 bg-[#0c111c]/60 hover:shadow-xl hover:shadow-brandIndigo/5 transition-shadow"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-200">English</span>
                                    <span className="text-xs text-brandPink font-bold tracking-wider">Professional Working</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700/50">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-gradient-to-r from-brandIndigo to-brandPink rounded-full"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-panel p-6 rounded-2xl space-y-4 border border-gray-800/80 bg-[#0c111c]/60 hover:shadow-xl hover:shadow-brandIndigo/5 transition-shadow"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-200">Urdu (اردو)</span>
                                    <span className="text-xs text-brandIndigo font-bold tracking-wider">Native / Bilingual</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700/50">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="h-full bg-gradient-to-r from-brandIndigo to-brandPink rounded-full"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
