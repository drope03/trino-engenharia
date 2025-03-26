import { Button } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import { Title, SpanWeightColor } from "@/components";

export function TextsSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center md:items-start justify-between">
      <article className="w-full flex flex-col items-center sm:items-start gap-2">
        <Title typography="h1" color="gradient" font="poppins">
          Excelência em construção civil <br /> Qualidade e competência do
          início ao fim
        </Title>
      </article>
      <div className="w-full md:w-auto hidden md:flex md:flex-col gap-4 justify-center md:justify-end">
        <Title
          typography="h6"
          color="secondary"
          className="w-full text-start font-normal whitespace-nowrap hidden xl:block"
        >
          Descubra{" "}
          <SpanWeightColor> serviço que você precisa hoje!</SpanWeightColor>{" "}
          <br />
          Temos novos{" "}
          <SpanWeightColor>
            serviços disponíveis todos os dias.
          </SpanWeightColor>{" "}
          <br />
          Explore e solicite o serviço que{" "}
          <SpanWeightColor>atende às suas necessidades.</SpanWeightColor>
        </Title>
        <div className="w-full flex items-end justify-end">
          <Button className="rounded-full">
            Entrar em contato
            <div className="size-6 flex items-center justify-center bg-white rounded-full text-text-primary">
              <ArrowUpRight className="m-auto" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
