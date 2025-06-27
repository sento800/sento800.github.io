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
    <>
      <Header />
      <main className="px-8 mx-20 max-sm:px-4 max-sm:mx-0">
        <section className="lg:relative block">
          <Introduction />
        </section>
        <section className="mb-16 border-b-2">
          <SkillList />
        </section>
        <section className="mb-16 border-b-2">
          <About />
        </section>
        <section>
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
