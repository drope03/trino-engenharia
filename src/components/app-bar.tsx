import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import { InnerContainer, NavigationItems } from "@/components";

export function Appbar() {
  return (
    <header className="sticky top-4 w-full flex flex-col items-center z-10 my-4 ">
      <InnerContainer className="flex-row items-center justify-between bg-[#1e1e1ef6] rounded-4xl py-2 px-4">
        <div className="lg:w-[177.993px]">
          <Image src={Logo} alt="Logo" width={60} height={32} />
        </div>
        <NavigationItems />
        <Button className=" rounded-full hidden lg:flex">
          Entre em contato
          <div className="size-6 flex items-center justify-center bg-white rounded-full text-text-primary">
            <ArrowUpRight className="m-auto" />
          </div>
        </Button>
      </InnerContainer>
    </header>
  );
}
