"use client";

import Image from "next/image";
import WhatsApp from "@/assets/whatsapp-icon.svg";
import { InnerContainer } from "./inner-container";

export const whatsappNumber = 11949638434;

export function WhatsAppIcon() {
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <section className="w-full flex items-center justify-center">
      <InnerContainer className="fixed bottom-14 z-10">
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
