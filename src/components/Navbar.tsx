import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavItemProps> = ({ href, children, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-xs uppercase tracking-[0.2em] font-medium text-mutedText hover:text-accent transition-colors duration-200 py-1 relative group focus-visible:ring-1 focus-visible:ring-accent"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    const contactElem = document.querySelector("#contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-surfaceBorder py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Personal Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex flex-col focus-visible:ring-1 focus-visible:ring-accent"
        >
          <span className="font-display text-xl md:text-2xl font-bold tracking-[0.25em] text-primaryText group-hover:text-accent transition-colors duration-300">
            MASHRUR
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-mutedText/70 -mt-0.5 group-hover:text-mutedText transition-colors">
            Gaaner Manush
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#music">Music</NavLink>
          <NavLink href="#film">Film & Projects</NavLink>
          <NavLink href="#highlights">Selected</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={scrollToContact}
            className="group flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium"
          >
            <span>Let’s Collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-primaryText hover:text-accent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Slide-in Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[73px] bg-background/95 backdrop-blur-xl z-40 flex flex-col justify-between px-8 py-10 transition-all duration-300 border-t border-surfaceBorder"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col space-y-6 pt-4">
            <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
            <NavLink href="#about" onClick={closeMenu}>About</NavLink>
            <NavLink href="#music" onClick={closeMenu}>Music</NavLink>
            <NavLink href="#film" onClick={closeMenu}>Film & Projects</NavLink>
            <NavLink href="#highlights" onClick={closeMenu}>Selected Work</NavLink>
            <NavLink href="#gallery" onClick={closeMenu}>Gallery</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
          </nav>

          <div className="pt-8 border-t border-surfaceBorder">
            <button
              onClick={scrollToContact}
              className="w-full flex items-center justify-center space-x-2 py-3.5 bg-accent text-background rounded-full font-medium tracking-wider uppercase text-xs hover:bg-accentHover transition-colors"
            >
              <span>Let’s Collaborate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] text-mutedText/60 tracking-widest uppercase mt-4">
              Mashrur Hossain Shovon · Portfolio
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
