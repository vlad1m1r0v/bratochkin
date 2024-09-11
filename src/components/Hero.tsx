import { motion } from "framer-motion";

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

const titleAnimation = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.5,
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
        src="/background.png"
        alt="Background"
      />
      <motion.div
        variants={titleAnimation}
        initial="hidden"
        whileInView="show"
        className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center text-center bg-gradient-to-r from-pink-300 to-yellow-400 bg-clip-text text-transparent"
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold sm:text-7xl">
            Marketing in Crypto & Web 3.0
            <strong className="font-extrabold sm:block">
              Boost your metrics
            </strong>
          </h1>
        </div>
      </motion.div>
    </section>
  );
};
