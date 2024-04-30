"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "100vh",
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: (custom: number) => ({
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.5,
      delay: 0.2 * custom,
    },
  }),
};

interface AnimeStaggeredProps {
  children: React.ReactNode;
  custom: number;
}

export default function AnimeStaggered({
  children,
  custom,
}: AnimeStaggeredProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const inViewControl = useAnimation();

  useEffect(() => {
    if (isInView) inViewControl.start("open");
  }, [isInView]);

  return (
    <div ref={ref}>
      <AnimatePresence>
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
        >
          <div className="overflow-hidden">
            <motion.div
              variants={mobileLinkVars}
              initial="initial"
              animate={inViewControl}
              custom={custom}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
