"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 25,
        restDelta: 0.001
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brandIndigo to-brandPink origin-left z-[99999]"
        />
    );
}
