"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
//@ts-ignore
export default function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
