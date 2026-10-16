import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { galleryItems, GalleryItem } from "../data";
import { VisualPlaceholder } from "./VisualPlaceholder";

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Studio Sessions",
    "Film Sets",
    "Live Stage",
    "Behind The Scenes",
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  const currentItem: GalleryItem | undefined =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : undefined;

  return (
    <section id="gallery" className="py-28 px-6 md:px-12 bg-secondaryBg relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-surfaceBorder pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-accent text-xs font-mono uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Behind the Scenes & Moments</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-primaryText">
              Visual Archive
            </h2>
          </div>
          <p className="text-sm text-mutedText/80 max-w-md font-light">
            Unfiltered captures from studio microphones, camera monitors, live stage resonance, and creative rehearsals.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-background font-medium shadow-md shadow-accent/20"
                  : "bg-surfaceBg border border-surfaceBorder text-mutedText hover:text-primaryText hover:border-accent/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surfaceBg border border-surfaceBorder group cursor-pointer shadow-lg"
            >
              <VisualPlaceholder
                type="gallery"
                src={item.image}
                alt={item.title}
                badgeText={item.category}
              />

              {/* Hover Overlay with Metadata */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-surfaceBg/80 border border-surfaceBorder text-accent">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-primaryText">
                    {item.title}
                  </h4>
                  <p className="text-xs text-mutedText font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Fullscreen Viewer */}
      <AnimatePresence>
        {currentItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-background/90 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Close Bar */}
            <div className="absolute top-6 right-6 z-50 flex items-center space-x-3">
              <span className="text-xs font-mono text-mutedText">
                {(lightboxIndex ?? 0) + 1} / {filteredItems.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-surfaceBg/80 hover:bg-surfaceBg text-mutedText hover:text-primaryText border border-surfaceBorder transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surfaceBg/70 hover:bg-surfaceBg text-primaryText border border-surfaceBorder transition-colors z-40"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surfaceBg/70 hover:bg-surfaceBg text-primaryText border border-surfaceBorder transition-colors z-40"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full flex flex-col items-center space-y-4"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-surfaceBorder bg-black shadow-2xl">
                <VisualPlaceholder
                  type="gallery"
                  src={currentItem.image}
                  alt={currentItem.title}
                  badgeText={currentItem.category}
                />
              </div>

              {/* Caption & Metadata */}
              <div className="text-center max-w-xl space-y-1">
                <div className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-accent">
                  {currentItem.category}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primaryText">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-mutedText font-light">
                  {currentItem.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
