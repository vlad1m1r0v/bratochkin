import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import MarketingWorkshopV2 from "/events/MarketingWorkshopV2.jpg";
import VCStartupConnect from "/events/VCStartupConnect.jpg";
import EncryptedConference from "/events/EncryptedConference.jpg";

interface Event {
  image: string;
  title: string;
}

const events: Event[] = [
  {
    image: VCStartupConnect,
    title: "VC Startup Connect",
  },
  {
    image: MarketingWorkshopV2,
    title: "Marketing CryptoWorkshop V2 🚀",
  },
  {
    image: EncryptedConference,
    title: "Encrypted Conference",
  },
];

export function Events() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {events.map(({ image, title }, index) => (
            <SwiperSlide
              className="relative md:w-1/3 aspect-video rounded-3xl overflow-hidden flex justify-center items-center mb-9"
              key={index}
            >
              <img src={image} className="object-cover w-full h-full" />
              <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-sm text-white text-center py-2">
                {title}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
