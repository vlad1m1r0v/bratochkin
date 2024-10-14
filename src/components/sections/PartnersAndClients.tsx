import Uptrend from "/partners/Uptrend.svg";
import BDCConsulting from "/partners/BDCConsulting.svg";
import Solus from "/partners/Solus.svg";
import InputPR from "/partners/InputPR.svg";
import TulukoGroup from "/partners/TulukoGroup.svg";
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
import Tokeniza from "/partners/Tokeniza.svg";
import Fuse from "/partners/Fuse.svg";
import Denet from "/partners/Denet.svg";
import OneInch from "/partners/1Inch.svg";
import SynesisOne from "/partners/SynesisOne.svg";
import BoundlessPay from "/partners/BoundlessPay.svg";
import NebulaFinance from "/partners/NebulaFinance.png";
import Soulbound from "/partners/Soulbound.webp";

import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";
import { useCallback, useEffect, useState } from "react";

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
    name: "Tuluko Group",
    href: "https://www.tuluko.eu/",
    logo: TulukoGroup,
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
  {
    name: "Tokeniza",
    href: "https://tokeniza.com.br/",
    logo: Tokeniza,
  },
  {
    name: "Fuse",
    href: "https://www.fuse.io/",
    logo: Fuse,
  },
  {
    name: "DeNet",
    href: "https://denet.pro/",
    logo: Denet,
  },
  {
    name: "1Inch",
    href: "https://1inch.io/",
    logo: OneInch,
  },
  {
    name: "Synesis One",
    href: "https://www.synesis.one/",
    logo: SynesisOne,
  },
  {
    name: "Boundless Pay",
    href: "https://www.boundlesspay.com/",
    logo: BoundlessPay,
  },
  {
    name: "Nebula Finance",
    href: "https://nebulafi.xyz/",
    logo: NebulaFinance,
  },
  {
    name: "Soulbound Beta",
    href: "https://soulbound.gg/",
    logo: Soulbound,
  },
];

const item = {
  hidden: { opacity: 0, y: -10, x: -10, scale: 0.5 },
  show: ({ index, items }: { index: number; items: number }) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.15,
      delay: (index % items) * 0.15,
    },
  }),
};

const Card: React.FC<PartnerOrClient> = ({ name, href, logo }) => {
  return (
    <a
      className="block rounded-3xl border border-gray-300 p-6 shadow-md transition hover:border-red-500 hover:shadow-red-500 h-32"
      href={href}
    >
      <div className="h-full flex items-center justify-center overflow-hidden">
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
      <div className="mx-auto max-w-screen-xl px-4 mask-gradient bg-gray-50">
        <Ticker duration={15}>
          {partners.map((partner, index) => (
            <div className="m-4 w-[250px]">
              <Card
                key={index}
                name={partner.name}
                logo={partner.logo}
                href={partner.href}
              />
            </div>
          ))}
        </Ticker>
      </div>
    </section>
  );
};

export const Clients = () => {
  const [itemsInRow, setItemsInRow] = useState(0);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    if (width < 768) return setItemsInRow(2);
    if (width < 1024) return setItemsInRow(3);
    return setItemsInRow(4);
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
        <div className="my-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={item}
              initial="hidden"
              whileInView="show"
              custom={{ index, items: itemsInRow }}
              viewport={{ once: true }}
            >
              <Card name={client.name} logo={client.logo} href={client.href} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
