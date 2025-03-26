"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import { CardCases } from "./card-cases";
import { imagesSwiper } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export function CarouselCases() {
  return (
    <section className="relative w-full h-[416px] bg-zinc-300/25 rounded-md p-4">
      <Swiper
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        className="w-full -top-10"
        breakpoints={{
          100: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {imagesSwiper.map((src, index) => (
          <SwiperSlide key={index}>
            <CardCases source={src} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
