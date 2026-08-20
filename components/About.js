"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animation = {
    initial: { x: "-100%", opacity: 0 },
    enter: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const textAnimation = {
    initial: { x: "100%", opacity: 0 },
    enter: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="container mx-auto min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full max-w-6xl">
        <motion.div
          initial="initial"
          variants={animation}
          animate={isInView ? "enter" : ""}
          className="w-full lg:w-1/2 flex justify-center"
        >
          {/* SVG Illustration - Simplified container for better responsive scaling */}
          <div className="relative w-[300px] h-[350px] md:w-[450px] md:h-[500px] lg:w-[530px] lg:h-[572px] opacity-80 dark:opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
            <svg
              className="w-full h-full"
              viewBox="0 0 530 572"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M515.447 0H14C7.37258 0 2 5.37261 2 12V513.447C2 520.074 7.37261 525.447 14 525.447H515.447C522.074 525.447 527.447 520.074 527.447 513.447V12C527.447 5.37258 522.074 0 515.447 0Z" stroke="currentColor" strokeWidth="4" strokeMiterlimit="10"/>
              <path d="M113.085 526.403H387.62C388.773 515.912 346.721 292.825 297.324 221.108C291.716 212.969 243.71 207.047 226.087 227.292C132.734 334.5 110.83 523.833 113.085 526.403Z" fill="currentColor"/>
              <path d="M303.835 239.622C311.627 259.809 341.023 330.584 357 381.378C367.721 415.465 371.803 444.073 374.149 451.59C374.149 451.59 293.088 425.552 274.836 425.507C246.728 425.437 201.638 484.145 212.699 491.496C230.086 503.063 312.967 542.399 379.154 554.748C415.131 561.464 482.921 515.733 477.563 479.377C470.046 428.353 377.84 293.857 342.76 255.72C324.547 235.924 294.337 215.02 303.835 239.622Z" fill="#FF9581"/>
              <path d="M482.504 490.163C480.806 526.916 434.831 557.856 408.165 559.49C362.178 562.278 224.222 522.103 224.222 522.103L277.848 418.791C277.848 418.791 371.72 450.654 374.104 451.551V451.513C373.277 448.777 350.143 361.845 339.806 333.039C339.255 331.449 338.614 329.822 338.011 328.111C335.038 320.132 330.956 309.596 326.444 298.215L326.399 298.132C323.9 291.832 321.259 285.244 318.664 278.746V278.707C307.327 250.542 296.279 223.735 296.279 223.735C312.082 226.331 327.687 234.636 353.308 261.526C378.878 288.384 485.311 429.532 482.504 490.163Z" fill="currentColor"/>
              <path d="M259.975 499.75C263.801 492.438 267.691 485.157 271.53 477.852C275.298 470.7 279.111 463.574 282.956 456.46C286.929 449.103 291.101 441.759 294.312 434.03C294.37 433.883 294.171 433.761 294.075 433.889C289.249 440.253 285.276 447.27 281.309 454.185C277.201 461.35 273.196 468.579 269.229 475.827C265.339 482.927 261.596 490.098 257.905 497.295C254.111 504.703 250.279 512.381 247.536 520.251C247.427 520.565 247.863 520.872 248.068 520.565C252.503 513.983 256.297 506.773 259.975 499.75Z" fill="#2B454E"/>
              <path d="M402.814 466.797L374.149 451.596L374.104 451.558V451.519C373.277 448.783 350.143 361.851 339.806 333.045C339.255 331.456 338.614 329.828 338.011 328.117C335.038 320.138 330.956 309.603 326.444 298.221L402.814 466.797Z" fill="#1C1C1C"/>
              <path d="M426.545 479.409C418.586 473.462 410.005 468.143 401.36 463.253C397.04 460.805 392.631 458.556 388.101 456.531C383.281 454.378 378.187 452.82 373.399 450.654C373.034 450.488 372.765 451.052 373.13 451.218C377.603 453.243 381.852 456.063 386.172 458.415C390.664 460.863 395.176 463.273 399.726 465.612C408.659 470.207 417.432 475.083 426.315 479.775C426.526 479.89 426.744 479.557 426.545 479.409Z" fill="#1C1C1C"/>
              <path d="M405.672 457.153C398.476 457.249 355.039 445.649 348.714 451.609C310.16 487.952 297.971 480.633 289.762 485.369C226.234 521.917 141.398 564.854 111.118 565.123C65.1944 565.495 46.9045 526.954 54.5499 490.541C69.642 418.56 166.718 278.208 210.642 240.91C233.931 221.165 232.091 250.946 222.459 283.322C216.807 302.304 206.925 330.527 196.845 358.224C187.918 382.897 164.257 445.944 163.847 447.424V447.463C163.809 447.546 163.77 447.591 163.777 447.636C163.745 447.802 163.911 447.835 164.283 447.732C166.302 447.36 220.627 421.758 275.259 407.692C294.51 402.738 334.602 395.676 348.976 402.091C357.525 405.904 357.666 411.005 357.666 411.005C357.666 411.005 364.517 410.383 371.746 416.33C376.539 420.278 378.026 425.86 378.026 425.86C378.026 425.86 385.524 426.911 389.427 431.256C394.079 436.44 394.49 441.926 394.49 441.926C404.615 444.63 405.672 457.153 405.672 457.153Z" fill="currentColor"/>
              <path d="M234.61 418.624C244.665 415.222 249.209 415.202 249.209 415.202L306.366 511.721C306.366 511.721 148.935 568.398 116.616 571.711C84.2919 575.024 47.5198 549.57 46.8982 508.991C46.0266 451.955 139.033 314.986 185.822 262.02C207.265 237.744 232.264 220.114 238.641 224.094C246.171 228.791 232.495 259.315 225.286 282.085C211.982 324.118 164.296 447.732 164.296 447.732C164.296 447.732 222.633 422.681 234.61 418.624Z" fill="currentColor"/>
            </svg>
          </div>
        </motion.div>
        
        <motion.div 
          initial="initial"
          variants={textAnimation}
          animate={isInView ? "enter" : ""}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <div className="glass-card p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
              About <span className="font-bold text-primary">Me</span>
            </h2>
            
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6 relative z-10">
              <p>
                As a highly motivated and detail-oriented Frontend Developer, I
                possess a strong foundation in React.js, dedicated to crafting
                intuitive and visually compelling web experiences. My passion lies
                in delivering pixel-perfect designs and developing clean,
                efficient, and highly performant code that significantly enhances
                user interaction.
              </p>
              <p>
                Having recently completed my intensive web development training, I
                have diligently acquired a comprehensive understanding of modern
                frontend technologies, including Next.js, TypeScript, and Tailwind
                CSS. I am committed to continuous learning, readily adapting to
                new challenges, and eager to contribute my skills to innovative
                and user-centric web applications.
              </p>
              <p>
                I am actively seeking opportunities to collaborate within dynamic
                and experienced development teams, contribute to impactful
                projects, and further refine my expertise. My objective is to
                consistently deliver high-quality code while actively
                participating in the successful evolution of digital products.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
