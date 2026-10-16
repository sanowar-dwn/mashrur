import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight, Music, Film, Layers, Feather, X } from "lucide-react";
import { artistInfo } from "../data";
import { VisualPlaceholder } from "./VisualPlaceholder";

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const icons = [Feather, Film, Layers, Music];

  return (
    <section id="about" className="py-28 px-6 md:px-12 bg-secondaryBg relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-accent text-xs font-mono uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artistic Biography</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-primaryText leading-tight">
            More than a name. <br />
            <span className="italic font-normal text-accent">A voice, a vision, a story.</span>
          </h2>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Candid Image & Philosophy Spotlight */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-2xl overflow-hidden border border-surfaceBorder bg-surfaceBg shadow-2xl aspect-[4/5] group">
              <VisualPlaceholder
                type="portrait"
                src={artistInfo.aboutImage}
                alt="Mashrur Hossain Shovon creative process"
                badgeText="Candid / Behind-the-Scenes"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-surfaceBorder">
                <p className="text-xs font-serif italic text-primaryText">
                  "Every song is a miniature screenplay, and every film is a silent melody waiting for breath."
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-accent mt-1">
                  — Creative Philosophy
                </p>
              </div>
            </div>

            {/* Quick Note about Persona */}
            <div className="p-6 rounded-2xl bg-surfaceBg/60 border border-surfaceBorder text-left space-y-2">
              <h4 className="text-xs uppercase font-mono tracking-widest text-accent">
                The Persona: Gaaner Manush Mashrur
              </h4>
              <p className="text-sm text-mutedText font-light leading-relaxed">
                The name reflects a deep affinity for melody and narrative — portraying the raw human experience through poetic resonance and cinematic vision.
              </p>
            </div>
          </div>

          {/* Right Column: Bio Narrative, Philosophy & Disciplines */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <div className="space-y-6">
              <h3 className="font-display text-xl sm:text-2xl tracking-wide uppercase text-primaryText">
                The Journey of Sound & Screen
              </h3>
              <p className="text-base sm:text-lg text-mutedText/90 font-light leading-relaxed">
                {artistInfo.shortBio}
              </p>
              <p className="text-base text-mutedText/80 font-light leading-relaxed">
                {artistInfo.creativePhilosophy}
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-accent hover:text-accentHover group"
                >
                  <span>Read Detailed Journey & Background</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Core Disciplines Grid */}
            <div className="pt-6 border-t border-surfaceBorder space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-mutedText/70">
                Core Disciplines
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {artistInfo.disciplines.map((item, idx) => {
                  const Icon = icons[idx % icons.length];
                  return (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl bg-surfaceBg border border-surfaceBorder hover:border-accent/30 transition-all duration-300 space-y-2.5 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-background flex items-center justify-center border border-surfaceBorder group-hover:border-accent/40 transition-colors">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <h5 className="font-serif text-base font-semibold text-primaryText">
                        {item.title}
                      </h5>
                      <p className="text-xs text-mutedText leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Journey Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-surfaceBg border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6 text-left"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-background/80 text-mutedText hover:text-primaryText border border-surfaceBorder"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
                  Creative Biography
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primaryText">
                  Mashrur Hossain Shovon
                </h3>
                <p className="text-xs font-mono text-mutedText">
                  Gaaner Manush Mashrur · Narrative & Musical Perspective
                </p>
              </div>

              <div className="space-y-4 text-sm text-mutedText/90 font-light leading-relaxed border-t border-surfaceBorder pt-6">
                <p>
                  As an independent creative in Bangladesh's contemporary landscape, Mashrur Hossain Shovon approaches artistry without arbitrary boundaries between music and film. Rather than treating visual projects and musical pieces as separate crafts, he perceives them as symbiotic dimensions of the same storytelling impulse.
                </p>
                <p>
                  Under the moniker <em>Gaaner Manush Mashrur</em>, his musical compositions prioritize emotional clarity, reflective lyricism, and modern melodic sensibilities. In film and visual direction, his work emphasizes deliberate pacing, intimate human interactions, and cinematic atmosphere.
                </p>
                <div className="p-4 rounded-xl bg-background border border-surfaceBorder space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-accent">
                    Content Customization Note
                  </p>
                  <p className="text-xs text-mutedText">
                    This section is structured to easily integrate verified biographical milestones, educational background, formal awards, and personal anecdotes directly via <code className="text-accent">src/data.ts</code> without modifying code layout.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
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

export default About;
