"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";

const containerVars = {
  initial: {},
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
    },
  },
};

const parentVars = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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

export default function AnimateSectionBackground({
  children,
  customDelay = 1,
}: AnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("open");
  }, [isInView, controls]);

  return (
    <div ref={ref}>
      <AnimatePresence>
        {/* 🔹 NEW animated parent */}
        <motion.div
          className="rounded-lg bg-none lg:bg-blackBlur lg:px-4 lg:py-10"
          variants={parentVars}
          initial="initial"
          animate={controls}
          exit="initial"
        >
          {/* Container for stagger */}
          <motion.div variants={containerVars}>
            <div className="overflow-hidden">
              <motion.div variants={childVars} custom={customDelay}>
                {children}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
