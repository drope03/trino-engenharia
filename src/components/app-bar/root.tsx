import Image from "next/image";
import Logo from "@/assets/logo.png";
import { InfoTop, NavigationItems } from "./_ui";
import { InnerContainer } from "../inner-container";

export function Appbar() {
  return (
    <header className="w-full flex flex-col items-center">
      <InfoTop />
      <InnerContainer className="flex-row items-center justify-between py-1">
        <Image src={Logo} alt="Logo" width={60} height={32} />
        <NavigationItems />
      </InnerContainer>
    </header>
  );
}
