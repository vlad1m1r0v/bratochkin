import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import MarketingWorkshopV2 from "/events/MarketingWorkshopV2.jpg";
import VCStartupConnect from "/events/VCStartupConnect.jpg";
import EncryptedConference from "/events/EncryptedConference.jpg";

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
          {[MarketingWorkshopV2, VCStartupConnect, EncryptedConference].map(
            (image, index) => (
              <SwiperSlide
                className="w-full lg:w-[720px] aspect-video rounded-3xl overflow-hidden flex justify-center items-center"
                key={index}
              >
                <img src={image} className="object-contain" />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}
