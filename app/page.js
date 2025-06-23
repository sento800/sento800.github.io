"use client";
import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import SkillList from "@/components/SkillList";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });
  });

  return (
    <main className="px-8">
      <section className="relative block">
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
  );
}

export default App;
