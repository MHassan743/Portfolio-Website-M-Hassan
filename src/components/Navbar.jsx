"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Certificates", href: "#certificates" },
        { name: "Services", href: "#services" },
        { name: "Pricing", href: "#pricing" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "glass-panel shadow-md py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            className="text-2xl font-display font-bold bg-gradient-to-r from-brandIndigo to-brandPink bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300"
                        >
                            M Hassan Asghar
                        </a>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex space-x-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-brandPink transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Resume Button */}
                        <a
                            href="/Hassan-Asghar-Resume.pdf"
                            download="Hassan-Asghar-Resume.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-brandIndigo to-brandPink shadow-glowIndigo hover:shadow-glowPink hover:scale-105 transition-all duration-300"
                        >
                            <Download size={14} />
                            Resume
                        </a>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white/5 hover:bg-brandIndigo/25 border border-transparent hover:border-brandIndigo/40 backdrop-blur-sm transition-all duration-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? (
                                <Sun size={20} className="text-yellow-400" />
                            ) : (
                                <Moon size={20} className="text-slate-700" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Buttons */}
                    <div className="flex md:hidden items-center gap-3">
                        {/* Theme Toggle Mobile */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white/5 hover:bg-brandIndigo/25 border border-transparent hover:border-brandIndigo/40 backdrop-blur-sm transition-all duration-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? (
                                <Sun size={20} className="text-yellow-400" />
                            ) : (
                                <Moon size={20} className="text-slate-700" />
                            )}
                        </button>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md hover:bg-gray-250 dark:hover:bg-gray-850 focus:outline-none transition-colors duration-200"
                            aria-label="Toggle Navigation Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-2 py-4 shadow-xl glass-panel" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
            >
                <div className="px-4 pt-2 pb-3 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-100 dark:hover:bg-cardDark/80 hover:text-brandPink transition-all duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-3 px-3">
                        <a
                            href="/Hassan-Asghar-Resume.pdf"
                            download="Hassan-Asghar-Resume.pdf"
                            className="inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brandIndigo to-brandPink shadow-glowIndigo w-full hover:shadow-glowPink hover:scale-[1.02] transition-all duration-300"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
