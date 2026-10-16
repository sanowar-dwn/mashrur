import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { artistInfo, socialLinks } from "../data";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Film & Projects", href: "#film" },
    { label: "Selected Work", href: "#highlights" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background text-mutedText py-16 px-6 md:px-12 border-t border-surfaceBorder relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Tier: Wordmark & Statement */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-surfaceBorder text-left">
          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.2em] text-primaryText uppercase">
              {artistInfo.name}
            </h3>
            <p className="text-xs font-mono text-accent uppercase tracking-widest">
              {artistInfo.professionalMoniker}
            </p>
            <p className="text-sm font-serif italic text-mutedText/80 max-w-md pt-1">
              "{artistInfo.heroSupporting}"
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto p-4 rounded-full border border-surfaceBorder hover:border-accent hover:text-accent bg-surfaceBg transition-all duration-300 group shadow-lg"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Middle Tier: Navigation Links & Social Media */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs">
          {/* Internal Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 font-mono uppercase tracking-wider" aria-label="Footer Navigation">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Channels */}
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mutedText hover:text-accent transition-colors"
              >
                {s.platform}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Copyright & Credits */}
        <div className="pt-6 border-t border-surfaceBorder flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-mutedText/60">
          <p>
            © {new Date().getFullYear()} Mashrur Hossain Shovon. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-accent fill-current inline" />
            <span>for independent storytelling.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
