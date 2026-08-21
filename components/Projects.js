"use client";
import { projects } from "@/assets/data-projects";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Projects() {
  const container = useRef(null);
  const scrollParallax = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="project" ref={container} className="relative min-h-screen w-full border-t border-border mt-20 pt-20 mb-[200px] lg:mb-[400px]">
      <h2 className="text-4xl lg:text-5xl text-center tracking-tight mb-20">
        <span className="font-bold text-primary">My</span> Projects
      </h2>
      <div className="flex flex-col">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <Card
              key={index}
              i={index}
              project={project}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollParallax.scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
}
