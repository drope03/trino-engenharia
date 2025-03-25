"use client";

import "swiper/css";
import Image from "next/image";
import "swiper/css/effect-fade";
import { imagesSwiper } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export function CarouselCases() {
  return (
    <section className="w-full h-[416px] bg-zinc-300/25 rounded-md p-4 relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          100: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade]}
        loop={true}
        className="w-full relative -top-10"
      >
        {imagesSwiper.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-lg overflow-hidden rounded-md">
              <div className="p-0">
                <Image
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
