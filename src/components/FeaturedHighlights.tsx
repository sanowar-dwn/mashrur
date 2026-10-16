import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, X } from "lucide-react";
import { highlightItems, HighlightItem } from "../data";
import { VisualPlaceholder } from "./VisualPlaceholder";

export const FeaturedHighlights: React.FC = () => {
  const [activeHighlight, setActiveHighlight] = useState<HighlightItem | null>(null);

  return (
    <section id="highlights" className="py-28 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-surfaceBorder pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-accent text-xs font-mono uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-primaryText">
              Featured Highlights
            </h2>
          </div>
          <p className="text-sm text-mutedText/80 max-w-md font-light">
            A handpicked curation representing the defining artistic pillars of sound, cinematic rhythm, and lyrical authorship.
          </p>
        </div>

        {/* Editorial Asymmetrical Highlights List */}
        <div className="space-y-12">
          {highlightItems.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-8 sm:p-12 rounded-2xl bg-surfaceBg border border-surfaceBorder hover:border-accent/30 transition-all duration-500 group ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image / Placeholder Frame */}
                <div
                  className={`lg:col-span-6 rounded-xl overflow-hidden aspect-[16/10] bg-background border border-surfaceBorder shadow-xl ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <VisualPlaceholder
                    type="highlight"
                    src={item.image}
                    alt={item.title}
                    badgeText={item.tag}
                  />
                </div>

                {/* Editorial Content */}
                <div
                  className={`lg:col-span-6 space-y-6 text-left ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-accent/40 font-mono">
                      {item.number}
                    </span>
                    <span className="text-xs uppercase font-mono tracking-[0.2em] px-3 py-1 rounded bg-accent/10 border border-accent/25 text-accent">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-primaryText group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-mutedText/90 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveHighlight(item)}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-accent hover:text-accentHover group/btn"
                    >
                      <span>Explore Highlight</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Highlight Details Modal */}
      <AnimatePresence>
        {activeHighlight && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-surfaceBg border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 text-left"
            >
              <button
                onClick={() => setActiveHighlight(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-background/80 text-mutedText hover:text-primaryText border border-surfaceBorder"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 text-xs font-mono text-accent">
                <span className="text-lg font-bold">{activeHighlight.number}</span>
                <span>•</span>
                <span className="uppercase tracking-wider">{activeHighlight.category}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primaryText">
                {activeHighlight.title}
              </h3>

              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-surfaceBorder bg-background">
                <VisualPlaceholder
                  type="highlight"
                  src={activeHighlight.image}
                  alt={activeHighlight.title}
                  badgeText={activeHighlight.tag}
                />
              </div>

              <p className="text-sm text-mutedText/90 font-light leading-relaxed">
                {activeHighlight.description}
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveHighlight(null)}
                  className="px-6 py-2.5 bg-accent text-background rounded-full font-medium text-xs uppercase tracking-wider hover:bg-accentHover transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedHighlights;
