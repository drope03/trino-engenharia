"use client";

import Image from "next/image";
import WhatsApp from "@/assets/whatsapp-icon.svg";
import { InnerContainer } from "./inner-container";
import { whatsappNumber } from "@/constants/config-app";

export function WhatsAppIcon() {
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <section className="w-full flex items-center justify-center">
      <InnerContainer className="fixed bottom-14 lg:w-[95%] xl:w-[1280px] 2xl:w-[1510px] z-10">
        <Image
          width={44}
          height={44}
          src={WhatsApp}
          alt="Ícone do WhatsApp"
          className="absolute right-0 cursor-pointer rounded-full"
          onClick={handleClick}
        />
      </InnerContainer>
    </section>
  );
}
