import { animate, motion } from "framer-motion";
const totalSteps = 10;
function reverseindex(index: number) {
  return totalSteps - index - 1;
}
const stairAnimation = {
  intital: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: { top: ["100%", "0%"] },
};
export default function Stairs() {
  return (
    <>
      {[...Array(totalSteps)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseindex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}
