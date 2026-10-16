import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Compass } from "lucide-react";
import { artistInfo } from "../data";
import { VisualPlaceholder } from "./VisualPlaceholder";

export const Hero: React.FC = () => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#music");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-background"
    >
      {/* Cinematic ambient background glow & film grain */}
      <div className="absolute inset-0 bg-radial-gold opacity-40 pointer-events-none" />
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Decorative vertical editorial lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-surfaceBorder/50 pointer-events-none hidden sm:block" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-surfaceBorder/50 pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Typography & Story Hook */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center space-x-2.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              {artistInfo.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight text-primaryText leading-[1.08]">
            Stories that move. <br />
            <span className="italic font-normal text-accent">Music that stays.</span>
          </h1>

          {/* Name & Professional Moniker */}
          <div className="pt-2 border-l-2 border-accent/40 pl-4 space-y-1">
            <h2 className="font-display text-xl sm:text-2xl tracking-[0.15em] text-primaryText font-semibold uppercase">
              {artistInfo.name}
            </h2>
            <p className="text-sm font-serif italic text-mutedText">
              Professionally known as{" "}
              <span className="text-primaryText font-medium not-italic tracking-wide">
                {artistInfo.professionalMoniker}
              </span>
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-mutedText/90 max-w-xl font-light leading-relaxed">
            {artistInfo.heroSupporting}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={scrollToWork}
              className="px-8 py-3.5 bg-accent hover:bg-accentHover text-background font-medium tracking-wider uppercase text-xs rounded-full transition-all duration-300 shadow-lg shadow-accent/10 hover:shadow-accent/20 flex items-center space-x-2"
            >
              <span>Explore My Work</span>
              <Compass className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 border border-accent/40 hover:border-accent hover:bg-accent/10 text-primaryText hover:text-accent font-medium tracking-wider uppercase text-xs rounded-full transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Quick Stats / Editorial Metadata Banner */}
          <div className="pt-8 border-t border-surfaceBorder grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-mutedText/70 font-mono">Disciplines</p>
              <p className="text-sm font-serif text-primaryText mt-0.5">Sound & Screen</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-mutedText/70 font-mono">Origin</p>
              <p className="text-sm font-serif text-primaryText mt-0.5">{artistInfo.location}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-mutedText/70 font-mono">Status</p>
              <p className="text-sm font-serif text-accent mt-0.5">Available for Projects</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Cinematic Portrait Frame Placeholder */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-md sm:max-w-sm lg:max-w-full">
            {/* Ambient halo behind portrait frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent/20 via-transparent to-accent/10 blur-xl opacity-50" />
            
            {/* Portrait Container */}
            <div className="relative rounded-xl overflow-hidden border border-surfaceBorder bg-surfaceBg shadow-2xl aspect-[3/4]">
              <VisualPlaceholder
                type="hero"
                src={artistInfo.portraitImage}
                alt="Portrait of Mashrur Hossain Shovon"
                badgeText="Official Artist Portrait"
              />

              {/* Editorial Frame Watermark */}
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-1.5 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-surfaceBorder text-[10px] tracking-widest font-mono text-accent">
                <Sparkles className="w-3 h-3" />
                <span>CINEMATIC ARCHIVE</span>
              </div>

              {/* Bottom metadata tag inside frame */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background via-background/80 to-transparent p-5 z-20">
                <p className="text-xs font-serif text-primaryText font-medium">
                  {artistInfo.name}
                </p>
                <p className="text-[11px] text-accent/80 font-mono tracking-wider">
                  {artistInfo.professionalMoniker}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector("#about");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 text-mutedText/60 hover:text-accent transition-colors duration-300 group cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono group-hover:text-accent transition-colors">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-accent/70" />
      </motion.a>
    </section>
  );
};

export default Hero;
