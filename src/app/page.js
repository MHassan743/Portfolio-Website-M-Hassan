"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=923407542382&text=" +
  encodeURIComponent("Hi Hassan! I'd like to discuss a project with you.");

export default function Home() {
  return (
    <>
      {/* Scroll indicator & Custom cursor */}
      <ScrollProgress />
      <CustomCursor />

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.65)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
      >
        <MessageCircle size={20} className="flex-shrink-0" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Structured Sections */}
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Pricing />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
