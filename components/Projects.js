"use client";
import { projects } from "@/assets/data-projects";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { use, useEffect, useRef } from "react";

export default function Projects() {
  const container = useRef(null);
  const scrollParallax = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div id="project" ref={container} className="relative mb-[500px]">
      <h1 className="text-6xl text-center max-lg:text-4xl">
        <span className="font-bold">My</span> Projects
      </h1>
      <div>
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
    </div>
  );
}
