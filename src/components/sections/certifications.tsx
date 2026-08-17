"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Cloud, Brain } from "lucide-react";
import {
  SiDocker, SiNodedotjs,
  SiMongodb, SiReact,
} from "react-icons/si";
import { certifications } from "@/constants/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const certIcons: Record<string, any> = {
  SiAmazonwebservices: Cloud,
  SiDocker,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiOpenai: Brain,
};

export function Certifications() {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 dot-background opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          subtitle="Professional certifications validating my expertise in cloud, DevOps, and modern technologies."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const Icon = certIcons[cert.icon] || Award;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GlassCard className="p-6 h-full group">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        backgroundColor: `${cert.color}10`,
                        borderColor: `${cert.color}30`,
                      }}
                    >
                      <Icon
                        size={24}
                        style={{ color: cert.color }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-medium rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald">
                      <Award size={10} />
                      Verified
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-accent-purple-light transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-foreground-muted mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-foreground-muted">{cert.date}</p>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs text-accent-purple-light hover:text-accent-purple transition-colors"
                    >
                      View Credential
                      <ExternalLink size={10} />
                    </a>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
