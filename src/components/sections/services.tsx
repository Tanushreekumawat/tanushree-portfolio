"use client";

import { motion } from "framer-motion";
import {
  Code2, Server, Layers, Brain, Database, Cloud,
  Zap, Boxes, CreditCard, MessageSquare,
} from "lucide-react";
import { services } from "@/constants/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const serviceIcons: Record<string, any> = {
  code: Code2,
  server: Server,
  layers: Layers,
  brain: Brain,
  database: Database,
  cloud: Cloud,
  zap: Zap,
  boxes: Boxes,
  "credit-card": CreditCard,
  "message-square": MessageSquare,
};

export function Services() {
  if (!services || services.length === 0) return null;

  return (
    <section id="services" className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-bg-secondary/30 to-background" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="What I Do"
          title="Services I Offer"
          subtitle="End-to-end development services from architecture design to deployment and scaling."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon] || Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GlassCard className="p-6 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center mb-4 group-hover:bg-accent-purple/20 group-hover:border-accent-purple/40 transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-accent-purple-light group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-accent-purple-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-foreground-muted"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-purple" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
