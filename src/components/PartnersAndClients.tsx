import Uptrend from "@/assets/partners/Uptrend.svg";
import BDCConsulting from "@/assets/partners/BDCConsulting.svg";
import Solus from "@/assets/partners/Solus.svg";
import InputPR from "@/assets/partners/InputPR.svg";
import BestionLimited from "@/assets/partners/Bestion.png";
import BrightyApp from "@/assets/partners/Brighty.png";
import CryptoBattle from "@/assets/partners/CryptoBattle.avif";
import BetFury from "@/assets/partners/BetFury.webp";
import EvoSim from "@/assets/partners/EvoSim.svg";
import Rubic from "@/assets/partners/Rubic.png";
import Bingx from "@/assets/partners/Bingx.svg";
import BTCAlpha from "@/assets/partners/BTCAlpha.svg";
import Jade98 from "@/assets/partners/Jade98.svg";
import Walbi from "@/assets/partners/Walbi.svg";
import ChoiceAI from "@/assets/partners/ChoiceAI.svg";
import Pete from "@/assets/partners/Pete.png";
import YNation from "@/assets/partners/YNation.png";

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
        <div className="my-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {partners.map((partner) => (
            <Card name={partner.name} logo={partner.logo} href={partner.href} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Clients = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <Card name={client.name} logo={client.logo} href={client.href} />
          ))}
        </div>
      </div>
    </section>
  );
};
