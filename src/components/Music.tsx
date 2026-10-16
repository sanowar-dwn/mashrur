import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Disc3, ExternalLink, Volume2, Sparkles, X, Radio, Music as MusicIcon } from "lucide-react";
import { musicReleases, MusicRelease } from "../data";
import { VisualPlaceholder } from "./VisualPlaceholder";

export const Music: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<MusicRelease | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const featuredRelease = musicReleases.find((r) => r.featured) || musicReleases[0];
  const supportingReleases = musicReleases.filter((r) => r.id !== featuredRelease?.id);

  const handleListenNow = (release: MusicRelease) => {
    setActiveTrack(release);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="music" className="py-28 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-radial-gold opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-surfaceBorder pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-accent text-xs font-mono uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Discography</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-primaryText">
              Music & Compositions
            </h2>
          </div>
          <p className="text-sm text-mutedText/80 max-w-md font-light">
            Original Bengali songs, cross-border Hindi singles, and atmospheric melodies authored, composed, and performed by Mashrur Hossain Shovon.
          </p>
        </div>

        {/* Featured Release Spotlight Card */}
        {featuredRelease && (
          <div className="relative rounded-2xl bg-surfaceBg border border-surfaceBorder overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Artwork & Vinyl Disc Aesthetic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden shadow-2xl border border-surfaceBorder group">
                  <VisualPlaceholder
                    type="album"
                    src={featuredRelease.coverImage}
                    alt={featuredRelease.title}
                    badgeText={`${featuredRelease.language || "Official"} Release`}
                  />
                  {/* Floating Vinyl Badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md p-2 rounded-full border border-surfaceBorder shadow-md">
                    <Disc3 className="w-5 h-5 text-accent animate-spin-slow" />
                  </div>
                </div>
              </div>

              {/* Release Editorial Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="text-[11px] uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-accent/10 border border-accent/25 text-accent">
                      Spotlight {featuredRelease.type}
                    </span>
                    {featuredRelease.language && (
                      <span className="px-2.5 py-1 rounded bg-surfaceBorder/60 text-primaryText">
                        {featuredRelease.language}
                      </span>
                    )}
                    {featuredRelease.releaseDate && (
                      <span className="text-mutedText/80">
                        {featuredRelease.releaseDate}
                      </span>
                    )}
                    {featuredRelease.duration && (
                      <span className="text-mutedText/80">
                        • {featuredRelease.duration}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primaryText">
                    {featuredRelease.title}
                    {featuredRelease.bengaliTitle && (
                      <span className="text-2xl sm:text-3xl font-normal text-mutedText ml-3 font-serif">
                        ({featuredRelease.bengaliTitle})
                      </span>
                    )}
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-mutedText/90 font-light leading-relaxed">
                  {featuredRelease.description}
                </p>

                {featuredRelease.lyricsSnippet && (
                  <div className="p-4 rounded-xl bg-background/60 border border-surfaceBorder border-l-2 border-l-accent">
                    <p className="text-sm font-serif italic text-primaryText/90">
                      {featuredRelease.lyricsSnippet}
                    </p>
                  </div>
                )}

                {/* Credits summary if available */}
                {featuredRelease.credits && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono border-t border-surfaceBorder text-mutedText">
                    {featuredRelease.credits.lyricsAndMusic && (
                      <div>
                        <span className="text-[10px] uppercase text-mutedText/60 block">Lyrics & Music</span>
                        <span className="text-primaryText font-serif">{featuredRelease.credits.lyricsAndMusic}</span>
                      </div>
                    )}
                    {featuredRelease.credits.programming && (
                      <div>
                        <span className="text-[10px] uppercase text-mutedText/60 block">Programming</span>
                        <span className="text-primaryText font-serif">{featuredRelease.credits.programming}</span>
                      </div>
                    )}
                    {featuredRelease.credits.mixMaster && (
                      <div>
                        <span className="text-[10px] uppercase text-mutedText/60 block">Mix & Master</span>
                        <span className="text-primaryText font-serif">{featuredRelease.credits.mixMaster}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Listen Now CTA & Streaming Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleListenNow(featuredRelease)}
                    className="px-8 py-3.5 bg-accent hover:bg-accentHover text-background font-medium tracking-wider uppercase text-xs rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-accent/15"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Listen Preview</span>
                  </button>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-mutedText">
                    {featuredRelease.spotifyUrl && (
                      <a
                        href={featuredRelease.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full border border-surfaceBorder hover:border-accent hover:text-accent transition-colors flex items-center space-x-1.5"
                      >
                        <span>Spotify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {featuredRelease.youtubeUrl && (
                      <a
                        href={featuredRelease.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full border border-surfaceBorder hover:border-accent hover:text-accent transition-colors flex items-center space-x-1.5"
                      >
                        <span>YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {featuredRelease.appleMusicUrl && (
                      <a
                        href={featuredRelease.appleMusicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full border border-surfaceBorder hover:border-accent hover:text-accent transition-colors flex items-center space-x-1.5"
                      >
                        <span>Apple Music</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Supporting Releases Grid */}
        {supportingReleases.length > 0 && (
          <div className="space-y-6 text-left">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-mutedText/70">
              Discography Archive ({supportingReleases.length} Tracks)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingReleases.map((release) => (
                <div
                  key={release.id}
                  className="rounded-xl bg-surfaceBg border border-surfaceBorder p-6 flex flex-col justify-between space-y-4 hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="w-full aspect-video rounded-lg overflow-hidden border border-surfaceBorder bg-background">
                      <VisualPlaceholder
                        type="album"
                        src={release.coverImage}
                        alt={release.title}
                        badgeText={release.language || release.type}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono text-mutedText">
                        <span className="text-accent">{release.language || release.type}</span>
                        {release.duration && <span>{release.duration}</span>}
                      </div>
                      <h5 className="font-serif text-xl font-bold text-primaryText group-hover:text-accent transition-colors">
                        {release.title}
                        {release.bengaliTitle && (
                          <span className="text-base text-mutedText ml-2 font-serif font-normal">
                            ({release.bengaliTitle})
                          </span>
                        )}
                      </h5>
                      <p className="text-xs text-mutedText line-clamp-3 leading-relaxed">
                        {release.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-surfaceBorder">
                    <button
                      onClick={() => handleListenNow(release)}
                      className="text-xs font-medium uppercase tracking-wider text-accent hover:text-accentHover flex items-center space-x-1"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Preview</span>
                    </button>

                    <div className="flex items-center space-x-3 text-xs text-mutedText">
                      {release.spotifyUrl && (
                        <a
                          href={release.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          Spotify
                        </a>
                      )}
                      {release.youtubeUrl && (
                        <a
                          href={release.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          YouTube
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Audio Player Preview Drawer */}
      <AnimatePresence>
        {activeTrack && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-surfaceBg/95 backdrop-blur-xl border-t border-surfaceBorder shadow-2xl"
          >
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Track Info */}
              <div className="flex items-center space-x-4 w-full sm:w-auto text-left">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-surfaceBorder bg-background flex-shrink-0">
                  <VisualPlaceholder
                    type="album"
                    src={activeTrack.coverImage}
                    alt={activeTrack.title}
                  />
                </div>
                <div className="truncate">
                  <p className="font-serif text-sm sm:text-base font-semibold text-primaryText truncate">
                    {activeTrack.title} {activeTrack.bengaliTitle && `(${activeTrack.bengaliTitle})`}
                  </p>
                  <p className="text-[11px] font-mono text-accent">
                    {activeTrack.language || "Original"} · Gaaner Manush Mashrur
                  </p>
                </div>
              </div>

              {/* Player Controls & Simulated Waveform */}
              <div className="flex flex-col items-center space-y-2 w-full sm:max-w-md">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center hover:bg-accentHover transition-colors shadow-md"
                    aria-label={isPlaying ? "Pause audio" : "Play audio"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>
                  <div className="flex items-center space-x-2">
                    <Radio className="w-4 h-4 text-accent animate-pulse" />
                    <span className="text-[10px] font-mono text-mutedText uppercase tracking-wider">
                      {isPlaying ? "Simulated Waveform Stream" : "Paused"}
                    </span>
                  </div>
                </div>

                {/* Animated Waveform Bars */}
                <div className="w-full flex items-center justify-center space-x-1 h-5">
                  {[40, 75, 55, 90, 60, 30, 85, 45, 95, 65, 35, 80, 50, 70, 40, 80, 55, 65].map((height, i) => (
                    <span
                      key={i}
                      className="w-1 bg-accent/70 rounded-full transition-all duration-300"
                      style={{
                        height: isPlaying ? `${Math.max(15, (height * (i % 2 === 0 ? 1 : 0.7)))}%` : "20%",
                        opacity: isPlaying ? 0.9 : 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Direct Streaming Actions & Close */}
              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                {activeTrack.spotifyUrl && (
                  <a
                    href={activeTrack.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono hover:bg-accent hover:text-background transition-colors"
                  >
                    Open Spotify
                  </a>
                )}
                {activeTrack.youtubeUrl && (
                  <a
                    href={activeTrack.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-surfaceBorder border border-surfaceBorder text-primaryText text-xs font-mono hover:border-accent transition-colors"
                  >
                    Open YouTube
                  </a>
                )}
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveTrack(null);
                  }}
                  className="p-2 rounded-full border border-surfaceBorder hover:text-accent text-mutedText transition-colors"
                  aria-label="Close audio preview player"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Music;
