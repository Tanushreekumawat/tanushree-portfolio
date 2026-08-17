"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { personalInfo, socialLinks } from "@/constants/data";

const footerSocials = [
  { icon: FaGithub, href: socialLinks.find((s) => s.name === "GitHub")?.url || "#", label: "GitHub" },
  { icon: FaLinkedinIn, href: socialLinks.find((s) => s.name === "LinkedIn")?.url || "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: socialLinks.find((s) => s.name === "Twitter")?.url || "#", label: "Twitter" },
  { icon: Mail, href: socialLinks.find((s) => s.name === "Email")?.url || "#", label: "Email" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-glass-border">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true }}
            >
              <span className="gradient-text">{personalInfo.firstName}</span>
              <span className="text-foreground-muted">.</span>
            </motion.h3>
            <p className="text-foreground-secondary text-sm leading-relaxed mb-6 max-w-xs">
              {personalInfo.title} specializing in scalable web applications and
              AI-powered solutions.
            </p>
            <div className="flex gap-3">
              {footerSocials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-glass-bg border border-glass-border text-foreground-muted hover:text-accent-purple-light hover:border-accent-purple/30 hover:bg-accent-purple/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground-muted mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-secondary hover:text-accent-purple-light transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground-muted mb-6">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-foreground-secondary">
              <p>{personalInfo.location}</p>
              <a
                href={socialLinks.find((s) => s.name === "Email")?.url || "#"}
                className="block hover:text-accent-purple-light transition-colors"
              >
                {socialLinks.find((s) => s.name === "Email")?.url.replace("mailto:", "")}
              </a>
              <div className="flex items-center gap-2 mt-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-emerald-400 text-xs">
                  Available for new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-glass-border gap-4">
          <p className="text-xs text-foreground-muted flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-xs text-foreground-muted hover:text-foreground rounded-xl bg-glass-bg border border-glass-border hover:border-accent-purple/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
