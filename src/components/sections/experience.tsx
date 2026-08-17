"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  MapPin,
  Calendar,
  ChevronDown,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { experiences } from "@/constants/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-bg-secondary/30 to-background" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Career Path"
          title="Work Experience"
          subtitle="My professional journey building scalable systems and leading engineering teams."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple/50 via-accent-blue/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-accent-purple bg-background z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent-purple/30"
                    animate={
                      i === 0
                        ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                <GlassCard
                  className="overflow-hidden cursor-pointer"
                  tiltOnHover={false}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 size={14} className="text-accent-purple-light" />
                          <span className="text-sm font-medium text-accent-purple-light">
                            {exp.company}
                          </span>
                          {exp.companyUrl && (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground-muted hover:text-accent-purple-light transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-foreground-muted mt-1"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-foreground-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light capitalize">
                        <Briefcase size={10} />
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-sm text-foreground-secondary">
                      {exp.description}
                    </p>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-glass-border space-y-4">
                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-2">
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-2">
                                {exp.responsibilities.map((r, j) => (
                                  <motion.li
                                    key={j}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: j * 0.05 }}
                                    className="flex items-start gap-2 text-sm text-foreground-secondary"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-1.5 flex-shrink-0" />
                                    {r}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Achievements */}
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold text-foreground mb-2">
                                  Achievements
                                </h4>
                                <ul className="space-y-2">
                                  {exp.achievements.map((a, j) => (
                                    <motion.li
                                      key={j}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.2 + j * 0.05 }}
                                      className="flex items-start gap-2 text-sm text-foreground-secondary"
                                    >
                                      <span className="text-accent-emerald mt-0.5">✓</span>
                                      {a}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Technologies */}
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-2">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs rounded-full bg-accent-purple/5 border border-accent-purple/20 text-accent-purple-light"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
