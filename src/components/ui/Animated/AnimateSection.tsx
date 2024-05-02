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

const childVars = {
  initial: {
    y: "100vh",
    opacity: 0,
  },
  open: (customDelay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 1,
      delay: 0.5 * customDelay,
    },
  }),
};

interface AnimateProps {
  children: React.ReactNode;
  customDelay?: number;
}
export default function AnimateSection({
  children,
  customDelay = 1,
}: AnimateProps) {
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
              variants={childVars}
              initial="initial"
              animate={inViewControl}
              custom={customDelay}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
