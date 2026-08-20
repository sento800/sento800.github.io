"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import SkillList from "@/components/SkillList";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-24">
        <section className="relative block py-12 lg:py-20">
          <Introduction />
        </section>
        
        <section className="py-12 lg:py-20 border-t border-border">
          <SkillList />
        </section>
        
        <section className="py-12 lg:py-20 border-t border-border">
          <About />
        </section>
        
        <section className="py-12 lg:py-20 border-t border-border">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
