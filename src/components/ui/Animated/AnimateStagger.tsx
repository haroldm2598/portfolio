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
    y: 500,
    opacity: 0,
  },
  open: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.75,
      delay: 0.25 * custom,
    },
  }),
};

/* ===================== HOVER VARIANTS ===================== */

const cardHoverVariants = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.05,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

/* ===================== PROPS ===================== */

interface AnimateProps {
  children: React.ReactNode;
  custom: number;
  hoverTitle?: string; // ✅ NEW
}

export default function AnimateStagger({
  children,
  custom,
  hoverTitle,
}: AnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const inViewControl = useAnimation();

  useEffect(() => {
    if (isInView) inViewControl.start("open");
  }, [isInView, inViewControl]);

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
            {/* 🔥 CARD HOVER HANDLED HERE */}
            <motion.div
              className="relative"
              variants={cardHoverVariants}
              initial="hidden"
              whileHover="visible"
            >
              {/* EXISTING STAGGER LOGIC */}
              <motion.div
                variants={mobileLinkVars}
                initial="initial"
                animate={inViewControl}
                custom={custom}
              >
                {children}
              </motion.div>

              {/* 🔥 TITLE OVERLAY (OPTIONAL) */}
              {hoverTitle && (
                <motion.div
                  variants={titleVariants}
                  className="pointer-events-none absolute inset-0 m-[0.05rem] flex items-center justify-center rounded-lg bg-black/40 px-2 text-center text-sm font-medium text-white"
                >
                  {hoverTitle}
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
