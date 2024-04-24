"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StickyNavbar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isHidden, SetIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      SetIsHidden(true);
    } else {
      SetIsHidden(false);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-200%", opacity: 0 },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed left-0 right-0 top-5 z-10 mx-5 max-w-full rounded-lg bg-whiteBlur px-4 py-2 shadow-lg backdrop-blur-xl backdrop-filter lg:mx-auto lg:max-w-[85rem] lg:px-6"
    >
      {children}
    </motion.header>
  );
}
