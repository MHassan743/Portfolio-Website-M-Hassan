"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Plus, Calendar, ExternalLink, X, Upload, Eye, Trash2, CheckCircle2, Image as ImageIcon } from "lucide-react";

const INITIAL_CERTIFICATES = [
    {
        id: "cert-1",
        title: "Full Stack Web Development Internship",
        issuer: "IR MEDIA",
        date: "1st July 2025 - 30th April 2026",
        category: "Internship",
        badge: "Full Stack",
        desc: "Successfully completed Full Stack Web Development internship program, developing production web applications, database structures, and dynamic backend services.",
        image: "/certificates/internship-ir-media.jpg",
        isDefault: true,
    },
    {
        id: "cert-2",
        title: "Prompt Engineering Workshop",
        issuer: "The University of Lahore (eSargodha)",
        date: "5 May - 9 May 2025",
        category: "AI & Workshop",
        badge: "TECH WEEK 2025",
        desc: "Successfully participated in Prompt Engineering workshop during TECH WEEK 2025, mastering AI communication, prompt optimization, and automated workflows.",
        image: "/certificates/prompt-engineering-uol.jpg",
        isDefault: true,
    }
];

export default function Certificates() {
    const [certificates, setCertificates] = useState(INITIAL_CERTIFICATES);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        issuer: "",
        date: "",
        category: "Certification",
        badge: "",
        desc: "",
        image: "",
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [uploadType, setUploadType] = useState("file"); // "file" | "url"
    const [imageUrlInput, setImageUrlInput] = useState("");

    // Load persisted certificates on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem("mhassan_portfolio_certificates");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setCertificates(parsed);
                }
            }
        } catch (e) {
            console.error("Failed to load certificates from localStorage", e);
        }
    }, []);

    // Save certificates to localStorage
    const saveToLocalStorage = (updatedCerts) => {
        try {
            localStorage.setItem("mhassan_portfolio_certificates", JSON.stringify(updatedCerts));
        } catch (e) {
            console.error("Failed to save certificates to localStorage", e);
        }
    };

    // Handle File Upload to Base64
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("Please select an image smaller than 5MB.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle Image URL input
    const handleUrlChange = (e) => {
        const url = e.target.value;
        setImageUrlInput(url);
        setImagePreview(url);
        setFormData((prev) => ({ ...prev, image: url }));
    };

    // Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.issuer || !formData.image) {
            alert("Please fill out Title, Issuer, and provide a Certificate Image.");
            return;
        }

        const newCert = {
            id: `cert-${Date.now()}`,
            title: formData.title,
            issuer: formData.issuer,
            date: formData.date || "2025 - Present",
            category: formData.category || "Certification",
            badge: formData.badge || formData.category || "Verified",
            desc: formData.desc || "Verified certificate of achievement.",
            image: formData.image,
            isDefault: false,
        };

        const updated = [newCert, ...certificates];
        setCertificates(updated);
        saveToLocalStorage(updated);

        // Reset & Close
        setFormData({
            title: "",
            issuer: "",
            date: "",
            category: "Certification",
            badge: "",
            desc: "",
            image: "",
        });
        setImagePreview(null);
        setImageUrlInput("");
        setIsAddModalOpen(false);
    };

    // Delete custom certificate
    const handleDeleteCertificate = (id, e) => {
        e.stopPropagation();
        if (confirm("Are you sure you want to remove this certificate?")) {
            const updated = certificates.filter((c) => c.id !== id);
            setCertificates(updated);
            saveToLocalStorage(updated);
            if (selectedCertificate?.id === id) {
                setSelectedCertificate(null);
            }
        }
    };

    return (
        <section id="certificates" className="py-20 md:py-28 relative overflow-hidden bg-brandDark transition-colors duration-300">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full bg-brandIndigo/5 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-brandPink/5 blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with Title & Add Button */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandPink/10 border border-brandPink/20 text-brandPink text-xs uppercase font-bold tracking-widest">
                            <Award size={14} />
                            <span>My Credentials</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                            Certificates & Achievements
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-brandIndigo to-brandPink rounded-full" />
                    </div>

                    {/* Button on the side to add new certificates in future */}
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brandIndigo to-purple-600 text-white font-bold text-sm shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_28px_rgba(99,102,241,0.55)] hover:scale-105 transition-all duration-300 cursor-pointer group self-start md:self-auto"
                    >
                        <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                        <span>Add New Certificate</span>
                    </button>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group glass-panel rounded-[2rem] border border-gray-800/80 hover:border-brandIndigo/40 bg-[#0c111c]/60 overflow-hidden relative transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:shadow-brandIndigo/10"
                        >
                            {/* Certificate Image Banner */}
                            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/40 border-b border-gray-800/80 group">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c111c] via-black/20 to-black/30 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                                {/* Badge Top Right */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-brandPink/40 text-brandPink shadow-lg">
                                        {cert.badge || cert.category}
                                    </span>
                                </div>

                                {/* Hover Zoom / Lightbox Trigger */}
                                <button
                                    onClick={() => setSelectedCertificate(cert)}
                                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] text-white cursor-pointer"
                                >
                                    <div className="p-3 rounded-full bg-brandIndigo/80 text-white shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <Eye size={24} />
                                    </div>
                                    <span className="mt-2 text-xs font-bold tracking-wide uppercase text-gray-200">
                                        Click to view full certificate
                                    </span>
                                </button>
                            </div>

                            {/* Certificate Content */}
                            <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-xs text-gray-400">
                                        <span className="inline-flex items-center gap-1.5 font-semibold text-brandIndigo">
                                            <CheckCircle2 size={14} className="text-emerald-400" />
                                            {cert.issuer}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-gray-400">
                                            <Calendar size={13} />
                                            {cert.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-brandPink transition-colors">
                                        {cert.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3">
                                        {cert.desc}
                                    </p>
                                </div>

                                {/* Footer Action Bar */}
                                <div className="pt-4 border-t border-gray-800/60 flex items-center justify-between">
                                    <button
                                        onClick={() => setSelectedCertificate(cert)}
                                        className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-brandPink transition-colors cursor-pointer"
                                    >
                                        <ExternalLink size={14} />
                                        <span>Preview Full Resolution</span>
                                    </button>

                                    {/* Delete option for user added certs or if non-default */}
                                    {!cert.isDefault && (
                                        <button
                                            onClick={(e) => handleDeleteCertificate(cert.id, e)}
                                            className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                                            title="Delete Certificate"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* FULLSCREEN LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCertificate(null)}
                        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full max-h-[90vh] glass-panel rounded-2xl overflow-hidden border border-gray-800 bg-[#0c111c] flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="p-4 sm:p-6 border-b border-gray-800 flex items-center justify-between bg-black/40">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white">{selectedCertificate.title}</h3>
                                    <p className="text-xs text-brandIndigo font-semibold mt-0.5">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedCertificate(null)}
                                    className="p-2.5 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Image Scrollable Viewport */}
                            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/60">
                                <img
                                    src={selectedCertificate.image}
                                    alt={selectedCertificate.title}
                                    className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10 shadow-2xl"
                                />
                            </div>

                            {/* Footer description */}
                            <div className="p-4 sm:p-5 border-t border-gray-800 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300">
                                <span>{selectedCertificate.desc}</span>
                                <a
                                    href={selectedCertificate.image}
                                    download={`${selectedCertificate.title.replace(/\s+/g, '_')}_Certificate`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-lg bg-brandIndigo/20 border border-brandIndigo/40 text-brandIndigo font-bold hover:bg-brandIndigo hover:text-white transition-all whitespace-nowrap"
                                >
                                    Download Image
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ADD CERTIFICATE MODAL */}
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
                            {/* Sticky Modal Header */}
                            <div className="p-6 sm:px-8 sm:pt-7 sm:pb-5 border-b border-gray-800/80 bg-[#0c111c] shrink-0 relative">
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
                                >
                                    <X size={20} />
                                </button>
                                <div className="space-y-1 pr-8">
                                    <div className="inline-flex items-center gap-2 text-xs font-bold text-brandPink uppercase tracking-wider">
                                        <Plus size={14} />
                                        <span>New Credential</span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white">Add New Certificate</h3>
                                    <p className="text-xs text-gray-400">Fill in details to display a new certificate on your portfolio.</p>
                                </div>
                            </div>

                            {/* Scrollable Form Body */}
                            <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Title */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-300 mb-1">
                                            Certificate Title *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. AWS Certified Solutions Architect"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                            required
                                        />
                                    </div>

                                    {/* Issuer & Date Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-300 mb-1">
                                                Issuer / Organization *
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Coursera, IBM, UOL"
                                                value={formData.issuer}
                                                onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-300 mb-1">
                                                Issue Date / Period
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. August 2026"
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Category & Badge */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-300 mb-1">
                                                Category
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Web Dev, AI, Cloud"
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-300 mb-1">
                                                Badge Text
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Verified, Top Scorer"
                                                value={formData.badge}
                                                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-300 mb-1">
                                            Description / Highlights
                                        </label>
                                        <textarea
                                            rows={2}
                                            placeholder="Brief description of skills or topics covered in this certificate..."
                                            value={formData.desc}
                                            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Image Upload / URL Selector */}
                                    <div className="space-y-2 pt-2 border-t border-gray-800">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-bold text-gray-300">
                                                Certificate Image *
                                            </label>
                                            <div className="flex bg-white/5 p-1 rounded-lg border border-gray-800">
                                                <button
                                                    type="button"
                                                    onClick={() => setUploadType("file")}
                                                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-colors ${uploadType === "file" ? "bg-brandIndigo text-white" : "text-gray-400 hover:text-white"}`}
                                                >
                                                    Upload File
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setUploadType("url")}
                                                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-colors ${uploadType === "url" ? "bg-brandIndigo text-white" : "text-gray-400 hover:text-white"}`}
                                                >
                                                    Image URL
                                                </button>
                                            </div>
                                        </div>

                                        {uploadType === "file" ? (
                                            <label className="border-2 border-dashed border-gray-700 hover:border-brandIndigo rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-white/5 hover:bg-white/10 transition-all text-center group">
                                                <Upload size={28} className="text-gray-400 group-hover:text-brandIndigo group-hover:scale-110 transition-all mb-2" />
                                                <span className="text-xs font-bold text-gray-200">Click to select image file</span>
                                                <span className="text-[10px] text-gray-400 mt-1">PNG, JPG, WEBP up to 5MB</span>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                            </label>
                                        ) : (
                                            <input
                                                type="url"
                                                placeholder="https://example.com/certificate.jpg"
                                                value={imageUrlInput}
                                                onChange={handleUrlChange}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brandIndigo transition-colors"
                                            />
                                        )}

                                        {/* Preview */}
                                        {imagePreview && (
                                            <div className="relative mt-3 h-32 rounded-xl overflow-hidden border border-brandIndigo/50 bg-black/40 flex items-center justify-center">
                                                <img
                                                    src={imagePreview}
                                                    alt="Certificate Preview"
                                                    className="h-full object-contain"
                                                />
                                                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                                                    <CheckCircle2 size={12} /> Image Selected
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Form Action Buttons */}
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
                                            <Award size={15} />
                                            Save Certificate
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
