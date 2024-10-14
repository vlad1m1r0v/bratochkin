import InfluencerMarketingWeb3 from "/services/InfluencerMarketingWeb3.png";
import IGaming from "/services/IGaming.png";
import KOLRound from "/services/KOLRound.png";
import Web3Dev from "/services/Web3Dev.png";
import clsx from "clsx";
import { motion } from "framer-motion";

interface ServiceProp {
  title: string;
  text: string;
  image: string;
}

const services: ServiceProp[] = [
  {
    title: "Influencer Marketing in Web3.0",
    text: "Unlock the power of Web3.0 with targeted influencer marketing!\
      We connect your brand with top influencers in the decentralized\
      world, amplifying your message to engaged crypto-native audiences.\
      From NFT launches to blockchain projects, our strategies are tailored\
      to increase brand visibility, build trust, and drive engagement in\
      the ever-evolving Web3 space.",
    image: InfluencerMarketingWeb3,
  },
  {
    title: "Influencer Marketing for iGaming Products",
    text: "Supercharge your iGaming brand with influencer marketing that\
      delivers results! We partner with leading gaming influencers who\
      resonate with your target audience, enhancing your reach and\
      credibility. Whether it’s online casinos, esports, or betting\
      platforms, our campaigns are designed to captivate gamers and drive\
      player acquisition, turning followers into loyal players.",
    image: IGaming,
  },
  {
    title: "KOL Round Investment",
    text: "Leverage the influence of Key Opinion Leaders (KOLs) to\
      attract strategic investors to your project! Our KOL Round\
      Investment service connects you with top-tier industry\
      leaders who not only endorse your project but also open doors\
      to investment opportunities. Boost your credibility and secure\
      the funds you need by aligning with the voices that matter most\
      in the crypto world.",
    image: KOLRound,
  },
  {
    title: "Web 3.0 Development",
    text: "Bring your Web3.0 vision to life with cutting-edge development\
      services! From decentralized apps (dApps) to blockchain integration\
      , our team of experts specializes in creating robust, secure, and\
      scalable solutions tailored to your needs. Step into the future of\
      the internet with Web3.0 technology that puts you ahead of the curve\
      and at the heart of the decentralized revolution.",
    image: Web3Dev,
  },
];

const animation = {
  hidden: {
    opacity: 0,
    scale: 0.0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
};

const Service: React.FC<ServiceProp & { index: number }> = ({
  title,
  text,
  image,
  index,
}) => (
  <div
    className={clsx({
      "flex flex-col": true,
      "xl:flex-row": index % 2 == 0,
      "xl:flex-row-reverse": index % 2 != 0,
    })}
  >
    <div className="xl:h-96 w-[100%] xl:w-[50%] rounded-3xl overflow-hidden">
      <img src={image} className="w-full h-full object-cover" />
    </div>
    <div
      className={clsx({
        "h-fit xl:h-96 w-[100%] xl:w-[50%] py-4": true,
        "xl:pl-8": index % 2 == 0,
        "xl:pr-8": index % 2 != 0,
      })}
    >
      <div className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
        <p className="text-4xl font-bold mb-4">{title}</p>
      </div>
      <p className="text-lg font-light">{text}</p>
    </div>
  </div>
);

export const Services = () => (
  <>
    <section className="overflow-x-hidden">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="my-8 grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={animation}
              initial="hidden"
              whileInView="show"
              // custom={index}
              style={{ originX: index % 2 == 0 ? 0 : 1 }}
              viewport={{ once: true }}
            >
              <Service
                title={service.title}
                text={service.text}
                image={service.image}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);
