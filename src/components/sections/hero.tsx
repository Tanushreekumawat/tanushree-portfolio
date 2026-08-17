"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import {
  Mail,
  Download,
  ExternalLink,
  ChevronDown,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { personalInfo, socialLinks } from "@/constants/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useMousePosition } from "@/hooks/use-mouse-position";

const HeroScene = dynamic(() => import("@/components/3d/hero-scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-blue/5" />
  ),
});

// Typing effect hook
function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

const socialIcons = [
  { icon: FaGithub, href: "", label: "GitHub" },
  { icon: FaLinkedinIn, href: "", label: "LinkedIn" },
  { icon: FaXTwitter, href: "", label: "Twitter" },
  { icon: Mail, href: "", label: "Email" },
  { icon: Code2, href: "", label: "LeetCode" },
];

// Map social links to icons
socialIcons.forEach((si) => {
  const found = socialLinks.find((s) => s.name === si.label);
  if (found) si.href = found.url;
});

export function Hero() {
  const typedText = useTypingEffect(personalInfo.titles);
  const { normalizedX, normalizedY } = useMousePosition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const parallaxStyle = useCallback(
    (intensity: number) => ({
      transform: mounted
        ? `translate(${normalizedX * intensity}px, ${normalizedY * intensity}px)`
        : "none",
      transition: "transform 0.2s ease-out",
    }),
    [normalizedX, normalizedY, mounted]
  );

  // Floating icon positions (absolute positioned)
  const floatingIcons = useMemo(() => [
    { icon: "⚛️", style: "top-[15%] left-[8%]", delay: 0 },
    { icon: "🟢", style: "top-[25%] right-[12%]", delay: 0.5 },
    { icon: "🔷", style: "bottom-[30%] left-[5%]", delay: 1 },
    { icon: "⚡", style: "top-[10%] right-[25%]", delay: 1.5 },
    { icon: "🌐", style: "bottom-[20%] right-[8%]", delay: 2 },
  ], []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-[1] grid-background opacity-40" />

      {/* Floating Icons with Parallax */}
      <div className="absolute inset-0 z-[2] hidden lg:block">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.style} text-3xl`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 + item.delay }}
            style={parallaxStyle(15 + i * 5)}
          >
            <motion.span
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="block"
            >
              {item.icon}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple-light backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={parallaxStyle(5)}
        >
          <h1 className="heading-xl mb-2">
            <span className="text-foreground-secondary text-xl sm:text-2xl md:text-3xl font-normal block mb-3">
              Hi, I&apos;m
            </span>
            <span className="gradient-text block pb-2">{personalInfo.name}</span>
          </h1>
        </motion.div>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-6 h-10 flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent-purple-light font-[family-name:var(--font-space-grotesk)]">
            {typedText}
            <span className="inline-block w-[3px] h-[1em] bg-accent-purple ml-1 align-middle" style={{ animation: "typing-cursor 1s step-end infinite" }} />
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="body-lg max-w-2xl mx-auto mb-10"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <MagneticButton variant="primary" size="lg" href="/resume.pdf" target="_blank">
            <Download size={18} />
            Download Resume
          </MagneticButton>
          <MagneticButton variant="outline" size="lg" href="#projects">
            <ExternalLink size={18} />
            View Projects
          </MagneticButton>
          <MagneticButton variant="secondary" size="lg" href="#contact">
            Hire Me
          </MagneticButton>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex items-center justify-center gap-3"
        >
          {socialIcons.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-glass-bg border border-glass-border text-foreground-muted hover:text-accent-purple-light hover:border-accent-purple/30 hover:bg-accent-purple/5 transition-all duration-300"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-foreground-muted hover:text-accent-purple-light transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
