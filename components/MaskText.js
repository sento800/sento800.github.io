"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MaskTest({ phrases }) {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className=" text-stone-500 max-sm:text-2xl">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
