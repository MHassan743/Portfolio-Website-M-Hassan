"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, Plus, Lock, Key, X, Trash2, ShieldAlert, Code2 } from "lucide-react";

const SECRET_KEY = "Chicknare43@&$";

const THEME_PRESETS = {
    indigo: {
        bg: "from-brandIndigo/20 to-purple-600/20",
        border: "group-hover:border-brandIndigo/40",
        label: "Indigo & Purple",
    },
    pink: {
        bg: "from-brandPink/30 to-amber-600/20",
        border: "group-hover:border-brandPink/40",
        label: "Pink & Amber",
    },
    emerald: {
        bg: "from-emerald-600/20 to-teal-600/20",
        border: "group-hover:border-emerald-500/40",
        label: "Emerald & Teal",
    },
    blue: {
        bg: "from-blue-600/20 to-sky-600/20",
        border: "group-hover:border-blue-500/30",
        label: "Blue & Sky",
    },
    rose: {
        bg: "from-rose-600/20 to-brandPink/20",
        border: "group-hover:border-brandPink/30",
        label: "Rose & Pink",
    },
};

const INITIAL_PROJECTS = [
    {
        id: "proj-1",
        title: "BazarioX",
        subtitle: "Multi-Vendor Marketplace",
        live: "https://bazariox-store.vercel.app",
        tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
        desc: "Pakistan's multi-vendor e-commerce platform with AI-driven logistics and secure escrow payment system. Features vendor management, neighborhood hubs, and community-driven shopping.",
        featured: false,
        client: false,
        style: THEME_PRESETS.indigo,
        isDefault: true,
    },
    {
        id: "proj-2",
        title: "ClinicMaster",
        subtitle: "Gynecology Clinic Portal",
        live: "https://gynecologists.vercel.app",
        tech: ["HTML", "CSS", "JavaScript"],
        desc: "Production website for Dr. Fadia Ishtiaq, Senior Consultant Gynaecologist. Includes appointment booking, services showcase, dynamic patient testimonials, and Maps integration.",
        featured: true,
        client: true,
        style: THEME_PRESETS.pink,
        isDefault: true,
    },
    {
        id: "proj-3",
        title: "Hotel Management",
        subtitle: "Admin & Guest Portal",
        live: "https://hotel-management-system-eight-khaki.vercel.app/",
        tech: ["HTML", "CSS", "JavaScript"],
        desc: "Full admin dashboard with room management, reservations, and analytics reports. Role-based login (Admin & Customer), online booking, and dynamic service requests.",
        featured: false,
        client: false,
        style: THEME_PRESETS.emerald,
        isDefault: true,
    },
    {
        id: "proj-4",
        title: "The Clips Agency",
        subtitle: "Creator Agency Website",
        live: "https://04clips.vercel.app",
        tech: ["React.js", "Tailwind CSS"],
        desc: "Professional agency website for social media content creators with modern responsive design focused on maximum visual hierarchy and performance.",
        featured: false,
        client: false,
        style: THEME_PRESETS.blue,
        isDefault: true,
    },
    {
        id: "proj-5",
        title: "UOL Exam System",
        subtitle: "Exam Management System",
        live: "https://uol-exam-management-system.vercel.app/",
        tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
        desc: "Universalized department-agnostic examination system. Features dynamic department detection from uploaded Excel files, automated academic term displays, and robust faculty UI.",
        featured: false,
        client: false,
        style: THEME_PRESETS.blue,
        isDefault: true,
    },
    {
        id: "proj-6",
        title: "Plagiarism API",
        subtitle: "Text Plagiarism System",
        live: "https://plagiarism-detection-system-three.vercel.app",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        desc: "Backend REST API for text comparison and plagiarism analysis with MongoDB database integration for tracking academic history scores.",
        featured: false,
        client: false,
        style: THEME_PRESETS.rose,
        isDefault: true,
    }
];

