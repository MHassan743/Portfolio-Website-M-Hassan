"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, Terminal, Code2 } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/BrandIcons";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
    const words = [
        "Full Stack Developer",
        "React.js & Next.js Developer",
        "MERN Stack Developer",
    ];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Typewriter effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), 2500);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 40 : 80);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // Cursor blink
    useEffect(() => {
        const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
        return () => clearTimeout(timeout);
    }, [blink]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-brandDark text-white z-10"
            style={{
                background: `radial-gradient(circle at 50% 120%, rgba(99, 102, 241, 0.1) 0%, rgba(11, 15, 25, 1) 70%)`
            }}
        >
            {/* Particle flow */}
            <ParticleBackground />

            {/* Premium Background Blurs */}
            <div className="absolute top-1/3 left-1/4 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-brandIndigo/20 blur-[100px] md:blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
            <div className="absolute top-1/4 right-1/4 w-72 h-72 md:w-[400px] md:h-[400px] rounded-full bg-brandPink/15 blur-[90px] md:blur-[130px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-7 md:space-y-9 text-center lg:text-left pt-10"
                >
                    {/* Floating Experience Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brandPink/30 bg-white/5 backdrop-blur-md shadow-glowPink">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandPink opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brandPink"></span>
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-gray-200 tracking-wide">
                            Available for New Opportunities
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-2">
                        <h2 className="text-xl sm:text-2xl text-gray-400 font-sans tracking-wide">
                            Hi, I&apos;m <span className="font-bold text-white">M Hassan Asghar</span>
                        </h2>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold tracking-tight leading-[1.1]">
                            <span className="block text-white mb-2">Building</span>
                            <span className="bg-gradient-to-r from-brandIndigo via-purple-500 to-brandPink bg-clip-text text-transparent drop-shadow-lg">
                                Digital Products.
                            </span>
                        </h1>
                    </div>

                    {/* Typewriter Subheading */}
                    <div className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-300 h-10 flex justify-center lg:justify-start items-center">
                        <Terminal size={24} className="mr-3 text-brandIndigo hidden sm:block" />
                        <span>{words[index].substring(0, subIndex)}</span>
                        <span className={`text-brandPink font-bold ml-1 ${blink ? "opacity-100" : "opacity-0"}`}>|</span>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-sans font-light leading-relaxed">
                        I specialize in architecting scalable, production-ready web applications with modern tech stacks. Focused on delivering premium, high-performance UI and resilient backend systems.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brandIndigo to-brandPink shadow-glowIndigo hover:shadow-glowPink hover:-translate-y-1 transition-all duration-300"
                        >
                            View Featured Work
                            <ArrowRight size={16} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-brandDark hover:border-white hover:-translate-y-1 transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Right Visual/Code Column (Replaces empty space) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="lg:col-span-5 hidden lg:block relative"
                >
                    <div className="glass-panel rounded-2xl p-6 border border-gray-800/80 shadow-2xl relative z-10 bg-[#0c111c]/80 backdrop-blur-xl">
                        {/* Fake Mac Header */}
                        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
                            <div className="w-3 h-3 rounded-full bg-rose-500" />
                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                            <div className="ml-2 flex items-center text-xs font-mono text-gray-500 gap-1.5">
                                <Code2 size={12} /> developer.config.ts
                            </div>
                        </div>
                        {/* Glowing Syntax Mockup */}
                        <div className="font-mono text-sm leading-relaxed text-gray-300">
                            <p><span className="text-brandPink">const</span> <span className="text-brandIndigo">developer</span> = {'{'}</p>
                            <p className="ml-4">name: <span className="text-emerald-400">&quot;M Hassan Asghar&quot;</span>,</p>
                            <p className="ml-4">experience: <span className="text-amber-400">1 year</span>,</p>
                            <p className="ml-4">focus: <span className="text-emerald-400">&quot;Full Stack Web App&quot;</span>,</p>
                            <p className="ml-4">skills: [</p>
                            <p className="ml-8"><span className="text-emerald-400">&quot;React.js&quot;</span>, <span className="text-emerald-400">&quot;Next.js&quot;</span>,</p>
                            <p className="ml-8"><span className="text-emerald-400">&quot;Node.js&quot;</span>, <span className="text-emerald-400">&quot;MongoDB&quot;</span>,</p>
                            <p className="ml-8"><span className="text-emerald-400">&quot;TailwindCSS&quot;</span></p>
                            <p className="ml-4">],</p>
                            <p className="ml-4">passion: () <span className="text-brandPink">=&gt;</span> {'{'}</p>
                            <p className="ml-8 text-gray-400 italic">{"// Building things that matter"}</p>
                            <p className="ml-8">return <span className="text-brandIndigo">true</span>;</p>
                            <p className="ml-4">{'}'}</p>
                            <p>{'};'}</p>
                        </div>
                    </div>
                    {/* Aesthetic accents around the code block */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-brandPink/30 rounded-full blur-[40px] -z-10" />
                    <div className="absolute -bottom-6 -left-4 w-32 h-32 bg-brandIndigo/30 rounded-full blur-[50px] -z-10" />
                </motion.div>
            </div>

            {/* Down indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-8 rounded-full border border-gray-600 flex justify-center py-1 bg-gray-900/50">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-0.5 h-2.5 bg-brandPink rounded-full shadow-glowPink"
                    />
                </div>
            </div>
        </section>
    );
}
