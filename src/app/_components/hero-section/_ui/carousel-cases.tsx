"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import { CardCases } from "./card-cases";
import { imagesSwiper } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export function CarouselCases() {
  return (
    <section className="relative w-full min-h-60 bg-gradient-to-t from-zinc-950/90 via-zinc-800/20 to-zinc-700/00 rounded-md px-4">
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
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      >
        {imagesSwiper.map((item, index) => (
          <SwiperSlide key={index}>
            <CardCases
              index={index}
              source={item.src}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
