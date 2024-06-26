"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimeStaggeredProps {
  text: string;
  className?: string;
  once: boolean;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 1,
    },
  },
};

export default function AnimateParagraph({
  text,
  className,
  once,
}: AnimeStaggeredProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const inViewControl = useAnimation();

  useEffect(() => {
    if (isInView) inViewControl.start("open");
  }, [isInView]);

  return (
    <div className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split(" ").map((char, index) => {
          return (
            <div key={index} className="inline-block overflow-hidden">
              <motion.span
                variants={defaultAnimations}
                className="inline-block"
              >
                {char}
              </motion.span>

              <span className="inline-block">&nbsp;</span>
            </div>
          );
        })}
      </motion.span>
    </div>
  );
}
