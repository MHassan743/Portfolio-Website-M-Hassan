"use client";

import { motion } from "framer-motion";
import { Layout, Database, Wrench } from "lucide-react";

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 },
        },
    };

    const skillGroups = [
        {
            title: "Frontend Development",
            icon: <Layout className="text-brandIndigo" size={26} />,
            skills: [
                { name: "React.js", level: "92%" },
                { name: "Next.js 14", level: "88%" },
                { name: "Tailwind CSS", level: "95%" },
                { name: "Framer Motion", level: "85%" },
                { name: "JavaScript (ES6+)", level: "90%" },
                { name: "HTML5/CSS3", level: "95%" },
            ],
        },
        {
            title: "Backend & Database",
            icon: <Database className="text-brandPink" size={26} />,
            skills: [
                { name: "Node.js", level: "85%" },
                { name: "Express.js", level: "85%" },
                { name: "RESTful APIs", level: "90%" },
                { name: "MongoDB", level: "88%" },
                { name: "Microservices", level: "75%" },
                { name: "Authentication", level: "85%" },
            ],
        },
        {
            title: "Tools & Systems",
            icon: <Wrench className="text-brandIndigo" size={26} />,
            skills: [
                { name: "Git / GitHub Flow", level: "90%" },
                { name: "Vercel Deployment", level: "92%" },
                { name: "VS Code", level: "95%" },
                { name: "AI Prompts / DevTools", level: "90%" },
                { name: "Postman API Testing", level: "85%" },
                { name: "NPM / Yarn", level: "90%" },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-brandDark transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-brandIndigo/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <div className="text-center space-y-3 mb-16">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-brandIndigo">My Arsenal</h2>
                    <p className="text-3xl sm:text-4xl font-display font-bold text-white">Technical Proficiency</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-brandIndigo to-brandPink mx-auto rounded-full" />
                </div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {skillGroups.map((group, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            variants={cardVariants}
                            className="glass-panel p-8 rounded-3xl hover:-translate-y-2 hover:shadow-glowIndigo transition-all duration-300 flex flex-col h-full border border-gray-800/80 bg-[#0c111c]/60 group relative overflow-hidden"
                        >
                            {/* Inner glow highlight */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brandPink/10 blur-[50px] group-hover:bg-brandIndigo/20 transition-colors duration-500" />

                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-800">
                                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-brandIndigo/30 shadow-sm transition-colors">
                                    {group.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold text-gray-100">
                                    {group.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-6 flex-grow relative z-10">
                                {group.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="space-y-2.5">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs text-brandPink font-bold tracking-wide">
                                                {skill.level}
                                            </span>
                                        </div>
                                        {/* Progress Bar background */}
                                        <div className="h-1.5 w-full bg-gray-800/80 rounded-full overflow-hidden border border-gray-700/30">
                                            {/* Animated Progress Fill */}
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-brandIndigo to-brandPink rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: "easeOut", delay: skillIdx * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
