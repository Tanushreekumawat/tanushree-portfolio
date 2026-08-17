"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { GitBranch, Star, GitCommit, BarChart3 } from "lucide-react";
import { codingStats } from "@/constants/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const statCards = [
  { icon: GitBranch, label: "Repositories", key: "repositories" as const },
  { icon: Star, label: "GitHub Stars", key: "stars" as const },
  { icon: GitCommit, label: "Total Commits", key: "commits" as const },
  { icon: BarChart3, label: "Contributions", key: "contributions" as const },
];

export function CodingStats() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-bg-secondary/30 to-background" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="GitHub Activity"
          title="Coding Statistics"
          subtitle="A snapshot of my open-source contributions and development activity."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6 text-center">
                <stat.icon
                  size={24}
                  className="mx-auto mb-3 text-accent-purple-light"
                />
                <div className="text-3xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)] mb-1">
                  <CountUp
                    end={codingStats[stat.key]}
                    duration={2.5}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-xs text-foreground-muted">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Language Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-8" tiltOnHover={false}>
            <h3 className="text-lg font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
              Language Distribution
            </h3>

            {/* Full Bar */}
            <div className="h-4 rounded-full overflow-hidden flex mb-6 bg-background/50">
              {codingStats.languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className="h-full first:rounded-l-full last:rounded-r-full"
                  style={{ backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4">
              {codingStats.languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-sm text-foreground-secondary">
                    {lang.name}
                  </span>
                  <span className="text-xs text-foreground-muted">
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
