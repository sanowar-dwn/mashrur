import React from "react";
import { Youtube, Facebook, Instagram, Disc, ArrowUpRight, Sparkles } from "lucide-react";
import { socialLinks } from "../data";

export const Social: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "youtube":
        return Youtube;
      case "facebook":
        return Facebook;
      case "instagram":
        return Instagram;
      case "spotify":
        return Disc;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="social" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden border-t border-surfaceBorder">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-accent text-xs font-mono uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Channels</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primaryText">
            Follow the Journey
          </h2>
          <p className="text-sm text-mutedText font-light">
            Stay connected for upcoming song releases, film teasers, studio updates, and behind-the-scenes insights across verified platforms.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => {
            const Icon = getIcon(link.platform);

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-surfaceBg border border-surfaceBorder hover:border-accent/40 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-lg text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-background border border-surfaceBorder flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div className="p-1.5 rounded-full text-mutedText group-hover:text-accent transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-mutedText/70">
                    {link.verified ? "Verified Official" : "Official Profile"}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primaryText group-hover:text-accent transition-colors">
                    {link.platform}
                  </h3>
                  <p className="text-xs font-mono text-mutedText truncate">
                    {link.handle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Helper Note for Owner */}
        <p className="text-center text-[11px] font-mono text-mutedText/50 tracking-wider">
          Links can be updated anytime in <code className="text-accent/80">src/data.ts</code>
        </p>
      </div>
    </section>
  );
};

export default Social;
