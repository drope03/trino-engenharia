import Image from "next/image";
import WhatsApp from "@/assets/whatsapp-icon.svg";
import { InnerContainer } from "./inner-container";

export function WhatsAppIcon() {
  return (
    <InnerContainer className="fixed bottom-14 z-10">
      <Image
        width={44}
        height={44}
        src={WhatsApp}
        alt="Icone do WhatsApp"
        className="absolute right-0 cursor-pointer"
      />
    </InnerContainer>
  );
}
