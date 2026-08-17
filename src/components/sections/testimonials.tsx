"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/constants/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    if (testimonials.length === 0) return;
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    if (testimonials.length === 0) return;
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-bg-secondary/30 to-background" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Testimonials"
          title="What People Say"
          subtitle="Feedback from colleagues, managers, and clients I've worked with."
        />

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-2xl bg-glass-bg backdrop-blur-xl border border-glass-border p-8 md:p-12">
                {/* Quote Icon */}
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-accent-purple/10"
                  fill="currentColor"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400"
                        fill="currentColor"
                      />
                    )
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[current].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-foreground-muted">
                      {testimonials[current].role},{" "}
                      {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="p-2.5 rounded-xl bg-glass-bg border border-glass-border text-foreground-muted hover:text-foreground hover:border-accent-purple/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-accent-purple"
                      : "bg-foreground-muted/30 hover:bg-foreground-muted/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-2.5 rounded-xl bg-glass-bg border border-glass-border text-foreground-muted hover:text-foreground hover:border-accent-purple/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
