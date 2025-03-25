"use client";

import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "@/assets/carousel/carousel-1.webp";
import Image2 from "@/assets/carousel/carousel-2.webp";
import Image3 from "@/assets/carousel/carousel-3.webp";
import Image4 from "@/assets/carousel/carousel-4.webp";
import Image5 from "@/assets/carousel/carousel-5.webp";
import Image6 from "@/assets/carousel/carousel-6.webp";
import Image7 from "@/assets/carousel/carousel-7.webp";
import Image8 from "@/assets/carousel/carousel-8.webp";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

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
        className="w-full relative -top-10"
      >
        {images.map((src, index) => (
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
