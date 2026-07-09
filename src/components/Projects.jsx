"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "BazarioX",
            subtitle: "Multi-Vendor Marketplace",
            live: "https://bazariox-store.vercel.app",
            tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
            desc: "Pakistan's multi-vendor e-commerce platform with AI-driven logistics and secure escrow payment system. Features vendor management, neighborhood hubs, and community-driven shopping.",
            featured: false,
            client: false,
            style: {
                bg: "from-brandIndigo/20 to-purple-600/20",
                border: "group-hover:border-brandIndigo/40",
            }
        },
        {
            title: "ClinicMaster",
            subtitle: "Gynecology Clinic Portal",
            live: "https://gynecologists.vercel.app",
            tech: ["HTML", "CSS", "JavaScript"],
            desc: "Production website for Dr. Fadia Ishtiaq, Senior Consultant Gynaecologist. Includes appointment booking, services showcase, dynamic patient testimonials, and Maps integration.",
            featured: true,
            client: true,
            style: {
                bg: "from-brandPink/30 to-amber-600/20",
                border: "group-hover:border-brandPink/40",
            }
        },
        {
            title: "Hotel Management",
            subtitle: "Admin & Guest Portal",
            live: "https://hotel-management-system-eight-khaki.vercel.app/",
            tech: ["HTML", "CSS", "JavaScript"],
            desc: "Full admin dashboard with room management, reservations, and analytics reports. Role-based login (Admin & Customer), online booking, and dynamic service requests.",
            featured: false,
            client: false,
            style: {
                bg: "from-emerald-600/20 to-teal-600/20",
                border: "group-hover:border-emerald-500/40",
            }
        },
        {
            title: "The Clips Agency",
            subtitle: "Creator Agency Website",
            live: "https://04clips.vercel.app",
            tech: ["React.js", "Tailwind CSS"],
            desc: "Professional agency website for social media content creators with modern responsive design focused on maximum visual hierarchy and performance.",
            featured: false,
            client: false,
            style: {
                bg: "from-blue-600/20 to-sky-600/20",
                border: "group-hover:border-blue-500/30",
            }
        },
        {
            title: "UOL Exam System",
            subtitle: "Exam Management System",
            live: "https://uol-exam-management-system.vercel.app/",
            tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
            desc: "Universalized department-agnostic examination system. Features dynamic department detection from uploaded Excel files, automated academic term displays, and robust faculty UI.",
            featured: false,
            client: false,
            style: {
                bg: "from-blue-600/20 to-sky-600/20",
                border: "group-hover:border-blue-500/30",
            }
        },
        {
            title: "Plagiarism API",
            subtitle: "Text Plagiarism System",
            live: "https://plagiarism-detection-system-three.vercel.app",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            desc: "Backend REST API for text comparison and plagiarism analysis with MongoDB database integration for tracking academic history scores.",
            featured: false,
            client: false,
            style: {
                bg: "from-rose-600/20 to-brandPink/20",
                border: "group-hover:border-brandPink/30",
            }
        }
    ];

    return (
        <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-brandDark transition-colors duration-300">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brandPink/5 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-brandIndigo/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <div className="text-center space-y-3 mb-16">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-brandPink">My Work</h2>
                    <p className="text-3xl sm:text-4xl font-display font-bold text-white">Featured Architecture</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-brandIndigo to-brandPink mx-auto rounded-full" />
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`group glass-panel rounded-[2rem] flex flex-col justify-between overflow-hidden hover:-translate-y-2 border border-gray-800/80 ${project.style.border} hover:shadow-2xl hover:shadow-brandIndigo/10 bg-[#0c111c]/60 relative transition-all duration-500`}
                        >
                            {/* Inner ambient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brandIndigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 w-full">
                                {/* SVG Theme Banner Graphic */}
                                <div className={`h-40 bg-gradient-to-br ${project.style.bg} relative flex items-center justify-center overflow-hidden border-b border-gray-800/60 transition-colors`}>
                                    {/* Subtle code pattern */}
                                    <div className="absolute inset-0 opacity-10 font-mono text-[9px] p-4 select-none leading-normal overflow-hidden mix-blend-overlay">
                                        {`import React from 'react';\nconst ${project.title.replace(/\s+/g, '')} = () => {\n  return (\n    <div className="p-6 transition-all">\n      <h1>${project.subtitle}</h1>\n    </div>\n  );\n};\nexport default ${project.title.replace(/\s+/g, '')};`}
                                    </div>

                                    {/* Accent design */}
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl font-display font-black text-white shadow-lg group-hover:scale-110 transition-transform duration-500 select-none">
                                        {project.title[0]}
                                    </div>

                                    {/* Featured / Client Badge */}
                                    {project.client && (
                                        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg">
                                            <Star size={10} fill="white" className="animate-pulse" />
                                            Client Live
                                        </div>
                                    )}
                                    {project.featured && !project.client && (
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-brandPink bg-brandPink/10 text-brandPink backdrop-blur-md">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-7 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-gray-100 group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-brandIndigo font-bold mt-1 tracking-wide">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-light">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Badges and links footer */}
                            <div className="p-7 pt-2 space-y-5 relative z-10">
                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide bg-white/5 text-gray-300 border border-white/10 group-hover:border-brandIndigo/20 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <div className="border-t border-gray-800/80 pt-5 flex items-center justify-between">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 group-hover:text-brandPink hover:underline underline-offset-4 transition-colors"
                                    >
                                        <ExternalLink size={14} />
                                        View Live Demo
                                        <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-brandPink text-lg leading-none">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
