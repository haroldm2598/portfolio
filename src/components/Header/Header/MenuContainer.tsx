"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import AnimateSection from "@/components/ui/Animated/AnimateSection";
import AnimateMenu from "@/components/ui/Animated/AnimateMenu";

// RTK LIB
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/redux/store";
import { SetIsActive } from "@/lib/redux/dataSlice/dataSlice";

export default function MenuContainer() {
  const { navLinks, isActive } = useAppSelector((state) => state.dataTemplate);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <AnimatePresence>
      {isActive && (
        <AnimateMenu>
          <motion.div>
            <ul className="flex flex-col gap-10 px-4 py-6 text-white">
              {navLinks?.map((item, index) => (
                <AnimateSection key={index}>
                  <motion.li
                    className={`text-grey100 text-2xl font-bold uppercase dark:text-white`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, type: "tween", stiffness: 90 }}
                  >
                    <Link
                      href={`#${item.path}`}
                      onClick={() => dispatch(SetIsActive(!isActive))}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                </AnimateSection>
              ))}
            </ul>
          </motion.div>
        </AnimateMenu>
      )}
    </AnimatePresence>
  );
}
