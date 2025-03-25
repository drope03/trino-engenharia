import Image from "next/image";
import ContactInfo from "./Contact Info.png";

export function InfoContact(){
  return(
    <Image src={ContactInfo} alt="Image" className="" />
  )
}