import Uptrend from "/partners/Uptrend.svg";
import BDCConsulting from "/partners/BDCConsulting.svg";
import Solus from "/partners/Solus.svg";
import InputPR from "/partners/InputPR.svg";
import BestionLimited from "/partners/Bestion.png";
import BrightyApp from "/partners/Brighty.png";
import CryptoBattle from "/partners/CryptoBattle.avif";
import BetFury from "/partners/BetFury.webp";
import EvoSim from "/partners/EvoSim.svg";
import Rubic from "/partners/Rubic.png";
import Bingx from "/partners/Bingx.svg";
import BTCAlpha from "/partners/BTCAlpha.svg";
import Jade98 from "/partners/Jade98.svg";
import Walbi from "/partners/Walbi.svg";
import ChoiceAI from "/partners/ChoiceAI.svg";
import Pete from "/partners/Pete.png";
import YNation from "/partners/YNation.png";
import { motion } from "framer-motion";

interface PartnerOrClient {
  name: string;
  href: string;
  logo: string;
}

const partners: PartnerOrClient[] = [
  {
    name: "Uptrend Agency",
    href: "https://uptrend.agency/",
    logo: Uptrend,
  },
  {
    name: "BDC Consulting",
    href: "https://bdc.consulting/ru",
    logo: BDCConsulting,
  },
  {
    name: "Solus Agency",
    href: "https://solus.agency/",
    logo: Solus,
  },
  {
    name: "InputPR",
    href: "https://inputpr.com/",
    logo: InputPR,
  },
  {
    name: "Bestion Limited",
    href: "https://www.bestion-limited.com/",
    logo: BestionLimited,
  },
];

const clients: PartnerOrClient[] = [
  {
    name: "Brighty App",
    href: "https://brighty.app/",
    logo: BrightyApp,
  },
  {
    name: "Crypto Battle",
    href: "https://crypto-battle.com/",
    logo: CryptoBattle,
  },
  {
    name: "Bet Fury",
    href: "https://betfury.com/ru",
    logo: BetFury,
  },
  {
    name: "EvoSim",
    href: "https://evosim.com/ru",
    logo: EvoSim,
  },
  {
    name: "Rubic Exchange",
    href: "https://rubic.exchange/",
    logo: Rubic,
  },
  {
    name: "BingX",
    href: "https://bingx.com/ru-ru/",
    logo: Bingx,
  },
  {
    name: "BTC Alpha",
    href: "https://btc-alpha.com/ru",
    logo: BTCAlpha,
  },
  {
    name: "JadeARdinals",
    href: "https://jade98.io/",
    logo: Jade98,
  },
  {
    name: "Walbi",
    href: "https://www.walbi.com/",
    logo: Walbi,
  },
  {
    name: "Choice.ai",
    href: "https://choise.ai/",
    logo: ChoiceAI,
  },
  {
    name: "MyTarvelPete",
    href: "https://mytravelpete.com/",
    logo: Pete,
  },
  {
    name: "YNation Bot",
    href: "https://t.me/y_nation_bot",
    logo: YNation,
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
  hidden: { opacity: 0, y: -10, x: -10, scale: 0.5 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.15,
    },
  },
};

const Card: React.FC<PartnerOrClient> = ({ name, href, logo }) => {
  return (
    <a
      className="block rounded-3xl border border-gray-300 p-6 shadow-md transition hover:border-red-500 hover:shadow-red-500 h-32"
      href={href}
    >
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={logo}
          alt={name}
          className="max-w-full max-h-full object-cover"
        />
      </div>
    </a>
  );
};

export const Partners = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="my-8 grid grid-cols-1 gap-8 lg:grid-cols-5"
        >
          {partners.map((partner, index) => (
            <motion.div key={index} variants={item}>
              <Card
                name={partner.name}
                logo={partner.logo}
                href={partner.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Clients = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {clients.map((client, index) => (
            <motion.div key={index} variants={item}>
              <Card name={client.name} logo={client.logo} href={client.href} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
