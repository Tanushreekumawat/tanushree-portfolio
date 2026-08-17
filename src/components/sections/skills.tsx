"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiRedux, SiTypescript, SiJavascript,
  SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiMui,
  SiNodedotjs, SiExpress, SiNestjs, SiJsonwebtokens, SiSocketdotio, SiGraphql,
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiRedis, SiPrisma,
  SiDocker, SiNginx, SiGithubactions, SiVercel, SiLinux,
  SiGoogle, SiOpenapiinitiative,
  SiGit, SiGithub, SiPostman, SiFigma, SiJira,
  SiCursor, SiPm2, SiAnthropic, SiLangchain, SiBookstack,
  SiStripe, SiWebpack
} from "react-icons/si";
import {
  Monitor, Server, Database, Cloud, Brain, Wrench, Code2, Globe, Key, Wifi, Cpu,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { skillCategories } from "@/constants/data";
import { staggerContainer } from "@/lib/animations";

// Map icon names to actual components, with safe fallbacks
const iconMap: Record<string, any> = {
  SiReact, SiNextdotjs, SiRedux, SiTypescript, SiJavascript,
  SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiMui,
  SiNodedotjs, SiExpress, SiNestjs, SiJsonwebtokens, SiSocketdotio, SiGraphql,
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiRedis, SiPrisma,
  SiDocker, SiNginx, SiGithubactions, SiVercel, SiLinux,
  SiGoogle, SiOpenapiinitiative,
  SiGit, SiGithub, SiPostman, SiFigma, SiJira,
  SiCursor, SiPm2, SiAnthropic, SiLangchain, SiBookstack,
  SiStripe, SiWebpack,
  // Fallbacks for icons that don't exist in react-icons
  SiVisualstudiocode: Code2,
  SiWebsocket: Wifi,
  SiAmazonec2: Cloud,
  SiAmazons3: Cloud,
  SiPinecone: Database,
  SiAmazonwebservices: Cloud,
  SiMicrosoftazure: Cloud,
  SiOpenai: Brain,
  SiCss3: SiCss,
};

const categoryIcons: Record<string, any> = {
  monitor: Monitor,
  server: Server,
  database: Database,
  cloud: Cloud,
  brain: Brain,
  wrench: Wrench,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="absolute inset-0 dot-background opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="Technologies I use to build scalable, production-grade applications."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category, i) => {
            const CategoryIcon = categoryIcons[category.icon] || Monitor;
            return (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(i)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === i
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground-secondary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent-purple/10 border border-accent-purple/30 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <CategoryIcon size={16} />
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {skillCategories[activeCategory].skills.map((skill, i) => {
              const SkillIcon = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <GlassCard className="p-5 text-center group cursor-default">
                    <motion.div
                      className="mb-3 flex justify-center"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <SkillIcon
                        size={32}
                        style={{ color: skill.color }}
                        className="drop-shadow-lg"
                      />
                    </motion.div>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent-purple-light transition-colors">
                      {skill.name}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
