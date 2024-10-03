import { motion } from "framer-motion";

const cursorAnimation = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function CursorBlinker() {
  return (
    <motion.div
      variants={cursorAnimation}
      animate="blinking"
      className="inline-block h-[0.8em] w-[2px] bg-neutral-50 translate-y[0.15em] ml-1"
    />
  );
}
