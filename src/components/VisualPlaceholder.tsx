import React from "react";
import { Camera, Music, Film, User, Disc3, Sparkles } from "lucide-react";

interface VisualPlaceholderProps {
  type: "hero" | "portrait" | "album" | "film" | "gallery" | "highlight";
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  badgeText?: string;
}

export const VisualPlaceholder: React.FC<VisualPlaceholderProps> = ({
  type,
  src,
  alt,
  className = "",
  aspectRatio,
  badgeText,
}) => {
  // If an actual image source is provided and not empty, render real image
  if (src && src.trim() !== "") {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  // Otherwise, render a custom cinematic editorial placeholder
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#181715] to-[#0D0D0D] border border-surfaceBorder group select-none ${aspectRatio || ""} ${className}`}
    >
      {/* Ambient background glow & grain */}
      <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-60 pointer-events-none" />
      
      {/* Decorative fine-line grid framing */}
      <div className="absolute inset-3 border border-accent/15 pointer-events-none" />
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-accent/40" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-accent/40" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-accent/40" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-accent/40" />

      {/* Center Icon & Graphic depending on type */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-3">
        {type === "hero" || type === "portrait" ? (
          <div className="relative">
            <div className="w-24 h-24 rounded-full border border-accent/30 flex items-center justify-center bg-background/60 shadow-inner">
              <User className="w-10 h-10 text-accent/80 stroke-[1.2]" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-surfaceBg border border-accent/40 p-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
            </div>
          </div>
        ) : type === "album" ? (
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-accent/30 flex items-center justify-center bg-background/80 animate-spin-slow">
              <Disc3 className="w-10 h-10 text-accent/70" />
            </div>
          </div>
        ) : type === "film" ? (
          <div className="w-16 h-16 rounded-lg border border-accent/30 flex items-center justify-center bg-background/60">
            <Film className="w-8 h-8 text-accent/80 stroke-[1.5]" />
          </div>
        ) : type === "gallery" ? (
          <div className="w-12 h-12 rounded-lg border border-accent/25 flex items-center justify-center bg-background/60">
            <Camera className="w-6 h-6 text-accent/70 stroke-[1.5]" />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-lg border border-accent/25 flex items-center justify-center bg-background/60">
            <Music className="w-7 h-7 text-accent/70 stroke-[1.5]" />
          </div>
        )}

        <div className="max-w-xs">
          <span className="inline-block text-[10px] tracking-[0.25em] uppercase text-accent font-mono px-2 py-0.5 rounded bg-accent/10 border border-accent/20 mb-1.5">
            {badgeText || (type === "hero" ? "Portrait Placeholder" : "Media Asset")}
          </span>
          <p className="text-xs text-mutedText/80 font-serif italic line-clamp-2">
            {alt}
          </p>
        </div>
      </div>

      {/* Bottom corner technical detail */}
      <div className="absolute bottom-4 right-4 text-[9px] font-mono text-mutedText/40 tracking-wider">
        MHS · ARCHIVE
      </div>
    </div>
  );
};
