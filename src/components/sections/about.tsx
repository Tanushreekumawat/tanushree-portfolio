"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  MapPin,
  GraduationCap,
  Building2,
  Calendar,
  Download,
  Users,
  FolderOpen,
  Activity,
  Code2,
} from "lucide-react";
import { personalInfo, stats } from "@/constants/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const statIcons: Record<string, any> = {
  calendar: Calendar,
  folder: FolderOpen,
  users: Users,
  activity: Activity,
  code: Code2,
};

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-bg-secondary/50 to-background" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="About Me"
          title="Passionate Developer"
          subtitle="Building scalable web applications and AI-powered solutions that make a real impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Profile Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative p-6">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan rounded-3xl opacity-40 blur-lg animate-glow-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-glass-border shadow-2xl bg-background">
                {/* Placeholder gradient if no image */}
                <div className="w-full h-full bg-gradient-to-br from-accent-purple/20 via-accent-blue/10 to-accent-cyan/20 flex items-center justify-center">
                  <span className="text-8xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]">
                    {personalInfo.firstName[0]}
                    {personalInfo.lastName[0]}
                  </span>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                className="absolute top-2 right-0 px-4 py-2 rounded-full bg-background/80 border border-accent-purple/30 text-xs font-semibold text-accent-purple-light backdrop-blur-md shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀 {personalInfo.yearsOfExperience} Years Exp
              </motion.div>
              <motion.div
                className="absolute bottom-2 left-0 px-4 py-2 rounded-full bg-background/80 border border-accent-blue/30 text-xs font-semibold text-accent-cyan backdrop-blur-md shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ✨ 7+ Projects
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              <span className="gradient-text">MERN Stack Developer</span>
              <span className="text-foreground-muted"> & AI Enthusiast</span>
            </h3>

            <p className="body-lg mb-6 leading-relaxed">{personalInfo.about}</p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  icon: Building2,
                  label: "Company",
                  value: personalInfo.currentCompany,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: personalInfo.location,
                },
                {
                  icon: GraduationCap,
                  label: "Education",
                  value: personalInfo.education,
                },
                {
                  icon: Calendar,
                  label: "Experience",
                  value: `${personalInfo.yearsOfExperience} Years`,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-glass-bg border border-glass-border"
                >
                  <item.icon size={18} className="text-accent-purple-light flex-shrink-0" />
                  <div>
                    <p className="text-xs text-foreground-muted">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {stats.map((stat, i) => {
            const Icon = statIcons[stat.icon] || Activity;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-64"
              >
                <GlassCard className="p-6 text-center">
                  <Icon
                    size={24}
                    className="mx-auto mb-3 text-accent-purple-light"
                  />
                  <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-1">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </div>
                  <p className="text-xs text-foreground-muted">{stat.label}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
