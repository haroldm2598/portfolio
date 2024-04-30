"use client";
import { useRef, useEffect, ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";

const parentVars = {
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
    transition: {
      ease: [0.37, 0, 0.63, 1],
      duration: 0.5,
      delay: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.5,
      delay: 1.5,
    },
  },
};

interface TestProps {
  children: ReactNode;
  once: boolean;
}

export default function TestAnimateSection({ children, once }: TestProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const inViewControl = useAnimation();

  useEffect(() => {
    if (isInView) inViewControl.start("open");
  }, [isInView]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        variants={parentVars}
        initial="initial"
        animate="open"
        exit="initial"
      >
        <div className="overflow-hidden">
          <motion.div
            variants={childVars}
            initial="initial"
            animate={inViewControl}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
