import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimateMenuEffect({
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
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-200%", opacity: 0 },
      }}
      animate={isHidden ? "hidden" : "visible"}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.15, ease: "easeInOut" }}
      // transition={{ delay: 0.35, type: 'tween', stiffness: 120 }}
      className="fixed left-0 right-0 top-[6rem] z-10 mx-5 min-h-screen max-w-full rounded-lg bg-whiteBlur px-0 backdrop-blur-xl md:left-auto md:right-0 md:w-[30rem]"
    >
      {children}
    </motion.div>
  );
}
