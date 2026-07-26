"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "923407542382";

const packages = [
    {
        name: "Basic",
        tagline: "Perfect for small businesses",
        highlight: false,
        gradient: "from-gray-800 to-gray-900",
        border: "border-gray-700/60",
        badgeBg: "bg-gray-700 text-gray-300",
        btnClass:
            "border border-gray-600 text-gray-200 hover:bg-white hover:text-brandDark hover:border-white",
        services: [
            { name: "Business Website", price: "$150 – $300" },
            { name: "Website Maintenance", price: "$50 – $100/mo" },
        ],
        features: [
            "Up to 5 pages",
            "Responsive design",
            "Basic SEO setup",
            "Contact form",
            "1 round of revisions",
        ],
        cta: "Business Website",
    },
    {
        name: "Standard",
        tagline: "For growing online stores",
        highlight: true,
        gradient: "from-brandIndigo/20 to-brandPink/20",
        border: "border-brandIndigo/50",
        badgeBg: "bg-gradient-to-r from-brandIndigo to-brandPink text-white",
        btnClass:
            "bg-gradient-to-r from-brandIndigo to-brandPink text-white shadow-glowIndigo hover:shadow-glowPink",
        services: [
            { name: "E-commerce Store", price: "$400 – $800" },
            { name: "Business Website", price: "$200 – $380" },
            { name: "Website Maintenance", price: "$80 – $150/mo" },
        ],
        features: [
            "Everything in Basic",
            "Product catalog & cart",
            "Payment gateway integration",
            "Admin dashboard",
            "Advanced SEO",
            "2 rounds of revisions",
        ],
        cta: "E-commerce Store",
    },
    {
        name: "Premium",
        tagline: "Complex apps & full systems",
        highlight: false,
        gradient: "from-violet-900/30 to-purple-900/20",
        border: "border-violet-500/40",
        badgeBg: "bg-gradient-to-r from-violet-500 to-purple-600 text-white",
        btnClass:
            "border border-violet-500/60 text-violet-300 hover:bg-violet-500 hover:text-white hover:border-violet-500",
        services: [
            { name: "Web App (Custom)", price: "$500 – $1,500" },
            { name: "E-commerce Store", price: "$440 – $850" },
            { name: "API Integration", price: "Custom Quote" },
            { name: "Website Maintenance", price: "$100 – $250/mo" },
        ],
        features: [
            "Everything in Standard",
            "Custom web application",
            "REST / GraphQL API",
            "Auth & role management",
            "Real-time features",
            "5 revisions",
            "Priority support",
        ],
        cta: "Custom Web App",
    },
];

function getWhatsAppUrl(pkg) {
    const msg = encodeURIComponent(
        `Hi Hassan! I'm interested in the *${pkg.name} Package* (${pkg.cta}). Can you share more details?`
    );
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${msg}`;
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
    }),
};

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="py-20 md:py-28 relative overflow-hidden bg-[#070A10] transition-colors duration-300"
        >
            {/* Ambient glows */}
            <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full bg-brandIndigo/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brandPink/10 blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-3 mb-16"
                >
                    <h2 className="text-xs uppercase font-bold tracking-widest text-brandPink">
                        Transparent Pricing
                    </h2>
                    <p className="text-3xl sm:text-4xl font-display font-bold text-white">
                        Pricing Packages
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-brandIndigo to-brandPink mx-auto rounded-full" />
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light pt-2">
                        No hidden fees. Clear pricing for every budget. Get a free quote
                        tailored to your exact project needs.
                    </p>
                </motion.div>

                {/* Package Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={pkg.name}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className={`relative flex flex-col rounded-3xl border ${pkg.border} bg-gradient-to-br ${pkg.gradient} backdrop-blur-sm p-7 overflow-hidden transition-all duration-350 group`}
                        >
                            {/* Recommended badge */}
                            {pkg.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-brandIndigo to-brandPink text-white shadow-glowIndigo">
                                        <Sparkles size={10} />
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Inner ambient on hover */}
                            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

                            {/* Package Name & Tagline */}
                            <div className="mb-6 mt-2">
                                <span
                                    className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 ${pkg.badgeBg}`}
                                >
                                    {pkg.name}
                                </span>
                                <p className="text-gray-400 text-sm font-light">
                                    {pkg.tagline}
                                </p>
                            </div>

                            {/* Price Table */}
                            <div className="rounded-xl border border-white/5 bg-black/20 p-4 mb-6 space-y-2.5">
                                {pkg.services.map((s) => (
                                    <div
                                        key={s.name}
                                        className="flex items-center justify-between"
                                    >
                                        <span className="text-[11px] text-gray-400 font-medium">
                                            {s.name}
                                        </span>
                                        <span className="text-[11px] font-bold text-white whitespace-nowrap ml-2">
                                            {s.price}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Features List */}
                            <ul className="space-y-2.5 mb-8 flex-1">
                                {pkg.features.map((f) => (
                                    <li
                                        key={f}
                                        className="flex items-start gap-2.5 text-sm text-gray-300"
                                    >
                                        <span className="mt-0.5 flex-shrink-0 p-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                                            <Check size={10} strokeWidth={3} />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href={getWhatsAppUrl(pkg)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 ${pkg.btnClass}`}
                            >
                                <MessageCircle size={15} />
                                Get Quote on WhatsApp
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-xs text-gray-600 mt-10"
                >
                    All prices are estimates. Final cost depends on scope & complexity.{" "}
                    <a
                        href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent("Hi Hassan! I'd like a custom quote for my project.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brandIndigo hover:text-brandPink transition-colors font-semibold"
                    >
                        Contact for a custom quote →
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
