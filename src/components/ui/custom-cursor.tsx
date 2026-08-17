"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      const isClickable =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;

      setIsHovering(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", updateHoverState);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", updateHoverState);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main Cursor Dot */}
          <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-accent-purple rounded-full pointer-events-none z-[9999] mix-blend-screen"
            animate={{
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
              scale: isHovering ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
          />

          {/* Follower Ring */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 border-accent-blue/50 rounded-full pointer-events-none z-[9998]"
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              scale: isHovering ? 1.5 : 1,
              backgroundColor: isHovering ? "rgba(139, 92, 246, 0.1)" : "transparent",
              borderColor: isHovering ? "rgba(139, 92, 246, 0.8)" : "rgba(56, 189, 248, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
