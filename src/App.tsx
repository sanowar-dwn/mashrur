import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Music from "./components/Music";
import FilmProjects from "./components/FilmProjects";
import FeaturedHighlights from "./components/FeaturedHighlights";
import Gallery from "./components/Gallery";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="font-sans bg-background text-primaryText min-h-screen selection:bg-accent selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Music />
        <FilmProjects />
        <FeaturedHighlights />
        <Gallery />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
