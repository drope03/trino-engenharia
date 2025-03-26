"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui";

export function ButtonScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant={"highlight"}
      onClick={scrollToTop}
      className="w-[170px] h-10 bg-light/20 sm:bg-highlight text-white hover:text-turquoise sm:text-turquoise sm:size-8 sm:absolute sm:-top-11 sm:right-0 sm:z-[5]"
    >
      <h3 className="sm:hidden">Voltar ao topo</h3>
      <ArrowUp />
    </Button>
  );
}
