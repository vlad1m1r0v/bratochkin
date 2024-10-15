import { useCallback, useEffect, useState } from "react";
import Counter from "./Counter";
import { motion } from "framer-motion";

interface StatsBlockProps {
  number: number;
  text: string;
}

const blocks: StatsBlockProps[] = [
  {
    number: 37,
    text: "Satisfied clients",
  },
  {
    number: 5_400,
    text: "KOLs working with us",
  },
  {
    number: 2_200_000,
    text: "Raised in KOL investment rounds",
  },
  {
    number: 11,
    text: "Clients on a permanent basis",
  },
  {
    number: 21,
    text: "Celebrity work with us",
  },
];

const item = {
  hidden: { opacity: 0, y: -20, x: -20, scale: 0.0 },
  show: ({ index, items }: { index: number; items: number }) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.3,
      delay: (index % items) * 0.3,
    },
  }),
};

const Block = ({ number, text }: StatsBlockProps) => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent text-4xl font-bold">
        <Counter value={number} />
      </div>
      <p className="lg:text-lg font-light">{text}</p>
    </>
  );
};

export const Stats = () => {
  const [itemsInRow, setItemsInRow] = useState(0);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    if (width < 768) return setItemsInRow(1);
    if (width < 1024) return setItemsInRow(2);
    return setItemsInRow(3);
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="my-8 grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              variants={item}
              initial="hidden"
              whileInView="show"
              custom={{ index, items: itemsInRow }}
              viewport={{ once: true }}
            >
              <Block key={index} {...block} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
