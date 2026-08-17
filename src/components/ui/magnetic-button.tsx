"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  href,
  target,
  disabled,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 hover:shadow-xl",
    secondary:
      "bg-glass-bg border border-glass-border text-foreground hover:bg-glass-bg-hover hover:border-accent-purple/30",
    outline:
      "border border-accent-purple/50 text-accent-purple-light hover:bg-accent-purple/10 hover:border-accent-purple",
    ghost:
      "text-foreground-secondary hover:text-foreground hover:bg-glass-bg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const Component = href ? "a" : "button";
  const componentProps = href
    ? { href, target, rel: target === "_blank" ? "noopener noreferrer" : undefined }
    : { onClick, disabled };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        ref={buttonRef as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...componentProps}
      >
        {/* Shimmer effect */}
        {variant === "primary" && (
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Component>
    </motion.div>
  );
}
