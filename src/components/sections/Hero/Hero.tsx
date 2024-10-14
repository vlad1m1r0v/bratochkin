import { motion } from "framer-motion";
import { AnimText } from "./AnimatedText";

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

export const Hero = () => {
  return (
    <section className="relative h-auto md:h-[100vh] flex items-center justify-center overflow-hidden">
      <motion.img
        className="absolute w-full max-w-[1200px] h-auto"
        variants={imageAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        src="/background.png"
        alt="Background"
      />
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center text-center">
        <div className="mx-auto max-w-3xl flex items-center justify-center h-[200px]">
          <h1 className="text-2xl font-bold sm:text-5xl bg-red-500 text-neutral-50 px-1 py-2 w-full overflow-hidden">
            <AnimText delay={1} />
          </h1>
        </div>
      </div>
    </section>
  );
};
