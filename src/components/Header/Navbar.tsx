"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { loraSoftSemibold, loraSoftMedium } from "@/lib/fonts";
import { useAppSelector } from "@/lib/redux/store";

import MenuButton from "./Header/MenuButton";
import MenuContainer from "./Header/MenuContainer";
import StickyHeader from "./Header/StickyHeader";
import ThemeSwitch from "../ThemeSwitch";
import { cn } from "@/utils/cn";

const headerAnimateVariants = {
  initial: { opacity: 0, y: "-100%" },
  open: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 0.5, delay: 0.2 },
  },
};

export default function Navbar() {
  const { navLinks } = useAppSelector((state) => state.dataTemplate);

  return (
    <>
      <StickyHeader>
        <AnimatePresence>
          <motion.div
            className="relative flex items-center justify-between text-white lg:flex-row"
            variants={headerAnimateVariants}
            initial="initial"
            animate="open"
          >
            <h1
              className={cn(
                "text-3xl font-bold text-grey100 dark:text-white lg:text-[2.5rem]",
                loraSoftSemibold.className,
              )}
            >
              RoldDev
            </h1>
            {/* */}
            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((item, index) => {
                return (
                  <li
                    className={cn(
                      "relative cursor-pointer text-xl uppercase text-grey100 transition-all delay-100 duration-300 ease-in-out after:absolute after:block after:h-[3px]  after:w-full after:origin-left after:scale-x-0 after:bg-gray-400 after:transition after:duration-300 after:content-[''] hover:text-gray-400 after:hover:scale-x-100 dark:text-white dark:after:bg-blue100 dark:hover:text-blue100",
                      loraSoftMedium.className,
                    )}
                    key={index}
                  >
                    <Link href={`#${item.path}`}>{item.name}</Link>
                  </li>
                );
              })}

              <ThemeSwitch />
            </ul>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeSwitch />
              <MenuButton />
            </div>
          </motion.div>
        </AnimatePresence>
      </StickyHeader>

      <MenuContainer />
    </>
  );
}
