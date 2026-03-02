"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if device has a pointer/mouse
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        const handleLinkHoverIn = () => setIsHovering(true);
        const handleLinkHoverOut = () => setIsHovering(false);

        const setupHoverListeners = () => {
            document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
                el.addEventListener("mouseenter", handleLinkHoverIn);
                el.addEventListener("mouseleave", handleLinkHoverOut);
            });
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        // Use MutationObserver for dynamic content
        const observer = new MutationObserver(setupHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        setupHoverListeners();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            observer.disconnect();

            document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
                el.removeEventListener("mouseenter", handleLinkHoverIn);
                el.removeEventListener("mouseleave", handleLinkHoverOut);
            });
        };
    }, [cursorX, cursorY, isVisible]);

    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: isVisible ? 1 : 0
            }}
        >
            <motion.div
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                className="h-8 w-8 rounded-full border-[1.5px] border-white bg-transparent transition-opacity"
                transition={{ duration: 0.2 }}
            />
            <motion.div
                animate={{
                    scale: isHovering ? 1 : 0,
                    opacity: isHovering ? 1 : 0,
                }}
                className="absolute h-[5px] w-[5px] rounded-full bg-white"
                transition={{ duration: 0.2 }}
            />
        </motion.div>
    );
}
