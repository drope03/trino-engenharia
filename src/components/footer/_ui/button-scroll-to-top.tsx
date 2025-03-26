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
      variant={"default"}
      onClick={scrollToTop}
      className="w-[170px] h-10 bg-white/20 sm:bg-primary-dark text-white hover:text-turquoise sm:text-turquoise sm:size-8 sm:absolute sm:-top-9 sm:left-0 sm:z-[5] rounded-full"
    >
      <h3 className="sm:hidden">Voltar ao topo</h3>
      <ArrowUp />
    </Button>
  );
}
