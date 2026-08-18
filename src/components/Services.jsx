"use client";

import { motion } from "framer-motion";
import {
    Globe,
    ShoppingCart,
    Cpu,
    Palette,
    SearchCheck,
    Wrench,
    Plug,
    Smartphone,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Business Website",
        description:
            "Professional, fast-loading business websites tailored to your brand. Fully responsive with modern UI/UX and SEO-ready structure.",
        badge: "Most Popular",
        badgeColor: "from-brandIndigo to-brandPink",
        glowColor: "bg-brandIndigo/20",
        iconColor: "text-brandIndigo",
        iconBg: "bg-brandIndigo/10",
        borderHover: "hover:border-brandIndigo/40",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Store",
        description:
            "Full-featured online stores with product management, cart, checkout, payment integration, and order tracking.",
        badge: null,
        glowColor: "bg-brandPink/20",
        iconColor: "text-brandPink",
        iconBg: "bg-brandPink/10",
        borderHover: "hover:border-brandPink/40",
    },
    {
        icon: Cpu,
        title: "Web App (Custom)",
        description:
            "Scalable, production-ready web applications with complex logic, dashboards, real-time features, and robust APIs.",
        badge: "Premium",
        badgeColor: "from-violet-500 to-purple-700",
        glowColor: "bg-violet-500/20",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10",
        borderHover: "hover:border-violet-500/40",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description:
            "Pixel-perfect, modern interface design using Figma or direct implementation — glassmorphism, gradients, animations and beyond.",
        badge: null,
        glowColor: "bg-rose-500/20",
        iconColor: "text-rose-400",
        iconBg: "bg-rose-500/10",
        borderHover: "hover:border-rose-500/40",
    },
    {
        icon: SearchCheck,
        title: "SEO Optimization",
        description:
            "Technical SEO audit and implementation: meta tags, structured data, page speed optimization, and search visibility improvements.",
        badge: null,
        glowColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10",
        borderHover: "hover:border-emerald-500/40",
    },
    {
        icon: Wrench,
        title: "Website Maintenance",
        description:
            "Monthly maintenance packages — bug fixes, content updates, performance monitoring, and security patches to keep your site running smooth.",
        badge: null,
        glowColor: "bg-amber-500/20",
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10",
        borderHover: "hover:border-amber-500/40",
    },
    {
        icon: Plug,
        title: "API Integration",
        description:
            "Seamlessly integrate third-party APIs — payment gateways, social auth, maps, SMS/email services, and custom REST/GraphQL APIs.",
        badge: null,
        glowColor: "bg-cyan-500/20",
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/10",
        borderHover: "hover:border-cyan-500/40",
    },
    {
        icon: Smartphone,
        title: "Native Apps",
        description:
            "Cross-platform and native mobile application development for Android & iOS with high performance, smooth animations, and native hardware feature integration.",
        badge: null,
        glowColor: "bg-indigo-500/20",
        iconColor: "text-indigo-400",
        iconBg: "bg-indigo-500/10",
        borderHover: "hover:border-indigo-500/40",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
    }),
};

export default function Services() {
    return (
        <section
            id="services"
            className="py-20 md:py-28 relative overflow-hidden bg-brandDark transition-colors duration-300"
        >
            {/* Background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brandIndigo/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brandPink/10 blur-[130px] pointer-events-none" />

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
                        What I Offer
                    </h2>
                    <p className="text-3xl sm:text-4xl font-display font-bold text-white">
                        Services
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-brandIndigo to-brandPink mx-auto rounded-full" />
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light pt-2">
                        From concept to deployment — I deliver end-to-end web solutions
                        that look great and perform even better.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className={`relative group p-6 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm ${service.borderHover} hover:bg-white/[0.06] transition-all duration-350 overflow-hidden cursor-default`}
                            >
                                {/* Card ambient glow */}
                                <div
                                    className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${service.glowColor} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                                />

                                {/* Badge */}
                                {service.badge && (
                                    <span
                                        className={`absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r ${service.badgeColor} text-white shadow-sm`}
                                    >
                                        {service.badge}
                                    </span>
                                )}

                                {/* Icon */}
                                <div
                                    className={`inline-flex p-3.5 rounded-xl ${service.iconBg} ${service.iconColor} mb-5 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Icon size={22} />
                                </div>

                                {/* Text */}
                                <h3 className="text-base font-bold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
