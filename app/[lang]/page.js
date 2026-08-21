"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import SkillList from "@/components/SkillList";
import Lenis from "lenis";
import { useEffect } from "react";
import { getDictionary } from "@/dictionaries/dictionaries";

function App({ params }) {
  const lang = params?.lang || 'vi';
  const dict = getDictionary(lang);

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
      <Header dict={dict} lang={lang} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Introduction dict={dict} />
        <SkillList dict={dict} />
        <About dict={dict} />
        <Projects dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}

export default App;
