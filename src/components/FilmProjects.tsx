import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, Clapperboard, X, Film, Info } from "lucide-react";
import { filmProjects, FilmProject } from "../data";
import { VisualPlaceholder } from "./VisualPlaceholder";

export const FilmProjects: React.FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<FilmProject | null>(null);

  const featuredFilm = filmProjects.find((p) => p.featured) || filmProjects[0];
  const supportingFilms = filmProjects.filter((p) => p.id !== featuredFilm?.id);

  return (
    <section id="film" className="py-28 px-6 md:px-12 bg-secondaryBg relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-surfaceBorder pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-accent text-xs font-mono uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cinematic Works</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-primaryText">
              Film & Projects
            </h2>
          </div>
          <p className="text-sm text-mutedText/80 max-w-md font-light">
            Visual storytelling, directing, and creative production. A curated archive exploring human emotion through cinematic framing and naturalistic cadence.
          </p>
        </div>

        {/* Featured Film Archive Spotlight */}
        {featuredFilm && (
          <div className="relative rounded-2xl bg-surfaceBg border border-surfaceBorder overflow-hidden shadow-2xl text-left group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Cinematic 16:9 Thumbnail Container */}
              <div className="lg:col-span-7 relative aspect-video bg-background overflow-hidden">
                <VisualPlaceholder
                  type="film"
                  src={featuredFilm.thumbnail}
                  alt={featuredFilm.title}
                  badgeText={`${featuredFilm.category} · Spotlight`}
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedFilm(featuredFilm)}
                    className="w-16 h-16 rounded-full bg-accent/90 hover:bg-accent text-background flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110"
                    aria-label={`Watch ${featuredFilm.title}`}
                  >
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </button>
                </div>

                <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-surfaceBorder text-[10px] font-mono text-accent">
                  <Clapperboard className="w-3 h-3" />
                  <span>DIRECTOR ARCHIVE</span>
                </div>
              </div>

              {/* Editorial Description Column */}
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs font-mono text-mutedText">
                    <span className="text-accent uppercase tracking-wider">{featuredFilm.category}</span>
                    <span>•</span>
                    <span>{featuredFilm.role}</span>
                    {featuredFilm.year && (
                      <>
                        <span>•</span>
                        <span>{featuredFilm.year}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-primaryText">
                    {featuredFilm.title}
                  </h3>

                  <p className="text-sm sm:text-base text-mutedText/90 font-light leading-relaxed">
                    {featuredFilm.synopsis}
                  </p>

                  {/* Credits list if present */}
                  {featuredFilm.credits && featuredFilm.credits.length > 0 && (
                    <div className="pt-2 border-t border-surfaceBorder space-y-1.5">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-mutedText/60">
                        Production Credits
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {featuredFilm.credits.map((c) => (
                          <div key={c.role}>
                            <span className="text-mutedText/70 font-mono text-[10px] block">{c.role}</span>
                            <span className="text-primaryText font-serif">{c.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={() => setSelectedFilm(featuredFilm)}
                    className="px-6 py-3 bg-accent hover:bg-accentHover text-background font-medium tracking-wider uppercase text-xs rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-accent/10"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Project</span>
                  </button>

                  <button
                    onClick={() => setSelectedFilm(featuredFilm)}
                    className="px-5 py-3 border border-surfaceBorder hover:border-accent hover:text-accent text-primaryText font-medium tracking-wider uppercase text-xs rounded-full transition-colors flex items-center space-x-1.5"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Project Notes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Supporting Films Grid */}
        {supportingFilms.length > 0 && (
          <div className="space-y-6 text-left">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-mutedText/70">
              Additional Film Archive
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportingFilms.map((film) => (
                <div
                  key={film.id}
                  className="rounded-xl bg-surfaceBg border border-surfaceBorder overflow-hidden hover:border-accent/40 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-video bg-background overflow-hidden">
                    <VisualPlaceholder
                      type="film"
                      src={film.thumbnail}
                      alt={film.title}
                      badgeText={film.category}
                    />
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-all duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedFilm(film)}
                        className="w-12 h-12 rounded-full bg-accent/90 hover:bg-accent text-background flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                        aria-label={`Watch ${film.title}`}
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs font-mono text-mutedText">
                        <span className="text-accent">{film.category}</span>
                        <span>•</span>
                        <span>{film.role}</span>
                        {film.year && <span>• {film.year}</span>}
                      </div>
                      <h5 className="font-serif text-xl sm:text-2xl font-bold text-primaryText group-hover:text-accent transition-colors">
                        {film.title}
                      </h5>
                      <p className="text-xs text-mutedText/90 line-clamp-3 leading-relaxed">
                        {film.synopsis}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-surfaceBorder">
                      <button
                        onClick={() => setSelectedFilm(film)}
                        className="text-xs font-medium uppercase tracking-wider text-accent hover:text-accentHover flex items-center space-x-1.5"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Watch Video</span>
                      </button>
                      <button
                        onClick={() => setSelectedFilm(film)}
                        className="text-xs text-mutedText hover:text-primaryText transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video / Project Modal */}
      <AnimatePresence>
        {selectedFilm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-surfaceBg border border-surfaceBorder rounded-2xl overflow-hidden shadow-2xl space-y-6 text-left"
            >
              <div className="relative aspect-video bg-black flex items-center justify-center">
                {selectedFilm.videoEmbedUrl ? (
                  <iframe
                    src={selectedFilm.videoEmbedUrl}
                    title={selectedFilm.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center space-y-3">
                    <Film className="w-12 h-12 text-accent/60 stroke-[1.2]" />
                    <p className="text-sm font-serif text-primaryText">
                      Video Embed Placeholder
                    </p>
                    <p className="text-xs text-mutedText max-w-md">
                      Add the official YouTube or Vimeo embed URL for <strong className="text-accent">{selectedFilm.title}</strong> in <code className="text-accent">src/data.ts</code>.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setSelectedFilm(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background text-mutedText hover:text-primaryText border border-surfaceBorder z-30"
                  aria-label="Close video player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 pt-0 space-y-4">
                <div className="flex items-center space-x-3 text-xs font-mono text-mutedText">
                  <span className="text-accent uppercase tracking-wider">{selectedFilm.category}</span>
                  <span>•</span>
                  <span>{selectedFilm.role}</span>
                  {selectedFilm.year && <span>• {selectedFilm.year}</span>}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primaryText">
                  {selectedFilm.title}
                </h3>

                <p className="text-sm text-mutedText/90 font-light leading-relaxed">
                  {selectedFilm.synopsis}
                </p>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedFilm(null)}
                    className="px-6 py-2.5 bg-accent text-background rounded-full font-medium text-xs uppercase tracking-wider hover:bg-accentHover transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FilmProjects;
