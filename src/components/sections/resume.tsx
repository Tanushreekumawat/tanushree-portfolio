"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { personalInfo } from "@/constants/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Resume() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-bg-secondary/30 to-background" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Resume"
          title="My Resume"
          subtitle="Download or view my complete professional resume."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 md:p-12 text-center" tiltOnHover={false}>
            <FileText
              size={48}
              className="mx-auto mb-6 text-accent-purple-light"
            />
            <h3 className="text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-foreground-secondary mb-8 max-w-md mx-auto">
              {personalInfo.title} with {personalInfo.yearsOfExperience} years of experience
              in building scalable web applications and AI-powered solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                variant="primary"
                size="lg"
                href={personalInfo.resume}
                target="_blank"
              >
                <Download size={18} />
                Download Resume
              </MagneticButton>
              <MagneticButton
                variant="outline"
                size="lg"
                href={personalInfo.resume}
                target="_blank"
              >
                <Eye size={18} />
                View Resume
              </MagneticButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
