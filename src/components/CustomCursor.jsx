"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isMobile, setIsMobile] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if device supports touch
        const checkViewport = () => {
            const mobileStatus =
                window.matchMedia("(max-width: 768px)").matches ||
                window.matchMedia("(pointer: coarse)").matches;
            setIsMobile(mobileStatus);
        };

        checkViewport();
        window.addEventListener("resize", checkViewport);

        if (!isMobile) {
            const moveCursor = (e) => {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
            };

            const handleMouseDown = () => setClicked(true);
            const handleMouseUp = () => setClicked(false);

            const handleLinkHoverStart = (e) => {
                if (
                    e.target.tagName === "A" ||
                    e.target.tagName === "BUTTON" ||
                    e.target.closest("a") ||
                    e.target.closest("button") ||
                    e.target.classList.contains("clickable")
                ) {
                    setLinkHovered(true);
                }
            };

            const handleLinkHoverEnd = () => {
                setLinkHovered(false);
            };

            window.addEventListener("mousemove", moveCursor);
            window.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("mouseover", handleLinkHoverStart);
            window.addEventListener("mouseout", handleLinkHoverEnd);

            return () => {
                window.removeEventListener("mousemove", moveCursor);
                window.removeEventListener("mousedown", handleMouseDown);
                window.removeEventListener("mouseup", handleMouseUp);
                window.removeEventListener("mouseover", handleLinkHoverStart);
                window.removeEventListener("mouseout", handleLinkHoverEnd);
                window.removeEventListener("resize", checkViewport);
            };
        }

        return () => {
            window.removeEventListener("resize", checkViewport);
        };
    }, [cursorX, cursorY, isMobile]);

    if (isMobile) return null;

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
                    borderColor: linkHovered ? "#22D3EE" : "#3B82F6",
                    backgroundColor: linkHovered ? "rgba(34, 211, 238, 0.1)" : "rgba(59, 130, 246, 0)",
                }}
            />
            <motion.div
                className="custom-cursor-dot"
                style={{
                    x: cursorX,
                    y: cursorY,
                    backgroundColor: linkHovered ? "#22D3EE" : "#3B82F6",
                }}
            />
        </>
    );
}