export default function Projects() {
    const [projects, setProjects] = useState(INITIAL_PROJECTS);
    const [isSecretModalOpen, setIsSecretModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Secret Key Lock State
    const [secretInput, setSecretInput] = useState("");
    const [secretError, setSecretError] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        live: "",
        techInput: "",
        desc: "",
        featured: false,
        client: false,
        theme: "indigo",
    });

    // Load persisted projects on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem("mhassan_portfolio_projects");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setProjects(parsed);
                }
            }
        } catch (e) {
            console.error("Failed to load projects from localStorage", e);
        }
    }, []);

    // Save projects to localStorage
    const saveToLocalStorage = (updatedProjects) => {
        try {
            localStorage.setItem("mhassan_portfolio_projects", JSON.stringify(updatedProjects));
        } catch (e) {
            console.error("Failed to save projects to localStorage", e);
        }
    };

    // Open Secret Lock Modal
    const handleOpenAddProject = () => {
        setSecretInput("");
        setSecretError("");
        setIsSecretModalOpen(true);
    };

    // Verify Secret Passcode
    const handleVerifySecretKey = (e) => {
        e.preventDefault();
        if (secretInput.trim() === SECRET_KEY) {
            setIsSecretModalOpen(false);
            setSecretInput("");
            setSecretError("");
            setIsAddModalOpen(true);
        } else {
            setSecretError("Incorrect Secret Key! Access denied.");
        }
    };

    // Form Submission for New Project
    const handleAddProjectSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.subtitle || !formData.live) {
            alert("Please fill out Title, Subtitle, and Live Demo Link.");
            return;
        }

        const techArray = formData.techInput
            ? formData.techInput.split(",").map((t) => t.trim()).filter(Boolean)
            : ["React.js", "Tailwind CSS"];

        const selectedStyle = THEME_PRESETS[formData.theme] || THEME_PRESETS.indigo;

        const newProject = {
            id: `proj-${Date.now()}`,
            title: formData.title,
            subtitle: formData.subtitle,
            live: formData.live.startsWith("http") ? formData.live : `https://${formData.live}`,
            tech: techArray,
            desc: formData.desc || "Custom production project built with modern web architecture and interactive UI.",
            featured: formData.featured,
            client: formData.client,
            style: selectedStyle,
            isDefault: false,
        };

        const updated = [newProject, ...projects];
        setProjects(updated);
        saveToLocalStorage(updated);

        // Reset & Close
        setFormData({
            title: "",
            subtitle: "",
            live: "",
            techInput: "",
            desc: "",
            featured: false,
            client: false,
            theme: "indigo",
        });
        setIsAddModalOpen(false);
    };

    // Delete custom project
    const handleDeleteProject = (id, e) => {
        e.stopPropagation();
        if (confirm("Are you sure you want to remove this project?")) {
            const updated = projects.filter((p) => p.id !== id);
            setProjects(updated);
            saveToLocalStorage(updated);
        }
    };

    return (
        <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-brandDark transition-colors duration-300">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brandPink/5 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-brandIndigo/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with Title & Add Button */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-3">
                        <h2 className="text-xs uppercase font-bold tracking-widest text-brandPink">My Work</h2>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Featured Architecture</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-brandIndigo to-brandPink rounded-full" />
                    </div>

                    {/* Add Project Button */}
                    <button
                        onClick={handleOpenAddProject}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brandIndigo to-brandPink text-white font-bold text-sm shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_28px_rgba(236,72,153,0.55)] hover:scale-105 transition-all duration-300 cursor-pointer group self-start md:self-auto"
                    >
                        <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                        <span>Add New Project</span>
                    </button>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id || idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`group glass-panel rounded-[2rem] flex flex-col justify-between overflow-hidden hover:-translate-y-2 border border-gray-800/80 ${project.style?.border || "group-hover:border-brandIndigo/40"} hover:shadow-2xl hover:shadow-brandIndigo/10 bg-[#0c111c]/60 relative transition-all duration-500`}
                        >
                            {/* Inner ambient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brandIndigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 w-full">
                                {/* SVG Theme Banner Graphic */}
                                <div className={`h-40 bg-gradient-to-br ${project.style?.bg || "from-brandIndigo/20 to-purple-600/20"} relative flex items-center justify-center overflow-hidden border-b border-gray-800/60 transition-colors`}>
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

                                    {/* Delete option for custom projects */}
                                    {!project.isDefault && (
                                        <button
                                            onClick={(e) => handleDeleteProject(project.id, e)}
                                            className="absolute top-4 left-4 p-2 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 hover:bg-red-500 hover:text-white transition-all shadow-md z-20"
                                            title="Delete Project"
                                        >
                                            <Trash2 size={14} />
                                        </button>
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

            {/* SECRET KEY LOCK MODAL */}
            <AnimatePresence>
                {isSecretModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSecretModalOpen(false)}
                        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-md w-full glass-panel rounded-3xl border border-brandIndigo/40 bg-[#0c111c] shadow-2xl p-6 sm:p-8 overflow-hidden"
                        >
                            {/* Ambient Glow */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brandIndigo/20 rounded-full blur-3xl pointer-events-none" />

                            <button
                                onClick={() => setIsSecretModalOpen(false)}
                                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X size={18} />
                            </button>

                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brandIndigo to-brandPink p-0.5 mx-auto shadow-glowIndigo">
                                    <div className="w-full h-full rounded-[14px] bg-[#0c111c] flex items-center justify-center text-brandPink">
                                        <Lock size={28} />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-2xl font-display font-bold text-white">Secret Key Lock</h3>
                                    <p className="text-xs text-gray-400">Please enter your authorization secret key to add a project.</p>
                                </div>

                                <form onSubmit={handleVerifySecretKey} className="space-y-4 pt-2">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                            <Key size={16} />
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Enter secret passcode..."
                                            value={secretInput}
                                            onChange={(e) => {
                                                setSecretInput(e.target.value);
                                                setSecretError("");
                                            }}
                                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo focus:ring-1 focus:ring-brandIndigo transition-all"
                                            autoFocus
                                            required
                                        />
                                    </div>

                                    {secretError && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold"
                                        >
                                            <ShieldAlert size={16} className="shrink-0" />
                                            <span>{secretError}</span>
                                        </motion.div>
                                    )}

                                    <div className="flex items-center justify-end gap-3 pt-2">
                                        <button
                                            type="button"
                                            onClick={() => setIsSecretModalOpen(false)}
                                            className="px-4 py-2.5 rounded-xl border border-gray-700 text-gray-300 font-bold text-xs hover:bg-white/5 transition-colors cursor-pointer"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brandIndigo to-brandPink text-white font-bold text-xs shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
                                        >
                                            Unlock & Proceed
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ADD PROJECT FORM MODAL */}
            <AnimatePresence>
                {isAddModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsAddModalOpen(false)}
                        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-xl w-full max-h-[90vh] flex flex-col glass-panel rounded-3xl border border-gray-800 bg-[#0c111c] shadow-2xl overflow-hidden"
                        >
                            {/* Sticky Header */}
                            <div className="p-6 sm:px-8 sm:pt-7 sm:pb-5 border-b border-gray-800/80 bg-[#0c111c] shrink-0 relative">
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
                                >
                                    <X size={20} />
                                </button>
                                <div className="space-y-1 pr-8">
                                    <div className="inline-flex items-center gap-2 text-xs font-bold text-brandPink uppercase tracking-wider">
                                        <Code2 size={14} />
                                        <span>New Portfolio Entry</span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white">Add New Project</h3>
                                    <p className="text-xs text-gray-400">Fill in the details to publish a new featured project on your portfolio.</p>
                                </div>
                            </div>

                            {/* Scrollable Form Body */}
                            <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                                <form onSubmit={handleAddProjectSubmit} className="space-y-4">
                                    {/* Title */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-300 mb-1">
                                            Project Title *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. AI Content Suite"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                            required
                                        />
                                    </div>

                                    {/* Subtitle & Live URL */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-300 mb-1">
                                                Subtitle / Tagline *
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. SaaS Admin Platform"
                                                value={formData.subtitle}
                                                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-300 mb-1">
                                                Live Demo Link *
                                            </label>
                                            <input
                                                type="url"
                                                placeholder="https://myproject.vercel.app"
                                                value={formData.live}
                                                onChange={(e) => setFormData({ ...formData, live: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-300 mb-1">
                                            Tech Stack (Comma-separated)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="React.js, Node.js, MongoDB, Tailwind CSS"
                                            value={formData.techInput}
                                            onChange={(e) => setFormData({ ...formData, techInput: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-300 mb-1">
                                            Project Description
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Detailed description of features, stack details, and user experience..."
                                            value={formData.desc}
                                            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Theme Gradient Selector */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-300 mb-2">
                                            Card Theme Style
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                            {Object.entries(THEME_PRESETS).map(([key, preset]) => (
                                                <button
                                                    key={key}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, theme: key })}
                                                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${formData.theme === key ? "border-brandIndigo bg-brandIndigo/20 text-white shadow-md" : "border-gray-800 bg-white/5 text-gray-400 hover:text-white"}`}
                                                >
                                                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${preset.bg}`} />
                                                    <span className="text-xs font-bold">{preset.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Badges / Checkboxes */}
                                    <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-gray-800">
                                        <label className="flex items-center gap-2 text-xs font-bold text-gray-300 cursor-pointer select-none">
                                            <input
                                                type="checkbox"
                                                checked={formData.featured}
                                                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                                className="w-4 h-4 rounded bg-white/5 border-gray-700 text-brandPink focus:ring-brandPink"
                                            />
                                            <span>Mark as Featured</span>
                                        </label>

                                        <label className="flex items-center gap-2 text-xs font-bold text-gray-300 cursor-pointer select-none">
                                            <input
                                                type="checkbox"
                                                checked={formData.client}
                                                onChange={(e) => setFormData({ ...formData, client: e.target.checked })}
                                                className="w-4 h-4 rounded bg-white/5 border-gray-700 text-amber-500 focus:ring-amber-500"
                                            />
                                            <span>Client Production Project</span>
                                        </label>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-800/80">
                                        <button
                                            type="button"
                                            onClick={() => setIsAddModalOpen(false)}
                                            className="px-5 py-2.5 rounded-xl border border-gray-700 text-gray-300 font-bold text-xs hover:bg-white/5 transition-colors cursor-pointer"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brandIndigo to-brandPink text-white font-bold text-xs shadow-lg hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1.5"
                                        >
                                            <Plus size={15} />
                                            Publish Project
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
