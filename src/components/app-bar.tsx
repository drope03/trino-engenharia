import Image from "next/image";
import Logo from "@/assets/logo.png";
import { InnerContainer, NavigationItems } from "@/components";

export function Appbar() {
  return (
    <header className="sticky top-0 w-full flex flex-col items-center z-10 transition-[background,backdrop-filter] ease-in-out bg-background my-5 lg:my-6 py-1">
      <InnerContainer className="flex-row items-center justify-between">
        <Image src={Logo} alt="Logo" width={60} height={32} />
        <NavigationItems />
      </InnerContainer>
    </header>
  );
}
