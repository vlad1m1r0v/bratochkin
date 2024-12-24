import Instagram from "/socials/instagram.svg";
import Telegram from "/socials/telegram.svg";
import LinkedIn from "/socials/linkedin.svg";
import Bratochkin from "/bratochkin.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Social {
  logo: string;
  href: string;
}

const socials: Social[] = [
  {
    logo: Instagram,
    href: "https://www.instagram.com/simplemaker/",
  },
  {
    logo: Telegram,
    href: "https://t.me/simplemaker",
  },
  {
    logo: LinkedIn,
    href: "https://www.linkedin.com/in/oleg-br%C3%A1tochkin-229188185/",
  },
];

interface Location {
  country: string;
  address: string;
  icon: React.ReactNode;
}

const locations: Location[] = [
  {
    country: "Ukraine",
    address: "Dilova Street, 1/2, Kyiv, 03150",
    icon: <span className="fi fi-ua"></span>,
  },
  {
    country: "Poland",
    address: "Warsaw, Grzybowska St. 73/8a",
    icon: <span className="fi fi-pl"></span>,
  },
  {
    country: "Estonia",
    address: "Tallinn, Kesklinna linnaosa, Vesivärava tn 50-201",
    icon: <span className="fi fi-ee"></span>,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.25,
    },
  },
};

export const Contacts = () => {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (mounted.current) return;

    // @ts-ignore
    Calendly.initInlineWidget({
      url: "https://calendly.com/lucidmediabook/30min",
      parentElement: document.getElementById("calendly-embed"),
    });

    mounted.current = true;
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-4 px-4 pb-4">
        {/* Calendly Embed */}
        <div
          id="calendly-embed"
          className="flex-1 flex justify-center items-center"
        >
          {/* Calendly widget will be rendered here */}
        </div>

        {/* Content Block */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[80%] flex flex-col">
            {/* Gradient Circle */}
            <div>
              <div className="rounded-b-full overflow-hidden h-fit">
                <img
                  className="relative w-[85%] m-auto z-10"
                  src={Bratochkin}
                  alt="Oleg Bratochkin"
                />
                <div className="absolute w-full aspect-square bg-gradient-to-r from-yellow-300 to-red-600 rounded-full bottom-0" />
                {/* <div className="absolute">
                  <p className="text-4xl">Oleg Bratochkin</p>
                  <p>Founder & CEO</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-neutral-600" />
      <div className="text-slate-800 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 pt-4 px-4 pb-6 gap-3">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {locations.map((location, index) => (
            <motion.div key={index} variants={item}>
              <p className="text-xl font-bold">
                {location.icon} {location.country}
              </p>
              <p className="text-lg font-light">{location.address}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-end justify-center flex-row md:flex-col gap-3"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              variants={item}
              href={social.href}
              target="_blank"
            >
              <img className="w-10 lg:w-12 rounded-md" src={social.logo} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
