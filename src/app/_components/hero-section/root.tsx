import { Button } from "@/components/ui";
import { CarouselCases } from "./carousel-cases";
import { InnerContainer, Title } from "@/components";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  function TextsSection() {
    return (
      <section className="w-full flex flex-col md:flex-row items-center md:items-start justify-between">
        <article className="w-full flex flex-col items-center lg:items-start gap-2">
          <Title typography="h1" color="primary" font="poppins">
            Excelência em construção civil <br /> Qualidade e competência do
            início ao fim
          </Title>
        </article>
        <div className="w-full md:w-auto flex md:flex-col gap-4 justify-center md:justify-end">
          <Title typography="h6" className="text-start">
            Descubra o serviço que você precisa hoje! Temos novos serviços
            disponíveis todos os dias. Explore e solicite o serviço que atende
            às suas necessidades.
          </Title>
          
          <div className="w-full flex items-end justify-end">
            <Button className="rounded-full">
              Entrar em contato
              <div className="size-6 bg-white rounded-full text-text-primary">
                <ArrowUpRight className="m-auto" />
              </div>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <InnerContainer className="gap-20 ">
      <TextsSection />
      <CarouselCases />
    </InnerContainer>
  );
}
