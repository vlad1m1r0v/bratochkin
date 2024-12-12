import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "@/components/sections/Services/styles.module.css";
import InfluencerMarketingWeb3 from "/services/InfluencerMarketingWeb3.png";
import IGaming from "/services/IGaming.png";
import KOLRound from "/services/KOLRound.png";
import Web3Dev from "/services/Web3Dev.png";

interface ServiceProp {
  title: string;
  text: string;
  image: string;
}

const services: ServiceProp[] = [
  {
    title: "Influencer Marketing in Web3.0",
    text: "Our team is highly specialized in influencer (KOLs) marketing within\
      Web3. Over 5,400 crypto influencers work with us to promote crypto\
      startups and projects. We focus exclusively on influencer marketing,\
      delivering campaigns with a profitable ROI.",
    image: InfluencerMarketingWeb3,
  },
  {
    title: "Influencer Marketing for iGaming Products",
    text: "iGaming projects rely on us for our unparalleled expertise. We\
      specialize in boosting brand recognition through innovative strategies\
      that resonate with the target audience. Our tailored campaigns are\
      designed not only to capture attention but also to drive measurable\
      results, ensuring your marketing investments are both impactful and\
      profitable. Whether you’re launching a new platform or scaling an\
      existing brand, we deliver solutions that maximize your growth\
      potential and set you apart in a competitive industry.",
    image: IGaming,
  },
  {
    title: "KOL Round Investment",
    text: "Through our efforts, we have raised over $2.2 million\
      for projects within KOLs rounds. Influencers purchase allocations\
      and become stakeholders in the project. It's in their best\
      interest to promote the project, and building a strong community\
      together becomes easier and more cost-effective.",
    image: KOLRound,
  },
  {
    title: "Web 3.0 Development",
    text: "Our team includes experts in developing Web3 applications and services.\
      We have experience creating Telegram mini-apps, AI-powered applications, and\
      crypto wallets for major companies. We can either assemble a dedicated team\
      of specialists to integrate into your company or operate as an outsourced\
      team. There's a lot of information to share, so if you're interested in\
      Web3 development, book a call with us to get all the details.",
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
      "lg:flex-row": index % 2 == 0,
      "lg:flex-row-reverse": index % 2 != 0,
    })}
  >
    <div className="lg:h-fit lg:w-[50%] w-[100%] flex items-center justify-center">
      <img src={image} className={`${styles["expertise-image"]} w-[420px]`} />
    </div>
    <div
      className={clsx({
        "lg:h-96 lg:w-[50%] h-fit w-[100%] py-4 flex flex-col justify-center":
          true,
        "lg:pl-8": index % 2 == 0,
        "lg:pr-8": index % 2 != 0,
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
