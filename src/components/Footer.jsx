"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/BrandIcons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="border-t border-gray-250 dark:border-gray-800 bg-white dark:bg-[#070A0F] py-12 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center space-y-8">

                {/* Scroll back to top button */}
                <button
                    onClick={handleScrollToTop}
                    className="p-3.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-cardDark text-gray-500 hover:text-brandPink hover:border-brandPink/50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    aria-label="Scroll to Top"
                >
                    <ArrowUp size={16} />
                </button>

                {/* Quick Nav Links */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-500 hover:text-brandIndigo dark:hover:text-brandPink transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Social media connections */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/MHassan743"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full text-gray-400 hover:text-brandIndigo dark:hover:text-[#FFFFFF] transition-colors duration-200"
                        aria-label="GitHub Profile"
                    >
                        <GitHub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hassan-jutt-6aa072313"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full text-gray-400 hover:text-brandIndigo dark:hover:text-[#0A66C2] transition-colors duration-200"
                        aria-label="LinkedIn Profile"
                    >
                        <LinkedIn size={20} />
                    </a>
                    <a
                        href="mailto:hj0889297@gmail.com"
                        className="p-2.5 rounded-full text-gray-400 hover:text-blue-500 transition-colors duration-200"
                        aria-label="Email Address"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                {/* Info footer line */}
                <div className="text-center space-y-2 border-t border-gray-150 dark:border-gray-800/80 pt-8 w-full">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        &copy; {currentYear} <span className="font-bold text-gray-700 dark:text-gray-300">M Hassan Asghar</span>. All Rights Reserved.
                    </p>
                    <p className="text-[10px] text-gray-450 tracking-wider font-light">
                        Designed & Built with <span className="text-brandIndigo dark:text-brandPink font-bold">Next.js & Tailwind CSS</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
