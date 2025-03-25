import Image from "next/image";
import WhatsApp from "@/assets/whatsapp-icon.svg";

export function WhatsAppIcon(){
  return(
    <Image src={WhatsApp} alt="Icone do WhatsApp" width={44} height={44} className="absolute right-0"/>
  )
}