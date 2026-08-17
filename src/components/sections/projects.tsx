"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/constants/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { staggerContainer } from "@/lib/animations";

const categories = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Backend", value: "backend" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="absolute inset-0 dot-background opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my expertise in full-stack development, AI integration, and scalable architecture."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => {
                setActiveFilter(cat.value);
                setShowAll(false);
              }}
              className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
                activeFilter === cat.value
                  ? "text-foreground"
                  : "text-foreground-muted hover:text-foreground-secondary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeFilter === cat.value && (
                <motion.div
                  layoutId="projectFilter"
                  className="absolute inset-0 bg-accent-purple/10 border border-accent-purple/30 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Featured Project */}
        {activeFilter === "all" && (
          <FeaturedProject />
        )}

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedProjects
              .filter((p) => !p.isFeatured || activeFilter !== "all")
              .map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More */}
        {filteredProjects.length > 6 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-xl text-sm font-medium border border-glass-border bg-glass-bg text-foreground-secondary hover:text-foreground hover:border-accent-purple/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects ({filteredProjects.length})
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ─── Featured Project Card ───────────────────────────────────
function FeaturedProject() {
  const featured = projects.find((p) => p.isFeatured);
  if (!featured) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <GlassCard className="overflow-hidden" tiltOnHover={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 lg:h-auto bg-gradient-to-br from-accent-purple/20 via-accent-blue/10 to-accent-cyan/20 flex items-center justify-center">
            <div className="text-center p-8">
              <Star
                size={48}
                className="mx-auto mb-4 text-accent-purple-light"
                fill="currentColor"
              />
              <h3 className="text-2xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]">
                {featured.title}
              </h3>
              <p className="text-sm text-foreground-muted mt-2">
                {featured.subtitle}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple-light mb-4">
              ⭐ Featured Project
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
              {featured.title}
            </h3>
            <p className="text-sm text-foreground-secondary mb-4 leading-relaxed">
              {featured.description}
            </p>

            {/* Features */}
            {featured.features && (
              <div className="mb-4">
                <ul className="space-y-1.5">
                  {featured.features.slice(0, 4).map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {featured.results && (
              <div className="mb-5 flex flex-wrap gap-2">
                {featured.results.map((r, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald"
                  >
                    {r}
                  </span>
                ))}
              </div>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-accent-purple/5 border border-accent-purple/20 text-accent-purple-light"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {featured.liveUrl && (
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:shadow-lg hover:shadow-accent-purple/25 transition-shadow"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {featured.githubUrl && (
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-glass-border bg-glass-bg text-foreground-secondary hover:text-foreground hover:border-accent-purple/30 transition-all"
                >
                  <FaGithub size={14} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Project Card ────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <GlassCard className="h-full flex flex-col group">
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-accent-purple/10 via-accent-blue/5 to-accent-cyan/10 overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center justify-center opacity-30 text-accent-purple-light">
          <Star size={40} className="mb-2" />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-accent-purple text-white hover:bg-accent-purple-light transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={18} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-glass-bg border border-glass-border text-foreground hover:bg-glass-bg-hover transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={18} />
            </motion.a>
          )}
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium rounded-full bg-background/60 backdrop-blur-sm border border-glass-border text-foreground-muted">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-foreground mb-1 font-[family-name:var(--font-space-grotesk)] group-hover:text-accent-purple-light transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-accent-purple-light mb-2">
          {project.subtitle}
        </p>
        <p className="text-sm text-foreground-secondary mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] rounded-full bg-accent-purple/5 border border-accent-purple/15 text-foreground-muted"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-glass-bg text-foreground-muted">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
