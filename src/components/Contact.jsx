"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GitHub, LinkedIn, Fiverr } from "@/components/BrandIcons";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", whatsapp: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.whatsapp || !formData.message) {
            setStatus("error");
            setErrorMessage("Please fill out all required fields.");
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        // Format pre-filled message for WhatsApp
        const formattedText = `Hello Hassan! 👋%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
        const whatsappUrl = `https://wa.me/923407542382?text=${formattedText}`;

        try {
            // Save submission to API in background
            fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            }).catch((err) => console.warn("API logging error:", err));

            // Open WhatsApp app/web directly with message pre-filled
            window.open(whatsappUrl, "_blank");

            setStatus("success");
            setFormData({ name: "", whatsapp: "", message: "" });
        } catch (err) {
            console.error("WhatsApp Redirect Error:", err);
            setStatus("error");
            setErrorMessage("Could not open WhatsApp automatically. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-brandDark transition-colors duration-300">
            {/* Background radial highlight */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brandIndigo/10 blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-3 mb-16">
                    <h2 className="text-xs uppercase font-bold tracking-widest text-brandPink">Talk To Me</h2>
                    <p className="text-3xl sm:text-4xl font-display font-bold text-white">Start a Conversation</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-brandIndigo to-brandPink mx-auto rounded-full" />
                </div>

                {/* Content Box */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                    {/* Info Side */}
                    <div className="lg:col-span-5 space-y-8 flex flex-col justify-between relative z-10">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-display font-semibold text-white leading-tight">
                                Let&apos;s build something great together.
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                                Whether you need a custom web portal built from scratch, full stack application architecture alignment, or a developer to reinforce your dev team, feel free to reach out!
                            </p>
                        </div>

                        {/* Direct Cards */}
                        <div className="space-y-4 my-6">
                            <a
                                href="mailto:hj0889297@gmail.com"
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brandIndigo/30 hover:bg-white/[0.05] hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <div className="p-3.5 rounded-xl bg-brandIndigo/10 text-brandIndigo group-hover:bg-brandIndigo group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Email Address</p>
                                    <p className="text-[13px] font-bold text-gray-200">hj0889297@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:03407542382"
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brandPink/30 hover:bg-white/[0.05] hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <div className="p-3.5 rounded-xl bg-brandPink/10 text-brandPink group-hover:bg-brandPink group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Phone Number</p>
                                    <p className="text-[13px] font-bold text-gray-200">0340-7542382</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 group relative overflow-hidden">
                                <div className="p-3.5 rounded-xl bg-white/10 text-gray-300 group-hover:bg-white/20 transition-colors duration-300">
                                    <MapPin size={18} />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Location</p>
                                    <p className="text-[13px] font-bold text-gray-200 font-sans">Sargodha, Pakistan (Remote)</p>
                                </div>
                            </div>
                        </div>

                        {/* Repeated Social Connections */}
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mr-2">Connect:</span>
                            <a
                                href="https://github.com/MHassan743"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-brandIndigo hover:bg-brandIndigo/10 transition-all duration-300"
                                aria-label="GitHub Profile"
                            >
                                <GitHub size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hassan-jutt-6aa072313"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-brandIndigo hover:bg-brandIndigo/10 transition-all duration-300"
                                aria-label="LinkedIn Profile"
                            >
                                <LinkedIn size={18} />
                            </a>
                            <a
                                href="https://www.fiverr.com/s/L3e3jm4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-[#1DBF73] hover:border-[#1DBF73] hover:bg-[#1DBF73]/10 transition-all duration-300"
                                aria-label="Fiverr Profile"
                            >
                                <Fiverr size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7">
                        <div className="glass-panel p-8 md:p-10 rounded-[2rem] hover:shadow-2xl hover:shadow-brandIndigo/10 transition-all duration-500 border border-gray-800/80 bg-[#0c111c]/80 relative overflow-hidden group">

                            {/* Inner Ambient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brandIndigo/5 to-brandPink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Name field */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-700/60 bg-black/40 focus:border-brandIndigo focus:ring-1 focus:ring-brandIndigo focus:outline-none transition-all duration-300 text-sm font-sans text-gray-200 placeholder:text-gray-600"
                                            required
                                        />
                                    </div>

                                    {/* WhatsApp field */}
                                    <div className="space-y-2">
                                        <label htmlFor="whatsapp" className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                                            WhatsApp Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="+92 3XX XXXXXXX"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-700/60 bg-black/40 focus:border-brandIndigo focus:ring-1 focus:ring-brandIndigo focus:outline-none transition-all duration-300 text-sm font-sans text-gray-200 placeholder:text-gray-600"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message field */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Describe your project, timeline, or inquiries..."
                                        rows={5}
                                        className="w-full px-5 py-4 rounded-xl border border-gray-700/60 bg-black/40 focus:border-brandIndigo focus:ring-1 focus:ring-brandIndigo focus:outline-none transition-all duration-300 text-sm font-sans text-gray-200 placeholder:text-gray-600 resize-none"
                                        required
                                    />
                                </div>

                                {/* Send Button */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-brandIndigo to-brandPink shadow-glowIndigo hover:shadow-glowPink disabled:opacity-50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="animate-spin" size={16} />
                                            Opening WhatsApp...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send via WhatsApp
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Status Alert Panels */}
                            <AnimatePresence mode="wait">
                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 transition-all mt-6 space-y-2"
                                    >
                                        <div className="flex items-center gap-2 text-base font-bold text-emerald-400">
                                            <CheckCircle className="flex-shrink-0" size={20} />
                                            <span>WhatsApp Opening...</span>
                                        </div>
                                        <p className="text-xs text-emerald-200/90 leading-relaxed font-light">
                                            Your message has been formatted! WhatsApp is opening — please tap <strong className="text-white">&quot;Send&quot;</strong> in WhatsApp to deliver your message directly to Hassan.
                                        </p>
                                        <div className="pt-2 border-t border-emerald-500/20">
                                            <a
                                                href="https://wa.me/923407542382"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                                            >
                                                <span>Didn&apos;t open automatically? Click here to launch WhatsApp &rarr;</span>
                                            </a>
                                        </div>
                                    </motion.div>
                                )}

                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2.5 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 transition-colors mt-6 text-sm font-semibold"
                                    >
                                        <AlertCircle className="flex-shrink-0" size={18} />
                                        {errorMessage}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
